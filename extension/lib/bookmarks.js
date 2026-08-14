// @ts-check

/**
 * @returns {Promise<string[]>} All http(s) bookmark URLs, flattened.
 */
export async function collectHttpBookmarks() {
	const tree = await chrome.bookmarks.getTree();
	const urls = [];
	/** @param {chrome.bookmarks.BookmarkTreeNode[]} nodes */
	function walk(nodes) {
		for (const n of nodes) {
			if (n.url && /^https?:/i.test(n.url)) urls.push(n.url);
			if (n.children) walk(n.children);
		}
	}
	walk(tree);
	return urls;
}

/**
 * @returns {Promise<string | null>}
 */
export async function pickRandomBookmark() {
	const urls = await collectHttpBookmarks();
	if (!urls.length) return null;
	return urls[Math.floor(Math.random() * urls.length)];
}
