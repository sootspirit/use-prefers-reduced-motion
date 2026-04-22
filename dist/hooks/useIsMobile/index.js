import { useLayoutEffect as e, useState as t } from "react";
//#region src/lib/hooks/useIsMobile/index.ts
var n = 992, r = (r = n) => {
	let [i, a] = t(!1);
	return e(() => {
		if (typeof window > "u") return;
		let e = window.matchMedia(`(width < ${r}px)`), t = () => {
			a((t) => t === e.matches ? t : e.matches);
		};
		return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, [r]), i;
};
//#endregion
export { r as useIsMobile };
