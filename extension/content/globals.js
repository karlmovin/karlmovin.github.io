// Classic script (NOT a module). Sets up window.__gk namespace shared by
// ui/prompt.js and content/gate.js. No DOM writes here — the cover comes
// from gate.js so it lands the moment the first script executes.
(() => {
	const ns = /** @type {any} */ (globalThis).__gk || {};
	/** @type {any} */ (globalThis).__gk = ns;

	ns.CONFIG_KEY = "config";
	ns.GRANTS_KEY = "grants";

	ns.normalizeHost = (raw) => {
		if (!raw) return "";
		let h = String(raw).trim().toLowerCase();
		h = h.replace(/^https?:\/\//, "");
		h = h.replace(/\/.*$/, "");
		h = h.replace(/^\*\./, "");
		return h;
	};

	const globCache = new Map();
	function escRe(s) {
		return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
	}
	ns.matchPatternToRegex = (p) => {
		const c = globCache.get(p);
		if (c) return c;
		const m = p.match(/^(\*|https?|file|ftp|ws|wss):\/\/([^/]*)(\/.*)$/);
		if (!m) throw new Error("invalid pattern: " + p);
		const [, scheme, host, path] = m;
		const s = scheme === "*" ? "(?:https?)" : scheme;
		let h;
		if (host === "*") h = "[^/]+";
		else if (host.startsWith("*."))
			h = "(?:[^/]+\\.)?" + escRe(host.slice(2));
		else h = escRe(host);
		const pa = path
			.split("")
			.map((ch) => (ch === "*" ? ".*" : escRe(ch)))
			.join("");
		const re = new RegExp("^" + s + ":\\/\\/" + h + pa + "$");
		globCache.set(p, re);
		return re;
	};

	ns.matchesSite = (u, site) => {
		if (site.matchType === "domain") {
			const host = ns.normalizeHost(site.pattern);
			if (!host) return false;
			return u.hostname === host || u.hostname.endsWith("." + host);
		}
		if (site.matchType === "glob") {
			try {
				return ns.matchPatternToRegex(site.pattern).test(u.href);
			} catch {
				return false;
			}
		}
		return false;
	};

	/** Find matching site for a URL string. */
	ns.matchSite = (urlStr, config) => {
		if (!config || !config.active) return null;
		let u;
		try {
			u = new URL(urlStr);
		} catch {
			return null;
		}
		if (u.protocol !== "http:" && u.protocol !== "https:") return null;
		for (const site of config.sites || []) {
			if (!site.active) continue;
			if (ns.matchesSite(u, site)) return site;
		}
		return null;
	};

	ns.grantKey = (site, tabId) =>
		site.grantScope === "tab" && tabId != null
			? "tab:" + tabId + ":" + site.id
			: "site:" + site.id;

	ns.getActiveGrantForSite = async (site) => {
		const raw = await chrome.storage.session.get(ns.GRANTS_KEY);
		const grants = raw[ns.GRANTS_KEY] || {};
		// tabId is not known in the content script — try both keys.
		for (const k of Object.keys(grants)) {
			const g = grants[k];
			if (g.siteId !== site.id) continue;
			if (g.expiresAt <= Date.now()) continue;
			return g;
		}
		return null;
	};

	ns.getConfig = async () => {
		const raw = await chrome.storage.local.get(ns.CONFIG_KEY);
		return raw[ns.CONFIG_KEY] || null;
	};
})();
