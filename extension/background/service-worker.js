// @ts-check
import {
	CONFIG_KEY,
	getConfig,
	getGrants,
	setGrants,
} from "../lib/storage.js";
import { activeMatchPatterns } from "../lib/match.js";
import { pickRandomBookmark } from "../lib/bookmarks.js";
import { clearGrantsForTab } from "../lib/grants.js";

const SCRIPT_ID = "gk-gate";

async function ensureSessionAccess() {
	try {
		await chrome.storage.session.setAccessLevel({
			accessLevel: "TRUSTED_AND_UNTRUSTED_CONTEXTS",
		});
	} catch (e) {
		console.warn("Gatekeeper: setAccessLevel failed", e);
	}
}

/**
 * Filter match patterns to those covered by granted host permissions.
 * @param {string[]} patterns
 */
async function filterToGrantedOrigins(patterns) {
	const kept = [];
	for (const p of patterns) {
		try {
			const ok = await chrome.permissions.contains({ origins: [p] });
			if (ok) kept.push(p);
		} catch {
			// ignore
		}
	}
	return kept;
}

async function syncRegistrations() {
	const config = await getConfig();
	const wantedRaw = activeMatchPatterns(config);
	const wanted = await filterToGrantedOrigins(wantedRaw);

	let existing = [];
	try {
		existing = await chrome.scripting.getRegisteredContentScripts({
			ids: [SCRIPT_ID],
		});
	} catch {
		existing = [];
	}

	if (!wanted.length) {
		if (existing.length) {
			try {
				await chrome.scripting.unregisterContentScripts({ ids: [SCRIPT_ID] });
			} catch (e) {
				console.warn("Gatekeeper: unregister failed", e);
			}
		}
		return;
	}

	/** @type {chrome.scripting.RegisteredContentScript} */
	const spec = {
		id: SCRIPT_ID,
		matches: wanted,
		js: ["content/globals.js", "ui/prompt.js", "content/gate.js"],
		runAt: "document_start",
		allFrames: false,
		persistAcrossSessions: true,
		world: "ISOLATED",
	};

	try {
		if (existing.length) {
			await chrome.scripting.updateContentScripts([spec]);
		} else {
			await chrome.scripting.registerContentScripts([spec]);
		}
	} catch (e) {
		console.warn("Gatekeeper: register/update failed", e, "wanted:", wanted);
	}
}

chrome.runtime.onInstalled.addListener(async () => {
	await ensureSessionAccess();
	await syncRegistrations();
});

chrome.runtime.onStartup.addListener(async () => {
	await ensureSessionAccess();
	await syncRegistrations();
});

// Also re-run once at module load (SW cold-start) — onInstalled fires only once.
(async () => {
	await ensureSessionAccess();
	await syncRegistrations();
})();

chrome.storage.onChanged.addListener((changes, area) => {
	if (area === "local" && changes[CONFIG_KEY]) {
		syncRegistrations();
	}
});

chrome.permissions.onAdded.addListener(() => {
	syncRegistrations();
});
chrome.permissions.onRemoved.addListener(() => {
	syncRegistrations();
});

chrome.tabs.onRemoved.addListener((tabId) => {
	clearGrantsForTab(tabId).catch(() => {});
});

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
	if (!msg || typeof msg !== "object") return false;
	if (msg.type === "PICK_RANDOM_BOOKMARK") {
		pickRandomBookmark()
			.then((url) => sendResponse({ url }))
			.catch(() => sendResponse({ url: null }));
		return true; // async response
	}
	if (msg.type === "OPEN_OPTIONS") {
		chrome.runtime.openOptionsPage().catch(() => {});
		sendResponse({ ok: true });
		return false;
	}
	if (msg.type === "CLEAR_ALL_GRANTS") {
		setGrants({})
			.then(() => sendResponse({ ok: true }))
			.catch(() => sendResponse({ ok: false }));
		return true;
	}
	if (msg.type === "CLEAR_GRANTS_FOR_SITE") {
		(async () => {
			const grants = await getGrants();
			for (const [k, g] of Object.entries(grants)) {
				if (g.siteId === msg.siteId) delete grants[k];
			}
			await setGrants(grants);
			sendResponse({ ok: true });
		})();
		return true;
	}
	return false;
});
