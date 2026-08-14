// @ts-check
/** @import {BlockedSite, Config, DenyAction, Reason} from "../lib/types.js" */
import { getConfig, setConfig } from "../lib/storage.js";
import {
	isValidMatchPattern,
	normalizeHost,
	siteToMatchPatterns,
} from "../lib/match.js";

const $ = (id) => document.getElementById(id);
const sitesEl = /** @type {HTMLElement} */ ($("sites"));
const globalActive = /** @type {HTMLInputElement} */ ($("global-active"));
const defaultMinutes = /** @type {HTMLInputElement} */ ($("default-minutes"));

/** @type {Config} */
let config;

async function load() {
	config = await getConfig();
	globalActive.checked = config.active;
	defaultMinutes.value = String(config.defaultGrantMinutes);
	renderSites();
	handleQueryParams();
}

function renderSites() {
	sitesEl.textContent = "";
	if (!config.sites.length) {
		const empty = document.createElement("div");
		empty.className = "empty";
		empty.textContent = "No sites configured. Click “Add site” to start.";
		sitesEl.appendChild(empty);
		return;
	}
	for (const site of config.sites) {
		sitesEl.appendChild(renderSite(site));
	}
}

/** @param {BlockedSite} site */
function renderSite(site) {
	const tpl = /** @type {HTMLTemplateElement} */ (
		document.getElementById("site-template")
	);
	const node = /** @type {HTMLElement} */ (
		tpl.content.firstElementChild.cloneNode(true)
	);
	node.dataset.siteId = site.id;

	const q = (sel) => /** @type {HTMLInputElement} */ (node.querySelector(sel));
	const qs = (sel) => /** @type {HTMLSelectElement} */ (node.querySelector(sel));
	const qt = (sel) =>
		/** @type {HTMLTextAreaElement} */ (node.querySelector(sel));

	q(".site-label").value = site.label || "";
	q(".site-active").checked = site.active;
	updateActiveBadge(node, site.active);
	q(".site-active").addEventListener("change", (e) => {
		updateActiveBadge(node, /** @type {HTMLInputElement} */ (e.target).checked);
	});

	qs(".match-type").value = site.matchType;
	q(".pattern").value = site.pattern;
	updatePatternHint(node);
	qs(".match-type").addEventListener("change", () => updatePatternHint(node));
	q(".pattern").addEventListener("input", () => updatePatternHint(node));

	q(".grant-minutes").value = String(site.grantMinutes);
	qs(".grant-scope").value = site.grantScope;

	const reasonsList = /** @type {HTMLElement} */ (
		node.querySelector(".reasons-list")
	);
	for (const r of site.reasons) reasonsList.appendChild(makeReasonRow(r));
	node.querySelector(".add-reason")?.addEventListener("click", () => {
		reasonsList.appendChild(
			makeReasonRow({ id: crypto.randomUUID(), text: "", valid: false }),
		);
	});

	// deny action fields
	const denySel = qs(".deny-type");
	denySel.value = site.denyAction.type;
	if (site.denyAction.type === "redirectUrl") {
		q(".deny-url").value = site.denyAction.url || "";
	} else if (site.denyAction.type === "randomBookmark") {
		q(".deny-fallback").value = site.denyAction.fallbackUrl || "";
	}
	const msg =
		"message" in site.denyAction ? site.denyAction.message || "" : "";
	qt(".deny-message").value = msg;
	updateDenyFieldsVisibility(node);
	denySel.addEventListener("change", () => updateDenyFieldsVisibility(node));

	// Expand / collapse
	const expandBtn = /** @type {HTMLButtonElement} */ (
		node.querySelector(".expand-btn")
	);
	const body = /** @type {HTMLElement} */ (node.querySelector(".site-body"));
	body.hidden = true;
	expandBtn.addEventListener("click", () => {
		body.hidden = !body.hidden;
		expandBtn.textContent = body.hidden ? "Edit ▾" : "Collapse ▴";
	});

	node.querySelector(".delete-btn")?.addEventListener("click", async () => {
		if (!confirm(`Delete "${site.label || site.pattern}"?`)) return;
		config.sites = config.sites.filter((s) => s.id !== site.id);
		await persistConfig();
		renderSites();
	});

	node.querySelector(".save-btn")?.addEventListener("click", async () => {
		await saveSite(node, site.id);
	});

	return node;
}

/** @param {HTMLElement} node @param {boolean} active */
function updateActiveBadge(node, active) {
	const badge = /** @type {HTMLElement} */ (node.querySelector(".badge"));
	badge.textContent = active ? "on" : "off";
	badge.classList.toggle("on", active);
	badge.classList.toggle("off", !active);
}

/** @param {HTMLElement} node */
function updatePatternHint(node) {
	const type = /** @type {HTMLSelectElement} */ (
		node.querySelector(".match-type")
	).value;
	const pattern = /** @type {HTMLInputElement} */ (
		node.querySelector(".pattern")
	).value;
	const label = /** @type {HTMLElement} */ (
		node.querySelector(".pattern-label")
	);
	const hint = /** @type {HTMLElement} */ (node.querySelector(".pattern-hint"));
	if (type === "domain") {
		label.textContent = "Domain";
		const h = normalizeHost(pattern);
		if (!h) hint.textContent = "Enter a domain like facebook.com";
		else hint.textContent = `Will match ${h} and all subdomains.`;
	} else {
		label.textContent = "Match pattern";
		if (!pattern) {
			hint.textContent = "Example: *://*.reddit.com/*";
		} else if (isValidMatchPattern(pattern)) {
			hint.textContent = "Valid match pattern.";
		} else {
			hint.textContent = "Invalid match pattern.";
		}
	}
}

/** @param {HTMLElement} node */
function updateDenyFieldsVisibility(node) {
	const type = /** @type {HTMLSelectElement} */ (
		node.querySelector(".deny-type")
	).value;
	const urlField = /** @type {HTMLElement} */ (
		node.querySelector(".deny-url-field")
	);
	const fbField = /** @type {HTMLElement} */ (
		node.querySelector(".deny-fallback-field")
	);
	const msgField = /** @type {HTMLElement} */ (
		node.querySelector(".deny-message-field")
	);
	urlField.hidden = type !== "redirectUrl";
	fbField.hidden = type !== "randomBookmark";
	msgField.hidden = false; // message optional/required across types
	const msgLabel = /** @type {HTMLElement} */ (msgField.querySelector("span"));
	msgLabel.textContent = type === "reminder" ? "Message (required)" : "Message (optional)";
}

/** @param {Reason} r */
function makeReasonRow(r) {
	const tpl = /** @type {HTMLTemplateElement} */ (
		document.getElementById("reason-template")
	);
	const node = /** @type {HTMLElement} */ (
		tpl.content.firstElementChild.cloneNode(true)
	);
	node.dataset.reasonId = r.id;
	/** @type {HTMLInputElement} */ (node.querySelector(".reason-text")).value =
		r.text;
	/** @type {HTMLInputElement} */ (node.querySelector(".reason-valid")).checked =
		r.valid;
	node.querySelector(".delete-reason")?.addEventListener("click", () => {
		node.remove();
	});
	return node;
}

/** @param {HTMLElement} node @param {string} siteId */
async function saveSite(node, siteId) {
	const q = (sel) => /** @type {HTMLInputElement} */ (node.querySelector(sel));
	const qs = (sel) => /** @type {HTMLSelectElement} */ (node.querySelector(sel));
	const qt = (sel) =>
		/** @type {HTMLTextAreaElement} */ (node.querySelector(sel));
	const statusEl = /** @type {HTMLElement} */ (
		node.querySelector(".save-status")
	);

	const matchType = /** @type {"domain" | "glob"} */ (qs(".match-type").value);
	const patternRaw = q(".pattern").value.trim();
	if (!patternRaw) {
		statusEl.textContent = "Pattern is required.";
		return;
	}
	const pattern =
		matchType === "domain" ? normalizeHost(patternRaw) : patternRaw;
	if (matchType === "glob" && !isValidMatchPattern(pattern)) {
		statusEl.textContent = "Invalid match pattern.";
		return;
	}

	const reasons = collectReasons(node);
	if (!reasons.length) {
		statusEl.textContent = "Add at least one reason.";
		return;
	}
	if (!reasons.some((r) => r.valid) || !reasons.some((r) => !r.valid)) {
		statusEl.textContent = "Need at least one valid AND one invalid reason.";
		return;
	}

	const denyType =
		/** @type {"redirectUrl" | "randomBookmark" | "reminder" | "blockedPage"} */ (
			qs(".deny-type").value
		);
	const message = qt(".deny-message").value.trim();
	let denyAction;
	if (denyType === "redirectUrl") {
		const url = q(".deny-url").value.trim();
		if (!/^https?:\/\//i.test(url)) {
			statusEl.textContent = "Redirect URL must start with http(s)://";
			return;
		}
		denyAction = { type: "redirectUrl", url, message: message || undefined };
	} else if (denyType === "randomBookmark") {
		const fb = q(".deny-fallback").value.trim();
		denyAction = {
			type: "randomBookmark",
			fallbackUrl: fb || undefined,
			message: message || undefined,
		};
	} else if (denyType === "reminder") {
		if (!message) {
			statusEl.textContent = "Reminder needs a message.";
			return;
		}
		denyAction = { type: "reminder", message };
	} else {
		denyAction = { type: "blockedPage", message: message || undefined };
	}

	const grantMinutes = Math.max(
		1,
		Math.min(720, parseInt(q(".grant-minutes").value, 10) || 30),
	);
	const grantScope = /** @type {"domain" | "tab"} */ (qs(".grant-scope").value);

	/** @type {BlockedSite} */
	const site = {
		id: siteId,
		active: q(".site-active").checked,
		label: q(".site-label").value.trim() || pattern,
		pattern,
		matchType,
		grantMinutes,
		grantScope,
		reasons,
		denyAction,
	};

	// Request host permissions for the site's patterns.
	const origins = siteToMatchPatterns(site);
	if (origins.length) {
		try {
			const granted = await chrome.permissions.request({ origins });
			if (!granted) {
				statusEl.textContent =
					"Host permission was declined. Grant permission to activate this rule.";
				site.active = false;
			}
		} catch (e) {
			console.warn("permissions.request failed", e);
		}
	}

	// Replace or insert.
	const idx = config.sites.findIndex((s) => s.id === siteId);
	if (idx >= 0) config.sites[idx] = site;
	else config.sites.push(site);

	await persistConfig();
	statusEl.textContent = "Saved.";
	setTimeout(() => {
		statusEl.textContent = "";
	}, 1500);
}

/** @param {HTMLElement} node @returns {Reason[]} */
function collectReasons(node) {
	const rows = node.querySelectorAll(".reason-row");
	/** @type {Reason[]} */
	const reasons = [];
	rows.forEach((row) => {
		const text = /** @type {HTMLInputElement} */ (
			row.querySelector(".reason-text")
		).value.trim();
		const valid = /** @type {HTMLInputElement} */ (
			row.querySelector(".reason-valid")
		).checked;
		if (text)
			reasons.push({
				id: /** @type {HTMLElement} */ (row).dataset.reasonId || crypto.randomUUID(),
				text,
				valid,
			});
	});
	return reasons;
}

async function persistConfig() {
	await setConfig(config);
}

// --- Global controls ---
globalActive.addEventListener("change", async () => {
	config.active = globalActive.checked;
	await persistConfig();
});
defaultMinutes.addEventListener("change", async () => {
	const v = Math.max(1, Math.min(720, parseInt(defaultMinutes.value, 10) || 30));
	config.defaultGrantMinutes = v;
	defaultMinutes.value = String(v);
	await persistConfig();
});

$("add-site")?.addEventListener("click", () => {
	/** @type {BlockedSite} */
	const newSite = {
		id: crypto.randomUUID(),
		active: false, // stays off until permission is granted at save time
		label: "",
		pattern: "",
		matchType: "domain",
		grantMinutes: config.defaultGrantMinutes,
		grantScope: "domain",
		reasons: [
			{ id: crypto.randomUUID(), text: "", valid: true },
			{ id: crypto.randomUUID(), text: "", valid: false },
		],
		denyAction: { type: "blockedPage" },
	};
	config.sites.push(newSite);
	renderSites();
	// Auto-expand the new card.
	const card = sitesEl.querySelector(`[data-site-id="${newSite.id}"]`);
	if (card) {
		const btn = /** @type {HTMLButtonElement} */ (card.querySelector(".expand-btn"));
		btn.click();
		/** @type {HTMLInputElement} */ (card.querySelector(".pattern")).focus();
	}
});

// --- Import / export ---
$("export-btn")?.addEventListener("click", () => {
	const blob = new Blob([JSON.stringify(config, null, 2)], {
		type: "application/json",
	});
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "gatekeeper-config.json";
	document.body.appendChild(a);
	a.click();
	a.remove();
	URL.revokeObjectURL(url);
});
$("import-btn")?.addEventListener("click", () => {
	$("import-file")?.click();
});
$("import-file")?.addEventListener("change", async (e) => {
	const files = /** @type {HTMLInputElement} */ (e.target).files;
	if (!files || !files[0]) return;
	const text = await files[0].text();
	try {
		const imported = JSON.parse(text);
		if (!imported || !Array.isArray(imported.sites))
			throw new Error("Not a config file.");
		if (!confirm("Replace your current configuration with the imported one?"))
			return;
		config = imported;
		await persistConfig();
		await load();
	} catch (err) {
		alert("Import failed: " + err.message);
	}
});

function handleQueryParams() {
	const params = new URLSearchParams(location.search);
	const host = params.get("host");
	const editId = params.get("editId");
	if (editId) {
		const card = sitesEl.querySelector(`[data-site-id="${editId}"]`);
		if (card) {
			/** @type {HTMLButtonElement} */ (card.querySelector(".expand-btn")).click();
			card.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	} else if (host) {
		// Pre-populate a new site card with the host.
		/** @type {BlockedSite} */
		const newSite = {
			id: crypto.randomUUID(),
			active: false,
			label: host,
			pattern: host,
			matchType: "domain",
			grantMinutes: config.defaultGrantMinutes,
			grantScope: "domain",
			reasons: [
				{ id: crypto.randomUUID(), text: "", valid: true },
				{ id: crypto.randomUUID(), text: "", valid: false },
			],
			denyAction: { type: "blockedPage" },
		};
		config.sites.push(newSite);
		renderSites();
		const card = sitesEl.querySelector(`[data-site-id="${newSite.id}"]`);
		if (card) {
			/** @type {HTMLButtonElement} */ (card.querySelector(".expand-btn")).click();
			card.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}
}

load();
