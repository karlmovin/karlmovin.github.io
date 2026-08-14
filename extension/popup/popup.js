// @ts-check
import { getConfig, setConfig, getGrants } from "../lib/storage.js";
import { matchSite } from "../lib/match.js";

const activeEl = /** @type {HTMLInputElement} */ (
	document.getElementById("active")
);
const statusLine = /** @type {HTMLElement} */ (
	document.getElementById("status-line")
);
const statusSub = /** @type {HTMLElement} */ (
	document.getElementById("status-sub")
);
const blockBtn = /** @type {HTMLButtonElement} */ (
	document.getElementById("block-this")
);
const clearBtn = /** @type {HTMLButtonElement} */ (
	document.getElementById("clear-pass")
);
const optsBtn = /** @type {HTMLButtonElement} */ (
	document.getElementById("open-options")
);

let currentTab = null;
let currentSite = null;

async function init() {
	const [tab] = await chrome.tabs.query({
		active: true,
		currentWindow: true,
	});
	currentTab = tab || null;
	const config = await getConfig();
	activeEl.checked = config.active;

	if (!tab?.url) {
		statusLine.textContent = "No active tab.";
		return;
	}

	currentSite = matchSite(tab.url, config);
	const url = new URL(tab.url);

	if (currentSite) {
		statusLine.textContent = `Blocked: ${currentSite.label}`;
		const grants = await getGrants();
		let activeGrant = null;
		for (const g of Object.values(grants)) {
			if (g.siteId === currentSite.id && g.expiresAt > Date.now()) {
				activeGrant = g;
				break;
			}
		}
		if (activeGrant) {
			const t = new Date(activeGrant.expiresAt);
			statusSub.textContent = `Pass until ${pad(t.getHours())}:${pad(t.getMinutes())}`;
			clearBtn.hidden = false;
		} else {
			statusSub.textContent = "No active pass.";
		}
		blockBtn.textContent = "Edit this site…";
	} else {
		if (url.protocol === "http:" || url.protocol === "https:") {
			statusLine.textContent = "Not blocked";
			statusSub.textContent = url.hostname;
		} else {
			statusLine.textContent = "Not a web page";
			statusSub.textContent = url.protocol;
			blockBtn.disabled = true;
		}
	}
}

activeEl.addEventListener("change", async () => {
	const config = await getConfig();
	const nextActive = activeEl.checked;
	if (!nextActive && config.sites.some((s) => s.active)) {
		const ok = confirm(
			"Turn Gatekeeper OFF? You'll be able to browse blocked sites without picking a reason.",
		);
		if (!ok) {
			activeEl.checked = true;
			return;
		}
	}
	config.active = nextActive;
	await setConfig(config);
});

blockBtn.addEventListener("click", async () => {
	if (!currentTab?.url) return;
	const url = new URL(currentTab.url);
	const prefill = { host: url.hostname };
	if (currentSite) prefill.editId = currentSite.id;
	const params = new URLSearchParams();
	for (const [k, v] of Object.entries(prefill)) params.set(k, String(v));
	const optionsUrl = chrome.runtime.getURL(
		`options/options.html?${params.toString()}`,
	);
	await chrome.tabs.create({ url: optionsUrl });
});

clearBtn.addEventListener("click", async () => {
	if (!currentSite) return;
	await chrome.runtime.sendMessage({
		type: "CLEAR_GRANTS_FOR_SITE",
		siteId: currentSite.id,
	});
	await init();
});

optsBtn.addEventListener("click", () => {
	chrome.runtime.openOptionsPage();
});

/** @param {number} n */
function pad(n) {
	return n < 10 ? `0${n}` : `${n}`;
}

init();
