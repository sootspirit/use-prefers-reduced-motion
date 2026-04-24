import { useSyncExternalStore as e } from "react";
//#region src/lib/usePrefersReducedMotion.ts
function t() {
	let t = "(prefers-reduced-motion: reduce)";
	return e((e) => {
		let n = window.matchMedia(t);
		return n.addEventListener ? (n.addEventListener("change", e), () => n.removeEventListener("change", e)) : (n.addListener(e), () => n.removeListener(e));
	}, () => window.matchMedia(t).matches, () => !1);
}
//#endregion
export { t as usePrefersReducedMotion };
