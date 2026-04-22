import './styles.css';/* empty css       */
import { jsx as e } from "react/jsx-runtime";
//#region src/lib/components/Input/index.tsx
function t({ className: t, variant: n, ref: r, ...i }) {
	let a = `fcl-input ${`fcl-input--${n}`} ${t || ""}`.trim();
	return console.log("Input CLOS!"), /* @__PURE__ */ e("input", {
		...i,
		ref: r,
		className: a
	});
}
//#endregion
export { t as Input };
