# Gatekeeper — Anti Doom-Scroll Chrome Extension

A personal-focus Chrome extension that forces a conscious choice before you
open a distracting site. Configure a list of sites, define a set of valid and
invalid *reasons for visiting*, and pick what happens when you pick an invalid
reason: redirect somewhere useful, redirect to a random bookmark, or show a
reminder that keeps the page blocked.

This is a **Manifest V3** extension. It ships as plain JS/HTML/CSS with no
build step — you load it unpacked from this folder.

---

## Install (load unpacked)

1. Open `chrome://extensions` in Chrome (or a Chromium-based browser).
2. Toggle **Developer mode** on (top-right).
3. Click **Load unpacked** and select this `extension/` folder.
4. Pin the Gatekeeper icon from the puzzle-piece menu so the popup is one click away.

The extension needs Chrome 116+ (uses `chrome.scripting.registerContentScripts`
and `chrome.storage.session`).

### Recommended: enable in Incognito

By default Chrome disables extensions in Incognito windows, which means an
Incognito tab is a zero-friction bypass. On `chrome://extensions`, expand
Gatekeeper's **Details** and turn on **Allow in Incognito** if you want the
gate to apply there too.

---

## Configure a site

1. Click the Gatekeeper toolbar icon → **Manage blocklist**. This opens the
   options page. (You can also right-click the icon → *Options*.)
2. Click **Add site**. Fill in:
   - **Label** — friendly name (e.g. `Facebook`).
   - **Match type** — `Domain` (matches the domain and all subdomains, the
     usual choice) or `Glob` (a Chrome match pattern like `*://*.reddit.com/*`).
   - **Pattern** — `facebook.com` for domain, or the full pattern for glob.
   - **Pass duration (minutes)** — how long a valid reason lets you through
     before you're re-prompted (default 30).
   - **Pass scope** — `Per site` (one pass covers every tab on that site) or
     `Per tab` (each new tab needs its own pass).
   - **Reasons** — add at least one *valid* reason (a good reason to visit) and
     at least one *invalid* reason (what you're trying to prevent). Reasons are
     shown in random order so you can't muscle-memory click through.
   - **If they pick an invalid reason…** — the deny-action (see below).
3. Click **Save**. Chrome will ask you to grant host permission for that site;
   accept it. If you decline, the rule saves but stays disabled.

### Deny-actions

- **Redirect to a URL** — send yourself somewhere useful (a docs page, a
  side-project, a book). Uses `location.replace` so back-button doesn't loop.
- **Redirect to a random bookmark** — Chrome picks a random http(s) bookmark
  from your library. Optionally set a fallback URL for when you have no
  bookmarks.
- **Show a reminder (stay blocked)** — the page stays covered and a message
  you wrote is shown. Click *Go back* to leave.
- **Show the blocked page** — redirect to the extension's built-in
  `blocked.html` with an optional message.

### Import / export

The Options page has **Export** and **Import** buttons to move your
configuration between browsers/profiles (JSON file).

---

## Popup

Clicking the toolbar icon shows:

- **Extension enabled** master toggle. Turning it OFF while active rules exist
  asks for confirmation — that friction is intentional.
- **Current tab status** — blocked / not blocked / pass until HH:MM.
- **Block this site…** — jump straight to the options page with the current
  domain pre-filled.
- **Clear pass for this site** — remove the active pass so the gate fires again.

---

## How it works (short version)

- The gate is a content script that runs at `document_start` — **only** on the
  origins you've added to the blocklist. Non-blocked sites are unaffected (no
  flash, no injected code, no `<all_urls>` overhead).
- The very first thing the gate does is paint an opaque cover element over the
  page, so no content is visible before you pick a reason.
- Passes live in `chrome.storage.session`: they survive tab reloads and SPA
  navigation, and reset when you close the browser (a fresh session starts clean).
- The service worker re-registers the content script whenever your blocklist
  changes, filtering to only the origins Chrome has actually granted host
  permission for.

---

## Known limitations

Gatekeeper is designed for **impulsive, not adversarial, users**. If you're
determined enough to bypass your own tool, no browser-extension gate will stop
you:

- **Incognito** disables extensions by default (see setup note above).
- **Disabling JavaScript** for the site, **Reader Mode**, or **View Source**
  bypass any content-script gate.
- The page's JavaScript, network requests, and audio **continue running behind
  the cover** — the cover hides pixels, not activity.
- Iframes are not gated (`all_frames: false`). Sites that render their primary
  content in a same-origin iframe would slip through — not typical for the
  usual doom-scroll targets.
- The master toggle can be flipped off in the popup with one confirm-click.

---

## Development notes

- **File layout**
  - `manifest.json` — MV3 manifest. Dynamic content-script registration; no
    static `content_scripts` entry.
  - `background/service-worker.js` — module SW. Registers/updates content
    scripts on config change; handles the random-bookmark lookup; cleans
    tab-scoped passes on `tabs.onRemoved`.
  - `content/globals.js` + `content/gate.js` + `ui/prompt.js` — **classic
    scripts** (not ES modules; content scripts can't `import`). They share the
    `window.__gk` namespace. `gate.js` paints the cover as its first
    synchronous statement.
  - `lib/` — ES modules for the service worker, options, popup, and
    `pages/blocked.html`. Not loaded into content scripts.
  - `options/`, `popup/`, `pages/blocked.html` — extension pages.
- The website in this repo (`src/`) is completely untouched by the extension;
  `tsconfig.json` only includes `src`, so `pnpm build` never sees `extension/`.
- Icons are placeholder — swap `icons/icon-*.png` for real artwork any time.

## Manual test checklist

1. Load unpacked; SW console (`chrome://extensions` → *Inspect views:
   service worker*) shows no errors.
2. Add a site, grant host permission, visit it → opaque cover appears
   instantly and the reason picker is visible.
3. Visit a **non-blocked** site → no flash, no cover.
4. Pick a valid reason → page reveals; navigate within the site (including SPA
   route changes) → not re-prompted until the pass expires.
5. Pick an invalid reason → verify each deny-action.
6. Popup: master toggle, "Block this site", "Clear pass".
7. `pnpm build` in the repo root still succeeds (extension is isolated).
