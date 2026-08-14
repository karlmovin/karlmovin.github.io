// @ts-check
const params = new URLSearchParams(location.search);
const msg = params.get("msg");
if (msg) {
	const el = document.getElementById("msg");
	if (el) el.textContent = msg;
}
document.getElementById("back")?.addEventListener("click", () => {
	if (history.length > 1) history.back();
	else location.href = "about:blank";
});
document.getElementById("options")?.addEventListener("click", (e) => {
	e.preventDefault();
	chrome.runtime.openOptionsPage();
});
