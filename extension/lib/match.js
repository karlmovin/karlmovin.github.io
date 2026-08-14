// @ts-check
/** @import {BlockedSite, Config} from "./types.js" */

/**
 * Convert a stored site pattern into one or more Chrome match patterns suitable
 * for chrome.scripting.registerContentScripts and host-permission requests.
 * @param {BlockedSite} site
 * @returns {string[]}
 */
export function siteToMatchPatterns(site) {
	if (site.matchType === "domain") {
		const host = normalizeHost(site.pattern);
		if (!host) return [];
		return [`*://${host}/*`, `*://*.${host}/*`];
	}
	if (site.matchType === "glob") {
		return isValidMatchPattern(site.pattern) ? [site.pattern] : [];
	}
	return [];
}

/**
 * @param {Config} config
 * @returns {string[]} Deduplicated match patterns for all active sites.
 */
export function activeMatchPatterns(config) {
	if (!config.active) return [];
	const set = new Set();
	for (const site of config.sites) {
		if (!site.active) continue;
		for (const p of siteToMatchPatterns(site)) set.add(p);
	}
	return [...set];
}

/** @param {Config} config @returns {string[]} */
export function activeOriginPatterns(config) {
	if (!config.active) return [];
	const set = new Set();
	for (const site of config.sites) {
		if (!site.active) continue;
		if (site.matchType === "domain") {
			const host = normalizeHost(site.pattern);
			if (!host) continue;
			set.add(`*://${host}/*`);
			set.add(`*://*.${host}/*`);
		} else if (site.matchType === "glob") {
			if (isValidMatchPattern(site.pattern)) set.add(site.pattern);
		}
	}
	return [...set];
}

/**
 * Find which active site (if any) matches a URL.
 * @param {string} url
 * @param {Config} config
 * @returns {BlockedSite | null}
 */
export function matchSite(url, config) {
	if (!config.active) return null;
	let parsed;
	try {
		parsed = new URL(url);
	} catch {
		return null;
	}
	if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;

	for (const site of config.sites) {
		if (!site.active) continue;
		if (matchesSite(parsed, site)) return site;
	}
	return null;
}

/**
 * @param {URL} u
 * @param {BlockedSite} site
 * @returns {boolean}
 */
export function matchesSite(u, site) {
	if (site.matchType === "domain") {
		const host = normalizeHost(site.pattern);
		if (!host) return false;
		return u.hostname === host || u.hostname.endsWith(`.${host}`);
	}
	if (site.matchType === "glob") {
		try {
			return matchPatternToRegex(site.pattern).test(u.href);
		} catch {
			// Fail-closed: unknown pattern → do not match (safer for typos).
			return false;
		}
	}
	return false;
}

/** @param {string} raw */
export function normalizeHost(raw) {
	if (!raw) return "";
	let host = raw.trim().toLowerCase();
	host = host.replace(/^https?:\/\//, "");
	host = host.replace(/\/.*$/, "");
	host = host.replace(/^\*\./, "");
	return host;
}

/** @param {string} p @returns {boolean} */
export function isValidMatchPattern(p) {
	if (p === "<all_urls>") return true;
	return /^(\*|https?|file|ftp|ws|wss):\/\/(\*|(\*\.)?[^/*]+|)\/.*/.test(p);
}

const globCache = new Map();
/** @param {string} p @returns {RegExp} */
export function matchPatternToRegex(p) {
	const cached = globCache.get(p);
	if (cached) return cached;
	if (!isValidMatchPattern(p)) throw new Error(`invalid pattern: ${p}`);
	const m = p.match(/^(\*|https?|file|ftp|ws|wss):\/\/([^/]*)(\/.*)$/);
	if (!m) throw new Error(`invalid pattern: ${p}`);
	const [, scheme, host, path] = m;
	const schemeRe = scheme === "*" ? "(?:https?)" : scheme;
	let hostRe;
	if (host === "*") hostRe = "[^/]+";
	else if (host.startsWith("*."))
		hostRe = `(?:[^/]+\\.)?${escapeRegex(host.slice(2))}`;
	else hostRe = escapeRegex(host);
	const pathRe = path
		.split("")
		.map((c) => (c === "*" ? ".*" : escapeRegex(c)))
		.join("");
	const re = new RegExp(`^${schemeRe}:\\/\\/${hostRe}${pathRe}$`);
	globCache.set(p, re);
	return re;
}

/** @param {string} s */
function escapeRegex(s) {
	return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
}
