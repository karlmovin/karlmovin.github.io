// Classic script. Defines __gk.mountPrompt(host, site, callbacks) that
// installs a closed Shadow-DOM reason picker above the cover.
(() => {
	const ns = /** @type {any} */ (globalThis).__gk || {};
	/** @type {any} */ (globalThis).__gk = ns;

	const CSS = `
	:host { all: initial; }
	.wrap {
		all: initial;
		position: fixed;
		inset: 0;
		z-index: 2147483647;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
		color: #0f172a;
		background: rgba(15, 23, 42, 0.75);
		visibility: visible !important;
	}
	.card {
		background: #ffffff;
		border-radius: 16px;
		box-shadow: 0 24px 60px rgba(0,0,0,0.35);
		padding: 32px 32px 24px;
		max-width: 520px;
		width: calc(100% - 48px);
		max-height: calc(100% - 48px);
		overflow: auto;
		box-sizing: border-box;
	}
	h1 {
		font-size: 20px;
		margin: 0 0 6px 0;
		font-weight: 700;
	}
	.sub {
		font-size: 13px;
		color: #64748b;
		margin: 0 0 20px 0;
	}
	.reasons {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 20px;
	}
	.reason {
		all: unset;
		display: block;
		box-sizing: border-box;
		width: 100%;
		padding: 12px 14px;
		border-radius: 10px;
		border: 1px solid #e2e8f0;
		background: #f8fafc;
		font-size: 14px;
		line-height: 1.4;
		cursor: pointer;
		transition: background 0.12s, border-color 0.12s, transform 0.05s;
	}
	.reason:hover { background: #eef2ff; border-color: #c7d2fe; }
	.reason:active { transform: scale(0.99); }
	.footer {
		display: flex;
		justify-content: space-between;
		gap: 8px;
		font-size: 12px;
		color: #64748b;
	}
	.footer a {
		color: #4f46e5;
		text-decoration: none;
		cursor: pointer;
	}
	.footer a:hover { text-decoration: underline; }
	.reminder {
		background: #fef3c7;
		border: 1px solid #fde68a;
		color: #78350f;
		padding: 16px;
		border-radius: 10px;
		font-size: 14px;
		line-height: 1.5;
		margin-bottom: 16px;
		white-space: pre-wrap;
	}
	.actions {
		display: flex;
		gap: 8px;
		justify-content: flex-end;
	}
	.btn {
		all: unset;
		cursor: pointer;
		padding: 10px 16px;
		border-radius: 8px;
		font-size: 14px;
		font-weight: 500;
	}
	.btn-primary { background: #4f46e5; color: white; }
	.btn-primary:hover { background: #4338ca; }
	.btn-secondary { background: #e2e8f0; color: #0f172a; }
	.btn-secondary:hover { background: #cbd5e1; }
	@media (prefers-color-scheme: dark) {
		.card { background: #0f172a; color: #e2e8f0; }
		h1 { color: #f1f5f9; }
		.sub { color: #94a3b8; }
		.reason { background: #1e293b; border-color: #334155; color: #e2e8f0; }
		.reason:hover { background: #312e81; border-color: #4f46e5; }
		.reminder { background: #422006; border-color: #78350f; color: #fde68a; }
		.btn-secondary { background: #334155; color: #e2e8f0; }
		.btn-secondary:hover { background: #475569; }
	}
	`;

	/**
	 * Mount the reason picker inside `host`.
	 * @param {HTMLElement} host  The host element (attached to documentElement).
	 * @param {any} site
	 * @param {{onReason: (reason: any) => void}} callbacks
	 * @returns {{ showReminder: (msg: string, onBack: () => void) => void }}
	 */
	ns.mountPrompt = (host, site, callbacks) => {
		const shadow = host.attachShadow({ mode: "closed" });
		const style = document.createElement("style");
		style.textContent = CSS;
		shadow.appendChild(style);

		const wrap = document.createElement("div");
		wrap.className = "wrap";
		shadow.appendChild(wrap);

		function render() {
			wrap.textContent = "";
			const card = document.createElement("div");
			card.className = "card";

			const h1 = document.createElement("h1");
			h1.textContent = "Why are you here?";
			card.appendChild(h1);

			const sub = document.createElement("p");
			sub.className = "sub";
			sub.textContent = `Gatekeeper is blocking ${site.label || location.hostname}. Pick a reason to continue.`;
			card.appendChild(sub);

			const list = document.createElement("div");
			list.className = "reasons";
			const shuffled = shuffle(site.reasons || []);
			for (const r of shuffled) {
				const b = document.createElement("button");
				b.className = "reason";
				b.type = "button";
				b.textContent = r.text;
				b.addEventListener("click", () => callbacks.onReason(r));
				list.appendChild(b);
			}
			card.appendChild(list);

			const footer = document.createElement("div");
			footer.className = "footer";
			const left = document.createElement("div");
			left.textContent = site.matchType === "domain" ? site.pattern : "";
			const right = document.createElement("div");
			const opts = document.createElement("a");
			opts.textContent = "Edit reasons…";
			opts.addEventListener("click", () => {
				chrome.runtime.sendMessage({ type: "OPEN_OPTIONS" });
			});
			right.appendChild(opts);
			footer.appendChild(left);
			footer.appendChild(right);
			card.appendChild(footer);

			wrap.appendChild(card);
		}

		function showReminder(msg, onBack) {
			wrap.textContent = "";
			const card = document.createElement("div");
			card.className = "card";
			const h1 = document.createElement("h1");
			h1.textContent = "Not this time.";
			card.appendChild(h1);
			const rem = document.createElement("div");
			rem.className = "reminder";
			rem.textContent = msg;
			card.appendChild(rem);
			const actions = document.createElement("div");
			actions.className = "actions";
			const back = document.createElement("button");
			back.className = "btn btn-primary";
			back.type = "button";
			back.textContent = "Go back";
			back.addEventListener("click", onBack);
			actions.appendChild(back);
			card.appendChild(actions);
			wrap.appendChild(card);
		}

		render();
		return { showReminder };
	};

	/** @template T @param {T[]} arr @returns {T[]} */
	function shuffle(arr) {
		const a = arr.slice();
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}
})();
