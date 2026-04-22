import './styles.css';/* empty css       */
import { jsx as e } from "react/jsx-runtime";
//#region src/lib/components/Button/index.tsx
function t(t) {
	let { className: n, ...r } = t;
	return console.log("Button! HA"), /* @__PURE__ */ e("button", {
		...r,
		className: `fcl-button ${n || "buttonClass"}`,
		children: "I have fix text - button"
	});
}
//#endregion
export { t as Button };
