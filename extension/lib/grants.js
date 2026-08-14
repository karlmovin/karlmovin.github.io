// @ts-check
/** @import {BlockedSite, Config, Grant} from "./types.js" */
import { getGrants, setGrants } from "./storage.js";

/**
 * Key for a grant: per-site by default, per-tab if the site scopes it.
 * @param {BlockedSite} site
 * @param {number | null} tabId
 * @returns {string}
 */
export function grantKey(site, tabId) {
	if (site.grantScope === "tab" && tabId != null) return `tab:${tabId}:${site.id}`;
	return `site:${site.id}`;
}

/**
 * @param {BlockedSite} site
 * @param {number | null} tabId
 * @returns {Promise<Grant | null>}
 */
export async function getActiveGrant(site, tabId) {
	const grants = await getGrants();
	const g = grants[grantKey(site, tabId)];
	if (!g) return null;
	if (g.expiresAt <= Date.now()) return null;
	return g;
}

/**
 * @param {BlockedSite} site
 * @param {Config} config
 * @param {number | null} tabId
 */
export async function writeGrant(site, config, tabId) {
	const grants = await getGrants();
	const minutes = site.grantMinutes || config.defaultGrantMinutes || 30;
	const key = grantKey(site, tabId);
	grants[key] = {
		siteId: site.id,
		expiresAt: Date.now() + minutes * 60_000,
		tabId: site.grantScope === "tab" ? tabId : null,
	};
	await setGrants(grants);
}

/** @param {string} siteId */
export async function clearGrantForSite(siteId) {
	const grants = await getGrants();
	let changed = false;
	for (const [k, g] of Object.entries(grants)) {
		if (g.siteId === siteId) {
			delete grants[k];
			changed = true;
		}
	}
	if (changed) await setGrants(grants);
}

/** @param {number} tabId */
export async function clearGrantsForTab(tabId) {
	const grants = await getGrants();
	let changed = false;
	for (const [k, g] of Object.entries(grants)) {
		if (g.tabId === tabId) {
			delete grants[k];
			changed = true;
		}
	}
	if (changed) await setGrants(grants);
}
