import './styles.css';/* empty css       */
import { jsx as e } from "react/jsx-runtime";
//#region src/lib/components/Label/index.tsx
function t(t) {
	let { className: n, ...r } = t;
	return console.log("Label CLOS test!"), /* @__PURE__ */ e("label", {
		...r,
		className: `fcl-label test-class ${n || "labelClass"}`,
		children: "Fix text label watching"
	});
}
//#endregion
export { t as Label };
