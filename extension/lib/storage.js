// @ts-check
/** @import {Config} from "./types.js" */

export const CONFIG_KEY = "config";
export const GRANTS_KEY = "grants";
export const CURRENT_CONFIG_VERSION = 1;

/** @type {Config} */
export const DEFAULT_CONFIG = {
	version: CURRENT_CONFIG_VERSION,
	active: true,
	defaultGrantMinutes: 30,
	sites: [],
};

/** @returns {Promise<Config>} */
export async function getConfig() {
	const raw = await chrome.storage.local.get(CONFIG_KEY);
	const stored = /** @type {Config | undefined} */ (raw[CONFIG_KEY]);
	if (!stored) return { ...DEFAULT_CONFIG };
	return migrate(stored);
}

/** @param {Config} config */
export async function setConfig(config) {
	await chrome.storage.local.set({ [CONFIG_KEY]: config });
}

/**
 * @param {Config} stored
 * @returns {Config}
 */
function migrate(stored) {
	if (!stored.version || stored.version < 1) {
		return { ...DEFAULT_CONFIG, ...stored, version: CURRENT_CONFIG_VERSION };
	}
	return stored;
}

/** @returns {Promise<Record<string, import("./types.js").Grant>>} */
export async function getGrants() {
	const raw = await chrome.storage.session.get(GRANTS_KEY);
	return /** @type {Record<string, import("./types.js").Grant>} */ (
		raw[GRANTS_KEY] || {}
	);
}

/** @param {Record<string, import("./types.js").Grant>} grants */
export async function setGrants(grants) {
	await chrome.storage.session.set({ [GRANTS_KEY]: grants });
}
