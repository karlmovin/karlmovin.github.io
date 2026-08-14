// @ts-check
// JSDoc typedefs shared across the extension.

/**
 * @typedef {"redirectUrl" | "randomBookmark" | "reminder" | "blockedPage"} DenyType
 */

/**
 * @typedef {Object} DenyRedirectUrl
 * @property {"redirectUrl"} type
 * @property {string} url            Full http(s) URL.
 * @property {string} [message]
 */

/**
 * @typedef {Object} DenyRandomBookmark
 * @property {"randomBookmark"} type
 * @property {string} [fallbackUrl]  Used if no bookmarks found.
 * @property {string} [message]
 */

/**
 * @typedef {Object} DenyReminder
 * @property {"reminder"} type
 * @property {string} message
 */

/**
 * @typedef {Object} DenyBlockedPage
 * @property {"blockedPage"} type    Redirect to the extension's blocked.html page.
 * @property {string} [message]
 */

/** @typedef {DenyRedirectUrl | DenyRandomBookmark | DenyReminder | DenyBlockedPage} DenyAction */

/**
 * @typedef {Object} Reason
 * @property {string} id
 * @property {string} text
 * @property {boolean} valid
 */

/**
 * @typedef {"domain" | "glob"} MatchType
 * "domain": bare host, matches host and all subdomains.
 * "glob":   Chrome match pattern, e.g. "*://*.reddit.com/*".
 */

/**
 * @typedef {Object} BlockedSite
 * @property {string} id
 * @property {boolean} active
 * @property {string} label
 * @property {string} pattern
 * @property {MatchType} matchType
 * @property {number} grantMinutes
 * @property {"domain" | "tab"} grantScope
 * @property {Reason[]} reasons
 * @property {DenyAction} denyAction
 */

/**
 * @typedef {Object} Config
 * @property {number} version
 * @property {boolean} active
 * @property {number} defaultGrantMinutes
 * @property {BlockedSite[]} sites
 */

/**
 * @typedef {Object} Grant
 * @property {string} siteId
 * @property {number} expiresAt
 * @property {number | null} tabId
 */

export {};
