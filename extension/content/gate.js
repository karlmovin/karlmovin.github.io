// Classic script (NOT a module). Runs at document_start on origins the
// service worker has dynamically registered against. The very first
// synchronous statements paint an opaque cover so no page content is
// visible before the reason picker mounts.
(() => {
	const ns = /** @type {any} */ (globalThis).__gk;
	if (!ns) return; // globals.js failed to load — fail closed by doing nothing.
	if (ns.__mounted) return;
	ns.__mounted = true;

	const COVER_ID = "__gk_cover__" + Math.random().toString(36).slice(2, 10);
	const HOST_ID = "__gk_host__" + Math.random().toString(36).slice(2, 10);

	// --- Step 1: instantly paint an opaque cover. ---
	// documentElement is guaranteed at document_start; body/head are not.
	const cover = document.createElement("div");
	cover.id = COVER_ID;
	cover.setAttribute(
		"style",
		[
			"all: initial",
			"position: fixed",
			"inset: 0",
			"z-index: 2147483646",
			"background: #f8fafc",
			"visibility: visible",
		].join(";"),
	);
	document.documentElement.appendChild(cover);

	// The Shadow-DOM host for the prompt. Empty until we decide to prompt.
	const host = document.createElement("div");
	host.id = HOST_ID;
	host.setAttribute(
		"style",
		[
			"all: initial",
			"position: fixed",
			"inset: 0",
			"z-index: 2147483647",
			"visibility: visible",
		].join(";"),
	);
	document.documentElement.appendChild(host);

	/** @type {"covered" | "prompting" | "revealed"} */
	let state = "covered";
	let promptCtrl = null;

	// If the page yanks either node while we still need them, put them back.
	const mo = new MutationObserver(() => {
		if (state === "covered" || state === "prompting") {
			if (cover.isConnected === false)
				document.documentElement.appendChild(cover);
		}
		if (state === "prompting" && host.isConnected === false) {
			document.documentElement.appendChild(host);
		}
	});
	mo.observe(document.documentElement, { childList: true });

	function reveal() {
		state = "revealed";
		cover.remove();
		host.remove();
	}

	function coverAndPrompt(site, config) {
		state = "prompting";
		if (!cover.isConnected) document.documentElement.appendChild(cover);
		if (!host.isConnected) document.documentElement.appendChild(host);
		if (typeof ns.mountPrompt !== "function") return; // UI missing → cover stays.
		promptCtrl = ns.mountPrompt(host, site, {
			onReason: (reason) => {
				if (reason.valid) grantAndReveal(site, config);
				else runDenyAction(site);
			},
		});
	}

	// --- Async evaluation. ---
	(async () => {
		await evaluate(location.href);
	})();

	/** @param {string} url */
	async function evaluate(url) {
		let config;
		try {
			config = await ns.getConfig();
		} catch {
			reveal();
			return;
		}
		if (!config) {
			reveal();
			return;
		}
		const site = ns.matchSite(url, config);
		if (!site) {
			reveal();
			return;
		}
		let grant = null;
		try {
			grant = await ns.getActiveGrantForSite(site);
		} catch {
			grant = null;
		}
		if (grant) {
			reveal();
			return;
		}
		coverAndPrompt(site, config);
	}

	async function grantAndReveal(site, config) {
		try {
			const raw = await chrome.storage.session.get(ns.GRANTS_KEY);
			const grants = raw[ns.GRANTS_KEY] || {};
			const minutes = site.grantMinutes || config.defaultGrantMinutes || 30;
			grants[ns.grantKey(site, null)] = {
				siteId: site.id,
				expiresAt: Date.now() + minutes * 60_000,
				tabId: null,
			};
			await chrome.storage.session.set({ [ns.GRANTS_KEY]: grants });
		} catch (e) {
			console.warn("Gatekeeper: failed to write grant", e);
		}
		promptCtrl = null;
		reveal();
	}

	function runDenyAction(site) {
		const a = site.denyAction || { type: "reminder", message: "Not now." };
		switch (a.type) {
			case "redirectUrl":
				if (a.url && /^https?:\/\//i.test(a.url)) {
					location.replace(a.url);
				} else {
					location.replace(chrome.runtime.getURL("pages/blocked.html"));
				}
				break;
			case "blockedPage":
				location.replace(
					chrome.runtime.getURL(
						"pages/blocked.html?msg=" + encodeURIComponent(a.message || ""),
					),
				);
				break;
			case "randomBookmark":
				chrome.runtime.sendMessage(
					{ type: "PICK_RANDOM_BOOKMARK" },
					(resp) => {
						if (resp && resp.url) {
							location.replace(resp.url);
						} else if (a.fallbackUrl && /^https?:\/\//i.test(a.fallbackUrl)) {
							location.replace(a.fallbackUrl);
						} else {
							location.replace(chrome.runtime.getURL("pages/blocked.html"));
						}
					},
				);
				break;
			case "reminder":
			default:
				if (promptCtrl && typeof promptCtrl.showReminder === "function") {
					promptCtrl.showReminder(
						a.message || "You said no. Trust yourself.",
						() => {
							try {
								history.back();
							} catch {
								location.replace(chrome.runtime.getURL("pages/blocked.html"));
							}
						},
					);
				}
				break;
		}
	}

	// --- SPA re-evaluation on client-side navigation. ---
	// When the URL changes without a full page load, re-check. Do NOT proactively
	// re-cover — only cover if evaluate decides to prompt (so pass-covered SPA
	// nav is flash-free).
	let lastEvaluatedUrl = location.href;
	function onNav() {
		const url = location.href;
		if (url === lastEvaluatedUrl) return;
		lastEvaluatedUrl = url;
		if (state === "prompting") return; // Already prompting; user hasn't chosen.
		evaluate(url);
	}
	const origPush = history.pushState;
	const origReplace = history.replaceState;
	history.pushState = function (...args) {
		const r = origPush.apply(this, args);
		queueMicrotask(onNav);
		return r;
	};
	history.replaceState = function (...args) {
		const r = origReplace.apply(this, args);
		queueMicrotask(onNav);
		return r;
	};
	window.addEventListener("popstate", () => queueMicrotask(onNav));
	if (typeof navigation !== "undefined" && navigation) {
		try {
			navigation.addEventListener("navigate", () => queueMicrotask(onNav));
		} catch {
			// Navigation API not supported; history patch is enough.
		}
	}
})();
