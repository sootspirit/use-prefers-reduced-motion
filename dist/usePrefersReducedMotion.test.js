import { usePrefersReducedMotion as e } from "./usePrefersReducedMotion.js";
import * as t from "react";
import n from "react-dom";
//#region \0rolldown/runtime.js
var r = Object.create, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, s = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, l = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), u = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var s = o(t), l = 0, u = s.length, d; l < u; l++) d = s[l], !c.call(e, d) && d !== n && i(e, d, {
		get: ((e) => t[e]).bind(null, d),
		enumerable: !(r = a(t, d)) || r.enumerable
	});
	return e;
}, d = (e, t, n) => (n = e == null ? {} : r(s(e)), u(t || !e || !e.__esModule ? i(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), f = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), p = /* @__PURE__ */ l(((e) => {
	var t = f("react"), n = !1;
	e.act = function(e) {
		return !1 === n && (n = !0, console.error("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")), t.act(e);
	};
})), m = /* @__PURE__ */ l(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = f("react"), n = !1;
		e.act = function(e) {
			return !1 === n && (n = !0, console.error("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")), t.act(e);
		};
	})();
})), h = /* @__PURE__ */ l(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = p() : t.exports = m();
})), g = /* @__PURE__ */ l(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) if (n(c) !== null) m = !0, ee || (ee = !0, ae());
		else {
			var t = n(l);
			t !== null && se(x, t.startTime - e);
		}
	}
	var ee = !1, te = -1, ne = 5, re = -1;
	function ie() {
		return g ? !0 : !(e.unstable_now() - re < ne);
	}
	function S() {
		if (g = !1, ee) {
			var t = e.unstable_now();
			re = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(te), te = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && ie());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && se(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? ae() : ee = !1;
			}
		}
	}
	var ae;
	if (typeof y == "function") ae = function() {
		y(S);
	};
	else if (typeof MessageChannel < "u") {
		var C = new MessageChannel(), oe = C.port2;
		C.port1.onmessage = S, ae = function() {
			oe.postMessage(null);
		};
	} else ae = function() {
		_(S, 0);
	};
	function se(t, n) {
		te = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ne = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(te), te = -1) : h = !0, se(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, ee || (ee = !0, ae()))), r;
	}, e.unstable_shouldYield = ie, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), _ = /* @__PURE__ */ l(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t() {
			if (x = !1, re) {
				var t = e.unstable_now();
				ae = t;
				var n = !0;
				try {
					a: {
						y = !1, b && (b = !1, te(ie), ie = -1), v = !0;
						var a = _;
						try {
							b: {
								for (o(t), g = r(p); g !== null && !(g.expirationTime > t && c());) {
									var u = g.callback;
									if (typeof u == "function") {
										g.callback = null, _ = g.priorityLevel;
										var d = u(g.expirationTime <= t);
										if (t = e.unstable_now(), typeof d == "function") {
											g.callback = d, o(t), n = !0;
											break b;
										}
										g === r(p) && i(p), o(t);
									} else i(p);
									g = r(p);
								}
								if (g !== null) n = !0;
								else {
									var f = r(m);
									f !== null && l(s, f.startTime - t), n = !1;
								}
							}
							break a;
						} finally {
							g = null, _ = a, v = !1;
						}
						n = void 0;
					}
				} finally {
					n ? C() : re = !1;
				}
			}
		}
		function n(e, t) {
			var n = e.length;
			e.push(t);
			a: for (; 0 < n;) {
				var r = n - 1 >>> 1, i = e[r];
				if (0 < a(i, t)) e[r] = t, e[n] = i, n = r;
				else break a;
			}
		}
		function r(e) {
			return e.length === 0 ? null : e[0];
		}
		function i(e) {
			if (e.length === 0) return null;
			var t = e[0], n = e.pop();
			if (n !== t) {
				e[0] = n;
				a: for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
					var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
					if (0 > a(c, n)) l < i && 0 > a(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
					else if (l < i && 0 > a(u, n)) e[r] = u, e[l] = n, r = l;
					else break a;
				}
			}
			return t;
		}
		function a(e, t) {
			var n = e.sortIndex - t.sortIndex;
			return n === 0 ? e.id - t.id : n;
		}
		function o(e) {
			for (var t = r(m); t !== null;) {
				if (t.callback === null) i(m);
				else if (t.startTime <= e) i(m), t.sortIndex = t.expirationTime, n(p, t);
				else break;
				t = r(m);
			}
		}
		function s(e) {
			if (b = !1, o(e), !y) if (r(p) !== null) y = !0, re || (re = !0, C());
			else {
				var t = r(m);
				t !== null && l(s, t.startTime - e);
			}
		}
		function c() {
			return x ? !0 : !(e.unstable_now() - ae < S);
		}
		function l(t, n) {
			ie = ee(function() {
				t(e.unstable_now());
			}, n);
		}
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
			var u = performance;
			e.unstable_now = function() {
				return u.now();
			};
		} else {
			var d = Date, f = d.now();
			e.unstable_now = function() {
				return d.now() - f;
			};
		}
		var p = [], m = [], h = 1, g = null, _ = 3, v = !1, y = !1, b = !1, x = !1, ee = typeof setTimeout == "function" ? setTimeout : null, te = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null, re = !1, ie = -1, S = 5, ae = -1;
		if (typeof ne == "function") var C = function() {
			ne(t);
		};
		else if (typeof MessageChannel < "u") {
			var oe = new MessageChannel(), se = oe.port2;
			oe.port1.onmessage = t, C = function() {
				se.postMessage(null);
			};
		} else C = function() {
			ee(t, 0);
		};
		e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
			e.callback = null;
		}, e.unstable_forceFrameRate = function(e) {
			0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : S = 0 < e ? Math.floor(1e3 / e) : 5;
		}, e.unstable_getCurrentPriorityLevel = function() {
			return _;
		}, e.unstable_next = function(e) {
			switch (_) {
				case 1:
				case 2:
				case 3:
					var t = 3;
					break;
				default: t = _;
			}
			var n = _;
			_ = t;
			try {
				return e();
			} finally {
				_ = n;
			}
		}, e.unstable_requestPaint = function() {
			x = !0;
		}, e.unstable_runWithPriority = function(e, t) {
			switch (e) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5: break;
				default: e = 3;
			}
			var n = _;
			_ = e;
			try {
				return t();
			} finally {
				_ = n;
			}
		}, e.unstable_scheduleCallback = function(t, i, a) {
			var o = e.unstable_now();
			switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, t) {
				case 1:
					var c = -1;
					break;
				case 2:
					c = 250;
					break;
				case 5:
					c = 1073741823;
					break;
				case 4:
					c = 1e4;
					break;
				default: c = 5e3;
			}
			return c = a + c, t = {
				id: h++,
				callback: i,
				priorityLevel: t,
				startTime: a,
				expirationTime: c,
				sortIndex: -1
			}, a > o ? (t.sortIndex = a, n(m, t), r(p) === null && t === r(m) && (b ? (te(ie), ie = -1) : b = !0, l(s, a - o))) : (t.sortIndex = c, n(p, t), y || v || (y = !0, re || (re = !0, C()))), t;
		}, e.unstable_shouldYield = c, e.unstable_wrapCallback = function(e) {
			var t = _;
			return function() {
				var n = _;
				_ = t;
				try {
					return e.apply(this, arguments);
				} finally {
					_ = n;
				}
			};
		}, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), v = /* @__PURE__ */ l(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = g() : t.exports = _();
})), y = /* @__PURE__ */ l(((e) => {
	var t = v(), n = f("react"), r = f("react-dom");
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.flags & 4098 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function u(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function d(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = d(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var p = Object.assign, m = Symbol.for("react.element"), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), ee = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), C = Symbol.for("react.memo_cache_sentinel"), oe = Symbol.iterator;
	function se(e) {
		return typeof e != "object" || !e ? null : (e = oe && e[oe] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var ce = Symbol.for("react.client.reference");
	function le(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === ce ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case _: return "Fragment";
			case b: return "Profiler";
			case y: return "StrictMode";
			case ne: return "Suspense";
			case re: return "SuspenseList";
			case ae: return "Activity";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case g: return "Portal";
			case ee: return e.displayName || "Context";
			case x: return (e._context.displayName || "Context") + ".Consumer";
			case te:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case ie: return t = e.displayName || null, t === null ? le(e.type) || "Memo" : t;
			case S:
				t = e._payload, e = e._init;
				try {
					return le(e(t));
				} catch {}
		}
		return null;
	}
	var ue = Array.isArray, w = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, fe = [], pe = -1;
	function E(e) {
		return { current: e };
	}
	function me(e) {
		0 > pe || (e.current = fe[pe], fe[pe] = null, pe--);
	}
	function he(e, t) {
		pe++, fe[pe] = e.current, e.current = t;
	}
	var ge = E(null), _e = E(null), ve = E(null), ye = E(null);
	function be(e, t) {
		switch (he(ve, t), he(_e, e), he(ge, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? nf(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = nf(t), e = rf(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		me(ge), he(ge, e);
	}
	function xe() {
		me(ge), me(_e), me(ve);
	}
	function Se(e) {
		e.memoizedState !== null && he(ye, e);
		var t = ge.current, n = rf(t, e.type);
		t !== n && (he(_e, e), he(ge, n));
	}
	function D(e) {
		_e.current === e && (me(ge), me(_e)), ye.current === e && (me(ye), dp._currentValue = de);
	}
	var Ce, we;
	function Te(e) {
		if (Ce === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Ce = t && t[1] || "", we = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Ce + e + we;
	}
	var Ee = !1;
	function O(e, t) {
		if (!e || Ee) return "";
		Ee = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							e.call(n.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			Ee = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Te(n) : "";
	}
	function De(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Te(e.type);
			case 16: return Te("Lazy");
			case 13: return e.child !== t && t !== null ? Te("Suspense Fallback") : Te("Suspense");
			case 19: return Te("SuspenseList");
			case 0:
			case 15: return O(e.type, !1);
			case 11: return O(e.type.render, !1);
			case 1: return O(e.type, !0);
			case 31: return Te("Activity");
			default: return "";
		}
	}
	function Oe(e) {
		try {
			var t = "", n = null;
			do
				t += De(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var ke = Object.prototype.hasOwnProperty, Ae = t.unstable_scheduleCallback, je = t.unstable_cancelCallback, Me = t.unstable_shouldYield, Ne = t.unstable_requestPaint, k = t.unstable_now, Pe = t.unstable_getCurrentPriorityLevel, Fe = t.unstable_ImmediatePriority, Ie = t.unstable_UserBlockingPriority, Le = t.unstable_NormalPriority, Re = t.unstable_LowPriority, ze = t.unstable_IdlePriority, Be = t.log, Ve = t.unstable_setDisableYieldValue, He = null, Ue = null;
	function We(e) {
		if (typeof Be == "function" && Ve(e), Ue && typeof Ue.setStrictMode == "function") try {
			Ue.setStrictMode(He, e);
		} catch {}
	}
	var Ge = Math.clz32 ? Math.clz32 : Je, Ke = Math.log, qe = Math.LN2;
	function Je(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Ke(e) / qe | 0) | 0;
	}
	var Ye = 256, Xe = 262144, Ze = 4194304;
	function Qe(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function $e(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = Qe(n))) : i = Qe(o) : i = Qe(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = Qe(n))) : i = Qe(o)) : i = Qe(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function A(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function et(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function tt() {
		var e = Ze;
		return Ze <<= 1, !(Ze & 62914560) && (Ze = 4194304), e;
	}
	function nt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function rt(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function at(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - Ge(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && ot(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function ot(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - Ge(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function st(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Ge(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function ct(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : lt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function lt(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function ut(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function dt() {
		var e = T.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Dp(e.type)) : e;
	}
	function ft(e, t) {
		var n = T.p;
		try {
			return T.p = e, t();
		} finally {
			T.p = n;
		}
	}
	var pt = Math.random().toString(36).slice(2), mt = "__reactFiber$" + pt, ht = "__reactProps$" + pt, gt = "__reactContainer$" + pt, _t = "__reactEvents$" + pt, vt = "__reactListeners$" + pt, yt = "__reactHandles$" + pt, bt = "__reactResources$" + pt, xt = "__reactMarker$" + pt;
	function St(e) {
		delete e[mt], delete e[ht], delete e[_t], delete e[vt], delete e[yt];
	}
	function Ct(e) {
		var t = e[mt];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[gt] || n[mt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ef(e); e !== null;) {
					if (n = e[mt]) return n;
					e = Ef(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function wt(e) {
		if (e = e[mt] || e[gt]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function Tt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Et(e) {
		var t = e[bt];
		return t ||= e[bt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Dt(e) {
		e[xt] = !0;
	}
	var Ot = /* @__PURE__ */ new Set(), kt = {};
	function At(e, t) {
		jt(e, t), jt(e + "Capture", t);
	}
	function jt(e, t) {
		for (kt[e] = t, e = 0; e < t.length; e++) Ot.add(t[e]);
	}
	var Mt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Nt = {}, Pt = {};
	function Ft(e) {
		return ke.call(Pt, e) ? !0 : ke.call(Nt, e) ? !1 : Mt.test(e) ? Pt[e] = !0 : (Nt[e] = !0, !1);
	}
	function It(e, t, n) {
		if (Ft(t)) if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
					e.removeAttribute(t);
					return;
				case "boolean":
					var r = t.toLowerCase().slice(0, 5);
					if (r !== "data-" && r !== "aria-") {
						e.removeAttribute(t);
						return;
					}
			}
			e.setAttribute(t, "" + n);
		}
	}
	function Lt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, "" + n);
		}
	}
	function Rt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, "" + r);
		}
	}
	function zt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function Bt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Vt(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function Ht(e) {
		if (!e._valueTracker) {
			var t = Bt(e) ? "checked" : "value";
			e._valueTracker = Vt(e, t, "" + e[t]);
		}
	}
	function Ut(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Bt(e) ? e.checked ? "true" : "false" : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
	}
	function Wt(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var Gt = /[\n"\\]/g;
	function Kt(e) {
		return e.replace(Gt, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function qt(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + zt(t)) : e.value !== "" + zt(t) && (e.value = "" + zt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : Yt(e, o, zt(n)) : Yt(e, o, zt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + zt(s) : e.removeAttribute("name");
	}
	function Jt(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				Ht(e);
				return;
			}
			n = n == null ? "" : "" + zt(n), t = t == null ? n : "" + zt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Ht(e);
	}
	function Yt(e, t, n) {
		t === "number" && Wt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
	}
	function Xt(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + zt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Zt(e, t, n) {
		if (t != null && (t = "" + zt(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + zt(n);
	}
	function Qt(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (ue(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = zt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Ht(e);
	}
	function $t(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var en = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function tn(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || en.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function nn(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && tn(e, a, r);
		} else for (var o in t) t.hasOwnProperty(o) && tn(e, o, t[o]);
	}
	function rn(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var an = new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), on = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function sn(e) {
		return on.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function cn() {}
	var ln = null;
	function un(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var dn = null, fn = null;
	function pn(e) {
		var t = wt(e);
		if (t && (e = t.stateNode)) {
			var n = e[ht] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (qt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + Kt("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[ht] || null;
								if (!a) throw Error(i(90));
								qt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && Ut(r);
					}
					break a;
				case "textarea":
					Zt(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && Xt(e, !!n.multiple, t, !1);
			}
		}
	}
	var mn = !1;
	function hn(e, t, n) {
		if (mn) return e(t, n);
		mn = !0;
		try {
			return e(t);
		} finally {
			if (mn = !1, (dn !== null || fn !== null) && (Nu(), dn && (t = dn, e = fn, fn = dn = null, pn(t), e))) for (t = 0; t < e.length; t++) pn(e[t]);
		}
	}
	function gn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[ht] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var _n = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), vn = !1;
	if (_n) try {
		var yn = {};
		Object.defineProperty(yn, "passive", { get: function() {
			vn = !0;
		} }), window.addEventListener("test", yn, yn), window.removeEventListener("test", yn, yn);
	} catch {
		vn = !1;
	}
	var bn = null, xn = null, Sn = null;
	function Cn() {
		if (Sn) return Sn;
		var e, t = xn, n = t.length, r, i = "value" in bn ? bn.value : bn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Sn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function wn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Tn() {
		return !0;
	}
	function En() {
		return !1;
	}
	function Dn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Tn : En, this.isPropagationStopped = En, this;
		}
		return p(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Tn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Tn);
			},
			persist: function() {},
			isPersistent: Tn
		}), t;
	}
	var On = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, kn = Dn(On), An = p({}, On, {
		view: 0,
		detail: 0
	}), jn = Dn(An), Mn, Nn, Pn, Fn = p({}, An, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Kn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Pn && (Pn && e.type === "mousemove" ? (Mn = e.screenX - Pn.screenX, Nn = e.screenY - Pn.screenY) : Nn = Mn = 0, Pn = e), Mn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Nn;
		}
	}), In = Dn(Fn), Ln = Dn(p({}, Fn, { dataTransfer: 0 })), Rn = Dn(p({}, An, { relatedTarget: 0 })), zn = Dn(p({}, On, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Bn = Dn(p({}, On, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Vn = Dn(p({}, On, { data: 0 })), Hn = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Un = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Wn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Gn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Wn[e]) ? !!t[e] : !1;
	}
	function Kn() {
		return Gn;
	}
	var qn = Dn(p({}, An, {
		key: function(e) {
			if (e.key) {
				var t = Hn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = wn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Un[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Kn,
		charCode: function(e) {
			return e.type === "keypress" ? wn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? wn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Jn = Dn(p({}, Fn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Yn = Dn(p({}, An, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Kn
	})), Xn = Dn(p({}, On, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Zn = Dn(p({}, Fn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), Qn = Dn(p({}, On, {
		newState: 0,
		oldState: 0
	})), $n = [
		9,
		13,
		27,
		32
	], er = _n && "CompositionEvent" in window, tr = null;
	_n && "documentMode" in document && (tr = document.documentMode);
	var nr = _n && "TextEvent" in window && !tr, rr = _n && (!er || tr && 8 < tr && 11 >= tr), ir = " ", ar = !1;
	function or(e, t) {
		switch (e) {
			case "keyup": return $n.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function sr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var cr = !1;
	function lr(e, t) {
		switch (e) {
			case "compositionend": return sr(t);
			case "keypress": return t.which === 32 ? (ar = !0, ir) : null;
			case "textInput": return e = t.data, e === ir && ar ? null : e;
			default: return null;
		}
	}
	function ur(e, t) {
		if (cr) return e === "compositionend" || !er && or(e, t) ? (e = Cn(), Sn = xn = bn = null, cr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return rr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var dr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function fr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!dr[e.type] : t === "textarea";
	}
	function pr(e, t, n, r) {
		dn ? fn ? fn.push(r) : fn = [r] : dn = r, t = Bd(t, "onChange"), 0 < t.length && (n = new kn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var mr = null, hr = null;
	function gr(e) {
		Nd(e, 0);
	}
	function _r(e) {
		if (Ut(Tt(e))) return e;
	}
	function vr(e, t) {
		if (e === "change") return t;
	}
	var yr = !1;
	if (_n) {
		var br;
		if (_n) {
			var xr = "oninput" in document;
			if (!xr) {
				var Sr = document.createElement("div");
				Sr.setAttribute("oninput", "return;"), xr = typeof Sr.oninput == "function";
			}
			br = xr;
		} else br = !1;
		yr = br && (!document.documentMode || 9 < document.documentMode);
	}
	function Cr() {
		mr && (mr.detachEvent("onpropertychange", wr), hr = mr = null);
	}
	function wr(e) {
		if (e.propertyName === "value" && _r(hr)) {
			var t = [];
			pr(t, hr, e, un(e)), hn(gr, t);
		}
	}
	function Tr(e, t, n) {
		e === "focusin" ? (Cr(), mr = t, hr = n, mr.attachEvent("onpropertychange", wr)) : e === "focusout" && Cr();
	}
	function Er(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return _r(hr);
	}
	function Dr(e, t) {
		if (e === "click") return _r(t);
	}
	function Or(e, t) {
		if (e === "input" || e === "change") return _r(t);
	}
	function kr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Ar = typeof Object.is == "function" ? Object.is : kr;
	function jr(e, t) {
		if (Ar(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!ke.call(t, i) || !Ar(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Mr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Nr(e, t) {
		var n = Mr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Mr(n);
		}
	}
	function Pr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Fr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Wt(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Wt(e.document);
		}
		return t;
	}
	function Ir(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Lr = _n && "documentMode" in document && 11 >= document.documentMode, Rr = null, zr = null, Br = null, Vr = !1;
	function Hr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Vr || Rr == null || Rr !== Wt(r) || (r = Rr, "selectionStart" in r && Ir(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Br && jr(Br, r) || (Br = r, r = Bd(zr, "onSelect"), 0 < r.length && (t = new kn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Rr)));
	}
	function Ur(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Wr = {
		animationend: Ur("Animation", "AnimationEnd"),
		animationiteration: Ur("Animation", "AnimationIteration"),
		animationstart: Ur("Animation", "AnimationStart"),
		transitionrun: Ur("Transition", "TransitionRun"),
		transitionstart: Ur("Transition", "TransitionStart"),
		transitioncancel: Ur("Transition", "TransitionCancel"),
		transitionend: Ur("Transition", "TransitionEnd")
	}, Gr = {}, Kr = {};
	_n && (Kr = document.createElement("div").style, "AnimationEvent" in window || (delete Wr.animationend.animation, delete Wr.animationiteration.animation, delete Wr.animationstart.animation), "TransitionEvent" in window || delete Wr.transitionend.transition);
	function qr(e) {
		if (Gr[e]) return Gr[e];
		if (!Wr[e]) return e;
		var t = Wr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Kr) return Gr[e] = t[n];
		return e;
	}
	var Jr = qr("animationend"), Yr = qr("animationiteration"), Xr = qr("animationstart"), Zr = qr("transitionrun"), Qr = qr("transitionstart"), $r = qr("transitioncancel"), ei = qr("transitionend"), ti = /* @__PURE__ */ new Map(), ni = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	ni.push("scrollEnd");
	function ri(e, t) {
		ti.set(e, t), At(t, [e]);
	}
	var ii = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, ai = [], oi = 0, si = 0;
	function ci() {
		for (var e = oi, t = si = oi = 0; t < e;) {
			var n = ai[t];
			ai[t++] = null;
			var r = ai[t];
			ai[t++] = null;
			var i = ai[t];
			ai[t++] = null;
			var a = ai[t];
			if (ai[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && fi(n, i, a);
		}
	}
	function li(e, t, n, r) {
		ai[oi++] = e, ai[oi++] = t, ai[oi++] = n, ai[oi++] = r, si |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function ui(e, t, n, r) {
		return li(e, t, n, r), pi(e);
	}
	function di(e, t) {
		return li(e, null, null, t), pi(e);
	}
	function fi(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Ge(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function pi(e) {
		if (50 < wu) throw wu = 0, Tu = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var mi = {};
	function hi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function gi(e, t, n, r) {
		return new hi(e, t, n, r);
	}
	function _i(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function yi(e, t) {
		var n = e.alternate;
		return n === null ? (n = gi(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function bi(e, t) {
		e.flags &= 65011714;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function xi(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof e == "function") _i(e) && (s = 1);
		else if (typeof e == "string") s = np(e, n, ge.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (e) {
			case ae: return e = gi(31, n, t, a), e.elementType = ae, e.lanes = o, e;
			case _: return Si(n.children, a, o, t);
			case y:
				s = 8, a |= 24;
				break;
			case b: return e = gi(12, n, t, a | 2), e.elementType = b, e.lanes = o, e;
			case ne: return e = gi(13, n, t, a), e.elementType = ne, e.lanes = o, e;
			case re: return e = gi(19, n, t, a), e.elementType = re, e.lanes = o, e;
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case ee:
						s = 10;
						break a;
					case x:
						s = 9;
						break a;
					case te:
						s = 11;
						break a;
					case ie:
						s = 14;
						break a;
					case S:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = gi(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Si(e, t, n, r) {
		return e = gi(7, e, r, t), e.lanes = n, e;
	}
	function Ci(e, t, n) {
		return e = gi(6, e, null, t), e.lanes = n, e;
	}
	function wi(e) {
		var t = gi(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Ti(e, t, n) {
		return t = gi(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Ei = /* @__PURE__ */ new WeakMap();
	function Di(e, t) {
		if (typeof e == "object" && e) {
			var n = Ei.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Oe(t)
			}, Ei.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Oe(t)
		};
	}
	var Oi = [], ki = 0, Ai = null, ji = 0, Mi = [], Ni = 0, Pi = null, Fi = 1, Ii = "";
	function Li(e, t) {
		Oi[ki++] = ji, Oi[ki++] = Ai, Ai = e, ji = t;
	}
	function Ri(e, t, n) {
		Mi[Ni++] = Fi, Mi[Ni++] = Ii, Mi[Ni++] = Pi, Pi = e;
		var r = Fi;
		e = Ii;
		var i = 32 - Ge(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Ge(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Fi = 1 << 32 - Ge(t) + i | n << i | r, Ii = a + e;
		} else Fi = 1 << a | n << i | r, Ii = e;
	}
	function zi(e) {
		e.return !== null && (Li(e, 1), Ri(e, 1, 0));
	}
	function Bi(e) {
		for (; e === Ai;) Ai = Oi[--ki], Oi[ki] = null, ji = Oi[--ki], Oi[ki] = null;
		for (; e === Pi;) Pi = Mi[--Ni], Mi[Ni] = null, Ii = Mi[--Ni], Mi[Ni] = null, Fi = Mi[--Ni], Mi[Ni] = null;
	}
	function Vi(e, t) {
		Mi[Ni++] = Fi, Mi[Ni++] = Ii, Mi[Ni++] = Pi, Fi = t.id, Ii = t.overflow, Pi = e;
	}
	var Hi = null, j = null, M = !1, Ui = null, Wi = !1, Gi = Error(i(519));
	function Ki(e) {
		throw Qi(Di(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), Gi;
	}
	function qi(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[mt] = e, t[ht] = r, n) {
			case "dialog":
				z("cancel", t), z("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				z("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < jd.length; n++) z(jd[n], t);
				break;
			case "source":
				z("error", t);
				break;
			case "img":
			case "image":
			case "link":
				z("error", t), z("load", t);
				break;
			case "details":
				z("toggle", t);
				break;
			case "input":
				z("invalid", t), Jt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				z("invalid", t);
				break;
			case "textarea": z("invalid", t), Qt(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Kd(t.textContent, n) ? (r.popover != null && (z("beforetoggle", t), z("toggle", t)), r.onScroll != null && z("scroll", t), r.onScrollEnd != null && z("scrollend", t), r.onClick != null && (t.onclick = cn), t = !0) : t = !1, t || Ki(e, !0);
	}
	function Ji(e) {
		for (Hi = e.return; Hi;) switch (Hi.tag) {
			case 5:
			case 31:
			case 13:
				Wi = !1;
				return;
			case 27:
			case 3:
				Wi = !0;
				return;
			default: Hi = Hi.return;
		}
	}
	function Yi(e) {
		if (e !== Hi) return !1;
		if (!M) return Ji(e), M = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || af(e.type, e.memoizedProps)), n = !n), n && j && Ki(e), Ji(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			j = Tf(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			j = Tf(e);
		} else t === 27 ? (t = j, pf(e.type) ? (e = wf, wf = null, j = e) : j = t) : j = Hi ? Cf(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Xi() {
		j = Hi = null, M = !1;
	}
	function Zi() {
		var e = Ui;
		return e !== null && (uu === null ? uu = e : uu.push.apply(uu, e), Ui = null), e;
	}
	function Qi(e) {
		Ui === null ? Ui = [e] : Ui.push(e);
	}
	var $i = E(null), ea = null, ta = null;
	function na(e, t, n) {
		he($i, t._currentValue), t._currentValue = n;
	}
	function ra(e) {
		e._currentValue = $i.current, me($i);
	}
	function ia(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function aa(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), ia(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), ia(s, n, e), s = null;
			} else s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function oa(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					Ar(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === ye.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [dp] : e.push(dp));
			}
			a = a.return;
		}
		e !== null && aa(t, e, n, r), t.flags |= 262144;
	}
	function sa(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Ar(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function ca(e) {
		ea = e, ta = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function la(e) {
		return da(ea, e);
	}
	function ua(e, t) {
		return ea === null && ca(e), da(e, t);
	}
	function da(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, ta === null) {
			if (e === null) throw Error(i(308));
			ta = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else ta = ta.next = t;
		return n;
	}
	var fa = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, pa = t.unstable_scheduleCallback, ma = t.unstable_NormalPriority, ha = {
		$$typeof: ee,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function ga() {
		return {
			controller: new fa(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function _a(e) {
		e.refCount--, e.refCount === 0 && pa(ma, function() {
			e.controller.abort();
		});
	}
	var va = null, N = 0, P = 0, ya = null;
	function ba(e, t) {
		if (va === null) {
			var n = va = [];
			N = 0, P = Td(), ya = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return N++, t.then(xa, xa), t;
	}
	function xa() {
		if (--N === 0 && va !== null) {
			ya !== null && (ya.status = "fulfilled");
			var e = va;
			va = null, P = 0, ya = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Sa(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var Ca = w.S;
	w.S = function(e, t) {
		pu = k(), typeof t == "object" && t && typeof t.then == "function" && ba(e, t), Ca !== null && Ca(e, t);
	};
	var wa = E(null);
	function Ta() {
		var e = wa.current;
		return e === null ? Xl.pooledCache : e;
	}
	function Ea(e, t) {
		t === null ? he(wa, wa.current) : he(wa, t.pool);
	}
	function Da() {
		var e = Ta();
		return e === null ? null : {
			parent: ha._currentValue,
			pool: e
		};
	}
	var Oa = Error(i(460)), ka = Error(i(474)), Aa = Error(i(542)), ja = { then: function() {} };
	function Ma(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Na(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(cn, cn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, La(e), e;
			default:
				if (typeof t.status == "string") t.then(cn, cn);
				else {
					if (e = Xl, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, La(e), e;
				}
				throw Fa = t, Oa;
		}
	}
	function Pa(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (Fa = e, Oa) : e;
		}
	}
	var Fa = null;
	function Ia() {
		if (Fa === null) throw Error(i(459));
		var e = Fa;
		return Fa = null, e;
	}
	function La(e) {
		if (e === Oa || e === Aa) throw Error(i(483));
	}
	var Ra = null, za = 0;
	function Ba(e) {
		var t = za;
		return za += 1, Ra === null && (Ra = []), Na(Ra, e, t);
	}
	function Va(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function Ha(e, t) {
		throw t.$$typeof === m ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function Ua(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = yi(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 67108866), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Ci(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === _ ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === S && Pa(i) === t.type) ? (t = a(t, n.props), Va(t, n), t.return = e, t) : (t = xi(n.type, n.key, n.props, null, e.mode, r), Va(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Ti(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Si(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Ci("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case h: return n = xi(t.type, t.key, t.props, null, e.mode, n), Va(n, t), n.return = e, n;
					case g: return t = Ti(t, e.mode, n), t.return = e, t;
					case S: return t = Pa(t), f(e, t, n);
				}
				if (ue(t) || se(t)) return t = Si(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, Ba(t), n);
				if (t.$$typeof === ee) return f(e, ua(e, t), n);
				Ha(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case h: return n.key === i ? l(e, t, n, r) : null;
					case g: return n.key === i ? u(e, t, n, r) : null;
					case S: return n = Pa(n), p(e, t, n, r);
				}
				if (ue(n) || se(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, Ba(n), r);
				if (n.$$typeof === ee) return p(e, t, ua(e, n), r);
				Ha(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case h: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case g: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case S: return r = Pa(r), m(e, t, n, r, i);
				}
				if (ue(r) || se(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, Ba(r), i);
				if (r.$$typeof === ee) return m(e, t, n, ua(t, r), i);
				Ha(t, r);
			}
			return null;
		}
		function v(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), M && Li(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return M && Li(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), M && Li(i, h), l;
		}
		function y(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), M && Li(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return M && Li(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), M && Li(a, g), u;
		}
		function b(e, r, o, c) {
			if (typeof o == "object" && o && o.type === _ && o.key === null && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case h:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === _) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === S && Pa(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), Va(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								} else t(e, r);
								r = r.sibling;
							}
							o.type === _ ? (c = Si(o.props.children, e.mode, c, o.key), c.return = e, e = c) : (c = xi(o.type, o.key, o.props, null, e.mode, c), Va(c, o), c.return = e, e = c);
						}
						return s(e);
					case g:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
									n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
									break a;
								} else {
									n(e, r);
									break;
								}
								else t(e, r);
								r = r.sibling;
							}
							c = Ti(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case S: return o = Pa(o), b(e, r, o, c);
				}
				if (ue(o)) return v(e, r, o, c);
				if (se(o)) {
					if (l = se(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), y(e, r, o, c);
				}
				if (typeof o.then == "function") return b(e, r, Ba(o), c);
				if (o.$$typeof === ee) return b(e, r, ua(e, o), c);
				Ha(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Ci(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				za = 0;
				var i = b(e, t, n, r);
				return Ra = null, i;
			} catch (t) {
				if (t === Oa || t === Aa) throw t;
				var a = gi(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var Wa = Ua(!0), Ga = Ua(!1), Ka = !1;
	function qa(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function Ja(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function Ya(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function Xa(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, Yl & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = pi(e), fi(e, null, n), t;
		}
		return li(e, r, t, n), pi(e);
	}
	function Za(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, st(e, n);
		}
	}
	function Qa(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var $a = !1;
	function eo() {
		if ($a) {
			var e = ya;
			if (e !== null) throw e;
		}
	}
	function to(e, t, n, r) {
		$a = !1;
		var i = e.updateQueue;
		Ka = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, m = f !== s.lane;
				if (m ? (Zl & f) === f : (r & f) === f) {
					f !== 0 && f === P && ($a = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var h = e, g = s;
						f = t;
						var _ = n;
						switch (g.tag) {
							case 1:
								if (h = g.payload, typeof h == "function") {
									d = h.call(_, d, f);
									break a;
								}
								d = h;
								break a;
							case 3: h.flags = h.flags & -65537 | 128;
							case 0:
								if (h = g.payload, f = typeof h == "function" ? h.call(_, d, f) : h, f == null) break a;
								d = p({}, d, f);
								break a;
							case 2: Ka = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, m && (e.flags |= 8192), m = i.callbacks, m === null ? i.callbacks = [f] : m.push(f));
				} else m = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = m, c = d) : u = u.next = m, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					m = s, s = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), au |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function no(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function ro(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) no(n[e], t);
	}
	var io = E(null), ao = E(0);
	function oo(e, t) {
		e = ru, he(ao, e), he(io, t), ru = e | t.baseLanes;
	}
	function so() {
		he(ao, ru), he(io, io.current);
	}
	function co() {
		ru = ao.current, me(io), me(ao);
	}
	var lo = E(null), uo = null;
	function fo(e) {
		var t = e.alternate;
		he(_o, _o.current & 1), he(lo, e), uo === null && (t === null || io.current !== null || t.memoizedState !== null) && (uo = e);
	}
	function po(e) {
		he(_o, _o.current), he(lo, e), uo === null && (uo = e);
	}
	function mo(e) {
		e.tag === 22 ? (he(_o, _o.current), he(lo, e), uo === null && (uo = e)) : ho(e);
	}
	function ho() {
		he(_o, _o.current), he(lo, lo.current);
	}
	function go(e) {
		me(lo), uo === e && (uo = null), me(_o);
	}
	var _o = E(0);
	function vo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || bf(n) || xf(n))) return t;
			} else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var yo = 0, F = null, bo = null, xo = null, So = !1, Co = !1, wo = !1, To = 0, Eo = 0, Do = null, Oo = 0;
	function ko() {
		throw Error(i(321));
	}
	function Ao(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Ar(e[n], t[n])) return !1;
		return !0;
	}
	function jo(e, t, n, r, i, a) {
		return yo = a, F = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, w.H = e === null || e.memoizedState === null ? Js : Ys, wo = !1, a = n(r, i), wo = !1, Co && (a = No(t, n, r, i)), Mo(e), a;
	}
	function Mo(e) {
		w.H = qs;
		var t = bo !== null && bo.next !== null;
		if (yo = 0, xo = bo = F = null, So = !1, Eo = 0, Do = null, t) throw Error(i(300));
		e === null || fc || (e = e.dependencies, e !== null && sa(e) && (fc = !0));
	}
	function No(e, t, n, r) {
		F = e;
		var a = 0;
		do {
			if (Co && (Do = null), Eo = 0, Co = !1, 25 <= a) throw Error(i(301));
			if (a += 1, xo = bo = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			w.H = Xs, o = t(n, r);
		} while (Co);
		return o;
	}
	function Po() {
		var e = w.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? Vo(t) : t, e = e.useState()[0], (bo === null ? null : bo.memoizedState) !== e && (F.flags |= 1024), t;
	}
	function Fo() {
		var e = To !== 0;
		return To = 0, e;
	}
	function Io(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function Lo(e) {
		if (So) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			So = !1;
		}
		yo = 0, xo = bo = F = null, Co = !1, Eo = To = 0, Do = null;
	}
	function Ro() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return xo === null ? F.memoizedState = xo = e : xo = xo.next = e, xo;
	}
	function zo() {
		if (bo === null) {
			var e = F.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = bo.next;
		var t = xo === null ? F.memoizedState : xo.next;
		if (t !== null) xo = t, bo = e;
		else {
			if (e === null) throw F.alternate === null ? Error(i(467)) : Error(i(310));
			bo = e, e = {
				memoizedState: bo.memoizedState,
				baseState: bo.baseState,
				baseQueue: bo.baseQueue,
				queue: bo.queue,
				next: null
			}, xo === null ? F.memoizedState = xo = e : xo = xo.next = e;
		}
		return xo;
	}
	function Bo() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function Vo(e) {
		var t = Eo;
		return Eo += 1, Do === null && (Do = []), e = Na(Do, e, t), t = F, (xo === null ? t.memoizedState : xo.next) === null && (t = t.alternate, w.H = t === null || t.memoizedState === null ? Js : Ys), e;
	}
	function Ho(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return Vo(e);
			if (e.$$typeof === ee) return la(e);
		}
		throw Error(i(438, String(e)));
	}
	function Uo(e) {
		var t = null, n = F.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = F.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = Bo(), F.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = C;
		return t.index++, n;
	}
	function Wo(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Go(e) {
		return Ko(zo(), bo, e);
	}
	function Ko(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (yo & f) === f : (Zl & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === P && (d = !0);
					else if ((yo & p) === p) {
						u = u.next, p === P && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, F.lanes |= p, au |= p;
					f = u.action, wo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, F.lanes |= f, au |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Ar(o, e.memoizedState) && (fc = !0, d && (n = ya, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function qo(e) {
		var t = zo(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Ar(o, t.memoizedState) || (fc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function Jo(e, t, n) {
		var r = F, a = zo(), o = M;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Ar((bo || a).memoizedState, n);
		if (s && (a.memoizedState = n, fc = !0), a = a.queue, ys(Zo.bind(null, r, a, e), [e]), a.getSnapshot !== t || s || xo !== null && xo.memoizedState.tag & 1) {
			if (r.flags |= 2048, ms(9, { destroy: void 0 }, Xo.bind(null, r, a, n, t), null), Xl === null) throw Error(i(349));
			o || yo & 127 || Yo(r, t, n);
		}
		return n;
	}
	function Yo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = F.updateQueue, t === null ? (t = Bo(), F.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Xo(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Qo(t) && $o(e);
	}
	function Zo(e, t, n) {
		return n(function() {
			Qo(t) && $o(e);
		});
	}
	function Qo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Ar(e, n);
		} catch {
			return !0;
		}
	}
	function $o(e) {
		var t = di(e, 2);
		t !== null && Ou(t, e, 2);
	}
	function es(e) {
		var t = Ro();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), wo) {
				We(!0);
				try {
					n();
				} finally {
					We(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Wo,
			lastRenderedState: e
		}, t;
	}
	function ts(e, t, n, r) {
		return e.baseState = n, Ko(e, bo, typeof r == "function" ? r : Wo);
	}
	function ns(e, t, n, r, a) {
		if (Ws(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			w.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, rs(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function rs(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = w.T, o = {};
			w.T = o;
			try {
				var s = n(i, r), c = w.S;
				c !== null && c(o, s), is(e, t, s);
			} catch (n) {
				os(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), w.T = a;
			}
		} else try {
			a = n(i, r), is(e, t, a);
		} catch (n) {
			os(e, t, n);
		}
	}
	function is(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			as(e, t, n);
		}, function(n) {
			return os(e, t, n);
		}) : as(e, t, n);
	}
	function as(e, t, n) {
		t.status = "fulfilled", t.value = n, ss(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, rs(e, n)));
	}
	function os(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, ss(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function ss(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function cs(e, t) {
		return t;
	}
	function ls(e, t) {
		if (M) {
			var n = Xl.formState;
			if (n !== null) {
				a: {
					var r = F;
					if (M) {
						if (j) {
							b: {
								for (var i = j, a = Wi; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = Cf(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								j = Cf(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						Ki(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = Ro(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: cs,
			lastRenderedState: t
		}, n.queue = r, n = Vs.bind(null, F, r), r.dispatch = n, r = es(!1), a = Us.bind(null, F, !1, r.queue), r = Ro(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = ns.bind(null, F, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function us(e) {
		return ds(zo(), bo, e);
	}
	function ds(e, t, n) {
		if (t = Ko(e, t, cs)[0], e = Go(Wo)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = Vo(t);
		} catch (e) {
			throw e === Oa ? Aa : e;
		}
		else r = t;
		t = zo();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (F.flags |= 2048, ms(9, { destroy: void 0 }, fs.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function fs(e, t) {
		e.action = t;
	}
	function ps(e) {
		var t = zo(), n = bo;
		if (n !== null) return ds(t, n, e);
		zo(), t = t.memoizedState, n = zo();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function ms(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = F.updateQueue, t === null && (t = Bo(), F.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function hs() {
		return zo().memoizedState;
	}
	function gs(e, t, n, r) {
		var i = Ro();
		F.flags |= e, i.memoizedState = ms(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function _s(e, t, n, r) {
		var i = zo();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		bo !== null && r !== null && Ao(r, bo.memoizedState.deps) ? i.memoizedState = ms(t, a, n, r) : (F.flags |= e, i.memoizedState = ms(1 | t, a, n, r));
	}
	function vs(e, t) {
		gs(8390656, 8, e, t);
	}
	function ys(e, t) {
		_s(2048, 8, e, t);
	}
	function bs(e) {
		F.flags |= 4;
		var t = F.updateQueue;
		if (t === null) t = Bo(), F.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function xs(e) {
		var t = zo().memoizedState;
		return bs({
			ref: t,
			nextImpl: e
		}), function() {
			if (Yl & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Ss(e, t) {
		return _s(4, 2, e, t);
	}
	function Cs(e, t) {
		return _s(4, 4, e, t);
	}
	function ws(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function Ts(e, t, n) {
		n = n == null ? null : n.concat([e]), _s(4, 4, ws.bind(null, t, e), n);
	}
	function Es() {}
	function Ds(e, t) {
		var n = zo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Ao(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Os(e, t) {
		var n = zo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Ao(t, r[1])) return r[0];
		if (r = e(), wo) {
			We(!0);
			try {
				e();
			} finally {
				We(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function ks(e, t, n) {
		return n === void 0 || yo & 1073741824 && !(Zl & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Du(), F.lanes |= e, au |= e, n);
	}
	function As(e, t, n, r) {
		return Ar(n, t) ? n : io.current === null ? !(yo & 42) || yo & 1073741824 && !(Zl & 261930) ? (fc = !0, e.memoizedState = n) : (e = Du(), F.lanes |= e, au |= e, t) : (e = ks(e, n, r), Ar(e, t) || (fc = !0), e);
	}
	function js(e, t, n, r, i) {
		var a = T.p;
		T.p = a !== 0 && 8 > a ? a : 8;
		var o = w.T, s = {};
		w.T = s, Us(e, !1, t, n);
		try {
			var c = i(), l = w.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? Hs(e, t, Sa(c, r), Eu(e)) : Hs(e, t, r, Eu(e));
		} catch (n) {
			Hs(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, Eu());
		} finally {
			T.p = a, o !== null && s.types !== null && (o.types = s.types), w.T = o;
		}
	}
	function Ms() {}
	function Ns(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = Ps(e).queue;
		js(e, a, t, de, n === null ? Ms : function() {
			return Fs(e), n(r);
		});
	}
	function Ps(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: de,
			baseState: de,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Wo,
				lastRenderedState: de
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Wo,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function Fs(e) {
		var t = Ps(e);
		t.next === null && (t = e.alternate.memoizedState), Hs(e, t.next.queue, {}, Eu());
	}
	function Is() {
		return la(dp);
	}
	function Ls() {
		return zo().memoizedState;
	}
	function Rs() {
		return zo().memoizedState;
	}
	function zs(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = Eu();
					e = Ya(n);
					var r = Xa(t, e, n);
					r !== null && (Ou(r, t, n), Za(r, t, n)), t = { cache: ga() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function Bs(e, t, n) {
		var r = Eu();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Ws(e) ? Gs(t, n) : (n = ui(e, t, n, r), n !== null && (Ou(n, e, r), Ks(n, t, r)));
	}
	function Vs(e, t, n) {
		Hs(e, t, n, Eu());
	}
	function Hs(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Ws(e)) Gs(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Ar(s, o)) return li(e, t, i, 0), Xl === null && ci(), !1;
			} catch {}
			if (n = ui(e, t, i, r), n !== null) return Ou(n, e, r), Ks(n, t, r), !0;
		}
		return !1;
	}
	function Us(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Td(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Ws(e)) {
			if (t) throw Error(i(479));
		} else t = ui(e, n, r, 2), t !== null && Ou(t, e, 2);
	}
	function Ws(e) {
		var t = e.alternate;
		return e === F || t !== null && t === F;
	}
	function Gs(e, t) {
		Co = So = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function Ks(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, st(e, n);
		}
	}
	var qs = {
		readContext: la,
		use: Ho,
		useCallback: ko,
		useContext: ko,
		useEffect: ko,
		useImperativeHandle: ko,
		useLayoutEffect: ko,
		useInsertionEffect: ko,
		useMemo: ko,
		useReducer: ko,
		useRef: ko,
		useState: ko,
		useDebugValue: ko,
		useDeferredValue: ko,
		useTransition: ko,
		useSyncExternalStore: ko,
		useId: ko,
		useHostTransitionStatus: ko,
		useFormState: ko,
		useActionState: ko,
		useOptimistic: ko,
		useMemoCache: ko,
		useCacheRefresh: ko
	};
	qs.useEffectEvent = ko;
	var Js = {
		readContext: la,
		use: Ho,
		useCallback: function(e, t) {
			return Ro().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: la,
		useEffect: vs,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), gs(4194308, 4, ws.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return gs(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			gs(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = Ro();
			t = t === void 0 ? null : t;
			var r = e();
			if (wo) {
				We(!0);
				try {
					e();
				} finally {
					We(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = Ro();
			if (n !== void 0) {
				var i = n(t);
				if (wo) {
					We(!0);
					try {
						n(t);
					} finally {
						We(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = Bs.bind(null, F, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = Ro();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = es(e);
			var t = e.queue, n = Vs.bind(null, F, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: Es,
		useDeferredValue: function(e, t) {
			return ks(Ro(), e, t);
		},
		useTransition: function() {
			var e = es(!1);
			return e = js.bind(null, F, e.queue, !0, !1), Ro().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = F, a = Ro();
			if (M) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), Xl === null) throw Error(i(349));
				Zl & 127 || Yo(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, vs(Zo.bind(null, r, o, e), [e]), r.flags |= 2048, ms(9, { destroy: void 0 }, Xo.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = Ro(), t = Xl.identifierPrefix;
			if (M) {
				var n = Ii, r = Fi;
				n = (r & ~(1 << 32 - Ge(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = To++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Oo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: Is,
		useFormState: ls,
		useActionState: ls,
		useOptimistic: function(e) {
			var t = Ro();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = Us.bind(null, F, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: Uo,
		useCacheRefresh: function() {
			return Ro().memoizedState = zs.bind(null, F);
		},
		useEffectEvent: function(e) {
			var t = Ro(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (Yl & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, Ys = {
		readContext: la,
		use: Ho,
		useCallback: Ds,
		useContext: la,
		useEffect: ys,
		useImperativeHandle: Ts,
		useInsertionEffect: Ss,
		useLayoutEffect: Cs,
		useMemo: Os,
		useReducer: Go,
		useRef: hs,
		useState: function() {
			return Go(Wo);
		},
		useDebugValue: Es,
		useDeferredValue: function(e, t) {
			return As(zo(), bo.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Go(Wo)[0], t = zo().memoizedState;
			return [typeof e == "boolean" ? e : Vo(e), t];
		},
		useSyncExternalStore: Jo,
		useId: Ls,
		useHostTransitionStatus: Is,
		useFormState: us,
		useActionState: us,
		useOptimistic: function(e, t) {
			return ts(zo(), bo, e, t);
		},
		useMemoCache: Uo,
		useCacheRefresh: Rs
	};
	Ys.useEffectEvent = xs;
	var Xs = {
		readContext: la,
		use: Ho,
		useCallback: Ds,
		useContext: la,
		useEffect: ys,
		useImperativeHandle: Ts,
		useInsertionEffect: Ss,
		useLayoutEffect: Cs,
		useMemo: Os,
		useReducer: qo,
		useRef: hs,
		useState: function() {
			return qo(Wo);
		},
		useDebugValue: Es,
		useDeferredValue: function(e, t) {
			var n = zo();
			return bo === null ? ks(n, e, t) : As(n, bo.memoizedState, e, t);
		},
		useTransition: function() {
			var e = qo(Wo)[0], t = zo().memoizedState;
			return [typeof e == "boolean" ? e : Vo(e), t];
		},
		useSyncExternalStore: Jo,
		useId: Ls,
		useHostTransitionStatus: Is,
		useFormState: ps,
		useActionState: ps,
		useOptimistic: function(e, t) {
			var n = zo();
			return bo === null ? (n.baseState = e, [e, n.queue.dispatch]) : ts(n, bo, e, t);
		},
		useMemoCache: Uo,
		useCacheRefresh: Rs
	};
	Xs.useEffectEvent = xs;
	function Zs(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : p({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var Qs = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = Eu(), i = Ya(r);
			i.payload = t, n != null && (i.callback = n), t = Xa(e, i, r), t !== null && (Ou(t, e, r), Za(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = Eu(), i = Ya(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Xa(e, i, r), t !== null && (Ou(t, e, r), Za(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = Eu(), r = Ya(n);
			r.tag = 2, t != null && (r.callback = t), t = Xa(e, r, n), t !== null && (Ou(t, e, n), Za(t, e, n));
		}
	};
	function $s(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !jr(n, r) || !jr(i, a) : !0;
	}
	function ec(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Qs.enqueueReplaceState(t, t.state, null);
	}
	function tc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = p({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function nc(e) {
		ii(e);
	}
	function rc(e) {
		console.error(e);
	}
	function ic(e) {
		ii(e);
	}
	function ac(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function oc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function sc(e, t, n) {
		return n = Ya(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			ac(e, t);
		}, n;
	}
	function cc(e) {
		return e = Ya(e), e.tag = 3, e;
	}
	function lc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				oc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			oc(t, n, r), typeof i != "function" && (gu === null ? gu = new Set([this]) : gu.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function uc(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && oa(t, n, a, !0), n = lo.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13: return uo === null ? Bu() : n.alternate === null && iu === 0 && (iu = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === ja ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([r]) : t.add(r), ad(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === ja ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([r]) : n.add(r)), ad(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return ad(e, r, a), Bu(), !1;
		}
		if (M) return t = lo.current, t === null ? (r !== Gi && (t = Error(i(423), { cause: r }), Qi(Di(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Di(r, n), a = sc(e.stateNode, r, a), Qa(e, a), iu !== 4 && (iu = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== Gi && (e = Error(i(422), { cause: r }), Qi(Di(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Di(o, n), R === null ? R = [o] : R.push(o), iu !== 4 && (iu = 2), t === null) return !0;
		r = Di(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = sc(n.stateNode, r, e), Qa(n, e), !1;
				case 1: if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (gu === null || !gu.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = cc(a), lc(a, e, n, r), Qa(n, a), !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var dc = Error(i(461)), fc = !1;
	function pc(e, t, n, r) {
		t.child = e === null ? Ga(t, null, n, r) : Wa(t, e.child, n, r);
	}
	function mc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return ca(t), r = jo(e, t, n, o, a, i), s = Fo(), e !== null && !fc ? (Io(e, t, i), Rc(e, t, i)) : (M && s && zi(t), t.flags |= 1, pc(e, t, r, i), t.child);
	}
	function hc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !_i(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, gc(e, t, a, r, i)) : (e = xi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !zc(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? jr : n, n(o, r) && e.ref === t.ref) return Rc(e, t, i);
		}
		return t.flags |= 1, e = yi(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function gc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (jr(a, r) && e.ref === t.ref) if (fc = !1, t.pendingProps = r = a, zc(e, i)) e.flags & 131072 && (fc = !0);
			else return t.lanes = e.lanes, Rc(e, t, i);
		}
		return wc(e, t, n, r, i);
	}
	function _c(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return yc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ea(t, a === null ? null : a.cachePool), a === null ? so() : oo(t, a), mo(t);
			else return r = t.lanes = 536870912, yc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ea(t, null), so(), ho(t)) : (Ea(t, a.cachePool), oo(t, a), ho(t), t.memoizedState = null);
		return pc(e, t, i, n), t.child;
	}
	function vc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function yc(e, t, n, r, i) {
		var a = Ta();
		return a = a === null ? null : {
			parent: ha._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ea(t, null), so(), mo(t), e !== null && oa(e, t, r, !0), t.childLanes = i, null;
	}
	function bc(e, t) {
		return t = Nc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function xc(e, t, n) {
		return Wa(t, e.child, null, n), e = bc(t, t.pendingProps), e.flags |= 2, go(t), t.memoizedState = null, e;
	}
	function Sc(e, t, n) {
		var r = t.pendingProps, a = (t.flags & 128) != 0;
		if (t.flags &= -129, e === null) {
			if (M) {
				if (r.mode === "hidden") return e = bc(t, r), t.lanes = 536870912, vc(null, e);
				if (po(t), (e = j) ? (e = yf(e, Wi), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Pi === null ? null : {
						id: Fi,
						overflow: Ii
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = wi(e), n.return = t, t.child = n, Hi = t, j = null)) : e = null, e === null) throw Ki(t);
				return t.lanes = 536870912, null;
			}
			return bc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (po(t), a) if (t.flags & 256) t.flags &= -257, t = xc(e, t, n);
			else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
			else throw Error(i(558));
			else if (fc || oa(e, t, n, !1), a = (n & e.childLanes) !== 0, fc || a) {
				if (r = Xl, r !== null && (s = ct(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, di(e, s), Ou(r, e, s), dc;
				Bu(), t = xc(e, t, n);
			} else e = o.treeContext, j = Cf(s.nextSibling), Hi = t, M = !0, Ui = null, Wi = !1, e !== null && Vi(t, e), t = bc(t, r), t.flags |= 4096;
			return t;
		}
		return e = yi(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Cc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function wc(e, t, n, r, i) {
		return ca(t), n = jo(e, t, n, r, void 0, i), r = Fo(), e !== null && !fc ? (Io(e, t, i), Rc(e, t, i)) : (M && r && zi(t), t.flags |= 1, pc(e, t, n, i), t.child);
	}
	function Tc(e, t, n, r, i, a) {
		return ca(t), t.updateQueue = null, n = No(t, r, n, i), Mo(e), r = Fo(), e !== null && !fc ? (Io(e, t, a), Rc(e, t, a)) : (M && r && zi(t), t.flags |= 1, pc(e, t, n, a), t.child);
	}
	function Ec(e, t, n, r, i) {
		if (ca(t), t.stateNode === null) {
			var a = mi, o = n.contextType;
			typeof o == "object" && o && (a = la(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Qs, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, qa(t), o = n.contextType, a.context = typeof o == "object" && o ? la(o) : mi, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Zs(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && Qs.enqueueReplaceState(a, a.state, null), to(t, r, a, i), eo(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = tc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = mi, typeof u == "object" && u && (o = la(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && ec(t, a, r, o), Ka = !1;
			var f = t.memoizedState;
			a.state = f, to(t, r, a, i), eo(), l = t.memoizedState, s || f !== l || Ka ? (typeof d == "function" && (Zs(t, n, d, r), l = t.memoizedState), (c = Ka || $s(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, Ja(e, t), o = t.memoizedProps, u = tc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = mi, typeof l == "object" && l && (c = la(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && ec(t, a, r, c), Ka = !1, f = t.memoizedState, a.state = f, to(t, r, a, i), eo();
			var p = t.memoizedState;
			o !== d || f !== p || Ka || e !== null && e.dependencies !== null && sa(e.dependencies) ? (typeof s == "function" && (Zs(t, n, s, r), p = t.memoizedState), (u = Ka || $s(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && sa(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Cc(e, t), r = (t.flags & 128) != 0, a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = Wa(t, e.child, null, i), t.child = Wa(t, null, n, i)) : pc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = Rc(e, t, i), e;
	}
	function Dc(e, t, n, r) {
		return Xi(), t.flags |= 256, pc(e, t, n, r), t.child;
	}
	var Oc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function kc(e) {
		return {
			baseLanes: e,
			cachePool: Da()
		};
	}
	function Ac(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= cu), e;
	}
	function jc(e, t, n) {
		var r = t.pendingProps, a = !1, o = (t.flags & 128) != 0, s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (_o.current & 2) != 0), s && (a = !0, t.flags &= -129), s = (t.flags & 32) != 0, t.flags &= -33, e === null) {
			if (M) {
				if (a ? fo(t) : ho(t), (e = j) ? (e = yf(e, Wi), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Pi === null ? null : {
						id: Fi,
						overflow: Ii
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = wi(e), n.return = t, t.child = n, Hi = t, j = null)) : e = null, e === null) throw Ki(t);
				return xf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
			}
			var c = r.children;
			return r = r.fallback, a ? (ho(t), a = t.mode, c = Nc({
				mode: "hidden",
				children: c
			}, a), r = Si(r, a, n, null), c.return = t, r.return = t, c.sibling = r, t.child = c, r = t.child, r.memoizedState = kc(n), r.childLanes = Ac(e, s, n), t.memoizedState = Oc, vc(null, r)) : (fo(t), Mc(t, c));
		}
		var l = e.memoizedState;
		if (l !== null && (c = l.dehydrated, c !== null)) {
			if (o) t.flags & 256 ? (fo(t), t.flags &= -257, t = Pc(e, t, n)) : t.memoizedState === null ? (ho(t), c = r.fallback, a = t.mode, r = Nc({
				mode: "visible",
				children: r.children
			}, a), c = Si(c, a, n, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, Wa(t, e.child, null, n), r = t.child, r.memoizedState = kc(n), r.childLanes = Ac(e, s, n), t.memoizedState = Oc, t = vc(null, r)) : (ho(t), t.child = e.child, t.flags |= 128, t = null);
			else if (fo(t), xf(c)) {
				if (s = c.nextSibling && c.nextSibling.dataset, s) var u = s.dgst;
				s = u, r = Error(i(419)), r.stack = "", r.digest = s, Qi({
					value: r,
					source: null,
					stack: null
				}), t = Pc(e, t, n);
			} else if (fc || oa(e, t, n, !1), s = (n & e.childLanes) !== 0, fc || s) {
				if (s = Xl, s !== null && (r = ct(s, n), r !== 0 && r !== l.retryLane)) throw l.retryLane = r, di(e, r), Ou(s, e, r), dc;
				bf(c) || Bu(), t = Pc(e, t, n);
			} else bf(c) ? (t.flags |= 192, t.child = e.child, t = null) : (e = l.treeContext, j = Cf(c.nextSibling), Hi = t, M = !0, Ui = null, Wi = !1, e !== null && Vi(t, e), t = Mc(t, r.children), t.flags |= 4096);
			return t;
		}
		return a ? (ho(t), c = r.fallback, a = t.mode, l = e.child, u = l.sibling, r = yi(l, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = l.subtreeFlags & 65011712, u === null ? (c = Si(c, a, n, null), c.flags |= 2) : c = yi(u, c), c.return = t, r.return = t, r.sibling = c, t.child = r, vc(null, r), r = t.child, c = e.child.memoizedState, c === null ? c = kc(n) : (a = c.cachePool, a === null ? a = Da() : (l = ha._currentValue, a = a.parent === l ? a : {
			parent: l,
			pool: l
		}), c = {
			baseLanes: c.baseLanes | n,
			cachePool: a
		}), r.memoizedState = c, r.childLanes = Ac(e, s, n), t.memoizedState = Oc, vc(e.child, r)) : (fo(t), n = e.child, e = n.sibling, n = yi(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Mc(e, t) {
		return t = Nc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Nc(e, t) {
		return e = gi(22, e, null, t), e.lanes = 0, e;
	}
	function Pc(e, t, n) {
		return Wa(t, e.child, null, n), e = Mc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Fc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), ia(e.return, t, n);
	}
	function Ic(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function Lc(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = _o.current, s = (o & 2) != 0;
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, he(_o, o), pc(e, t, r, n), r = M ? ji : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Fc(e, n, t);
			else if (e.tag === 19) Fc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && vo(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ic(t, !1, i, n, a, r);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && vo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				Ic(t, !0, n, null, a, r);
				break;
			case "together":
				Ic(t, !1, null, null, void 0, r);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function Rc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), au |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
			if (oa(e, t, n, !1), (n & t.childLanes) === 0) return null;
		} else return null;
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = yi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = yi(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function zc(e, t) {
		return (e.lanes & t) === 0 ? (e = e.dependencies, !!(e !== null && sa(e))) : !0;
	}
	function Bc(e, t, n) {
		switch (t.tag) {
			case 3:
				be(t, t.stateNode.containerInfo), na(t, ha, e.memoizedState.cache), Xi();
				break;
			case 27:
			case 5:
				Se(t);
				break;
			case 4:
				be(t, t.stateNode.containerInfo);
				break;
			case 10:
				na(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, po(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (fo(t), e = Rc(e, t, n), e === null ? null : e.sibling) : jc(e, t, n) : (fo(t), t.flags |= 128, null);
				fo(t);
				break;
			case 19:
				var i = (e.flags & 128) != 0;
				if (r = (n & t.childLanes) !== 0, r ||= (oa(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return Lc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), he(_o, _o.current), r) break;
				return null;
			case 22: return t.lanes = 0, _c(e, t, n, t.pendingProps);
			case 24: na(t, ha, e.memoizedState.cache);
		}
		return Rc(e, t, n);
	}
	function Vc(e, t, n) {
		if (e !== null) if (e.memoizedProps !== t.pendingProps) fc = !0;
		else {
			if (!zc(e, n) && !(t.flags & 128)) return fc = !1, Bc(e, t, n);
			fc = !!(e.flags & 131072);
		}
		else fc = !1, M && t.flags & 1048576 && Ri(t, ji, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Pa(t.elementType), t.type = e, typeof e == "function") _i(e) ? (r = tc(e, r), t.tag = 1, t = Ec(null, t, e, r, n)) : (t.tag = 0, t = wc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === te) {
								t.tag = 11, t = mc(null, t, e, r, n);
								break a;
							} else if (a === ie) {
								t.tag = 14, t = hc(null, t, e, r, n);
								break a;
							}
						}
						throw t = le(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return wc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = tc(r, t.pendingProps), Ec(e, t, r, a, n);
			case 3:
				a: {
					if (be(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, Ja(e, t), to(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, na(t, ha, r), r !== o.cache && aa(t, [ha], n, !0), eo(), r = s.element, o.isDehydrated) if (o = {
						element: r,
						isDehydrated: !1,
						cache: s.cache
					}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
						t = Dc(e, t, r, n);
						break a;
					} else if (r !== a) {
						a = Di(Error(i(424)), t), Qi(a), t = Dc(e, t, r, n);
						break a;
					} else {
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (j = Cf(e.firstChild), Hi = t, M = !0, Ui = null, Wi = !0, n = Ga(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					}
					else {
						if (Xi(), r === a) {
							t = Rc(e, t, n);
							break a;
						}
						pc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Cc(e, t), e === null ? (n = Uf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : M || (n = t.type, e = t.pendingProps, r = tf(ve.current).createElement(n), r[mt] = t, r[ht] = e, Yd(r, n, e), Dt(r), t.stateNode = r) : t.memoizedState = Uf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return Se(t), e === null && M && (r = t.stateNode = Df(t.type, t.pendingProps, ve.current), Hi = t, Wi = !0, a = j, pf(t.type) ? (wf = a, j = Cf(r.firstChild)) : j = a), pc(e, t, t.pendingProps.children, n), Cc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && M && ((a = r = j) && (r = _f(r, t.type, t.pendingProps, Wi), r === null ? a = !1 : (t.stateNode = r, Hi = t, j = Cf(r.firstChild), Wi = !1, a = !0)), a || Ki(t)), Se(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, af(a, o) ? r = null : s !== null && af(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = jo(e, t, Po, null, null, n), dp._currentValue = a), Cc(e, t), pc(e, t, r, n), t.child;
			case 6: return e === null && M && ((e = n = j) && (n = vf(n, t.pendingProps, Wi), n === null ? e = !1 : (t.stateNode = n, Hi = t, j = null, e = !0)), e || Ki(t)), null;
			case 13: return jc(e, t, n);
			case 4: return be(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wa(t, null, r, n) : pc(e, t, r, n), t.child;
			case 11: return mc(e, t, t.type, t.pendingProps, n);
			case 7: return pc(e, t, t.pendingProps, n), t.child;
			case 8: return pc(e, t, t.pendingProps.children, n), t.child;
			case 12: return pc(e, t, t.pendingProps.children, n), t.child;
			case 10: return r = t.pendingProps, na(t, t.type, r.value), pc(e, t, r.children, n), t.child;
			case 9: return a = t.type._context, r = t.pendingProps.children, ca(t), a = la(a), r = r(a), t.flags |= 1, pc(e, t, r, n), t.child;
			case 14: return hc(e, t, t.type, t.pendingProps, n);
			case 15: return gc(e, t, t.type, t.pendingProps, n);
			case 19: return Lc(e, t, n);
			case 31: return Sc(e, t, n);
			case 22: return _c(e, t, n, t.pendingProps);
			case 24: return ca(t), r = la(ha), e === null ? (a = Ta(), a === null && (a = Xl, o = ga(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, qa(t), na(t, ha, a)) : ((e.lanes & n) !== 0 && (Ja(e, t), to(t, null, null, n), eo()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, na(t, ha, r), r !== a.cache && aa(t, [ha], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), na(t, ha, r))), pc(e, t, t.pendingProps.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function Hc(e) {
		e.flags |= 4;
	}
	function Uc(e, t, n, r, i) {
		if ((t = (e.mode & 32) != 0) && (t = !1), t) {
			if (e.flags |= 16777216, (i & 335544128) === i) if (e.stateNode.complete) e.flags |= 8192;
			else if (Lu()) e.flags |= 8192;
			else throw Fa = ja, ka;
		} else e.flags &= -16777217;
	}
	function Wc(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !rp(t)) if (Lu()) e.flags |= 8192;
		else throw Fa = ja, ka;
	}
	function Gc(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : tt(), e.lanes |= t, lu |= t);
	}
	function Kc(e, t) {
		if (!M) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function qc(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 65011712, r |= i.flags & 65011712, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function Jc(e, t, n) {
		var r = t.pendingProps;
		switch (Bi(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return qc(t), null;
			case 1: return qc(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ra(ha), xe(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Yi(t) ? Hc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Zi())), qc(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (Hc(t), o === null ? (qc(t), Uc(t, a, null, r, n)) : (qc(t), Wc(t, o))) : o ? o === e.memoizedState ? (qc(t), t.flags &= -16777217) : (Hc(t), qc(t), Wc(t, o)) : (e = e.memoizedProps, e !== r && Hc(t), qc(t), Uc(t, a, e, r, n)), null;
			case 27:
				if (D(t), n = ve.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Hc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return qc(t), null;
					}
					e = ge.current, Yi(t) ? qi(t, e) : (e = Df(a, r, n), t.stateNode = e, Hc(t));
				}
				return qc(t), null;
			case 5:
				if (D(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Hc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return qc(t), null;
					}
					if (o = ge.current, Yi(t)) qi(t, o);
					else {
						var s = tf(ve.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[mt] = t, o[ht] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (Yd(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && Hc(t);
					}
				}
				return qc(t), Uc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && Hc(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = ve.current, Yi(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = Hi, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[mt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Kd(e.nodeValue, n)), e || Ki(t, !0);
					} else e = tf(e).createTextNode(r), e[mt] = t, t.stateNode = e;
				}
				return qc(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = Yi(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[mt] = t;
						} else Xi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						qc(t), e = !1;
					} else n = Zi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (go(t), t) : (go(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return qc(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = Yi(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[mt] = t;
						} else Xi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						qc(t), a = !1;
					} else a = Zi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (go(t), t) : (go(t), null);
				}
				return go(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Gc(t, t.updateQueue), qc(t), null);
			case 4: return xe(), e === null && Id(t.stateNode.containerInfo), qc(t), null;
			case 10: return ra(t.type), qc(t), null;
			case 19:
				if (me(_o), r = t.memoizedState, r === null) return qc(t), null;
				if (a = (t.flags & 128) != 0, o = r.rendering, o === null) if (a) Kc(r, !1);
				else {
					if (iu !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (o = vo(e), o !== null) {
							for (t.flags |= 128, Kc(r, !1), e = o.updateQueue, t.updateQueue = e, Gc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) bi(n, e), n = n.sibling;
							return he(_o, _o.current & 1 | 2), M && Li(t, r.treeForkCount), t.child;
						}
						e = e.sibling;
					}
					r.tail !== null && k() > mu && (t.flags |= 128, a = !0, Kc(r, !1), t.lanes = 4194304);
				}
				else {
					if (!a) if (e = vo(o), e !== null) {
						if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Gc(t, e), Kc(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !M) return qc(t), null;
					} else 2 * k() - r.renderingStartTime > mu && n !== 536870912 && (t.flags |= 128, a = !0, Kc(r, !1), t.lanes = 4194304);
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				return r.tail === null ? (qc(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = k(), e.sibling = null, n = _o.current, he(_o, a ? n & 1 | 2 : n & 1), M && Li(t, r.treeForkCount), e);
			case 22:
			case 23: return go(t), co(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (qc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qc(t), n = t.updateQueue, n !== null && Gc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && me(wa), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ra(ha), qc(t), null;
			case 25: return null;
			case 30: return null;
		}
		throw Error(i(156, t.tag));
	}
	function Yc(e, t) {
		switch (Bi(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return ra(ha), xe(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return D(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (go(t), t.alternate === null) throw Error(i(340));
					Xi();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (go(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					Xi();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return me(_o), null;
			case 4: return xe(), null;
			case 10: return ra(t.type), null;
			case 22:
			case 23: return go(t), co(), e !== null && me(wa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return ra(ha), null;
			case 25: return null;
			default: return null;
		}
	}
	function Xc(e, t) {
		switch (Bi(t), t.tag) {
			case 3:
				ra(ha), xe();
				break;
			case 26:
			case 27:
			case 5:
				D(t);
				break;
			case 4:
				xe();
				break;
			case 31:
				t.memoizedState !== null && go(t);
				break;
			case 13:
				go(t);
				break;
			case 19:
				me(_o);
				break;
			case 10:
				ra(t.type);
				break;
			case 22:
			case 23:
				go(t), co(), e !== null && me(wa);
				break;
			case 24: ra(ha);
		}
	}
	function Zc(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			id(t, t.return, e);
		}
	}
	function Qc(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								id(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			id(t, t.return, e);
		}
	}
	function $c(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				ro(t, n);
			} catch (t) {
				id(e, e.return, t);
			}
		}
	}
	function el(e, t, n) {
		n.props = tc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			id(e, t, n);
		}
	}
	function tl(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			id(e, t, n);
		}
	}
	function nl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) if (typeof r == "function") try {
			r();
		} catch (n) {
			id(e, t, n);
		} finally {
			e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
		}
		else if (typeof n == "function") try {
			n(null);
		} catch (n) {
			id(e, t, n);
		}
		else n.current = null;
	}
	function rl(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			id(e, e.return, t);
		}
	}
	function il(e, t, n) {
		try {
			var r = e.stateNode;
			Xd(r, e.type, n, t), r[ht] = t;
		} catch (t) {
			id(e, e.return, t);
		}
	}
	function al(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && pf(e.type) || e.tag === 4;
	}
	function ol(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || al(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && pf(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function sl(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = cn));
		else if (r !== 4 && (r === 27 && pf(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (sl(e, t, n), e = e.sibling; e !== null;) sl(e, t, n), e = e.sibling;
	}
	function cl(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (r === 27 && pf(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (cl(e, t, n), e = e.sibling; e !== null;) cl(e, t, n), e = e.sibling;
	}
	function ll(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			Yd(t, r, n), t[mt] = e, t[ht] = n;
		} catch (t) {
			id(e, e.return, t);
		}
	}
	var ul = !1, dl = !1, fl = !1, pl = typeof WeakSet == "function" ? WeakSet : Set, ml = null;
	function hl(e, t) {
		if (e = e.containerInfo, $d = bp, e = Fr(e), Ir(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var a = r.anchorOffset, o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === a && (c = s), p === o && ++d === r && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					n = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else n = null;
			}
			n ||= {
				start: 0,
				end: 0
			};
		} else n = null;
		for (ef = {
			focusedElem: e,
			selectionRange: n
		}, bp = !1, ml = t; ml !== null;) if (t = ml, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, ml = e;
		else for (; ml !== null;) {
			switch (t = ml, o = t.alternate, e = t.flags, t.tag) {
				case 0:
					if (e & 4 && (e = t.updateQueue, e = e === null ? null : e.events, e !== null)) for (n = 0; n < e.length; n++) a = e[n], a.ref.impl = a.nextImpl;
					break;
				case 11:
				case 15: break;
				case 1:
					if (e & 1024 && o !== null) {
						e = void 0, n = t, a = o.memoizedProps, o = o.memoizedState, r = n.stateNode;
						try {
							var h = tc(n.type, a);
							e = r.getSnapshotBeforeUpdate(h, o), r.__reactInternalSnapshotBeforeUpdate = e;
						} catch (e) {
							id(n, n.return, e);
						}
					}
					break;
				case 3:
					if (e & 1024) {
						if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) gf(e);
						else if (n === 1) switch (e.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								gf(e);
								break;
							default: e.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				default: if (e & 1024) throw Error(i(163));
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, ml = e;
				break;
			}
			ml = t.return;
		}
	}
	function gl(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				jl(e, n), r & 4 && Zc(5, n);
				break;
			case 1:
				if (jl(e, n), r & 4) if (e = n.stateNode, t === null) try {
					e.componentDidMount();
				} catch (e) {
					id(n, n.return, e);
				}
				else {
					var i = tc(n.type, t.memoizedProps);
					t = t.memoizedState;
					try {
						e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
					} catch (e) {
						id(n, n.return, e);
					}
				}
				r & 64 && $c(n), r & 512 && tl(n, n.return);
				break;
			case 3:
				if (jl(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						ro(e, t);
					} catch (e) {
						id(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && ll(n);
			case 26:
			case 5:
				jl(e, n), t === null && r & 4 && rl(n), r & 512 && tl(n, n.return);
				break;
			case 12:
				jl(e, n);
				break;
			case 31:
				jl(e, n), r & 4 && Sl(e, n);
				break;
			case 13:
				jl(e, n), r & 4 && Cl(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = cd.bind(null, n), Sf(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || ul, !r) {
					t = t !== null && t.memoizedState !== null || dl, i = ul;
					var a = dl;
					ul = r, (dl = t) && !a ? Nl(e, n, (n.subtreeFlags & 8772) != 0) : jl(e, n), ul = i, dl = a;
				}
				break;
			case 30: break;
			default: jl(e, n);
		}
	}
	function _l(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, _l(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && St(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var vl = null, yl = !1;
	function bl(e, t, n) {
		for (n = n.child; n !== null;) xl(e, t, n), n = n.sibling;
	}
	function xl(e, t, n) {
		if (Ue && typeof Ue.onCommitFiberUnmount == "function") try {
			Ue.onCommitFiberUnmount(He, n);
		} catch {}
		switch (n.tag) {
			case 26:
				dl || nl(n, t), bl(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				dl || nl(n, t);
				var r = vl, i = yl;
				pf(n.type) && (vl = n.stateNode, yl = !1), bl(e, t, n), Of(n.stateNode), vl = r, yl = i;
				break;
			case 5: dl || nl(n, t);
			case 6:
				if (r = vl, i = yl, vl = null, bl(e, t, n), vl = r, yl = i, vl !== null) if (yl) try {
					(vl.nodeType === 9 ? vl.body : vl.nodeName === "HTML" ? vl.ownerDocument.body : vl).removeChild(n.stateNode);
				} catch (e) {
					id(n, t, e);
				}
				else try {
					vl.removeChild(n.stateNode);
				} catch (e) {
					id(n, t, e);
				}
				break;
			case 18:
				vl !== null && (yl ? (e = vl, mf(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Kp(e)) : mf(vl, n.stateNode));
				break;
			case 4:
				r = vl, i = yl, vl = n.stateNode.containerInfo, yl = !0, bl(e, t, n), vl = r, yl = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Qc(2, n, t), dl || Qc(4, n, t), bl(e, t, n);
				break;
			case 1:
				dl || (nl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && el(n, t, r)), bl(e, t, n);
				break;
			case 21:
				bl(e, t, n);
				break;
			case 22:
				dl = (r = dl) || n.memoizedState !== null, bl(e, t, n), dl = r;
				break;
			default: bl(e, t, n);
		}
	}
	function Sl(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Kp(e);
			} catch (e) {
				id(t, t.return, e);
			}
		}
	}
	function Cl(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Kp(e);
		} catch (e) {
			id(t, t.return, e);
		}
	}
	function wl(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new pl()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new pl()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function Tl(e, t) {
		var n = wl(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = ld.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function El(e, t) {
		var n = t.deletions;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var a = n[r], o = e, s = t, c = s;
			a: for (; c !== null;) {
				switch (c.tag) {
					case 27:
						if (pf(c.type)) {
							vl = c.stateNode, yl = !1;
							break a;
						}
						break;
					case 5:
						vl = c.stateNode, yl = !1;
						break a;
					case 3:
					case 4:
						vl = c.stateNode.containerInfo, yl = !0;
						break a;
				}
				c = c.return;
			}
			if (vl === null) throw Error(i(160));
			xl(o, s, a), vl = null, yl = !1, o = a.alternate, o !== null && (o.return = null), a.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Ol(t, e), t = t.sibling;
	}
	var Dl = null;
	function Ol(e, t) {
		var n = e.alternate, r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				El(t, e), kl(e), r & 4 && (Qc(3, e, e.return), Zc(3, e), Qc(5, e, e.return));
				break;
			case 1:
				El(t, e), kl(e), r & 512 && (dl || n === null || nl(n, n.return)), r & 64 && ul && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
				break;
			case 26:
				var a = Dl;
				if (El(t, e), kl(e), r & 512 && (dl || n === null || nl(n, n.return)), r & 4) {
					var o = n === null ? null : n.memoizedState;
					if (r = e.memoizedState, n === null) if (r === null) if (e.stateNode === null) {
						a: {
							r = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
							b: switch (r) {
								case "title":
									o = a.getElementsByTagName("title")[0], (!o || o[xt] || o[mt] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = a.createElement(r), a.head.insertBefore(o, a.querySelector("head > title"))), Yd(o, r, n), o[mt] = e, Dt(o), r = o;
									break a;
								case "link":
									var s = ep("link", "href", a).get(r + (n.href || ""));
									if (s) {
										for (var c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
											s.splice(c, 1);
											break b;
										}
									}
									o = a.createElement(r), Yd(o, r, n), a.head.appendChild(o);
									break;
								case "meta":
									if (s = ep("meta", "content", a).get(r + (n.content || ""))) {
										for (c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
											s.splice(c, 1);
											break b;
										}
									}
									o = a.createElement(r), Yd(o, r, n), a.head.appendChild(o);
									break;
								default: throw Error(i(468, r));
							}
							o[mt] = e, Dt(o), r = o;
						}
						e.stateNode = r;
					} else tp(a, e.type, e.stateNode);
					else e.stateNode = Yf(a, r, e.memoizedProps);
					else o === r ? r === null && e.stateNode !== null && il(e, e.memoizedProps, n.memoizedProps) : (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, r === null ? tp(a, e.type, e.stateNode) : Yf(a, r, e.memoizedProps));
				}
				break;
			case 27:
				El(t, e), kl(e), r & 512 && (dl || n === null || nl(n, n.return)), n !== null && r & 4 && il(e, e.memoizedProps, n.memoizedProps);
				break;
			case 5:
				if (El(t, e), kl(e), r & 512 && (dl || n === null || nl(n, n.return)), e.flags & 32) {
					a = e.stateNode;
					try {
						$t(a, "");
					} catch (t) {
						id(e, e.return, t);
					}
				}
				r & 4 && e.stateNode != null && (a = e.memoizedProps, il(e, a, n === null ? a : n.memoizedProps)), r & 1024 && (fl = !0);
				break;
			case 6:
				if (El(t, e), kl(e), r & 4) {
					if (e.stateNode === null) throw Error(i(162));
					r = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = r;
					} catch (t) {
						id(e, e.return, t);
					}
				}
				break;
			case 3:
				if ($f = null, a = Dl, Dl = B(t.containerInfo), El(t, e), Dl = a, kl(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					Kp(t.containerInfo);
				} catch (t) {
					id(e, e.return, t);
				}
				fl && (fl = !1, Al(e));
				break;
			case 4:
				r = Dl, Dl = B(e.stateNode.containerInfo), El(t, e), kl(e), Dl = r;
				break;
			case 12:
				El(t, e), kl(e);
				break;
			case 31:
				El(t, e), kl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Tl(e, r)));
				break;
			case 13:
				El(t, e), kl(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (fu = k()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Tl(e, r)));
				break;
			case 22:
				a = e.memoizedState !== null;
				var l = n !== null && n.memoizedState !== null, u = ul, d = dl;
				if (ul = u || a, dl = d || l, El(t, e), dl = d, ul = u, kl(e), r & 8192) a: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || l || ul || dl || Ml(e)), n = null, t = e;;) {
					if (t.tag === 5 || t.tag === 26) {
						if (n === null) {
							l = n = t;
							try {
								if (o = l.stateNode, a) s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
								else {
									c = l.stateNode;
									var f = l.memoizedProps.style, p = f != null && f.hasOwnProperty("display") ? f.display : null;
									c.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
								}
							} catch (e) {
								id(l, l.return, e);
							}
						}
					} else if (t.tag === 6) {
						if (n === null) {
							l = t;
							try {
								l.stateNode.nodeValue = a ? "" : l.memoizedProps;
							} catch (e) {
								id(l, l.return, e);
							}
						}
					} else if (t.tag === 18) {
						if (n === null) {
							l = t;
							try {
								var m = l.stateNode;
								a ? hf(m, !0) : hf(l.stateNode, !1);
							} catch (e) {
								id(l, l.return, e);
							}
						}
					} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === e) break a;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) break a;
						n === t && (n = null), t = t.return;
					}
					n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
				}
				r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, Tl(e, n))));
				break;
			case 19:
				El(t, e), kl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Tl(e, r)));
				break;
			case 30: break;
			case 21: break;
			default: El(t, e), kl(e);
		}
	}
	function kl(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (al(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var a = n.stateNode;
						cl(e, ol(e), a);
						break;
					case 5:
						var o = n.stateNode;
						n.flags & 32 && ($t(o, ""), n.flags &= -33), cl(e, ol(e), o);
						break;
					case 3:
					case 4:
						var s = n.stateNode.containerInfo;
						sl(e, ol(e), s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				id(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Al(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			Al(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
		}
	}
	function jl(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) gl(e, t.alternate, t), t = t.sibling;
	}
	function Ml(e) {
		for (e = e.child; e !== null;) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Qc(4, t, t.return), Ml(t);
					break;
				case 1:
					nl(t, t.return);
					var n = t.stateNode;
					typeof n.componentWillUnmount == "function" && el(t, t.return, n), Ml(t);
					break;
				case 27: Of(t.stateNode);
				case 26:
				case 5:
					nl(t, t.return), Ml(t);
					break;
				case 22:
					t.memoizedState === null && Ml(t);
					break;
				case 30:
					Ml(t);
					break;
				default: Ml(t);
			}
			e = e.sibling;
		}
	}
	function Nl(e, t, n) {
		for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Nl(i, a, n), Zc(4, a);
					break;
				case 1:
					if (Nl(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						id(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var s = r.stateNode;
						try {
							var c = i.shared.hiddenCallbacks;
							if (c !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) no(c[i], s);
						} catch (e) {
							id(r, r.return, e);
						}
					}
					n && o & 64 && $c(a), tl(a, a.return);
					break;
				case 27: ll(a);
				case 26:
				case 5:
					Nl(i, a, n), n && r === null && o & 4 && rl(a), tl(a, a.return);
					break;
				case 12:
					Nl(i, a, n);
					break;
				case 31:
					Nl(i, a, n), n && o & 4 && Sl(i, a);
					break;
				case 13:
					Nl(i, a, n), n && o & 4 && Cl(i, a);
					break;
				case 22:
					a.memoizedState === null && Nl(i, a, n), tl(a, a.return);
					break;
				case 30: break;
				default: Nl(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Pl(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && _a(n));
	}
	function Fl(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && _a(e));
	}
	function Il(e, t, n, r) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) Ll(e, t, n, r), t = t.sibling;
	}
	function Ll(e, t, n, r) {
		var i = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Il(e, t, n, r), i & 2048 && Zc(9, t);
				break;
			case 1:
				Il(e, t, n, r);
				break;
			case 3:
				Il(e, t, n, r), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && _a(e)));
				break;
			case 12:
				if (i & 2048) {
					Il(e, t, n, r), e = t.stateNode;
					try {
						var a = t.memoizedProps, o = a.id, s = a.onPostCommit;
						typeof s == "function" && s(o, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
					} catch (e) {
						id(t, t.return, e);
					}
				} else Il(e, t, n, r);
				break;
			case 31:
				Il(e, t, n, r);
				break;
			case 13:
				Il(e, t, n, r);
				break;
			case 23: break;
			case 22:
				a = t.stateNode, o = t.alternate, t.memoizedState === null ? a._visibility & 2 ? Il(e, t, n, r) : (a._visibility |= 2, I(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1)) : a._visibility & 2 ? Il(e, t, n, r) : Rl(e, t), i & 2048 && Pl(o, t);
				break;
			case 24:
				Il(e, t, n, r), i & 2048 && Fl(t.alternate, t);
				break;
			default: Il(e, t, n, r);
		}
	}
	function I(e, t, n, r, i) {
		for (i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					I(a, o, s, c, i), Zc(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, I(a, o, s, c, i)) : u._visibility & 2 ? I(a, o, s, c, i) : Rl(a, o), i && l & 2048 && Pl(o.alternate, o);
					break;
				case 24:
					I(a, o, s, c, i), i && l & 2048 && Fl(o.alternate, o);
					break;
				default: I(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Rl(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Rl(n, r), i & 2048 && Pl(r.alternate, r);
					break;
				case 24:
					Rl(n, r), i & 2048 && Fl(r.alternate, r);
					break;
				default: Rl(n, r);
			}
			t = t.sibling;
		}
	}
	var zl = 8192;
	function Bl(e, t, n) {
		if (e.subtreeFlags & zl) for (e = e.child; e !== null;) Vl(e, t, n), e = e.sibling;
	}
	function Vl(e, t, n) {
		switch (e.tag) {
			case 26:
				Bl(e, t, n), e.flags & zl && e.memoizedState !== null && ip(n, Dl, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				Bl(e, t, n);
				break;
			case 3:
			case 4:
				var r = Dl;
				Dl = B(e.stateNode.containerInfo), Bl(e, t, n), Dl = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = zl, zl = 16777216, Bl(e, t, n), zl = r) : Bl(e, t, n));
				break;
			default: Bl(e, t, n);
		}
	}
	function Hl(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Ul(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				ml = r, Kl(r, e);
			}
			Hl(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Wl(e), e = e.sibling;
	}
	function Wl(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Ul(e), e.flags & 2048 && Qc(9, e, e.return);
				break;
			case 3:
				Ul(e);
				break;
			case 12:
				Ul(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Gl(e)) : Ul(e);
				break;
			default: Ul(e);
		}
	}
	function Gl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				ml = r, Kl(r, e);
			}
			Hl(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					Qc(8, t, t.return), Gl(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Gl(t));
					break;
				default: Gl(t);
			}
			e = e.sibling;
		}
	}
	function Kl(e, t) {
		for (; ml !== null;) {
			var n = ml;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Qc(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: _a(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, ml = r;
			else a: for (n = e; ml !== null;) {
				r = ml;
				var i = r.sibling, a = r.return;
				if (_l(r), r === n) {
					ml = null;
					break a;
				}
				if (i !== null) {
					i.return = a, ml = i;
					break a;
				}
				ml = a;
			}
		}
	}
	var ql = {
		getCacheForType: function(e) {
			var t = la(ha), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return la(ha).controller.signal;
		}
	}, Jl = typeof WeakMap == "function" ? WeakMap : Map, Yl = 0, Xl = null, L = null, Zl = 0, Ql = 0, $l = null, eu = !1, tu = !1, nu = !1, ru = 0, iu = 0, au = 0, ou = 0, su = 0, cu = 0, lu = 0, R = null, uu = null, du = !1, fu = 0, pu = 0, mu = Infinity, hu = null, gu = null, _u = 0, vu = null, yu = null, bu = 0, xu = 0, Su = null, Cu = null, wu = 0, Tu = null;
	function Eu() {
		return Yl & 2 && Zl !== 0 ? Zl & -Zl : w.T === null ? dt() : Td();
	}
	function Du() {
		if (cu === 0) if (!(Zl & 536870912) || M) {
			var e = Xe;
			Xe <<= 1, !(Xe & 3932160) && (Xe = 262144), cu = e;
		} else cu = 536870912;
		return e = lo.current, e !== null && (e.flags |= 32), cu;
	}
	function Ou(e, t, n) {
		(e === Xl && (Ql === 2 || Ql === 9) || e.cancelPendingCommit !== null) && (Fu(e, 0), Mu(e, Zl, cu, !1)), rt(e, n), (!(Yl & 2) || e !== Xl) && (e === Xl && (!(Yl & 2) && (ou |= n), iu === 4 && Mu(e, Zl, cu, !1)), _d(e));
	}
	function ku(e, t, n) {
		if (Yl & 6) throw Error(i(327));
		var r = !n && (t & 127) == 0 && (t & e.expiredLanes) === 0 || A(e, t), a = r ? Uu(e, t) : Vu(e, t, !0), o = r;
		do {
			if (a === 0) {
				tu && !r && Mu(e, t, 0, !1);
				break;
			} else {
				if (n = e.current.alternate, o && !ju(n)) {
					a = Vu(e, t, !1), o = !1;
					continue;
				}
				if (a === 2) {
					if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							a = R;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (Fu(c, s).flags |= 256), s = Vu(c, s, !1), s !== 2) {
								if (nu && !l) {
									c.errorRecoveryDisabledLanes |= o, ou |= o, a = 4;
									break a;
								}
								o = uu, uu = a, o !== null && (uu === null ? uu = o : uu.push.apply(uu, o));
							}
							a = s;
						}
						if (o = !1, a !== 2) continue;
					}
				}
				if (a === 1) {
					Fu(e, 0), Mu(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, o = a, o) {
						case 0:
						case 1: throw Error(i(345));
						case 4: if ((t & 4194048) !== t) break;
						case 6:
							Mu(r, t, cu, !eu);
							break a;
						case 2:
							uu = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(i(329));
					}
					if ((t & 62914560) === t && (a = fu + 300 - k(), 10 < a)) {
						if (Mu(r, t, cu, !eu), $e(r, 0, !0) !== 0) break a;
						bu = t, r.timeoutHandle = cf(Au.bind(null, r, n, uu, hu, du, t, cu, ou, lu, eu, o, "Throttled", -0, 0), a);
						break a;
					}
					Au(r, n, uu, hu, du, t, cu, ou, lu, eu, o, null, -0, 0);
				}
			}
			break;
		} while (1);
		_d(e);
	}
	function Au(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		if (e.timeoutHandle = -1, d = t.subtreeFlags, d & 8192 || (d & 16785408) == 16785408) {
			d = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: cn
			}, Vl(t, a, d);
			var m = (a & 62914560) === a ? fu - k() : (a & 4194048) === a ? pu - k() : 0;
			if (m = op(d, m), m !== null) {
				bu = a, e.cancelPendingCommit = m(Xu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)), Mu(e, a, o, !l);
				return;
			}
		}
		Xu(e, t, a, n, r, i, o, s, c);
	}
	function ju(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Ar(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Mu(e, t, n, r) {
		t &= ~su, t &= ~ou, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - Ge(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && ot(e, n, t);
	}
	function Nu() {
		return Yl & 6 ? !0 : (vd(0, !1), !1);
	}
	function Pu() {
		if (L !== null) {
			if (Ql === 0) var e = L.return;
			else e = L, ta = ea = null, Lo(e), Ra = null, za = 0, e = L;
			for (; e !== null;) Xc(e.alternate, e), e = e.return;
			L = null;
		}
	}
	function Fu(e, t) {
		var n = e.timeoutHandle;
		n !== -1 && (e.timeoutHandle = -1, lf(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), bu = 0, Pu(), Xl = e, L = n = yi(e.current, null), Zl = t, Ql = 0, $l = null, eu = !1, tu = A(e, t), nu = !1, lu = cu = su = ou = au = iu = 0, uu = R = null, du = !1, t & 8 && (t |= t & 32);
		var r = e.entangledLanes;
		if (r !== 0) for (e = e.entanglements, r &= t; 0 < r;) {
			var i = 31 - Ge(r), a = 1 << i;
			t |= e[i], r &= ~a;
		}
		return ru = t, ci(), n;
	}
	function Iu(e, t) {
		F = null, w.H = qs, t === Oa || t === Aa ? (t = Ia(), Ql = 3) : t === ka ? (t = Ia(), Ql = 4) : Ql = t === dc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, $l = t, L === null && (iu = 1, ac(e, Di(t, e.current)));
	}
	function Lu() {
		var e = lo.current;
		return e === null ? !0 : (Zl & 4194048) === Zl ? uo === null : (Zl & 62914560) === Zl || Zl & 536870912 ? e === uo : !1;
	}
	function Ru() {
		var e = w.H;
		return w.H = qs, e === null ? qs : e;
	}
	function zu() {
		var e = w.A;
		return w.A = ql, e;
	}
	function Bu() {
		iu = 4, eu || (Zl & 4194048) !== Zl && lo.current !== null || (tu = !0), !(au & 134217727) && !(ou & 134217727) || Xl === null || Mu(Xl, Zl, cu, !1);
	}
	function Vu(e, t, n) {
		var r = Yl;
		Yl |= 2;
		var i = Ru(), a = zu();
		(Xl !== e || Zl !== t) && (hu = null, Fu(e, t)), t = !1;
		var o = iu;
		a: do
			try {
				if (Ql !== 0 && L !== null) {
					var s = L, c = $l;
					switch (Ql) {
						case 8:
							Pu(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							lo.current === null && (t = !0);
							var l = Ql;
							if (Ql = 0, $l = null, qu(e, s, c, l), n && tu) {
								o = 0;
								break a;
							}
							break;
						default: l = Ql, Ql = 0, $l = null, qu(e, s, c, l);
					}
				}
				Hu(), o = iu;
				break;
			} catch (t) {
				Iu(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, ta = ea = null, Yl = r, w.H = i, w.A = a, L === null && (Xl = null, Zl = 0, ci()), o;
	}
	function Hu() {
		for (; L !== null;) Gu(L);
	}
	function Uu(e, t) {
		var n = Yl;
		Yl |= 2;
		var r = Ru(), a = zu();
		Xl !== e || Zl !== t ? (hu = null, mu = k() + 500, Fu(e, t)) : tu = A(e, t);
		a: do
			try {
				if (Ql !== 0 && L !== null) {
					t = L;
					var o = $l;
					b: switch (Ql) {
						case 1:
							Ql = 0, $l = null, qu(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (Ma(o)) {
								Ql = 0, $l = null, Ku(t);
								break;
							}
							t = function() {
								Ql !== 2 && Ql !== 9 || Xl !== e || (Ql = 7), _d(e);
							}, o.then(t, t);
							break a;
						case 3:
							Ql = 7;
							break a;
						case 4:
							Ql = 5;
							break a;
						case 7:
							Ma(o) ? (Ql = 0, $l = null, Ku(t)) : (Ql = 0, $l = null, qu(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (L.tag) {
								case 26: s = L.memoizedState;
								case 5:
								case 27:
									var c = L;
									if (s ? rp(s) : c.stateNode.complete) {
										Ql = 0, $l = null;
										var l = c.sibling;
										if (l !== null) L = l;
										else {
											var u = c.return;
											u === null ? L = null : (L = u, Ju(u));
										}
										break b;
									}
							}
							Ql = 0, $l = null, qu(e, t, o, 5);
							break;
						case 6:
							Ql = 0, $l = null, qu(e, t, o, 6);
							break;
						case 8:
							Pu(), iu = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Wu();
				break;
			} catch (t) {
				Iu(e, t);
			}
		while (1);
		return ta = ea = null, w.H = r, w.A = a, Yl = n, L === null ? (Xl = null, Zl = 0, ci(), iu) : 0;
	}
	function Wu() {
		for (; L !== null && !Me();) Gu(L);
	}
	function Gu(e) {
		var t = Vc(e.alternate, e, ru);
		e.memoizedProps = e.pendingProps, t === null ? Ju(e) : L = t;
	}
	function Ku(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Tc(n, t, t.pendingProps, t.type, void 0, Zl);
				break;
			case 11:
				t = Tc(n, t, t.pendingProps, t.type.render, t.ref, Zl);
				break;
			case 5: Lo(t);
			default: Xc(n, t), t = L = bi(t, ru), t = Vc(n, t, ru);
		}
		e.memoizedProps = e.pendingProps, t === null ? Ju(e) : L = t;
	}
	function qu(e, t, n, r) {
		ta = ea = null, Lo(t), Ra = null, za = 0;
		var i = t.return;
		try {
			if (uc(e, i, t, n, Zl)) {
				iu = 1, ac(e, Di(n, e.current)), L = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw L = i, t;
			iu = 1, ac(e, Di(n, e.current)), L = null;
			return;
		}
		t.flags & 32768 ? (M || r === 1 ? e = !0 : tu || Zl & 536870912 ? e = !1 : (eu = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = lo.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Yu(t, e)) : Ju(t);
	}
	function Ju(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				Yu(t, eu);
				return;
			}
			e = t.return;
			var n = Jc(t.alternate, t, ru);
			if (n !== null) {
				L = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				L = t;
				return;
			}
			L = t = e;
		} while (t !== null);
		iu === 0 && (iu = 5);
	}
	function Yu(e, t) {
		do {
			var n = Yc(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, L = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				L = e;
				return;
			}
			L = e = n;
		} while (e !== null);
		iu = 6, L = null;
	}
	function Xu(e, t, n, r, a, o, s, c, l) {
		e.cancelPendingCommit = null;
		do
			td();
		while (_u !== 0);
		if (Yl & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			if (o = t.lanes | t.childLanes, o |= si, at(e, n, o, s, c, l), e === Xl && (L = Xl = null, Zl = 0), yu = t, vu = e, bu = n, xu = o, Su = a, Cu = r, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, ud(Le, function() {
				return nd(), null;
			})) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) != 0, t.subtreeFlags & 13878 || r) {
				r = w.T, w.T = null, a = T.p, T.p = 2, s = Yl, Yl |= 4;
				try {
					hl(e, t, n);
				} finally {
					Yl = s, T.p = a, w.T = r;
				}
			}
			_u = 1, Zu(), Qu(), $u();
		}
	}
	function Zu() {
		if (_u === 1) {
			_u = 0;
			var e = vu, t = yu, n = (t.flags & 13878) != 0;
			if (t.subtreeFlags & 13878 || n) {
				n = w.T, w.T = null;
				var r = T.p;
				T.p = 2;
				var i = Yl;
				Yl |= 4;
				try {
					Ol(t, e);
					var a = ef, o = Fr(e.containerInfo), s = a.focusedElem, c = a.selectionRange;
					if (o !== s && s && s.ownerDocument && Pr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Ir(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Nr(s, h), v = Nr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					bp = !!$d, ef = $d = null;
				} finally {
					Yl = i, T.p = r, w.T = n;
				}
			}
			e.current = t, _u = 2;
		}
	}
	function Qu() {
		if (_u === 2) {
			_u = 0;
			var e = vu, t = yu, n = (t.flags & 8772) != 0;
			if (t.subtreeFlags & 8772 || n) {
				n = w.T, w.T = null;
				var r = T.p;
				T.p = 2;
				var i = Yl;
				Yl |= 4;
				try {
					gl(e, t.alternate, t);
				} finally {
					Yl = i, T.p = r, w.T = n;
				}
			}
			_u = 3;
		}
	}
	function $u() {
		if (_u === 4 || _u === 3) {
			_u = 0, Ne();
			var e = vu, t = yu, n = bu, r = Cu;
			t.subtreeFlags & 10256 || t.flags & 10256 ? _u = 5 : (_u = 0, yu = vu = null, ed(e, e.pendingLanes));
			var i = e.pendingLanes;
			if (i === 0 && (gu = null), ut(n), t = t.stateNode, Ue && typeof Ue.onCommitFiberRoot == "function") try {
				Ue.onCommitFiberRoot(He, t, void 0, (t.current.flags & 128) == 128);
			} catch {}
			if (r !== null) {
				t = w.T, i = T.p, T.p = 2, w.T = null;
				try {
					for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
						var s = r[o];
						a(s.value, { componentStack: s.stack });
					}
				} finally {
					w.T = t, T.p = i;
				}
			}
			bu & 3 && td(), _d(e), i = e.pendingLanes, n & 261930 && i & 42 ? e === Tu ? wu++ : (wu = 0, Tu = e) : wu = 0, vd(0, !1);
		}
	}
	function ed(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, _a(t)));
	}
	function td() {
		return Zu(), Qu(), $u(), nd();
	}
	function nd() {
		if (_u !== 5) return !1;
		var e = vu, t = xu;
		xu = 0;
		var n = ut(bu), r = w.T, a = T.p;
		try {
			T.p = 32 > n ? 32 : n, w.T = null, n = Su, Su = null;
			var o = vu, s = bu;
			if (_u = 0, yu = vu = null, bu = 0, Yl & 6) throw Error(i(331));
			var c = Yl;
			if (Yl |= 4, Wl(o.current), Ll(o, o.current, s, n), Yl = c, vd(0, !1), Ue && typeof Ue.onPostCommitFiberRoot == "function") try {
				Ue.onPostCommitFiberRoot(He, o);
			} catch {}
			return !0;
		} finally {
			T.p = a, w.T = r, ed(e, t);
		}
	}
	function rd(e, t, n) {
		t = Di(n, t), t = sc(e.stateNode, t, 2), e = Xa(e, t, 2), e !== null && (rt(e, 2), _d(e));
	}
	function id(e, t, n) {
		if (e.tag === 3) rd(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				rd(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gu === null || !gu.has(r))) {
					e = Di(n, e), n = cc(2), r = Xa(t, n, 2), r !== null && (lc(n, r, t, e), rt(r, 2), _d(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function ad(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Jl();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (nu = !0, i.add(n), e = od.bind(null, e, t, n), t.then(e, e));
	}
	function od(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Xl === e && (Zl & n) === n && (iu === 4 || iu === 3 && (Zl & 62914560) === Zl && 300 > k() - fu ? !(Yl & 2) && Fu(e, 0) : su |= n, lu === Zl && (lu = 0)), _d(e);
	}
	function sd(e, t) {
		t === 0 && (t = tt()), e = di(e, t), e !== null && (rt(e, t), _d(e));
	}
	function cd(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), sd(e, n);
	}
	function ld(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), sd(e, n);
	}
	function ud(e, t) {
		return Ae(e, t);
	}
	var dd = null, fd = null, pd = !1, md = !1, hd = !1, gd = 0;
	function _d(e) {
		e !== fd && e.next === null && (fd === null ? dd = fd = e : fd = fd.next = e), md = !0, pd || (pd = !0, wd());
	}
	function vd(e, t) {
		if (!hd && md) {
			hd = !0;
			do
				for (var n = !1, r = dd; r !== null;) {
					if (!t) if (e !== 0) {
						var i = r.pendingLanes;
						if (i === 0) var a = 0;
						else {
							var o = r.suspendedLanes, s = r.pingedLanes;
							a = (1 << 31 - Ge(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
						}
						a !== 0 && (n = !0, Cd(r, a));
					} else a = Zl, a = $e(r, r === Xl ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || A(r, a) || (n = !0, Cd(r, a));
					r = r.next;
				}
			while (n);
			hd = !1;
		}
	}
	function yd() {
		bd();
	}
	function bd() {
		md = pd = !1;
		var e = 0;
		gd !== 0 && sf() && (e = gd);
		for (var t = k(), n = null, r = dd; r !== null;) {
			var i = r.next, a = xd(r, t);
			a === 0 ? (r.next = null, n === null ? dd = i : n.next = i, i === null && (fd = n)) : (n = r, (e !== 0 || a & 3) && (md = !0)), r = i;
		}
		_u !== 0 && _u !== 5 || vd(e, !1), gd !== 0 && (gd = 0);
	}
	function xd(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - Ge(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = et(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = Xl, n = Zl, n = $e(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Ql === 2 || Ql === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && je(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || A(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && je(r), ut(n)) {
				case 2:
				case 8:
					n = Ie;
					break;
				case 32:
					n = Le;
					break;
				case 268435456:
					n = ze;
					break;
				default: n = Le;
			}
			return r = Sd.bind(null, e), n = Ae(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && je(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function Sd(e, t) {
		if (_u !== 0 && _u !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (td() && e.callbackNode !== n) return null;
		var r = Zl;
		return r = $e(e, e === Xl ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (ku(e, r, t), xd(e, k()), e.callbackNode != null && e.callbackNode === n ? Sd.bind(null, e) : null);
	}
	function Cd(e, t) {
		if (td()) return null;
		ku(e, t, !0);
	}
	function wd() {
		df(function() {
			Yl & 6 ? Ae(Fe, yd) : bd();
		});
	}
	function Td() {
		if (gd === 0) {
			var e = P;
			e === 0 && (e = Ye, Ye <<= 1, !(Ye & 261888) && (Ye = 256)), gd = e;
		}
		return gd;
	}
	function Ed(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : sn("" + e);
	}
	function Dd(e, t) {
		var n = t.ownerDocument.createElement("input");
		return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
	}
	function Od(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Ed((i[ht] || null).action), o = r.submitter;
			o && (t = (t = o[ht] || null) ? Ed(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new kn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (gd !== 0) {
								var e = o ? Dd(i, o) : new FormData(i);
								Ns(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = o ? Dd(i, o) : new FormData(i), Ns(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var kd = 0; kd < ni.length; kd++) {
		var Ad = ni[kd];
		ri(Ad.toLowerCase(), "on" + (Ad[0].toUpperCase() + Ad.slice(1)));
	}
	ri(Jr, "onAnimationEnd"), ri(Yr, "onAnimationIteration"), ri(Xr, "onAnimationStart"), ri("dblclick", "onDoubleClick"), ri("focusin", "onFocus"), ri("focusout", "onBlur"), ri(Zr, "onTransitionRun"), ri(Qr, "onTransitionStart"), ri($r, "onTransitionCancel"), ri(ei, "onTransitionEnd"), jt("onMouseEnter", ["mouseout", "mouseover"]), jt("onMouseLeave", ["mouseout", "mouseover"]), jt("onPointerEnter", ["pointerout", "pointerover"]), jt("onPointerLeave", ["pointerout", "pointerover"]), At("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), At("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), At("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), At("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), At("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), At("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var jd = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Md = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jd));
	function Nd(e, t) {
		t = (t & 4) != 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						ii(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						ii(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function z(e, t) {
		var n = t[_t];
		n === void 0 && (n = t[_t] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Ld(t, e, 2, !1), n.add(r));
	}
	function Pd(e, t, n) {
		var r = 0;
		t && (r |= 4), Ld(n, e, r, t);
	}
	var Fd = "_reactListening" + Math.random().toString(36).slice(2);
	function Id(e) {
		if (!e[Fd]) {
			e[Fd] = !0, Ot.forEach(function(t) {
				t !== "selectionchange" && (Md.has(t) || Pd(t, !1, e), Pd(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Fd] || (t[Fd] = !0, Pd("selectionchange", !1, t));
		}
	}
	function Ld(e, t, n, r) {
		switch (Dp(t)) {
			case 2:
				var i = xp;
				break;
			case 8:
				i = Sp;
				break;
			default: i = Cp;
		}
		n = i.bind(null, t, n, e), i = void 0, !vn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Rd(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = Ct(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		hn(function() {
			var r = a, i = un(n), s = [];
			a: {
				var c = ti.get(e);
				if (c !== void 0) {
					var l = kn, u = e;
					switch (e) {
						case "keypress": if (wn(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = qn;
							break;
						case "focusin":
							u = "focus", l = Rn;
							break;
						case "focusout":
							u = "blur", l = Rn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Rn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = In;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Ln;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = Yn;
							break;
						case Jr:
						case Yr:
						case Xr:
							l = zn;
							break;
						case ei:
							l = Xn;
							break;
						case "scroll":
						case "scrollend":
							l = jn;
							break;
						case "wheel":
							l = Zn;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Bn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = Jn;
							break;
						case "toggle":
						case "beforetoggle": l = Qn;
					}
					var d = (t & 4) != 0, f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = gn(m, p), g != null && d.push(zd(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (c = e === "mouseover" || e === "pointerover", l = e === "mouseout" || e === "pointerout", c && n !== ln && (u = n.relatedTarget || n.fromElement) && (Ct(u) || u[gt])) break a;
					if ((l || c) && (c = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window, l ? (u = n.relatedTarget || n.toElement, l = r, u = u ? Ct(u) : null, u !== null && (f = o(u), d = u.tag, u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (l = null, u = r), l !== u)) {
						if (d = In, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = Jn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = l == null ? c : Tt(l), h = u == null ? c : Tt(u), c = new d(g, m + "leave", l, n, i), c.target = f, c.relatedTarget = h, g = null, Ct(i) === r && (d = new d(p, m + "enter", u, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, l && u) b: {
							for (d = Vd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
							g = 0;
							for (var _ = m; _; _ = d(_)) g++;
							for (; 0 < h - g;) p = d(p), h--;
							for (; 0 < g - h;) m = d(m), g--;
							for (; h--;) {
								if (p === m || m !== null && p === m.alternate) {
									d = p;
									break b;
								}
								p = d(p), m = d(m);
							}
							d = null;
						}
						else d = null;
						l !== null && Hd(s, c, l, d, !1), u !== null && f !== null && Hd(s, f, u, d, !0);
					}
				}
				a: {
					if (c = r ? Tt(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var v = vr;
					else if (fr(c)) if (yr) v = Or;
					else {
						v = Er;
						var y = Tr;
					}
					else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && rn(r.elementType) && (v = vr) : v = Dr;
					if (v &&= v(e, r)) {
						pr(s, v, n, i);
						break a;
					}
					y && y(e, c, r), e === "focusout" && r && c.type === "number" && r.memoizedProps.value != null && Yt(c, "number", c.value);
				}
				switch (y = r ? Tt(r) : window, e) {
					case "focusin":
						(fr(y) || y.contentEditable === "true") && (Rr = y, zr = r, Br = null);
						break;
					case "focusout":
						Br = zr = Rr = null;
						break;
					case "mousedown":
						Vr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Vr = !1, Hr(s, n, i);
						break;
					case "selectionchange": if (Lr) break;
					case "keydown":
					case "keyup": Hr(s, n, i);
				}
				var b;
				if (er) b: {
					switch (e) {
						case "compositionstart":
							var x = "onCompositionStart";
							break b;
						case "compositionend":
							x = "onCompositionEnd";
							break b;
						case "compositionupdate":
							x = "onCompositionUpdate";
							break b;
					}
					x = void 0;
				}
				else cr ? or(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
				x && (rr && n.locale !== "ko" && (cr || x !== "onCompositionStart" ? x === "onCompositionEnd" && cr && (b = Cn()) : (bn = i, xn = "value" in bn ? bn.value : bn.textContent, cr = !0)), y = Bd(r, x), 0 < y.length && (x = new Vn(x, e, null, n, i), s.push({
					event: x,
					listeners: y
				}), b ? x.data = b : (b = sr(n), b !== null && (x.data = b)))), (b = nr ? lr(e, n) : ur(e, n)) && (x = Bd(r, "onBeforeInput"), 0 < x.length && (y = new Vn("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: y,
					listeners: x
				}), y.data = b)), Od(s, e, r, n, i);
			}
			Nd(s, t);
		});
	}
	function zd(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Bd(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = gn(e, n), i != null && r.unshift(zd(e, i, a)), i = gn(e, t), i != null && r.push(zd(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Vd(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Hd(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = gn(n, a), l != null && o.unshift(zd(n, l, c))) : i || (l = gn(n, a), l != null && o.push(zd(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Ud = /\r\n?/g, Wd = /\u0000|\uFFFD/g;
	function Gd(e) {
		return (typeof e == "string" ? e : "" + e).replace(Ud, "\n").replace(Wd, "");
	}
	function Kd(e, t) {
		return t = Gd(t), Gd(e) === t;
	}
	function qd(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				typeof r == "string" ? t === "body" || t === "textarea" && r === "" || $t(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && $t(e, "" + r);
				break;
			case "className":
				Lt(e, "class", r);
				break;
			case "tabIndex":
				Lt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Lt(e, n, r);
				break;
			case "style":
				nn(e, r, o);
				break;
			case "data": if (t !== "object") {
				Lt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = sn("" + r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				} else typeof o == "function" && (n === "formAction" ? (t !== "input" && qd(e, t, "name", a.name, a, null), qd(e, t, "formEncType", a.formEncType, a, null), qd(e, t, "formMethod", a.formMethod, a, null), qd(e, t, "formTarget", a.formTarget, a, null)) : (qd(e, t, "encType", a.encType, a, null), qd(e, t, "method", a.method, a, null), qd(e, t, "target", a.target, a, null)));
				if (r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = sn("" + r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = cn);
				break;
			case "onScroll":
				r != null && z("scroll", e);
				break;
			case "onScrollEnd":
				r != null && z("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						e.innerHTML = n;
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = sn("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				z("beforetoggle", e), z("toggle", e), It(e, "popover", r);
				break;
			case "xlinkActuate":
				Rt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Rt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Rt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Rt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Rt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Rt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Rt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Rt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Rt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				It(e, "is", r);
				break;
			case "innerText":
			case "textContent": break;
			default: (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = an.get(n) || n, It(e, n, r));
		}
	}
	function Jd(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				nn(e, r, o);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						e.innerHTML = n;
					}
				}
				break;
			case "children":
				typeof r == "string" ? $t(e, r) : (typeof r == "number" || typeof r == "bigint") && $t(e, "" + r);
				break;
			case "onScroll":
				r != null && z("scroll", e);
				break;
			case "onScrollEnd":
				r != null && z("scrollend", e);
				break;
			case "onClick":
				r != null && (e.onclick = cn);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": break;
			case "innerText":
			case "textContent": break;
			default: if (!kt.hasOwnProperty(n)) a: {
				if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), o = e[ht] || null, o = o == null ? null : o[n], typeof o == "function" && e.removeEventListener(t, o, a), typeof r == "function")) {
					typeof o != "function" && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a);
					break a;
				}
				n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : It(e, n, r);
			}
		}
	}
	function Yd(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				z("error", e), z("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: qd(e, t, o, s, n, null);
					}
				}
				a && qd(e, t, "srcSet", n.srcSet, n, null), r && qd(e, t, "src", n.src, n, null);
				return;
			case "input":
				z("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: qd(e, t, r, d, n, null);
					}
				}
				Jt(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in z("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: qd(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && Xt(e, !!r, n, !0) : Xt(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in z("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: qd(e, t, s, c, n, null);
				}
				Qt(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: qd(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				z("beforetoggle", e), z("toggle", e), z("cancel", e), z("close", e);
				break;
			case "iframe":
			case "object":
				z("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < jd.length; r++) z(jd[r], e);
				break;
			case "image":
				z("error", e), z("load", e);
				break;
			case "details":
				z("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": z("error", e), z("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: qd(e, t, u, r, n, null);
				}
				return;
			default: if (rn(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && Jd(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && qd(e, t, c, r, n, null));
	}
	function Xd(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || qd(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							o = m;
							break;
						case "name":
							a = m;
							break;
						case "checked":
							u = m;
							break;
						case "defaultChecked":
							d = m;
							break;
						case "value":
							s = m;
							break;
						case "defaultValue":
							c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && qd(e, t, p, m, r, f);
					}
				}
				qt(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || qd(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						p = o;
						break;
					case "defaultValue":
						c = o;
						break;
					case "multiple": s = o;
					default: o !== l && qd(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? Xt(e, !!n, n ? [] : "", !1) : Xt(e, !!n, t, !0)) : Xt(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: qd(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						p = a;
						break;
					case "defaultValue":
						m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && qd(e, t, s, a, r, o);
				}
				Zt(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: qd(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: qd(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && qd(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: qd(e, t, u, p, r, m);
				}
				return;
			default: if (rn(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Jd(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Jd(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && qd(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || qd(e, t, f, p, r, m);
	}
	function Zd(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function Qd() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && Zd(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && Zd(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var $d = null, ef = null;
	function tf(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function nf(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function rf(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function af(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var of = null;
	function sf() {
		var e = window.event;
		return e && e.type === "popstate" ? e === of ? !1 : (of = e, !0) : (of = null, !1);
	}
	var cf = typeof setTimeout == "function" ? setTimeout : void 0, lf = typeof clearTimeout == "function" ? clearTimeout : void 0, uf = typeof Promise == "function" ? Promise : void 0, df = typeof queueMicrotask == "function" ? queueMicrotask : uf === void 0 ? cf : function(e) {
		return uf.resolve(null).then(e).catch(ff);
	};
	function ff(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function pf(e) {
		return e === "head";
	}
	function mf(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$" || n === "/&") {
				if (r === 0) {
					e.removeChild(i), Kp(t);
					return;
				}
				r--;
			} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
			else if (n === "html") Of(e.ownerDocument.documentElement);
			else if (n === "head") {
				n = e.ownerDocument.head, Of(n);
				for (var a = n.firstChild; a;) {
					var o = a.nextSibling, s = a.nodeName;
					a[xt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
				}
			} else n === "body" && Of(e.ownerDocument.body);
			n = i;
		} while (n);
		Kp(t);
	}
	function hf(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) if (n = r.data, n === "/$") {
				if (e === 0) break;
				e--;
			} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			n = r;
		} while (n);
	}
	function gf(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					gf(n), St(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function _f(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) if (t === "input" && e.type === "hidden") {
				var a = i.name == null ? null : "" + i.name;
				if (i.type === "hidden" && e.getAttribute("name") === a) return e;
			} else return e;
			else if (!e[xt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = Cf(e.nextSibling), e === null) break;
		}
		return null;
	}
	function vf(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Cf(e.nextSibling), e === null)) return null;
		return e;
	}
	function yf(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Cf(e.nextSibling), e === null)) return null;
		return e;
	}
	function bf(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function xf(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function Sf(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function Cf(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var wf = null;
	function Tf(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return Cf(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function Ef(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function Df(e, t, n) {
		switch (t = tf(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function Of(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		St(e);
	}
	var kf = /* @__PURE__ */ new Map(), Af = /* @__PURE__ */ new Set();
	function B(e) {
		return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
	}
	var jf = T.d;
	T.d = {
		f: Mf,
		r: Nf,
		D: If,
		C: Lf,
		L: Rf,
		m: zf,
		X: Vf,
		S: Bf,
		M: Hf
	};
	function Mf() {
		var e = jf.f(), t = Nu();
		return e || t;
	}
	function Nf(e) {
		var t = wt(e);
		t !== null && t.tag === 5 && t.type === "form" ? Fs(t) : jf.r(e);
	}
	var Pf = typeof document > "u" ? null : document;
	function Ff(e, t, n) {
		var r = Pf;
		if (r && typeof t == "string" && t) {
			var i = Kt(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), Af.has(i) || (Af.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), Yd(t, "link", e), Dt(t), r.head.appendChild(t)));
		}
	}
	function If(e) {
		jf.D(e), Ff("dns-prefetch", e, null);
	}
	function Lf(e, t) {
		jf.C(e, t), Ff("preconnect", e, t);
	}
	function Rf(e, t, n) {
		jf.L(e, t, n);
		var r = Pf;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + Kt(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + Kt(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + Kt(n.imageSizes) + "\"]")) : i += "[href=\"" + Kt(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Wf(e);
					break;
				case "script": a = Jf(e);
			}
			kf.has(a) || (e = p({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), kf.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Gf(a)) || t === "script" && r.querySelector(V(a)) || (t = r.createElement("link"), Yd(t, "link", e), Dt(t), r.head.appendChild(t)));
		}
	}
	function zf(e, t) {
		jf.m(e, t);
		var n = Pf;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + Kt(r) + "\"][href=\"" + Kt(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Jf(e);
			}
			if (!kf.has(a) && (e = p({
				rel: "modulepreload",
				href: e
			}, t), kf.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(V(a))) return;
				}
				r = n.createElement("link"), Yd(r, "link", e), Dt(r), n.head.appendChild(r);
			}
		}
	}
	function Bf(e, t, n) {
		jf.S(e, t, n);
		var r = Pf;
		if (r && e) {
			var i = Et(r).hoistableStyles, a = Wf(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Gf(a))) s.loading = 5;
				else {
					e = p({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = kf.get(a)) && Zf(e, n);
					var c = o = r.createElement("link");
					Dt(c), Yd(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Xf(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function Vf(e, t) {
		jf.X(e, t);
		var n = Pf;
		if (n && e) {
			var r = Et(n).hoistableScripts, i = Jf(e), a = r.get(i);
			a || (a = n.querySelector(V(i)), a || (e = p({
				src: e,
				async: !0
			}, t), (t = kf.get(i)) && Qf(e, t), a = n.createElement("script"), Dt(a), Yd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Hf(e, t) {
		jf.M(e, t);
		var n = Pf;
		if (n && e) {
			var r = Et(n).hoistableScripts, i = Jf(e), a = r.get(i);
			a || (a = n.querySelector(V(i)), a || (e = p({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = kf.get(i)) && Qf(e, t), a = n.createElement("script"), Dt(a), Yd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Uf(e, t, n, r) {
		var a = (a = ve.current) ? B(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Wf(n.href), n = Et(a).hoistableStyles, r = n.get(t), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Wf(n.href);
					var o = Et(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Gf(e))) && !o._p && (s.instance = o, s.state.loading = 5), kf.has(e) || (n = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, kf.set(e, n), o || qf(a, e, n, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Jf(n), n = Et(a).hoistableScripts, r = n.get(t), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Wf(e) {
		return "href=\"" + Kt(e) + "\"";
	}
	function Gf(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Kf(e) {
		return p({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function qf(e, t, n, r) {
		e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		}), Yd(t, "link", n), Dt(t), e.head.appendChild(t));
	}
	function Jf(e) {
		return "[src=\"" + Kt(e) + "\"]";
	}
	function V(e) {
		return "script[async]" + e;
	}
	function Yf(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + Kt(n.href) + "\"]");
				if (r) return t.instance = r, Dt(r), r;
				var a = p({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Dt(r), Yd(r, "style", a), Xf(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Wf(n.href);
				var o = e.querySelector(Gf(a));
				if (o) return t.state.loading |= 4, t.instance = o, Dt(o), o;
				r = Kf(n), (a = kf.get(a)) && Zf(r, a), o = (e.ownerDocument || e).createElement("link"), Dt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), Yd(o, "link", r), t.state.loading |= 4, Xf(o, n.precedence, e), t.instance = o;
			case "script": return o = Jf(n.src), (a = e.querySelector(V(o))) ? (t.instance = a, Dt(a), a) : (r = n, (a = kf.get(o)) && (r = p({}, n), Qf(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), Dt(a), Yd(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Xf(r, n.precedence, e));
		return t.instance;
	}
	function Xf(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Zf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Qf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var $f = null;
	function ep(e, t, n) {
		if ($f === null) {
			var r = /* @__PURE__ */ new Map(), i = $f = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = $f, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[xt] || a[mt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function tp(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function np(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function rp(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function ip(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Wf(r.href), a = t.querySelector(Gf(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = sp.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Dt(a);
					return;
				}
				a = t.ownerDocument || t, r = Kf(r), (i = kf.get(i)) && Zf(r, i), a = a.createElement("link"), Dt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), Yd(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = sp.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var ap = 0;
	function op(e, t) {
		return e.stylesheets && e.count === 0 && lp(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && lp(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && ap === 0 && (ap = 62500 * Qd());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && lp(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > ap ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function sp() {
		if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
			if (this.stylesheets) lp(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				this.unsuspend = null, e();
			}
		}
	}
	var cp = null;
	function lp(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, cp = /* @__PURE__ */ new Map(), t.forEach(up, e), cp = null, sp.call(e));
	}
	function up(e, t) {
		if (!(t.state.loading & 4)) {
			var n = cp.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), cp.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = sp.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var dp = {
		$$typeof: ee,
		Provider: null,
		Consumer: null,
		_currentValue: de,
		_currentValue2: de,
		_threadCount: 0
	};
	function fp(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = nt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nt(0), this.hiddenUpdates = nt(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function pp(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new fp(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = gi(3, null, null, t), e.current = a, a.stateNode = e, t = ga(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, qa(a), e;
	}
	function mp(e) {
		return e ? (e = mi, e) : mi;
	}
	function hp(e, t, n, r, i, a) {
		i = mp(i), r.context === null ? r.context = i : r.pendingContext = i, r = Ya(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = Xa(e, r, t), n !== null && (Ou(n, e, t), Za(n, e, t));
	}
	function gp(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function _p(e, t) {
		gp(e, t), (e = e.alternate) && gp(e, t);
	}
	function vp(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = di(e, 67108864);
			t !== null && Ou(t, e, 67108864), _p(e, 67108864);
		}
	}
	function yp(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Eu();
			t = lt(t);
			var n = di(e, t);
			n !== null && Ou(n, e, t), _p(e, t);
		}
	}
	var bp = !0;
	function xp(e, t, n, r) {
		var i = w.T;
		w.T = null;
		var a = T.p;
		try {
			T.p = 2, Cp(e, t, n, r);
		} finally {
			T.p = a, w.T = i;
		}
	}
	function Sp(e, t, n, r) {
		var i = w.T;
		w.T = null;
		var a = T.p;
		try {
			T.p = 8, Cp(e, t, n, r);
		} finally {
			T.p = a, w.T = i;
		}
	}
	function Cp(e, t, n, r) {
		if (bp) {
			var i = wp(r);
			if (i === null) Rd(e, t, r, Tp, n), Ip(e, r);
			else if (Rp(i, e, t, n, r)) r.stopPropagation();
			else if (Ip(e, r), t & 4 && -1 < Fp.indexOf(e)) {
				for (; i !== null;) {
					var a = wt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = Qe(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - Ge(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									_d(a), !(Yl & 6) && (mu = k() + 500, vd(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = di(a, 2), s !== null && Ou(s, a, 2), Nu(), _p(a, 2);
					}
					if (a = wp(r), a === null && Rd(e, t, r, Tp, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Rd(e, t, r, null, n);
		}
	}
	function wp(e) {
		return e = un(e), Ep(e);
	}
	var Tp = null;
	function Ep(e) {
		if (Tp = null, e = Ct(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return Tp = e, null;
	}
	function Dp(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Pe()) {
				case Fe: return 2;
				case Ie: return 8;
				case Le:
				case Re: return 32;
				case ze: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var Op = !1, kp = null, Ap = null, jp = null, Mp = /* @__PURE__ */ new Map(), Np = /* @__PURE__ */ new Map(), Pp = [], Fp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Ip(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				kp = null;
				break;
			case "dragenter":
			case "dragleave":
				Ap = null;
				break;
			case "mouseover":
			case "mouseout":
				jp = null;
				break;
			case "pointerover":
			case "pointerout":
				Mp.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": Np.delete(t.pointerId);
		}
	}
	function Lp(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = wt(t), t !== null && vp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Rp(e, t, n, r, i) {
		switch (t) {
			case "focusin": return kp = Lp(kp, e, t, n, r, i), !0;
			case "dragenter": return Ap = Lp(Ap, e, t, n, r, i), !0;
			case "mouseover": return jp = Lp(jp, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Mp.set(a, Lp(Mp.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, Np.set(a, Lp(Np.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function zp(e) {
		var t = Ct(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, ft(e.priority, function() {
							yp(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, ft(e.priority, function() {
							yp(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Bp(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = wp(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				ln = r, n.target.dispatchEvent(r), ln = null;
			} else return t = wt(n), t !== null && vp(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Vp(e, t, n) {
		Bp(e) && n.delete(t);
	}
	function Hp() {
		Op = !1, kp !== null && Bp(kp) && (kp = null), Ap !== null && Bp(Ap) && (Ap = null), jp !== null && Bp(jp) && (jp = null), Mp.forEach(Vp), Np.forEach(Vp);
	}
	function Up(e, n) {
		e.blockedOn === n && (e.blockedOn = null, Op || (Op = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Hp)));
	}
	var Wp = null;
	function Gp(e) {
		Wp !== e && (Wp = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Wp === e && (Wp = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Ep(r || n) === null) continue;
					break;
				}
				var a = wt(n);
				a !== null && (e.splice(t, 3), t -= 3, Ns(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Kp(e) {
		function t(t) {
			return Up(t, e);
		}
		kp !== null && Up(kp, e), Ap !== null && Up(Ap, e), jp !== null && Up(jp, e), Mp.forEach(t), Np.forEach(t);
		for (var n = 0; n < Pp.length; n++) {
			var r = Pp[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Pp.length && (n = Pp[0], n.blockedOn === null);) zp(n), n.blockedOn === null && Pp.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[ht] || null;
			if (typeof a == "function") o || Gp(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[ht] || null) s = o.formAction;
					else if (Ep(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Gp(n);
			}
		}
	}
	function qp() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Jp(e) {
		this._internalRoot = e;
	}
	Yp.prototype.render = Jp.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		hp(n, Eu(), e, t, null, null);
	}, Yp.prototype.unmount = Jp.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			hp(e.current, 2, null, e, null, null), Nu(), t[gt] = null;
		}
	};
	function Yp(e) {
		this._internalRoot = e;
	}
	Yp.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = dt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Pp.length && t !== 0 && t < Pp[n].priority; n++);
			Pp.splice(n, 0, e), n === 0 && zp(e);
		}
	};
	var Xp = n.version;
	if (Xp !== "19.2.5") throw Error(i(527, Xp, "19.2.5"));
	T.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = u(t), e = e === null ? null : d(e), e = e === null ? null : e.stateNode, e;
	};
	var Zp = {
		bundleType: 0,
		version: "19.2.5",
		rendererPackageName: "react-dom",
		currentDispatcherRef: w,
		reconcilerVersion: "19.2.5"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Qp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Qp.isDisabled && Qp.supportsFiber) try {
			He = Qp.inject(Zp), Ue = Qp;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = nc, s = rc, c = ic;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = pp(e, 1, !1, null, null, n, r, null, o, s, c, qp), e[gt] = t.current, Id(e), new Jp(t);
	}, e.hydrateRoot = function(e, t, n) {
		if (!a(e)) throw Error(i(299));
		var r = !1, o = "", s = nc, c = rc, l = ic, u = null;
		return n != null && (!0 === n.unstable_strictMode && (r = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (c = n.onCaughtError), n.onRecoverableError !== void 0 && (l = n.onRecoverableError), n.formState !== void 0 && (u = n.formState)), t = pp(e, 1, !0, t, n ?? null, r, o, u, s, c, l, qp), t.context = mp(null), n = t.current, r = Eu(), r = lt(r), o = Ya(r), o.callback = null, Xa(n, o, r), n = r, t.current.lanes = n, rt(t, n), _d(t), e[gt] = t.current, Id(e), new Yp(t);
	}, e.version = "19.2.5";
})), b = /* @__PURE__ */ l(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			for (e = e.memoizedState; e !== null && 0 < t;) e = e.next, t--;
			return e;
		}
		function n(e, t, r, i) {
			if (r >= t.length) return i;
			var a = t[r], o = Jf(e) ? e.slice() : B({}, e);
			return o[a] = n(e[a], t, r + 1, i), o;
		}
		function r(e, t, n) {
			if (t.length !== n.length) console.warn("copyWithRename() expects paths of the same length");
			else {
				for (var r = 0; r < n.length - 1; r++) if (t[r] !== n[r]) {
					console.warn("copyWithRename() expects paths to be the same except for the deepest key");
					return;
				}
				return i(e, t, n, 0);
			}
		}
		function i(e, t, n, r) {
			var a = t[r], o = Jf(e) ? e.slice() : B({}, e);
			return r + 1 === t.length ? (o[n[r]] = o[a], Jf(o) ? o.splice(a, 1) : delete o[a]) : o[a] = i(e[a], t, n, r + 1), o;
		}
		function a(e, t, n) {
			var r = t[n], i = Jf(e) ? e.slice() : B({}, e);
			return n + 1 === t.length ? (Jf(i) ? i.splice(r, 1) : delete i[r], i) : (i[r] = a(e[r], t, n + 1), i);
		}
		function o() {
			return !1;
		}
		function s() {
			return null;
		}
		function c() {
			console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks");
		}
		function l() {
			console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
		}
		function u() {}
		function d() {}
		function p(e) {
			var t = [];
			return e.forEach(function(e) {
				t.push(e);
			}), t.sort().join(", ");
		}
		function m(e, t, n, r) {
			return new xr(e, t, n, r);
		}
		function h(e, t) {
			e.context === Fg && (tf(e.current, 2, t, e, null, null), ll());
		}
		function g(e, t) {
			if (Ig !== null) {
				var n = t.staleFamilies;
				t = t.updatedFamilies, Fl(), br(e.current, t, n), ll();
			}
		}
		function _(e) {
			Ig = e;
		}
		function y(e) {
			return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
		}
		function b(e) {
			var t = e, n = e;
			if (e.alternate) for (; t.return;) t = t.return;
			else {
				e = t;
				do
					t = e, t.flags & 4098 && (n = t.return), e = t.return;
				while (e);
			}
			return t.tag === 3 ? n : null;
		}
		function x(e) {
			if (e.tag === 13) {
				var t = e.memoizedState;
				if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
			}
			return null;
		}
		function ee(e) {
			if (e.tag === 31) {
				var t = e.memoizedState;
				if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
			}
			return null;
		}
		function te(e) {
			if (b(e) !== e) throw Error("Unable to find node on an unmounted component.");
		}
		function ne(e) {
			var t = e.alternate;
			if (!t) {
				if (t = b(e), t === null) throw Error("Unable to find node on an unmounted component.");
				return t === e ? e : null;
			}
			for (var n = e, r = t;;) {
				var i = n.return;
				if (i === null) break;
				var a = i.alternate;
				if (a === null) {
					if (r = i.return, r !== null) {
						n = r;
						continue;
					}
					break;
				}
				if (i.child === a.child) {
					for (a = i.child; a;) {
						if (a === n) return te(i), e;
						if (a === r) return te(i), t;
						a = a.sibling;
					}
					throw Error("Unable to find node on an unmounted component.");
				}
				if (n.return !== r.return) n = i, r = a;
				else {
					for (var o = !1, s = i.child; s;) {
						if (s === n) {
							o = !0, n = i, r = a;
							break;
						}
						if (s === r) {
							o = !0, r = i, n = a;
							break;
						}
						s = s.sibling;
					}
					if (!o) {
						for (s = a.child; s;) {
							if (s === n) {
								o = !0, n = a, r = i;
								break;
							}
							if (s === r) {
								o = !0, r = a, n = i;
								break;
							}
							s = s.sibling;
						}
						if (!o) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
					}
				}
				if (n.alternate !== r) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
			}
			if (n.tag !== 3) throw Error("Unable to find node on an unmounted component.");
			return n.stateNode.current === n ? e : t;
		}
		function re(e) {
			var t = e.tag;
			if (t === 5 || t === 26 || t === 27 || t === 6) return e;
			for (e = e.child; e !== null;) {
				if (t = re(e), t !== null) return t;
				e = e.sibling;
			}
			return null;
		}
		function ie(e) {
			return typeof e != "object" || !e ? null : (e = Kf && e[Kf] || e["@@iterator"], typeof e == "function" ? e : null);
		}
		function S(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === qf ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case Pf: return "Fragment";
				case If: return "Profiler";
				case Ff: return "StrictMode";
				case Bf: return "Suspense";
				case Vf: return "SuspenseList";
				case Wf: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case Nf: return "Portal";
				case Rf: return e.displayName || "Context";
				case Lf: return (e._context.displayName || "Context") + ".Consumer";
				case zf:
					var t = e.render;
					return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case Hf: return t = e.displayName || null, t === null ? S(e.type) || "Memo" : t;
				case Uf:
					t = e._payload, e = e._init;
					try {
						return S(e(t));
					} catch {}
			}
			return null;
		}
		function ae(e) {
			return typeof e.tag == "number" ? C(e) : typeof e.name == "string" ? e.name : null;
		}
		function C(e) {
			var t = e.type;
			switch (e.tag) {
				case 31: return "Activity";
				case 24: return "Cache";
				case 9: return (t._context.displayName || "Context") + ".Consumer";
				case 10: return t.displayName || "Context";
				case 18: return "DehydratedFragment";
				case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e === "" ? "ForwardRef" : "ForwardRef(" + e + ")");
				case 7: return "Fragment";
				case 26:
				case 27:
				case 5: return t;
				case 4: return "Portal";
				case 3: return "Root";
				case 6: return "Text";
				case 16: return S(t);
				case 8: return t === Ff ? "StrictMode" : "Mode";
				case 22: return "Offscreen";
				case 12: return "Profiler";
				case 21: return "Scope";
				case 13: return "Suspense";
				case 19: return "SuspenseList";
				case 25: return "TracingMarker";
				case 1:
				case 0:
				case 14:
				case 15:
					if (typeof t == "function") return t.displayName || t.name || null;
					if (typeof t == "string") return t;
					break;
				case 29:
					if (t = e._debugInfo, t != null) {
						for (var n = t.length - 1; 0 <= n; n--) if (typeof t[n].name == "string") return t[n].name;
					}
					if (e.return !== null) return C(e.return);
			}
			return null;
		}
		function oe(e) {
			return { current: e };
		}
		function se(e, t) {
			0 > $f ? console.error("Unexpected pop.") : (t !== Qf[$f] && console.error("Unexpected Fiber popped."), e.current = Zf[$f], Zf[$f] = null, Qf[$f] = null, $f--);
		}
		function ce(e, t, n) {
			$f++, Zf[$f] = e.current, Qf[$f] = n, e.current = t;
		}
		function le(e) {
			return e === null && console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."), e;
		}
		function ue(e, t) {
			ce(np, t, e), ce(tp, e, e), ce(ep, null, e);
			var n = t.nodeType;
			switch (n) {
				case 9:
				case 11:
					n = n === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Hu(t) : GS;
					break;
				default: if (n = t.tagName, t = t.namespaceURI) t = Hu(t), t = Uu(t, n);
				else switch (n) {
					case "svg":
						t = KS;
						break;
					case "math":
						t = qS;
						break;
					default: t = GS;
				}
			}
			n = n.toLowerCase(), n = Ut(null, n), n = {
				context: t,
				ancestorInfo: n
			}, se(ep, e), ce(ep, n, e);
		}
		function w(e) {
			se(ep, e), se(tp, e), se(np, e);
		}
		function T() {
			return le(ep.current);
		}
		function de(e) {
			e.memoizedState !== null && ce(rp, e, e);
			var t = le(ep.current), n = e.type, r = Uu(t.context, n);
			n = Ut(t.ancestorInfo, n), r = {
				context: r,
				ancestorInfo: n
			}, t !== r && (ce(tp, e, e), ce(ep, r, e));
		}
		function fe(e) {
			tp.current === e && (se(ep, e), se(tp, e)), rp.current === e && (se(rp, e), SC._currentValue = xC);
		}
		function pe() {}
		function E() {
			if (ip === 0) {
				ap = console.log, op = console.info, sp = console.warn, cp = console.error, lp = console.group, up = console.groupCollapsed, dp = console.groupEnd;
				var e = {
					configurable: !0,
					enumerable: !0,
					value: pe,
					writable: !0
				};
				Object.defineProperties(console, {
					info: e,
					log: e,
					warn: e,
					error: e,
					group: e,
					groupCollapsed: e,
					groupEnd: e
				});
			}
			ip++;
		}
		function me() {
			if (ip--, ip === 0) {
				var e = {
					configurable: !0,
					enumerable: !0,
					writable: !0
				};
				Object.defineProperties(console, {
					log: B({}, e, { value: ap }),
					info: B({}, e, { value: op }),
					warn: B({}, e, { value: sp }),
					error: B({}, e, { value: cp }),
					group: B({}, e, { value: lp }),
					groupCollapsed: B({}, e, { value: up }),
					groupEnd: B({}, e, { value: dp })
				});
			}
			0 > ip && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
		}
		function he(e) {
			var t = Error.prepareStackTrace;
			if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith("Error: react-stack-top-frame\n") && (e = e.slice(29)), t = e.indexOf("\n"), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf("\n", t)), t !== -1) e = e.slice(0, t);
			else return "";
			return e;
		}
		function ge(e) {
			if (fp === void 0) try {
				throw Error();
			} catch (e) {
				var t = e.stack.trim().match(/\n( *(at )?)/);
				fp = t && t[1] || "", pp = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
			}
			return "\n" + fp + e + pp;
		}
		function _e(e, t) {
			if (!e || mp) return "";
			var n = hp.get(e);
			if (n !== void 0) return n;
			mp = !0, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
			var r = null;
			r = V.H, V.H = null, E();
			try {
				var i = { DetermineComponentFrameRoot: function() {
					try {
						if (t) {
							var n = function() {
								throw Error();
							};
							if (Object.defineProperty(n.prototype, "props", { set: function() {
								throw Error();
							} }), typeof Reflect == "object" && Reflect.construct) {
								try {
									Reflect.construct(n, []);
								} catch (e) {
									var r = e;
								}
								Reflect.construct(e, [], n);
							} else {
								try {
									n.call();
								} catch (e) {
									r = e;
								}
								e.call(n.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (e) {
								r = e;
							}
							(n = e()) && typeof n.catch == "function" && n.catch(function() {});
						}
					} catch (e) {
						if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
					}
					return [null, null];
				} };
				i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
				var a = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
				a && a.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
				var o = i.DetermineComponentFrameRoot(), s = o[0], c = o[1];
				if (s && c) {
					var l = s.split("\n"), u = c.split("\n");
					for (o = a = 0; a < l.length && !l[a].includes("DetermineComponentFrameRoot");) a++;
					for (; o < u.length && !u[o].includes("DetermineComponentFrameRoot");) o++;
					if (a === l.length || o === u.length) for (a = l.length - 1, o = u.length - 1; 1 <= a && 0 <= o && l[a] !== u[o];) o--;
					for (; 1 <= a && 0 <= o; a--, o--) if (l[a] !== u[o]) {
						if (a !== 1 || o !== 1) do
							if (a--, o--, 0 > o || l[a] !== u[o]) {
								var d = "\n" + l[a].replace(" at new ", " at ");
								return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), typeof e == "function" && hp.set(e, d), d;
							}
						while (1 <= a && 0 <= o);
						break;
					}
				}
			} finally {
				mp = !1, V.H = r, me(), Error.prepareStackTrace = n;
			}
			return l = (l = e ? e.displayName || e.name : "") ? ge(l) : "", typeof e == "function" && hp.set(e, l), l;
		}
		function ve(e, t) {
			switch (e.tag) {
				case 26:
				case 27:
				case 5: return ge(e.type);
				case 16: return ge("Lazy");
				case 13: return e.child !== t && t !== null ? ge("Suspense Fallback") : ge("Suspense");
				case 19: return ge("SuspenseList");
				case 0:
				case 15: return _e(e.type, !1);
				case 11: return _e(e.type.render, !1);
				case 1: return _e(e.type, !0);
				case 31: return ge("Activity");
				default: return "";
			}
		}
		function ye(e) {
			try {
				var t = "", n = null;
				do {
					t += ve(e, n);
					var r = e._debugInfo;
					if (r) for (var i = r.length - 1; 0 <= i; i--) {
						var a = r[i];
						if (typeof a.name == "string") {
							var o = t;
							a: {
								var s = a.name, c = a.env, l = a.debugLocation;
								if (l != null) {
									var u = he(l), d = u.lastIndexOf("\n"), f = d === -1 ? u : u.slice(d + 1);
									if (f.indexOf(s) !== -1) {
										var p = "\n" + f;
										break a;
									}
								}
								p = ge(s + (c ? " [" + c + "]" : ""));
							}
							t = o + p;
						}
					}
					n = e, e = e.return;
				} while (e);
				return t;
			} catch (e) {
				return "\nError generating stack: " + e.message + "\n" + e.stack;
			}
		}
		function be(e) {
			return (e = e ? e.displayName || e.name : "") ? ge(e) : "";
		}
		function xe() {
			if (gp === null) return null;
			var e = gp._debugOwner;
			return e == null ? null : ae(e);
		}
		function Se() {
			if (gp === null) return "";
			var e = gp;
			try {
				var t = "";
				switch (e.tag === 6 && (e = e.return), e.tag) {
					case 26:
					case 27:
					case 5:
						t += ge(e.type);
						break;
					case 13:
						t += ge("Suspense");
						break;
					case 19:
						t += ge("SuspenseList");
						break;
					case 31:
						t += ge("Activity");
						break;
					case 30:
					case 0:
					case 15:
					case 1:
						e._debugOwner || t !== "" || (t += be(e.type));
						break;
					case 11: e._debugOwner || t !== "" || (t += be(e.type.render));
				}
				for (; e;) if (typeof e.tag == "number") {
					var n = e;
					e = n._debugOwner;
					var r = n._debugStack;
					if (e && r) {
						var i = he(r);
						i !== "" && (t += "\n" + i);
					}
				} else if (e.debugStack != null) {
					var a = e.debugStack;
					(e = e.owner) && a && (t += "\n" + he(a));
				} else break;
				var o = t;
			} catch (e) {
				o = "\nError generating stack: " + e.message + "\n" + e.stack;
			}
			return o;
		}
		function D(e, t, n, r, i, a, o) {
			var s = gp;
			Ce(e);
			try {
				return e !== null && e._debugTask ? e._debugTask.run(t.bind(null, n, r, i, a, o)) : t(n, r, i, a, o);
			} finally {
				Ce(s);
			}
			throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.");
		}
		function Ce(e) {
			V.getCurrentStack = e === null ? null : Se, _p = !1, gp = e;
		}
		function we(e) {
			return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
		}
		function Te(e) {
			try {
				return Ee(e), !1;
			} catch {
				return !0;
			}
		}
		function Ee(e) {
			return "" + e;
		}
		function O(e, t) {
			if (Te(e)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", t, we(e)), Ee(e);
		}
		function De(e, t) {
			if (Te(e)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", t, we(e)), Ee(e);
		}
		function Oe(e) {
			if (Te(e)) return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.", we(e)), Ee(e);
		}
		function ke(e) {
			if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
			var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
			if (t.isDisabled) return !0;
			if (!t.supportsFiber) return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"), !0;
			try {
				Mp = t.inject(e), Np = t;
			} catch (e) {
				console.error("React instrumentation encountered an error: %o.", e);
			}
			return !!t.checkDCE;
		}
		function Ae(e) {
			if (typeof Ap == "function" && jp(e), Np && typeof Np.setStrictMode == "function") try {
				Np.setStrictMode(Mp, e);
			} catch (e) {
				Pp || (Pp = !0, console.error("React instrumentation encountered an error: %o", e));
			}
		}
		function je(e) {
			return e >>>= 0, e === 0 ? 32 : 31 - (Lp(e) / Rp | 0) | 0;
		}
		function Me(e) {
			var t = e & 42;
			if (t !== 0) return t;
			switch (e & -e) {
				case 1: return 1;
				case 2: return 2;
				case 4: return 4;
				case 8: return 8;
				case 16: return 16;
				case 32: return 32;
				case 64: return 64;
				case 128: return 128;
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072: return e & 261888;
				case 262144:
				case 524288:
				case 1048576:
				case 2097152: return e & 3932160;
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432: return e & 62914560;
				case 67108864: return 67108864;
				case 134217728: return 134217728;
				case 268435456: return 268435456;
				case 536870912: return 536870912;
				case 1073741824: return 0;
				default: return console.error("Should have found matching lanes. This is a bug in React."), e;
			}
		}
		function Ne(e, t, n) {
			var r = e.pendingLanes;
			if (r === 0) return 0;
			var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
			e = e.warmLanes;
			var s = r & 134217727;
			return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = Me(n))) : i = Me(o) : i = Me(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = Me(n))) : i = Me(o)) : i = Me(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
		}
		function k(e, t) {
			return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
		}
		function Pe(e, t) {
			switch (e) {
				case 1:
				case 2:
				case 4:
				case 8:
				case 64: return t + 250;
				case 16:
				case 32:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152: return t + 5e3;
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432: return -1;
				case 67108864:
				case 134217728:
				case 268435456:
				case 536870912:
				case 1073741824: return -1;
				default: return console.error("Should have found matching lanes. This is a bug in React."), -1;
			}
		}
		function Fe() {
			var e = Vp;
			return Vp <<= 1, !(Vp & 62914560) && (Vp = 4194304), e;
		}
		function Ie(e) {
			for (var t = [], n = 0; 31 > n; n++) t.push(e);
			return t;
		}
		function Le(e, t) {
			e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
		}
		function Re(e, t, n, r, i, a) {
			var o = e.pendingLanes;
			e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
			var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
			for (n = o & ~n; 0 < n;) {
				var u = 31 - Ip(n), d = 1 << u;
				s[u] = 0, c[u] = -1;
				var f = l[u];
				if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
					var p = f[u];
					p !== null && (p.lane &= -536870913);
				}
				n &= ~d;
			}
			r !== 0 && ze(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
		}
		function ze(e, t, n) {
			e.pendingLanes |= t, e.suspendedLanes &= ~t;
			var r = 31 - Ip(t);
			e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
		}
		function Be(e, t) {
			var n = e.entangledLanes |= t;
			for (e = e.entanglements; n;) {
				var r = 31 - Ip(n), i = 1 << r;
				i & t | e[r] & t && (e[r] |= t), n &= ~i;
			}
		}
		function Ve(e, t) {
			var n = t & -t;
			return n = n & 42 ? 1 : He(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
		}
		function He(e) {
			switch (e) {
				case 2:
					e = 1;
					break;
				case 8:
					e = 4;
					break;
				case 32:
					e = 16;
					break;
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
					e = 128;
					break;
				case 268435456:
					e = 134217728;
					break;
				default: e = 0;
			}
			return e;
		}
		function Ue(e, t, n) {
			if (Fp) for (e = e.pendingUpdatersLaneMap; 0 < n;) {
				var r = 31 - Ip(n), i = 1 << r;
				e[r].add(t), n &= ~i;
			}
		}
		function We(e, t) {
			if (Fp) for (var n = e.pendingUpdatersLaneMap, r = e.memoizedUpdaters; 0 < t;) {
				var i = 31 - Ip(t);
				e = 1 << i, i = n[i], 0 < i.size && (i.forEach(function(e) {
					var t = e.alternate;
					t !== null && r.has(t) || r.add(e);
				}), i.clear()), t &= ~e;
			}
		}
		function Ge(e) {
			return e &= -e, Hp !== 0 && Hp < e ? Up !== 0 && Up < e ? e & 134217727 ? Wp : Gp : Up : Hp;
		}
		function Ke() {
			var e = Yf.p;
			return e === 0 ? (e = window.event, e === void 0 ? Wp : pf(e.type)) : e;
		}
		function qe(e, t) {
			var n = Yf.p;
			try {
				return Yf.p = e, t();
			} finally {
				Yf.p = n;
			}
		}
		function Je(e) {
			delete e[qp], delete e[Jp], delete e[Xp], delete e[Zp], delete e[Qp];
		}
		function Ye(e) {
			var t = e[qp];
			if (t) return t;
			for (var n = e.parentNode; n;) {
				if (t = n[Yp] || n[qp]) {
					if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Cd(e); e !== null;) {
						if (n = e[qp]) return n;
						e = Cd(e);
					}
					return t;
				}
				e = n, n = e.parentNode;
			}
			return null;
		}
		function Xe(e) {
			if (e = e[qp] || e[Yp]) {
				var t = e.tag;
				if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
			}
			return null;
		}
		function Ze(e) {
			var t = e.tag;
			if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
			throw Error("getNodeFromInstance: Invalid argument.");
		}
		function Qe(e) {
			var t = e[$p];
			return t ||= e[$p] = {
				hoistableStyles: /* @__PURE__ */ new Map(),
				hoistableScripts: /* @__PURE__ */ new Map()
			}, t;
		}
		function $e(e) {
			e[em] = !0;
		}
		function A(e, t) {
			et(e, t), et(e + "Capture", t);
		}
		function et(e, t) {
			nm[e] && console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), nm[e] = t;
			var n = e.toLowerCase();
			for (rm[n] = e, e === "onDoubleClick" && (rm.ondblclick = e), e = 0; e < t.length; e++) tm.add(t[e]);
		}
		function tt(e, t) {
			im[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
		}
		function nt(e) {
			return vp.call(sm, e) ? !0 : vp.call(om, e) ? !1 : am.test(e) ? sm[e] = !0 : (om[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
		}
		function rt(e, t, n) {
			if (nt(t)) {
				if (!e.hasAttribute(t)) {
					switch (typeof n) {
						case "symbol":
						case "object": return n;
						case "function": return n;
						case "boolean": if (!1 === n) return n;
					}
					return n === void 0 ? void 0 : null;
				}
				return e = e.getAttribute(t), e === "" && !0 === n ? !0 : (O(n, t), e === "" + n ? n : e);
			}
		}
		function at(e, t, n) {
			if (nt(t)) if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				O(n, t), e.setAttribute(t, "" + n);
			}
		}
		function ot(e, t, n) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
					case "boolean":
						e.removeAttribute(t);
						return;
				}
				O(n, t), e.setAttribute(t, "" + n);
			}
		}
		function st(e, t, n, r) {
			if (r === null) e.removeAttribute(n);
			else {
				switch (typeof r) {
					case "undefined":
					case "function":
					case "symbol":
					case "boolean":
						e.removeAttribute(n);
						return;
				}
				O(r, n), e.setAttributeNS(t, n, "" + r);
			}
		}
		function ct(e) {
			switch (typeof e) {
				case "bigint":
				case "boolean":
				case "number":
				case "string":
				case "undefined": return e;
				case "object": return Oe(e), e;
				default: return "";
			}
		}
		function lt(e) {
			var t = e.type;
			return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
		}
		function ut(e, t, n) {
			var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
			if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
				var i = r.get, a = r.set;
				return Object.defineProperty(e, t, {
					configurable: !0,
					get: function() {
						return i.call(this);
					},
					set: function(e) {
						Oe(e), n = "" + e, a.call(this, e);
					}
				}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
					getValue: function() {
						return n;
					},
					setValue: function(e) {
						Oe(e), n = "" + e;
					},
					stopTracking: function() {
						e._valueTracker = null, delete e[t];
					}
				};
			}
		}
		function dt(e) {
			if (!e._valueTracker) {
				var t = lt(e) ? "checked" : "value";
				e._valueTracker = ut(e, t, "" + e[t]);
			}
		}
		function ft(e) {
			if (!e) return !1;
			var t = e._valueTracker;
			if (!t) return !0;
			var n = t.getValue(), r = "";
			return e && (r = lt(e) ? e.checked ? "true" : "false" : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
		}
		function pt(e) {
			if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
			try {
				return e.activeElement || e.body;
			} catch {
				return e.body;
			}
		}
		function mt(e) {
			return e.replace(cm, function(e) {
				return "\\" + e.charCodeAt(0).toString(16) + " ";
			});
		}
		function ht(e, t) {
			t.checked === void 0 || t.defaultChecked === void 0 || um || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", xe() || "A component", t.type), um = !0), t.value === void 0 || t.defaultValue === void 0 || lm || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", xe() || "A component", t.type), lm = !0);
		}
		function gt(e, t, n, r, i, a, o, s) {
			e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? (O(o, "type"), e.type = o) : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ct(t)) : e.value !== "" + ct(t) && (e.value = "" + ct(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : vt(e, o, ct(n)) : vt(e, o, ct(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? (O(s, "name"), e.name = "" + ct(s)) : e.removeAttribute("name");
		}
		function _t(e, t, n, r, i, a, o, s) {
			if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (O(a, "type"), e.type = a), t != null || n != null) {
				if (!(a !== "submit" && a !== "reset" || t != null)) {
					dt(e);
					return;
				}
				n = n == null ? "" : "" + ct(n), t = t == null ? n : "" + ct(t), s || t === e.value || (e.value = t), e.defaultValue = t;
			}
			r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (O(o, "name"), e.name = o), dt(e);
		}
		function vt(e, t, n) {
			t === "number" && pt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
		}
		function yt(e, t) {
			t.value ?? (typeof t.children == "object" && t.children !== null ? kf.Children.forEach(t.children, function(e) {
				e == null || typeof e == "string" || typeof e == "number" || typeof e == "bigint" || fm || (fm = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."));
			}) : t.dangerouslySetInnerHTML == null || pm || (pm = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), t.selected == null || dm || (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), dm = !0);
		}
		function bt() {
			var e = xe();
			return e ? "\n\nCheck the render method of `" + e + "`." : "";
		}
		function xt(e, t, n, r) {
			if (e = e.options, t) {
				t = {};
				for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
				for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
			} else {
				for (n = "" + ct(n), t = null, i = 0; i < e.length; i++) {
					if (e[i].value === n) {
						e[i].selected = !0, r && (e[i].defaultSelected = !0);
						return;
					}
					t !== null || e[i].disabled || (t = e[i]);
				}
				t !== null && (t.selected = !0);
			}
		}
		function St(e, t) {
			for (e = 0; e < hm.length; e++) {
				var n = hm[e];
				if (t[n] != null) {
					var r = Jf(t[n]);
					t.multiple && !r ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, bt()) : !t.multiple && r && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, bt());
				}
			}
			t.value === void 0 || t.defaultValue === void 0 || mm || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), mm = !0);
		}
		function Ct(e, t) {
			t.value === void 0 || t.defaultValue === void 0 || gm || (console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components", xe() || "A component"), gm = !0), t.children != null && t.value == null && console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
		}
		function wt(e, t, n) {
			if (t != null && (t = "" + ct(t), t !== e.value && (e.value = t), n == null)) {
				e.defaultValue !== t && (e.defaultValue = t);
				return;
			}
			e.defaultValue = n == null ? "" : "" + ct(n);
		}
		function Tt(e, t, n, r) {
			if (t == null) {
				if (r != null) {
					if (n != null) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
					if (Jf(r)) {
						if (1 < r.length) throw Error("<textarea> can only have at most one child.");
						r = r[0];
					}
					n = r;
				}
				n ??= "", t = n;
			}
			n = ct(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), dt(e);
		}
		function Et(e, t) {
			return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Et(e.children[0], t) : e;
		}
		function Dt(e) {
			return "  " + "  ".repeat(e);
		}
		function Ot(e) {
			return "+ " + "  ".repeat(e);
		}
		function kt(e) {
			return "- " + "  ".repeat(e);
		}
		function At(e) {
			switch (e.tag) {
				case 26:
				case 27:
				case 5: return e.type;
				case 16: return "Lazy";
				case 31: return "Activity";
				case 13: return "Suspense";
				case 19: return "SuspenseList";
				case 0:
				case 15: return e = e.type, e.displayName || e.name || null;
				case 11: return e = e.type.render, e.displayName || e.name || null;
				case 1: return e = e.type, e.displayName || e.name || null;
				default: return null;
			}
		}
		function jt(e, t) {
			return _m.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? "{\"...\"}" : "{" + e.slice(0, t - 7) + "...\"}" : "{" + e + "}") : e.length > t ? 5 > t ? "{\"...\"}" : e.slice(0, t - 3) + "..." : e;
		}
		function Mt(e, t, n) {
			var r = 120 - 2 * n;
			if (t === null) return Ot(n) + jt(e, r) + "\n";
			if (typeof t == "string") {
				for (var i = 0; i < t.length && i < e.length && t.charCodeAt(i) === e.charCodeAt(i); i++);
				return i > r - 8 && 10 < i && (e = "..." + e.slice(i - 8), t = "..." + t.slice(i - 8)), Ot(n) + jt(e, r) + "\n" + kt(n) + jt(t, r) + "\n";
			}
			return Dt(n) + jt(e, r) + "\n";
		}
		function Nt(e) {
			return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(e, t) {
				return t;
			});
		}
		function Pt(e, t) {
			switch (typeof e) {
				case "string": return e = JSON.stringify(e), e.length > t ? 5 > t ? "\"...\"" : e.slice(0, t - 4) + "...\"" : e;
				case "object":
					if (e === null) return "null";
					if (Jf(e)) return "[...]";
					if (e.$$typeof === Mf) return (t = S(e.type)) ? "<" + t + ">" : "<...>";
					var n = Nt(e);
					if (n === "Object") {
						for (var r in n = "", t -= 2, e) if (e.hasOwnProperty(r)) {
							var i = JSON.stringify(r);
							if (i !== "\"" + r + "\"" && (r = i), t -= r.length - 2, i = Pt(e[r], 15 > t ? t : 15), t -= i.length, 0 > t) {
								n += n === "" ? "..." : ", ...";
								break;
							}
							n += (n === "" ? "" : ",") + r + ":" + i;
						}
						return "{" + n + "}";
					}
					return n;
				case "function": return (t = e.displayName || e.name) ? "function " + t : "function";
				default: return String(e);
			}
		}
		function Ft(e, t) {
			return typeof e != "string" || _m.test(e) ? "{" + Pt(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? "\"...\"" : "\"" + e.slice(0, t - 5) + "...\"" : "\"" + e + "\"";
		}
		function It(e, t, n) {
			var r = 120 - n.length - e.length, i = [], a;
			for (a in t) if (t.hasOwnProperty(a) && a !== "children") {
				var o = Ft(t[a], 120 - n.length - a.length - 1);
				r -= a.length + o.length + 2, i.push(a + "=" + o);
			}
			return i.length === 0 ? n + "<" + e + ">\n" : 0 < r ? n + "<" + e + " " + i.join(" ") + ">\n" : n + "<" + e + "\n" + n + "  " + i.join("\n" + n + "  ") + "\n" + n + ">\n";
		}
		function Lt(e, t, n) {
			var r = "", i = B({}, t), a;
			for (a in e) if (e.hasOwnProperty(a)) {
				delete i[a];
				var o = 120 - 2 * n - a.length - 2, s = Pt(e[a], o);
				t.hasOwnProperty(a) ? (o = Pt(t[a], o), r += Ot(n) + a + ": " + s + "\n", r += kt(n) + a + ": " + o + "\n") : r += Ot(n) + a + ": " + s + "\n";
			}
			for (var c in i) i.hasOwnProperty(c) && (e = Pt(i[c], 120 - 2 * n - c.length - 2), r += kt(n) + c + ": " + e + "\n");
			return r;
		}
		function Rt(e, t, n, r) {
			var i = "", a = /* @__PURE__ */ new Map();
			for (l in n) n.hasOwnProperty(l) && a.set(l.toLowerCase(), l);
			if (a.size === 1 && a.has("children")) i += It(e, t, Dt(r));
			else {
				for (var o in t) if (t.hasOwnProperty(o) && o !== "children") {
					var s = 120 - 2 * (r + 1) - o.length - 1, c = a.get(o.toLowerCase());
					if (c !== void 0) {
						a.delete(o.toLowerCase());
						var l = t[o];
						c = n[c];
						var u = Ft(l, s);
						s = Ft(c, s), typeof l == "object" && l && typeof c == "object" && c && Nt(l) === "Object" && Nt(c) === "Object" && (2 < Object.keys(l).length || 2 < Object.keys(c).length || -1 < u.indexOf("...") || -1 < s.indexOf("...")) ? i += Dt(r + 1) + o + "={{\n" + Lt(l, c, r + 2) + Dt(r + 1) + "}}\n" : (i += Ot(r + 1) + o + "=" + u + "\n", i += kt(r + 1) + o + "=" + s + "\n");
					} else i += Dt(r + 1) + o + "=" + Ft(t[o], s) + "\n";
				}
				a.forEach(function(e) {
					if (e !== "children") {
						var t = 120 - 2 * (r + 1) - e.length - 1;
						i += kt(r + 1) + e + "=" + Ft(n[e], t) + "\n";
					}
				}), i = i === "" ? Dt(r) + "<" + e + ">\n" : Dt(r) + "<" + e + "\n" + i + Dt(r) + ">\n";
			}
			return e = n.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (a = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (a = "" + t), i += Mt(a, "" + e, r + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (i = e == null ? i + Mt("" + t, null, r + 1) : i + Mt("" + t, void 0, r + 1)), i;
		}
		function zt(e, t) {
			var n = At(e);
			if (n === null) {
				for (n = "", e = e.child; e;) n += zt(e, t), e = e.sibling;
				return n;
			}
			return Dt(t) + "<" + n + ">\n";
		}
		function Bt(e, t) {
			var n = Et(e, t);
			if (n !== e && (e.children.length !== 1 || e.children[0] !== n)) return Dt(t) + "...\n" + Bt(n, t + 1);
			n = "";
			var r = e.fiber._debugInfo;
			if (r) for (var i = 0; i < r.length; i++) {
				var a = r[i].name;
				typeof a == "string" && (n += Dt(t) + "<" + a + ">\n", t++);
			}
			if (r = "", i = e.fiber.pendingProps, e.fiber.tag === 6) r = Mt(i, e.serverProps, t), t++;
			else if (a = At(e.fiber), a !== null) if (e.serverProps === void 0) {
				r = t;
				var o = 120 - 2 * r - a.length - 2, s = "";
				for (l in i) if (i.hasOwnProperty(l) && l !== "children") {
					var c = Ft(i[l], 15);
					if (o -= l.length + c.length + 2, 0 > o) {
						s += " ...";
						break;
					}
					s += " " + l + "=" + c;
				}
				r = Dt(r) + "<" + a + s + ">\n", t++;
			} else e.serverProps === null ? (r = It(a, i, Ot(t)), t++) : typeof e.serverProps == "string" ? console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React.") : (r = Rt(a, i, e.serverProps, t), t++);
			var l = "";
			for (i = e.fiber.child, a = 0; i && a < e.children.length;) o = e.children[a], o.fiber === i ? (l += Bt(o, t), a++) : l += zt(i, t), i = i.sibling;
			for (i && 0 < e.children.length && (l += Dt(t) + "...\n"), i = e.serverTail, e.serverProps === null && t--, e = 0; e < i.length; e++) a = i[e], l = typeof a == "string" ? l + (kt(t) + jt(a, 120 - 2 * t) + "\n") : l + It(a.type, a.props, kt(t));
			return n + r + l;
		}
		function Vt(e) {
			try {
				return "\n\n" + Bt(e, 0);
			} catch {
				return "";
			}
		}
		function Ht(e, t, n) {
			for (var r = t, i = null, a = 0; r;) r === e && (a = 0), i = {
				fiber: r,
				children: i === null ? [] : [i],
				serverProps: r === t ? n : r === e ? null : void 0,
				serverTail: [],
				distanceFromLeaf: a
			}, a++, r = r.return;
			return i === null ? "" : Vt(i).replaceAll(/^[+-]/gm, ">");
		}
		function Ut(e, t) {
			var n = B({}, e || Sm), r = { tag: t };
			return ym.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), bm.indexOf(t) !== -1 && (n.pTagInButtonScope = null), vm.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = r, t === "form" && (n.formTag = r), t === "a" && (n.aTagInScope = r), t === "button" && (n.buttonTagInScope = r), t === "nobr" && (n.nobrTagInScope = r), t === "p" && (n.pTagInButtonScope = r), t === "li" && (n.listItemTagAutoclosing = r), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = r), t === "#document" || t === "html" ? n.containerTagInScope = null : n.containerTagInScope ||= r, e !== null || t !== "#document" && t !== "html" && t !== "body" ? !0 === n.implicitRootScope && (n.implicitRootScope = !1) : n.implicitRootScope = !0, n;
		}
		function Wt(e, t, n) {
			switch (t) {
				case "select": return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
				case "optgroup": return e === "option" || e === "#text";
				case "option": return e === "#text";
				case "tr": return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
				case "tbody":
				case "thead":
				case "tfoot": return e === "tr" || e === "style" || e === "script" || e === "template";
				case "colgroup": return e === "col" || e === "template";
				case "table": return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
				case "head": return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
				case "html":
					if (n) break;
					return e === "head" || e === "body" || e === "frameset";
				case "frameset": return e === "frame";
				case "#document": if (!n) return e === "html";
			}
			switch (e) {
				case "h1":
				case "h2":
				case "h3":
				case "h4":
				case "h5":
				case "h6": return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
				case "rp":
				case "rt": return xm.indexOf(t) === -1;
				case "caption":
				case "col":
				case "colgroup":
				case "frameset":
				case "frame":
				case "tbody":
				case "td":
				case "tfoot":
				case "th":
				case "thead":
				case "tr": return t == null;
				case "head": return n || t === null;
				case "html": return n && t === "#document" || t === null;
				case "body": return n && (t === "#document" || t === "html") || t === null;
			}
			return !0;
		}
		function Gt(e, t) {
			switch (e) {
				case "address":
				case "article":
				case "aside":
				case "blockquote":
				case "center":
				case "details":
				case "dialog":
				case "dir":
				case "div":
				case "dl":
				case "fieldset":
				case "figcaption":
				case "figure":
				case "footer":
				case "header":
				case "hgroup":
				case "main":
				case "menu":
				case "nav":
				case "ol":
				case "p":
				case "section":
				case "summary":
				case "ul":
				case "pre":
				case "listing":
				case "table":
				case "hr":
				case "xmp":
				case "h1":
				case "h2":
				case "h3":
				case "h4":
				case "h5":
				case "h6": return t.pTagInButtonScope;
				case "form": return t.formTag || t.pTagInButtonScope;
				case "li": return t.listItemTagAutoclosing;
				case "dd":
				case "dt": return t.dlItemTagAutoclosing;
				case "button": return t.buttonTagInScope;
				case "a": return t.aTagInScope;
				case "nobr": return t.nobrTagInScope;
			}
			return null;
		}
		function Kt(e, t) {
			for (; e;) {
				switch (e.tag) {
					case 5:
					case 26:
					case 27: if (e.type === t) return e;
				}
				e = e.return;
			}
			return null;
		}
		function qt(e, t) {
			t ||= Sm;
			var n = t.current;
			if (t = (n = Wt(e, n && n.tag, t.implicitRootScope) ? null : n) ? null : Gt(e, t), t = n || t, !t) return !0;
			var r = t.tag;
			if (t = String(!!n) + "|" + e + "|" + r, Cm[t]) return !1;
			Cm[t] = !0;
			var i = (t = gp) ? Kt(t.return, r) : null, a = t !== null && i !== null ? Ht(i, t, null) : "", o = "<" + e + ">";
			return n ? (n = "", r === "table" && e === "tr" && (n += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error("In HTML, %s cannot be a child of <%s>.%s\nThis will cause a hydration error.%s", o, r, n, a)) : console.error("In HTML, %s cannot be a descendant of <%s>.\nThis will cause a hydration error.%s", o, r, a), t && (e = t.return, i === null || e === null || i === e && e._debugOwner === t._debugOwner || D(i, function() {
				console.error("<%s> cannot contain a nested %s.\nSee this log for the ancestor stack trace.", r, o);
			})), !1;
		}
		function Jt(e, t, n) {
			if (n || Wt("#text", t, !1)) return !0;
			if (n = "#text|" + t, Cm[n]) return !1;
			Cm[n] = !0;
			var r = (n = gp) ? Kt(n, t) : null;
			return n = n !== null && r !== null ? Ht(r, n, n.tag === 6 ? null : { children: null }) : "", /\S/.test(e) ? console.error("In HTML, text nodes cannot be a child of <%s>.\nThis will cause a hydration error.%s", t, n) : console.error("In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.\nThis will cause a hydration error.%s", t, n), !1;
		}
		function Yt(e, t) {
			if (t) {
				var n = e.firstChild;
				if (n && n === e.lastChild && n.nodeType === 3) {
					n.nodeValue = t;
					return;
				}
			}
			e.textContent = t;
		}
		function Xt(e) {
			return e.replace(km, function(e, t) {
				return t.toUpperCase();
			});
		}
		function Zt(e, t, n) {
			var r = t.indexOf("--") === 0;
			r || (-1 < t.indexOf("-") ? jm.hasOwnProperty(t) && jm[t] || (jm[t] = !0, console.error("Unsupported style property %s. Did you mean %s?", t, Xt(t.replace(Om, "ms-")))) : Dm.test(t) ? jm.hasOwnProperty(t) && jm[t] || (jm[t] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", t, t.charAt(0).toUpperCase() + t.slice(1))) : !Am.test(n) || Mm.hasOwnProperty(n) && Mm[n] || (Mm[n] = !0, console.error("Style property values shouldn't contain a semicolon. Try \"%s: %s\" instead.", t, n.replace(Am, ""))), typeof n == "number" && (isNaN(n) ? Nm || (Nm = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", t)) : isFinite(n) || Pm || (Pm = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", t)))), n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Fm.has(t) ? t === "float" ? e.cssFloat = n : (De(n, t), e[t] = ("" + n).trim()) : e[t] = n + "px";
		}
		function Qt(e, t, n) {
			if (t != null && typeof t != "object") throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
			if (t && Object.freeze(t), e = e.style, n != null) {
				if (t) {
					var r = {};
					if (n) {
						for (var i in n) if (n.hasOwnProperty(i) && !t.hasOwnProperty(i)) for (var a = wm[i] || [i], o = 0; o < a.length; o++) r[a[o]] = i;
					}
					for (var s in t) if (t.hasOwnProperty(s) && (!n || n[s] !== t[s])) for (i = wm[s] || [s], a = 0; a < i.length; a++) r[i[a]] = s;
					for (var c in s = {}, t) for (i = wm[c] || [c], a = 0; a < i.length; a++) s[i[a]] = c;
					for (var l in c = {}, r) if (i = r[l], (a = s[l]) && i !== a && (o = i + "," + a, !c[o])) {
						c[o] = !0, o = console;
						var u = t[i];
						o.error.call(o, "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", u == null || typeof u == "boolean" || u === "" ? "Removing" : "Updating", i, a);
					}
				}
				for (var d in n) !n.hasOwnProperty(d) || t != null && t.hasOwnProperty(d) || (d.indexOf("--") === 0 ? e.setProperty(d, "") : d === "float" ? e.cssFloat = "" : e[d] = "");
				for (var f in t) l = t[f], t.hasOwnProperty(f) && n[f] !== l && Zt(e, f, l);
			} else for (r in t) t.hasOwnProperty(r) && Zt(e, r, t[r]);
		}
		function $t(e) {
			if (e.indexOf("-") === -1) return !1;
			switch (e) {
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph": return !1;
				default: return !0;
			}
		}
		function en(e) {
			return Rm.get(e) || e;
		}
		function tn(e, t) {
			if (vp.call(Vm, t) && Vm[t]) return !0;
			if (Um.test(t)) {
				if (e = "aria-" + t.slice(4).toLowerCase(), e = Bm.hasOwnProperty(e) ? e : null, e == null) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Vm[t] = !0;
				if (t !== e) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, e), Vm[t] = !0;
			}
			if (Hm.test(t)) {
				if (e = t.toLowerCase(), e = Bm.hasOwnProperty(e) ? e : null, e == null) return Vm[t] = !0, !1;
				t !== e && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, e), Vm[t] = !0);
			}
			return !0;
		}
		function nn(e, t) {
			var n = [], r;
			for (r in t) tn(e, r) || n.push(r);
			t = n.map(function(e) {
				return "`" + e + "`";
			}).join(", "), n.length === 1 ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e) : 1 < n.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e);
		}
		function rn(e, t, n, r) {
			if (vp.call(Gm, t) && Gm[t]) return !0;
			var i = t.toLowerCase();
			if (i === "onfocusin" || i === "onfocusout") return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Gm[t] = !0;
			if (typeof n == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction")) return !0;
			if (r != null) {
				if (e = r.possibleRegistrationNames, r.registrationNameDependencies.hasOwnProperty(t)) return !0;
				if (r = e.hasOwnProperty(i) ? e[i] : null, r != null) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", t, r), Gm[t] = !0;
				if (Km.test(t)) return console.error("Unknown event handler property `%s`. It will be ignored.", t), Gm[t] = !0;
			} else if (Km.test(t)) return qm.test(t) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Gm[t] = !0;
			if (Jm.test(t) || Ym.test(t)) return !0;
			if (i === "innerhtml") return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Gm[t] = !0;
			if (i === "aria") return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Gm[t] = !0;
			if (i === "is" && n != null && typeof n != "string") return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), Gm[t] = !0;
			if (typeof n == "number" && isNaN(n)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Gm[t] = !0;
			if (zm.hasOwnProperty(i)) {
				if (i = zm[i], i !== t) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", t, i), Gm[t] = !0;
			} else if (t !== i) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, i), Gm[t] = !0;
			switch (t) {
				case "dangerouslySetInnerHTML":
				case "children":
				case "style":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "ref": return !0;
				case "innerText":
				case "textContent": return !0;
			}
			switch (typeof n) {
				case "boolean": switch (t) {
					case "autoFocus":
					case "checked":
					case "multiple":
					case "muted":
					case "selected":
					case "contentEditable":
					case "spellCheck":
					case "draggable":
					case "value":
					case "autoReverse":
					case "externalResourcesRequired":
					case "focusable":
					case "preserveAlpha":
					case "allowFullScreen":
					case "async":
					case "autoPlay":
					case "controls":
					case "default":
					case "defer":
					case "disabled":
					case "disablePictureInPicture":
					case "disableRemotePlayback":
					case "formNoValidate":
					case "hidden":
					case "loop":
					case "noModule":
					case "noValidate":
					case "open":
					case "playsInline":
					case "readOnly":
					case "required":
					case "reversed":
					case "scoped":
					case "seamless":
					case "itemScope":
					case "capture":
					case "download":
					case "inert": return !0;
					default: return i = t.toLowerCase().slice(0, 5), i === "data-" || i === "aria-" ? !0 : (n ? console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.", n, t, t, n, t) : console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", n, t, t, n, t, t, t), Gm[t] = !0);
				}
				case "function":
				case "symbol": return Gm[t] = !0, !1;
				case "string": if (n === "false" || n === "true") {
					switch (t) {
						case "checked":
						case "selected":
						case "multiple":
						case "muted":
						case "allowFullScreen":
						case "async":
						case "autoPlay":
						case "controls":
						case "default":
						case "defer":
						case "disabled":
						case "disablePictureInPicture":
						case "disableRemotePlayback":
						case "formNoValidate":
						case "hidden":
						case "loop":
						case "noModule":
						case "noValidate":
						case "open":
						case "playsInline":
						case "readOnly":
						case "required":
						case "reversed":
						case "scoped":
						case "seamless":
						case "itemScope":
						case "inert": break;
						default: return !0;
					}
					console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : "Although this works, it will not work as expected if you pass the string \"false\".", t, n), Gm[t] = !0;
				}
			}
			return !0;
		}
		function an(e, t, n) {
			var r = [], i;
			for (i in t) rn(e, i, t[i], n) || r.push(i);
			t = r.map(function(e) {
				return "`" + e + "`";
			}).join(", "), r.length === 1 ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e) : 1 < r.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e);
		}
		function on(e) {
			return Xm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
		}
		function sn() {}
		function cn(e) {
			return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
		}
		function ln(e) {
			var t = Xe(e);
			if (t && (e = t.stateNode)) {
				var n = e[Jp] || null;
				a: switch (e = t.stateNode, t.type) {
					case "input":
						if (gt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
							for (n = e; n.parentNode;) n = n.parentNode;
							for (O(t, "name"), n = n.querySelectorAll("input[name=\"" + mt("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
								var r = n[t];
								if (r !== e && r.form === e.form) {
									var i = r[Jp] || null;
									if (!i) throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
									gt(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
								}
							}
							for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && ft(r);
						}
						break a;
					case "textarea":
						wt(e, n.value, n.defaultValue);
						break a;
					case "select": t = n.value, t != null && xt(e, !!n.multiple, t, !1);
				}
			}
		}
		function un(e, t, n) {
			if (eh) return e(t, n);
			eh = !0;
			try {
				return e(t);
			} finally {
				if (eh = !1, (Qm !== null || $m !== null) && (ll(), Qm && (t = Qm, e = $m, $m = Qm = null, ln(t), e))) for (t = 0; t < e.length; t++) ln(e[t]);
			}
		}
		function dn(e, t) {
			var n = e.stateNode;
			if (n === null) return null;
			var r = n[Jp] || null;
			if (r === null) return null;
			n = r[t];
			a: switch (t) {
				case "onClick":
				case "onClickCapture":
				case "onDoubleClick":
				case "onDoubleClickCapture":
				case "onMouseDown":
				case "onMouseDownCapture":
				case "onMouseMove":
				case "onMouseMoveCapture":
				case "onMouseUp":
				case "onMouseUpCapture":
				case "onMouseEnter":
					(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
					break a;
				default: e = !1;
			}
			if (e) return null;
			if (n && typeof n != "function") throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof n + "` type.");
			return n;
		}
		function fn() {
			if (oh) return oh;
			var e, t = ah, n = t.length, r, i = "value" in ih ? ih.value : ih.textContent, a = i.length;
			for (e = 0; e < n && t[e] === i[e]; e++);
			var o = n - e;
			for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
			return oh = i.slice(e, 1 < r ? 1 - r : void 0);
		}
		function pn(e) {
			var t = e.keyCode;
			return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
		}
		function mn() {
			return !0;
		}
		function hn() {
			return !1;
		}
		function gn(e) {
			function t(t, n, r, i, a) {
				for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
				return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? mn : hn, this.isPropagationStopped = hn, this;
			}
			return B(t.prototype, {
				preventDefault: function() {
					this.defaultPrevented = !0;
					var e = this.nativeEvent;
					e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = mn);
				},
				stopPropagation: function() {
					var e = this.nativeEvent;
					e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = mn);
				},
				persist: function() {},
				isPersistent: mn
			}), t;
		}
		function _n(e) {
			var t = this.nativeEvent;
			return t.getModifierState ? t.getModifierState(e) : (e = wh[e]) ? !!t[e] : !1;
		}
		function vn() {
			return _n;
		}
		function yn(e, t) {
			switch (e) {
				case "keyup": return jh.indexOf(t.keyCode) !== -1;
				case "keydown": return t.keyCode !== Mh;
				case "keypress":
				case "mousedown":
				case "focusout": return !0;
				default: return !1;
			}
		}
		function bn(e) {
			return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
		}
		function xn(e, t) {
			switch (e) {
				case "compositionend": return bn(t);
				case "keypress": return t.which === Lh ? (zh = !0, Rh) : null;
				case "textInput": return e = t.data, e === Rh && zh ? null : e;
				default: return null;
			}
		}
		function Sn(e, t) {
			if (Bh) return e === "compositionend" || !Nh && yn(e, t) ? (e = fn(), oh = ah = ih = null, Bh = !1, e) : null;
			switch (e) {
				case "paste": return null;
				case "keypress":
					if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
						if (t.char && 1 < t.char.length) return t.char;
						if (t.which) return String.fromCharCode(t.which);
					}
					return null;
				case "compositionend": return Ih && t.locale !== "ko" ? null : t.data;
				default: return null;
			}
		}
		function Cn(e) {
			var t = e && e.nodeName && e.nodeName.toLowerCase();
			return t === "input" ? !!Vh[e.type] : t === "textarea";
		}
		function wn(e) {
			if (!th) return !1;
			e = "on" + e;
			var t = e in document;
			return t ||= (t = document.createElement("div"), t.setAttribute(e, "return;"), typeof t[e] == "function"), t;
		}
		function Tn(e, t, n, r) {
			Qm ? $m ? $m.push(r) : $m = [r] : Qm = r, t = hu(t, "onChange"), 0 < t.length && (n = new ch("onChange", "change", null, n, r), e.push({
				event: n,
				listeners: t
			}));
		}
		function En(e) {
			lu(e, 0);
		}
		function Dn(e) {
			if (ft(Ze(e))) return e;
		}
		function On(e, t) {
			if (e === "change") return t;
		}
		function kn() {
			Hh && (Hh.detachEvent("onpropertychange", An), Uh = Hh = null);
		}
		function An(e) {
			if (e.propertyName === "value" && Dn(Uh)) {
				var t = [];
				Tn(t, Uh, e, cn(e)), un(En, t);
			}
		}
		function jn(e, t, n) {
			e === "focusin" ? (kn(), Hh = t, Uh = n, Hh.attachEvent("onpropertychange", An)) : e === "focusout" && kn();
		}
		function Mn(e) {
			if (e === "selectionchange" || e === "keyup" || e === "keydown") return Dn(Uh);
		}
		function Nn(e, t) {
			if (e === "click") return Dn(t);
		}
		function Pn(e, t) {
			if (e === "input" || e === "change") return Dn(t);
		}
		function Fn(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function In(e, t) {
			if (Gh(e, t)) return !0;
			if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
			var n = Object.keys(e), r = Object.keys(t);
			if (n.length !== r.length) return !1;
			for (r = 0; r < n.length; r++) {
				var i = n[r];
				if (!vp.call(t, i) || !Gh(e[i], t[i])) return !1;
			}
			return !0;
		}
		function Ln(e) {
			for (; e && e.firstChild;) e = e.firstChild;
			return e;
		}
		function Rn(e, t) {
			var n = Ln(e);
			e = 0;
			for (var r; n;) {
				if (n.nodeType === 3) {
					if (r = e + n.textContent.length, e <= t && r >= t) return {
						node: n,
						offset: t - e
					};
					e = r;
				}
				a: {
					for (; n;) {
						if (n.nextSibling) {
							n = n.nextSibling;
							break a;
						}
						n = n.parentNode;
					}
					n = void 0;
				}
				n = Ln(n);
			}
		}
		function zn(e, t) {
			return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zn(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
		}
		function Bn(e) {
			e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
			for (var t = pt(e.document); t instanceof e.HTMLIFrameElement;) {
				try {
					var n = typeof t.contentWindow.location.href == "string";
				} catch {
					n = !1;
				}
				if (n) e = t.contentWindow;
				else break;
				t = pt(e.document);
			}
			return t;
		}
		function Vn(e) {
			var t = e && e.nodeName && e.nodeName.toLowerCase();
			return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
		}
		function Hn(e, t, n) {
			var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
			Xh || qh == null || qh !== pt(r) || (r = qh, "selectionStart" in r && Vn(r) ? r = {
				start: r.selectionStart,
				end: r.selectionEnd
			} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
				anchorNode: r.anchorNode,
				anchorOffset: r.anchorOffset,
				focusNode: r.focusNode,
				focusOffset: r.focusOffset
			}), Yh && In(Yh, r) || (Yh = r, r = hu(Jh, "onSelect"), 0 < r.length && (t = new ch("onSelect", "select", null, t, n), e.push({
				event: t,
				listeners: r
			}), t.target = qh)));
		}
		function Un(e, t) {
			var n = {};
			return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
		}
		function Wn(e) {
			if (Qh[e]) return Qh[e];
			if (!Zh[e]) return e;
			var t = Zh[e], n;
			for (n in t) if (t.hasOwnProperty(n) && n in $h) return Qh[e] = t[n];
			return e;
		}
		function Gn(e, t) {
			sg.set(e, t), A(t, [e]);
		}
		function Kn(e) {
			for (var t = hg, n = 0; n < e.length; n++) {
				var r = e[n];
				if (typeof r == "object" && r) if (Jf(r) && r.length === 2 && typeof r[0] == "string") {
					if (t !== hg && t !== vg) return gg;
					t = vg;
				} else return gg;
				else {
					if (typeof r == "function" || typeof r == "string" && 50 < r.length || t !== hg && t !== _g) return gg;
					t = _g;
				}
			}
			return t;
		}
		function qn(e, t, n, r) {
			for (var i in e) vp.call(e, i) && i[0] !== "_" && Jn(i, e[i], t, n, r);
		}
		function Jn(e, t, n, r, i) {
			switch (typeof t) {
				case "object": if (t === null) {
					t = "null";
					break;
				} else {
					if (t.$$typeof === Mf) {
						var a = S(t.type) || "…", o = t.key;
						t = t.props;
						var s = Object.keys(t), c = s.length;
						if (o == null && c === 0) {
							t = "<" + a + " />";
							break;
						}
						if (3 > r || c === 1 && s[0] === "children" && o == null) {
							t = "<" + a + " … />";
							break;
						}
						for (var l in n.push([i + "\xA0\xA0".repeat(r) + e, "<" + a]), o !== null && Jn("key", o, n, r + 1, i), e = !1, t) l === "children" ? t.children != null && (!Jf(t.children) || 0 < t.children.length) && (e = !0) : vp.call(t, l) && l[0] !== "_" && Jn(l, t[l], n, r + 1, i);
						n.push(["", e ? ">…</" + a + ">" : "/>"]);
						return;
					}
					if (a = Object.prototype.toString.call(t), a = a.slice(8, a.length - 1), a === "Array") {
						if (l = Kn(t), l === _g || l === hg) {
							t = JSON.stringify(t);
							break;
						} else if (l === vg) {
							for (n.push([i + "\xA0\xA0".repeat(r) + e, ""]), e = 0; e < t.length; e++) a = t[e], Jn(a[0], a[1], n, r + 1, i);
							return;
						}
					}
					if (a === "Promise") {
						if (t.status === "fulfilled") {
							if (a = n.length, Jn(e, t.value, n, r, i), n.length > a) {
								n = n[a], n[1] = "Promise<" + (n[1] || "Object") + ">";
								return;
							}
						} else if (t.status === "rejected" && (a = n.length, Jn(e, t.reason, n, r, i), n.length > a)) {
							n = n[a], n[1] = "Rejected Promise<" + n[1] + ">";
							return;
						}
						n.push(["\xA0\xA0".repeat(r) + e, "Promise"]);
						return;
					}
					a === "Object" && (l = Object.getPrototypeOf(t)) && typeof l.constructor == "function" && (a = l.constructor.name), n.push([i + "\xA0\xA0".repeat(r) + e, a === "Object" ? 3 > r ? "" : "…" : a]), 3 > r && qn(t, n, r + 1, i);
					return;
				}
				case "function":
					t = t.name === "" ? "() => {}" : t.name + "() {}";
					break;
				case "string":
					t = t === mg ? "…" : JSON.stringify(t);
					break;
				case "undefined":
					t = "undefined";
					break;
				case "boolean":
					t = t ? "true" : "false";
					break;
				default: t = String(t);
			}
			n.push([i + "\xA0\xA0".repeat(r) + e, t]);
		}
		function Yn(e, t, n, r) {
			var i = !0;
			for (o in e) o in t || (n.push([yg + "\xA0\xA0".repeat(r) + o, "…"]), i = !1);
			for (var a in t) if (a in e) {
				var o = e[a], s = t[a];
				if (o !== s) {
					if (r === 0 && a === "children") i = "\xA0\xA0".repeat(r) + a, n.push([yg + i, "…"], [bg + i, "…"]);
					else {
						if (!(3 <= r)) {
							if (typeof o == "object" && typeof s == "object" && o !== null && s !== null && o.$$typeof === s.$$typeof) if (s.$$typeof === Mf) {
								if (o.type === s.type && o.key === s.key) {
									o = S(s.type) || "…", i = "\xA0\xA0".repeat(r) + a, o = "<" + o + " … />", n.push([yg + i, o], [bg + i, o]), i = !1;
									continue;
								}
							} else {
								var c = Object.prototype.toString.call(o), l = Object.prototype.toString.call(s);
								if (c === l && (l === "[object Object]" || l === "[object Array]")) {
									c = [xg + "\xA0\xA0".repeat(r) + a, l === "[object Array]" ? "Array" : ""], n.push(c), l = n.length, Yn(o, s, n, r + 1) ? l === n.length && (c[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : i = !1;
									continue;
								}
							}
							else if (typeof o == "function" && typeof s == "function" && o.name === s.name && o.length === s.length && (c = Function.prototype.toString.call(o), l = Function.prototype.toString.call(s), c === l)) {
								o = s.name === "" ? "() => {}" : s.name + "() {}", n.push([xg + "\xA0\xA0".repeat(r) + a, o + " Referentially unequal function closure. Consider memoization."]);
								continue;
							}
						}
						Jn(a, o, n, r, yg), Jn(a, s, n, r, bg);
					}
					i = !1;
				}
			} else n.push([bg + "\xA0\xA0".repeat(r) + a, "…"]), i = !1;
			return i;
		}
		function Xn(e) {
			U = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
		}
		function Zn(e, t, n, r) {
			Sg && (Eg.start = t, Eg.end = n, Tg.color = "warning", Tg.tooltipText = r, Tg.properties = null, (e = e._debugTask) ? e.run(performance.measure.bind(performance, r, Eg)) : performance.measure(r, Eg));
		}
		function Qn(e, t, n) {
			Zn(e, t, n, "Reconnect");
		}
		function $n(e, t, n, r, i) {
			var a = C(e);
			if (a !== null && Sg) {
				var o = e.alternate, s = e.actualDuration;
				if (o === null || o.child !== e.child) for (var c = e.child; c !== null; c = c.sibling) s -= c.actualDuration;
				r = .5 > s ? r ? "tertiary-light" : "primary-light" : 10 > s ? r ? "tertiary" : "primary" : 100 > s ? r ? "tertiary-dark" : "primary-dark" : "error";
				var l = e.memoizedProps;
				s = e._debugTask, l !== null && o !== null && o.memoizedProps !== l ? (c = [Dg], l = Yn(o.memoizedProps, l, c, 0), 1 < c.length && (l && !wg && (o.lanes & i) === 0 && 100 < e.actualDuration ? (wg = !0, c[0] = kg, Tg.color = "warning", Tg.tooltipText = Og) : (Tg.color = r, Tg.tooltipText = a), Tg.properties = c, Eg.start = t, Eg.end = n, s == null ? performance.measure("​" + a, Eg) : s.run(performance.measure.bind(performance, "​" + a, Eg)))) : s == null ? console.timeStamp(a, t, n, Cg, void 0, r) : s.run(console.timeStamp.bind(console, a, t, n, Cg, void 0, r));
			}
		}
		function er(e, t, n, r) {
			if (Sg) {
				var i = C(e);
				if (i !== null) {
					for (var a = null, o = [], s = 0; s < r.length; s++) {
						var c = r[s];
						a == null && c.source !== null && (a = c.source._debugTask), c = c.value, o.push(["Error", typeof c == "object" && c && typeof c.message == "string" ? String(c.message) : String(c)]);
					}
					e.key !== null && Jn("key", e.key, o, 0, ""), e.memoizedProps !== null && qn(e.memoizedProps, o, 0, ""), a ??= e._debugTask, e = {
						start: t,
						end: n,
						detail: { devtools: {
							color: "error",
							track: Cg,
							tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
							properties: o
						} }
					}, a ? a.run(performance.measure.bind(performance, "​" + i, e)) : performance.measure("​" + i, e);
				}
			}
		}
		function tr(e, t, n, r, i) {
			if (i !== null) {
				if (Sg) {
					var a = C(e);
					if (a !== null) {
						r = [];
						for (var o = 0; o < i.length; o++) {
							var s = i[o].value;
							r.push(["Error", typeof s == "object" && s && typeof s.message == "string" ? String(s.message) : String(s)]);
						}
						e.key !== null && Jn("key", e.key, r, 0, ""), e.memoizedProps !== null && qn(e.memoizedProps, r, 0, ""), t = {
							start: t,
							end: n,
							detail: { devtools: {
								color: "error",
								track: Cg,
								tooltipText: "A lifecycle or effect errored",
								properties: r
							} }
						}, (e = e._debugTask) ? e.run(performance.measure.bind(performance, "​" + a, t)) : performance.measure("​" + a, t);
					}
				}
			} else a = C(e), a !== null && Sg && (i = 1 > r ? "secondary-light" : 100 > r ? "secondary" : 500 > r ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(console.timeStamp.bind(console, a, t, n, Cg, void 0, i)) : console.timeStamp(a, t, n, Cg, void 0, i));
		}
		function nr(e, t, n, r) {
			if (Sg && !(t <= e)) {
				var i = (n & 738197653) === n ? "tertiary-dark" : "primary-dark";
				n = (n & 536870912) === n ? "Prepared" : (n & 201326741) === n ? "Hydrated" : "Render", r ? r.run(console.timeStamp.bind(console, n, e, t, U, H, i)) : console.timeStamp(n, e, t, U, H, i);
			}
		}
		function rr(e, t, n, r) {
			!Sg || t <= e || (n = (n & 738197653) === n ? "tertiary-dark" : "primary-dark", r ? r.run(console.timeStamp.bind(console, "Prewarm", e, t, U, H, n)) : console.timeStamp("Prewarm", e, t, U, H, n));
		}
		function ir(e, t, n, r) {
			!Sg || t <= e || (n = (n & 738197653) === n ? "tertiary-dark" : "primary-dark", r ? r.run(console.timeStamp.bind(console, "Suspended", e, t, U, H, n)) : console.timeStamp("Suspended", e, t, U, H, n));
		}
		function ar(e, t, n, r, i, a) {
			if (Sg && !(t <= e)) {
				n = [];
				for (var o = 0; o < r.length; o++) {
					var s = r[o].value;
					n.push(["Recoverable Error", typeof s == "object" && s && typeof s.message == "string" ? String(s.message) : String(s)]);
				}
				e = {
					start: e,
					end: t,
					detail: { devtools: {
						color: "primary-dark",
						track: U,
						trackGroup: H,
						tooltipText: i ? "Hydration Failed" : "Recovered after Error",
						properties: n
					} }
				}, a ? a.run(performance.measure.bind(performance, "Recovered", e)) : performance.measure("Recovered", e);
			}
		}
		function or(e, t, n, r) {
			!Sg || t <= e || (r ? r.run(console.timeStamp.bind(console, "Errored", e, t, U, H, "error")) : console.timeStamp("Errored", e, t, U, H, "error"));
		}
		function sr(e, t, n, r) {
			!Sg || t <= e || (r ? r.run(console.timeStamp.bind(console, n, e, t, U, H, "secondary-light")) : console.timeStamp(n, e, t, U, H, "secondary-light"));
		}
		function cr(e, t, n, r, i) {
			if (Sg && !(t <= e)) {
				for (var a = [], o = 0; o < n.length; o++) {
					var s = n[o].value;
					a.push(["Error", typeof s == "object" && s && typeof s.message == "string" ? String(s.message) : String(s)]);
				}
				e = {
					start: e,
					end: t,
					detail: { devtools: {
						color: "error",
						track: U,
						trackGroup: H,
						tooltipText: r ? "Remaining Effects Errored" : "Commit Errored",
						properties: a
					} }
				}, i ? i.run(performance.measure.bind(performance, "Errored", e)) : performance.measure("Errored", e);
			}
		}
		function lr(e, t, n) {
			!Sg || t <= e || (n ? n.run(console.timeStamp.bind(console, "Animating", e, t, U, H, "secondary-dark")) : console.timeStamp("Animating", e, t, U, H, "secondary-dark"));
		}
		function ur() {
			for (var e = Ng, t = Pg = Ng = 0; t < e;) {
				var n = Mg[t];
				Mg[t++] = null;
				var r = Mg[t];
				Mg[t++] = null;
				var i = Mg[t];
				Mg[t++] = null;
				var a = Mg[t];
				if (Mg[t++] = null, r !== null && i !== null) {
					var o = r.pending;
					o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
				}
				a !== 0 && mr(n, i, a);
			}
		}
		function dr(e, t, n, r) {
			Mg[Ng++] = e, Mg[Ng++] = t, Mg[Ng++] = n, Mg[Ng++] = r, Pg |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
		}
		function fr(e, t, n, r) {
			return dr(e, t, n, r), hr(e);
		}
		function pr(e, t) {
			return dr(e, null, null, t), hr(e);
		}
		function mr(e, t, n) {
			e.lanes |= n;
			var r = e.alternate;
			r !== null && (r.lanes |= n);
			for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & Ag || (i = !0)), e = a, a = a.return;
			return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Ip(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
		}
		function hr(e) {
			if (Jx > qx) throw $x = Jx = 0, eS = Yx = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
			$x > Qx && ($x = 0, eS = null, console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")), e.alternate === null && e.flags & 4098 && Kl(e);
			for (var t = e, n = t.return; n !== null;) t.alternate === null && t.flags & 4098 && Kl(e), t = n, n = t.return;
			return t.tag === 3 ? t.stateNode : null;
		}
		function gr(e) {
			if (Ig === null) return e;
			var t = Ig(e);
			return t === void 0 ? e : t.current;
		}
		function _r(e) {
			if (Ig === null) return e;
			var t = Ig(e);
			return t === void 0 ? e != null && typeof e.render == "function" && (t = gr(e.render), e.render !== t) ? (t = {
				$$typeof: zf,
				render: t
			}, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
		}
		function vr(e, t) {
			if (Ig === null) return !1;
			var n = e.elementType;
			t = t.type;
			var r = !1, i = typeof t == "object" && t ? t.$$typeof : null;
			switch (e.tag) {
				case 1:
					typeof t == "function" && (r = !0);
					break;
				case 0:
					(typeof t == "function" || i === Uf) && (r = !0);
					break;
				case 11:
					(i === zf || i === Uf) && (r = !0);
					break;
				case 14:
				case 15:
					(i === Hf || i === Uf) && (r = !0);
					break;
				default: return !1;
			}
			return !!(r && (e = Ig(n), e !== void 0 && e === Ig(t)));
		}
		function yr(e) {
			Ig !== null && typeof WeakSet == "function" && (Lg === null && (Lg = /* @__PURE__ */ new WeakSet()), Lg.add(e));
		}
		function br(e, t, n) {
			do {
				var r = e, i = r.alternate, a = r.child, o = r.sibling, s = r.tag;
				r = r.type;
				var c = null;
				switch (s) {
					case 0:
					case 15:
					case 1:
						c = r;
						break;
					case 11: c = r.render;
				}
				if (Ig === null) throw Error("Expected resolveFamily to be set during hot reload.");
				var l = !1;
				if (r = !1, c !== null && (c = Ig(c), c !== void 0 && (n.has(c) ? r = !0 : t.has(c) && (s === 1 ? r = !0 : l = !0))), Lg !== null && (Lg.has(e) || i !== null && Lg.has(i)) && (r = !0), r && (e._debugNeedsRemount = !0), (r || l) && (i = pr(e, 2), i !== null && il(i, e, 2)), a === null || r || br(a, t, n), o === null) break;
				e = o;
			} while (1);
		}
		function xr(e, t, n, r) {
			this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Hg || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
		}
		function Sr(e) {
			return e = e.prototype, !(!e || !e.isReactComponent);
		}
		function Cr(e, t) {
			var n = e.alternate;
			switch (n === null ? (n = m(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugOwner = e._debugOwner, n._debugStack = e._debugStack, n._debugTask = e._debugTask, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null, n.actualDuration = -0, n.actualStartTime = -1.1), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
				lanes: t.lanes,
				firstContext: t.firstContext,
				_debugThenableState: t._debugThenableState
			}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugInfo = e._debugInfo, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
				case 0:
				case 15:
					n.type = gr(e.type);
					break;
				case 1:
					n.type = gr(e.type);
					break;
				case 11: n.type = _r(e.type);
			}
			return n;
		}
		function wr(e, t) {
			e.flags &= 65011714;
			var n = e.alternate;
			return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
				lanes: t.lanes,
				firstContext: t.firstContext,
				_debugThenableState: t._debugThenableState
			}, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration), e;
		}
		function Tr(e, t, n, r, i, a) {
			var o = 0, s = e;
			if (typeof e == "function") Sr(e) && (o = 1), s = gr(s);
			else if (typeof e == "string") o = T(), o = Gd(e, n, o) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
			else a: switch (e) {
				case Wf: return t = m(31, n, t, i), t.elementType = Wf, t.lanes = a, t;
				case Pf: return Dr(n.children, i, a, t);
				case Ff:
					o = 8, i |= zg, i |= Bg;
					break;
				case If: return e = n, r = i, typeof e.id != "string" && console.error("Profiler must specify an \"id\" of type `string` as a prop. Received the type `%s` instead.", typeof e.id), t = m(12, e, t, r | G), t.elementType = If, t.lanes = a, t.stateNode = {
					effectDuration: 0,
					passiveEffectDuration: 0
				}, t;
				case Bf: return t = m(13, n, t, i), t.elementType = Bf, t.lanes = a, t;
				case Vf: return t = m(19, n, t, i), t.elementType = Vf, t.lanes = a, t;
				default:
					if (typeof e == "object" && e) switch (e.$$typeof) {
						case Rf:
							o = 10;
							break a;
						case Lf:
							o = 9;
							break a;
						case zf:
							o = 11, s = _r(s);
							break a;
						case Hf:
							o = 14;
							break a;
						case Uf:
							o = 16, s = null;
							break a;
					}
					s = "", (e === void 0 || typeof e == "object" && e && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : Jf(e) ? n = "array" : e !== void 0 && e.$$typeof === Mf ? (n = "<" + (S(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, (o = r ? ae(r) : null) && (s += "\n\nCheck the render method of `" + o + "`."), o = 29, n = Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (n + "." + s)), s = null;
			}
			return t = m(o, n, t, i), t.elementType = e, t.type = s, t.lanes = a, t._debugOwner = r, t;
		}
		function Er(e, t, n) {
			return t = Tr(e.type, e.key, e.props, e._owner, t, n), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
		}
		function Dr(e, t, n, r) {
			return e = m(7, e, r, t), e.lanes = n, e;
		}
		function Or(e, t, n) {
			return e = m(6, e, null, t), e.lanes = n, e;
		}
		function kr(e) {
			var t = m(18, null, null, W);
			return t.stateNode = e, t;
		}
		function Ar(e, t, n) {
			return t = m(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation
			}, t;
		}
		function jr(e, t) {
			if (typeof e == "object" && e) {
				var n = Wg.get(e);
				return n === void 0 ? (t = {
					value: e,
					source: t,
					stack: ye(t)
				}, Wg.set(e, t), t) : n;
			}
			return {
				value: e,
				source: t,
				stack: ye(t)
			};
		}
		function Mr(e, t) {
			Rr(), Gg[Kg++] = Jg, Gg[Kg++] = qg, qg = e, Jg = t;
		}
		function Nr(e, t, n) {
			Rr(), Yg[Xg++] = Qg, Yg[Xg++] = $g, Yg[Xg++] = Zg, Zg = e;
			var r = Qg;
			e = $g;
			var i = 32 - Ip(r) - 1;
			r &= ~(1 << i), n += 1;
			var a = 32 - Ip(t) + i;
			if (30 < a) {
				var o = i - i % 5;
				a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Qg = 1 << 32 - Ip(t) + i | n << i | r, $g = a + e;
			} else Qg = 1 << a | n << i | r, $g = e;
		}
		function Pr(e) {
			Rr(), e.return !== null && (Mr(e, 1), Nr(e, 1, 0));
		}
		function Fr(e) {
			for (; e === qg;) qg = Gg[--Kg], Gg[Kg] = null, Jg = Gg[--Kg], Gg[Kg] = null;
			for (; e === Zg;) Zg = Yg[--Xg], Yg[Xg] = null, $g = Yg[--Xg], Yg[Xg] = null, Qg = Yg[--Xg], Yg[Xg] = null;
		}
		function Ir() {
			return Rr(), Zg === null ? null : {
				id: Qg,
				overflow: $g
			};
		}
		function Lr(e, t) {
			Rr(), Yg[Xg++] = Qg, Yg[Xg++] = $g, Yg[Xg++] = Zg, Qg = t.id, $g = t.overflow, Zg = e;
		}
		function Rr() {
			K || console.error("Expected to be hydrating. This is a bug in React. Please file an issue.");
		}
		function zr(e, t) {
			if (e.return === null) {
				if (r_ === null) r_ = {
					fiber: e,
					children: [],
					serverProps: void 0,
					serverTail: [],
					distanceFromLeaf: t
				};
				else {
					if (r_.fiber !== e) throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");
					r_.distanceFromLeaf > t && (r_.distanceFromLeaf = t);
				}
				return r_;
			}
			var n = zr(e.return, t + 1).children;
			return 0 < n.length && n[n.length - 1].fiber === e ? (n = n[n.length - 1], n.distanceFromLeaf > t && (n.distanceFromLeaf = t), n) : (t = {
				fiber: e,
				children: [],
				serverProps: void 0,
				serverTail: [],
				distanceFromLeaf: t
			}, n.push(t), t);
		}
		function Br() {
			K && console.error("We should not be hydrating here. This is a bug in React. Please file a bug.");
		}
		function Vr(e, t) {
			n_ || (e = zr(e, 0), e.serverProps = null, t !== null && (t = bd(t), e.serverTail.push(t)));
		}
		function Hr(e) {
			var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, n = "", r = r_;
			throw r !== null && (r_ = null, n = Vt(r)), Jr(jr(Error("Hydration failed because the server rendered " + (t ? "text" : "HTML") + " didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:\n\n- A server/client branch `if (typeof window !== 'undefined')`.\n- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.\n- Date formatting in a user's locale which doesn't match the server.\n- External changing data without sending a snapshot of it along with the HTML.\n- Invalid HTML tag nesting.\n\nIt can also happen if the client has a browser extension installed which messes with the HTML before React loaded.\n\nhttps://react.dev/link/hydration-mismatch" + n), e)), o_;
		}
		function Ur(e) {
			var t = e.stateNode, n = e.type, r = e.memoizedProps;
			switch (t[qp] = e, t[Jp] = r, vu(n, r), n) {
				case "dialog":
					R("cancel", t), R("close", t);
					break;
				case "iframe":
				case "object":
				case "embed":
					R("load", t);
					break;
				case "video":
				case "audio":
					for (n = 0; n < mS.length; n++) R(mS[n], t);
					break;
				case "source":
					R("error", t);
					break;
				case "img":
				case "image":
				case "link":
					R("error", t), R("load", t);
					break;
				case "details":
					R("toggle", t);
					break;
				case "input":
					tt("input", r), R("invalid", t), ht(t, r), _t(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
					break;
				case "option":
					yt(t, r);
					break;
				case "select":
					tt("select", r), R("invalid", t), St(t, r);
					break;
				case "textarea": tt("textarea", r), R("invalid", t), Ct(t, r), Tt(t, r.value, r.defaultValue, r.children);
			}
			n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || wu(t.textContent, n) ? (r.popover != null && (R("beforetoggle", t), R("toggle", t)), r.onScroll != null && R("scroll", t), r.onScrollEnd != null && R("scrollend", t), r.onClick != null && (t.onclick = sn), t = !0) : t = !1, t || Hr(e, !0);
		}
		function Wr(e) {
			for (e_ = e.return; e_;) switch (e_.tag) {
				case 5:
				case 31:
				case 13:
					a_ = !1;
					return;
				case 27:
				case 3:
					a_ = !0;
					return;
				default: e_ = e_.return;
			}
		}
		function Gr(e) {
			if (e !== e_) return !1;
			if (!K) return Wr(e), K = !0, !1;
			var t = e.tag, n;
			if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Wu(e.type, e.memoizedProps)), n = !n), n && t_) {
				for (n = t_; n;) {
					var r = zr(e, 0), i = bd(n);
					r.serverTail.push(i), n = i.type === "Suspense" ? Sd(n) : yd(n.nextSibling);
				}
				Hr(e);
			}
			if (Wr(e), t === 13) {
				if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
				t_ = Sd(e);
			} else if (t === 31) {
				if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
				t_ = Sd(e);
			} else t === 27 ? (t = t_, td(e.type) ? (e = iC, iC = null, t_ = e) : t_ = t) : t_ = e_ ? yd(e.stateNode.nextSibling) : null;
			return !0;
		}
		function Kr() {
			t_ = e_ = null, n_ = K = !1;
		}
		function qr() {
			var e = i_;
			return e !== null && (gx === null ? gx = e : gx.push.apply(gx, e), i_ = null), e;
		}
		function Jr(e) {
			i_ === null ? i_ = [e] : i_.push(e);
		}
		function Yr() {
			var e = r_;
			if (e !== null) {
				r_ = null;
				for (var t = Vt(e); 0 < e.children.length;) e = e.children[0];
				D(e.fiber, function() {
					console.error("A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:\n\n- A server/client branch `if (typeof window !== 'undefined')`.\n- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.\n- Date formatting in a user's locale which doesn't match the server.\n- External changing data without sending a snapshot of it along with the HTML.\n- Invalid HTML tag nesting.\n\nIt can also happen if the client has a browser extension installed which messes with the HTML before React loaded.\n\n%s%s", "https://react.dev/link/hydration-mismatch", t);
				});
			}
		}
		function Xr() {
			d_ = u_ = null, f_ = !1;
		}
		function Zr(e, t, n) {
			ce(s_, t._currentValue, e), t._currentValue = n, ce(c_, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== l_ && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = l_;
		}
		function Qr(e, t) {
			e._currentValue = s_.current;
			var n = c_.current;
			se(c_, t), e._currentRenderer = n, se(s_, t);
		}
		function $r(e, t, n) {
			for (; e !== null;) {
				var r = e.alternate;
				if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
				e = e.return;
			}
			e !== n && console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
		}
		function ei(e, t, n, r) {
			var i = e.child;
			for (i !== null && (i.return = e); i !== null;) {
				var a = i.dependencies;
				if (a !== null) {
					var o = i.child;
					a = a.firstContext;
					a: for (; a !== null;) {
						var s = a;
						a = i;
						for (var c = 0; c < t.length; c++) if (s.context === t[c]) {
							a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), $r(a.return, n, e), r || (o = null);
							break a;
						}
						a = s.next;
					}
				} else if (i.tag === 18) {
					if (o = i.return, o === null) throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");
					o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), $r(o, n, e), o = null;
				} else o = i.child;
				if (o !== null) o.return = i;
				else for (o = i; o !== null;) {
					if (o === e) {
						o = null;
						break;
					}
					if (i = o.sibling, i !== null) {
						i.return = o.return, o = i;
						break;
					}
					o = o.return;
				}
				i = o;
			}
		}
		function ti(e, t, n, r) {
			e = null;
			for (var i = t, a = !1; i !== null;) {
				if (!a) {
					if (i.flags & 524288) a = !0;
					else if (i.flags & 262144) break;
				}
				if (i.tag === 10) {
					var o = i.alternate;
					if (o === null) throw Error("Should have a current fiber. This is a bug in React.");
					if (o = o.memoizedProps, o !== null) {
						var s = i.type;
						Gh(i.pendingProps.value, o.value) || (e === null ? e = [s] : e.push(s));
					}
				} else if (i === rp.current) {
					if (o = i.alternate, o === null) throw Error("Should have a current fiber. This is a bug in React.");
					o.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e === null ? e = [SC] : e.push(SC));
				}
				i = i.return;
			}
			e !== null && ei(t, e, n, r), t.flags |= 262144;
		}
		function ni(e) {
			for (e = e.firstContext; e !== null;) {
				if (!Gh(e.context._currentValue, e.memoizedValue)) return !0;
				e = e.next;
			}
			return !1;
		}
		function ri(e) {
			u_ = e, d_ = null, e = e.dependencies, e !== null && (e.firstContext = null);
		}
		function ii(e) {
			return f_ && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), oi(u_, e);
		}
		function ai(e, t) {
			return u_ === null && ri(e), oi(e, t);
		}
		function oi(e, t) {
			var n = t._currentValue;
			if (t = {
				context: t,
				memoizedValue: n,
				next: null
			}, d_ === null) {
				if (e === null) throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
				d_ = t, e.dependencies = {
					lanes: 0,
					firstContext: t,
					_debugThenableState: null
				}, e.flags |= 524288;
			} else d_ = d_.next = t;
			return n;
		}
		function si() {
			return {
				controller: new p_(),
				data: /* @__PURE__ */ new Map(),
				refCount: 0
			};
		}
		function ci(e) {
			e.controller.signal.aborted && console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."), e.refCount++;
		}
		function li(e) {
			e.refCount--, 0 > e.refCount && console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."), e.refCount === 0 && m_(h_, function() {
				e.controller.abort();
			});
		}
		function ui(e, t, n) {
			e & 127 ? 0 > j_ && (j_ = __(), M_ = v_(t), P_ = t, n != null && (F_ = C(n)), (Gb & (Ib | Lb)) !== Fb && (k_ = !0, N_ = y_), e = qu(), t = Ku(), e !== R_ || t !== L_ ? R_ = -1.1 : t !== null && (N_ = y_), I_ = e, L_ = t) : e & 4194048 && 0 > H_ && (H_ = __(), W_ = v_(t), G_ = t, n != null && (K_ = C(n)), 0 > V_) && (e = qu(), t = Ku(), (e !== Y_ || t !== J_) && (Y_ = -1.1), q_ = e, J_ = t);
		}
		function di(e) {
			if (0 > j_) {
				j_ = __(), M_ = e._debugTask == null ? null : e._debugTask, (Gb & (Ib | Lb)) !== Fb && (N_ = y_);
				var t = qu(), n = Ku();
				t !== R_ || n !== L_ ? R_ = -1.1 : n !== null && (N_ = y_), I_ = t, L_ = n;
			}
			0 > H_ && (H_ = __(), W_ = e._debugTask == null ? null : e._debugTask, 0 > V_) && (e = qu(), t = Ku(), (e !== Y_ || t !== J_) && (Y_ = -1.1), q_ = e, J_ = t);
		}
		function fi() {
			var e = E_;
			return E_ = 0, e;
		}
		function pi(e) {
			var t = E_;
			return E_ = e, t;
		}
		function mi(e) {
			var t = E_;
			return E_ += e, t;
		}
		function hi() {
			J = q = -1.1;
		}
		function gi() {
			var e = q;
			return q = -1.1, e;
		}
		function _i(e) {
			0 <= e && (q = e);
		}
		function yi() {
			var e = D_;
			return D_ = -0, e;
		}
		function bi(e) {
			0 <= e && (D_ = e);
		}
		function xi() {
			var e = O_;
			return O_ = null, e;
		}
		function Si() {
			var e = k_;
			return k_ = !1, e;
		}
		function Ci(e) {
			T_ = __(), 0 > e.actualStartTime && (e.actualStartTime = T_);
		}
		function wi(e) {
			if (0 <= T_) {
				var t = __() - T_;
				e.actualDuration += t, e.selfBaseDuration = t, T_ = -1;
			}
		}
		function Ti(e) {
			if (0 <= T_) {
				var t = __() - T_;
				e.actualDuration += t, T_ = -1;
			}
		}
		function Ei() {
			if (0 <= T_) {
				var e = __(), t = e - T_;
				T_ = -1, E_ += t, D_ += t, J = e;
			}
		}
		function Di(e) {
			O_ === null && (O_ = []), O_.push(e), w_ === null && (w_ = []), w_.push(e);
		}
		function Oi() {
			T_ = __(), 0 > q && (q = T_);
		}
		function ki(e) {
			for (var t = e.child; t;) e.actualDuration += t.actualDuration, t = t.sibling;
		}
		function Ai(e, t) {
			if (av === null) {
				var n = av = [];
				ov = 0, sv = iu(), cv = {
					status: "pending",
					value: void 0,
					then: function(e) {
						n.push(e);
					}
				};
			}
			return ov++, t.then(ji, ji), t;
		}
		function ji() {
			if (--ov === 0 && (-1 < H_ || (V_ = -1.1), av !== null)) {
				cv !== null && (cv.status = "fulfilled");
				var e = av;
				av = null, sv = 0, cv = null;
				for (var t = 0; t < e.length; t++) (0, e[t])();
			}
		}
		function Mi(e, t) {
			var n = [], r = {
				status: "pending",
				value: null,
				reason: null,
				then: function(e) {
					n.push(e);
				}
			};
			return e.then(function() {
				r.status = "fulfilled", r.value = t;
				for (var e = 0; e < n.length; e++) (0, n[e])(t);
			}, function(e) {
				for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
			}), r;
		}
		function Ni() {
			var e = uv.current;
			return e === null ? Kb.pooledCache : e;
		}
		function Pi(e, t) {
			t === null ? ce(uv, uv.current, e) : ce(uv, t.pool, e);
		}
		function Fi() {
			var e = Ni();
			return e === null ? null : {
				parent: g_._currentValue,
				pool: e
			};
		}
		function Ii() {
			return {
				didWarnAboutUncachedPromise: !1,
				thenables: []
			};
		}
		function Li(e) {
			return e = e.status, e === "fulfilled" || e === "rejected";
		}
		function Ri(e, t, n) {
			V.actQueue !== null && (V.didUsePromise = !0);
			var r = e.thenables;
			if (n = r[n], n === void 0 ? r.push(t) : n !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")), t.then(sn, sn), t = n), t._debugInfo === void 0) {
				e = performance.now(), r = t.displayName;
				var i = {
					name: typeof r == "string" ? r : "Promise",
					start: e,
					end: e,
					value: t
				};
				t._debugInfo = [{ awaited: i }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
					i.end = performance.now();
				}, t.then(e, e));
			}
			switch (t.status) {
				case "fulfilled": return t.value;
				case "rejected": throw e = t.reason, Vi(e), e;
				default:
					if (typeof t.status == "string") t.then(sn, sn);
					else {
						if (e = Kb, e !== null && 100 < e.shellSuspendCounter) throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
						e = t, e.status = "pending", e.then(function(e) {
							if (t.status === "pending") {
								var n = t;
								n.status = "fulfilled", n.value = e;
							}
						}, function(e) {
							if (t.status === "pending") {
								var n = t;
								n.status = "rejected", n.reason = e;
							}
						});
					}
					switch (t.status) {
						case "fulfilled": return t.value;
						case "rejected": throw e = t.reason, Vi(e), e;
					}
					throw Uv = t, Wv = !0, zv;
			}
		}
		function zi(e) {
			try {
				return Rv(e);
			} catch (e) {
				throw typeof e == "object" && e && typeof e.then == "function" ? (Uv = e, Wv = !0, zv) : e;
			}
		}
		function Bi() {
			if (Uv === null) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
			var e = Uv;
			return Uv = null, Wv = !1, e;
		}
		function Vi(e) {
			if (e === zv || e === Vv) throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
		}
		function Hi(e) {
			var t = Y;
			return e != null && (Y = t === null ? e : t.concat(e)), t;
		}
		function j() {
			var e = Y;
			if (e != null) {
				for (var t = e.length - 1; 0 <= t; t--) if (e[t].name != null) {
					var n = e[t].debugTask;
					if (n != null) return n;
				}
			}
			return null;
		}
		function M(e, t, n) {
			for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
				var a = r[i];
				if (a !== "children" && a !== "key") {
					t === null && (t = Er(e, n.mode, 0), t._debugInfo = Y, t.return = n), D(t, function(e) {
						console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", e);
					}, a);
					break;
				}
			}
		}
		function Ui(e) {
			var t = Kv;
			return Kv += 1, Gv === null && (Gv = Ii()), Ri(Gv, e, t);
		}
		function Wi(e, t) {
			t = t.props.ref, e.ref = t === void 0 ? null : t;
		}
		function Gi(e, t) {
			throw t.$$typeof === jf ? Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.") : (e = Object.prototype.toString.call(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."));
		}
		function Ki(e, t) {
			var n = j();
			n === null ? Gi(e, t) : n.run(Gi.bind(null, e, t));
		}
		function qi(e, t) {
			var n = C(e) || "Component";
			Xv[n] || (Xv[n] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.\n  root.render(%s)", t, t, t) : console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.\n  <%s>{%s}</%s>", t, t, n, t, n));
		}
		function Ji(e, t) {
			var n = j();
			n === null ? qi(e, t) : n.run(qi.bind(null, e, t));
		}
		function Yi(e, t) {
			var n = C(e) || "Component";
			Zv[n] || (Zv[n] = !0, t = String(t), e.tag === 3 ? console.error("Symbols are not valid as a React child.\n  root.render(%s)", t) : console.error("Symbols are not valid as a React child.\n  <%s>%s</%s>", n, t, n));
		}
		function Xi(e, t) {
			var n = j();
			n === null ? Yi(e, t) : n.run(Yi.bind(null, e, t));
		}
		function Zi(e) {
			function t(t, n) {
				if (e) {
					var r = t.deletions;
					r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
				}
			}
			function n(n, r) {
				if (!e) return null;
				for (; r !== null;) t(n, r), r = r.sibling;
				return null;
			}
			function r(e) {
				for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
				return t;
			}
			function i(e, t) {
				return e = Cr(e, t), e.index = 0, e.sibling = null, e;
			}
			function a(t, n, r) {
				return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n);
			}
			function o(t) {
				return e && t.alternate === null && (t.flags |= 67108866), t;
			}
			function s(e, t, n, r) {
				return t === null || t.tag !== 6 ? (t = Or(n, e.mode, r), t.return = e, t._debugOwner = e, t._debugTask = e._debugTask, t._debugInfo = Y, t) : (t = i(t, n), t.return = e, t._debugInfo = Y, t);
			}
			function c(e, t, n, r) {
				var a = n.type;
				return a === Pf ? (t = u(e, t, n.props.children, r, n.key), M(n, t, e), t) : t !== null && (t.elementType === a || vr(t, n) || typeof a == "object" && a && a.$$typeof === Uf && zi(a) === t.type) ? (t = i(t, n.props), Wi(t, n), t.return = e, t._debugOwner = n._owner, t._debugInfo = Y, t) : (t = Er(n, e.mode, r), Wi(t, n), t.return = e, t._debugInfo = Y, t);
			}
			function l(e, t, n, r) {
				return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Ar(n, e.mode, r), t.return = e, t._debugInfo = Y, t) : (t = i(t, n.children || []), t.return = e, t._debugInfo = Y, t);
			}
			function u(e, t, n, r, a) {
				return t === null || t.tag !== 7 ? (t = Dr(n, e.mode, r, a), t.return = e, t._debugOwner = e, t._debugTask = e._debugTask, t._debugInfo = Y, t) : (t = i(t, n), t.return = e, t._debugInfo = Y, t);
			}
			function f(e, t, n) {
				if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Or("" + t, e.mode, n), t.return = e, t._debugOwner = e, t._debugTask = e._debugTask, t._debugInfo = Y, t;
				if (typeof t == "object" && t) {
					switch (t.$$typeof) {
						case Mf: return n = Er(t, e.mode, n), Wi(n, t), n.return = e, e = Hi(t._debugInfo), n._debugInfo = Y, Y = e, n;
						case Nf: return t = Ar(t, e.mode, n), t.return = e, t._debugInfo = Y, t;
						case Uf:
							var r = Hi(t._debugInfo);
							return t = zi(t), e = f(e, t, n), Y = r, e;
					}
					if (Jf(t) || ie(t)) return n = Dr(t, e.mode, n, null), n.return = e, n._debugOwner = e, n._debugTask = e._debugTask, e = Hi(t._debugInfo), n._debugInfo = Y, Y = e, n;
					if (typeof t.then == "function") return r = Hi(t._debugInfo), e = f(e, Ui(t), n), Y = r, e;
					if (t.$$typeof === Rf) return f(e, ai(e, t), n);
					Ki(e, t);
				}
				return typeof t == "function" && Ji(e, t), typeof t == "symbol" && Xi(e, t), null;
			}
			function p(e, t, n, r) {
				var i = t === null ? null : t.key;
				if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? s(e, t, "" + n, r) : null;
				if (typeof n == "object" && n) {
					switch (n.$$typeof) {
						case Mf: return n.key === i ? (i = Hi(n._debugInfo), e = c(e, t, n, r), Y = i, e) : null;
						case Nf: return n.key === i ? l(e, t, n, r) : null;
						case Uf: return i = Hi(n._debugInfo), n = zi(n), e = p(e, t, n, r), Y = i, e;
					}
					if (Jf(n) || ie(n)) return i === null ? (i = Hi(n._debugInfo), e = u(e, t, n, r, null), Y = i, e) : null;
					if (typeof n.then == "function") return i = Hi(n._debugInfo), e = p(e, t, Ui(n), r), Y = i, e;
					if (n.$$typeof === Rf) return p(e, t, ai(e, n), r);
					Ki(e, n);
				}
				return typeof n == "function" && Ji(e, n), typeof n == "symbol" && Xi(e, n), null;
			}
			function h(e, t, n, r, i) {
				if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, s(t, e, "" + r, i);
				if (typeof r == "object" && r) {
					switch (r.$$typeof) {
						case Mf: return n = e.get(r.key === null ? n : r.key) || null, e = Hi(r._debugInfo), t = c(t, n, r, i), Y = e, t;
						case Nf: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
						case Uf:
							var a = Hi(r._debugInfo);
							return r = zi(r), t = h(e, t, n, r, i), Y = a, t;
					}
					if (Jf(r) || ie(r)) return n = e.get(n) || null, e = Hi(r._debugInfo), t = u(t, n, r, i, null), Y = e, t;
					if (typeof r.then == "function") return a = Hi(r._debugInfo), t = h(e, t, n, Ui(r), i), Y = a, t;
					if (r.$$typeof === Rf) return h(e, t, n, ai(t, r), i);
					Ki(t, r);
				}
				return typeof r == "function" && Ji(t, r), typeof r == "symbol" && Xi(t, r), null;
			}
			function g(e, t, n, r) {
				if (typeof n != "object" || !n) return r;
				switch (n.$$typeof) {
					case Mf:
					case Nf:
						d(e, t, n);
						var i = n.key;
						if (typeof i != "string") break;
						if (r === null) {
							r = /* @__PURE__ */ new Set(), r.add(i);
							break;
						}
						if (!r.has(i)) {
							r.add(i);
							break;
						}
						D(t, function() {
							console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", i);
						});
						break;
					case Uf: n = zi(n), g(e, t, n, r);
				}
				return r;
			}
			function _(i, o, s, c) {
				for (var l = null, u = null, d = null, m = o, _ = o = 0, v = null; m !== null && _ < s.length; _++) {
					m.index > _ ? (v = m, m = null) : v = m.sibling;
					var y = p(i, m, s[_], c);
					if (y === null) {
						m === null && (m = v);
						break;
					}
					l = g(i, y, s[_], l), e && m && y.alternate === null && t(i, m), o = a(y, o, _), d === null ? u = y : d.sibling = y, d = y, m = v;
				}
				if (_ === s.length) return n(i, m), K && Mr(i, _), u;
				if (m === null) {
					for (; _ < s.length; _++) m = f(i, s[_], c), m !== null && (l = g(i, m, s[_], l), o = a(m, o, _), d === null ? u = m : d.sibling = m, d = m);
					return K && Mr(i, _), u;
				}
				for (m = r(m); _ < s.length; _++) v = h(m, i, _, s[_], c), v !== null && (l = g(i, v, s[_], l), e && v.alternate !== null && m.delete(v.key === null ? _ : v.key), o = a(v, o, _), d === null ? u = v : d.sibling = v, d = v);
				return e && m.forEach(function(e) {
					return t(i, e);
				}), K && Mr(i, _), u;
			}
			function v(i, o, s, c) {
				if (s == null) throw Error("An iterable object provided no iterator.");
				for (var l = null, u = null, d = o, m = o = 0, _ = null, v = null, y = s.next(); d !== null && !y.done; m++, y = s.next()) {
					d.index > m ? (_ = d, d = null) : _ = d.sibling;
					var b = p(i, d, y.value, c);
					if (b === null) {
						d === null && (d = _);
						break;
					}
					v = g(i, b, y.value, v), e && d && b.alternate === null && t(i, d), o = a(b, o, m), u === null ? l = b : u.sibling = b, u = b, d = _;
				}
				if (y.done) return n(i, d), K && Mr(i, m), l;
				if (d === null) {
					for (; !y.done; m++, y = s.next()) d = f(i, y.value, c), d !== null && (v = g(i, d, y.value, v), o = a(d, o, m), u === null ? l = d : u.sibling = d, u = d);
					return K && Mr(i, m), l;
				}
				for (d = r(d); !y.done; m++, y = s.next()) _ = h(d, i, m, y.value, c), _ !== null && (v = g(i, _, y.value, v), e && _.alternate !== null && d.delete(_.key === null ? m : _.key), o = a(_, o, m), u === null ? l = _ : u.sibling = _, u = _);
				return e && d.forEach(function(e) {
					return t(i, e);
				}), K && Mr(i, m), l;
			}
			function y(e, r, a, s) {
				if (typeof a == "object" && a && a.type === Pf && a.key === null && (M(a, null, e), a = a.props.children), typeof a == "object" && a) {
					switch (a.$$typeof) {
						case Mf:
							var c = Hi(a._debugInfo);
							a: {
								for (var l = a.key; r !== null;) {
									if (r.key === l) {
										if (l = a.type, l === Pf) {
											if (r.tag === 7) {
												n(e, r.sibling), s = i(r, a.props.children), s.return = e, s._debugOwner = a._owner, s._debugInfo = Y, M(a, s, e), e = s;
												break a;
											}
										} else if (r.elementType === l || vr(r, a) || typeof l == "object" && l && l.$$typeof === Uf && zi(l) === r.type) {
											n(e, r.sibling), s = i(r, a.props), Wi(s, a), s.return = e, s._debugOwner = a._owner, s._debugInfo = Y, e = s;
											break a;
										}
										n(e, r);
										break;
									} else t(e, r);
									r = r.sibling;
								}
								a.type === Pf ? (s = Dr(a.props.children, e.mode, s, a.key), s.return = e, s._debugOwner = e, s._debugTask = e._debugTask, s._debugInfo = Y, M(a, s, e), e = s) : (s = Er(a, e.mode, s), Wi(s, a), s.return = e, s._debugInfo = Y, e = s);
							}
							return e = o(e), Y = c, e;
						case Nf:
							a: {
								for (c = a, a = c.key; r !== null;) {
									if (r.key === a) if (r.tag === 4 && r.stateNode.containerInfo === c.containerInfo && r.stateNode.implementation === c.implementation) {
										n(e, r.sibling), s = i(r, c.children || []), s.return = e, e = s;
										break a;
									} else {
										n(e, r);
										break;
									}
									else t(e, r);
									r = r.sibling;
								}
								s = Ar(c, e.mode, s), s.return = e, e = s;
							}
							return o(e);
						case Uf: return c = Hi(a._debugInfo), a = zi(a), e = y(e, r, a, s), Y = c, e;
					}
					if (Jf(a)) return c = Hi(a._debugInfo), e = _(e, r, a, s), Y = c, e;
					if (ie(a)) {
						if (c = Hi(a._debugInfo), l = ie(a), typeof l != "function") throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
						var u = l.call(a);
						return u === a ? (e.tag !== 0 || Object.prototype.toString.call(e.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(u) !== "[object Generator]") && (Jv || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), Jv = !0) : a.entries !== l || qv || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qv = !0), e = v(e, r, u, s), Y = c, e;
					}
					if (typeof a.then == "function") return c = Hi(a._debugInfo), e = y(e, r, Ui(a), s), Y = c, e;
					if (a.$$typeof === Rf) return y(e, r, ai(e, a), s);
					Ki(e, a);
				}
				return typeof a == "string" && a !== "" || typeof a == "number" || typeof a == "bigint" ? (c = "" + a, r !== null && r.tag === 6 ? (n(e, r.sibling), s = i(r, c), s.return = e, e = s) : (n(e, r), s = Or(c, e.mode, s), s.return = e, s._debugOwner = e, s._debugTask = e._debugTask, s._debugInfo = Y, e = s), o(e)) : (typeof a == "function" && Ji(e, a), typeof a == "symbol" && Xi(e, a), n(e, r));
			}
			return function(e, t, n, r) {
				var i = Y;
				Y = null;
				try {
					Kv = 0;
					var a = y(e, t, n, r);
					return Gv = null, a;
				} catch (t) {
					if (t === zv || t === Vv) throw t;
					var o = m(29, t, null, e.mode);
					o.lanes = r, o.return = e;
					var s = o._debugInfo = Y;
					if (o._debugOwner = e._debugOwner, o._debugTask = e._debugTask, s != null) {
						for (var c = s.length - 1; 0 <= c; c--) if (typeof s[c].stack == "string") {
							o._debugOwner = s[c], o._debugTask = s[c].debugTask;
							break;
						}
					}
					return o;
				} finally {
					Y = i;
				}
			};
		}
		function Qi(e, t) {
			var n = Jf(e);
			return e = !n && typeof ie(e) == "function", n || e ? (n = n ? "array" : "iterable", console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", n, t, n), !1) : !0;
		}
		function $i(e) {
			e.updateQueue = {
				baseState: e.memoizedState,
				firstBaseUpdate: null,
				lastBaseUpdate: null,
				shared: {
					pending: null,
					lanes: 0,
					hiddenCallbacks: null
				},
				callbacks: null
			};
		}
		function ea(e, t) {
			e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				callbacks: null
			});
		}
		function ta(e) {
			return {
				lane: e,
				tag: ey,
				payload: null,
				callback: null,
				next: null
			};
		}
		function na(e, t, n) {
			var r = e.updateQueue;
			if (r === null) return null;
			if (r = r.shared, oy === r && !ay) {
				var i = C(e);
				console.error("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.\n\nPlease update the following component: %s", i), ay = !0;
			}
			return (Gb & Ib) === Fb ? (dr(e, r, t, n), hr(e)) : (i = r.pending, i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = hr(e), mr(e, null, n), t);
		}
		function ra(e, t, n) {
			if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
				var r = t.lanes;
				r &= e.pendingLanes, n |= r, t.lanes = n, Be(e, n);
			}
		}
		function ia(e, t) {
			var n = e.updateQueue, r = e.alternate;
			if (r !== null && (r = r.updateQueue, n === r)) {
				var i = null, a = null;
				if (n = n.firstBaseUpdate, n !== null) {
					do {
						var o = {
							lane: n.lane,
							tag: n.tag,
							payload: n.payload,
							callback: null,
							next: null
						};
						a === null ? i = a = o : a = a.next = o, n = n.next;
					} while (n !== null);
					a === null ? i = a = t : a = a.next = t;
				} else i = a = t;
				n = {
					baseState: r.baseState,
					firstBaseUpdate: i,
					lastBaseUpdate: a,
					shared: r.shared,
					callbacks: r.callbacks
				}, e.updateQueue = n;
				return;
			}
			e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
		}
		function aa() {
			if (sy) {
				var e = cv;
				if (e !== null) throw e;
			}
		}
		function oa(e, t, n, r) {
			sy = !1;
			var i = e.updateQueue;
			iy = !1, oy = i.shared;
			var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
			if (s !== null) {
				i.shared.pending = null;
				var c = s, l = c.next;
				c.next = null, o === null ? a = l : o.next = l, o = c;
				var u = e.alternate;
				u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
			}
			if (a !== null) {
				var d = i.baseState;
				o = 0, u = l = c = null, s = a;
				do {
					var f = s.lane & -536870913, p = f !== s.lane;
					if (p ? ($ & f) === f : (r & f) === f) {
						f !== 0 && f === sv && (sy = !0), u !== null && (u = u.next = {
							lane: 0,
							tag: s.tag,
							payload: s.payload,
							callback: null,
							next: null
						});
						a: {
							f = e;
							var m = s, h = t, g = n;
							switch (m.tag) {
								case ty:
									if (m = m.payload, typeof m == "function") {
										f_ = !0;
										var _ = m.call(g, d, h);
										if (f.mode & zg) {
											Ae(!0);
											try {
												m.call(g, d, h);
											} finally {
												Ae(!1);
											}
										}
										f_ = !1, d = _;
										break a;
									}
									d = m;
									break a;
								case ry: f.flags = f.flags & -65537 | 128;
								case ey:
									if (_ = m.payload, typeof _ == "function") {
										if (f_ = !0, m = _.call(g, d, h), f.mode & zg) {
											Ae(!0);
											try {
												_.call(g, d, h);
											} finally {
												Ae(!1);
											}
										}
										f_ = !1;
									} else m = _;
									if (m == null) break a;
									d = B({}, d, m);
									break a;
								case ny: iy = !0;
							}
						}
						f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
					} else p = {
						lane: f,
						tag: s.tag,
						payload: s.payload,
						callback: s.callback,
						next: null
					}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
					if (s = s.next, s === null) {
						if (s = i.shared.pending, s === null) break;
						p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
					}
				} while (1);
				u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), ux |= o, e.lanes = o, e.memoizedState = d;
			}
			oy = null;
		}
		function sa(e, t) {
			if (typeof e != "function") throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
			e.call(t);
		}
		function ca(e, t) {
			var n = e.shared.hiddenCallbacks;
			if (n !== null) for (e.shared.hiddenCallbacks = null, e = 0; e < n.length; e++) sa(n[e], t);
		}
		function la(e, t) {
			var n = e.callbacks;
			if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) sa(n[e], t);
		}
		function ua(e, t) {
			var n = cx;
			ce(ly, n, e), ce(cy, t, e), cx = n | t.baseLanes;
		}
		function da(e) {
			ce(ly, cx, e), ce(cy, cy.current, e);
		}
		function fa(e) {
			cx = ly.current, se(cy, e), se(ly, e);
		}
		function pa(e) {
			var t = e.alternate;
			ce(my, my.current & fy, e), ce(uy, e, e), dy === null && (t === null || cy.current !== null || t.memoizedState !== null) && (dy = e);
		}
		function ma(e) {
			ce(my, my.current, e), ce(uy, e, e), dy === null && (dy = e);
		}
		function ha(e) {
			e.tag === 22 ? (ce(my, my.current, e), ce(uy, e, e), dy === null && (dy = e)) : ga(e);
		}
		function ga(e) {
			ce(my, my.current, e), ce(uy, uy.current, e);
		}
		function _a(e) {
			se(uy, e), dy === e && (dy = null), se(my, e);
		}
		function va(e) {
			for (var t = e; t !== null;) {
				if (t.tag === 13) {
					var n = t.memoizedState;
					if (n !== null && (n = n.dehydrated, n === null || gd(n) || _d(n))) return t;
				} else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
					if (t.flags & 128) return t;
				} else if (t.child !== null) {
					t.child.return = t, t = t.child;
					continue;
				}
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return null;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
			return null;
		}
		function N() {
			var e = Z;
			Iy === null ? Iy = [e] : Iy.push(e);
		}
		function P() {
			var e = Z;
			if (Iy !== null && (Ly++, Iy[Ly] !== e)) {
				var t = C(X);
				if (!xy.has(t) && (xy.add(t), Iy !== null)) {
					for (var n = "", r = 0; r <= Ly; r++) {
						var i = Iy[r], a = r === Ly ? e : i;
						for (i = r + 1 + ". " + i; 30 > i.length;) i += " ";
						i += a + "\n", n += i;
					}
					console.error("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n", t, n);
				}
			}
		}
		function ya(e) {
			e == null || Jf(e) || console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Z, typeof e);
		}
		function ba() {
			var e = C(X);
			wy.has(e) || (wy.add(e), console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.", e));
		}
		function xa() {
			throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
		}
		function Sa(e, t) {
			if (Ry) return !1;
			if (t === null) return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Z), !1;
			e.length !== t.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", Z, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
			for (var n = 0; n < t.length && n < e.length; n++) if (!Gh(e[n], t[n])) return !1;
			return !0;
		}
		function Ca(e, t, n, r, i, a) {
			Ty = a, X = t, Iy = e === null ? null : e._debugHookTypes, Ly = -1, Ry = e !== null && e.type !== t.type, (Object.prototype.toString.call(n) === "[object AsyncFunction]" || Object.prototype.toString.call(n) === "[object AsyncGeneratorFunction]") && (a = C(X), Cy.has(a) || (Cy.add(a), console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.", a === null ? "An unknown Component" : "<" + a + ">"))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, V.H = e !== null && e.memoizedState !== null ? Hy : Iy === null ? By : Vy, Ay = a = (t.mode & zg) !== W;
			var o = Sv(n, r, i);
			if (Ay = !1, ky && (o = Ta(t, n, r, i)), a) {
				Ae(!0);
				try {
					o = Ta(t, n, r, i);
				} finally {
					Ae(!1);
				}
			}
			return wa(e, t), o;
		}
		function wa(e, t) {
			t._debugHookTypes = Iy, t.dependencies === null ? Ny !== null && (t.dependencies = {
				lanes: 0,
				firstContext: null,
				_debugThenableState: Ny
			}) : t.dependencies._debugThenableState = Ny, V.H = zy;
			var n = Ey !== null && Ey.next !== null;
			if (Ty = 0, Iy = Z = Dy = Ey = X = null, Ly = -1, e !== null && (e.flags & 65011712) != (t.flags & 65011712) && console.error("Internal React error: Expected static flag was missing. Please notify the React team."), Oy = !1, My = 0, Ny = null, n) throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
			e === null || cb || (e = e.dependencies, e !== null && ni(e) && (cb = !0)), Wv ? (Wv = !1, e = !0) : e = !1, e && (t = C(t) || "Unknown", Sy.has(t) || Cy.has(t) || (Sy.add(t), console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")));
		}
		function Ta(e, t, n, r) {
			X = e;
			var i = 0;
			do {
				if (ky && (Ny = null), My = 0, ky = !1, i >= Fy) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
				if (i += 1, Ry = !1, Dy = Ey = null, e.updateQueue != null) {
					var a = e.updateQueue;
					a.lastEffect = null, a.events = null, a.stores = null, a.memoCache != null && (a.memoCache.index = 0);
				}
				Ly = -1, V.H = Uy, a = Sv(t, n, r);
			} while (ky);
			return a;
		}
		function Ea() {
			var e = V.H, t = e.useState()[0];
			return t = typeof t.then == "function" ? Na(t) : t, e = e.useState()[0], (Ey === null ? null : Ey.memoizedState) !== e && (X.flags |= 1024), t;
		}
		function Da() {
			var e = jy !== 0;
			return jy = 0, e;
		}
		function Oa(e, t, n) {
			t.updateQueue = e.updateQueue, t.flags = (t.mode & Bg) === W ? t.flags & -2053 : t.flags & -402655237, e.lanes &= ~n;
		}
		function ka(e) {
			if (Oy) {
				for (e = e.memoizedState; e !== null;) {
					var t = e.queue;
					t !== null && (t.pending = null), e = e.next;
				}
				Oy = !1;
			}
			Ty = 0, Iy = Dy = Ey = X = null, Ly = -1, Z = null, ky = !1, My = jy = 0, Ny = null;
		}
		function Aa() {
			var e = {
				memoizedState: null,
				baseState: null,
				baseQueue: null,
				queue: null,
				next: null
			};
			return Dy === null ? X.memoizedState = Dy = e : Dy = Dy.next = e, Dy;
		}
		function ja() {
			if (Ey === null) {
				var e = X.alternate;
				e = e === null ? null : e.memoizedState;
			} else e = Ey.next;
			var t = Dy === null ? X.memoizedState : Dy.next;
			if (t !== null) Dy = t, Ey = e;
			else {
				if (e === null) throw X.alternate === null ? Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.") : Error("Rendered more hooks than during the previous render.");
				Ey = e, e = {
					memoizedState: Ey.memoizedState,
					baseState: Ey.baseState,
					baseQueue: Ey.baseQueue,
					queue: Ey.queue,
					next: null
				}, Dy === null ? X.memoizedState = Dy = e : Dy = Dy.next = e;
			}
			return Dy;
		}
		function Ma() {
			return {
				lastEffect: null,
				events: null,
				stores: null,
				memoCache: null
			};
		}
		function Na(e) {
			var t = My;
			return My += 1, Ny === null && (Ny = Ii()), e = Ri(Ny, e, t), t = X, (Dy === null ? t.memoizedState : Dy.next) === null && (t = t.alternate, V.H = t !== null && t.memoizedState !== null ? Hy : By), e;
		}
		function Pa(e) {
			if (typeof e == "object" && e) {
				if (typeof e.then == "function") return Na(e);
				if (e.$$typeof === Rf) return ii(e);
			}
			throw Error("An unsupported type was passed to use(): " + String(e));
		}
		function Fa(e) {
			var t = null, n = X.updateQueue;
			if (n !== null && (t = n.memoCache), t == null) {
				var r = X.alternate;
				r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
					data: r.data.map(function(e) {
						return e.slice();
					}),
					index: 0
				})));
			}
			if (t ??= {
				data: [],
				index: 0
			}, n === null && (n = Ma(), X.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0 || Ry) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = Gf;
			else n.length !== e && console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.", n.length, e);
			return t.index++, n;
		}
		function Ia(e, t) {
			return typeof t == "function" ? t(e) : t;
		}
		function La(e, t, n) {
			var r = Aa();
			if (n !== void 0) {
				var i = n(t);
				if (Ay) {
					Ae(!0);
					try {
						n(t);
					} finally {
						Ae(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = Go.bind(null, X, e), [r.memoizedState, e];
		}
		function Ra(e) {
			return za(ja(), Ey, e);
		}
		function za(e, t, n) {
			var r = e.queue;
			if (r === null) throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
			r.lastRenderedReducer = n;
			var i = e.baseQueue, a = r.pending;
			if (a !== null) {
				if (i !== null) {
					var o = i.next;
					i.next = a.next, a.next = o;
				}
				t.baseQueue !== i && console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), t.baseQueue = i = a, r.pending = null;
			}
			if (a = e.baseState, i === null) e.memoizedState = a;
			else {
				t = i.next;
				var s = o = null, c = null, l = t, u = !1;
				do {
					var d = l.lane & -536870913;
					if (d === l.lane ? (Ty & d) === d : ($ & d) === d) {
						var f = l.revertLane;
						if (f === 0) c !== null && (c = c.next = {
							lane: 0,
							revertLane: 0,
							gesture: null,
							action: l.action,
							hasEagerState: l.hasEagerState,
							eagerState: l.eagerState,
							next: null
						}), d === sv && (u = !0);
						else if ((Ty & f) === f) {
							l = l.next, f === sv && (u = !0);
							continue;
						} else d = {
							lane: 0,
							revertLane: l.revertLane,
							gesture: null,
							action: l.action,
							hasEagerState: l.hasEagerState,
							eagerState: l.eagerState,
							next: null
						}, c === null ? (s = c = d, o = a) : c = c.next = d, X.lanes |= f, ux |= f;
						d = l.action, Ay && n(a, d), a = l.hasEagerState ? l.eagerState : n(a, d);
					} else f = {
						lane: d,
						revertLane: l.revertLane,
						gesture: l.gesture,
						action: l.action,
						hasEagerState: l.hasEagerState,
						eagerState: l.eagerState,
						next: null
					}, c === null ? (s = c = f, o = a) : c = c.next = f, X.lanes |= d, ux |= d;
					l = l.next;
				} while (l !== null && l !== t);
				if (c === null ? o = a : c.next = s, !Gh(a, e.memoizedState) && (cb = !0, u && (n = cv, n !== null))) throw n;
				e.memoizedState = a, e.baseState = o, e.baseQueue = c, r.lastRenderedState = a;
			}
			return i === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
		}
		function Ba(e) {
			var t = ja(), n = t.queue;
			if (n === null) throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
			n.lastRenderedReducer = e;
			var r = n.dispatch, i = n.pending, a = t.memoizedState;
			if (i !== null) {
				n.pending = null;
				var o = i = i.next;
				do
					a = e(a, o.action), o = o.next;
				while (o !== i);
				Gh(a, t.memoizedState) || (cb = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
			}
			return [a, r];
		}
		function Va(e, t, n) {
			var r = X, i = Aa();
			if (K) {
				if (n === void 0) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
				var a = n();
				by || a === n() || (console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"), by = !0);
			} else {
				if (a = t(), by || (n = t(), Gh(a, n) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), by = !0)), Kb === null) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
				$ & 127 || Ua(r, t, a);
			}
			return i.memoizedState = a, n = {
				value: a,
				getSnapshot: t
			}, i.queue = n, _o(Ga.bind(null, r, n, e), [e]), r.flags |= 2048, po(gy | yy, { destroy: void 0 }, Wa.bind(null, r, n, a, t), null), a;
		}
		function Ha(e, t, n) {
			var r = X, i = ja(), a = K;
			if (a) {
				if (n === void 0) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
				n = n();
			} else if (n = t(), !by) {
				var o = t();
				Gh(n, o) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), by = !0);
			}
			if ((o = !Gh((Ey || i).memoizedState, n)) && (i.memoizedState = n, cb = !0), i = i.queue, go(2048, yy, Ga.bind(null, r, i, e), [e]), i.getSnapshot !== t || o || Dy !== null && Dy.memoizedState.tag & gy) {
				if (r.flags |= 2048, po(gy | yy, { destroy: void 0 }, Wa.bind(null, r, i, n, t), null), Kb === null) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
				a || Ty & 127 || Ua(r, t, n);
			}
			return n;
		}
		function Ua(e, t, n) {
			e.flags |= 16384, e = {
				getSnapshot: t,
				value: n
			}, t = X.updateQueue, t === null ? (t = Ma(), X.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
		}
		function Wa(e, t, n, r) {
			t.value = n, t.getSnapshot = r, Ka(t) && qa(e);
		}
		function Ga(e, t, n) {
			return n(function() {
				Ka(t) && (ui(2, "updateSyncExternalStore()", e), qa(e));
			});
		}
		function Ka(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !Gh(e, n);
			} catch {
				return !0;
			}
		}
		function qa(e) {
			var t = pr(e, 2);
			t !== null && il(t, e, 2);
		}
		function Ja(e) {
			var t = Aa();
			if (typeof e == "function") {
				var n = e;
				if (e = n(), Ay) {
					Ae(!0);
					try {
						n();
					} finally {
						Ae(!1);
					}
				}
			}
			return t.memoizedState = t.baseState = e, t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ia,
				lastRenderedState: e
			}, t;
		}
		function Ya(e) {
			e = Ja(e);
			var t = e.queue, n = Ko.bind(null, X, t);
			return t.dispatch = n, [e.memoizedState, n];
		}
		function Xa(e) {
			var t = Aa();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = Jo.bind(null, X, !0, n), n.dispatch = t, [e, t];
		}
		function Za(e, t) {
			return Qa(ja(), Ey, e, t);
		}
		function Qa(e, t, n, r) {
			return e.baseState = n, za(e, Ey, typeof r == "function" ? r : Ia);
		}
		function $a(e, t) {
			var n = ja();
			return Ey === null ? (n.baseState = e, [e, n.queue.dispatch]) : Qa(n, Ey, e, t);
		}
		function eo(e, t, n, r, i) {
			if (Yo(e)) throw Error("Cannot update form state while rendering.");
			if (e = t.action, e !== null) {
				var a = {
					payload: i,
					action: e,
					next: null,
					isTransition: !0,
					status: "pending",
					value: null,
					reason: null,
					listeners: [],
					then: function(e) {
						a.listeners.push(e);
					}
				};
				V.T === null ? a.isTransition = !1 : n(!0), r(a), n = t.pending, n === null ? (a.next = t.pending = a, to(t, a)) : (a.next = n.next, t.pending = n.next = a);
			}
		}
		function to(e, t) {
			var n = t.action, r = t.payload, i = e.state;
			if (t.isTransition) {
				var a = V.T, o = {};
				o._updatedFibers = /* @__PURE__ */ new Set(), V.T = o;
				try {
					var s = n(i, r), c = V.S;
					c !== null && c(o, s), no(e, t, s);
				} catch (n) {
					io(e, t, n);
				} finally {
					a !== null && o.types !== null && (a.types !== null && a.types !== o.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), a.types = o.types), V.T = a, a === null && o._updatedFibers && (e = o._updatedFibers.size, o._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."));
				}
			} else try {
				o = n(i, r), no(e, t, o);
			} catch (n) {
				io(e, t, n);
			}
		}
		function no(e, t, n) {
			typeof n == "object" && n && typeof n.then == "function" ? (V.asyncTransitions++, n.then(No, No), n.then(function(n) {
				ro(e, t, n);
			}, function(n) {
				return io(e, t, n);
			}), t.isTransition || console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")) : ro(e, t, n);
		}
		function ro(e, t, n) {
			t.status = "fulfilled", t.value = n, ao(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, to(e, n)));
		}
		function io(e, t, n) {
			var r = e.pending;
			if (e.pending = null, r !== null) {
				r = r.next;
				do
					t.status = "rejected", t.reason = n, ao(t), t = t.next;
				while (t !== r);
			}
			e.action = null;
		}
		function ao(e) {
			e = e.listeners;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
		function oo(e, t) {
			return t;
		}
		function so(e, t) {
			if (K) {
				var n = Kb.formState;
				if (n !== null) {
					a: {
						var r = X;
						if (K) {
							if (t_) {
								b: {
									for (var i = t_, a = a_; i.nodeType !== 8;) {
										if (!a) {
											i = null;
											break b;
										}
										if (i = yd(i.nextSibling), i === null) {
											i = null;
											break b;
										}
									}
									a = i.data, i = a === VS || a === HS ? i : null;
								}
								if (i) {
									t_ = yd(i.nextSibling), r = i.data === VS;
									break a;
								}
							}
							Hr(r);
						}
						r = !1;
					}
					r && (t = n[0]);
				}
			}
			return n = Aa(), n.memoizedState = n.baseState = t, r = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: oo,
				lastRenderedState: t
			}, n.queue = r, n = Ko.bind(null, X, r), r.dispatch = n, r = Ja(!1), a = Jo.bind(null, X, !1, r.queue), r = Aa(), i = {
				state: t,
				dispatch: null,
				action: e,
				pending: null
			}, r.queue = i, n = eo.bind(null, X, i, a, n), i.dispatch = n, r.memoizedState = e, [
				t,
				n,
				!1
			];
		}
		function co(e) {
			return lo(ja(), Ey, e);
		}
		function lo(e, t, n) {
			if (t = za(e, t, oo)[0], e = Ra(Ia)[0], typeof t == "object" && t && typeof t.then == "function") try {
				var r = Na(t);
			} catch (e) {
				throw e === zv ? Vv : e;
			}
			else r = t;
			t = ja();
			var i = t.queue, a = i.dispatch;
			return n !== t.memoizedState && (X.flags |= 2048, po(gy | yy, { destroy: void 0 }, uo.bind(null, i, n), null)), [
				r,
				a,
				e
			];
		}
		function uo(e, t) {
			e.action = t;
		}
		function fo(e) {
			var t = ja(), n = Ey;
			if (n !== null) return lo(t, n, e);
			ja(), t = t.memoizedState, n = ja();
			var r = n.queue.dispatch;
			return n.memoizedState = e, [
				t,
				r,
				!1
			];
		}
		function po(e, t, n, r) {
			return e = {
				tag: e,
				create: n,
				deps: r,
				inst: t,
				next: null
			}, t = X.updateQueue, t === null && (t = Ma(), X.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
		}
		function mo(e) {
			var t = Aa();
			return e = { current: e }, t.memoizedState = e;
		}
		function ho(e, t, n, r) {
			var i = Aa();
			X.flags |= e, i.memoizedState = po(gy | t, { destroy: void 0 }, n, r === void 0 ? null : r);
		}
		function go(e, t, n, r) {
			var i = ja();
			r = r === void 0 ? null : r;
			var a = i.memoizedState.inst;
			Ey !== null && r !== null && Sa(r, Ey.memoizedState.deps) ? i.memoizedState = po(t, a, n, r) : (X.flags |= e, i.memoizedState = po(gy | t, a, n, r));
		}
		function _o(e, t) {
			(X.mode & Bg) === W ? ho(8390656, yy, e, t) : ho(276826112, yy, e, t);
		}
		function vo(e) {
			X.flags |= 4;
			var t = X.updateQueue;
			if (t === null) t = Ma(), X.updateQueue = t, t.events = [e];
			else {
				var n = t.events;
				n === null ? t.events = [e] : n.push(e);
			}
		}
		function yo(e) {
			var t = Aa(), n = { impl: e };
			return t.memoizedState = n, function() {
				if ((Gb & Ib) !== Fb) throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
				return n.impl.apply(void 0, arguments);
			};
		}
		function F(e) {
			var t = ja().memoizedState;
			return vo({
				ref: t,
				nextImpl: e
			}), function() {
				if ((Gb & Ib) !== Fb) throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
				return t.impl.apply(void 0, arguments);
			};
		}
		function bo(e, t) {
			var n = 4194308;
			return (X.mode & Bg) !== W && (n |= 134217728), ho(n, vy, e, t);
		}
		function xo(e, t) {
			if (typeof t == "function") {
				e = e();
				var n = t(e);
				return function() {
					typeof n == "function" ? n() : t(null);
				};
			}
			if (t != null) return t.hasOwnProperty("current") || console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(t).join(", ") + "}"), e = e(), t.current = e, function() {
				t.current = null;
			};
		}
		function So(e, t, n) {
			typeof t != "function" && console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t === null ? "null" : typeof t), n = n == null ? null : n.concat([e]);
			var r = 4194308;
			(X.mode & Bg) !== W && (r |= 134217728), ho(r, vy, xo.bind(null, t, e), n);
		}
		function Co(e, t, n) {
			typeof t != "function" && console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t === null ? "null" : typeof t), n = n == null ? null : n.concat([e]), go(4, vy, xo.bind(null, t, e), n);
		}
		function wo(e, t) {
			return Aa().memoizedState = [e, t === void 0 ? null : t], e;
		}
		function To(e, t) {
			var n = ja();
			t = t === void 0 ? null : t;
			var r = n.memoizedState;
			return t !== null && Sa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
		}
		function Eo(e, t) {
			var n = Aa();
			t = t === void 0 ? null : t;
			var r = e();
			if (Ay) {
				Ae(!0);
				try {
					e();
				} finally {
					Ae(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		}
		function Do(e, t) {
			var n = ja();
			t = t === void 0 ? null : t;
			var r = n.memoizedState;
			if (t !== null && Sa(t, r[1])) return r[0];
			if (r = e(), Ay) {
				Ae(!0);
				try {
					e();
				} finally {
					Ae(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		}
		function Oo(e, t) {
			return jo(Aa(), e, t);
		}
		function ko(e, t) {
			return Mo(ja(), Ey.memoizedState, e, t);
		}
		function Ao(e, t) {
			var n = ja();
			return Ey === null ? jo(n, e, t) : Mo(n, Ey.memoizedState, e, t);
		}
		function jo(e, t, n) {
			return n === void 0 || Ty & 1073741824 && !($ & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = rl(), X.lanes |= e, ux |= e, n);
		}
		function Mo(e, t, n, r) {
			return Gh(n, t) ? n : cy.current === null ? !(Ty & 42) || Ty & 1073741824 && !($ & 261930) ? (cb = !0, e.memoizedState = n) : (e = rl(), X.lanes |= e, ux |= e, t) : (e = jo(e, n, r), Gh(e, t) || (cb = !0), e);
		}
		function No() {
			V.asyncTransitions--;
		}
		function Po(e, t, n, r, i) {
			var a = Yf.p;
			Yf.p = a !== 0 && a < Up ? a : Up;
			var o = V.T, s = {};
			s._updatedFibers = /* @__PURE__ */ new Set(), V.T = s, Jo(e, !1, t, n);
			try {
				var c = i(), l = V.S;
				if (l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function") {
					V.asyncTransitions++, c.then(No, No);
					var u = Mi(c, r);
					qo(e, t, u, nl(e));
				} else qo(e, t, r, nl(e));
			} catch (n) {
				qo(e, t, {
					then: function() {},
					status: "rejected",
					reason: n
				}, nl(e));
			} finally {
				Yf.p = a, o !== null && s.types !== null && (o.types !== null && o.types !== s.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), o.types = s.types), V.T = o, o === null && s._updatedFibers && (e = s._updatedFibers.size, s._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."));
			}
		}
		function Fo(e, t, n, r) {
			if (e.tag !== 5) throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");
			var i = Io(e).queue;
			di(e), Po(e, i, t, xC, n === null ? u : function() {
				return Lo(e), n(r);
			});
		}
		function Io(e) {
			var t = e.memoizedState;
			if (t !== null) return t;
			t = {
				memoizedState: xC,
				baseState: xC,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Ia,
					lastRenderedState: xC
				},
				next: null
			};
			var n = {};
			return t.next = {
				memoizedState: n,
				baseState: n,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Ia,
					lastRenderedState: n
				},
				next: null
			}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
		}
		function Lo(e) {
			V.T === null && console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");
			var t = Io(e);
			t.next === null && (t = e.alternate.memoizedState), qo(e, t.next.queue, {}, nl(e));
		}
		function Ro() {
			var e = Ja(!1);
			return e = Po.bind(null, X, e.queue, !0, !1), Aa().memoizedState = e, [!1, e];
		}
		function zo() {
			var e = Ra(Ia)[0], t = ja().memoizedState;
			return [typeof e == "boolean" ? e : Na(e), t];
		}
		function Bo() {
			var e = Ba(Ia)[0], t = ja().memoizedState;
			return [typeof e == "boolean" ? e : Na(e), t];
		}
		function Vo() {
			return ii(SC);
		}
		function Ho() {
			var e = Aa(), t = Kb.identifierPrefix;
			if (K) {
				var n = $g, r = Qg;
				n = (r & ~(1 << 32 - Ip(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = jy++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Py++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		}
		function Uo() {
			return Aa().memoizedState = Wo.bind(null, X);
		}
		function Wo(e, t) {
			for (var n = e.return; n !== null;) {
				switch (n.tag) {
					case 24:
					case 3:
						var r = nl(n), i = ta(r), a = na(n, i, r);
						a !== null && (ui(r, "refresh()", e), il(a, n, r), ra(a, n, r)), e = si(), t != null && a !== null && console.error("The seed argument is not enabled outside experimental channels."), i.payload = { cache: e };
						return;
				}
				n = n.return;
			}
		}
		function Go(e, t, n) {
			var r = arguments;
			typeof r[3] == "function" && console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."), r = nl(e);
			var i = {
				lane: r,
				revertLane: 0,
				gesture: null,
				action: n,
				hasEagerState: !1,
				eagerState: null,
				next: null
			};
			Yo(e) ? Xo(t, i) : (i = fr(e, t, i, r), i !== null && (ui(r, "dispatch()", e), il(i, e, r), Zo(i, t, r)));
		}
		function Ko(e, t, n) {
			var r = arguments;
			typeof r[3] == "function" && console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."), r = nl(e), qo(e, t, n, r) && ui(r, "setState()", e);
		}
		function qo(e, t, n, r) {
			var i = {
				lane: r,
				revertLane: 0,
				gesture: null,
				action: n,
				hasEagerState: !1,
				eagerState: null,
				next: null
			};
			if (Yo(e)) Xo(t, i);
			else {
				var a = e.alternate;
				if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) {
					var o = V.H;
					V.H = Gy;
					try {
						var s = t.lastRenderedState, c = a(s, n);
						if (i.hasEagerState = !0, i.eagerState = c, Gh(c, s)) return dr(e, t, i, 0), Kb === null && ur(), !1;
					} catch {} finally {
						V.H = o;
					}
				}
				if (n = fr(e, t, i, r), n !== null) return il(n, e, r), Zo(n, t, r), !0;
			}
			return !1;
		}
		function Jo(e, t, n, r) {
			if (V.T === null && sv === 0 && console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."), r = {
				lane: 2,
				revertLane: iu(),
				gesture: null,
				action: r,
				hasEagerState: !1,
				eagerState: null,
				next: null
			}, Yo(e)) {
				if (t) throw Error("Cannot update optimistic state while rendering.");
				console.error("Cannot call startTransition while rendering.");
			} else t = fr(e, n, r, 2), t !== null && (ui(2, "setOptimistic()", e), il(t, e, 2));
		}
		function Yo(e) {
			var t = e.alternate;
			return e === X || t !== null && t === X;
		}
		function Xo(e, t) {
			ky = Oy = !0;
			var n = e.pending;
			n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
		}
		function Zo(e, t, n) {
			if (n & 4194048) {
				var r = t.lanes;
				r &= e.pendingLanes, n |= r, t.lanes = n, Be(e, n);
			}
		}
		function Qo(e) {
			if (e !== null && typeof e != "function") {
				var t = String(e);
				rb.has(t) || (rb.add(t), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", e));
			}
		}
		function $o(e, t, n, r) {
			var i = e.memoizedState, a = n(r, i);
			if (e.mode & zg) {
				Ae(!0);
				try {
					a = n(r, i);
				} finally {
					Ae(!1);
				}
			}
			a === void 0 && (t = S(t) || "Component", $y.has(t) || ($y.add(t), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t))), i = a == null ? i : B({}, i, a), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
		}
		function es(e, t, n, r, i, a, o) {
			var s = e.stateNode;
			if (typeof s.shouldComponentUpdate == "function") {
				if (n = s.shouldComponentUpdate(r, a, o), e.mode & zg) {
					Ae(!0);
					try {
						n = s.shouldComponentUpdate(r, a, o);
					} finally {
						Ae(!1);
					}
				}
				return n === void 0 && console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", S(t) || "Component"), n;
			}
			return t.prototype && t.prototype.isPureReactComponent ? !In(n, r) || !In(i, a) : !0;
		}
		function ts(e, t, n, r) {
			var i = t.state;
			typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== i && (e = C(e) || "Component", Jy.has(e) || (Jy.add(e), console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", e)), ib.enqueueReplaceState(t, t.state, null));
		}
		function ns(e, t) {
			var n = t;
			if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
			if (e = e.defaultProps) for (var i in n === t && (n = B({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
			return n;
		}
		function rs(e) {
			pg(e), console.warn("%s\n\n%s\n", ab ? "An error occurred in the <" + ab + "> component." : "An error occurred in one of your React components.", "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://react.dev/link/error-boundaries to learn more about error boundaries.");
		}
		function is(e) {
			var t = ab ? "The above error occurred in the <" + ab + "> component." : "The above error occurred in one of your React components.", n = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((ob || "Anonymous") + ".");
			if (typeof e == "object" && e && typeof e.environmentName == "string") {
				var r = e.environmentName;
				e = [
					"%o\n\n%s\n\n%s\n",
					e,
					t,
					n
				].slice(0), typeof e[0] == "string" ? e.splice(0, 1, CC + " " + e[0], wC, EC + r + EC, TC) : e.splice(0, 0, CC, wC, EC + r + EC, TC), e.unshift(console), r = DC.apply(console.error, e), r();
			} else console.error("%o\n\n%s\n\n%s\n", e, t, n);
		}
		function as(e) {
			pg(e);
		}
		function os(e, t) {
			try {
				ab = t.source ? C(t.source) : null, ob = null;
				var n = t.value;
				if (V.actQueue !== null) V.thrownErrors.push(n);
				else {
					var r = e.onUncaughtError;
					r(n, { componentStack: t.stack });
				}
			} catch (e) {
				setTimeout(function() {
					throw e;
				});
			}
		}
		function ss(e, t, n) {
			try {
				ab = n.source ? C(n.source) : null, ob = C(t);
				var r = e.onCaughtError;
				r(n.value, {
					componentStack: n.stack,
					errorBoundary: t.tag === 1 ? t.stateNode : null
				});
			} catch (e) {
				setTimeout(function() {
					throw e;
				});
			}
		}
		function cs(e, t, n) {
			return n = ta(n), n.tag = ry, n.payload = { element: null }, n.callback = function() {
				D(t.source, os, e, t);
			}, n;
		}
		function ls(e) {
			return e = ta(e), e.tag = ry, e;
		}
		function us(e, t, n, r) {
			var i = n.type.getDerivedStateFromError;
			if (typeof i == "function") {
				var a = r.value;
				e.payload = function() {
					return i(a);
				}, e.callback = function() {
					yr(n), D(r.source, ss, t, n, r);
				};
			}
			var o = n.stateNode;
			o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
				yr(n), D(r.source, ss, t, n, r), typeof i != "function" && (Tx === null ? Tx = new Set([this]) : Tx.add(this)), Av(this, r), typeof i == "function" || !(n.lanes & 2) && console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", C(n) || "Unknown");
			});
		}
		function ds(e, t, n, r, i) {
			if (n.flags |= 32768, Fp && ql(e, i), typeof r == "object" && r && typeof r.then == "function") {
				if (t = n.alternate, t !== null && ti(t, n, i, !0), K && (n_ = !0), n = uy.current, n !== null) {
					switch (n.tag) {
						case 31:
						case 13: return dy === null ? vl() : n.alternate === null && lx === Rb && (lx = Vb), n.flags &= -257, n.flags |= 65536, n.lanes = i, r === Hv ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([r]) : t.add(r), Rl(e, r, i)), !1;
						case 22: return n.flags |= 65536, r === Hv ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
							transitions: null,
							markerInstances: null,
							retryQueue: new Set([r])
						}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([r]) : n.add(r)), Rl(e, r, i)), !1;
					}
					throw Error("Unexpected Suspense handler tag (" + n.tag + "). This is a bug in React.");
				}
				return Rl(e, r, i), vl(), !1;
			}
			if (K) return n_ = !0, t = uy.current, t === null ? (r !== o_ && Jr(jr(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.", { cause: r }), n)), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, r = jr(r, n), i = cs(e.stateNode, r, i), ia(e, i), lx !== Hb && (lx = Bb)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, r !== o_ && Jr(jr(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.", { cause: r }), n))), !1;
			var a = jr(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.", { cause: r }), n);
			if (hx === null ? hx = [a] : hx.push(a), lx !== Hb && (lx = Bb), t === null) return !0;
			r = jr(r, n), n = t;
			do {
				switch (n.tag) {
					case 3: return n.flags |= 65536, e = i & -i, n.lanes |= e, e = cs(n.stateNode, r, e), ia(n, e), !1;
					case 1: if (t = n.type, a = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || a !== null && typeof a.componentDidCatch == "function" && (Tx === null || !Tx.has(a)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = ls(i), us(i, e, n, r), ia(n, i), !1;
				}
				n = n.return;
			} while (n !== null);
			return !1;
		}
		function fs(e, t, n, r) {
			t.child = e === null ? $v(t, null, n, r) : Qv(t, e.child, n, r);
		}
		function ps(e, t, n, r, i) {
			n = n.render;
			var a = t.ref;
			if ("ref" in r) {
				var o = {};
				for (var s in r) s !== "ref" && (o[s] = r[s]);
			} else o = r;
			return ri(t), r = Ca(e, t, n, o, a, i), s = Da(), e !== null && !cb ? (Oa(e, t, i), Ls(e, t, i)) : (K && s && Pr(t), t.flags |= 1, fs(e, t, r, i), t.child);
		}
		function ms(e, t, n, r, i) {
			if (e === null) {
				var a = n.type;
				return typeof a == "function" && !Sr(a) && a.defaultProps === void 0 && n.compare === null ? (n = gr(a), t.tag = 15, t.type = n, Ds(t, a), hs(e, t, n, r, i)) : (e = Tr(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
			}
			if (a = e.child, !Rs(e, i)) {
				var o = a.memoizedProps;
				if (n = n.compare, n = n === null ? In : n, n(o, r) && e.ref === t.ref) return Ls(e, t, i);
			}
			return t.flags |= 1, e = Cr(a, r), e.ref = t.ref, e.return = t, t.child = e;
		}
		function hs(e, t, n, r, i) {
			if (e !== null) {
				var a = e.memoizedProps;
				if (In(a, r) && e.ref === t.ref && t.type === e.type) if (cb = !1, t.pendingProps = r = a, Rs(e, i)) e.flags & 131072 && (cb = !0);
				else return t.lanes = e.lanes, Ls(e, t, i);
			}
			return Cs(e, t, n, r, i);
		}
		function gs(e, t, n, r) {
			var i = r.children, a = e === null ? null : e.memoizedState;
			if (e === null && t.stateNode === null && (t.stateNode = {
				_visibility: Ag,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null
			}), r.mode === "hidden") {
				if (t.flags & 128) {
					if (a = a === null ? n : a.baseLanes | n, e !== null) {
						for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
						r = i & ~a;
					} else r = 0, t.child = null;
					return vs(e, t, a, n, r);
				}
				if (n & 536870912) t.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, e !== null && Pi(t, a === null ? null : a.cachePool), a === null ? da(t) : ua(t, a), ha(t);
				else return r = t.lanes = 536870912, vs(e, t, a === null ? n : a.baseLanes | n, n, r);
			} else a === null ? (e !== null && Pi(t, null), da(t), ga(t)) : (Pi(t, a.cachePool), ua(t, a), ga(t), t.memoizedState = null);
			return fs(e, t, i, n), t.child;
		}
		function _s(e, t) {
			return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
				_visibility: Ag,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null
			}), t.sibling;
		}
		function vs(e, t, n, r, i) {
			var a = Ni();
			return a = a === null ? null : {
				parent: g_._currentValue,
				pool: a
			}, t.memoizedState = {
				baseLanes: n,
				cachePool: a
			}, e !== null && Pi(t, null), da(t), ha(t), e !== null && ti(e, t, r, !0), t.childLanes = i, null;
		}
		function ys(e, t) {
			var n = t.hidden;
			return n !== void 0 && console.error("<Activity> doesn't accept a hidden prop. Use mode=\"hidden\" instead.\n- <Activity %s>\n+ <Activity %s>", !0 === n ? "hidden" : !1 === n ? "hidden={false}" : "hidden={...}", n ? "mode=\"hidden\"" : "mode=\"visible\""), t = Ms({
				mode: t.mode,
				children: t.children
			}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
		}
		function bs(e, t, n) {
			return Qv(t, e.child, null, n), e = ys(t, t.pendingProps), e.flags |= 2, _a(t), t.memoizedState = null, e;
		}
		function xs(e, t, n) {
			var r = t.pendingProps, i = (t.flags & 128) != 0;
			if (t.flags &= -129, e === null) {
				if (K) {
					if (r.mode === "hidden") return e = ys(t, r), t.lanes = 536870912, _s(null, e);
					if (ma(t), (e = t_) ? (n = hd(e, a_), n = n !== null && n.data === jS ? n : null, n !== null && (r = {
						dehydrated: n,
						treeContext: Ir(),
						retryLane: 536870912,
						hydrationErrors: null
					}, t.memoizedState = r, r = kr(n), r.return = t, t.child = r, e_ = t, t_ = null)) : n = null, n === null) throw Vr(t, e), Hr(t);
					return t.lanes = 536870912, null;
				}
				return ys(t, r);
			}
			var a = e.memoizedState;
			if (a !== null) {
				var o = a.dehydrated;
				if (ma(t), i) if (t.flags & 256) t.flags &= -257, t = bs(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");
				else if (Br(), n & 536870912 && _l(t), cb || ti(e, t, n, !1), i = (n & e.childLanes) !== 0, cb || i) {
					if (r = Kb, r !== null && (o = Ve(r, n), o !== 0 && o !== a.retryLane)) throw a.retryLane = o, pr(e, o), il(r, e, o), sb;
					vl(), t = bs(e, t, n);
				} else e = a.treeContext, t_ = yd(o.nextSibling), e_ = t, K = !0, i_ = null, n_ = !1, r_ = null, a_ = !1, e !== null && Lr(t, e), t = ys(t, r), t.flags |= 4096;
				return t;
			}
			return a = e.child, r = {
				mode: r.mode,
				children: r.children
			}, n & 536870912 && (n & e.lanes) !== 0 && _l(t), e = Cr(a, r), e.ref = t.ref, t.child = e, e.return = t, e;
		}
		function Ss(e, t) {
			var n = t.ref;
			if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
			else {
				if (typeof n != "function" && typeof n != "object") throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");
				(e === null || e.ref !== n) && (t.flags |= 4194816);
			}
		}
		function Cs(e, t, n, r, i) {
			if (n.prototype && typeof n.prototype.render == "function") {
				var a = S(n) || "Unknown";
				lb[a] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", a, a), lb[a] = !0);
			}
			return t.mode & zg && dv.recordLegacyContextWarning(t, null), e === null && (Ds(t, t.type), n.contextTypes && (a = S(n) || "Unknown", db[a] || (db[a] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", a)))), ri(t), n = Ca(e, t, n, r, void 0, i), r = Da(), e !== null && !cb ? (Oa(e, t, i), Ls(e, t, i)) : (K && r && Pr(t), t.flags |= 1, fs(e, t, n, i), t.child);
		}
		function ws(e, t, n, r, i, a) {
			return ri(t), Ly = -1, Ry = e !== null && e.type !== t.type, t.updateQueue = null, n = Ta(t, r, n, i), wa(e, t), r = Da(), e !== null && !cb ? (Oa(e, t, a), Ls(e, t, a)) : (K && r && Pr(t), t.flags |= 1, fs(e, t, n, a), t.child);
		}
		function Ts(e, t, n, r, i) {
			switch (s(t)) {
				case !1:
					var a = t.stateNode, o = new t.type(t.memoizedProps, a.context).state;
					a.updater.enqueueSetState(a, o, null);
					break;
				case !0:
					t.flags |= 128, t.flags |= 65536, a = Error("Simulated error coming from DevTools");
					var c = i & -i;
					if (t.lanes |= c, o = Kb, o === null) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
					c = ls(c), us(c, o, t, jr(a, t)), ia(t, c);
			}
			if (ri(t), t.stateNode === null) {
				if (o = Fg, a = n.contextType, "contextType" in n && a !== null && (a === void 0 || a.$$typeof !== Rf) && !nb.has(n) && (nb.add(n), c = a === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof a == "object" ? a.$$typeof === Lf ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(a).join(", ") + "}." : " However, it is set to a " + typeof a + ".", console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", S(n) || "Component", c)), typeof a == "object" && a && (o = ii(a)), a = new n(r, o), t.mode & zg) {
					Ae(!0);
					try {
						a = new n(r, o);
					} finally {
						Ae(!1);
					}
				}
				if (o = t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = ib, t.stateNode = a, a._reactInternals = t, a._reactInternalInstance = qy, typeof n.getDerivedStateFromProps == "function" && o === null && (o = S(n) || "Component", Yy.has(o) || (Yy.add(o), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", o, a.state === null ? "null" : "undefined", o))), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function") {
					var l = c = o = null;
					if (typeof a.componentWillMount == "function" && !0 !== a.componentWillMount.__suppressDeprecationWarning ? o = "componentWillMount" : typeof a.UNSAFE_componentWillMount == "function" && (o = "UNSAFE_componentWillMount"), typeof a.componentWillReceiveProps == "function" && !0 !== a.componentWillReceiveProps.__suppressDeprecationWarning ? c = "componentWillReceiveProps" : typeof a.UNSAFE_componentWillReceiveProps == "function" && (c = "UNSAFE_componentWillReceiveProps"), typeof a.componentWillUpdate == "function" && !0 !== a.componentWillUpdate.__suppressDeprecationWarning ? l = "componentWillUpdate" : typeof a.UNSAFE_componentWillUpdate == "function" && (l = "UNSAFE_componentWillUpdate"), o !== null || c !== null || l !== null) {
						a = S(n) || "Component";
						var u = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
						Zy.has(a) || (Zy.add(a), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", a, u, o === null ? "" : "\n  " + o, c === null ? "" : "\n  " + c, l === null ? "" : "\n  " + l));
					}
				}
				a = t.stateNode, o = S(n) || "Component", a.render || (n.prototype && typeof n.prototype.render == "function" ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", o) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", o)), !a.getInitialState || a.getInitialState.isReactClassApproved || a.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), a.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), n.childContextTypes && !tb.has(n) && (tb.add(n), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", o)), n.contextTypes && !eb.has(n) && (eb.add(n), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", o)), typeof a.componentShouldUpdate == "function" && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), n.prototype && n.prototype.isPureReactComponent && a.shouldComponentUpdate !== void 0 && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", S(n) || "A pure component"), typeof a.componentDidUnmount == "function" && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof a.componentDidReceiveProps == "function" && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof a.componentWillRecieveProps == "function" && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof a.UNSAFE_componentWillRecieveProps == "function" && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o), c = a.props !== r, a.props !== void 0 && c && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o), a.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof a.getSnapshotBeforeUpdate != "function" || typeof a.componentDidUpdate == "function" || Xy.has(n) || (Xy.add(n), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", S(n))), typeof a.getDerivedStateFromProps == "function" && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof a.getDerivedStateFromError == "function" && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof n.getSnapshotBeforeUpdate == "function" && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o), (c = a.state) && (typeof c != "object" || Jf(c)) && console.error("%s.state: must be set to an object or null", o), typeof a.getChildContext == "function" && typeof n.childContextTypes != "object" && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o), a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, $i(t), o = n.contextType, a.context = typeof o == "object" && o ? ii(o) : Fg, a.state === r && (o = S(n) || "Component", Qy.has(o) || (Qy.add(o), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", o))), t.mode & zg && dv.recordLegacyContextWarning(t, a), dv.recordUnsafeLifecycleWarnings(t, a), a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && ($o(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", C(t) || "Component"), ib.enqueueReplaceState(a, a.state, null)), oa(t, r, a, i), aa(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Bg) !== W && (t.flags |= 134217728), a = !0;
			} else if (e === null) {
				a = t.stateNode;
				var d = t.memoizedProps;
				c = ns(n, d), a.props = c;
				var f = a.context;
				l = n.contextType, o = Fg, typeof l == "object" && l && (o = ii(l)), u = n.getDerivedStateFromProps, l = typeof u == "function" || typeof a.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, l || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (d || f !== o) && ts(t, a, r, o), iy = !1;
				var p = t.memoizedState;
				a.state = p, oa(t, r, a, i), aa(), f = t.memoizedState, d || p !== f || iy ? (typeof u == "function" && ($o(t, n, u, r), f = t.memoizedState), (c = iy || es(t, n, c, r, p, f, o)) ? (l || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Bg) !== W && (t.flags |= 134217728)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Bg) !== W && (t.flags |= 134217728), t.memoizedProps = r, t.memoizedState = f), a.props = r, a.state = f, a.context = o, a = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Bg) !== W && (t.flags |= 134217728), a = !1);
			} else {
				a = t.stateNode, ea(e, t), o = t.memoizedProps, l = ns(n, o), a.props = l, u = t.pendingProps, p = a.context, f = n.contextType, c = Fg, typeof f == "object" && f && (c = ii(f)), d = n.getDerivedStateFromProps, (f = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== u || p !== c) && ts(t, a, r, c), iy = !1, p = t.memoizedState, a.state = p, oa(t, r, a, i), aa();
				var m = t.memoizedState;
				o !== u || p !== m || iy || e !== null && e.dependencies !== null && ni(e.dependencies) ? (typeof d == "function" && ($o(t, n, d, r), m = t.memoizedState), (l = iy || es(t, n, l, r, p, m, c) || e !== null && e.dependencies !== null && ni(e.dependencies)) ? (f || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, m, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, m, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), a.props = r, a.state = m, a.context = c, a = l) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), a = !1);
			}
			if (c = a, Ss(e, t), o = (t.flags & 128) != 0, c || o) {
				if (c = t.stateNode, Ce(t), o && typeof n.getDerivedStateFromError != "function") n = null, T_ = -1;
				else if (n = wv(c), t.mode & zg) {
					Ae(!0);
					try {
						wv(c);
					} finally {
						Ae(!1);
					}
				}
				t.flags |= 1, e !== null && o ? (t.child = Qv(t, e.child, null, i), t.child = Qv(t, null, n, i)) : fs(e, t, n, i), t.memoizedState = c.state, e = t.child;
			} else e = Ls(e, t, i);
			return i = t.stateNode, a && i.props !== r && (pb || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", C(t) || "a component"), pb = !0), e;
		}
		function Es(e, t, n, r) {
			return Kr(), t.flags |= 256, fs(e, t, n, r), t.child;
		}
		function Ds(e, t) {
			t && t.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", t.displayName || t.name || "Component"), typeof t.getDerivedStateFromProps == "function" && (e = S(t) || "Unknown", fb[e] || (console.error("%s: Function components do not support getDerivedStateFromProps.", e), fb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = S(t) || "Unknown", ub[t] || (console.error("%s: Function components do not support contextType.", t), ub[t] = !0));
		}
		function Os(e) {
			return {
				baseLanes: e,
				cachePool: Fi()
			};
		}
		function ks(e, t, n) {
			return e = e === null ? 0 : e.childLanes & ~n, t && (e |= px), e;
		}
		function As(e, t, n) {
			var r, i = t.pendingProps;
			o(t) && (t.flags |= 128);
			var a = !1, s = (t.flags & 128) != 0;
			if ((r = s) || (r = e !== null && e.memoizedState === null ? !1 : (my.current & py) !== 0), r && (a = !0, t.flags &= -129), r = (t.flags & 32) != 0, t.flags &= -33, e === null) {
				if (K) {
					if (a ? pa(t) : ga(t), (e = t_) ? (n = hd(e, a_), n = n !== null && n.data !== jS ? n : null, n !== null && (r = {
						dehydrated: n,
						treeContext: Ir(),
						retryLane: 536870912,
						hydrationErrors: null
					}, t.memoizedState = r, r = kr(n), r.return = t, t.child = r, e_ = t, t_ = null)) : n = null, n === null) throw Vr(t, e), Hr(t);
					return _d(n) ? t.lanes = 32 : t.lanes = 536870912, null;
				}
				var c = i.children;
				if (i = i.fallback, a) {
					ga(t);
					var l = t.mode;
					return c = Ms({
						mode: "hidden",
						children: c
					}, l), i = Dr(i, l, n, null), c.return = t, i.return = t, c.sibling = i, t.child = c, i = t.child, i.memoizedState = Os(n), i.childLanes = ks(e, r, n), t.memoizedState = gb, _s(null, i);
				}
				return pa(t), js(t, c);
			}
			var u = e.memoizedState;
			if (u !== null) {
				var d = u.dehydrated;
				if (d !== null) {
					if (s) t.flags & 256 ? (pa(t), t.flags &= -257, t = Ns(e, t, n)) : t.memoizedState === null ? (ga(t), c = i.fallback, l = t.mode, i = Ms({
						mode: "visible",
						children: i.children
					}, l), c = Dr(c, l, n, null), c.flags |= 2, i.return = t, c.return = t, i.sibling = c, t.child = i, Qv(t, e.child, null, n), i = t.child, i.memoizedState = Os(n), i.childLanes = ks(e, r, n), t.memoizedState = gb, t = _s(null, i)) : (ga(t), t.child = e.child, t.flags |= 128, t = null);
					else if (pa(t), Br(), n & 536870912 && _l(t), _d(d)) {
						if (r = d.nextSibling && d.nextSibling.dataset, r) {
							c = r.dgst;
							var f = r.msg;
							l = r.stck;
							var p = r.cstck;
						}
						a = f, r = c, i = l, d = p, c = a, l = d, c = Error(c || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), c.stack = i || "", c.digest = r, r = l === void 0 ? null : l, i = {
							value: c,
							source: null,
							stack: r
						}, typeof r == "string" && Wg.set(c, i), Jr(i), t = Ns(e, t, n);
					} else if (cb || ti(e, t, n, !1), r = (n & e.childLanes) !== 0, cb || r) {
						if (r = Kb, r !== null && (i = Ve(r, n), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, pr(e, i), il(r, e, i), sb;
						gd(d) || vl(), t = Ns(e, t, n);
					} else gd(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = u.treeContext, t_ = yd(d.nextSibling), e_ = t, K = !0, i_ = null, n_ = !1, r_ = null, a_ = !1, e !== null && Lr(t, e), t = js(t, i.children), t.flags |= 4096);
					return t;
				}
			}
			return a ? (ga(t), c = i.fallback, l = t.mode, p = e.child, d = p.sibling, i = Cr(p, {
				mode: "hidden",
				children: i.children
			}), i.subtreeFlags = p.subtreeFlags & 65011712, d === null ? (c = Dr(c, l, n, null), c.flags |= 2) : c = Cr(d, c), c.return = t, i.return = t, i.sibling = c, t.child = i, _s(null, i), i = t.child, c = e.child.memoizedState, c === null ? c = Os(n) : (l = c.cachePool, l === null ? l = Fi() : (p = g_._currentValue, l = l.parent === p ? l : {
				parent: p,
				pool: p
			}), c = {
				baseLanes: c.baseLanes | n,
				cachePool: l
			}), i.memoizedState = c, i.childLanes = ks(e, r, n), t.memoizedState = gb, _s(e.child, i)) : (u !== null && (n & 62914560) === n && (n & e.lanes) !== 0 && _l(t), pa(t), n = e.child, e = n.sibling, n = Cr(n, {
				mode: "visible",
				children: i.children
			}), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n);
		}
		function js(e, t) {
			return t = Ms({
				mode: "visible",
				children: t
			}, e.mode), t.return = e, e.child = t;
		}
		function Ms(e, t) {
			return e = m(22, e, null, t), e.lanes = 0, e;
		}
		function Ns(e, t, n) {
			return Qv(t, e.child, null, n), e = js(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
		}
		function Ps(e, t, n) {
			e.lanes |= t;
			var r = e.alternate;
			r !== null && (r.lanes |= t), $r(e.return, t, n);
		}
		function Fs(e, t, n, r, i, a) {
			var o = e.memoizedState;
			o === null ? e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
				treeForkCount: a
			} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
		}
		function Is(e, t, n) {
			var r = t.pendingProps, i = r.revealOrder, a = r.tail, o = r.children, s = my.current;
			if ((r = (s & py) !== 0) ? (s = s & fy | py, t.flags |= 128) : s &= fy, ce(my, s, t), s = i ?? "null", i !== "forwards" && i !== "unstable_legacy-backwards" && i !== "together" && i !== "independent" && !mb[s]) if (mb[s] = !0, i == null) console.error("The default for the <SuspenseList revealOrder=\"...\"> prop is changing. To be future compatible you must explictly specify either \"independent\" (the current default), \"together\", \"forwards\" or \"legacy_unstable-backwards\".");
			else if (i === "backwards") console.error("The rendering order of <SuspenseList revealOrder=\"backwards\"> is changing. To be future compatible you must specify revealOrder=\"legacy_unstable-backwards\" instead.");
			else if (typeof i == "string") switch (i.toLowerCase()) {
				case "together":
				case "forwards":
				case "backwards":
				case "independent":
					console.error("\"%s\" is not a valid value for revealOrder on <SuspenseList />. Use lowercase \"%s\" instead.", i, i.toLowerCase());
					break;
				case "forward":
				case "backward":
					console.error("\"%s\" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use \"%ss\" instead.", i, i.toLowerCase());
					break;
				default: console.error("\"%s\" is not a supported revealOrder on <SuspenseList />. Did you mean \"independent\", \"together\", \"forwards\" or \"backwards\"?", i);
			}
			else console.error("%s is not a supported value for revealOrder on <SuspenseList />. Did you mean \"independent\", \"together\", \"forwards\" or \"backwards\"?", i);
			s = a ?? "null", hb[s] || (a == null ? (i === "forwards" || i === "backwards" || i === "unstable_legacy-backwards") && (hb[s] = !0, console.error("The default for the <SuspenseList tail=\"...\"> prop is changing. To be future compatible you must explictly specify either \"visible\" (the current default), \"collapsed\" or \"hidden\".")) : a !== "visible" && a !== "collapsed" && a !== "hidden" ? (hb[s] = !0, console.error("\"%s\" is not a supported value for tail on <SuspenseList />. Did you mean \"visible\", \"collapsed\" or \"hidden\"?", a)) : i !== "forwards" && i !== "backwards" && i !== "unstable_legacy-backwards" && (hb[s] = !0, console.error("<SuspenseList tail=\"%s\" /> is only valid if revealOrder is \"forwards\" or \"backwards\". Did you mean to specify revealOrder=\"forwards\"?", a)));
			a: if ((i === "forwards" || i === "backwards" || i === "unstable_legacy-backwards") && o != null && !1 !== o) if (Jf(o)) {
				for (s = 0; s < o.length; s++) if (!Qi(o[s], s)) break a;
			} else if (s = ie(o), typeof s == "function") {
				if (s = s.call(o)) for (var c = s.next(), l = 0; !c.done; c = s.next()) {
					if (!Qi(c.value, l)) break a;
					l++;
				}
			} else console.error("A single row was passed to a <SuspenseList revealOrder=\"%s\" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?", i);
			if (fs(e, t, o, n), K ? (Rr(), o = Jg) : o = 0, !r && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
				if (e.tag === 13) e.memoizedState !== null && Ps(e, n, t);
				else if (e.tag === 19) Ps(e, n, t);
				else if (e.child !== null) {
					e.child.return = e, e = e.child;
					continue;
				}
				if (e === t) break a;
				for (; e.sibling === null;) {
					if (e.return === null || e.return === t) break a;
					e = e.return;
				}
				e.sibling.return = e.return, e = e.sibling;
			}
			switch (i) {
				case "forwards":
					for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && va(e) === null && (i = n), n = n.sibling;
					n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Fs(t, !1, i, n, a, o);
					break;
				case "backwards":
				case "unstable_legacy-backwards":
					for (n = null, i = t.child, t.child = null; i !== null;) {
						if (e = i.alternate, e !== null && va(e) === null) {
							t.child = i;
							break;
						}
						e = i.sibling, i.sibling = n, n = i, i = e;
					}
					Fs(t, !0, n, null, a, o);
					break;
				case "together":
					Fs(t, !1, null, null, void 0, o);
					break;
				default: t.memoizedState = null;
			}
			return t.child;
		}
		function Ls(e, t, n) {
			if (e !== null && (t.dependencies = e.dependencies), T_ = -1, ux |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
				if (ti(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
			if (e !== null && t.child !== e.child) throw Error("Resuming work not yet implemented.");
			if (t.child !== null) {
				for (e = t.child, n = Cr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Cr(e, e.pendingProps), n.return = t;
				n.sibling = null;
			}
			return t.child;
		}
		function Rs(e, t) {
			return (e.lanes & t) === 0 ? (e = e.dependencies, !!(e !== null && ni(e))) : !0;
		}
		function zs(e, t, n) {
			switch (t.tag) {
				case 3:
					ue(t, t.stateNode.containerInfo), Zr(t, g_, e.memoizedState.cache), Kr();
					break;
				case 27:
				case 5:
					de(t);
					break;
				case 4:
					ue(t, t.stateNode.containerInfo);
					break;
				case 10:
					Zr(t, t.type, t.memoizedProps.value);
					break;
				case 12:
					(n & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
					var r = t.stateNode;
					r.effectDuration = -0, r.passiveEffectDuration = -0;
					break;
				case 31:
					if (t.memoizedState !== null) return t.flags |= 128, ma(t), null;
					break;
				case 13:
					if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (pa(t), e = Ls(e, t, n), e === null ? null : e.sibling) : As(e, t, n) : (pa(t), t.flags |= 128, null);
					pa(t);
					break;
				case 19:
					var i = (e.flags & 128) != 0;
					if (r = (n & t.childLanes) !== 0, r ||= (ti(e, t, n, !1), (n & t.childLanes) !== 0), i) {
						if (r) return Is(e, t, n);
						t.flags |= 128;
					}
					if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ce(my, my.current, t), r) break;
					return null;
				case 22: return t.lanes = 0, gs(e, t, n, t.pendingProps);
				case 24: Zr(t, g_, e.memoizedState.cache);
			}
			return Ls(e, t, n);
		}
		function Bs(e, t, n) {
			if (t._debugNeedsRemount && e !== null) {
				n = Tr(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes), n._debugStack = t._debugStack, n._debugTask = t._debugTask;
				var r = t.return;
				if (r === null) throw Error("Cannot swap the root fiber.");
				if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, n._debugInfo = t._debugInfo, t === r.child) r.child = n;
				else {
					var i = r.child;
					if (i === null) throw Error("Expected parent to have a child.");
					for (; i.sibling !== t;) if (i = i.sibling, i === null) throw Error("Expected to find the previous sibling.");
					i.sibling = n;
				}
				return t = r.deletions, t === null ? (r.deletions = [e], r.flags |= 16) : t.push(e), n.flags |= 2, n;
			}
			if (e !== null) if (e.memoizedProps !== t.pendingProps || t.type !== e.type) cb = !0;
			else {
				if (!Rs(e, n) && !(t.flags & 128)) return cb = !1, zs(e, t, n);
				cb = !!(e.flags & 131072);
			}
			else cb = !1, (r = K) && (Rr(), r = (t.flags & 1048576) != 0), r && (r = t.index, Rr(), Nr(t, Jg, r));
			switch (t.lanes = 0, t.tag) {
				case 16:
					a: if (r = t.pendingProps, e = zi(t.elementType), t.type = e, typeof e == "function") Sr(e) ? (r = ns(e, r), t.tag = 1, t.type = e = gr(e), t = Ts(null, t, e, r, n)) : (t.tag = 0, Ds(t, e), t.type = e = gr(e), t = Cs(null, t, e, r, n));
					else {
						if (e != null) {
							if (i = e.$$typeof, i === zf) {
								t.tag = 11, t.type = e = _r(e), t = ps(null, t, e, r, n);
								break a;
							} else if (i === Hf) {
								t.tag = 14, t = ms(null, t, e, r, n);
								break a;
							}
						}
						throw t = "", typeof e == "object" && e && e.$$typeof === Uf && (t = " Did you wrap a component in React.lazy() more than once?"), n = S(e) || e, Error("Element type is invalid. Received a promise that resolves to: " + n + ". Lazy element type must resolve to a class or function." + t);
					}
					return t;
				case 0: return Cs(e, t, t.type, t.pendingProps, n);
				case 1: return r = t.type, i = ns(r, t.pendingProps), Ts(e, t, r, i, n);
				case 3:
					a: {
						if (ue(t, t.stateNode.containerInfo), e === null) throw Error("Should have a current fiber. This is a bug in React.");
						r = t.pendingProps;
						var a = t.memoizedState;
						i = a.element, ea(e, t), oa(t, r, null, n);
						var o = t.memoizedState;
						if (r = o.cache, Zr(t, g_, r), r !== a.cache && ei(t, [g_], n, !0), aa(), r = o.element, a.isDehydrated) if (a = {
							element: r,
							isDehydrated: !1,
							cache: o.cache
						}, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
							t = Es(e, t, r, n);
							break a;
						} else if (r !== i) {
							i = jr(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t), Jr(i), t = Es(e, t, r, n);
							break a;
						} else {
							switch (e = t.stateNode.containerInfo, e.nodeType) {
								case 9:
									e = e.body;
									break;
								default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
							}
							for (t_ = yd(e.firstChild), e_ = t, K = !0, i_ = null, n_ = !1, r_ = null, a_ = !0, n = $v(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
						}
						else {
							if (Kr(), r === i) {
								t = Ls(e, t, n);
								break a;
							}
							fs(e, t, r, n);
						}
						t = t.child;
					}
					return t;
				case 26: return Ss(e, t), e === null ? (n = Md(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : K || (n = t.type, e = t.pendingProps, r = le(np.current), r = Vu(r).createElement(n), r[qp] = t, r[Jp] = e, Du(r, n, e), $e(r), t.stateNode = r) : t.memoizedState = Md(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
				case 27: return de(t), e === null && K && (r = le(np.current), i = T(), r = t.stateNode = Dd(t.type, t.pendingProps, r, i, !1), n_ || (i = Lu(r, t.type, t.pendingProps, i), i !== null && (zr(t, 0).serverProps = i)), e_ = t, a_ = !0, i = t_, td(t.type) ? (iC = i, t_ = yd(r.firstChild)) : t_ = i), fs(e, t, t.pendingProps.children, n), Ss(e, t), e === null && (t.flags |= 4194304), t.child;
				case 5: return e === null && K && (a = T(), r = qt(t.type, a.ancestorInfo), i = t_, (o = !i) || (o = pd(i, t.type, t.pendingProps, a_), o === null ? a = !1 : (t.stateNode = o, n_ || (a = Lu(o, t.type, t.pendingProps, a), a !== null && (zr(t, 0).serverProps = a)), e_ = t, t_ = yd(o.firstChild), a_ = !1, a = !0), o = !a), o && (r && Vr(t, i), Hr(t))), de(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, r = a.children, Wu(i, a) ? r = null : o !== null && Wu(i, o) && (t.flags |= 32), t.memoizedState !== null && (i = Ca(e, t, Ea, null, null, n), SC._currentValue = i), Ss(e, t), fs(e, t, r, n), t.child;
				case 6: return e === null && K && (n = t.pendingProps, e = T(), r = e.ancestorInfo.current, n = r == null ? !0 : Jt(n, r.tag, e.ancestorInfo.implicitRootScope), e = t_, (r = !e) || (r = md(e, t.pendingProps, a_), r === null ? r = !1 : (t.stateNode = r, e_ = t, t_ = null, r = !0), r = !r), r && (n && Vr(t, e), Hr(t))), null;
				case 13: return As(e, t, n);
				case 4: return ue(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Qv(t, null, r, n) : fs(e, t, r, n), t.child;
				case 11: return ps(e, t, t.type, t.pendingProps, n);
				case 7: return fs(e, t, t.pendingProps, n), t.child;
				case 8: return fs(e, t, t.pendingProps.children, n), t.child;
				case 12: return t.flags |= 4, t.flags |= 2048, r = t.stateNode, r.effectDuration = -0, r.passiveEffectDuration = -0, fs(e, t, t.pendingProps.children, n), t.child;
				case 10: return r = t.type, i = t.pendingProps, a = i.value, "value" in i || _b || (_b = !0, console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")), Zr(t, r, a), fs(e, t, i.children, n), t.child;
				case 9: return i = t.type._context, r = t.pendingProps.children, typeof r != "function" && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), ri(t), i = ii(i), r = Sv(r, i, void 0), t.flags |= 1, fs(e, t, r, n), t.child;
				case 14: return ms(e, t, t.type, t.pendingProps, n);
				case 15: return hs(e, t, t.type, t.pendingProps, n);
				case 19: return Is(e, t, n);
				case 31: return xs(e, t, n);
				case 22: return gs(e, t, n, t.pendingProps);
				case 24: return ri(t), r = ii(g_), e === null ? (i = Ni(), i === null && (i = Kb, a = si(), i.pooledCache = a, ci(a), a !== null && (i.pooledCacheLanes |= n), i = a), t.memoizedState = {
					parent: r,
					cache: i
				}, $i(t), Zr(t, g_, i)) : ((e.lanes & n) !== 0 && (ea(e, t), oa(t, null, null, n), aa()), i = e.memoizedState, a = t.memoizedState, i.parent === r ? (r = a.cache, Zr(t, g_, r), r !== i.cache && ei(t, [g_], n, !0)) : (i = {
					parent: r,
					cache: r
				}, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Zr(t, g_, r))), fs(e, t, t.pendingProps.children, n), t.child;
				case 29: throw t.pendingProps;
			}
			throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
		}
		function Vs(e) {
			e.flags |= 4;
		}
		function Hs(e, t, n, r, i) {
			if ((t = (e.mode & Vg) !== W) && (t = !1), t) {
				if (e.flags |= 16777216, (i & 335544128) === i) if (e.stateNode.complete) e.flags |= 8192;
				else if (ml()) e.flags |= 8192;
				else throw Uv = Hv, Bv;
			} else e.flags &= -16777217;
		}
		function Us(e, t) {
			if (t.type !== "stylesheet" || (t.state.loading & lC) !== aC) e.flags &= -16777217;
			else if (e.flags |= 16777216, !Kd(t)) if (ml()) e.flags |= 8192;
			else throw Uv = Hv, Bv;
		}
		function Ws(e, t) {
			t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : Fe(), e.lanes |= t, mx |= t);
		}
		function Gs(e, t) {
			if (!K) switch (e.tailMode) {
				case "hidden":
					t = e.tail;
					for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
					n === null ? e.tail = null : n.sibling = null;
					break;
				case "collapsed":
					n = e.tail;
					for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
					r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
			}
		}
		function Ks(e) {
			var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
			if (t) if ((e.mode & G) !== W) {
				for (var i = e.selfBaseDuration, a = e.child; a !== null;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 65011712, r |= a.flags & 65011712, i += a.treeBaseDuration, a = a.sibling;
				e.treeBaseDuration = i;
			} else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 65011712, r |= i.flags & 65011712, i.return = e, i = i.sibling;
			else if ((e.mode & G) !== W) {
				i = e.actualDuration, a = e.selfBaseDuration;
				for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, i += o.actualDuration, a += o.treeBaseDuration, o = o.sibling;
				e.actualDuration = i, e.treeBaseDuration = a;
			} else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
			return e.subtreeFlags |= r, e.childLanes = n, t;
		}
		function qs(e, t, n) {
			var r = t.pendingProps;
			switch (Fr(t), t.tag) {
				case 16:
				case 15:
				case 0:
				case 11:
				case 7:
				case 8:
				case 12:
				case 9:
				case 14: return Ks(t), null;
				case 1: return Ks(t), null;
				case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Qr(g_, t), w(t), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Gr(t) ? (Yr(), Vs(t)) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, qr())), Ks(t), null;
				case 26:
					var i = t.type, a = t.memoizedState;
					return e === null ? (Vs(t), a === null ? (Ks(t), Hs(t, i, null, r, n)) : (Ks(t), Us(t, a))) : a ? a === e.memoizedState ? (Ks(t), t.flags &= -16777217) : (Vs(t), Ks(t), Us(t, a)) : (e = e.memoizedProps, e !== r && Vs(t), Ks(t), Hs(t, i, e, r, n)), null;
				case 27:
					if (fe(t), n = le(np.current), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Vs(t);
					else {
						if (!r) {
							if (t.stateNode === null) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
							return Ks(t), null;
						}
						e = T(), Gr(t) ? Ur(t, e) : (e = Dd(i, r, n, e, !0), t.stateNode = e, Vs(t));
					}
					return Ks(t), null;
				case 5:
					if (fe(t), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Vs(t);
					else {
						if (!r) {
							if (t.stateNode === null) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
							return Ks(t), null;
						}
						var o = T();
						if (Gr(t)) Ur(t, o);
						else {
							switch (a = le(np.current), qt(i, o.ancestorInfo), o = o.context, a = Vu(a), o) {
								case KS:
									a = a.createElementNS(Lm, i);
									break;
								case qS:
									a = a.createElementNS(Im, i);
									break;
								default: switch (i) {
									case "svg":
										a = a.createElementNS(Lm, i);
										break;
									case "math":
										a = a.createElementNS(Im, i);
										break;
									case "script":
										a = a.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild);
										break;
									case "select":
										a = typeof r.is == "string" ? a.createElement("select", { is: r.is }) : a.createElement("select"), r.multiple ? a.multiple = !0 : r.size && (a.size = r.size);
										break;
									default: a = typeof r.is == "string" ? a.createElement(i, { is: r.is }) : a.createElement(i), i.indexOf("-") === -1 && (i !== i.toLowerCase() && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", i), Object.prototype.toString.call(a) !== "[object HTMLUnknownElement]" || vp.call(XS, i) || (XS[i] = !0, console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", i)));
								}
							}
							a[qp] = t, a[Jp] = r;
							a: for (o = t.child; o !== null;) {
								if (o.tag === 5 || o.tag === 6) a.appendChild(o.stateNode);
								else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
									o.child.return = o, o = o.child;
									continue;
								}
								if (o === t) break a;
								for (; o.sibling === null;) {
									if (o.return === null || o.return === t) break a;
									o = o.return;
								}
								o.sibling.return = o.return, o = o.sibling;
							}
							t.stateNode = a;
							a: switch (Du(a, i, r), i) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									r = !!r.autoFocus;
									break a;
								case "img":
									r = !0;
									break a;
								default: r = !1;
							}
							r && Vs(t);
						}
					}
					return Ks(t), Hs(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
				case 6:
					if (e && t.stateNode != null) e.memoizedProps !== r && Vs(t);
					else {
						if (typeof r != "string" && t.stateNode === null) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
						if (e = le(np.current), n = T(), Gr(t)) {
							if (e = t.stateNode, n = t.memoizedProps, i = !n_, r = null, a = e_, a !== null) switch (a.tag) {
								case 3:
									i && (i = xd(e, n, r), i !== null && (zr(t, 0).serverProps = i));
									break;
								case 27:
								case 5: r = a.memoizedProps, i && (i = xd(e, n, r), i !== null && (zr(t, 0).serverProps = i));
							}
							e[qp] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || wu(e.nodeValue, n)), e || Hr(t, !0);
						} else i = n.ancestorInfo.current, i != null && Jt(r, i.tag, n.ancestorInfo.implicitRootScope), e = Vu(e).createTextNode(r), e[qp] = t, t.stateNode = e;
					}
					return Ks(t), null;
				case 31:
					if (n = t.memoizedState, e === null || e.memoizedState !== null) {
						if (r = Gr(t), n !== null) {
							if (e === null) {
								if (!r) throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
								if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");
								e[qp] = t, Ks(t), (t.mode & G) !== W && n !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
							} else Yr(), Kr(), !(t.flags & 128) && (n = t.memoizedState = null), t.flags |= 4, Ks(t), (t.mode & G) !== W && n !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
							e = !1;
						} else n = qr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
						if (!e) return t.flags & 256 ? (_a(t), t) : (_a(t), null);
						if (t.flags & 128) throw Error("Client rendering an Activity suspended it again. This is a bug in React.");
					}
					return Ks(t), null;
				case 13:
					if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
						if (i = r, a = Gr(t), i !== null && i.dehydrated !== null) {
							if (e === null) {
								if (!a) throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
								if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
								a[qp] = t, Ks(t), (t.mode & G) !== W && i !== null && (i = t.child, i !== null && (t.treeBaseDuration -= i.treeBaseDuration));
							} else Yr(), Kr(), !(t.flags & 128) && (i = t.memoizedState = null), t.flags |= 4, Ks(t), (t.mode & G) !== W && i !== null && (i = t.child, i !== null && (t.treeBaseDuration -= i.treeBaseDuration));
							i = !1;
						} else i = qr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
						if (!i) return t.flags & 256 ? (_a(t), t) : (_a(t), null);
					}
					return _a(t), t.flags & 128 ? (t.lanes = n, (t.mode & G) !== W && ki(t), t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, i = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (i = r.alternate.memoizedState.cachePool.pool), a = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (a = r.memoizedState.cachePool.pool), a !== i && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Ws(t, t.updateQueue), Ks(t), (t.mode & G) !== W && n && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
				case 4: return w(t), e === null && du(t.stateNode.containerInfo), Ks(t), null;
				case 10: return Qr(t.type, t), Ks(t), null;
				case 19:
					if (se(my, t), r = t.memoizedState, r === null) return Ks(t), null;
					if (i = (t.flags & 128) != 0, a = r.rendering, a === null) if (i) Gs(r, !1);
					else {
						if (lx !== Rb || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (a = va(e), a !== null) {
								for (t.flags |= 128, Gs(r, !1), e = a.updateQueue, t.updateQueue = e, Ws(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) wr(n, e), n = n.sibling;
								return ce(my, my.current & fy | py, t), K && Mr(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Cp() > xx && (t.flags |= 128, i = !0, Gs(r, !1), t.lanes = 4194304);
					}
					else {
						if (!i) if (e = va(a), e !== null) {
							if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Ws(t, e), Gs(r, !0), r.tail === null && r.tailMode === "hidden" && !a.alternate && !K) return Ks(t), null;
						} else 2 * Cp() - r.renderingStartTime > xx && n !== 536870912 && (t.flags |= 128, i = !0, Gs(r, !1), t.lanes = 4194304);
						r.isBackwards ? (a.sibling = t.child, t.child = a) : (e = r.last, e === null ? t.child = a : e.sibling = a, r.last = a);
					}
					return r.tail === null ? (Ks(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Cp(), e.sibling = null, n = my.current, n = i ? n & fy | py : n & fy, ce(my, n, t), K && Mr(t, r.treeForkCount), e);
				case 22:
				case 23: return _a(t), fa(t), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (Ks(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ks(t), n = t.updateQueue, n !== null && Ws(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && se(uv, t), null;
				case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Qr(g_, t), Ks(t), null;
				case 25: return null;
				case 30: return null;
			}
			throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
		}
		function Js(e, t) {
			switch (Fr(t), t.tag) {
				case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & G) !== W && ki(t), t) : null;
				case 3: return Qr(g_, t), w(t), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
				case 26:
				case 27:
				case 5: return fe(t), null;
				case 31:
					if (t.memoizedState !== null) {
						if (_a(t), t.alternate === null) throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
						Kr();
					}
					return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & G) !== W && ki(t), t) : null;
				case 13:
					if (_a(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
						if (t.alternate === null) throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
						Kr();
					}
					return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & G) !== W && ki(t), t) : null;
				case 19: return se(my, t), null;
				case 4: return w(t), null;
				case 10: return Qr(t.type, t), null;
				case 22:
				case 23: return _a(t), fa(t), e !== null && se(uv, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & G) !== W && ki(t), t) : null;
				case 24: return Qr(g_, t), null;
				case 25: return null;
				default: return null;
			}
		}
		function Ys(e, t) {
			switch (Fr(t), t.tag) {
				case 3:
					Qr(g_, t), w(t);
					break;
				case 26:
				case 27:
				case 5:
					fe(t);
					break;
				case 4:
					w(t);
					break;
				case 31:
					t.memoizedState !== null && _a(t);
					break;
				case 13:
					_a(t);
					break;
				case 19:
					se(my, t);
					break;
				case 10:
					Qr(t.type, t);
					break;
				case 22:
				case 23:
					_a(t), fa(t), e !== null && se(uv, t);
					break;
				case 24: Qr(g_, t);
			}
		}
		function Xs(e) {
			return (e.mode & G) !== W;
		}
		function Zs(e, t) {
			Xs(e) ? (Oi(), $s(t, e), Ei()) : $s(t, e);
		}
		function Qs(e, t, n) {
			Xs(e) ? (Oi(), ec(n, e, t), Ei()) : ec(n, e, t);
		}
		function $s(e, t) {
			try {
				var n = t.updateQueue, r = n === null ? null : n.lastEffect;
				if (r !== null) {
					var i = r.next;
					n = i;
					do {
						if ((n.tag & e) === e && (r = void 0, (e & _y) !== hy && (tS = !0), r = D(t, Pv, n), (e & _y) !== hy && (tS = !1), r !== void 0 && typeof r != "function")) {
							var a = void 0;
							a = (n.tag & vy) === 0 ? (n.tag & _y) === 0 ? "useEffect" : "useInsertionEffect" : "useLayoutEffect";
							var o = void 0;
							o = r === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof r.then == "function" ? "\n\nIt looks like you wrote " + a + "(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\n" + a + "(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching" : " You returned: " + r, D(t, function(e, t) {
								console.error("%s must not return anything besides a function, which is used for clean-up.%s", e, t);
							}, a, o);
						}
						n = n.next;
					} while (n !== i);
				}
			} catch (e) {
				I(t, t.return, e);
			}
		}
		function ec(e, t, n) {
			try {
				var r = t.updateQueue, i = r === null ? null : r.lastEffect;
				if (i !== null) {
					var a = i.next;
					r = a;
					do {
						if ((r.tag & e) === e) {
							var o = r.inst, s = o.destroy;
							s !== void 0 && (o.destroy = void 0, (e & _y) !== hy && (tS = !0), i = t, D(i, Iv, i, n, s), (e & _y) !== hy && (tS = !1));
						}
						r = r.next;
					} while (r !== a);
				}
			} catch (e) {
				I(t, t.return, e);
			}
		}
		function tc(e, t) {
			Xs(e) ? (Oi(), $s(t, e), Ei()) : $s(t, e);
		}
		function nc(e, t, n) {
			Xs(e) ? (Oi(), ec(n, e, t), Ei()) : ec(n, e, t);
		}
		function rc(e) {
			var t = e.updateQueue;
			if (t !== null) {
				var n = e.stateNode;
				e.type.defaultProps || "ref" in e.memoizedProps || pb || (n.props !== e.memoizedProps && console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", C(e) || "instance"), n.state !== e.memoizedState && console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", C(e) || "instance"));
				try {
					D(e, la, t, n);
				} catch (t) {
					I(e, e.return, t);
				}
			}
		}
		function ic(e, t, n) {
			return e.getSnapshotBeforeUpdate(t, n);
		}
		function ac(e, t) {
			var n = t.memoizedProps, r = t.memoizedState;
			t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || pb || (t.props !== e.memoizedProps && console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", C(e) || "instance"), t.state !== e.memoizedState && console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", C(e) || "instance"));
			try {
				var i = ns(e.type, n), a = D(e, ic, t, i, r);
				n = vb, a !== void 0 || n.has(e.type) || (n.add(e.type), D(e, function() {
					console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", C(e));
				})), t.__reactInternalSnapshotBeforeUpdate = a;
			} catch (t) {
				I(e, e.return, t);
			}
		}
		function oc(e, t, n) {
			n.props = ns(e.type, e.memoizedProps), n.state = e.memoizedState, Xs(e) ? (Oi(), D(e, Mv, e, t, n), Ei()) : D(e, Mv, e, t, n);
		}
		function sc(e) {
			var t = e.ref;
			if (t !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var n = e.stateNode;
						break;
					case 30:
						n = e.stateNode;
						break;
					default: n = e.stateNode;
				}
				if (typeof t == "function") if (Xs(e)) try {
					Oi(), e.refCleanup = t(n);
				} finally {
					Ei();
				}
				else e.refCleanup = t(n);
				else typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", C(e)), t.current = n;
			}
		}
		function cc(e, t) {
			try {
				D(e, sc, e);
			} catch (n) {
				I(e, t, n);
			}
		}
		function lc(e, t) {
			var n = e.ref, r = e.refCleanup;
			if (n !== null) if (typeof r == "function") try {
				if (Xs(e)) try {
					Oi(), D(e, r);
				} finally {
					Ei(e);
				}
				else D(e, r);
			} catch (n) {
				I(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				if (Xs(e)) try {
					Oi(), D(e, n, null);
				} finally {
					Ei(e);
				}
				else D(e, n, null);
			} catch (n) {
				I(e, t, n);
			}
			else n.current = null;
		}
		function uc(e, t, n, r) {
			var i = e.memoizedProps, a = i.id, o = i.onCommit;
			i = i.onRender, t = t === null ? "mount" : "update", rv && (t = "nested-update"), typeof i == "function" && i(a, t, e.actualDuration, e.treeBaseDuration, e.actualStartTime, n), typeof o == "function" && o(a, t, r, n);
		}
		function dc(e, t, n, r) {
			var i = e.memoizedProps;
			e = i.id, i = i.onPostCommit, t = t === null ? "mount" : "update", rv && (t = "nested-update"), typeof i == "function" && i(e, t, r, n);
		}
		function fc(e) {
			var t = e.type, n = e.memoizedProps, r = e.stateNode;
			try {
				D(e, Yu, r, t, n, e);
			} catch (t) {
				I(e, e.return, t);
			}
		}
		function pc(e, t, n) {
			try {
				D(e, Zu, e.stateNode, e.type, n, t, e);
			} catch (t) {
				I(e, e.return, t);
			}
		}
		function mc(e) {
			return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && td(e.type) || e.tag === 4;
		}
		function hc(e) {
			a: for (;;) {
				for (; e.sibling === null;) {
					if (e.return === null || mc(e.return)) return null;
					e = e.return;
				}
				for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
					if (e.tag === 27 && td(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
					e.child.return = e, e = e.child;
				}
				if (!(e.flags & 2)) return e.stateNode;
			}
		}
		function gc(e, t, n) {
			var r = e.tag;
			if (r === 5 || r === 6) e = e.stateNode, t ? (ed(n), (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t)) : (ed(n), t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = sn));
			else if (r !== 4 && (r === 27 && td(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (gc(e, t, n), e = e.sibling; e !== null;) gc(e, t, n), e = e.sibling;
		}
		function _c(e, t, n) {
			var r = e.tag;
			if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
			else if (r !== 4 && (r === 27 && td(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (_c(e, t, n), e = e.sibling; e !== null;) _c(e, t, n), e = e.sibling;
		}
		function vc(e) {
			for (var t, n = e.return; n !== null;) {
				if (mc(n)) {
					t = n;
					break;
				}
				n = n.return;
			}
			if (t == null) throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
			switch (t.tag) {
				case 27:
					t = t.stateNode, n = hc(e), _c(e, n, t);
					break;
				case 5:
					n = t.stateNode, t.flags & 32 && (Qu(n), t.flags &= -33), t = hc(e), _c(e, t, n);
					break;
				case 3:
				case 4:
					t = t.stateNode.containerInfo, n = hc(e), gc(e, n, t);
					break;
				default: throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
			}
		}
		function yc(e) {
			var t = e.stateNode, n = e.memoizedProps;
			try {
				D(e, Od, e.type, n, t, e);
			} catch (t) {
				I(e, e.return, t);
			}
		}
		function bc(e, t) {
			return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) == 0 : !1;
		}
		function xc(e, t) {
			if (e = e.containerInfo, JS = zC, e = Bn(e), Vn(e)) {
				if ("selectionStart" in e) var n = {
					start: e.selectionStart,
					end: e.selectionEnd
				};
				else a: {
					n = (n = e.ownerDocument) && n.defaultView || window;
					var r = n.getSelection && n.getSelection();
					if (r && r.rangeCount !== 0) {
						n = r.anchorNode;
						var i = r.anchorOffset, a = r.focusNode;
						r = r.focusOffset;
						try {
							n.nodeType, a.nodeType;
						} catch {
							n = null;
							break a;
						}
						var o = 0, s = -1, c = -1, l = 0, u = 0, d = e, f = null;
						b: for (;;) {
							for (var p; d !== n || i !== 0 && d.nodeType !== 3 || (s = o + i), d !== a || r !== 0 && d.nodeType !== 3 || (c = o + r), d.nodeType === 3 && (o += d.nodeValue.length), (p = d.firstChild) !== null;) f = d, d = p;
							for (;;) {
								if (d === e) break b;
								if (f === n && ++l === i && (s = o), f === a && ++u === r && (c = o), (p = d.nextSibling) !== null) break;
								d = f, f = d.parentNode;
							}
							d = p;
						}
						n = s === -1 || c === -1 ? null : {
							start: s,
							end: c
						};
					} else n = null;
				}
				n ||= {
					start: 0,
					end: 0
				};
			} else n = null;
			for (YS = {
				focusedElem: e,
				selectionRange: n
			}, zC = !1, Cb = t; Cb !== null;) if (t = Cb, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, Cb = e;
			else for (; Cb !== null;) {
				switch (e = t = Cb, n = e.alternate, i = e.flags, e.tag) {
					case 0:
						if (i & 4 && (e = e.updateQueue, e = e === null ? null : e.events, e !== null)) for (n = 0; n < e.length; n++) i = e[n], i.ref.impl = i.nextImpl;
						break;
					case 11:
					case 15: break;
					case 1:
						i & 1024 && n !== null && ac(e, n);
						break;
					case 3:
						if (i & 1024) {
							if (e = e.stateNode.containerInfo, n = e.nodeType, n === 9) fd(e);
							else if (n === 1) switch (e.nodeName) {
								case "HEAD":
								case "HTML":
								case "BODY":
									fd(e);
									break;
								default: e.textContent = "";
							}
						}
						break;
					case 5:
					case 26:
					case 27:
					case 6:
					case 4:
					case 17: break;
					default: if (i & 1024) throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
				}
				if (e = t.sibling, e !== null) {
					e.return = t.return, Cb = e;
					break;
				}
				Cb = t.return;
			}
		}
		function Sc(e, t, n) {
			var r = gi(), i = yi(), a = xi(), o = Si(), s = n.flags;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Pc(e, n), s & 4 && Zs(n, vy | gy);
					break;
				case 1:
					if (Pc(e, n), s & 4) if (e = n.stateNode, t === null) n.type.defaultProps || "ref" in n.memoizedProps || pb || (e.props !== n.memoizedProps && console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", C(n) || "instance"), e.state !== n.memoizedState && console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", C(n) || "instance")), Xs(n) ? (Oi(), D(n, Ev, n, e), Ei()) : D(n, Ev, n, e);
					else {
						var c = ns(n.type, t.memoizedProps);
						t = t.memoizedState, n.type.defaultProps || "ref" in n.memoizedProps || pb || (e.props !== n.memoizedProps && console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", C(n) || "instance"), e.state !== n.memoizedState && console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", C(n) || "instance")), Xs(n) ? (Oi(), D(n, Ov, n, e, c, t, e.__reactInternalSnapshotBeforeUpdate), Ei()) : D(n, Ov, n, e, c, t, e.__reactInternalSnapshotBeforeUpdate);
					}
					s & 64 && rc(n), s & 512 && cc(n, n.return);
					break;
				case 3:
					if (t = fi(), Pc(e, n), s & 64 && (s = n.updateQueue, s !== null)) {
						if (c = null, n.child !== null) switch (n.child.tag) {
							case 27:
							case 5:
								c = n.child.stateNode;
								break;
							case 1: c = n.child.stateNode;
						}
						try {
							D(n, la, s, c);
						} catch (e) {
							I(n, n.return, e);
						}
					}
					e.effectDuration += pi(t);
					break;
				case 27: t === null && s & 4 && yc(n);
				case 26:
				case 5:
					if (Pc(e, n), t === null) {
						if (s & 4) fc(n);
						else if (s & 64) {
							e = n.type, t = n.memoizedProps, c = n.stateNode;
							try {
								D(n, Xu, c, e, t, n);
							} catch (e) {
								I(n, n.return, e);
							}
						}
					}
					s & 512 && cc(n, n.return);
					break;
				case 12:
					if (s & 4) {
						s = fi(), Pc(e, n), e = n.stateNode, e.effectDuration += mi(s);
						try {
							D(n, uc, n, t, S_, e.effectDuration);
						} catch (e) {
							I(n, n.return, e);
						}
					} else Pc(e, n);
					break;
				case 31:
					Pc(e, n), s & 4 && Ec(e, n);
					break;
				case 13:
					Pc(e, n), s & 4 && Dc(e, n), s & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (s = Vl.bind(null, n), vd(e, s))));
					break;
				case 22:
					if (s = n.memoizedState !== null || yb, !s) {
						t = t !== null && t.memoizedState !== null || bb, c = yb;
						var l = bb;
						yb = s, (bb = t) && !l ? (Rc(e, n, (n.subtreeFlags & 8772) != 0), (n.mode & G) !== W && 0 <= q && 0 <= J && .05 < J - q && Qn(n, q, J)) : Pc(e, n), yb = c, bb = l;
					}
					break;
				case 30: break;
				default: Pc(e, n);
			}
			(n.mode & G) !== W && 0 <= q && 0 <= J && ((k_ || .05 < D_) && tr(n, q, J, D_, O_), n.alternate === null && n.return !== null && n.return.alternate !== null && .05 < J - q && (bc(n.return.alternate, n.return) || Zn(n, q, J, "Mount"))), _i(r), bi(i), O_ = a, k_ = o;
		}
		function Cc(e) {
			var t = e.alternate;
			t !== null && (e.alternate = null, Cc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Je(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
		}
		function wc(e, t, n) {
			for (n = n.child; n !== null;) Tc(e, t, n), n = n.sibling;
		}
		function Tc(e, t, n) {
			if (Np && typeof Np.onCommitFiberUnmount == "function") try {
				Np.onCommitFiberUnmount(Mp, n);
			} catch (e) {
				Pp || (Pp = !0, console.error("React instrumentation encountered an error: %o", e));
			}
			var r = gi(), i = yi(), a = xi(), o = Si();
			switch (n.tag) {
				case 26:
					bb || lc(n, t), wc(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (e = n.stateNode, e.parentNode.removeChild(e));
					break;
				case 27:
					bb || lc(n, t);
					var s = Eb, c = Db;
					td(n.type) && (Eb = n.stateNode, Db = !1), wc(e, t, n), D(n, kd, n.stateNode), Eb = s, Db = c;
					break;
				case 5: bb || lc(n, t);
				case 6:
					if (s = Eb, c = Db, Eb = null, wc(e, t, n), Eb = s, Db = c, Eb !== null) if (Db) try {
						D(n, rd, Eb, n.stateNode);
					} catch (e) {
						I(n, t, e);
					}
					else try {
						D(n, nd, Eb, n.stateNode);
					} catch (e) {
						I(n, t, e);
					}
					break;
				case 18:
					Eb !== null && (Db ? (e = Eb, id(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Cf(e)) : id(Eb, n.stateNode));
					break;
				case 4:
					s = Eb, c = Db, Eb = n.stateNode.containerInfo, Db = !0, wc(e, t, n), Eb = s, Db = c;
					break;
				case 0:
				case 11:
				case 14:
				case 15:
					ec(_y, n, t), bb || Qs(n, t, vy), wc(e, t, n);
					break;
				case 1:
					bb || (lc(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function" && oc(n, t, s)), wc(e, t, n);
					break;
				case 21:
					wc(e, t, n);
					break;
				case 22:
					bb = (s = bb) || n.memoizedState !== null, wc(e, t, n), bb = s;
					break;
				default: wc(e, t, n);
			}
			(n.mode & G) !== W && 0 <= q && 0 <= J && (k_ || .05 < D_) && tr(n, q, J, D_, O_), _i(r), bi(i), O_ = a, k_ = o;
		}
		function Ec(e, t) {
			if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
				e = e.dehydrated;
				try {
					D(t, Td, e);
				} catch (e) {
					I(t, t.return, e);
				}
			}
		}
		function Dc(e, t) {
			if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
				D(t, Ed, e);
			} catch (e) {
				I(t, t.return, e);
			}
		}
		function Oc(e) {
			switch (e.tag) {
				case 31:
				case 13:
				case 19:
					var t = e.stateNode;
					return t === null && (t = e.stateNode = new Sb()), t;
				case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Sb()), t;
				default: throw Error("Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React.");
			}
		}
		function kc(e, t) {
			var n = Oc(e);
			t.forEach(function(t) {
				if (!n.has(t)) {
					if (n.add(t), Fp) if (wb !== null && Tb !== null) ql(Tb, wb);
					else throw Error("Expected finished root and lanes to be set. This is a bug in React.");
					var r = Hl.bind(null, e, t);
					t.then(r, r);
				}
			});
		}
		function Ac(e, t) {
			var n = t.deletions;
			if (n !== null) for (var r = 0; r < n.length; r++) {
				var i = e, a = t, o = n[r], s = gi(), c = a;
				a: for (; c !== null;) {
					switch (c.tag) {
						case 27:
							if (td(c.type)) {
								Eb = c.stateNode, Db = !1;
								break a;
							}
							break;
						case 5:
							Eb = c.stateNode, Db = !1;
							break a;
						case 3:
						case 4:
							Eb = c.stateNode.containerInfo, Db = !0;
							break a;
					}
					c = c.return;
				}
				if (Eb === null) throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
				Tc(i, a, o), Eb = null, Db = !1, (o.mode & G) !== W && 0 <= q && 0 <= J && .05 < J - q && Zn(o, q, J, "Unmount"), _i(s), i = o, a = i.alternate, a !== null && (a.return = null), i.return = null;
			}
			if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) jc(t, e), t = t.sibling;
		}
		function jc(e, t) {
			var n = gi(), r = yi(), i = xi(), a = Si(), o = e.alternate, s = e.flags;
			switch (e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Ac(t, e), Mc(e), s & 4 && (ec(_y | gy, e, e.return), $s(_y | gy, e), Qs(e, e.return, vy | gy));
					break;
				case 1:
					if (Ac(t, e), Mc(e), s & 512 && (bb || o === null || lc(o, o.return)), s & 64 && yb && (s = e.updateQueue, s !== null && (o = s.callbacks, o !== null))) {
						var c = s.shared.hiddenCallbacks;
						s.shared.hiddenCallbacks = c === null ? o : c.concat(o);
					}
					break;
				case 26:
					if (c = Ob, Ac(t, e), Mc(e), s & 512 && (bb || o === null || lc(o, o.return)), s & 4) {
						var l = o === null ? null : o.memoizedState;
						if (s = e.memoizedState, o === null) if (s === null) if (e.stateNode === null) {
							a: {
								s = e.type, o = e.memoizedProps, c = c.ownerDocument || c;
								b: switch (s) {
									case "title":
										l = c.getElementsByTagName("title")[0], (!l || l[em] || l[qp] || l.namespaceURI === Lm || l.hasAttribute("itemprop")) && (l = c.createElement(s), c.head.insertBefore(l, c.querySelector("head > title"))), Du(l, s, o), l[qp] = e, $e(l), s = l;
										break a;
									case "link":
										var u = Ud("link", "href", c).get(s + (o.href || ""));
										if (u) {
											for (var d = 0; d < u.length; d++) if (l = u[d], l.getAttribute("href") === (o.href == null || o.href === "" ? null : o.href) && l.getAttribute("rel") === (o.rel == null ? null : o.rel) && l.getAttribute("title") === (o.title == null ? null : o.title) && l.getAttribute("crossorigin") === (o.crossOrigin == null ? null : o.crossOrigin)) {
												u.splice(d, 1);
												break b;
											}
										}
										l = c.createElement(s), Du(l, s, o), c.head.appendChild(l);
										break;
									case "meta":
										if (u = Ud("meta", "content", c).get(s + (o.content || ""))) {
											for (d = 0; d < u.length; d++) if (l = u[d], O(o.content, "content"), l.getAttribute("content") === (o.content == null ? null : "" + o.content) && l.getAttribute("name") === (o.name == null ? null : o.name) && l.getAttribute("property") === (o.property == null ? null : o.property) && l.getAttribute("http-equiv") === (o.httpEquiv == null ? null : o.httpEquiv) && l.getAttribute("charset") === (o.charSet == null ? null : o.charSet)) {
												u.splice(d, 1);
												break b;
											}
										}
										l = c.createElement(s), Du(l, s, o), c.head.appendChild(l);
										break;
									default: throw Error("getNodesForType encountered a type it did not expect: \"" + s + "\". This is a bug in React.");
								}
								l[qp] = e, $e(l), s = l;
							}
							e.stateNode = s;
						} else Wd(c, e.type, e.stateNode);
						else e.stateNode = zd(c, s, e.memoizedProps);
						else l === s ? s === null && e.stateNode !== null && pc(e, e.memoizedProps, o.memoizedProps) : (l === null ? o.stateNode !== null && (o = o.stateNode, o.parentNode.removeChild(o)) : l.count--, s === null ? Wd(c, e.type, e.stateNode) : zd(c, s, e.memoizedProps));
					}
					break;
				case 27:
					Ac(t, e), Mc(e), s & 512 && (bb || o === null || lc(o, o.return)), o !== null && s & 4 && pc(e, e.memoizedProps, o.memoizedProps);
					break;
				case 5:
					if (Ac(t, e), Mc(e), s & 512 && (bb || o === null || lc(o, o.return)), e.flags & 32) {
						c = e.stateNode;
						try {
							D(e, Qu, c);
						} catch (t) {
							I(e, e.return, t);
						}
					}
					s & 4 && e.stateNode != null && (c = e.memoizedProps, pc(e, c, o === null ? c : o.memoizedProps)), s & 1024 && (xb = !0, e.type !== "form" && console.error("Unexpected host component type. Expected a form. This is a bug in React."));
					break;
				case 6:
					if (Ac(t, e), Mc(e), s & 4) {
						if (e.stateNode === null) throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
						s = e.memoizedProps, o = o === null ? s : o.memoizedProps, c = e.stateNode;
						try {
							D(e, $u, c, o, s);
						} catch (t) {
							I(e, e.return, t);
						}
					}
					break;
				case 3:
					if (c = fi(), mC = null, l = Ob, Ob = Ad(t.containerInfo), Ac(t, e), Ob = l, Mc(e), s & 4 && o !== null && o.memoizedState.isDehydrated) try {
						D(e, wd, t.containerInfo);
					} catch (t) {
						I(e, e.return, t);
					}
					xb && (xb = !1, Nc(e)), t.effectDuration += pi(c);
					break;
				case 4:
					s = Ob, Ob = Ad(e.stateNode.containerInfo), Ac(t, e), Mc(e), Ob = s;
					break;
				case 12:
					s = fi(), Ac(t, e), Mc(e), e.stateNode.effectDuration += mi(s);
					break;
				case 31:
					Ac(t, e), Mc(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, kc(e, s)));
					break;
				case 13:
					Ac(t, e), Mc(e), e.child.flags & 8192 && e.memoizedState !== null != (o !== null && o.memoizedState !== null) && (vx = Cp()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, kc(e, s)));
					break;
				case 22:
					c = e.memoizedState !== null;
					var f = o !== null && o.memoizedState !== null, p = yb, m = bb;
					if (yb = p || c, bb = m || f, Ac(t, e), bb = m, yb = p, f && !c && !p && !m && (e.mode & G) !== W && 0 <= q && 0 <= J && .05 < J - q && Qn(e, q, J), Mc(e), s & 8192) a: for (t = e.stateNode, t._visibility = c ? t._visibility & ~Ag : t._visibility | Ag, !c || o === null || f || yb || bb || (Ic(e), (e.mode & G) !== W && 0 <= q && 0 <= J && .05 < J - q && Zn(e, q, J, "Disconnect")), o = null, t = e;;) {
						if (t.tag === 5 || t.tag === 26) {
							if (o === null) {
								f = o = t;
								try {
									l = f.stateNode, c ? D(f, sd, l) : D(f, ud, f.stateNode, f.memoizedProps);
								} catch (e) {
									I(f, f.return, e);
								}
							}
						} else if (t.tag === 6) {
							if (o === null) {
								f = t;
								try {
									u = f.stateNode, c ? D(f, cd, u) : D(f, dd, u, f.memoizedProps);
								} catch (e) {
									I(f, f.return, e);
								}
							}
						} else if (t.tag === 18) {
							if (o === null) {
								f = t;
								try {
									d = f.stateNode, c ? D(f, od, d) : D(f, ld, f.stateNode);
								} catch (e) {
									I(f, f.return, e);
								}
							}
						} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
							t.child.return = t, t = t.child;
							continue;
						}
						if (t === e) break a;
						for (; t.sibling === null;) {
							if (t.return === null || t.return === e) break a;
							o === t && (o = null), t = t.return;
						}
						o === t && (o = null), t.sibling.return = t.return, t = t.sibling;
					}
					s & 4 && (s = e.updateQueue, s !== null && (o = s.retryQueue, o !== null && (s.retryQueue = null, kc(e, o))));
					break;
				case 19:
					Ac(t, e), Mc(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, kc(e, s)));
					break;
				case 30: break;
				case 21: break;
				default: Ac(t, e), Mc(e);
			}
			(e.mode & G) !== W && 0 <= q && 0 <= J && ((k_ || .05 < D_) && tr(e, q, J, D_, O_), e.alternate === null && e.return !== null && e.return.alternate !== null && .05 < J - q && (bc(e.return.alternate, e.return) || Zn(e, q, J, "Mount"))), _i(n), bi(r), O_ = i, k_ = a;
		}
		function Mc(e) {
			var t = e.flags;
			if (t & 2) {
				try {
					D(e, vc, e);
				} catch (t) {
					I(e, e.return, t);
				}
				e.flags &= -3;
			}
			t & 4096 && (e.flags &= -4097);
		}
		function Nc(e) {
			if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
				var t = e;
				Nc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
			}
		}
		function Pc(e, t) {
			if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) Sc(e, t.alternate, t), t = t.sibling;
		}
		function Fc(e) {
			var t = gi(), n = yi(), r = xi(), i = Si();
			switch (e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Qs(e, e.return, vy), Ic(e);
					break;
				case 1:
					lc(e, e.return);
					var a = e.stateNode;
					typeof a.componentWillUnmount == "function" && oc(e, e.return, a), Ic(e);
					break;
				case 27: D(e, kd, e.stateNode);
				case 26:
				case 5:
					lc(e, e.return), Ic(e);
					break;
				case 22:
					e.memoizedState === null && Ic(e);
					break;
				case 30:
					Ic(e);
					break;
				default: Ic(e);
			}
			(e.mode & G) !== W && 0 <= q && 0 <= J && (k_ || .05 < D_) && tr(e, q, J, D_, O_), _i(t), bi(n), O_ = r, k_ = i;
		}
		function Ic(e) {
			for (e = e.child; e !== null;) Fc(e), e = e.sibling;
		}
		function Lc(e, t, n, r) {
			var i = gi(), a = yi(), o = xi(), s = Si(), c = n.flags;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Rc(e, n, r), Zs(n, vy);
					break;
				case 1:
					if (Rc(e, n, r), t = n.stateNode, typeof t.componentDidMount == "function" && D(n, Ev, n, t), t = n.updateQueue, t !== null) {
						e = n.stateNode;
						try {
							D(n, ca, t, e);
						} catch (e) {
							I(n, n.return, e);
						}
					}
					r && c & 64 && rc(n), cc(n, n.return);
					break;
				case 27: yc(n);
				case 26:
				case 5:
					Rc(e, n, r), r && t === null && c & 4 && fc(n), cc(n, n.return);
					break;
				case 12:
					if (r && c & 4) {
						c = fi(), Rc(e, n, r), r = n.stateNode, r.effectDuration += mi(c);
						try {
							D(n, uc, n, t, S_, r.effectDuration);
						} catch (e) {
							I(n, n.return, e);
						}
					} else Rc(e, n, r);
					break;
				case 31:
					Rc(e, n, r), r && c & 4 && Ec(e, n);
					break;
				case 13:
					Rc(e, n, r), r && c & 4 && Dc(e, n);
					break;
				case 22:
					n.memoizedState === null && Rc(e, n, r), cc(n, n.return);
					break;
				case 30: break;
				default: Rc(e, n, r);
			}
			(n.mode & G) !== W && 0 <= q && 0 <= J && (k_ || .05 < D_) && tr(n, q, J, D_, O_), _i(i), bi(a), O_ = o, k_ = s;
		}
		function Rc(e, t, n) {
			for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) Lc(e, t.alternate, t, n), t = t.sibling;
		}
		function zc(e, t) {
			var n = null;
			e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && ci(e), n != null && li(n));
		}
		function Bc(e, t) {
			e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (ci(t), e != null && li(e));
		}
		function Vc(e, t, n, r, i) {
			if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)) for (t = t.child; t !== null;) {
				var a = t.sibling;
				Hc(e, t, n, r, a === null ? i : a.actualStartTime), t = a;
			}
		}
		function Hc(e, t, n, r, i) {
			var a = gi(), o = yi(), s = xi(), c = Si(), l = wg, u = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					(t.mode & G) !== W && 0 < t.actualStartTime && t.flags & 1 && $n(t, t.actualStartTime, i, kb, n), Vc(e, t, n, r, i), u & 2048 && tc(t, yy | gy);
					break;
				case 1:
					(t.mode & G) !== W && 0 < t.actualStartTime && (t.flags & 128 ? er(t, t.actualStartTime, i, []) : t.flags & 1 && $n(t, t.actualStartTime, i, kb, n)), Vc(e, t, n, r, i);
					break;
				case 3:
					var d = fi(), f = kb;
					kb = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) == 0, Vc(e, t, n, r, i), kb = f, u & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), r = t.memoizedState.cache, r !== n && (ci(r), n != null && li(n))), e.passiveEffectDuration += pi(d);
					break;
				case 12:
					if (u & 2048) {
						u = fi(), Vc(e, t, n, r, i), e = t.stateNode, e.passiveEffectDuration += mi(u);
						try {
							D(t, dc, t, t.alternate, S_, e.passiveEffectDuration);
						} catch (e) {
							I(t, t.return, e);
						}
					} else Vc(e, t, n, r, i);
					break;
				case 31:
					u = kb, d = t.alternate === null ? null : t.alternate.memoizedState, f = t.memoizedState, d !== null && f === null ? (f = t.deletions, f !== null && 0 < f.length && f[0].tag === 18 ? (kb = !1, d = d.hydrationErrors, d !== null && er(t, t.actualStartTime, i, d)) : kb = !0) : kb = !1, Vc(e, t, n, r, i), kb = u;
					break;
				case 13:
					u = kb, d = t.alternate === null ? null : t.alternate.memoizedState, f = t.memoizedState, d === null || d.dehydrated === null || f !== null && f.dehydrated !== null ? kb = !1 : (f = t.deletions, f !== null && 0 < f.length && f[0].tag === 18 ? (kb = !1, d = d.hydrationErrors, d !== null && er(t, t.actualStartTime, i, d)) : kb = !0), Vc(e, t, n, r, i), kb = u;
					break;
				case 23: break;
				case 22:
					f = t.stateNode, d = t.alternate, t.memoizedState === null ? f._visibility & jg ? Vc(e, t, n, r, i) : (f._visibility |= jg, Uc(e, t, n, r, (t.subtreeFlags & 10256) != 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child), i), (t.mode & G) === W || kb || (e = t.actualStartTime, 0 <= e && .05 < i - e && Qn(t, e, i), 0 <= q && 0 <= J && .05 < J - q && Qn(t, q, J))) : f._visibility & jg ? Vc(e, t, n, r, i) : Gc(e, t, n, r, i), u & 2048 && zc(d, t);
					break;
				case 24:
					Vc(e, t, n, r, i), u & 2048 && Bc(t.alternate, t);
					break;
				default: Vc(e, t, n, r, i);
			}
			(t.mode & G) !== W && ((e = !kb && t.alternate === null && t.return !== null && t.return.alternate !== null) && (n = t.actualStartTime, 0 <= n && .05 < i - n && Zn(t, n, i, "Mount")), 0 <= q && 0 <= J && ((k_ || .05 < D_) && tr(t, q, J, D_, O_), e && .05 < J - q && Zn(t, q, J, "Mount"))), _i(a), bi(o), O_ = s, k_ = c, wg = l;
		}
		function Uc(e, t, n, r, i, a) {
			for (i &&= (t.subtreeFlags & 10256) != 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child), t = t.child; t !== null;) {
				var o = t.sibling;
				Wc(e, t, n, r, i, o === null ? a : o.actualStartTime), t = o;
			}
		}
		function Wc(e, t, n, r, i, a) {
			var o = gi(), s = yi(), c = xi(), l = Si(), u = wg;
			i && (t.mode & G) !== W && 0 < t.actualStartTime && t.flags & 1 && $n(t, t.actualStartTime, a, kb, n);
			var d = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					Uc(e, t, n, r, i, a), tc(t, yy);
					break;
				case 23: break;
				case 22:
					var f = t.stateNode;
					t.memoizedState === null ? (f._visibility |= jg, Uc(e, t, n, r, i, a)) : f._visibility & jg ? Uc(e, t, n, r, i, a) : Gc(e, t, n, r, a), i && d & 2048 && zc(t.alternate, t);
					break;
				case 24:
					Uc(e, t, n, r, i, a), i && d & 2048 && Bc(t.alternate, t);
					break;
				default: Uc(e, t, n, r, i, a);
			}
			(t.mode & G) !== W && 0 <= q && 0 <= J && (k_ || .05 < D_) && tr(t, q, J, D_, O_), _i(o), bi(s), O_ = c, k_ = l, wg = u;
		}
		function Gc(e, t, n, r, i) {
			if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)) for (var a = t.child; a !== null;) {
				t = a.sibling;
				var o = e, s = n, c = r, l = t === null ? i : t.actualStartTime, u = wg;
				(a.mode & G) !== W && 0 < a.actualStartTime && a.flags & 1 && $n(a, a.actualStartTime, l, kb, s);
				var d = a.flags;
				switch (a.tag) {
					case 22:
						Gc(o, a, s, c, l), d & 2048 && zc(a.alternate, a);
						break;
					case 24:
						Gc(o, a, s, c, l), d & 2048 && Bc(a.alternate, a);
						break;
					default: Gc(o, a, s, c, l);
				}
				wg = u, a = t;
			}
		}
		function Kc(e, t, n) {
			if (e.subtreeFlags & Ab) for (e = e.child; e !== null;) qc(e, t, n), e = e.sibling;
		}
		function qc(e, t, n) {
			switch (e.tag) {
				case 26:
					Kc(e, t, n), e.flags & Ab && e.memoizedState !== null && qd(n, Ob, e.memoizedState, e.memoizedProps);
					break;
				case 5:
					Kc(e, t, n);
					break;
				case 3:
				case 4:
					var r = Ob;
					Ob = Ad(e.stateNode.containerInfo), Kc(e, t, n), Ob = r;
					break;
				case 22:
					e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Ab, Ab = 16777216, Kc(e, t, n), Ab = r) : Kc(e, t, n));
					break;
				default: Kc(e, t, n);
			}
		}
		function Jc(e) {
			var t = e.alternate;
			if (t !== null && (e = t.child, e !== null)) {
				t.child = null;
				do
					t = e.sibling, e.sibling = null, e = t;
				while (e !== null);
			}
		}
		function Yc(e) {
			var t = e.deletions;
			if (e.flags & 16) {
				if (t !== null) for (var n = 0; n < t.length; n++) {
					var r = t[n], i = gi();
					Cb = r, $c(r, e), (r.mode & G) !== W && 0 <= q && 0 <= J && .05 < J - q && Zn(r, q, J, "Unmount"), _i(i);
				}
				Jc(e);
			}
			if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Xc(e), e = e.sibling;
		}
		function Xc(e) {
			var t = gi(), n = yi(), r = xi(), i = Si();
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					Yc(e), e.flags & 2048 && nc(e, e.return, yy | gy);
					break;
				case 3:
					var a = fi();
					Yc(e), e.stateNode.passiveEffectDuration += pi(a);
					break;
				case 12:
					a = fi(), Yc(e), e.stateNode.passiveEffectDuration += mi(a);
					break;
				case 22:
					a = e.stateNode, e.memoizedState !== null && a._visibility & jg && (e.return === null || e.return.tag !== 13) ? (a._visibility &= ~jg, Zc(e), (e.mode & G) !== W && 0 <= q && 0 <= J && .05 < J - q && Zn(e, q, J, "Disconnect")) : Yc(e);
					break;
				default: Yc(e);
			}
			(e.mode & G) !== W && 0 <= q && 0 <= J && (k_ || .05 < D_) && tr(e, q, J, D_, O_), _i(t), bi(n), k_ = i, O_ = r;
		}
		function Zc(e) {
			var t = e.deletions;
			if (e.flags & 16) {
				if (t !== null) for (var n = 0; n < t.length; n++) {
					var r = t[n], i = gi();
					Cb = r, $c(r, e), (r.mode & G) !== W && 0 <= q && 0 <= J && .05 < J - q && Zn(r, q, J, "Unmount"), _i(i);
				}
				Jc(e);
			}
			for (e = e.child; e !== null;) Qc(e), e = e.sibling;
		}
		function Qc(e) {
			var t = gi(), n = yi(), r = xi(), i = Si();
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					nc(e, e.return, yy), Zc(e);
					break;
				case 22:
					var a = e.stateNode;
					a._visibility & jg && (a._visibility &= ~jg, Zc(e));
					break;
				default: Zc(e);
			}
			(e.mode & G) !== W && 0 <= q && 0 <= J && (k_ || .05 < D_) && tr(e, q, J, D_, O_), _i(t), bi(n), k_ = i, O_ = r;
		}
		function $c(e, t) {
			for (; Cb !== null;) {
				var n = Cb, r = n, i = t, a = gi(), o = yi(), s = xi(), c = Si();
				switch (r.tag) {
					case 0:
					case 11:
					case 15:
						nc(r, i, yy);
						break;
					case 23:
					case 22:
						r.memoizedState !== null && r.memoizedState.cachePool !== null && (i = r.memoizedState.cachePool.pool, i != null && ci(i));
						break;
					case 24: li(r.memoizedState.cache);
				}
				if ((r.mode & G) !== W && 0 <= q && 0 <= J && (k_ || .05 < D_) && tr(r, q, J, D_, O_), _i(a), bi(o), k_ = c, O_ = s, r = n.child, r !== null) r.return = n, Cb = r;
				else a: for (n = e; Cb !== null;) {
					if (r = Cb, a = r.sibling, o = r.return, Cc(r), r === n) {
						Cb = null;
						break a;
					}
					if (a !== null) {
						a.return = o, Cb = a;
						break a;
					}
					Cb = o;
				}
			}
		}
		function el() {
			Nb.forEach(function(e) {
				return e();
			});
		}
		function tl() {
			var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
			return e || V.actQueue === null || console.error("The current testing environment is not configured to support act(...)"), e;
		}
		function nl(e) {
			if ((Gb & Ib) !== Fb && $ !== 0) return $ & -$;
			var t = V.T;
			return t === null ? Ke() : (t._updatedFibers ||= /* @__PURE__ */ new Set(), t._updatedFibers.add(e), iu());
		}
		function rl() {
			if (px === 0) if (!($ & 536870912) || K) {
				var e = Bp;
				Bp <<= 1, !(Bp & 3932160) && (Bp = 262144), px = e;
			} else px = 536870912;
			return e = uy.current, e !== null && (e.flags |= 32), px;
		}
		function il(e, t, n) {
			if (tS && console.error("useInsertionEffect must not schedule updates."), Xx && (Zx = !0), (e === Kb && (rx === Yb || rx === nx) || e.cancelPendingCommit !== null) && (fl(e, 0), cl(e, $, px, !1)), Le(e, n), (Gb & Ib) !== Fb && e === Kb) {
				if (_p) switch (t.tag) {
					case 0:
					case 11:
					case 15:
						e = Q && C(Q) || "Unknown", iS.has(e) || (iS.add(e), t = C(t) || "Unknown", console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render", t, e, e));
						break;
					case 1: rS ||= (console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), !0);
				}
			} else Fp && Ue(e, t, n), Yl(t), e === Kb && ((Gb & Ib) === Fb && (dx |= n), lx === Hb && cl(e, $, px, !1)), Xl(e);
		}
		function al(e, t, n) {
			if ((Gb & (Ib | Lb)) !== Fb) throw Error("Should not already be working.");
			if ($ !== 0 && Q !== null) {
				var r = Q, i = Cp();
				switch (tv) {
					case Xb:
					case Yb:
						var a = nv;
						Sg && ((r = r._debugTask) ? r.run(console.timeStamp.bind(console, "Suspended", a, i, Cg, void 0, "primary-light")) : console.timeStamp("Suspended", a, i, Cg, void 0, "primary-light"));
						break;
					case nx:
						a = nv, Sg && ((r = r._debugTask) ? r.run(console.timeStamp.bind(console, "Action", a, i, Cg, void 0, "primary-light")) : console.timeStamp("Action", a, i, Cg, void 0, "primary-light"));
						break;
					default: Sg && (r = i - nv, 3 > r || console.timeStamp("Blocked", nv, i, Cg, void 0, 5 > r ? "primary-light" : 10 > r ? "primary" : 100 > r ? "primary-dark" : "error"));
				}
			}
			a = (n = !n && (t & 127) == 0 && (t & e.expiredLanes) === 0 || k(e, t)) ? xl(e, t) : yl(e, t, !0);
			var o = n;
			do {
				if (a === Rb) {
					ox && !n && cl(e, t, 0, !1), t = rx, nv = __(), tv = t;
					break;
				} else {
					if (r = Cp(), i = e.current.alternate, o && !sl(i)) {
						Xn(t), i = x_, a = r, !Sg || a <= i || (wx ? wx.run(console.timeStamp.bind(console, "Teared Render", i, a, U, H, "error")) : console.timeStamp("Teared Render", i, a, U, H, "error")), dl(t, r), a = yl(e, t, !1), o = !1;
						continue;
					}
					if (a === Bb) {
						if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
						else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
						if (s !== 0) {
							Xn(t), or(x_, r, t, wx), dl(t, r), t = s;
							a: {
								r = e, a = o, o = hx;
								var c = r.current.memoizedState.isDehydrated;
								if (c && (fl(r, s).flags |= 256), s = yl(r, s, !1), s !== Bb) {
									if (sx && !c) {
										r.errorRecoveryDisabledLanes |= a, dx |= a, a = Hb;
										break a;
									}
									r = gx, gx = o, r !== null && (gx === null ? gx = r : gx.push.apply(gx, r));
								}
								a = s;
							}
							if (o = !1, a !== Bb) continue;
							r = Cp();
						}
					}
					if (a === zb) {
						Xn(t), or(x_, r, t, wx), dl(t, r), fl(e, 0), cl(e, t, 0, !0);
						break;
					}
					a: {
						switch (n = e, a) {
							case Rb:
							case zb: throw Error("Root did not complete. This is a bug in React.");
							case Hb: if ((t & 4194048) !== t) break;
							case Ub:
								Xn(t), rr(x_, r, t, wx), dl(t, r), i = t, i & 127 ? z_ = r : i & 4194048 && (X_ = r), cl(n, t, px, !ax);
								break a;
							case Bb:
								gx = null;
								break;
							case Vb:
							case Wb: break;
							default: throw Error("Unknown root exit status.");
						}
						if (V.actQueue !== null) kl(n, i, t, gx, Cx, _x, px, dx, mx, a, null, null, x_, r);
						else {
							if ((t & 62914560) === t && (o = vx + bx - Cp(), 10 < o)) {
								if (cl(n, t, px, !ax), Ne(n, 0, !0) !== 0) break a;
								zx = t, n.timeoutHandle = $S(ol.bind(null, n, i, gx, Cx, _x, t, px, dx, mx, ax, a, "Throttled", x_, r), o);
								break a;
							}
							ol(n, i, gx, Cx, _x, t, px, dx, mx, ax, a, null, x_, r);
						}
					}
				}
				break;
			} while (1);
			Xl(e);
		}
		function ol(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
			e.timeoutHandle = tC;
			var m = t.subtreeFlags, h = null;
			if ((m & 8192 || (m & 16785408) == 16785408) && (h = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: sn
			}, qc(t, a, h), m = (a & 62914560) === a ? vx - Cp() : (a & 4194048) === a ? yx - Cp() : 0, m = Jd(h, m), m !== null)) {
				zx = a, e.cancelPendingCommit = m(kl.bind(null, e, t, a, n, r, i, o, s, c, u, h, h.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < h.count ? 0 < h.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : h.imgCount === 1 ? "Suspended on an Image" : 0 < h.imgCount ? "Suspended on Images" : null, f, p)), cl(e, a, o, !l);
				return;
			}
			kl(e, t, a, n, r, i, o, s, c, u, h, d, f, p);
		}
		function sl(e) {
			for (var t = e;;) {
				var n = t.tag;
				if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
					var i = n[r], a = i.getSnapshot;
					i = i.value;
					try {
						if (!Gh(a(), i)) return !1;
					} catch {
						return !1;
					}
				}
				if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
				else {
					if (t === e) break;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) return !0;
						t = t.return;
					}
					t.sibling.return = t.return, t = t.sibling;
				}
			}
			return !0;
		}
		function cl(e, t, n, r) {
			t &= ~fx, t &= ~dx, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
			for (var i = t; 0 < i;) {
				var a = 31 - Ip(i), o = 1 << a;
				r[a] = -1, i &= ~o;
			}
			n !== 0 && ze(e, n, t);
		}
		function ll() {
			return (Gb & (Ib | Lb)) === Fb ? (L(0, !1), !1) : !0;
		}
		function ul() {
			if (Q !== null) {
				if (rx === qb) var e = Q.return;
				else e = Q, Xr(), ka(e), Gv = null, Kv = 0, e = Q;
				for (; e !== null;) Ys(e.alternate, e), e = e.return;
				Q = null;
			}
		}
		function dl(e, t) {
			e & 127 && (A_ = t), e & 4194048 && (B_ = t), e & 62914560 && (Z_ = t), e & 2080374784 && (Q_ = t);
		}
		function fl(e, t) {
			Sg && (console.timeStamp("Blocking Track", .003, .003, "Blocking", H, "primary-light"), console.timeStamp("Transition Track", .003, .003, "Transition", H, "primary-light"), console.timeStamp("Suspense Track", .003, .003, "Suspense", H, "primary-light"), console.timeStamp("Idle Track", .003, .003, "Idle", H, "primary-light"));
			var n = x_;
			if (x_ = __(), $ !== 0 && 0 < n) {
				if (Xn($), lx === Vb || lx === Hb) rr(n, x_, t, wx);
				else {
					var r = x_, i = wx;
					if (Sg && !(r <= n)) {
						var a = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", o = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
						i ? i.run(console.timeStamp.bind(console, o, n, r, U, H, a)) : console.timeStamp(o, n, r, U, H, a);
					}
				}
				dl($, x_);
			}
			if (n = wx, wx = null, t & 127) {
				wx = M_, i = 0 <= j_ && j_ < A_ ? A_ : j_, r = 0 <= I_ && I_ < A_ ? A_ : I_, a = 0 <= r ? r : 0 <= i ? i : x_, 0 <= z_ ? (Xn(2), ir(z_, a, t, n)) : $_ & 127 && (Xn(2), lr(A_, a, ev)), n = i;
				var s = r, c = L_, l = 0 < R_, u = N_ === y_, d = N_ === b_;
				if (i = x_, r = M_, a = P_, o = F_, Sg) {
					if (U = "Blocking", 0 < n ? n > i && (n = i) : n = i, 0 < s ? s > n && (s = n) : s = n, c !== null && n > s) {
						var f = l ? "secondary-light" : "warning";
						r ? r.run(console.timeStamp.bind(console, l ? "Consecutive" : "Event: " + c, s, n, U, H, f)) : console.timeStamp(l ? "Consecutive" : "Event: " + c, s, n, U, H, f);
					}
					i > n && (s = u ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", u = d ? "Promise Resolved" : u ? "Cascading Update" : 5 < i - n ? "Update Blocked" : "Update", d = [], o != null && d.push(["Component name", o]), a != null && d.push(["Method name", a]), n = {
						start: n,
						end: i,
						detail: { devtools: {
							properties: d,
							track: U,
							trackGroup: H,
							color: s
						} }
					}, r ? r.run(performance.measure.bind(performance, u, n)) : performance.measure(u, n));
				}
				j_ = -1.1, N_ = 0, F_ = P_ = null, z_ = -1.1, R_ = I_, I_ = -1.1, A_ = __();
			}
			if (t & 4194048 && (wx = W_, i = 0 <= V_ && V_ < B_ ? B_ : V_, n = 0 <= H_ && H_ < B_ ? B_ : H_, r = 0 <= q_ && q_ < B_ ? B_ : q_, a = 0 <= r ? r : 0 <= n ? n : x_, 0 <= X_ ? (Xn(256), ir(X_, a, t, wx)) : $_ & 4194048 && (Xn(256), lr(B_, a, ev)), d = r, s = J_, c = 0 < Y_, l = U_ === b_, a = x_, r = W_, o = G_, u = K_, Sg && (U = "Transition", 0 < n ? n > a && (n = a) : n = a, 0 < i ? i > n && (i = n) : i = n, 0 < d ? d > i && (d = i) : d = i, i > d && s !== null && (f = c ? "secondary-light" : "warning", r ? r.run(console.timeStamp.bind(console, c ? "Consecutive" : "Event: " + s, d, i, U, H, f)) : console.timeStamp(c ? "Consecutive" : "Event: " + s, d, i, U, H, f)), n > i && (r ? r.run(console.timeStamp.bind(console, "Action", i, n, U, H, "primary-dark")) : console.timeStamp("Action", i, n, U, H, "primary-dark")), a > n && (i = l ? "Promise Resolved" : 5 < a - n ? "Update Blocked" : "Update", d = [], u != null && d.push(["Component name", u]), o != null && d.push(["Method name", o]), n = {
				start: n,
				end: a,
				detail: { devtools: {
					properties: d,
					track: U,
					trackGroup: H,
					color: "primary-light"
				} }
			}, r ? r.run(performance.measure.bind(performance, i, n)) : performance.measure(i, n))), H_ = V_ = -1.1, U_ = 0, X_ = -1.1, Y_ = q_, q_ = -1.1, B_ = __()), t & 62914560 && $_ & 62914560 && (Xn(4194304), lr(Z_, x_, ev)), t & 2080374784 && $_ & 2080374784 && (Xn(268435456), lr(Q_, x_, ev)), n = e.timeoutHandle, n !== tC && (e.timeoutHandle = tC, eC(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), zx = 0, ul(), Kb = e, Q = n = Cr(e.current, null), $ = t, rx = qb, ix = null, ax = !1, ox = k(e, t), sx = !1, lx = Rb, mx = px = fx = dx = ux = 0, gx = hx = null, _x = !1, t & 8 && (t |= t & 32), r = e.entangledLanes, r !== 0) for (e = e.entanglements, r &= t; 0 < r;) i = 31 - Ip(r), a = 1 << i, t |= e[i], r &= ~a;
			return cx = t, ur(), e = dg(), 1e3 < e - lg && (V.recentlyCreatedOwnerStacks = 0, lg = e), dv.discardPendingWarnings(), n;
		}
		function pl(e, t) {
			X = null, V.H = zy, V.getCurrentStack = null, _p = !1, gp = null, t === zv || t === Vv ? (t = Bi(), rx = Xb) : t === Bv ? (t = Bi(), rx = Zb) : rx = t === sb ? tx : typeof t == "object" && t && typeof t.then == "function" ? $b : Jb, ix = t;
			var n = Q;
			n === null ? (lx = zb, os(e, jr(t, e.current))) : n.mode & G && wi(n);
		}
		function ml() {
			var e = uy.current;
			return e === null ? !0 : ($ & 4194048) === $ ? dy === null : ($ & 62914560) === $ || $ & 536870912 ? e === dy : !1;
		}
		function hl() {
			var e = V.H;
			return V.H = zy, e === null ? zy : e;
		}
		function gl() {
			var e = V.A;
			return V.A = jb, e;
		}
		function _l(e) {
			wx === null && (wx = e._debugTask == null ? null : e._debugTask);
		}
		function vl() {
			lx = Hb, ax || ($ & 4194048) !== $ && uy.current !== null || (ox = !0), !(ux & 134217727) && !(dx & 134217727) || Kb === null || cl(Kb, $, px, !1);
		}
		function yl(e, t, n) {
			var r = Gb;
			Gb |= Ib;
			var i = hl(), a = gl();
			if (Kb !== e || $ !== t) {
				if (Fp) {
					var o = e.memoizedUpdaters;
					0 < o.size && (ql(e, $), o.clear()), We(e, t);
				}
				Cx = null, fl(e, t);
			}
			t = !1, o = lx;
			a: do
				try {
					if (rx !== qb && Q !== null) {
						var s = Q, c = ix;
						switch (rx) {
							case tx:
								ul(), o = Ub;
								break a;
							case Xb:
							case Yb:
							case nx:
							case $b:
								uy.current === null && (t = !0);
								var l = rx;
								if (rx = qb, ix = null, El(e, s, c, l), n && ox) {
									o = Rb;
									break a;
								}
								break;
							default: l = rx, rx = qb, ix = null, El(e, s, c, l);
						}
					}
					bl(), o = lx;
					break;
				} catch (t) {
					pl(e, t);
				}
			while (1);
			return t && e.shellSuspendCounter++, Xr(), Gb = r, V.H = i, V.A = a, Q === null && (Kb = null, $ = 0, ur()), o;
		}
		function bl() {
			for (; Q !== null;) Cl(Q);
		}
		function xl(e, t) {
			var n = Gb;
			Gb |= Ib;
			var r = hl(), i = gl();
			if (Kb !== e || $ !== t) {
				if (Fp) {
					var a = e.memoizedUpdaters;
					0 < a.size && (ql(e, $), a.clear()), We(e, t);
				}
				Cx = null, xx = Cp() + Sx, fl(e, t);
			} else ox = k(e, t);
			a: do
				try {
					if (rx !== qb && Q !== null) b: switch (t = Q, a = ix, rx) {
						case Jb:
							rx = qb, ix = null, El(e, t, a, Jb);
							break;
						case Yb:
						case nx:
							if (Li(a)) {
								rx = qb, ix = null, wl(t);
								break;
							}
							t = function() {
								rx !== Yb && rx !== nx || Kb !== e || (rx = ex), Xl(e);
							}, a.then(t, t);
							break a;
						case Xb:
							rx = ex;
							break a;
						case Zb:
							rx = Qb;
							break a;
						case ex:
							Li(a) ? (rx = qb, ix = null, wl(t)) : (rx = qb, ix = null, El(e, t, a, ex));
							break;
						case Qb:
							var o = null;
							switch (Q.tag) {
								case 26: o = Q.memoizedState;
								case 5:
								case 27:
									var s = Q;
									if (o ? Kd(o) : s.stateNode.complete) {
										rx = qb, ix = null;
										var c = s.sibling;
										if (c !== null) Q = c;
										else {
											var l = s.return;
											l === null ? Q = null : (Q = l, Dl(l));
										}
										break b;
									}
									break;
								default: console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.");
							}
							rx = qb, ix = null, El(e, t, a, Qb);
							break;
						case $b:
							rx = qb, ix = null, El(e, t, a, $b);
							break;
						case tx:
							ul(), lx = Ub;
							break a;
						default: throw Error("Unexpected SuspendedReason. This is a bug in React.");
					}
					V.actQueue === null ? Sl() : bl();
					break;
				} catch (t) {
					pl(e, t);
				}
			while (1);
			return Xr(), V.H = r, V.A = i, Gb = n, Q === null ? (Kb = null, $ = 0, ur(), lx) : Rb;
		}
		function Sl() {
			for (; Q !== null && !xp();) Cl(Q);
		}
		function Cl(e) {
			var t = e.alternate;
			(e.mode & G) === W ? t = D(e, Bs, t, e, cx) : (Ci(e), t = D(e, Bs, t, e, cx), wi(e)), e.memoizedProps = e.pendingProps, t === null ? Dl(e) : Q = t;
		}
		function wl(e) {
			var t = D(e, Tl, e);
			e.memoizedProps = e.pendingProps, t === null ? Dl(e) : Q = t;
		}
		function Tl(e) {
			var t = e.alternate, n = (e.mode & G) !== W;
			switch (n && Ci(e), e.tag) {
				case 15:
				case 0:
					t = ws(t, e, e.pendingProps, e.type, void 0, $);
					break;
				case 11:
					t = ws(t, e, e.pendingProps, e.type.render, e.ref, $);
					break;
				case 5: ka(e);
				default: Ys(t, e), e = Q = wr(e, cx), t = Bs(t, e, cx);
			}
			return n && wi(e), t;
		}
		function El(e, t, n, r) {
			Xr(), ka(t), Gv = null, Kv = 0;
			var i = t.return;
			try {
				if (ds(e, i, t, n, $)) {
					lx = zb, os(e, jr(n, e.current)), Q = null;
					return;
				}
			} catch (t) {
				if (i !== null) throw Q = i, t;
				lx = zb, os(e, jr(n, e.current)), Q = null;
				return;
			}
			t.flags & 32768 ? (K || r === Jb ? e = !0 : ox || $ & 536870912 ? e = !1 : (ax = e = !0, (r === Yb || r === nx || r === Xb || r === $b) && (r = uy.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Ol(t, e)) : Dl(t);
		}
		function Dl(e) {
			var t = e;
			do {
				if (t.flags & 32768) {
					Ol(t, ax);
					return;
				}
				var n = t.alternate;
				if (e = t.return, Ci(t), n = D(t, qs, n, t, cx), (t.mode & G) !== W && Ti(t), n !== null) {
					Q = n;
					return;
				}
				if (t = t.sibling, t !== null) {
					Q = t;
					return;
				}
				Q = t = e;
			} while (t !== null);
			lx === Rb && (lx = Wb);
		}
		function Ol(e, t) {
			do {
				var n = Js(e.alternate, e);
				if (n !== null) {
					n.flags &= 32767, Q = n;
					return;
				}
				if ((e.mode & G) !== W) {
					Ti(e), n = e.actualDuration;
					for (var r = e.child; r !== null;) n += r.actualDuration, r = r.sibling;
					e.actualDuration = n;
				}
				if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
					Q = e;
					return;
				}
				Q = e = n;
			} while (e !== null);
			lx = Ub, Q = null;
		}
		function kl(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
			e.cancelPendingCommit = null;
			do
				Fl();
			while (Ix !== Ax);
			if (dv.flushLegacyContextWarning(), dv.flushPendingUnsafeLifecycleWarnings(), (Gb & (Ib | Lb)) !== Fb) throw Error("Should not already be working.");
			if (Xn(n), l === Bb ? or(f, p, n, wx) : r === null ? nr(f, p, n, wx) : ar(f, p, n, r, t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) != 0, wx), t !== null) {
				if (n === 0 && console.error("finishedLanes should not be empty during a commit. This is a bug in React."), t === e.current) throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
				if (a = t.lanes | t.childLanes, a |= Pg, Re(e, n, a, o, s, c), e === Kb && (Q = Kb = null, $ = 0), Rx = t, Lx = e, zx = n, Bx = a, Hx = i, Ux = r, Vx = p, Wx = d, Gx = Ex, Kx = null, t.actualDuration !== 0 || t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Jl(Dp, function() {
					return QS = window.event, Gx === Ex && (Gx = Ox), Il(), null;
				})) : (e.callbackNode = null, e.callbackPriority = 0), w_ = null, S_ = __(), d !== null && sr(p, S_, d, wx), r = (t.flags & 13878) != 0, t.subtreeFlags & 13878 || r) {
					r = V.T, V.T = null, i = Yf.p, Yf.p = Hp, o = Gb, Gb |= Lb;
					try {
						xc(e, t, n);
					} finally {
						Gb = o, Yf.p = i, V.T = r;
					}
				}
				Ix = jx, Al(), jl(), Ml();
			}
		}
		function Al() {
			if (Ix === jx) {
				Ix = Ax;
				var e = Lx, t = Rx, n = zx, r = (t.flags & 13878) != 0;
				if (t.subtreeFlags & 13878 || r) {
					r = V.T, V.T = null;
					var i = Yf.p;
					Yf.p = Hp;
					var a = Gb;
					Gb |= Lb;
					try {
						wb = n, Tb = e, hi(), jc(t, e), Tb = wb = null, n = YS;
						var o = Bn(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
						if (o !== s && s && s.ownerDocument && zn(s.ownerDocument.documentElement, s)) {
							if (c !== null && Vn(s)) {
								var l = c.start, u = c.end;
								if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
								else {
									var d = s.ownerDocument || document, f = d && d.defaultView || window;
									if (f.getSelection) {
										var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
										!p.extend && h > g && (o = g, g = h, h = o);
										var _ = Rn(s, h), v = Rn(s, g);
										if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
											var y = d.createRange();
											y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
										}
									}
								}
							}
							for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
								element: p,
								left: p.scrollLeft,
								top: p.scrollTop
							});
							for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
								var b = d[s];
								b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
							}
						}
						zC = !!JS, YS = JS = null;
					} finally {
						Gb = a, Yf.p = i, V.T = r;
					}
				}
				e.current = t, Ix = Mx;
			}
		}
		function jl() {
			if (Ix === Mx) {
				Ix = Ax;
				var e = Kx;
				if (e !== null) {
					S_ = __();
					var t = C_, n = S_;
					!Sg || n <= t || (ev ? ev.run(console.timeStamp.bind(console, e, t, n, U, H, "secondary-light")) : console.timeStamp(e, t, n, U, H, "secondary-light"));
				}
				e = Lx, t = Rx, n = zx;
				var r = (t.flags & 8772) != 0;
				if (t.subtreeFlags & 8772 || r) {
					r = V.T, V.T = null;
					var i = Yf.p;
					Yf.p = Hp;
					var a = Gb;
					Gb |= Lb;
					try {
						wb = n, Tb = e, hi(), Sc(e, t.alternate, t), Tb = wb = null;
					} finally {
						Gb = a, Yf.p = i, V.T = r;
					}
				}
				e = Vx, t = Wx, C_ = __(), e = t === null ? e : S_, t = C_, n = Gx === Dx, r = wx, w_ === null ? !Sg || t <= e || (r ? r.run(console.timeStamp.bind(console, n ? "Commit Interrupted View Transition" : "Commit", e, t, U, H, n ? "error" : "secondary-dark")) : console.timeStamp(n ? "Commit Interrupted View Transition" : "Commit", e, t, U, H, n ? "error" : "secondary-dark")) : cr(e, t, w_, !1, r), Ix = Nx;
			}
		}
		function Ml() {
			if (Ix === Px || Ix === Nx) {
				if (Ix === Px) {
					var e = C_;
					C_ = __();
					var t = C_, n = Gx === Dx;
					!Sg || t <= e || (ev ? ev.run(console.timeStamp.bind(console, n ? "Interrupted View Transition" : "Starting Animation", e, t, U, H, n ? "error" : "secondary-light")) : console.timeStamp(n ? "Interrupted View Transition" : "Starting Animation", e, t, U, H, n ? " error" : "secondary-light")), Gx !== Dx && (Gx = kx);
				}
				Ix = Ax, Sp(), e = Lx;
				var r = Rx;
				t = zx, n = Ux;
				var i = r.actualDuration !== 0 || (r.subtreeFlags & 10256) != 0 || (r.flags & 10256) != 0;
				i ? Ix = Fx : (Ix = Ax, Rx = Lx = null, Pl(e, e.pendingLanes), $x = 0, eS = null);
				var a = e.pendingLanes;
				if (a === 0 && (Tx = null), i || Gl(e), a = Ge(t), r = r.stateNode, Np && typeof Np.onCommitFiberRoot == "function") try {
					var o = (r.current.flags & 128) == 128;
					switch (a) {
						case Hp:
							var s = Tp;
							break;
						case Up:
							s = Ep;
							break;
						case Wp:
							s = Dp;
							break;
						case Gp:
							s = kp;
							break;
						default: s = Dp;
					}
					Np.onCommitFiberRoot(Mp, r, s, o);
				} catch (e) {
					Pp || (Pp = !0, console.error("React instrumentation encountered an error: %o", e));
				}
				if (Fp && e.memoizedUpdaters.clear(), el(), n !== null) {
					o = V.T, s = Yf.p, Yf.p = Hp, V.T = null;
					try {
						var c = e.onRecoverableError;
						for (r = 0; r < n.length; r++) {
							var l = n[r], u = Nl(l.stack);
							D(l.source, c, l.value, u);
						}
					} finally {
						V.T = o, Yf.p = s;
					}
				}
				zx & 3 && Fl(), Xl(e), a = e.pendingLanes, t & 261930 && a & 42 ? (iv = !0, e === Yx ? Jx++ : (Jx = 0, Yx = e)) : Jx = 0, i || dl(t, C_), L(0, !1);
			}
		}
		function Nl(e) {
			return e = { componentStack: e }, Object.defineProperty(e, "digest", { get: function() {
				console.error("You are accessing \"digest\" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.");
			} }), e;
		}
		function Pl(e, t) {
			(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, li(t)));
		}
		function Fl() {
			return Al(), jl(), Ml(), Il();
		}
		function Il() {
			if (Ix !== Fx) return !1;
			var e = Lx, t = Bx;
			Bx = 0;
			var n = Ge(zx), r = Wp === 0 || Wp > n ? Wp : n;
			n = V.T;
			var i = Yf.p;
			try {
				Yf.p = r, V.T = null;
				var a = Hx;
				Hx = null, r = Lx;
				var o = zx;
				if (Ix = Ax, Rx = Lx = null, zx = 0, (Gb & (Ib | Lb)) !== Fb) throw Error("Cannot flush passive effects while already rendering.");
				Xn(o), Xx = !0, Zx = !1;
				var s = 0;
				if (w_ = null, s = Cp(), Gx === kx) lr(C_, s, ev);
				else {
					var c = C_, l = s, u = Gx === Ox;
					!Sg || l <= c || (wx ? wx.run(console.timeStamp.bind(console, u ? "Waiting for Paint" : "Waiting", c, l, U, H, "secondary-light")) : console.timeStamp(u ? "Waiting for Paint" : "Waiting", c, l, U, H, "secondary-light"));
				}
				c = Gb, Gb |= Lb;
				var d = r.current;
				hi(), Xc(d);
				var f = r.current;
				d = Vx, hi(), Hc(r, f, o, a, d), Gl(r), Gb = c;
				var p = Cp();
				if (f = s, d = wx, w_ === null ? !Sg || p <= f || (d ? d.run(console.timeStamp.bind(console, "Remaining Effects", f, p, U, H, "secondary-dark")) : console.timeStamp("Remaining Effects", f, p, U, H, "secondary-dark")) : cr(f, p, w_, !0, d), dl(o, p), L(0, !1), Zx ? r === eS ? $x++ : ($x = 0, eS = r) : $x = 0, Zx = Xx = !1, Np && typeof Np.onPostCommitFiberRoot == "function") try {
					Np.onPostCommitFiberRoot(Mp, r);
				} catch (e) {
					Pp || (Pp = !0, console.error("React instrumentation encountered an error: %o", e));
				}
				var m = r.current.stateNode;
				return m.effectDuration = 0, m.passiveEffectDuration = 0, !0;
			} finally {
				Yf.p = i, V.T = n, Pl(e, t);
			}
		}
		function Ll(e, t, n) {
			t = jr(n, t), Di(t), t = cs(e.stateNode, t, 2), e = na(e, t, 2), e !== null && (Le(e, 2), Xl(e));
		}
		function I(e, t, n) {
			if (tS = !1, e.tag === 3) Ll(e, e, n);
			else {
				for (; t !== null;) {
					if (t.tag === 3) {
						Ll(t, e, n);
						return;
					}
					if (t.tag === 1) {
						var r = t.stateNode;
						if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Tx === null || !Tx.has(r))) {
							e = jr(n, e), Di(e), n = ls(2), r = na(t, n, 2), r !== null && (us(n, r, t, e), Le(r, 2), Xl(r));
							return;
						}
					}
					t = t.return;
				}
				console.error("Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.\n\nError message:\n\n%s", n);
			}
		}
		function Rl(e, t, n) {
			var r = e.pingCache;
			if (r === null) {
				r = e.pingCache = new Pb();
				var i = /* @__PURE__ */ new Set();
				r.set(t, i);
			} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
			i.has(n) || (sx = !0, i.add(n), r = zl.bind(null, e, t, n), Fp && ql(e, n), t.then(r, r));
		}
		function zl(e, t, n) {
			var r = e.pingCache;
			r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, n & 127 ? 0 > j_ && (A_ = j_ = __(), M_ = v_("Promise Resolved"), N_ = b_) : n & 4194048 && 0 > H_ && (B_ = H_ = __(), W_ = v_("Promise Resolved"), U_ = b_), tl() && V.actQueue === null && console.error("A suspended resource finished loading inside a test, but the event was not wrapped in act(...).\n\nWhen testing, code that resolves suspended data should be wrapped into act(...):\n\nact(() => {\n  /* finish loading suspended data */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act"), Kb === e && ($ & n) === n && (lx === Hb || lx === Vb && ($ & 62914560) === $ && Cp() - vx < bx ? (Gb & Ib) === Fb && fl(e, 0) : fx |= n, mx === $ && (mx = 0)), Xl(e);
		}
		function Bl(e, t) {
			t === 0 && (t = Fe()), e = pr(e, t), e !== null && (Le(e, t), Xl(e));
		}
		function Vl(e) {
			var t = e.memoizedState, n = 0;
			t !== null && (n = t.retryLane), Bl(e, n);
		}
		function Hl(e, t) {
			var n = 0;
			switch (e.tag) {
				case 31:
				case 13:
					var r = e.stateNode, i = e.memoizedState;
					i !== null && (n = i.retryLane);
					break;
				case 19:
					r = e.stateNode;
					break;
				case 22:
					r = e.stateNode._retryCache;
					break;
				default: throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
			}
			r !== null && r.delete(t), Bl(e, n);
		}
		function Ul(e, t, n) {
			if (t.subtreeFlags & 67117056) for (t = t.child; t !== null;) {
				var r = e, i = t, a = i.type === Ff;
				a = n || a, i.tag === 22 ? i.memoizedState === null && (a && i.flags & 8192 ? D(i, Wl, r, i) : i.subtreeFlags & 67108864 && D(i, Ul, r, i, a)) : i.flags & 67108864 ? a && D(i, Wl, r, i) : Ul(r, i, a), t = t.sibling;
			}
		}
		function Wl(e, t) {
			Ae(!0);
			try {
				Fc(t), Qc(t), Lc(e, t.alternate, t, !1), Wc(e, t, 0, null, !1, 0);
			} finally {
				Ae(!1);
			}
		}
		function Gl(e) {
			var t = !0;
			e.current.mode & (zg | Bg) || (t = !1), Ul(e, e.current, t);
		}
		function Kl(e) {
			if ((Gb & Ib) === Fb) {
				var t = e.tag;
				if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
					if (t = C(e) || "ReactComponent", nS !== null) {
						if (nS.has(t)) return;
						nS.add(t);
					} else nS = new Set([t]);
					D(e, function() {
						console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.");
					});
				}
			}
		}
		function ql(e, t) {
			Fp && e.memoizedUpdaters.forEach(function(n) {
				Ue(e, n, t);
			});
		}
		function Jl(e, t) {
			var n = V.actQueue;
			return n === null ? yp(e, t) : (n.push(t), aS);
		}
		function Yl(e) {
			tl() && V.actQueue === null && D(e, function() {
				console.error("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act", C(e));
			});
		}
		function Xl(e) {
			e !== sS && e.next === null && (sS === null ? oS = sS = e : sS = sS.next = e), uS = !0, V.actQueue === null ? cS || (cS = !0, ru()) : lS || (lS = !0, ru());
		}
		function L(e, t) {
			if (!dS && uS) {
				dS = !0;
				do
					for (var n = !1, r = oS; r !== null;) {
						if (!t) if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - Ip(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, tu(r, a));
						} else a = $, a = Ne(r, r === Kb ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== tC), !(a & 3) || k(r, a) || (n = !0, tu(r, a));
						r = r.next;
					}
				while (n);
				dS = !1;
			}
		}
		function Zl() {
			QS = window.event, Ql();
		}
		function Ql() {
			uS = lS = cS = !1;
			var e = 0;
			fS !== 0 && Gu() && (e = fS);
			for (var t = Cp(), n = null, r = oS; r !== null;) {
				var i = r.next, a = $l(r, t);
				a === 0 ? (r.next = null, n === null ? oS = i : n.next = i, i === null && (sS = n)) : (n = r, (e !== 0 || a & 3) && (uS = !0)), r = i;
			}
			Ix !== Ax && Ix !== Fx || L(e, !1), fS !== 0 && (fS = 0);
		}
		function $l(e, t) {
			for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
				var o = 31 - Ip(a), s = 1 << o, c = i[o];
				c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Pe(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
			}
			if (t = Kb, n = $, n = Ne(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== tC), r = e.callbackNode, n === 0 || e === t && (rx === Yb || rx === nx) || e.cancelPendingCommit !== null) return r !== null && nu(r), e.callbackNode = null, e.callbackPriority = 0;
			if (!(n & 3) || k(e, n)) {
				if (t = n & -n, t !== e.callbackPriority || V.actQueue !== null && r !== pS) nu(r);
				else return t;
				switch (Ge(n)) {
					case Hp:
					case Up:
						n = Ep;
						break;
					case Wp:
						n = Dp;
						break;
					case Gp:
						n = kp;
						break;
					default: n = Dp;
				}
				return r = eu.bind(null, e), V.actQueue === null ? n = yp(n, r) : (V.actQueue.push(r), n = pS), e.callbackPriority = t, e.callbackNode = n, t;
			}
			return r !== null && nu(r), e.callbackPriority = 2, e.callbackNode = null, 2;
		}
		function eu(e, t) {
			if (iv = rv = !1, QS = window.event, Ix !== Ax && Ix !== Fx) return e.callbackNode = null, e.callbackPriority = 0, null;
			var n = e.callbackNode;
			if (Gx === Ex && (Gx = Ox), Fl() && e.callbackNode !== n) return null;
			var r = $;
			return r = Ne(e, e === Kb ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== tC), r === 0 ? null : (al(e, r, t), $l(e, Cp()), e.callbackNode != null && e.callbackNode === n ? eu.bind(null, e) : null);
		}
		function tu(e, t) {
			if (Fl()) return null;
			rv = iv, iv = !1, al(e, t, !0);
		}
		function nu(e) {
			e !== pS && e !== null && bp(e);
		}
		function ru() {
			V.actQueue !== null && V.actQueue.push(function() {
				return Ql(), null;
			}), rC(function() {
				(Gb & (Ib | Lb)) === Fb ? Ql() : yp(Tp, Zl);
			});
		}
		function iu() {
			if (fS === 0) {
				var e = sv;
				e === 0 && (e = zp, zp <<= 1, !(zp & 261888) && (zp = 256)), fS = e;
			}
			return fS;
		}
		function au(e) {
			return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (O(e, "action"), on("" + e));
		}
		function ou(e, t) {
			var n = t.ownerDocument.createElement("input");
			return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
		}
		function su(e, t, n, r, i) {
			if (t === "submit" && n && n.stateNode === i) {
				var a = au((i[Jp] || null).action), o = r.submitter;
				o && (t = (t = o[Jp] || null) ? au(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
				var s = new ch("action", "action", null, r, i);
				e.push({
					event: s,
					listeners: [{
						instance: null,
						listener: function() {
							if (r.defaultPrevented) {
								if (fS !== 0) {
									var e = o ? ou(i, o) : new FormData(i), t = {
										pending: !0,
										data: e,
										method: i.method,
										action: a
									};
									Object.freeze(t), Fo(n, t, null, e);
								}
							} else typeof a == "function" && (s.preventDefault(), e = o ? ou(i, o) : new FormData(i), t = {
								pending: !0,
								data: e,
								method: i.method,
								action: a
							}, Object.freeze(t), Fo(n, t, a, e));
						},
						currentTarget: i
					}]
				});
			}
		}
		function cu(e, t, n) {
			e.currentTarget = n;
			try {
				t(e);
			} catch (e) {
				pg(e);
			}
			e.currentTarget = null;
		}
		function lu(e, t) {
			t = (t & 4) != 0;
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				a: {
					var i = void 0, a = r.event;
					if (r = r.listeners, t) for (var o = r.length - 1; 0 <= o; o--) {
						var s = r[o], c = s.instance, l = s.currentTarget;
						if (s = s.listener, c !== i && a.isPropagationStopped()) break a;
						c === null ? cu(a, s, l) : D(c, cu, a, s, l), i = c;
					}
					else for (o = 0; o < r.length; o++) {
						if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== i && a.isPropagationStopped()) break a;
						c === null ? cu(a, s, l) : D(c, cu, a, s, l), i = c;
					}
				}
			}
		}
		function R(e, t) {
			hS.has(e) || console.error("Did not expect a listenToNonDelegatedEvent() call for \"%s\". This is a bug in React. Please file an issue.", e);
			var n = t[Xp];
			n === void 0 && (n = t[Xp] = /* @__PURE__ */ new Set());
			var r = e + "__bubble";
			n.has(r) || (fu(t, e, 2, !1), n.add(r));
		}
		function uu(e, t, n) {
			hS.has(e) && !t && console.error("Did not expect a listenToNativeEvent() call for \"%s\" in the bubble phase. This is a bug in React. Please file an issue.", e);
			var r = 0;
			t && (r |= 4), fu(n, e, r, t);
		}
		function du(e) {
			if (!e[gS]) {
				e[gS] = !0, tm.forEach(function(t) {
					t !== "selectionchange" && (hS.has(t) || uu(t, !1, e), uu(t, !0, e));
				});
				var t = e.nodeType === 9 ? e : e.ownerDocument;
				t === null || t[gS] || (t[gS] = !0, uu("selectionchange", !1, t));
			}
		}
		function fu(e, t, n, r) {
			switch (pf(t)) {
				case Hp:
					var i = cf;
					break;
				case Up:
					i = lf;
					break;
				default: i = uf;
			}
			n = i.bind(null, t, n, e), i = void 0, !nh || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
				capture: !0,
				passive: i
			}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
		}
		function pu(e, t, n, r, i) {
			var a = r;
			if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
				if (r === null) return;
				var o = r.tag;
				if (o === 3 || o === 4) {
					var s = r.stateNode.containerInfo;
					if (s === i) break;
					if (o === 4) for (o = r.return; o !== null;) {
						var c = o.tag;
						if ((c === 3 || c === 4) && o.stateNode.containerInfo === i) return;
						o = o.return;
					}
					for (; s !== null;) {
						if (o = Ye(s), o === null) return;
						if (c = o.tag, c === 5 || c === 6 || c === 26 || c === 27) {
							r = a = o;
							continue a;
						}
						s = s.parentNode;
					}
				}
				r = r.return;
			}
			un(function() {
				var r = a, i = cn(n), o = [];
				a: {
					var s = sg.get(e);
					if (s !== void 0) {
						var c = ch, l = e;
						switch (e) {
							case "keypress": if (pn(n) === 0) break a;
							case "keydown":
							case "keyup":
								c = Th;
								break;
							case "focusin":
								l = "focus", c = _h;
								break;
							case "focusout":
								l = "blur", c = _h;
								break;
							case "beforeblur":
							case "afterblur":
								c = _h;
								break;
							case "click": if (n.button === 2) break a;
							case "auxclick":
							case "dblclick":
							case "mousedown":
							case "mousemove":
							case "mouseup":
							case "mouseout":
							case "mouseover":
							case "contextmenu":
								c = hh;
								break;
							case "drag":
							case "dragend":
							case "dragenter":
							case "dragexit":
							case "dragleave":
							case "dragover":
							case "dragstart":
							case "drop":
								c = gh;
								break;
							case "touchcancel":
							case "touchend":
							case "touchmove":
							case "touchstart":
								c = Dh;
								break;
							case eg:
							case tg:
							case ng:
								c = vh;
								break;
							case og:
								c = Oh;
								break;
							case "scroll":
							case "scrollend":
								c = uh;
								break;
							case "wheel":
								c = kh;
								break;
							case "copy":
							case "cut":
							case "paste":
								c = yh;
								break;
							case "gotpointercapture":
							case "lostpointercapture":
							case "pointercancel":
							case "pointerdown":
							case "pointermove":
							case "pointerout":
							case "pointerover":
							case "pointerup":
								c = Eh;
								break;
							case "toggle":
							case "beforetoggle": c = Ah;
						}
						var u = (t & 4) != 0, d = !u && (e === "scroll" || e === "scrollend"), f = u ? s === null ? null : s + "Capture" : s;
						u = [];
						for (var p = r, m; p !== null;) {
							var h = p;
							if (m = h.stateNode, h = h.tag, h !== 5 && h !== 26 && h !== 27 || m === null || f === null || (h = dn(p, f), h != null && u.push(mu(p, h, m))), d) break;
							p = p.return;
						}
						0 < u.length && (s = new c(s, l, null, n, i), o.push({
							event: s,
							listeners: u
						}));
					}
				}
				if (!(t & 7)) {
					a: {
						if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== Zm && (l = n.relatedTarget || n.fromElement) && (Ye(l) || l[Yp])) break a;
						if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Ye(l) : null, l !== null && (d = b(l), u = l.tag, l !== d || u !== 5 && u !== 27 && u !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
							if (u = hh, h = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (u = Eh, h = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = c == null ? s : Ze(c), m = l == null ? s : Ze(l), s = new u(h, p + "leave", c, n, i), s.target = d, s.relatedTarget = m, h = null, Ye(i) === r && (u = new u(f, p + "enter", l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
								for (u = gu, f = c, p = l, m = 0, h = f; h; h = u(h)) m++;
								h = 0;
								for (var g = p; g; g = u(g)) h++;
								for (; 0 < m - h;) f = u(f), m--;
								for (; 0 < h - m;) p = u(p), h--;
								for (; m--;) {
									if (f === p || p !== null && f === p.alternate) {
										u = f;
										break b;
									}
									f = u(f), p = u(p);
								}
								u = null;
							}
							else u = null;
							c !== null && _u(o, s, c, u, !1), l !== null && d !== null && _u(o, d, l, u, !0);
						}
					}
					a: {
						if (s = r ? Ze(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var _ = On;
						else if (Cn(s)) if (Wh) _ = Pn;
						else {
							_ = Mn;
							var v = jn;
						}
						else c = s.nodeName, !c || c.toLowerCase() !== "input" || s.type !== "checkbox" && s.type !== "radio" ? r && $t(r.elementType) && (_ = On) : _ = Nn;
						if (_ &&= _(e, r)) {
							Tn(o, _, n, i);
							break a;
						}
						v && v(e, s, r), e === "focusout" && r && s.type === "number" && r.memoizedProps.value != null && vt(s, "number", s.value);
					}
					switch (v = r ? Ze(r) : window, e) {
						case "focusin":
							(Cn(v) || v.contentEditable === "true") && (qh = v, Jh = r, Yh = null);
							break;
						case "focusout":
							Yh = Jh = qh = null;
							break;
						case "mousedown":
							Xh = !0;
							break;
						case "contextmenu":
						case "mouseup":
						case "dragend":
							Xh = !1, Hn(o, n, i);
							break;
						case "selectionchange": if (Kh) break;
						case "keydown":
						case "keyup": Hn(o, n, i);
					}
					var y;
					if (Nh) b: {
						switch (e) {
							case "compositionstart":
								var x = "onCompositionStart";
								break b;
							case "compositionend":
								x = "onCompositionEnd";
								break b;
							case "compositionupdate":
								x = "onCompositionUpdate";
								break b;
						}
						x = void 0;
					}
					else Bh ? yn(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === Mh && (x = "onCompositionStart");
					x && (Ih && n.locale !== "ko" && (Bh || x !== "onCompositionStart" ? x === "onCompositionEnd" && Bh && (y = fn()) : (ih = i, ah = "value" in ih ? ih.value : ih.textContent, Bh = !0)), v = hu(r, x), 0 < v.length && (x = new bh(x, e, null, n, i), o.push({
						event: x,
						listeners: v
					}), y ? x.data = y : (y = bn(n), y !== null && (x.data = y)))), (y = Fh ? xn(e, n) : Sn(e, n)) && (x = hu(r, "onBeforeInput"), 0 < x.length && (v = new xh("onBeforeInput", "beforeinput", null, n, i), o.push({
						event: v,
						listeners: x
					}), v.data = y)), su(o, e, r, n, i);
				}
				lu(o, t);
			});
		}
		function mu(e, t, n) {
			return {
				instance: e,
				listener: t,
				currentTarget: n
			};
		}
		function hu(e, t) {
			for (var n = t + "Capture", r = []; e !== null;) {
				var i = e, a = i.stateNode;
				if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = dn(e, n), i != null && r.unshift(mu(e, i, a)), i = dn(e, t), i != null && r.push(mu(e, i, a))), e.tag === 3) return r;
				e = e.return;
			}
			return [];
		}
		function gu(e) {
			if (e === null) return null;
			do
				e = e.return;
			while (e && e.tag !== 5 && e.tag !== 27);
			return e || null;
		}
		function _u(e, t, n, r, i) {
			for (var a = t._reactName, o = []; n !== null && n !== r;) {
				var s = n, c = s.alternate, l = s.stateNode;
				if (s = s.tag, c !== null && c === r) break;
				s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = dn(n, a), l != null && o.unshift(mu(n, l, c))) : i || (l = dn(n, a), l != null && o.push(mu(n, l, c)))), n = n.return;
			}
			o.length !== 0 && e.push({
				event: t,
				listeners: o
			});
		}
		function vu(e, t) {
			nn(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Wm || (Wm = !0, e === "select" && t.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
			var n = {
				registrationNameDependencies: nm,
				possibleRegistrationNames: rm
			};
			$t(e) || typeof t.is == "string" || an(e, t, n), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
		}
		function yu(e, t, n, r) {
			t !== n && (n = Cu(n), Cu(t) !== n && (r[e] = t));
		}
		function bu(e, t, n) {
			t.forEach(function(t) {
				n[ku(t)] = t === "style" ? Au(e) : e.getAttribute(t);
			});
		}
		function xu(e, t) {
			!1 === t ? console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
		}
		function Su(e, t) {
			return e = e.namespaceURI === Im || e.namespaceURI === Lm ? e.ownerDocument.createElementNS(e.namespaceURI, e.tagName) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
		}
		function Cu(e) {
			return Te(e) && (console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", we(e)), Ee(e)), (typeof e == "string" ? e : "" + e).replace(TS, "\n").replace(ES, "");
		}
		function wu(e, t) {
			return t = Cu(t), Cu(e) === t;
		}
		function Tu(e, t, n, r, i, a) {
			switch (n) {
				case "children":
					typeof r == "string" ? (Jt(r, t, !1), t === "body" || t === "textarea" && r === "" || Yt(e, r)) : (typeof r == "number" || typeof r == "bigint") && (Jt("" + r, t, !1), t !== "body" && Yt(e, "" + r));
					break;
				case "className":
					ot(e, "class", r);
					break;
				case "tabIndex":
					ot(e, "tabindex", r);
					break;
				case "dir":
				case "role":
				case "viewBox":
				case "width":
				case "height":
					ot(e, n, r);
					break;
				case "style":
					Qt(e, r, a);
					break;
				case "data": if (t !== "object") {
					ot(e, "data", r);
					break;
				}
				case "src":
				case "href":
					if (r === "" && (t !== "a" || n !== "href")) {
						console.error(n === "src" ? "An empty string (\"\") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string." : "An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", n, n), e.removeAttribute(n);
						break;
					}
					if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
						e.removeAttribute(n);
						break;
					}
					O(r, n), r = on("" + r), e.setAttribute(n, r);
					break;
				case "action":
				case "formAction":
					if (r != null && (t === "form" ? n === "formAction" ? console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>.") : typeof r == "function" && (i.encType == null && i.method == null || SS || (SS = !0, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")), i.target == null || xS || (xS = !0, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))) : t === "input" || t === "button" ? n === "action" ? console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>.") : t !== "input" || i.type === "submit" || i.type === "image" || yS ? t !== "button" || i.type == null || i.type === "submit" || yS ? typeof r == "function" && (i.name == null || bS || (bS = !0, console.error("Cannot specify a \"name\" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.")), i.formEncType == null && i.formMethod == null || SS || (SS = !0, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")), i.formTarget == null || xS || (xS = !0, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))) : (yS = !0, console.error("A button can only specify a formAction along with type=\"submit\" or no type.")) : (yS = !0, console.error("An input can only specify a formAction along with type=\"submit\" or type=\"image\".")) : console.error(n === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>.")), typeof r == "function") {
						e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
						break;
					} else typeof a == "function" && (n === "formAction" ? (t !== "input" && Tu(e, t, "name", i.name, i, null), Tu(e, t, "formEncType", i.formEncType, i, null), Tu(e, t, "formMethod", i.formMethod, i, null), Tu(e, t, "formTarget", i.formTarget, i, null)) : (Tu(e, t, "encType", i.encType, i, null), Tu(e, t, "method", i.method, i, null), Tu(e, t, "target", i.target, i, null)));
					if (r == null || typeof r == "symbol" || typeof r == "boolean") {
						e.removeAttribute(n);
						break;
					}
					O(r, n), r = on("" + r), e.setAttribute(n, r);
					break;
				case "onClick":
					r != null && (typeof r != "function" && xu(n, r), e.onclick = sn);
					break;
				case "onScroll":
					r != null && (typeof r != "function" && xu(n, r), R("scroll", e));
					break;
				case "onScrollEnd":
					r != null && (typeof r != "function" && xu(n, r), R("scrollend", e));
					break;
				case "dangerouslySetInnerHTML":
					if (r != null) {
						if (typeof r != "object" || !("__html" in r)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
						if (n = r.__html, n != null) {
							if (i.children != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
							e.innerHTML = n;
						}
					}
					break;
				case "multiple":
					e.multiple = r && typeof r != "function" && typeof r != "symbol";
					break;
				case "muted":
					e.muted = r && typeof r != "function" && typeof r != "symbol";
					break;
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "ref": break;
				case "autoFocus": break;
				case "xlinkHref":
					if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
						e.removeAttribute("xlink:href");
						break;
					}
					O(r, n), n = on("" + r), e.setAttributeNS(DS, "xlink:href", n);
					break;
				case "contentEditable":
				case "spellCheck":
				case "draggable":
				case "value":
				case "autoReverse":
				case "externalResourcesRequired":
				case "focusable":
				case "preserveAlpha":
					r != null && typeof r != "function" && typeof r != "symbol" ? (O(r, n), e.setAttribute(n, "" + r)) : e.removeAttribute(n);
					break;
				case "inert": r !== "" || wS[n] || (wS[n] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", n));
				case "allowFullScreen":
				case "async":
				case "autoPlay":
				case "controls":
				case "default":
				case "defer":
				case "disabled":
				case "disablePictureInPicture":
				case "disableRemotePlayback":
				case "formNoValidate":
				case "hidden":
				case "loop":
				case "noModule":
				case "noValidate":
				case "open":
				case "playsInline":
				case "readOnly":
				case "required":
				case "reversed":
				case "scoped":
				case "seamless":
				case "itemScope":
					r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
					break;
				case "capture":
				case "download":
					!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? (O(r, n), e.setAttribute(n, r)) : e.removeAttribute(n);
					break;
				case "cols":
				case "rows":
				case "size":
				case "span":
					r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? (O(r, n), e.setAttribute(n, r)) : e.removeAttribute(n);
					break;
				case "rowSpan":
				case "start":
					r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : (O(r, n), e.setAttribute(n, r));
					break;
				case "popover":
					R("beforetoggle", e), R("toggle", e), at(e, "popover", r);
					break;
				case "xlinkActuate":
					st(e, DS, "xlink:actuate", r);
					break;
				case "xlinkArcrole":
					st(e, DS, "xlink:arcrole", r);
					break;
				case "xlinkRole":
					st(e, DS, "xlink:role", r);
					break;
				case "xlinkShow":
					st(e, DS, "xlink:show", r);
					break;
				case "xlinkTitle":
					st(e, DS, "xlink:title", r);
					break;
				case "xlinkType":
					st(e, DS, "xlink:type", r);
					break;
				case "xmlBase":
					st(e, OS, "xml:base", r);
					break;
				case "xmlLang":
					st(e, OS, "xml:lang", r);
					break;
				case "xmlSpace":
					st(e, OS, "xml:space", r);
					break;
				case "is":
					a != null && console.error("Cannot update the \"is\" prop after it has been initialized."), at(e, "is", r);
					break;
				case "innerText":
				case "textContent": break;
				case "popoverTarget": CS || typeof r != "object" || !r || (CS = !0, console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.", r));
				default: !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N" ? (n = en(n), at(e, n, r)) : nm.hasOwnProperty(n) && r != null && typeof r != "function" && xu(n, r);
			}
		}
		function Eu(e, t, n, r, i, a) {
			switch (n) {
				case "style":
					Qt(e, r, a);
					break;
				case "dangerouslySetInnerHTML":
					if (r != null) {
						if (typeof r != "object" || !("__html" in r)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
						if (n = r.__html, n != null) {
							if (i.children != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
							e.innerHTML = n;
						}
					}
					break;
				case "children":
					typeof r == "string" ? Yt(e, r) : (typeof r == "number" || typeof r == "bigint") && Yt(e, "" + r);
					break;
				case "onScroll":
					r != null && (typeof r != "function" && xu(n, r), R("scroll", e));
					break;
				case "onScrollEnd":
					r != null && (typeof r != "function" && xu(n, r), R("scrollend", e));
					break;
				case "onClick":
					r != null && (typeof r != "function" && xu(n, r), e.onclick = sn);
					break;
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "innerHTML":
				case "ref": break;
				case "innerText":
				case "textContent": break;
				default: if (nm.hasOwnProperty(n)) r != null && typeof r != "function" && xu(n, r);
				else a: {
					if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), a = e[Jp] || null, a = a == null ? null : a[n], typeof a == "function" && e.removeEventListener(t, a, i), typeof r == "function")) {
						typeof a != "function" && a !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, i);
						break a;
					}
					n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : at(e, n, r);
				}
			}
		}
		function Du(e, t, n) {
			switch (vu(t, n), t) {
				case "div":
				case "span":
				case "svg":
				case "path":
				case "a":
				case "g":
				case "p":
				case "li": break;
				case "img":
					R("error", e), R("load", e);
					var r = !1, i = !1, a;
					for (a in n) if (n.hasOwnProperty(a)) {
						var o = n[a];
						if (o != null) switch (a) {
							case "src":
								r = !0;
								break;
							case "srcSet":
								i = !0;
								break;
							case "children":
							case "dangerouslySetInnerHTML": throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
							default: Tu(e, t, a, o, n, null);
						}
					}
					i && Tu(e, t, "srcSet", n.srcSet, n, null), r && Tu(e, t, "src", n.src, n, null);
					return;
				case "input":
					tt("input", n), R("invalid", e);
					var s = a = o = i = null, c = null, l = null;
					for (r in n) if (n.hasOwnProperty(r)) {
						var u = n[r];
						if (u != null) switch (r) {
							case "name":
								i = u;
								break;
							case "type":
								o = u;
								break;
							case "checked":
								c = u;
								break;
							case "defaultChecked":
								l = u;
								break;
							case "value":
								a = u;
								break;
							case "defaultValue":
								s = u;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (u != null) throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
								break;
							default: Tu(e, t, r, u, n, null);
						}
					}
					ht(e, n), _t(e, a, s, c, l, o, i, !1);
					return;
				case "select":
					for (i in tt("select", n), R("invalid", e), r = o = a = null, n) if (n.hasOwnProperty(i) && (s = n[i], s != null)) switch (i) {
						case "value":
							a = s;
							break;
						case "defaultValue":
							o = s;
							break;
						case "multiple": r = s;
						default: Tu(e, t, i, s, n, null);
					}
					St(e, n), t = a, n = o, e.multiple = !!r, t == null ? n != null && xt(e, !!r, n, !0) : xt(e, !!r, t, !1);
					return;
				case "textarea":
					for (o in tt("textarea", n), R("invalid", e), a = i = r = null, n) if (n.hasOwnProperty(o) && (s = n[o], s != null)) switch (o) {
						case "value":
							r = s;
							break;
						case "defaultValue":
							i = s;
							break;
						case "children":
							a = s;
							break;
						case "dangerouslySetInnerHTML":
							if (s != null) throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
							break;
						default: Tu(e, t, o, s, n, null);
					}
					Ct(e, n), Tt(e, r, i, a);
					return;
				case "option":
					for (c in yt(e, n), n) if (n.hasOwnProperty(c) && (r = n[c], r != null)) switch (c) {
						case "selected":
							e.selected = r && typeof r != "function" && typeof r != "symbol";
							break;
						default: Tu(e, t, c, r, n, null);
					}
					return;
				case "dialog":
					R("beforetoggle", e), R("toggle", e), R("cancel", e), R("close", e);
					break;
				case "iframe":
				case "object":
					R("load", e);
					break;
				case "video":
				case "audio":
					for (r = 0; r < mS.length; r++) R(mS[r], e);
					break;
				case "image":
					R("error", e), R("load", e);
					break;
				case "details":
					R("toggle", e);
					break;
				case "embed":
				case "source":
				case "link": R("error", e), R("load", e);
				case "area":
				case "base":
				case "br":
				case "col":
				case "hr":
				case "keygen":
				case "meta":
				case "param":
				case "track":
				case "wbr":
				case "menuitem":
					for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
						default: Tu(e, t, l, r, n, null);
					}
					return;
				default: if ($t(t)) {
					for (u in n) n.hasOwnProperty(u) && (r = n[u], r !== void 0 && Eu(e, t, u, r, n, void 0));
					return;
				}
			}
			for (s in n) n.hasOwnProperty(s) && (r = n[s], r != null && Tu(e, t, s, r, n, null));
		}
		function Ou(e, t, n, r) {
			switch (vu(t, r), t) {
				case "div":
				case "span":
				case "svg":
				case "path":
				case "a":
				case "g":
				case "p":
				case "li": break;
				case "input":
					var i = null, a = null, o = null, s = null, c = null, l = null, u = null;
					for (p in n) {
						var d = n[p];
						if (n.hasOwnProperty(p) && d != null) switch (p) {
							case "checked": break;
							case "value": break;
							case "defaultValue": c = d;
							default: r.hasOwnProperty(p) || Tu(e, t, p, null, r, d);
						}
					}
					for (var f in r) {
						var p = r[f];
						if (d = n[f], r.hasOwnProperty(f) && (p != null || d != null)) switch (f) {
							case "type":
								a = p;
								break;
							case "name":
								i = p;
								break;
							case "checked":
								l = p;
								break;
							case "defaultChecked":
								u = p;
								break;
							case "value":
								o = p;
								break;
							case "defaultValue":
								s = p;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (p != null) throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
								break;
							default: p !== d && Tu(e, t, f, p, r, d);
						}
					}
					t = n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null, r = r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null, t || !r || vS || (console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"), vS = !0), !t || r || _S || (console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"), _S = !0), gt(e, o, s, c, l, u, a, i);
					return;
				case "select":
					for (a in p = o = s = f = null, n) if (c = n[a], n.hasOwnProperty(a) && c != null) switch (a) {
						case "value": break;
						case "multiple": p = c;
						default: r.hasOwnProperty(a) || Tu(e, t, a, null, r, c);
					}
					for (i in r) if (a = r[i], c = n[i], r.hasOwnProperty(i) && (a != null || c != null)) switch (i) {
						case "value":
							f = a;
							break;
						case "defaultValue":
							s = a;
							break;
						case "multiple": o = a;
						default: a !== c && Tu(e, t, i, a, r, c);
					}
					r = s, t = o, n = p, f == null ? !!n != !!t && (r == null ? xt(e, !!t, t ? [] : "", !1) : xt(e, !!t, r, !0)) : xt(e, !!t, f, !1);
					return;
				case "textarea":
					for (s in p = f = null, n) if (i = n[s], n.hasOwnProperty(s) && i != null && !r.hasOwnProperty(s)) switch (s) {
						case "value": break;
						case "children": break;
						default: Tu(e, t, s, null, r, i);
					}
					for (o in r) if (i = r[o], a = n[o], r.hasOwnProperty(o) && (i != null || a != null)) switch (o) {
						case "value":
							f = i;
							break;
						case "defaultValue":
							p = i;
							break;
						case "children": break;
						case "dangerouslySetInnerHTML":
							if (i != null) throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
							break;
						default: i !== a && Tu(e, t, o, i, r, a);
					}
					wt(e, f, p);
					return;
				case "option":
					for (var m in n) if (f = n[m], n.hasOwnProperty(m) && f != null && !r.hasOwnProperty(m)) switch (m) {
						case "selected":
							e.selected = !1;
							break;
						default: Tu(e, t, m, null, r, f);
					}
					for (c in r) if (f = r[c], p = n[c], r.hasOwnProperty(c) && f !== p && (f != null || p != null)) switch (c) {
						case "selected":
							e.selected = f && typeof f != "function" && typeof f != "symbol";
							break;
						default: Tu(e, t, c, f, r, p);
					}
					return;
				case "img":
				case "link":
				case "area":
				case "base":
				case "br":
				case "col":
				case "embed":
				case "hr":
				case "keygen":
				case "meta":
				case "param":
				case "source":
				case "track":
				case "wbr":
				case "menuitem":
					for (var h in n) f = n[h], n.hasOwnProperty(h) && f != null && !r.hasOwnProperty(h) && Tu(e, t, h, null, r, f);
					for (l in r) if (f = r[l], p = n[l], r.hasOwnProperty(l) && f !== p && (f != null || p != null)) switch (l) {
						case "children":
						case "dangerouslySetInnerHTML":
							if (f != null) throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
							break;
						default: Tu(e, t, l, f, r, p);
					}
					return;
				default: if ($t(t)) {
					for (var g in n) f = n[g], n.hasOwnProperty(g) && f !== void 0 && !r.hasOwnProperty(g) && Eu(e, t, g, void 0, r, f);
					for (u in r) f = r[u], p = n[u], !r.hasOwnProperty(u) || f === p || f === void 0 && p === void 0 || Eu(e, t, u, f, r, p);
					return;
				}
			}
			for (var _ in n) f = n[_], n.hasOwnProperty(_) && f != null && !r.hasOwnProperty(_) && Tu(e, t, _, null, r, f);
			for (d in r) f = r[d], p = n[d], !r.hasOwnProperty(d) || f === p || f == null && p == null || Tu(e, t, d, f, r, p);
		}
		function ku(e) {
			switch (e) {
				case "class": return "className";
				case "for": return "htmlFor";
				default: return e;
			}
		}
		function Au(e) {
			var t = {};
			e = e.style;
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				t[r] = e.getPropertyValue(r);
			}
			return t;
		}
		function ju(e, t, n) {
			if (t != null && typeof t != "object") console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
			else {
				var r, i = r = "", a;
				for (a in t) if (t.hasOwnProperty(a)) {
					var o = t[a];
					o != null && typeof o != "boolean" && o !== "" && (a.indexOf("--") === 0 ? (De(o, a), r += i + a + ":" + ("" + o).trim()) : typeof o != "number" || o === 0 || Fm.has(a) ? (De(o, a), r += i + a.replace(Tm, "-$1").toLowerCase().replace(Em, "-ms-") + ":" + ("" + o).trim()) : r += i + a.replace(Tm, "-$1").toLowerCase().replace(Em, "-ms-") + ":" + o + "px", i = ";");
				}
				r ||= null, t = e.getAttribute("style"), t !== r && (r = Cu(r), Cu(t) !== r && (n.style = Au(e)));
			}
		}
		function Mu(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean": return;
			}
			else if (r != null) switch (typeof r) {
				case "function":
				case "symbol":
				case "boolean": break;
				default: if (O(r, t), e === "" + r) return;
			}
			yu(t, e, r, a);
		}
		function Nu(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) {
				switch (typeof r) {
					case "function":
					case "symbol": return;
				}
				if (!r) return;
			} else switch (typeof r) {
				case "function":
				case "symbol": break;
				default: if (r) return;
			}
			yu(t, e, r, a);
		}
		function Pu(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol": return;
			}
			else if (r != null) switch (typeof r) {
				case "function":
				case "symbol": break;
				default: if (O(r, n), e === "" + r) return;
			}
			yu(t, e, r, a);
		}
		function Fu(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean": return;
				default: if (isNaN(r)) return;
			}
			else if (r != null) switch (typeof r) {
				case "function":
				case "symbol":
				case "boolean": break;
				default: if (!isNaN(r) && (O(r, t), e === "" + r)) return;
			}
			yu(t, e, r, a);
		}
		function Iu(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean": return;
			}
			else if (r != null) switch (typeof r) {
				case "function":
				case "symbol":
				case "boolean": break;
				default: if (O(r, t), n = on("" + r), e === n) return;
			}
			yu(t, e, r, a);
		}
		function Lu(e, t, n, r) {
			for (var i = {}, a = /* @__PURE__ */ new Set(), o = e.attributes, s = 0; s < o.length; s++) switch (o[s].name.toLowerCase()) {
				case "value": break;
				case "checked": break;
				case "selected": break;
				default: a.add(o[s].name);
			}
			if ($t(t)) {
				for (var c in n) if (n.hasOwnProperty(c)) {
					var l = n[c];
					if (l != null) {
						if (nm.hasOwnProperty(c)) typeof l != "function" && xu(c, l);
						else if (!0 !== n.suppressHydrationWarning) switch (c) {
							case "children":
								typeof l != "string" && typeof l != "number" || yu("children", e.textContent, l, i);
								continue;
							case "suppressContentEditableWarning":
							case "suppressHydrationWarning":
							case "defaultValue":
							case "defaultChecked":
							case "innerHTML":
							case "ref": continue;
							case "dangerouslySetInnerHTML":
								o = e.innerHTML, l = l ? l.__html : void 0, l != null && (l = Su(e, l), yu(c, o, l, i));
								continue;
							case "style":
								a.delete(c), ju(e, l, i);
								continue;
							case "offsetParent":
							case "offsetTop":
							case "offsetLeft":
							case "offsetWidth":
							case "offsetHeight":
							case "isContentEditable":
							case "outerText":
							case "outerHTML":
								a.delete(c.toLowerCase()), console.error("Assignment to read-only property will result in a no-op: `%s`", c);
								continue;
							case "className":
								a.delete("class"), o = rt(e, "class", l), yu("className", o, l, i);
								continue;
							default: r.context === GS && t !== "svg" && t !== "math" ? a.delete(c.toLowerCase()) : a.delete(c), o = rt(e, c, l), yu(c, o, l, i);
						}
					}
				}
			} else for (l in n) if (n.hasOwnProperty(l) && (c = n[l], c != null)) {
				if (nm.hasOwnProperty(l)) typeof c != "function" && xu(l, c);
				else if (!0 !== n.suppressHydrationWarning) switch (l) {
					case "children":
						typeof c != "string" && typeof c != "number" || yu("children", e.textContent, c, i);
						continue;
					case "suppressContentEditableWarning":
					case "suppressHydrationWarning":
					case "value":
					case "checked":
					case "selected":
					case "defaultValue":
					case "defaultChecked":
					case "innerHTML":
					case "ref": continue;
					case "dangerouslySetInnerHTML":
						o = e.innerHTML, c = c ? c.__html : void 0, c != null && (c = Su(e, c), o !== c && (i[l] = { __html: o }));
						continue;
					case "className":
						Mu(e, l, "class", c, a, i);
						continue;
					case "tabIndex":
						Mu(e, l, "tabindex", c, a, i);
						continue;
					case "style":
						a.delete(l), ju(e, c, i);
						continue;
					case "multiple":
						a.delete(l), yu(l, e.multiple, c, i);
						continue;
					case "muted":
						a.delete(l), yu(l, e.muted, c, i);
						continue;
					case "autoFocus":
						a.delete("autofocus"), yu(l, e.autofocus, c, i);
						continue;
					case "data": if (t !== "object") {
						a.delete(l), o = e.getAttribute("data"), yu(l, o, c, i);
						continue;
					}
					case "src":
					case "href":
						if (!(c !== "" || t === "a" && l === "href" || t === "object" && l === "data")) {
							console.error(l === "src" ? "An empty string (\"\") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string." : "An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", l, l);
							continue;
						}
						Iu(e, l, l, c, a, i);
						continue;
					case "action":
					case "formAction":
						if (o = e.getAttribute(l), typeof c == "function") {
							a.delete(l.toLowerCase()), l === "formAction" ? (a.delete("name"), a.delete("formenctype"), a.delete("formmethod"), a.delete("formtarget")) : (a.delete("enctype"), a.delete("method"), a.delete("target"));
							continue;
						} else if (o === kS) {
							a.delete(l.toLowerCase()), yu(l, "function", c, i);
							continue;
						}
						Iu(e, l, l.toLowerCase(), c, a, i);
						continue;
					case "xlinkHref":
						Iu(e, l, "xlink:href", c, a, i);
						continue;
					case "contentEditable":
						Pu(e, l, "contenteditable", c, a, i);
						continue;
					case "spellCheck":
						Pu(e, l, "spellcheck", c, a, i);
						continue;
					case "draggable":
					case "autoReverse":
					case "externalResourcesRequired":
					case "focusable":
					case "preserveAlpha":
						Pu(e, l, l, c, a, i);
						continue;
					case "allowFullScreen":
					case "async":
					case "autoPlay":
					case "controls":
					case "default":
					case "defer":
					case "disabled":
					case "disablePictureInPicture":
					case "disableRemotePlayback":
					case "formNoValidate":
					case "hidden":
					case "loop":
					case "noModule":
					case "noValidate":
					case "open":
					case "playsInline":
					case "readOnly":
					case "required":
					case "reversed":
					case "scoped":
					case "seamless":
					case "itemScope":
						Nu(e, l, l.toLowerCase(), c, a, i);
						continue;
					case "capture":
					case "download":
						a: {
							s = e;
							var u = o = l, d = i;
							if (a.delete(u), s = s.getAttribute(u), s === null) switch (typeof c) {
								case "undefined":
								case "function":
								case "symbol": break a;
								default: if (!1 === c) break a;
							}
							else if (c != null) switch (typeof c) {
								case "function":
								case "symbol": break;
								case "boolean":
									if (!0 === c && s === "") break a;
									break;
								default: if (O(c, o), s === "" + c) break a;
							}
							yu(o, s, c, d);
						}
						continue;
					case "cols":
					case "rows":
					case "size":
					case "span":
						a: {
							if (s = e, u = o = l, d = i, a.delete(u), s = s.getAttribute(u), s === null) switch (typeof c) {
								case "undefined":
								case "function":
								case "symbol":
								case "boolean": break a;
								default: if (isNaN(c) || 1 > c) break a;
							}
							else if (c != null) switch (typeof c) {
								case "function":
								case "symbol":
								case "boolean": break;
								default: if (!(isNaN(c) || 1 > c) && (O(c, o), s === "" + c)) break a;
							}
							yu(o, s, c, d);
						}
						continue;
					case "rowSpan":
						Fu(e, l, "rowspan", c, a, i);
						continue;
					case "start":
						Fu(e, l, l, c, a, i);
						continue;
					case "xHeight":
						Mu(e, l, "x-height", c, a, i);
						continue;
					case "xlinkActuate":
						Mu(e, l, "xlink:actuate", c, a, i);
						continue;
					case "xlinkArcrole":
						Mu(e, l, "xlink:arcrole", c, a, i);
						continue;
					case "xlinkRole":
						Mu(e, l, "xlink:role", c, a, i);
						continue;
					case "xlinkShow":
						Mu(e, l, "xlink:show", c, a, i);
						continue;
					case "xlinkTitle":
						Mu(e, l, "xlink:title", c, a, i);
						continue;
					case "xlinkType":
						Mu(e, l, "xlink:type", c, a, i);
						continue;
					case "xmlBase":
						Mu(e, l, "xml:base", c, a, i);
						continue;
					case "xmlLang":
						Mu(e, l, "xml:lang", c, a, i);
						continue;
					case "xmlSpace":
						Mu(e, l, "xml:space", c, a, i);
						continue;
					case "inert":
						c !== "" || wS[l] || (wS[l] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", l)), Nu(e, l, l, c, a, i);
						continue;
					default: if (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") {
						s = en(l), o = !1, r.context === GS && t !== "svg" && t !== "math" ? a.delete(s.toLowerCase()) : (u = l.toLowerCase(), u = zm.hasOwnProperty(u) && zm[u] || null, u !== null && u !== l && (o = !0, a.delete(u)), a.delete(s));
						a: if (u = e, d = s, s = c, nt(d)) if (u.hasAttribute(d)) u = u.getAttribute(d), O(s, d), s = u === "" + s ? s : u;
						else {
							switch (typeof s) {
								case "function":
								case "symbol": break a;
								case "boolean": if (u = d.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") break a;
							}
							s = s === void 0 ? void 0 : null;
						}
						else s = void 0;
						o || yu(l, s, c, i);
					}
				}
			}
			return 0 < a.size && !0 !== n.suppressHydrationWarning && bu(e, a, i), Object.keys(i).length === 0 ? null : i;
		}
		function Ru(e, t) {
			switch (e.length) {
				case 0: return "";
				case 1: return e[0];
				case 2: return e[0] + " " + t + " " + e[1];
				default: return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
			}
		}
		function zu(e) {
			switch (e) {
				case "css":
				case "script":
				case "font":
				case "img":
				case "image":
				case "input":
				case "link": return !0;
				default: return !1;
			}
		}
		function Bu() {
			if (typeof performance.getEntriesByType == "function") {
				for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
					var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
					if (a && s && zu(o)) {
						for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
							var c = n[r], l = c.startTime;
							if (l > s) break;
							var u = c.transferSize, d = c.initiatorType;
							u && zu(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
						}
						if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
					}
				}
				if (0 < e) return t / e / 1e6;
			}
			return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
		}
		function Vu(e) {
			return e.nodeType === 9 ? e : e.ownerDocument;
		}
		function Hu(e) {
			switch (e) {
				case Lm: return KS;
				case Im: return qS;
				default: return GS;
			}
		}
		function Uu(e, t) {
			if (e === GS) switch (t) {
				case "svg": return KS;
				case "math": return qS;
				default: return GS;
			}
			return e === KS && t === "foreignObject" ? GS : e;
		}
		function Wu(e, t) {
			return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
		}
		function Gu() {
			var e = window.event;
			return e && e.type === "popstate" ? e === ZS ? !1 : (ZS = e, !0) : (ZS = null, !1);
		}
		function Ku() {
			var e = window.event;
			return e && e !== QS ? e.type : null;
		}
		function qu() {
			var e = window.event;
			return e && e !== QS ? e.timeStamp : -1.1;
		}
		function Ju(e) {
			setTimeout(function() {
				throw e;
			});
		}
		function Yu(e, t, n) {
			switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && e.focus();
					break;
				case "img": n.src ? e.src = n.src : n.srcSet && (e.srcset = n.srcSet);
			}
		}
		function Xu() {}
		function Zu(e, t, n, r) {
			Ou(e, t, n, r), e[Jp] = r;
		}
		function Qu(e) {
			Yt(e, "");
		}
		function $u(e, t, n) {
			e.nodeValue = n;
		}
		function ed(e) {
			if (!e.__reactWarnedAboutChildrenConflict) {
				var t = e[Jp] || null;
				if (t !== null) {
					var n = Xe(e);
					n !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, D(n, function() {
						console.error("Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets \"children\" text content using React. It should be a leaf with no children. Otherwise it's ambiguous which children should be used.");
					})) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, D(n, function() {
						console.error("Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets \"dangerouslySetInnerHTML\" using React. It should be a leaf with no children. Otherwise it's ambiguous which children should be used.");
					})));
				}
			}
		}
		function td(e) {
			return e === "head";
		}
		function nd(e, t) {
			e.removeChild(t);
		}
		function rd(e, t) {
			(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
		}
		function id(e, t) {
			var n = t, r = 0;
			do {
				var i = n.nextSibling;
				if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === PS || n === MS) {
					if (r === 0) {
						e.removeChild(i), Cf(t);
						return;
					}
					r--;
				} else if (n === NS || n === FS || n === IS || n === LS || n === jS) r++;
				else if (n === RS) kd(e.ownerDocument.documentElement);
				else if (n === BS) {
					n = e.ownerDocument.head, kd(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[em] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === zS && kd(e.ownerDocument.body);
				n = i;
			} while (n);
			Cf(t);
		}
		function ad(e, t) {
			var n = e;
			e = 0;
			do {
				var r = n.nextSibling;
				if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) if (n = r.data, n === PS) {
					if (e === 0) break;
					e--;
				} else n !== NS && n !== FS && n !== IS && n !== LS || e++;
				n = r;
			} while (n);
		}
		function od(e) {
			ad(e, !0);
		}
		function sd(e) {
			e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
		}
		function cd(e) {
			e.nodeValue = "";
		}
		function ld(e) {
			ad(e, !1);
		}
		function ud(e, t) {
			t = t[WS], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
		}
		function dd(e, t) {
			e.nodeValue = t;
		}
		function fd(e) {
			var t = e.firstChild;
			for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
				var n = t;
				switch (t = t.nextSibling, n.nodeName) {
					case "HTML":
					case "HEAD":
					case "BODY":
						fd(n), Je(n);
						continue;
					case "SCRIPT":
					case "STYLE": continue;
					case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
				}
				e.removeChild(n);
			}
		}
		function pd(e, t, n, r) {
			for (; e.nodeType === 1;) {
				var i = n;
				if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
					if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
				} else if (!r) if (t === "input" && e.type === "hidden") {
					O(i.name, "name");
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
				else if (!e[em]) switch (t) {
					case "meta":
						if (!e.hasAttribute("itemprop")) break;
						return e;
					case "link":
						if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
						return e;
					case "style":
						if (e.hasAttribute("data-precedence")) break;
						return e;
					case "script":
						if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
						return e;
					default: return e;
				}
				if (e = yd(e.nextSibling), e === null) break;
			}
			return null;
		}
		function md(e, t, n) {
			if (t === "") return null;
			for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = yd(e.nextSibling), e === null)) return null;
			return e;
		}
		function hd(e, t) {
			for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = yd(e.nextSibling), e === null)) return null;
			return e;
		}
		function gd(e) {
			return e.data === FS || e.data === IS;
		}
		function _d(e) {
			return e.data === LS || e.data === FS && e.ownerDocument.readyState !== US;
		}
		function vd(e, t) {
			var n = e.ownerDocument;
			if (e.data === IS) e._reactRetry = t;
			else if (e.data !== FS || n.readyState !== US) t();
			else {
				var r = function() {
					t(), n.removeEventListener("DOMContentLoaded", r);
				};
				n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
			}
		}
		function yd(e) {
			for (; e != null; e = e.nextSibling) {
				var t = e.nodeType;
				if (t === 1 || t === 3) break;
				if (t === 8) {
					if (t = e.data, t === NS || t === LS || t === FS || t === IS || t === jS || t === VS || t === HS) break;
					if (t === PS || t === MS) return null;
				}
			}
			return e;
		}
		function bd(e) {
			if (e.nodeType === 1) {
				for (var t = e.nodeName.toLowerCase(), n = {}, r = e.attributes, i = 0; i < r.length; i++) {
					var a = r[i];
					n[ku(a.name)] = a.name.toLowerCase() === "style" ? Au(e) : a.value;
				}
				return {
					type: t,
					props: n
				};
			}
			return e.nodeType === 8 ? e.data === jS ? {
				type: "Activity",
				props: {}
			} : {
				type: "Suspense",
				props: {}
			} : e.nodeValue;
		}
		function xd(e, t, n) {
			return n === null || !0 !== n[AS] ? (e.nodeValue === t ? e = null : (t = Cu(t), e = Cu(e.nodeValue) === t ? null : e.nodeValue), e) : null;
		}
		function Sd(e) {
			e = e.nextSibling;
			for (var t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === PS || n === MS) {
						if (t === 0) return yd(e.nextSibling);
						t--;
					} else n !== NS && n !== LS && n !== FS && n !== IS && n !== jS || t++;
				}
				e = e.nextSibling;
			}
			return null;
		}
		function Cd(e) {
			e = e.previousSibling;
			for (var t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === NS || n === LS || n === FS || n === IS || n === jS) {
						if (t === 0) return e;
						t--;
					} else n !== PS && n !== MS || t++;
				}
				e = e.previousSibling;
			}
			return null;
		}
		function wd(e) {
			Cf(e);
		}
		function Td(e) {
			Cf(e);
		}
		function Ed(e) {
			Cf(e);
		}
		function Dd(e, t, n, r, i) {
			switch (i && qt(e, r.ancestorInfo), t = Vu(n), e) {
				case "html":
					if (e = t.documentElement, !e) throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");
					return e;
				case "head":
					if (e = t.head, !e) throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");
					return e;
				case "body":
					if (e = t.body, !e) throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");
					return e;
				default: throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.");
			}
		}
		function Od(e, t, n, r) {
			if (!n[Yp] && Xe(n)) {
				var i = n.tagName.toLowerCase();
				console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.", i, i, i);
			}
			switch (e) {
				case "html":
				case "head":
				case "body": break;
				default: console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.");
			}
			for (i = n.attributes; i.length;) n.removeAttributeNode(i[0]);
			Du(n, e, t), n[qp] = r, n[Jp] = t;
		}
		function kd(e) {
			for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
			Je(e);
		}
		function Ad(e) {
			return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
		}
		function jd(e, t, n) {
			var r = pC;
			if (r && typeof t == "string" && t) {
				var i = mt(t);
				i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), dC.has(i) || (dC.add(i), e = {
					rel: e,
					crossOrigin: n,
					href: t
				}, r.querySelector(i) === null && (t = r.createElement("link"), Du(t, "link", e), $e(t), r.head.appendChild(t)));
			}
		}
		function Md(e, t, n, r) {
			var i = (i = np.current) ? Ad(i) : null;
			if (!i) throw Error("\"resourceRoot\" was expected to exist. This is a bug in React.");
			switch (e) {
				case "meta":
				case "title": return null;
				case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = z(n.href), t = Qe(i).hoistableStyles, r = t.get(n), r || (r = {
					type: "style",
					instance: null,
					count: 0,
					state: null
				}, t.set(n, r)), r) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
				case "link":
					if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
						e = z(n.href);
						var a = Qe(i).hoistableStyles, o = a.get(e);
						if (!o && (i = i.ownerDocument || i, o = {
							type: "stylesheet",
							instance: null,
							count: 0,
							state: {
								loading: aC,
								preload: null
							}
						}, a.set(e, o), (a = i.querySelector(Pd(e))) && !a._p && (o.instance = a, o.state.loading = oC | lC), !uC.has(e))) {
							var s = {
								rel: "preload",
								as: "style",
								href: n.href,
								crossOrigin: n.crossOrigin,
								integrity: n.integrity,
								media: n.media,
								hrefLang: n.hrefLang,
								referrerPolicy: n.referrerPolicy
							};
							uC.set(e, s), a || Id(i, e, s, o.state);
						}
						if (t && r === null) throw n = "\n\n  - " + Nd(t) + "\n  + " + Nd(n), Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n);
						return o;
					}
					if (t && r !== null) throw n = "\n\n  - " + Nd(t) + "\n  + " + Nd(n), Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n);
					return null;
				case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Ld(n), t = Qe(i).hoistableScripts, r = t.get(n), r || (r = {
					type: "script",
					instance: null,
					count: 0,
					state: null
				}, t.set(n, r)), r) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
				default: throw Error("getResource encountered a type it did not expect: \"" + e + "\". this is a bug in React.");
			}
		}
		function Nd(e) {
			var t = 0, n = "<link";
			return typeof e.rel == "string" ? (t++, n += " rel=\"" + e.rel + "\"") : vp.call(e, "rel") && (t++, n += " rel=\"" + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + "\""), typeof e.href == "string" ? (t++, n += " href=\"" + e.href + "\"") : vp.call(e, "href") && (t++, n += " href=\"" + (e.href === null ? "null" : "invalid type " + typeof e.href) + "\""), typeof e.precedence == "string" ? (t++, n += " precedence=\"" + e.precedence + "\"") : vp.call(e, "precedence") && (t++, n += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (n += " ..."), n + " />";
		}
		function z(e) {
			return "href=\"" + mt(e) + "\"";
		}
		function Pd(e) {
			return "link[rel=\"stylesheet\"][" + e + "]";
		}
		function Fd(e) {
			return B({}, e, {
				"data-precedence": e.precedence,
				precedence: null
			});
		}
		function Id(e, t, n, r) {
			e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]") ? r.loading = oC : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
				return r.loading |= oC;
			}), t.addEventListener("error", function() {
				return r.loading |= sC;
			}), Du(t, "link", n), $e(t), e.head.appendChild(t));
		}
		function Ld(e) {
			return "[src=\"" + mt(e) + "\"]";
		}
		function Rd(e) {
			return "script[async]" + e;
		}
		function zd(e, t, n) {
			if (t.count++, t.instance === null) switch (t.type) {
				case "style":
					var r = e.querySelector("style[data-href~=\"" + mt(n.href) + "\"]");
					if (r) return t.instance = r, $e(r), r;
					var i = B({}, n, {
						"data-href": n.href,
						"data-precedence": n.precedence,
						href: null,
						precedence: null
					});
					return r = (e.ownerDocument || e).createElement("style"), $e(r), Du(r, "style", i), Bd(r, n.precedence, e), t.instance = r;
				case "stylesheet":
					i = z(n.href);
					var a = e.querySelector(Pd(i));
					if (a) return t.state.loading |= lC, t.instance = a, $e(a), a;
					r = Fd(n), (i = uC.get(i)) && Vd(r, i), a = (e.ownerDocument || e).createElement("link"), $e(a);
					var o = a;
					return o._p = new Promise(function(e, t) {
						o.onload = e, o.onerror = t;
					}), Du(a, "link", r), t.state.loading |= lC, Bd(a, n.precedence, e), t.instance = a;
				case "script": return a = Ld(n.src), (i = e.querySelector(Rd(a))) ? (t.instance = i, $e(i), i) : (r = n, (i = uC.get(a)) && (r = B({}, n), Hd(r, i)), e = e.ownerDocument || e, i = e.createElement("script"), $e(i), Du(i, "link", r), e.head.appendChild(i), t.instance = i);
				case "void": return null;
				default: throw Error("acquireResource encountered a resource type it did not expect: \"" + t.type + "\". this is a bug in React.");
			}
			else t.type === "stylesheet" && (t.state.loading & lC) === aC && (r = t.instance, t.state.loading |= lC, Bd(r, n.precedence, e));
			return t.instance;
		}
		function Bd(e, t, n) {
			for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
				var s = r[o];
				if (s.dataset.precedence === t) a = s;
				else if (a !== i) break;
			}
			a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
		}
		function Vd(e, t) {
			e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
		}
		function Hd(e, t) {
			e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
		}
		function Ud(e, t, n) {
			if (mC === null) {
				var r = /* @__PURE__ */ new Map(), i = mC = /* @__PURE__ */ new Map();
				i.set(n, r);
			} else i = mC, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
			if (r.has(e)) return r;
			for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
				var a = n[i];
				if (!(a[em] || a[qp] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== Lm) {
					var o = a.getAttribute(t) || "";
					o = e + o;
					var s = r.get(o);
					s ? s.push(a) : r.set(o, [a]);
				}
			}
			return r;
		}
		function Wd(e, t, n) {
			e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
		}
		function Gd(e, t, n) {
			var r = !n.ancestorInfo.containerTagInScope;
			if (n.context === KS || t.itemProp != null) return !r || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.", e, e), !1;
			switch (e) {
				case "meta":
				case "title": return !0;
				case "style":
					if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
						r && console.error("Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel=\"stylesheet\" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence=\"default\"` and `href=\"some unique resource identifier\"`.");
						break;
					}
					return !0;
				case "link":
					if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
						if (t.rel === "stylesheet" && typeof t.precedence == "string") {
							e = t.href;
							var i = t.onError, a = t.disabled;
							n = [], t.onLoad && n.push("`onLoad`"), i && n.push("`onError`"), a != null && n.push("`disabled`"), i = Ru(n, "and"), i += n.length === 1 ? " prop" : " props", a = n.length === 1 ? "an " + i : "the " + i, n.length && console.error("React encountered a <link rel=\"stylesheet\" href=\"%s\" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.", e, a, i);
						}
						r && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag") : (t.onError || t.onLoad) && console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));
						break;
					}
					switch (t.rel) {
						case "stylesheet": return e = t.precedence, t = t.disabled, typeof e != "string" && r && console.error("Cannot render a <link rel=\"stylesheet\" /> outside the main document without knowing its precedence. Consider adding precedence=\"default\" or moving it into the root <head> tag."), typeof e == "string" && t == null;
						default: return !0;
					}
				case "script":
					if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
						r && (e ? t.onLoad || t.onError ? console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>.") : console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>.") : console.error("Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async=\"\" or moving it into the root <head> tag."));
						break;
					}
					return !0;
				case "noscript":
				case "template": r && console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.", e);
			}
			return !1;
		}
		function Kd(e) {
			return !(e.type === "stylesheet" && (e.state.loading & cC) === aC);
		}
		function qd(e, t, n, r) {
			if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && (n.state.loading & lC) === aC) {
				if (n.instance === null) {
					var i = z(r.href), a = t.querySelector(Pd(i));
					if (a) {
						t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = Yd.bind(e), t.then(e, e)), n.state.loading |= lC, n.instance = a, $e(a);
						return;
					}
					a = t.ownerDocument || t, r = Fd(r), (i = uC.get(i)) && Vd(r, i), a = a.createElement("link"), $e(a);
					var o = a;
					o._p = new Promise(function(e, t) {
						o.onload = e, o.onerror = t;
					}), Du(a, "link", r), n.instance = a;
				}
				e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & cC) === aC && (e.count++, n = Yd.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
			}
		}
		function Jd(e, t) {
			return e.stylesheets && e.count === 0 && Xd(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
				var r = setTimeout(function() {
					if (e.stylesheets && Xd(e, e.stylesheets), e.unsuspend) {
						var t = e.unsuspend;
						e.unsuspend = null, t();
					}
				}, hC + t);
				0 < e.imgBytes && vC === 0 && (vC = 125 * Bu() * _C);
				var i = setTimeout(function() {
					if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Xd(e, e.stylesheets), e.unsuspend)) {
						var t = e.unsuspend;
						e.unsuspend = null, t();
					}
				}, (e.imgBytes > vC ? 50 : gC) + t);
				return e.unsuspend = n, function() {
					e.unsuspend = null, clearTimeout(r), clearTimeout(i);
				};
			} : null;
		}
		function Yd() {
			if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
				if (this.stylesheets) Xd(this, this.stylesheets);
				else if (this.unsuspend) {
					var e = this.unsuspend;
					this.unsuspend = null, e();
				}
			}
		}
		function Xd(e, t) {
			e.stylesheets = null, e.unsuspend !== null && (e.count++, bC = /* @__PURE__ */ new Map(), t.forEach(Zd, e), bC = null, Yd.call(e));
		}
		function Zd(e, t) {
			if (!(t.state.loading & lC)) {
				var n = bC.get(e);
				if (n) var r = n.get(yC);
				else {
					n = /* @__PURE__ */ new Map(), bC.set(e, n);
					for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
						var o = i[a];
						(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
					}
					r && n.set(yC, r);
				}
				i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(yC, i), n.set(o, i), this.count++, r = Yd.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= lC;
			}
		}
		function Qd(e, t, n, r, i, a, o, s, c) {
			for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = tC, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ie(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ie(0), this.hiddenUpdates = Ie(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
			this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
		}
		function $d(e, t, n, r, i, a, o, s, c, l, u, d) {
			return e = new Qd(e, t, n, o, c, l, u, d, s), t = Rg, !0 === a && (t |= zg | Bg), t |= G, a = m(3, null, null, t), e.current = a, a.stateNode = e, t = si(), ci(t), e.pooledCache = t, ci(t), a.memoizedState = {
				element: r,
				isDehydrated: n,
				cache: t
			}, $i(a), e;
		}
		function ef(e) {
			return e ? (e = Fg, e) : Fg;
		}
		function tf(e, t, n, r, i, a) {
			if (Np && typeof Np.onScheduleFiberRoot == "function") try {
				Np.onScheduleFiberRoot(Mp, r, n);
			} catch (e) {
				Pp || (Pp = !0, console.error("React instrumentation encountered an error: %o", e));
			}
			i = ef(i), r.context === null ? r.context = i : r.pendingContext = i, _p && gp !== null && !OC && (OC = !0, console.error("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.", C(gp) || "Unknown")), r = ta(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", a), r.callback = a), n = na(e, r, t), n !== null && (ui(t, "root.render()", null), il(n, e, t), ra(n, e, t));
		}
		function nf(e, t) {
			if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
				var n = e.retryLane;
				e.retryLane = n !== 0 && n < t ? n : t;
			}
		}
		function rf(e, t) {
			nf(e, t), (e = e.alternate) && nf(e, t);
		}
		function af(e) {
			if (e.tag === 13 || e.tag === 31) {
				var t = pr(e, 67108864);
				t !== null && il(t, e, 67108864), rf(e, 67108864);
			}
		}
		function of(e) {
			if (e.tag === 13 || e.tag === 31) {
				var t = nl(e);
				t = He(t);
				var n = pr(e, t);
				n !== null && il(n, e, t), rf(e, t);
			}
		}
		function sf() {
			return gp;
		}
		function cf(e, t, n, r) {
			var i = V.T;
			V.T = null;
			var a = Yf.p;
			try {
				Yf.p = Hp, uf(e, t, n, r);
			} finally {
				Yf.p = a, V.T = i;
			}
		}
		function lf(e, t, n, r) {
			var i = V.T;
			V.T = null;
			var a = Yf.p;
			try {
				Yf.p = Up, uf(e, t, n, r);
			} finally {
				Yf.p = a, V.T = i;
			}
		}
		function uf(e, t, n, r) {
			if (zC) {
				var i = df(r);
				if (i === null) pu(e, t, r, BC, n), mf(e, r);
				else if (gf(i, e, t, n, r)) r.stopPropagation();
				else if (mf(e, r), t & 4 && -1 < JC.indexOf(e)) {
					for (; i !== null;) {
						var a = Xe(i);
						if (a !== null) switch (a.tag) {
							case 3:
								if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
									var o = Me(a.pendingLanes);
									if (o !== 0) {
										var s = a;
										for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
											var c = 1 << 31 - Ip(o);
											s.entanglements[1] |= c, o &= ~c;
										}
										Xl(a), (Gb & (Ib | Lb)) === Fb && (xx = Cp() + Sx, L(0, !1));
									}
								}
								break;
							case 31:
							case 13: s = pr(a, 2), s !== null && il(s, a, 2), ll(), rf(a, 2);
						}
						if (a = df(r), a === null && pu(e, t, r, BC, n), a === i) break;
						i = a;
					}
					i !== null && r.stopPropagation();
				} else pu(e, t, r, null, n);
			}
		}
		function df(e) {
			return e = cn(e), ff(e);
		}
		function ff(e) {
			if (BC = null, e = Ye(e), e !== null) {
				var t = b(e);
				if (t === null) e = null;
				else {
					var n = t.tag;
					if (n === 13) {
						if (e = x(t), e !== null) return e;
						e = null;
					} else if (n === 31) {
						if (e = ee(t), e !== null) return e;
						e = null;
					} else if (n === 3) {
						if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
						e = null;
					} else t !== e && (e = null);
				}
			}
			return BC = e, null;
		}
		function pf(e) {
			switch (e) {
				case "beforetoggle":
				case "cancel":
				case "click":
				case "close":
				case "contextmenu":
				case "copy":
				case "cut":
				case "auxclick":
				case "dblclick":
				case "dragend":
				case "dragstart":
				case "drop":
				case "focusin":
				case "focusout":
				case "input":
				case "invalid":
				case "keydown":
				case "keypress":
				case "keyup":
				case "mousedown":
				case "mouseup":
				case "paste":
				case "pause":
				case "play":
				case "pointercancel":
				case "pointerdown":
				case "pointerup":
				case "ratechange":
				case "reset":
				case "resize":
				case "seeked":
				case "submit":
				case "toggle":
				case "touchcancel":
				case "touchend":
				case "touchstart":
				case "volumechange":
				case "change":
				case "selectionchange":
				case "textInput":
				case "compositionstart":
				case "compositionend":
				case "compositionupdate":
				case "beforeblur":
				case "afterblur":
				case "beforeinput":
				case "blur":
				case "fullscreenchange":
				case "focus":
				case "hashchange":
				case "popstate":
				case "select":
				case "selectstart": return Hp;
				case "drag":
				case "dragenter":
				case "dragexit":
				case "dragleave":
				case "dragover":
				case "mousemove":
				case "mouseout":
				case "mouseover":
				case "pointermove":
				case "pointerout":
				case "pointerover":
				case "scroll":
				case "touchmove":
				case "wheel":
				case "mouseenter":
				case "mouseleave":
				case "pointerenter":
				case "pointerleave": return Up;
				case "message": switch (wp()) {
					case Tp: return Hp;
					case Ep: return Up;
					case Dp:
					case Op: return Wp;
					case kp: return Gp;
					default: return Wp;
				}
				default: return Wp;
			}
		}
		function mf(e, t) {
			switch (e) {
				case "focusin":
				case "focusout":
					HC = null;
					break;
				case "dragenter":
				case "dragleave":
					UC = null;
					break;
				case "mouseover":
				case "mouseout":
					WC = null;
					break;
				case "pointerover":
				case "pointerout":
					GC.delete(t.pointerId);
					break;
				case "gotpointercapture":
				case "lostpointercapture": KC.delete(t.pointerId);
			}
		}
		function hf(e, t, n, r, i, a) {
			return e === null || e.nativeEvent !== a ? (e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: a,
				targetContainers: [i]
			}, t !== null && (t = Xe(t), t !== null && af(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
		}
		function gf(e, t, n, r, i) {
			switch (t) {
				case "focusin": return HC = hf(HC, e, t, n, r, i), !0;
				case "dragenter": return UC = hf(UC, e, t, n, r, i), !0;
				case "mouseover": return WC = hf(WC, e, t, n, r, i), !0;
				case "pointerover":
					var a = i.pointerId;
					return GC.set(a, hf(GC.get(a) || null, e, t, n, r, i)), !0;
				case "gotpointercapture": return a = i.pointerId, KC.set(a, hf(KC.get(a) || null, e, t, n, r, i)), !0;
			}
			return !1;
		}
		function _f(e) {
			var t = Ye(e.target);
			if (t !== null) {
				var n = b(t);
				if (n !== null) {
					if (t = n.tag, t === 13) {
						if (t = x(n), t !== null) {
							e.blockedOn = t, qe(e.priority, function() {
								of(n);
							});
							return;
						}
					} else if (t === 31) {
						if (t = ee(n), t !== null) {
							e.blockedOn = t, qe(e.priority, function() {
								of(n);
							});
							return;
						}
					} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
						e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
						return;
					}
				}
			}
			e.blockedOn = null;
		}
		function vf(e) {
			if (e.blockedOn !== null) return !1;
			for (var t = e.targetContainers; 0 < t.length;) {
				var n = df(e.nativeEvent);
				if (n === null) {
					n = e.nativeEvent;
					var r = new n.constructor(n.type, n), i = r;
					Zm !== null && console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Zm = i, n.target.dispatchEvent(r), Zm === null && console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Zm = null;
				} else return t = Xe(n), t !== null && af(t), e.blockedOn = n, !1;
				t.shift();
			}
			return !0;
		}
		function yf(e, t, n) {
			vf(e) && n.delete(t);
		}
		function bf() {
			VC = !1, HC !== null && vf(HC) && (HC = null), UC !== null && vf(UC) && (UC = null), WC !== null && vf(WC) && (WC = null), GC.forEach(yf), KC.forEach(yf);
		}
		function xf(e, t) {
			e.blockedOn === t && (e.blockedOn = null, VC || (VC = !0, Of.unstable_scheduleCallback(Of.unstable_NormalPriority, bf)));
		}
		function Sf(e) {
			YC !== e && (YC = e, Of.unstable_scheduleCallback(Of.unstable_NormalPriority, function() {
				YC === e && (YC = null);
				for (var t = 0; t < e.length; t += 3) {
					var n = e[t], r = e[t + 1], i = e[t + 2];
					if (typeof r != "function") {
						if (ff(r || n) === null) continue;
						break;
					}
					var a = Xe(n);
					a !== null && (e.splice(t, 3), t -= 3, n = {
						pending: !0,
						data: i,
						method: n.method,
						action: r
					}, Object.freeze(n), Fo(a, n, r, i));
				}
			}));
		}
		function Cf(e) {
			function t(t) {
				return xf(t, e);
			}
			HC !== null && xf(HC, e), UC !== null && xf(UC, e), WC !== null && xf(WC, e), GC.forEach(t), KC.forEach(t);
			for (var n = 0; n < qC.length; n++) {
				var r = qC[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
			for (; 0 < qC.length && (n = qC[0], n.blockedOn === null);) _f(n), n.blockedOn === null && qC.shift();
			if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
				var i = n[r], a = n[r + 1], o = i[Jp] || null;
				if (typeof a == "function") o || Sf(n);
				else if (o) {
					var s = null;
					if (a && a.hasAttribute("formAction")) {
						if (i = a, o = a[Jp] || null) s = o.formAction;
						else if (ff(i) !== null) continue;
					} else s = o.action;
					typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Sf(n);
				}
			}
		}
		function wf() {
			function e(e) {
				e.canIntercept && e.info === "react-transition" && e.intercept({
					handler: function() {
						return new Promise(function(e) {
							return i = e;
						});
					},
					focusReset: "manual",
					scroll: "manual"
				});
			}
			function t() {
				i !== null && (i(), i = null), r || setTimeout(n, 20);
			}
			function n() {
				if (!r && !navigation.transition) {
					var e = navigation.currentEntry;
					e && e.url != null && navigation.navigate(e.url, {
						state: e.getState(),
						info: "react-transition",
						history: "replace"
					});
				}
			}
			if (typeof navigation == "object") {
				var r = !1, i = null;
				return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
					r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
				};
			}
		}
		function Tf(e) {
			this._internalRoot = e;
		}
		function Ef(e) {
			this._internalRoot = e;
		}
		function Df(e) {
			e[Yp] && (e._reactRootContainer ? console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var Of = v(), kf = f("react"), Af = f("react-dom"), B = Object.assign, jf = Symbol.for("react.element"), Mf = Symbol.for("react.transitional.element"), Nf = Symbol.for("react.portal"), Pf = Symbol.for("react.fragment"), Ff = Symbol.for("react.strict_mode"), If = Symbol.for("react.profiler"), Lf = Symbol.for("react.consumer"), Rf = Symbol.for("react.context"), zf = Symbol.for("react.forward_ref"), Bf = Symbol.for("react.suspense"), Vf = Symbol.for("react.suspense_list"), Hf = Symbol.for("react.memo"), Uf = Symbol.for("react.lazy"), Wf = Symbol.for("react.activity"), Gf = Symbol.for("react.memo_cache_sentinel"), Kf = Symbol.iterator, qf = Symbol.for("react.client.reference"), Jf = Array.isArray, V = kf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Yf = Af.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Xf = Object.freeze({
			pending: !1,
			data: null,
			method: null,
			action: null
		}), Zf = [], Qf = [], $f = -1, ep = oe(null), tp = oe(null), np = oe(null), rp = oe(null), ip = 0, ap, op, sp, cp, lp, up, dp;
		pe.__reactDisabledLog = !0;
		var fp, pp, mp = !1, hp = new (typeof WeakMap == "function" ? WeakMap : Map)(), gp = null, _p = !1, vp = Object.prototype.hasOwnProperty, yp = Of.unstable_scheduleCallback, bp = Of.unstable_cancelCallback, xp = Of.unstable_shouldYield, Sp = Of.unstable_requestPaint, Cp = Of.unstable_now, wp = Of.unstable_getCurrentPriorityLevel, Tp = Of.unstable_ImmediatePriority, Ep = Of.unstable_UserBlockingPriority, Dp = Of.unstable_NormalPriority, Op = Of.unstable_LowPriority, kp = Of.unstable_IdlePriority, Ap = Of.log, jp = Of.unstable_setDisableYieldValue, Mp = null, Np = null, Pp = !1, Fp = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Ip = Math.clz32 ? Math.clz32 : je, Lp = Math.log, Rp = Math.LN2, zp = 256, Bp = 262144, Vp = 4194304, Hp = 2, Up = 8, Wp = 32, Gp = 268435456, Kp = Math.random().toString(36).slice(2), qp = "__reactFiber$" + Kp, Jp = "__reactProps$" + Kp, Yp = "__reactContainer$" + Kp, Xp = "__reactEvents$" + Kp, Zp = "__reactListeners$" + Kp, Qp = "__reactHandles$" + Kp, $p = "__reactResources$" + Kp, em = "__reactMarker$" + Kp, tm = /* @__PURE__ */ new Set(), nm = {}, rm = {}, im = {
			button: !0,
			checkbox: !0,
			image: !0,
			hidden: !0,
			radio: !0,
			reset: !0,
			submit: !0
		}, am = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), om = {}, sm = {}, cm = /[\n"\\]/g, lm = !1, um = !1, dm = !1, fm = !1, pm = !1, mm = !1, hm = ["value", "defaultValue"], gm = !1, _m = /["'&<>\n\t]|^\s|\s$/, vm = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "), ym = "applet caption html table td th marquee object template foreignObject desc title".split(" "), bm = ym.concat(["button"]), xm = "dd dt li option optgroup p rp rt".split(" "), Sm = {
			current: null,
			formTag: null,
			aTagInScope: null,
			buttonTagInScope: null,
			nobrTagInScope: null,
			pTagInButtonScope: null,
			listItemTagAutoclosing: null,
			dlItemTagAutoclosing: null,
			containerTagInScope: null,
			implicitRootScope: !1
		}, Cm = {}, wm = {
			animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),
			background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),
			backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
			border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),
			borderBlockEnd: [
				"borderBlockEndColor",
				"borderBlockEndStyle",
				"borderBlockEndWidth"
			],
			borderBlockStart: [
				"borderBlockStartColor",
				"borderBlockStartStyle",
				"borderBlockStartWidth"
			],
			borderBottom: [
				"borderBottomColor",
				"borderBottomStyle",
				"borderBottomWidth"
			],
			borderColor: [
				"borderBottomColor",
				"borderLeftColor",
				"borderRightColor",
				"borderTopColor"
			],
			borderImage: [
				"borderImageOutset",
				"borderImageRepeat",
				"borderImageSlice",
				"borderImageSource",
				"borderImageWidth"
			],
			borderInlineEnd: [
				"borderInlineEndColor",
				"borderInlineEndStyle",
				"borderInlineEndWidth"
			],
			borderInlineStart: [
				"borderInlineStartColor",
				"borderInlineStartStyle",
				"borderInlineStartWidth"
			],
			borderLeft: [
				"borderLeftColor",
				"borderLeftStyle",
				"borderLeftWidth"
			],
			borderRadius: [
				"borderBottomLeftRadius",
				"borderBottomRightRadius",
				"borderTopLeftRadius",
				"borderTopRightRadius"
			],
			borderRight: [
				"borderRightColor",
				"borderRightStyle",
				"borderRightWidth"
			],
			borderStyle: [
				"borderBottomStyle",
				"borderLeftStyle",
				"borderRightStyle",
				"borderTopStyle"
			],
			borderTop: [
				"borderTopColor",
				"borderTopStyle",
				"borderTopWidth"
			],
			borderWidth: [
				"borderBottomWidth",
				"borderLeftWidth",
				"borderRightWidth",
				"borderTopWidth"
			],
			columnRule: [
				"columnRuleColor",
				"columnRuleStyle",
				"columnRuleWidth"
			],
			columns: ["columnCount", "columnWidth"],
			flex: [
				"flexBasis",
				"flexGrow",
				"flexShrink"
			],
			flexFlow: ["flexDirection", "flexWrap"],
			font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),
			fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),
			gap: ["columnGap", "rowGap"],
			grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),
			gridArea: [
				"gridColumnEnd",
				"gridColumnStart",
				"gridRowEnd",
				"gridRowStart"
			],
			gridColumn: ["gridColumnEnd", "gridColumnStart"],
			gridColumnGap: ["columnGap"],
			gridGap: ["columnGap", "rowGap"],
			gridRow: ["gridRowEnd", "gridRowStart"],
			gridRowGap: ["rowGap"],
			gridTemplate: [
				"gridTemplateAreas",
				"gridTemplateColumns",
				"gridTemplateRows"
			],
			listStyle: [
				"listStyleImage",
				"listStylePosition",
				"listStyleType"
			],
			margin: [
				"marginBottom",
				"marginLeft",
				"marginRight",
				"marginTop"
			],
			marker: [
				"markerEnd",
				"markerMid",
				"markerStart"
			],
			mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),
			maskPosition: ["maskPositionX", "maskPositionY"],
			outline: [
				"outlineColor",
				"outlineStyle",
				"outlineWidth"
			],
			overflow: ["overflowX", "overflowY"],
			padding: [
				"paddingBottom",
				"paddingLeft",
				"paddingRight",
				"paddingTop"
			],
			placeContent: ["alignContent", "justifyContent"],
			placeItems: ["alignItems", "justifyItems"],
			placeSelf: ["alignSelf", "justifySelf"],
			textDecoration: [
				"textDecorationColor",
				"textDecorationLine",
				"textDecorationStyle"
			],
			textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
			transition: [
				"transitionDelay",
				"transitionDuration",
				"transitionProperty",
				"transitionTimingFunction"
			],
			wordWrap: ["overflowWrap"]
		}, Tm = /([A-Z])/g, Em = /^ms-/, Dm = /^(?:webkit|moz|o)[A-Z]/, Om = /^-ms-/, km = /-(.)/g, Am = /;\s*$/, jm = {}, Mm = {}, Nm = !1, Pm = !1, Fm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), Im = "http://www.w3.org/1998/Math/MathML", Lm = "http://www.w3.org/2000/svg", Rm = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"]
		]), zm = {
			accept: "accept",
			acceptcharset: "acceptCharset",
			"accept-charset": "acceptCharset",
			accesskey: "accessKey",
			action: "action",
			allowfullscreen: "allowFullScreen",
			alt: "alt",
			as: "as",
			async: "async",
			autocapitalize: "autoCapitalize",
			autocomplete: "autoComplete",
			autocorrect: "autoCorrect",
			autofocus: "autoFocus",
			autoplay: "autoPlay",
			autosave: "autoSave",
			capture: "capture",
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			challenge: "challenge",
			charset: "charSet",
			checked: "checked",
			children: "children",
			cite: "cite",
			class: "className",
			classid: "classID",
			classname: "className",
			cols: "cols",
			colspan: "colSpan",
			content: "content",
			contenteditable: "contentEditable",
			contextmenu: "contextMenu",
			controls: "controls",
			controlslist: "controlsList",
			coords: "coords",
			crossorigin: "crossOrigin",
			dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
			data: "data",
			datetime: "dateTime",
			default: "default",
			defaultchecked: "defaultChecked",
			defaultvalue: "defaultValue",
			defer: "defer",
			dir: "dir",
			disabled: "disabled",
			disablepictureinpicture: "disablePictureInPicture",
			disableremoteplayback: "disableRemotePlayback",
			download: "download",
			draggable: "draggable",
			enctype: "encType",
			enterkeyhint: "enterKeyHint",
			fetchpriority: "fetchPriority",
			for: "htmlFor",
			form: "form",
			formmethod: "formMethod",
			formaction: "formAction",
			formenctype: "formEncType",
			formnovalidate: "formNoValidate",
			formtarget: "formTarget",
			frameborder: "frameBorder",
			headers: "headers",
			height: "height",
			hidden: "hidden",
			high: "high",
			href: "href",
			hreflang: "hrefLang",
			htmlfor: "htmlFor",
			httpequiv: "httpEquiv",
			"http-equiv": "httpEquiv",
			icon: "icon",
			id: "id",
			imagesizes: "imageSizes",
			imagesrcset: "imageSrcSet",
			inert: "inert",
			innerhtml: "innerHTML",
			inputmode: "inputMode",
			integrity: "integrity",
			is: "is",
			itemid: "itemID",
			itemprop: "itemProp",
			itemref: "itemRef",
			itemscope: "itemScope",
			itemtype: "itemType",
			keyparams: "keyParams",
			keytype: "keyType",
			kind: "kind",
			label: "label",
			lang: "lang",
			list: "list",
			loop: "loop",
			low: "low",
			manifest: "manifest",
			marginwidth: "marginWidth",
			marginheight: "marginHeight",
			max: "max",
			maxlength: "maxLength",
			media: "media",
			mediagroup: "mediaGroup",
			method: "method",
			min: "min",
			minlength: "minLength",
			multiple: "multiple",
			muted: "muted",
			name: "name",
			nomodule: "noModule",
			nonce: "nonce",
			novalidate: "noValidate",
			open: "open",
			optimum: "optimum",
			pattern: "pattern",
			placeholder: "placeholder",
			playsinline: "playsInline",
			poster: "poster",
			preload: "preload",
			profile: "profile",
			radiogroup: "radioGroup",
			readonly: "readOnly",
			referrerpolicy: "referrerPolicy",
			rel: "rel",
			required: "required",
			reversed: "reversed",
			role: "role",
			rows: "rows",
			rowspan: "rowSpan",
			sandbox: "sandbox",
			scope: "scope",
			scoped: "scoped",
			scrolling: "scrolling",
			seamless: "seamless",
			selected: "selected",
			shape: "shape",
			size: "size",
			sizes: "sizes",
			span: "span",
			spellcheck: "spellCheck",
			src: "src",
			srcdoc: "srcDoc",
			srclang: "srcLang",
			srcset: "srcSet",
			start: "start",
			step: "step",
			style: "style",
			summary: "summary",
			tabindex: "tabIndex",
			target: "target",
			title: "title",
			type: "type",
			usemap: "useMap",
			value: "value",
			width: "width",
			wmode: "wmode",
			wrap: "wrap",
			about: "about",
			accentheight: "accentHeight",
			"accent-height": "accentHeight",
			accumulate: "accumulate",
			additive: "additive",
			alignmentbaseline: "alignmentBaseline",
			"alignment-baseline": "alignmentBaseline",
			allowreorder: "allowReorder",
			alphabetic: "alphabetic",
			amplitude: "amplitude",
			arabicform: "arabicForm",
			"arabic-form": "arabicForm",
			ascent: "ascent",
			attributename: "attributeName",
			attributetype: "attributeType",
			autoreverse: "autoReverse",
			azimuth: "azimuth",
			basefrequency: "baseFrequency",
			baselineshift: "baselineShift",
			"baseline-shift": "baselineShift",
			baseprofile: "baseProfile",
			bbox: "bbox",
			begin: "begin",
			bias: "bias",
			by: "by",
			calcmode: "calcMode",
			capheight: "capHeight",
			"cap-height": "capHeight",
			clip: "clip",
			clippath: "clipPath",
			"clip-path": "clipPath",
			clippathunits: "clipPathUnits",
			cliprule: "clipRule",
			"clip-rule": "clipRule",
			color: "color",
			colorinterpolation: "colorInterpolation",
			"color-interpolation": "colorInterpolation",
			colorinterpolationfilters: "colorInterpolationFilters",
			"color-interpolation-filters": "colorInterpolationFilters",
			colorprofile: "colorProfile",
			"color-profile": "colorProfile",
			colorrendering: "colorRendering",
			"color-rendering": "colorRendering",
			contentscripttype: "contentScriptType",
			contentstyletype: "contentStyleType",
			cursor: "cursor",
			cx: "cx",
			cy: "cy",
			d: "d",
			datatype: "datatype",
			decelerate: "decelerate",
			descent: "descent",
			diffuseconstant: "diffuseConstant",
			direction: "direction",
			display: "display",
			divisor: "divisor",
			dominantbaseline: "dominantBaseline",
			"dominant-baseline": "dominantBaseline",
			dur: "dur",
			dx: "dx",
			dy: "dy",
			edgemode: "edgeMode",
			elevation: "elevation",
			enablebackground: "enableBackground",
			"enable-background": "enableBackground",
			end: "end",
			exponent: "exponent",
			externalresourcesrequired: "externalResourcesRequired",
			fill: "fill",
			fillopacity: "fillOpacity",
			"fill-opacity": "fillOpacity",
			fillrule: "fillRule",
			"fill-rule": "fillRule",
			filter: "filter",
			filterres: "filterRes",
			filterunits: "filterUnits",
			floodopacity: "floodOpacity",
			"flood-opacity": "floodOpacity",
			floodcolor: "floodColor",
			"flood-color": "floodColor",
			focusable: "focusable",
			fontfamily: "fontFamily",
			"font-family": "fontFamily",
			fontsize: "fontSize",
			"font-size": "fontSize",
			fontsizeadjust: "fontSizeAdjust",
			"font-size-adjust": "fontSizeAdjust",
			fontstretch: "fontStretch",
			"font-stretch": "fontStretch",
			fontstyle: "fontStyle",
			"font-style": "fontStyle",
			fontvariant: "fontVariant",
			"font-variant": "fontVariant",
			fontweight: "fontWeight",
			"font-weight": "fontWeight",
			format: "format",
			from: "from",
			fx: "fx",
			fy: "fy",
			g1: "g1",
			g2: "g2",
			glyphname: "glyphName",
			"glyph-name": "glyphName",
			glyphorientationhorizontal: "glyphOrientationHorizontal",
			"glyph-orientation-horizontal": "glyphOrientationHorizontal",
			glyphorientationvertical: "glyphOrientationVertical",
			"glyph-orientation-vertical": "glyphOrientationVertical",
			glyphref: "glyphRef",
			gradienttransform: "gradientTransform",
			gradientunits: "gradientUnits",
			hanging: "hanging",
			horizadvx: "horizAdvX",
			"horiz-adv-x": "horizAdvX",
			horizoriginx: "horizOriginX",
			"horiz-origin-x": "horizOriginX",
			ideographic: "ideographic",
			imagerendering: "imageRendering",
			"image-rendering": "imageRendering",
			in2: "in2",
			in: "in",
			inlist: "inlist",
			intercept: "intercept",
			k1: "k1",
			k2: "k2",
			k3: "k3",
			k4: "k4",
			k: "k",
			kernelmatrix: "kernelMatrix",
			kernelunitlength: "kernelUnitLength",
			kerning: "kerning",
			keypoints: "keyPoints",
			keysplines: "keySplines",
			keytimes: "keyTimes",
			lengthadjust: "lengthAdjust",
			letterspacing: "letterSpacing",
			"letter-spacing": "letterSpacing",
			lightingcolor: "lightingColor",
			"lighting-color": "lightingColor",
			limitingconeangle: "limitingConeAngle",
			local: "local",
			markerend: "markerEnd",
			"marker-end": "markerEnd",
			markerheight: "markerHeight",
			markermid: "markerMid",
			"marker-mid": "markerMid",
			markerstart: "markerStart",
			"marker-start": "markerStart",
			markerunits: "markerUnits",
			markerwidth: "markerWidth",
			mask: "mask",
			maskcontentunits: "maskContentUnits",
			maskunits: "maskUnits",
			mathematical: "mathematical",
			mode: "mode",
			numoctaves: "numOctaves",
			offset: "offset",
			opacity: "opacity",
			operator: "operator",
			order: "order",
			orient: "orient",
			orientation: "orientation",
			origin: "origin",
			overflow: "overflow",
			overlineposition: "overlinePosition",
			"overline-position": "overlinePosition",
			overlinethickness: "overlineThickness",
			"overline-thickness": "overlineThickness",
			paintorder: "paintOrder",
			"paint-order": "paintOrder",
			panose1: "panose1",
			"panose-1": "panose1",
			pathlength: "pathLength",
			patterncontentunits: "patternContentUnits",
			patterntransform: "patternTransform",
			patternunits: "patternUnits",
			pointerevents: "pointerEvents",
			"pointer-events": "pointerEvents",
			points: "points",
			pointsatx: "pointsAtX",
			pointsaty: "pointsAtY",
			pointsatz: "pointsAtZ",
			popover: "popover",
			popovertarget: "popoverTarget",
			popovertargetaction: "popoverTargetAction",
			prefix: "prefix",
			preservealpha: "preserveAlpha",
			preserveaspectratio: "preserveAspectRatio",
			primitiveunits: "primitiveUnits",
			property: "property",
			r: "r",
			radius: "radius",
			refx: "refX",
			refy: "refY",
			renderingintent: "renderingIntent",
			"rendering-intent": "renderingIntent",
			repeatcount: "repeatCount",
			repeatdur: "repeatDur",
			requiredextensions: "requiredExtensions",
			requiredfeatures: "requiredFeatures",
			resource: "resource",
			restart: "restart",
			result: "result",
			results: "results",
			rotate: "rotate",
			rx: "rx",
			ry: "ry",
			scale: "scale",
			security: "security",
			seed: "seed",
			shaperendering: "shapeRendering",
			"shape-rendering": "shapeRendering",
			slope: "slope",
			spacing: "spacing",
			specularconstant: "specularConstant",
			specularexponent: "specularExponent",
			speed: "speed",
			spreadmethod: "spreadMethod",
			startoffset: "startOffset",
			stddeviation: "stdDeviation",
			stemh: "stemh",
			stemv: "stemv",
			stitchtiles: "stitchTiles",
			stopcolor: "stopColor",
			"stop-color": "stopColor",
			stopopacity: "stopOpacity",
			"stop-opacity": "stopOpacity",
			strikethroughposition: "strikethroughPosition",
			"strikethrough-position": "strikethroughPosition",
			strikethroughthickness: "strikethroughThickness",
			"strikethrough-thickness": "strikethroughThickness",
			string: "string",
			stroke: "stroke",
			strokedasharray: "strokeDasharray",
			"stroke-dasharray": "strokeDasharray",
			strokedashoffset: "strokeDashoffset",
			"stroke-dashoffset": "strokeDashoffset",
			strokelinecap: "strokeLinecap",
			"stroke-linecap": "strokeLinecap",
			strokelinejoin: "strokeLinejoin",
			"stroke-linejoin": "strokeLinejoin",
			strokemiterlimit: "strokeMiterlimit",
			"stroke-miterlimit": "strokeMiterlimit",
			strokewidth: "strokeWidth",
			"stroke-width": "strokeWidth",
			strokeopacity: "strokeOpacity",
			"stroke-opacity": "strokeOpacity",
			suppresscontenteditablewarning: "suppressContentEditableWarning",
			suppresshydrationwarning: "suppressHydrationWarning",
			surfacescale: "surfaceScale",
			systemlanguage: "systemLanguage",
			tablevalues: "tableValues",
			targetx: "targetX",
			targety: "targetY",
			textanchor: "textAnchor",
			"text-anchor": "textAnchor",
			textdecoration: "textDecoration",
			"text-decoration": "textDecoration",
			textlength: "textLength",
			textrendering: "textRendering",
			"text-rendering": "textRendering",
			to: "to",
			transform: "transform",
			transformorigin: "transformOrigin",
			"transform-origin": "transformOrigin",
			typeof: "typeof",
			u1: "u1",
			u2: "u2",
			underlineposition: "underlinePosition",
			"underline-position": "underlinePosition",
			underlinethickness: "underlineThickness",
			"underline-thickness": "underlineThickness",
			unicode: "unicode",
			unicodebidi: "unicodeBidi",
			"unicode-bidi": "unicodeBidi",
			unicoderange: "unicodeRange",
			"unicode-range": "unicodeRange",
			unitsperem: "unitsPerEm",
			"units-per-em": "unitsPerEm",
			unselectable: "unselectable",
			valphabetic: "vAlphabetic",
			"v-alphabetic": "vAlphabetic",
			values: "values",
			vectoreffect: "vectorEffect",
			"vector-effect": "vectorEffect",
			version: "version",
			vertadvy: "vertAdvY",
			"vert-adv-y": "vertAdvY",
			vertoriginx: "vertOriginX",
			"vert-origin-x": "vertOriginX",
			vertoriginy: "vertOriginY",
			"vert-origin-y": "vertOriginY",
			vhanging: "vHanging",
			"v-hanging": "vHanging",
			videographic: "vIdeographic",
			"v-ideographic": "vIdeographic",
			viewbox: "viewBox",
			viewtarget: "viewTarget",
			visibility: "visibility",
			vmathematical: "vMathematical",
			"v-mathematical": "vMathematical",
			vocab: "vocab",
			widths: "widths",
			wordspacing: "wordSpacing",
			"word-spacing": "wordSpacing",
			writingmode: "writingMode",
			"writing-mode": "writingMode",
			x1: "x1",
			x2: "x2",
			x: "x",
			xchannelselector: "xChannelSelector",
			xheight: "xHeight",
			"x-height": "xHeight",
			xlinkactuate: "xlinkActuate",
			"xlink:actuate": "xlinkActuate",
			xlinkarcrole: "xlinkArcrole",
			"xlink:arcrole": "xlinkArcrole",
			xlinkhref: "xlinkHref",
			"xlink:href": "xlinkHref",
			xlinkrole: "xlinkRole",
			"xlink:role": "xlinkRole",
			xlinkshow: "xlinkShow",
			"xlink:show": "xlinkShow",
			xlinktitle: "xlinkTitle",
			"xlink:title": "xlinkTitle",
			xlinktype: "xlinkType",
			"xlink:type": "xlinkType",
			xmlbase: "xmlBase",
			"xml:base": "xmlBase",
			xmllang: "xmlLang",
			"xml:lang": "xmlLang",
			xmlns: "xmlns",
			"xml:space": "xmlSpace",
			xmlnsxlink: "xmlnsXlink",
			"xmlns:xlink": "xmlnsXlink",
			xmlspace: "xmlSpace",
			y1: "y1",
			y2: "y2",
			y: "y",
			ychannelselector: "yChannelSelector",
			z: "z",
			zoomandpan: "zoomAndPan"
		}, Bm = {
			"aria-current": 0,
			"aria-description": 0,
			"aria-details": 0,
			"aria-disabled": 0,
			"aria-hidden": 0,
			"aria-invalid": 0,
			"aria-keyshortcuts": 0,
			"aria-label": 0,
			"aria-roledescription": 0,
			"aria-autocomplete": 0,
			"aria-checked": 0,
			"aria-expanded": 0,
			"aria-haspopup": 0,
			"aria-level": 0,
			"aria-modal": 0,
			"aria-multiline": 0,
			"aria-multiselectable": 0,
			"aria-orientation": 0,
			"aria-placeholder": 0,
			"aria-pressed": 0,
			"aria-readonly": 0,
			"aria-required": 0,
			"aria-selected": 0,
			"aria-sort": 0,
			"aria-valuemax": 0,
			"aria-valuemin": 0,
			"aria-valuenow": 0,
			"aria-valuetext": 0,
			"aria-atomic": 0,
			"aria-busy": 0,
			"aria-live": 0,
			"aria-relevant": 0,
			"aria-dropeffect": 0,
			"aria-grabbed": 0,
			"aria-activedescendant": 0,
			"aria-colcount": 0,
			"aria-colindex": 0,
			"aria-colspan": 0,
			"aria-controls": 0,
			"aria-describedby": 0,
			"aria-errormessage": 0,
			"aria-flowto": 0,
			"aria-labelledby": 0,
			"aria-owns": 0,
			"aria-posinset": 0,
			"aria-rowcount": 0,
			"aria-rowindex": 0,
			"aria-rowspan": 0,
			"aria-setsize": 0,
			"aria-braillelabel": 0,
			"aria-brailleroledescription": 0,
			"aria-colindextext": 0,
			"aria-rowindextext": 0
		}, Vm = {}, Hm = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Um = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Wm = !1, Gm = {}, Km = /^on./, qm = /^on[^A-Z]/, Jm = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ym = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Xm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Zm = null, Qm = null, $m = null, eh = !1, th = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), nh = !1;
		if (th) try {
			var rh = {};
			Object.defineProperty(rh, "passive", { get: function() {
				nh = !0;
			} }), window.addEventListener("test", rh, rh), window.removeEventListener("test", rh, rh);
		} catch {
			nh = !1;
		}
		var ih = null, ah = null, oh = null, sh = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function(e) {
				return e.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0
		}, ch = gn(sh), lh = B({}, sh, {
			view: 0,
			detail: 0
		}), uh = gn(lh), dh, fh, ph, mh = B({}, lh, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: vn,
			button: 0,
			buttons: 0,
			relatedTarget: function(e) {
				return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
			},
			movementX: function(e) {
				return "movementX" in e ? e.movementX : (e !== ph && (ph && e.type === "mousemove" ? (dh = e.screenX - ph.screenX, fh = e.screenY - ph.screenY) : fh = dh = 0, ph = e), dh);
			},
			movementY: function(e) {
				return "movementY" in e ? e.movementY : fh;
			}
		}), hh = gn(mh), gh = gn(B({}, mh, { dataTransfer: 0 })), _h = gn(B({}, lh, { relatedTarget: 0 })), vh = gn(B({}, sh, {
			animationName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		})), yh = gn(B({}, sh, { clipboardData: function(e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		} })), bh = gn(B({}, sh, { data: 0 })), xh = bh, Sh = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		}, Ch = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta"
		}, wh = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		}, Th = gn(B({}, lh, {
			key: function(e) {
				if (e.key) {
					var t = Sh[e.key] || e.key;
					if (t !== "Unidentified") return t;
				}
				return e.type === "keypress" ? (e = pn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ch[e.keyCode] || "Unidentified" : "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: vn,
			charCode: function(e) {
				return e.type === "keypress" ? pn(e) : 0;
			},
			keyCode: function(e) {
				return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
			},
			which: function(e) {
				return e.type === "keypress" ? pn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
			}
		})), Eh = gn(B({}, mh, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0
		})), Dh = gn(B({}, lh, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: vn
		})), Oh = gn(B({}, sh, {
			propertyName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		})), kh = gn(B({}, mh, {
			deltaX: function(e) {
				return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
			},
			deltaY: function(e) {
				return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
			},
			deltaZ: 0,
			deltaMode: 0
		})), Ah = gn(B({}, sh, {
			newState: 0,
			oldState: 0
		})), jh = [
			9,
			13,
			27,
			32
		], Mh = 229, Nh = th && "CompositionEvent" in window, Ph = null;
		th && "documentMode" in document && (Ph = document.documentMode);
		var Fh = th && "TextEvent" in window && !Ph, Ih = th && (!Nh || Ph && 8 < Ph && 11 >= Ph), Lh = 32, Rh = String.fromCharCode(Lh), zh = !1, Bh = !1, Vh = {
			color: !0,
			date: !0,
			datetime: !0,
			"datetime-local": !0,
			email: !0,
			month: !0,
			number: !0,
			password: !0,
			range: !0,
			search: !0,
			tel: !0,
			text: !0,
			time: !0,
			url: !0,
			week: !0
		}, Hh = null, Uh = null, Wh = !1;
		th && (Wh = wn("input") && (!document.documentMode || 9 < document.documentMode));
		var Gh = typeof Object.is == "function" ? Object.is : Fn, Kh = th && "documentMode" in document && 11 >= document.documentMode, qh = null, Jh = null, Yh = null, Xh = !1, Zh = {
			animationend: Un("Animation", "AnimationEnd"),
			animationiteration: Un("Animation", "AnimationIteration"),
			animationstart: Un("Animation", "AnimationStart"),
			transitionrun: Un("Transition", "TransitionRun"),
			transitionstart: Un("Transition", "TransitionStart"),
			transitioncancel: Un("Transition", "TransitionCancel"),
			transitionend: Un("Transition", "TransitionEnd")
		}, Qh = {}, $h = {};
		th && ($h = document.createElement("div").style, "AnimationEvent" in window || (delete Zh.animationend.animation, delete Zh.animationiteration.animation, delete Zh.animationstart.animation), "TransitionEvent" in window || delete Zh.transitionend.transition);
		var eg = Wn("animationend"), tg = Wn("animationiteration"), ng = Wn("animationstart"), rg = Wn("transitionrun"), ig = Wn("transitionstart"), ag = Wn("transitioncancel"), og = Wn("transitionend"), sg = /* @__PURE__ */ new Map(), cg = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
		cg.push("scrollEnd");
		var lg = 0;
		if (typeof performance == "object" && typeof performance.now == "function") var ug = performance, dg = function() {
			return ug.now();
		};
		else {
			var fg = Date;
			dg = function() {
				return fg.now();
			};
		}
		var pg = typeof reportError == "function" ? reportError : function(e) {
			if (typeof window == "object" && typeof window.ErrorEvent == "function") {
				var t = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
					error: e
				});
				if (!window.dispatchEvent(t)) return;
			} else if (typeof process == "object" && typeof process.emit == "function") {
				process.emit("uncaughtException", e);
				return;
			}
			console.error(e);
		}, mg = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", hg = 0, gg = 1, _g = 2, vg = 3, yg = "–\xA0", bg = "+\xA0", xg = " \xA0", Sg = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Cg = "Components ⚛", H = "Scheduler ⚛", U = "Blocking", wg = !1, Tg = {
			color: "primary",
			properties: null,
			tooltipText: "",
			track: Cg
		}, Eg = {
			start: -0,
			end: -0,
			detail: { devtools: Tg }
		}, Dg = ["Changed Props", ""], Og = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", kg = ["Changed Props", Og], Ag = 1, jg = 2, Mg = [], Ng = 0, Pg = 0, Fg = {};
		Object.freeze(Fg);
		var Ig = null, Lg = null, W = 0, Rg = 1, G = 2, zg = 8, Bg = 16, Vg = 32, Hg = !1;
		try {
			var Ug = Object.preventExtensions({});
			new Map([[Ug, null]]), new Set([Ug]);
		} catch {
			Hg = !0;
		}
		var Wg = /* @__PURE__ */ new WeakMap(), Gg = [], Kg = 0, qg = null, Jg = 0, Yg = [], Xg = 0, Zg = null, Qg = 1, $g = "", e_ = null, t_ = null, K = !1, n_ = !1, r_ = null, i_ = null, a_ = !1, o_ = Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."), s_ = oe(null), c_ = oe(null), l_ = {}, u_ = null, d_ = null, f_ = !1, p_ = typeof AbortController < "u" ? AbortController : function() {
			var e = [], t = this.signal = {
				aborted: !1,
				addEventListener: function(t, n) {
					e.push(n);
				}
			};
			this.abort = function() {
				t.aborted = !0, e.forEach(function(e) {
					return e();
				});
			};
		}, m_ = Of.unstable_scheduleCallback, h_ = Of.unstable_NormalPriority, g_ = {
			$$typeof: Rf,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
			_currentRenderer: null,
			_currentRenderer2: null
		}, __ = Of.unstable_now, v_ = console.createTask ? console.createTask : function() {
			return null;
		}, y_ = 1, b_ = 2, x_ = -0, S_ = -0, C_ = -0, w_ = null, T_ = -1.1, E_ = -0, D_ = -0, q = -1.1, J = -1.1, O_ = null, k_ = !1, A_ = -0, j_ = -1.1, M_ = null, N_ = 0, P_ = null, F_ = null, I_ = -1.1, L_ = null, R_ = -1.1, z_ = -1.1, B_ = -0, V_ = -1.1, H_ = -1.1, U_ = 0, W_ = null, G_ = null, K_ = null, q_ = -1.1, J_ = null, Y_ = -1.1, X_ = -1.1, Z_ = -0, Q_ = -0, $_ = 0, ev = null, tv = 0, nv = -1.1, rv = !1, iv = !1, av = null, ov = 0, sv = 0, cv = null, lv = V.S;
		V.S = function(e, t) {
			if (yx = Cp(), typeof t == "object" && t && typeof t.then == "function") {
				if (0 > V_ && 0 > H_) {
					V_ = __();
					var n = qu(), r = Ku();
					(n !== Y_ || r !== J_) && (Y_ = -1.1), q_ = n, J_ = r;
				}
				Ai(e, t);
			}
			lv !== null && lv(e, t);
		};
		var uv = oe(null), dv = {
			recordUnsafeLifecycleWarnings: function() {},
			flushPendingUnsafeLifecycleWarnings: function() {},
			recordLegacyContextWarning: function() {},
			flushLegacyContextWarning: function() {},
			discardPendingWarnings: function() {}
		}, fv = [], pv = [], mv = [], hv = [], gv = [], _v = [], vv = /* @__PURE__ */ new Set();
		dv.recordUnsafeLifecycleWarnings = function(e, t) {
			vv.has(e.type) || (typeof t.componentWillMount == "function" && !0 !== t.componentWillMount.__suppressDeprecationWarning && fv.push(e), e.mode & zg && typeof t.UNSAFE_componentWillMount == "function" && pv.push(e), typeof t.componentWillReceiveProps == "function" && !0 !== t.componentWillReceiveProps.__suppressDeprecationWarning && mv.push(e), e.mode & zg && typeof t.UNSAFE_componentWillReceiveProps == "function" && hv.push(e), typeof t.componentWillUpdate == "function" && !0 !== t.componentWillUpdate.__suppressDeprecationWarning && gv.push(e), e.mode & zg && typeof t.UNSAFE_componentWillUpdate == "function" && _v.push(e));
		}, dv.flushPendingUnsafeLifecycleWarnings = function() {
			var e = /* @__PURE__ */ new Set();
			0 < fv.length && (fv.forEach(function(t) {
				e.add(C(t) || "Component"), vv.add(t.type);
			}), fv = []);
			var t = /* @__PURE__ */ new Set();
			0 < pv.length && (pv.forEach(function(e) {
				t.add(C(e) || "Component"), vv.add(e.type);
			}), pv = []);
			var n = /* @__PURE__ */ new Set();
			0 < mv.length && (mv.forEach(function(e) {
				n.add(C(e) || "Component"), vv.add(e.type);
			}), mv = []);
			var r = /* @__PURE__ */ new Set();
			0 < hv.length && (hv.forEach(function(e) {
				r.add(C(e) || "Component"), vv.add(e.type);
			}), hv = []);
			var i = /* @__PURE__ */ new Set();
			0 < gv.length && (gv.forEach(function(e) {
				i.add(C(e) || "Component"), vv.add(e.type);
			}), gv = []);
			var a = /* @__PURE__ */ new Set();
			if (0 < _v.length && (_v.forEach(function(e) {
				a.add(C(e) || "Component"), vv.add(e.type);
			}), _v = []), 0 < t.size) {
				var o = p(t);
				console.error("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s", o);
			}
			0 < r.size && (o = p(r), console.error("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state\n\nPlease update the following components: %s", o)), 0 < a.size && (o = p(a), console.error("Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s", o)), 0 < e.size && (o = p(e), console.warn("componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", o)), 0 < n.size && (o = p(n), console.warn("componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", o)), 0 < i.size && (o = p(i), console.warn("componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", o));
		};
		var yv = /* @__PURE__ */ new Map(), bv = /* @__PURE__ */ new Set();
		dv.recordLegacyContextWarning = function(e, t) {
			for (var n = null, r = e; r !== null;) r.mode & zg && (n = r), r = r.return;
			n === null ? console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.") : !bv.has(e.type) && (r = yv.get(n), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (r === void 0 && (r = [], yv.set(n, r)), r.push(e));
		}, dv.flushLegacyContextWarning = function() {
			yv.forEach(function(e) {
				if (e.length !== 0) {
					var t = e[0], n = /* @__PURE__ */ new Set();
					e.forEach(function(e) {
						n.add(C(e) || "Component"), bv.add(e.type);
					});
					var r = p(n);
					D(t, function() {
						console.error("Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://react.dev/link/legacy-context", r);
					});
				}
			});
		}, dv.discardPendingWarnings = function() {
			fv = [], pv = [], mv = [], hv = [], gv = [], _v = [], yv = /* @__PURE__ */ new Map();
		};
		var xv = { react_stack_bottom_frame: function(e, t, n) {
			var r = _p;
			_p = !0;
			try {
				return e(t, n);
			} finally {
				_p = r;
			}
		} }, Sv = xv.react_stack_bottom_frame.bind(xv), Cv = { react_stack_bottom_frame: function(e) {
			var t = _p;
			_p = !0;
			try {
				return e.render();
			} finally {
				_p = t;
			}
		} }, wv = Cv.react_stack_bottom_frame.bind(Cv), Tv = { react_stack_bottom_frame: function(e, t) {
			try {
				t.componentDidMount();
			} catch (t) {
				I(e, e.return, t);
			}
		} }, Ev = Tv.react_stack_bottom_frame.bind(Tv), Dv = { react_stack_bottom_frame: function(e, t, n, r, i) {
			try {
				t.componentDidUpdate(n, r, i);
			} catch (t) {
				I(e, e.return, t);
			}
		} }, Ov = Dv.react_stack_bottom_frame.bind(Dv), kv = { react_stack_bottom_frame: function(e, t) {
			var n = t.stack;
			e.componentDidCatch(t.value, { componentStack: n === null ? "" : n });
		} }, Av = kv.react_stack_bottom_frame.bind(kv), jv = { react_stack_bottom_frame: function(e, t, n) {
			try {
				n.componentWillUnmount();
			} catch (n) {
				I(e, t, n);
			}
		} }, Mv = jv.react_stack_bottom_frame.bind(jv), Nv = { react_stack_bottom_frame: function(e) {
			var t = e.create;
			return e = e.inst, t = t(), e.destroy = t;
		} }, Pv = Nv.react_stack_bottom_frame.bind(Nv), Fv = { react_stack_bottom_frame: function(e, t, n) {
			try {
				n();
			} catch (n) {
				I(e, t, n);
			}
		} }, Iv = Fv.react_stack_bottom_frame.bind(Fv), Lv = { react_stack_bottom_frame: function(e) {
			var t = e._init;
			return t(e._payload);
		} }, Rv = Lv.react_stack_bottom_frame.bind(Lv), zv = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), Bv = Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."), Vv = Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."), Hv = { then: function() {
			console.error("Internal React error: A listener was unexpectedly attached to a \"noop\" thenable. This is a bug in React. Please file an issue.");
		} }, Uv = null, Wv = !1, Gv = null, Kv = 0, Y = null, qv, Jv = qv = !1, Yv = {}, Xv = {}, Zv = {};
		d = function(e, t, n) {
			if (typeof n == "object" && n && n._store && (!n._store.validated && n.key == null || n._store.validated === 2)) {
				if (typeof n._store != "object") throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
				n._store.validated = 1;
				var r = C(e), i = r || "null";
				if (!Yv[i]) {
					Yv[i] = !0, n = n._owner, e = e._debugOwner;
					var a = "";
					e && typeof e.tag == "number" && (i = C(e)) && (a = "\n\nCheck the render method of `" + i + "`."), a || r && (a = "\n\nCheck the top-level render call using <" + r + ">.");
					var o = "";
					n != null && e !== n && (r = null, typeof n.tag == "number" ? r = C(n) : typeof n.name == "string" && (r = n.name), r && (o = " It was passed a child from " + r + ".")), D(t, function() {
						console.error("Each child in a list should have a unique \"key\" prop.%s%s See https://react.dev/link/warning-keys for more information.", a, o);
					});
				}
			}
		};
		var Qv = Zi(!0), $v = Zi(!1), ey = 0, ty = 1, ny = 2, ry = 3, iy = !1, ay = !1, oy = null, sy = !1, cy = oe(null), ly = oe(0), uy = oe(null), dy = null, fy = 1, py = 2, my = oe(0), hy = 0, gy = 1, _y = 2, vy = 4, yy = 8, by, xy = /* @__PURE__ */ new Set(), Sy = /* @__PURE__ */ new Set(), Cy = /* @__PURE__ */ new Set(), wy = /* @__PURE__ */ new Set(), Ty = 0, X = null, Ey = null, Dy = null, Oy = !1, ky = !1, Ay = !1, jy = 0, My = 0, Ny = null, Py = 0, Fy = 25, Z = null, Iy = null, Ly = -1, Ry = !1, zy = {
			readContext: ii,
			use: Pa,
			useCallback: xa,
			useContext: xa,
			useEffect: xa,
			useImperativeHandle: xa,
			useLayoutEffect: xa,
			useInsertionEffect: xa,
			useMemo: xa,
			useReducer: xa,
			useRef: xa,
			useState: xa,
			useDebugValue: xa,
			useDeferredValue: xa,
			useTransition: xa,
			useSyncExternalStore: xa,
			useId: xa,
			useHostTransitionStatus: xa,
			useFormState: xa,
			useActionState: xa,
			useOptimistic: xa,
			useMemoCache: xa,
			useCacheRefresh: xa
		};
		zy.useEffectEvent = xa;
		var By = null, Vy = null, Hy = null, Uy = null, Wy = null, Gy = null, Ky = null;
		By = {
			readContext: function(e) {
				return ii(e);
			},
			use: Pa,
			useCallback: function(e, t) {
				return Z = "useCallback", N(), ya(t), wo(e, t);
			},
			useContext: function(e) {
				return Z = "useContext", N(), ii(e);
			},
			useEffect: function(e, t) {
				return Z = "useEffect", N(), ya(t), _o(e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return Z = "useImperativeHandle", N(), ya(n), So(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				Z = "useInsertionEffect", N(), ya(t), ho(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return Z = "useLayoutEffect", N(), ya(t), bo(e, t);
			},
			useMemo: function(e, t) {
				Z = "useMemo", N(), ya(t);
				var n = V.H;
				V.H = Wy;
				try {
					return Eo(e, t);
				} finally {
					V.H = n;
				}
			},
			useReducer: function(e, t, n) {
				Z = "useReducer", N();
				var r = V.H;
				V.H = Wy;
				try {
					return La(e, t, n);
				} finally {
					V.H = r;
				}
			},
			useRef: function(e) {
				return Z = "useRef", N(), mo(e);
			},
			useState: function(e) {
				Z = "useState", N();
				var t = V.H;
				V.H = Wy;
				try {
					return Ya(e);
				} finally {
					V.H = t;
				}
			},
			useDebugValue: function() {
				Z = "useDebugValue", N();
			},
			useDeferredValue: function(e, t) {
				return Z = "useDeferredValue", N(), Oo(e, t);
			},
			useTransition: function() {
				return Z = "useTransition", N(), Ro();
			},
			useSyncExternalStore: function(e, t, n) {
				return Z = "useSyncExternalStore", N(), Va(e, t, n);
			},
			useId: function() {
				return Z = "useId", N(), Ho();
			},
			useFormState: function(e, t) {
				return Z = "useFormState", N(), ba(), so(e, t);
			},
			useActionState: function(e, t) {
				return Z = "useActionState", N(), so(e, t);
			},
			useOptimistic: function(e) {
				return Z = "useOptimistic", N(), Xa(e);
			},
			useHostTransitionStatus: Vo,
			useMemoCache: Fa,
			useCacheRefresh: function() {
				return Z = "useCacheRefresh", N(), Uo();
			},
			useEffectEvent: function(e) {
				return Z = "useEffectEvent", N(), yo(e);
			}
		}, Vy = {
			readContext: function(e) {
				return ii(e);
			},
			use: Pa,
			useCallback: function(e, t) {
				return Z = "useCallback", P(), wo(e, t);
			},
			useContext: function(e) {
				return Z = "useContext", P(), ii(e);
			},
			useEffect: function(e, t) {
				return Z = "useEffect", P(), _o(e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return Z = "useImperativeHandle", P(), So(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				Z = "useInsertionEffect", P(), ho(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return Z = "useLayoutEffect", P(), bo(e, t);
			},
			useMemo: function(e, t) {
				Z = "useMemo", P();
				var n = V.H;
				V.H = Wy;
				try {
					return Eo(e, t);
				} finally {
					V.H = n;
				}
			},
			useReducer: function(e, t, n) {
				Z = "useReducer", P();
				var r = V.H;
				V.H = Wy;
				try {
					return La(e, t, n);
				} finally {
					V.H = r;
				}
			},
			useRef: function(e) {
				return Z = "useRef", P(), mo(e);
			},
			useState: function(e) {
				Z = "useState", P();
				var t = V.H;
				V.H = Wy;
				try {
					return Ya(e);
				} finally {
					V.H = t;
				}
			},
			useDebugValue: function() {
				Z = "useDebugValue", P();
			},
			useDeferredValue: function(e, t) {
				return Z = "useDeferredValue", P(), Oo(e, t);
			},
			useTransition: function() {
				return Z = "useTransition", P(), Ro();
			},
			useSyncExternalStore: function(e, t, n) {
				return Z = "useSyncExternalStore", P(), Va(e, t, n);
			},
			useId: function() {
				return Z = "useId", P(), Ho();
			},
			useActionState: function(e, t) {
				return Z = "useActionState", P(), so(e, t);
			},
			useFormState: function(e, t) {
				return Z = "useFormState", P(), ba(), so(e, t);
			},
			useOptimistic: function(e) {
				return Z = "useOptimistic", P(), Xa(e);
			},
			useHostTransitionStatus: Vo,
			useMemoCache: Fa,
			useCacheRefresh: function() {
				return Z = "useCacheRefresh", P(), Uo();
			},
			useEffectEvent: function(e) {
				return Z = "useEffectEvent", P(), yo(e);
			}
		}, Hy = {
			readContext: function(e) {
				return ii(e);
			},
			use: Pa,
			useCallback: function(e, t) {
				return Z = "useCallback", P(), To(e, t);
			},
			useContext: function(e) {
				return Z = "useContext", P(), ii(e);
			},
			useEffect: function(e, t) {
				Z = "useEffect", P(), go(2048, yy, e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return Z = "useImperativeHandle", P(), Co(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				return Z = "useInsertionEffect", P(), go(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return Z = "useLayoutEffect", P(), go(4, vy, e, t);
			},
			useMemo: function(e, t) {
				Z = "useMemo", P();
				var n = V.H;
				V.H = Gy;
				try {
					return Do(e, t);
				} finally {
					V.H = n;
				}
			},
			useReducer: function(e, t, n) {
				Z = "useReducer", P();
				var r = V.H;
				V.H = Gy;
				try {
					return Ra(e, t, n);
				} finally {
					V.H = r;
				}
			},
			useRef: function() {
				return Z = "useRef", P(), ja().memoizedState;
			},
			useState: function() {
				Z = "useState", P();
				var e = V.H;
				V.H = Gy;
				try {
					return Ra(Ia);
				} finally {
					V.H = e;
				}
			},
			useDebugValue: function() {
				Z = "useDebugValue", P();
			},
			useDeferredValue: function(e, t) {
				return Z = "useDeferredValue", P(), ko(e, t);
			},
			useTransition: function() {
				return Z = "useTransition", P(), zo();
			},
			useSyncExternalStore: function(e, t, n) {
				return Z = "useSyncExternalStore", P(), Ha(e, t, n);
			},
			useId: function() {
				return Z = "useId", P(), ja().memoizedState;
			},
			useFormState: function(e) {
				return Z = "useFormState", P(), ba(), co(e);
			},
			useActionState: function(e) {
				return Z = "useActionState", P(), co(e);
			},
			useOptimistic: function(e, t) {
				return Z = "useOptimistic", P(), Za(e, t);
			},
			useHostTransitionStatus: Vo,
			useMemoCache: Fa,
			useCacheRefresh: function() {
				return Z = "useCacheRefresh", P(), ja().memoizedState;
			},
			useEffectEvent: function(e) {
				return Z = "useEffectEvent", P(), F(e);
			}
		}, Uy = {
			readContext: function(e) {
				return ii(e);
			},
			use: Pa,
			useCallback: function(e, t) {
				return Z = "useCallback", P(), To(e, t);
			},
			useContext: function(e) {
				return Z = "useContext", P(), ii(e);
			},
			useEffect: function(e, t) {
				Z = "useEffect", P(), go(2048, yy, e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return Z = "useImperativeHandle", P(), Co(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				return Z = "useInsertionEffect", P(), go(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return Z = "useLayoutEffect", P(), go(4, vy, e, t);
			},
			useMemo: function(e, t) {
				Z = "useMemo", P();
				var n = V.H;
				V.H = Ky;
				try {
					return Do(e, t);
				} finally {
					V.H = n;
				}
			},
			useReducer: function(e, t, n) {
				Z = "useReducer", P();
				var r = V.H;
				V.H = Ky;
				try {
					return Ba(e, t, n);
				} finally {
					V.H = r;
				}
			},
			useRef: function() {
				return Z = "useRef", P(), ja().memoizedState;
			},
			useState: function() {
				Z = "useState", P();
				var e = V.H;
				V.H = Ky;
				try {
					return Ba(Ia);
				} finally {
					V.H = e;
				}
			},
			useDebugValue: function() {
				Z = "useDebugValue", P();
			},
			useDeferredValue: function(e, t) {
				return Z = "useDeferredValue", P(), Ao(e, t);
			},
			useTransition: function() {
				return Z = "useTransition", P(), Bo();
			},
			useSyncExternalStore: function(e, t, n) {
				return Z = "useSyncExternalStore", P(), Ha(e, t, n);
			},
			useId: function() {
				return Z = "useId", P(), ja().memoizedState;
			},
			useFormState: function(e) {
				return Z = "useFormState", P(), ba(), fo(e);
			},
			useActionState: function(e) {
				return Z = "useActionState", P(), fo(e);
			},
			useOptimistic: function(e, t) {
				return Z = "useOptimistic", P(), $a(e, t);
			},
			useHostTransitionStatus: Vo,
			useMemoCache: Fa,
			useCacheRefresh: function() {
				return Z = "useCacheRefresh", P(), ja().memoizedState;
			},
			useEffectEvent: function(e) {
				return Z = "useEffectEvent", P(), F(e);
			}
		}, Wy = {
			readContext: function(e) {
				return l(), ii(e);
			},
			use: function(e) {
				return c(), Pa(e);
			},
			useCallback: function(e, t) {
				return Z = "useCallback", c(), N(), wo(e, t);
			},
			useContext: function(e) {
				return Z = "useContext", c(), N(), ii(e);
			},
			useEffect: function(e, t) {
				return Z = "useEffect", c(), N(), _o(e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return Z = "useImperativeHandle", c(), N(), So(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				Z = "useInsertionEffect", c(), N(), ho(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return Z = "useLayoutEffect", c(), N(), bo(e, t);
			},
			useMemo: function(e, t) {
				Z = "useMemo", c(), N();
				var n = V.H;
				V.H = Wy;
				try {
					return Eo(e, t);
				} finally {
					V.H = n;
				}
			},
			useReducer: function(e, t, n) {
				Z = "useReducer", c(), N();
				var r = V.H;
				V.H = Wy;
				try {
					return La(e, t, n);
				} finally {
					V.H = r;
				}
			},
			useRef: function(e) {
				return Z = "useRef", c(), N(), mo(e);
			},
			useState: function(e) {
				Z = "useState", c(), N();
				var t = V.H;
				V.H = Wy;
				try {
					return Ya(e);
				} finally {
					V.H = t;
				}
			},
			useDebugValue: function() {
				Z = "useDebugValue", c(), N();
			},
			useDeferredValue: function(e, t) {
				return Z = "useDeferredValue", c(), N(), Oo(e, t);
			},
			useTransition: function() {
				return Z = "useTransition", c(), N(), Ro();
			},
			useSyncExternalStore: function(e, t, n) {
				return Z = "useSyncExternalStore", c(), N(), Va(e, t, n);
			},
			useId: function() {
				return Z = "useId", c(), N(), Ho();
			},
			useFormState: function(e, t) {
				return Z = "useFormState", c(), N(), so(e, t);
			},
			useActionState: function(e, t) {
				return Z = "useActionState", c(), N(), so(e, t);
			},
			useOptimistic: function(e) {
				return Z = "useOptimistic", c(), N(), Xa(e);
			},
			useMemoCache: function(e) {
				return c(), Fa(e);
			},
			useHostTransitionStatus: Vo,
			useCacheRefresh: function() {
				return Z = "useCacheRefresh", N(), Uo();
			},
			useEffectEvent: function(e) {
				return Z = "useEffectEvent", c(), N(), yo(e);
			}
		}, Gy = {
			readContext: function(e) {
				return l(), ii(e);
			},
			use: function(e) {
				return c(), Pa(e);
			},
			useCallback: function(e, t) {
				return Z = "useCallback", c(), P(), To(e, t);
			},
			useContext: function(e) {
				return Z = "useContext", c(), P(), ii(e);
			},
			useEffect: function(e, t) {
				Z = "useEffect", c(), P(), go(2048, yy, e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return Z = "useImperativeHandle", c(), P(), Co(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				return Z = "useInsertionEffect", c(), P(), go(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return Z = "useLayoutEffect", c(), P(), go(4, vy, e, t);
			},
			useMemo: function(e, t) {
				Z = "useMemo", c(), P();
				var n = V.H;
				V.H = Gy;
				try {
					return Do(e, t);
				} finally {
					V.H = n;
				}
			},
			useReducer: function(e, t, n) {
				Z = "useReducer", c(), P();
				var r = V.H;
				V.H = Gy;
				try {
					return Ra(e, t, n);
				} finally {
					V.H = r;
				}
			},
			useRef: function() {
				return Z = "useRef", c(), P(), ja().memoizedState;
			},
			useState: function() {
				Z = "useState", c(), P();
				var e = V.H;
				V.H = Gy;
				try {
					return Ra(Ia);
				} finally {
					V.H = e;
				}
			},
			useDebugValue: function() {
				Z = "useDebugValue", c(), P();
			},
			useDeferredValue: function(e, t) {
				return Z = "useDeferredValue", c(), P(), ko(e, t);
			},
			useTransition: function() {
				return Z = "useTransition", c(), P(), zo();
			},
			useSyncExternalStore: function(e, t, n) {
				return Z = "useSyncExternalStore", c(), P(), Ha(e, t, n);
			},
			useId: function() {
				return Z = "useId", c(), P(), ja().memoizedState;
			},
			useFormState: function(e) {
				return Z = "useFormState", c(), P(), co(e);
			},
			useActionState: function(e) {
				return Z = "useActionState", c(), P(), co(e);
			},
			useOptimistic: function(e, t) {
				return Z = "useOptimistic", c(), P(), Za(e, t);
			},
			useMemoCache: function(e) {
				return c(), Fa(e);
			},
			useHostTransitionStatus: Vo,
			useCacheRefresh: function() {
				return Z = "useCacheRefresh", P(), ja().memoizedState;
			},
			useEffectEvent: function(e) {
				return Z = "useEffectEvent", c(), P(), F(e);
			}
		}, Ky = {
			readContext: function(e) {
				return l(), ii(e);
			},
			use: function(e) {
				return c(), Pa(e);
			},
			useCallback: function(e, t) {
				return Z = "useCallback", c(), P(), To(e, t);
			},
			useContext: function(e) {
				return Z = "useContext", c(), P(), ii(e);
			},
			useEffect: function(e, t) {
				Z = "useEffect", c(), P(), go(2048, yy, e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return Z = "useImperativeHandle", c(), P(), Co(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				return Z = "useInsertionEffect", c(), P(), go(4, _y, e, t);
			},
			useLayoutEffect: function(e, t) {
				return Z = "useLayoutEffect", c(), P(), go(4, vy, e, t);
			},
			useMemo: function(e, t) {
				Z = "useMemo", c(), P();
				var n = V.H;
				V.H = Gy;
				try {
					return Do(e, t);
				} finally {
					V.H = n;
				}
			},
			useReducer: function(e, t, n) {
				Z = "useReducer", c(), P();
				var r = V.H;
				V.H = Gy;
				try {
					return Ba(e, t, n);
				} finally {
					V.H = r;
				}
			},
			useRef: function() {
				return Z = "useRef", c(), P(), ja().memoizedState;
			},
			useState: function() {
				Z = "useState", c(), P();
				var e = V.H;
				V.H = Gy;
				try {
					return Ba(Ia);
				} finally {
					V.H = e;
				}
			},
			useDebugValue: function() {
				Z = "useDebugValue", c(), P();
			},
			useDeferredValue: function(e, t) {
				return Z = "useDeferredValue", c(), P(), Ao(e, t);
			},
			useTransition: function() {
				return Z = "useTransition", c(), P(), Bo();
			},
			useSyncExternalStore: function(e, t, n) {
				return Z = "useSyncExternalStore", c(), P(), Ha(e, t, n);
			},
			useId: function() {
				return Z = "useId", c(), P(), ja().memoizedState;
			},
			useFormState: function(e) {
				return Z = "useFormState", c(), P(), fo(e);
			},
			useActionState: function(e) {
				return Z = "useActionState", c(), P(), fo(e);
			},
			useOptimistic: function(e, t) {
				return Z = "useOptimistic", c(), P(), $a(e, t);
			},
			useMemoCache: function(e) {
				return c(), Fa(e);
			},
			useHostTransitionStatus: Vo,
			useCacheRefresh: function() {
				return Z = "useCacheRefresh", P(), ja().memoizedState;
			},
			useEffectEvent: function(e) {
				return Z = "useEffectEvent", c(), P(), F(e);
			}
		};
		var qy = {}, Jy = /* @__PURE__ */ new Set(), Yy = /* @__PURE__ */ new Set(), Xy = /* @__PURE__ */ new Set(), Zy = /* @__PURE__ */ new Set(), Qy = /* @__PURE__ */ new Set(), $y = /* @__PURE__ */ new Set(), eb = /* @__PURE__ */ new Set(), tb = /* @__PURE__ */ new Set(), nb = /* @__PURE__ */ new Set(), rb = /* @__PURE__ */ new Set();
		Object.freeze(qy);
		var ib = {
			enqueueSetState: function(e, t, n) {
				e = e._reactInternals;
				var r = nl(e), i = ta(r);
				i.payload = t, n != null && (Qo(n), i.callback = n), t = na(e, i, r), t !== null && (ui(r, "this.setState()", e), il(t, e, r), ra(t, e, r));
			},
			enqueueReplaceState: function(e, t, n) {
				e = e._reactInternals;
				var r = nl(e), i = ta(r);
				i.tag = ty, i.payload = t, n != null && (Qo(n), i.callback = n), t = na(e, i, r), t !== null && (ui(r, "this.replaceState()", e), il(t, e, r), ra(t, e, r));
			},
			enqueueForceUpdate: function(e, t) {
				e = e._reactInternals;
				var n = nl(e), r = ta(n);
				r.tag = ny, t != null && (Qo(t), r.callback = t), t = na(e, r, n), t !== null && (ui(n, "this.forceUpdate()", e), il(t, e, n), ra(t, e, n));
			}
		}, ab = null, ob = null, sb = Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."), cb = !1, lb = {}, ub = {}, db = {}, fb = {}, pb = !1, mb = {}, hb = {}, gb = {
			dehydrated: null,
			treeContext: null,
			retryLane: 0,
			hydrationErrors: null
		}, _b = !1, vb = null;
		vb = /* @__PURE__ */ new Set();
		var yb = !1, bb = !1, xb = !1, Sb = typeof WeakSet == "function" ? WeakSet : Set, Cb = null, wb = null, Tb = null, Eb = null, Db = !1, Ob = null, kb = !1, Ab = 8192, jb = {
			getCacheForType: function(e) {
				var t = ii(g_), n = t.data.get(e);
				return n === void 0 && (n = e(), t.data.set(e, n)), n;
			},
			cacheSignal: function() {
				return ii(g_).controller.signal;
			},
			getOwner: function() {
				return gp;
			}
		};
		if (typeof Symbol == "function" && Symbol.for) {
			var Mb = Symbol.for;
			Mb("selector.component"), Mb("selector.has_pseudo_class"), Mb("selector.role"), Mb("selector.test_id"), Mb("selector.text");
		}
		var Nb = [], Pb = typeof WeakMap == "function" ? WeakMap : Map, Fb = 0, Ib = 2, Lb = 4, Rb = 0, zb = 1, Bb = 2, Vb = 3, Hb = 4, Ub = 6, Wb = 5, Gb = Fb, Kb = null, Q = null, $ = 0, qb = 0, Jb = 1, Yb = 2, Xb = 3, Zb = 4, Qb = 5, $b = 6, ex = 7, tx = 8, nx = 9, rx = qb, ix = null, ax = !1, ox = !1, sx = !1, cx = 0, lx = Rb, ux = 0, dx = 0, fx = 0, px = 0, mx = 0, hx = null, gx = null, _x = !1, vx = 0, yx = 0, bx = 300, xx = Infinity, Sx = 500, Cx = null, wx = null, Tx = null, Ex = 0, Dx = 1, Ox = 2, kx = 3, Ax = 0, jx = 1, Mx = 2, Nx = 3, Px = 4, Fx = 5, Ix = 0, Lx = null, Rx = null, zx = 0, Bx = 0, Vx = -0, Hx = null, Ux = null, Wx = null, Gx = Ex, Kx = null, qx = 50, Jx = 0, Yx = null, Xx = !1, Zx = !1, Qx = 50, $x = 0, eS = null, tS = !1, nS = null, rS = !1, iS = /* @__PURE__ */ new Set(), aS = {}, oS = null, sS = null, cS = !1, lS = !1, uS = !1, dS = !1, fS = 0, pS = {};
		(function() {
			for (var e = 0; e < cg.length; e++) {
				var t = cg[e], n = t.toLowerCase();
				t = t[0].toUpperCase() + t.slice(1), Gn(n, "on" + t);
			}
			Gn(eg, "onAnimationEnd"), Gn(tg, "onAnimationIteration"), Gn(ng, "onAnimationStart"), Gn("dblclick", "onDoubleClick"), Gn("focusin", "onFocus"), Gn("focusout", "onBlur"), Gn(rg, "onTransitionRun"), Gn(ig, "onTransitionStart"), Gn(ag, "onTransitionCancel"), Gn(og, "onTransitionEnd");
		})(), et("onMouseEnter", ["mouseout", "mouseover"]), et("onMouseLeave", ["mouseout", "mouseover"]), et("onPointerEnter", ["pointerout", "pointerover"]), et("onPointerLeave", ["pointerout", "pointerover"]), A("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), A("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), A("onBeforeInput", [
			"compositionend",
			"keypress",
			"textInput",
			"paste"
		]), A("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), A("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), A("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
		var mS = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hS = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mS)), gS = "_reactListening" + Math.random().toString(36).slice(2), _S = !1, vS = !1, yS = !1, bS = !1, xS = !1, SS = !1, CS = !1, wS = {}, TS = /\r\n?/g, ES = /\u0000|\uFFFD/g, DS = "http://www.w3.org/1999/xlink", OS = "http://www.w3.org/XML/1998/namespace", kS = "javascript:throw new Error('React form unexpectedly submitted.')", AS = "suppressHydrationWarning", jS = "&", MS = "/&", NS = "$", PS = "/$", FS = "$?", IS = "$~", LS = "$!", RS = "html", zS = "body", BS = "head", VS = "F!", HS = "F", US = "loading", WS = "style", GS = 0, KS = 1, qS = 2, JS = null, YS = null, XS = {
			dialog: !0,
			webview: !0
		}, ZS = null, QS = void 0, $S = typeof setTimeout == "function" ? setTimeout : void 0, eC = typeof clearTimeout == "function" ? clearTimeout : void 0, tC = -1, nC = typeof Promise == "function" ? Promise : void 0, rC = typeof queueMicrotask == "function" ? queueMicrotask : nC === void 0 ? $S : function(e) {
			return nC.resolve(null).then(e).catch(Ju);
		}, iC = null, aC = 0, oC = 1, sC = 2, cC = 3, lC = 4, uC = /* @__PURE__ */ new Map(), dC = /* @__PURE__ */ new Set(), fC = Yf.d;
		Yf.d = {
			f: function() {
				var e = fC.f(), t = ll();
				return e || t;
			},
			r: function(e) {
				var t = Xe(e);
				t !== null && t.tag === 5 && t.type === "form" ? Lo(t) : fC.r(e);
			},
			D: function(e) {
				fC.D(e), jd("dns-prefetch", e, null);
			},
			C: function(e, t) {
				fC.C(e, t), jd("preconnect", e, t);
			},
			L: function(e, t, n) {
				fC.L(e, t, n);
				var r = pC;
				if (r && e && t) {
					var i = "link[rel=\"preload\"][as=\"" + mt(t) + "\"]";
					t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + mt(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + mt(n.imageSizes) + "\"]")) : i += "[href=\"" + mt(e) + "\"]";
					var a = i;
					switch (t) {
						case "style":
							a = z(e);
							break;
						case "script": a = Ld(e);
					}
					uC.has(a) || (e = B({
						rel: "preload",
						href: t === "image" && n && n.imageSrcSet ? void 0 : e,
						as: t
					}, n), uC.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Pd(a)) || t === "script" && r.querySelector(Rd(a)) || (t = r.createElement("link"), Du(t, "link", e), $e(t), r.head.appendChild(t)));
				}
			},
			m: function(e, t) {
				fC.m(e, t);
				var n = pC;
				if (n && e) {
					var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + mt(r) + "\"][href=\"" + mt(e) + "\"]", a = i;
					switch (r) {
						case "audioworklet":
						case "paintworklet":
						case "serviceworker":
						case "sharedworker":
						case "worker":
						case "script": a = Ld(e);
					}
					if (!uC.has(a) && (e = B({
						rel: "modulepreload",
						href: e
					}, t), uC.set(a, e), n.querySelector(i) === null)) {
						switch (r) {
							case "audioworklet":
							case "paintworklet":
							case "serviceworker":
							case "sharedworker":
							case "worker":
							case "script": if (n.querySelector(Rd(a))) return;
						}
						r = n.createElement("link"), Du(r, "link", e), $e(r), n.head.appendChild(r);
					}
				}
			},
			X: function(e, t) {
				fC.X(e, t);
				var n = pC;
				if (n && e) {
					var r = Qe(n).hoistableScripts, i = Ld(e), a = r.get(i);
					a || (a = n.querySelector(Rd(i)), a || (e = B({
						src: e,
						async: !0
					}, t), (t = uC.get(i)) && Hd(e, t), a = n.createElement("script"), $e(a), Du(a, "link", e), n.head.appendChild(a)), a = {
						type: "script",
						instance: a,
						count: 1,
						state: null
					}, r.set(i, a));
				}
			},
			S: function(e, t, n) {
				fC.S(e, t, n);
				var r = pC;
				if (r && e) {
					var i = Qe(r).hoistableStyles, a = z(e);
					t ||= "default";
					var o = i.get(a);
					if (!o) {
						var s = {
							loading: aC,
							preload: null
						};
						if (o = r.querySelector(Pd(a))) s.loading = oC | lC;
						else {
							e = B({
								rel: "stylesheet",
								href: e,
								"data-precedence": t
							}, n), (n = uC.get(a)) && Vd(e, n);
							var c = o = r.createElement("link");
							$e(c), Du(c, "link", e), c._p = new Promise(function(e, t) {
								c.onload = e, c.onerror = t;
							}), c.addEventListener("load", function() {
								s.loading |= oC;
							}), c.addEventListener("error", function() {
								s.loading |= sC;
							}), s.loading |= lC, Bd(o, t, r);
						}
						o = {
							type: "stylesheet",
							instance: o,
							count: 1,
							state: s
						}, i.set(a, o);
					}
				}
			},
			M: function(e, t) {
				fC.M(e, t);
				var n = pC;
				if (n && e) {
					var r = Qe(n).hoistableScripts, i = Ld(e), a = r.get(i);
					a || (a = n.querySelector(Rd(i)), a || (e = B({
						src: e,
						async: !0,
						type: "module"
					}, t), (t = uC.get(i)) && Hd(e, t), a = n.createElement("script"), $e(a), Du(a, "link", e), n.head.appendChild(a)), a = {
						type: "script",
						instance: a,
						count: 1,
						state: null
					}, r.set(i, a));
				}
			}
		};
		var pC = typeof document > "u" ? null : document, mC = null, hC = 6e4, gC = 800, _C = 500, vC = 0, yC = null, bC = null, xC = Xf, SC = {
			$$typeof: Rf,
			Provider: null,
			Consumer: null,
			_currentValue: xC,
			_currentValue2: xC,
			_threadCount: 0
		}, CC = "%c%s%c", wC = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", TC = "", EC = " ", DC = Function.prototype.bind, OC = !1, kC = null, AC = null, jC = null, MC = null, NC = null, PC = null, FC = null, IC = null, LC = null, RC = null;
		kC = function(e, r, i, a) {
			r = t(e, r), r !== null && (i = n(r.memoizedState, i, 0, a), r.memoizedState = i, r.baseState = i, e.memoizedProps = B({}, e.memoizedProps), i = pr(e, 2), i !== null && il(i, e, 2));
		}, AC = function(e, n, r) {
			n = t(e, n), n !== null && (r = a(n.memoizedState, r, 0), n.memoizedState = r, n.baseState = r, e.memoizedProps = B({}, e.memoizedProps), r = pr(e, 2), r !== null && il(r, e, 2));
		}, jC = function(e, n, i, a) {
			n = t(e, n), n !== null && (i = r(n.memoizedState, i, a), n.memoizedState = i, n.baseState = i, e.memoizedProps = B({}, e.memoizedProps), i = pr(e, 2), i !== null && il(i, e, 2));
		}, MC = function(e, t, r) {
			e.pendingProps = n(e.memoizedProps, t, 0, r), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = pr(e, 2), t !== null && il(t, e, 2);
		}, NC = function(e, t) {
			e.pendingProps = a(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = pr(e, 2), t !== null && il(t, e, 2);
		}, PC = function(e, t, n) {
			e.pendingProps = r(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = pr(e, 2), t !== null && il(t, e, 2);
		}, FC = function(e) {
			var t = pr(e, 2);
			t !== null && il(t, e, 2);
		}, IC = function(e) {
			var t = Fe(), n = pr(e, t);
			n !== null && il(n, e, t);
		}, LC = function(e) {
			s = e;
		}, RC = function(e) {
			o = e;
		};
		var zC = !0, BC = null, VC = !1, HC = null, UC = null, WC = null, GC = /* @__PURE__ */ new Map(), KC = /* @__PURE__ */ new Map(), qC = [], JC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "), YC = null;
		if (Ef.prototype.render = Tf.prototype.render = function(e) {
			var t = this._internalRoot;
			if (t === null) throw Error("Cannot update an unmounted root.");
			var n = arguments;
			typeof n[1] == "function" ? console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : y(n[1]) ? console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : n[1] !== void 0 && console.error("You passed a second argument to root.render(...) but it only accepts one argument."), n = e;
			var r = t.current;
			tf(r, nl(r), n, t, null, null);
		}, Ef.prototype.unmount = Tf.prototype.unmount = function() {
			var e = arguments;
			if (typeof e[0] == "function" && console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."), e = this._internalRoot, e !== null) {
				this._internalRoot = null;
				var t = e.containerInfo;
				(Gb & (Ib | Lb)) !== Fb && console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), tf(e.current, 2, null, e, null, null), ll(), t[Yp] = null;
			}
		}, Ef.prototype.unstable_scheduleHydration = function(e) {
			if (e) {
				var t = Ke();
				e = {
					blockedOn: null,
					target: e,
					priority: t
				};
				for (var n = 0; n < qC.length && t !== 0 && t < qC[n].priority; n++);
				qC.splice(n, 0, e), n === 0 && _f(e);
			}
		}, (function() {
			var e = kf.version;
			if (e !== "19.2.5") throw Error("Incompatible React versions: The \"react\" and \"react-dom\" packages must have the exact same version. Instead got:\n  - react:      " + (e + "\n  - react-dom:  19.2.5\nLearn more: https://react.dev/warnings/version-mismatch"));
		})(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"), Yf.findDOMNode = function(e) {
			var t = e._reactInternals;
			if (t === void 0) throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error("Argument appears to not be a ReactComponent. Keys: " + e));
			return e = ne(t), e = e === null ? null : re(e), e = e === null ? null : e.stateNode, e;
		}, !(function() {
			var e = {
				bundleType: 1,
				version: "19.2.5",
				rendererPackageName: "react-dom",
				currentDispatcherRef: V,
				reconcilerVersion: "19.2.5"
			};
			return e.overrideHookState = kC, e.overrideHookStateDeletePath = AC, e.overrideHookStateRenamePath = jC, e.overrideProps = MC, e.overridePropsDeletePath = NC, e.overridePropsRenamePath = PC, e.scheduleUpdate = FC, e.scheduleRetry = IC, e.setErrorHandler = LC, e.setSuspenseHandler = RC, e.scheduleRefresh = g, e.scheduleRoot = h, e.setRefreshHandler = _, e.getCurrentFiber = sf, ke(e);
		})() && th && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
			var XC = window.location.protocol;
			/^(https?|file):$/.test(XC) && console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (XC === "file:" ? "\nYou might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq" : ""), "font-weight:bold");
		}
		e.createRoot = function(e, t) {
			if (!y(e)) throw Error("Target container is not a DOM element.");
			Df(e);
			var n = !1, r = "", i = rs, a = is, o = as;
			return t != null && (t.hydrate ? console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t && t.$$typeof === Mf && console.error("You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:\n\n  let root = createRoot(domContainer);\n  root.render(<App />);"), !0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (a = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = $d(e, 1, !1, null, null, n, r, null, i, a, o, wf), e[Yp] = t.current, du(e), new Tf(t);
		}, e.hydrateRoot = function(e, t, n) {
			if (!y(e)) throw Error("Target container is not a DOM element.");
			Df(e), t === void 0 && console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
			var r = !1, i = "", a = rs, o = is, s = as, c = null;
			return n != null && (!0 === n.unstable_strictMode && (r = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (a = n.onUncaughtError), n.onCaughtError !== void 0 && (o = n.onCaughtError), n.onRecoverableError !== void 0 && (s = n.onRecoverableError), n.formState !== void 0 && (c = n.formState)), t = $d(e, 1, !0, t, n ?? null, r, i, c, a, o, s, wf), t.context = ef(null), n = t.current, r = nl(n), r = He(r), i = ta(r), i.callback = null, na(n, i, r), ui(r, "hydrateRoot()", null), n = r, t.current.lanes = n, Le(t, n), Xl(t), e[Yp] = t.current, du(e), new Ef(t);
		}, e.version = "19.2.5", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), x = /* @__PURE__ */ l(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
			if (process.env.NODE_ENV !== "production") throw Error("^_^");
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
			} catch (e) {
				console.error(e);
			}
		}
	}
	process.env.NODE_ENV === "production" ? (n(), t.exports = y()) : t.exports = b();
})), ee = /* @__PURE__ */ l(((e, t) => {
	var n = 10, r = (e = 0) => (t) => `\u001B[${38 + e};5;${t}m`, i = (e = 0) => (t, n, r) => `\u001B[${38 + e};2;${t};${n};${r}m`;
	function a() {
		let e = /* @__PURE__ */ new Map(), t = {
			modifier: {
				reset: [0, 0],
				bold: [1, 22],
				dim: [2, 22],
				italic: [3, 23],
				underline: [4, 24],
				overline: [53, 55],
				inverse: [7, 27],
				hidden: [8, 28],
				strikethrough: [9, 29]
			},
			color: {
				black: [30, 39],
				red: [31, 39],
				green: [32, 39],
				yellow: [33, 39],
				blue: [34, 39],
				magenta: [35, 39],
				cyan: [36, 39],
				white: [37, 39],
				blackBright: [90, 39],
				redBright: [91, 39],
				greenBright: [92, 39],
				yellowBright: [93, 39],
				blueBright: [94, 39],
				magentaBright: [95, 39],
				cyanBright: [96, 39],
				whiteBright: [97, 39]
			},
			bgColor: {
				bgBlack: [40, 49],
				bgRed: [41, 49],
				bgGreen: [42, 49],
				bgYellow: [43, 49],
				bgBlue: [44, 49],
				bgMagenta: [45, 49],
				bgCyan: [46, 49],
				bgWhite: [47, 49],
				bgBlackBright: [100, 49],
				bgRedBright: [101, 49],
				bgGreenBright: [102, 49],
				bgYellowBright: [103, 49],
				bgBlueBright: [104, 49],
				bgMagentaBright: [105, 49],
				bgCyanBright: [106, 49],
				bgWhiteBright: [107, 49]
			}
		};
		t.color.gray = t.color.blackBright, t.bgColor.bgGray = t.bgColor.bgBlackBright, t.color.grey = t.color.blackBright, t.bgColor.bgGrey = t.bgColor.bgBlackBright;
		for (let [n, r] of Object.entries(t)) {
			for (let [n, i] of Object.entries(r)) t[n] = {
				open: `\u001B[${i[0]}m`,
				close: `\u001B[${i[1]}m`
			}, r[n] = t[n], e.set(i[0], i[1]);
			Object.defineProperty(t, n, {
				value: r,
				enumerable: !1
			});
		}
		return Object.defineProperty(t, "codes", {
			value: e,
			enumerable: !1
		}), t.color.close = "\x1B[39m", t.bgColor.close = "\x1B[49m", t.color.ansi256 = r(), t.color.ansi16m = i(), t.bgColor.ansi256 = r(n), t.bgColor.ansi16m = i(n), Object.defineProperties(t, {
			rgbToAnsi256: {
				value: (e, t, n) => e === t && t === n ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(t / 255 * 5) + Math.round(n / 255 * 5),
				enumerable: !1
			},
			hexToRgb: {
				value: (e) => {
					let t = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(e.toString(16));
					if (!t) return [
						0,
						0,
						0
					];
					let { colorString: n } = t.groups;
					n.length === 3 && (n = n.split("").map((e) => e + e).join(""));
					let r = Number.parseInt(n, 16);
					return [
						r >> 16 & 255,
						r >> 8 & 255,
						r & 255
					];
				},
				enumerable: !1
			},
			hexToAnsi256: {
				value: (e) => t.rgbToAnsi256(...t.hexToRgb(e)),
				enumerable: !1
			}
		}), t;
	}
	Object.defineProperty(t, "exports", {
		enumerable: !0,
		get: a
	});
})), te = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.printIteratorEntries = n, e.printIteratorValues = r, e.printListItems = i, e.printObjectProperties = a;
	var t = (e, t) => {
		let n = Object.keys(e).sort(t);
		return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((t) => {
			Object.getOwnPropertyDescriptor(e, t).enumerable && n.push(t);
		}), n;
	};
	function n(e, t, n, r, i, a, o = ": ") {
		let s = "", c = e.next();
		if (!c.done) {
			s += t.spacingOuter;
			let l = n + t.indent;
			for (; !c.done;) {
				let n = a(c.value[0], t, l, r, i), u = a(c.value[1], t, l, r, i);
				s += l + n + o + u, c = e.next(), c.done ? t.min || (s += ",") : s += "," + t.spacingInner;
			}
			s += t.spacingOuter + n;
		}
		return s;
	}
	function r(e, t, n, r, i, a) {
		let o = "", s = e.next();
		if (!s.done) {
			o += t.spacingOuter;
			let c = n + t.indent;
			for (; !s.done;) o += c + a(s.value, t, c, r, i), s = e.next(), s.done ? t.min || (o += ",") : o += "," + t.spacingInner;
			o += t.spacingOuter + n;
		}
		return o;
	}
	function i(e, t, n, r, i, a) {
		let o = "";
		if (e.length) {
			o += t.spacingOuter;
			let s = n + t.indent;
			for (let n = 0; n < e.length; n++) o += s, n in e && (o += a(e[n], t, s, r, i)), n < e.length - 1 ? o += "," + t.spacingInner : t.min || (o += ",");
			o += t.spacingOuter + n;
		}
		return o;
	}
	function a(e, n, r, i, a, o) {
		let s = "", c = t(e, n.compareKeys);
		if (c.length) {
			s += n.spacingOuter;
			let t = r + n.indent;
			for (let r = 0; r < c.length; r++) {
				let l = c[r], u = o(l, n, t, i, a), d = o(e[l], n, t, i, a);
				s += t + u + ": " + d, r < c.length - 1 ? s += "," + n.spacingInner : n.min || (s += ",");
			}
			s += n.spacingOuter + r;
		}
		return s;
	}
})), ne = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.test = e.serialize = e.default = void 0;
	var t = te(), n = (function() {
		return typeof globalThis < "u" ? globalThis : n === void 0 ? typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")() : n;
	})(), r = n["jest-symbol-do-not-touch"] || n.Symbol, i = typeof r == "function" && r.for ? r.for("jest.asymmetricMatcher") : 1267621, a = " ", o = (e, n, r, i, o, s) => {
		let c = e.toString();
		return c === "ArrayContaining" || c === "ArrayNotContaining" ? ++i > n.maxDepth ? "[" + c + "]" : c + a + "[" + (0, t.printListItems)(e.sample, n, r, i, o, s) + "]" : c === "ObjectContaining" || c === "ObjectNotContaining" ? ++i > n.maxDepth ? "[" + c + "]" : c + a + "{" + (0, t.printObjectProperties)(e.sample, n, r, i, o, s) + "}" : c === "StringMatching" || c === "StringNotMatching" || c === "StringContaining" || c === "StringNotContaining" ? c + a + s(e.sample, n, r, i, o) : e.toAsymmetricMatcher();
	};
	e.serialize = o;
	var s = (e) => e && e.$$typeof === i;
	e.test = s, e.default = {
		serialize: o,
		test: s
	};
})), re = /* @__PURE__ */ l(((e, t) => {
	t.exports = ({ onlyFirst: e = !1 } = {}) => {
		let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
		return new RegExp(t, e ? void 0 : "g");
	};
})), ie = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.test = e.serialize = e.default = void 0;
	var t = r(re()), n = r(ee());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	var i = (e) => e.replace((0, t.default)(), (e) => {
		switch (e) {
			case n.default.red.close:
			case n.default.green.close:
			case n.default.cyan.close:
			case n.default.gray.close:
			case n.default.white.close:
			case n.default.yellow.close:
			case n.default.bgRed.close:
			case n.default.bgGreen.close:
			case n.default.bgYellow.close:
			case n.default.inverse.close:
			case n.default.dim.close:
			case n.default.bold.close:
			case n.default.reset.open:
			case n.default.reset.close: return "</>";
			case n.default.red.open: return "<red>";
			case n.default.green.open: return "<green>";
			case n.default.cyan.open: return "<cyan>";
			case n.default.gray.open: return "<gray>";
			case n.default.white.open: return "<white>";
			case n.default.yellow.open: return "<yellow>";
			case n.default.bgRed.open: return "<bgRed>";
			case n.default.bgGreen.open: return "<bgGreen>";
			case n.default.bgYellow.open: return "<bgYellow>";
			case n.default.inverse.open: return "<inverse>";
			case n.default.dim.open: return "<dim>";
			case n.default.bold.open: return "<bold>";
			default: return "";
		}
	}), a = (e) => typeof e == "string" && !!e.match((0, t.default)());
	e.test = a;
	var o = (e, t, n, r, a, o) => o(i(e), t, n, r, a);
	e.serialize = o, e.default = {
		serialize: o,
		test: a
	};
})), S = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.test = e.serialize = e.default = void 0;
	var t = te(), n = " ", r = ["DOMStringMap", "NamedNodeMap"], i = /^(HTML\w*Collection|NodeList)$/, a = (e) => r.indexOf(e) !== -1 || i.test(e), o = (e) => e && e.constructor && !!e.constructor.name && a(e.constructor.name);
	e.test = o;
	var s = (e) => e.constructor.name === "NamedNodeMap", c = (e, i, a, o, c, l) => {
		let u = e.constructor.name;
		return ++o > i.maxDepth ? "[" + u + "]" : (i.min ? "" : u + n) + (r.indexOf(u) === -1 ? "[" + (0, t.printListItems)(Array.from(e), i, a, o, c, l) + "]" : "{" + (0, t.printObjectProperties)(s(e) ? Array.from(e).reduce((e, t) => (e[t.name] = t.value, e), {}) : { ...e }, i, a, o, c, l) + "}");
	};
	e.serialize = c, e.default = {
		serialize: c,
		test: o
	};
})), ae = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t;
	function t(e) {
		return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	}
})), C = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.printText = e.printProps = e.printElementAsLeaf = e.printElement = e.printComment = e.printChildren = void 0;
	var t = n(ae());
	function n(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.printProps = (e, t, n, r, i, a, o) => {
		let s = r + n.indent, c = n.colors;
		return e.map((e) => {
			let l = t[e], u = o(l, n, s, i, a);
			return typeof l != "string" && (u.indexOf("\n") !== -1 && (u = n.spacingOuter + s + u + n.spacingOuter + r), u = "{" + u + "}"), n.spacingInner + r + c.prop.open + e + c.prop.close + "=" + c.value.open + u + c.value.close;
		}).join("");
	}, e.printChildren = (e, t, n, i, a, o) => e.map((e) => t.spacingOuter + n + (typeof e == "string" ? r(e, t) : o(e, t, n, i, a))).join("");
	var r = (e, n) => {
		let r = n.colors.content;
		return r.open + (0, t.default)(e) + r.close;
	};
	e.printText = r, e.printComment = (e, n) => {
		let r = n.colors.comment;
		return r.open + "<!--" + (0, t.default)(e) + "-->" + r.close;
	}, e.printElement = (e, t, n, r, i) => {
		let a = r.colors.tag;
		return a.open + "<" + e + (t && a.close + t + r.spacingOuter + i + a.open) + (n ? ">" + a.close + n + r.spacingOuter + i + a.open + "</" + e : (t && !r.min ? "" : " ") + "/") + ">" + a.close;
	}, e.printElementAsLeaf = (e, t) => {
		let n = t.colors.tag;
		return n.open + "<" + e + n.close + " …" + n.open + " />" + n.close;
	};
})), oe = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.test = e.serialize = e.default = void 0;
	var t = C(), n = 1, r = 3, i = 8, a = 11, o = /^((HTML|SVG)\w*)?Element$/, s = (e) => {
		try {
			return typeof e.hasAttribute == "function" && e.hasAttribute("is");
		} catch {
			return !1;
		}
	}, c = (e) => {
		let t = e.constructor.name, { nodeType: c, tagName: l } = e, u = typeof l == "string" && l.includes("-") || s(e);
		return c === n && (o.test(t) || u) || c === r && t === "Text" || c === i && t === "Comment" || c === a && t === "DocumentFragment";
	}, l = (e) => e?.constructor?.name && c(e);
	e.test = l;
	function u(e) {
		return e.nodeType === r;
	}
	function d(e) {
		return e.nodeType === i;
	}
	function f(e) {
		return e.nodeType === a;
	}
	var p = (e, n, r, i, a, o) => {
		if (u(e)) return (0, t.printText)(e.data, n);
		if (d(e)) return (0, t.printComment)(e.data, n);
		let s = f(e) ? "DocumentFragment" : e.tagName.toLowerCase();
		return ++i > n.maxDepth ? (0, t.printElementAsLeaf)(s, n) : (0, t.printElement)(s, (0, t.printProps)(f(e) ? [] : Array.from(e.attributes).map((e) => e.name).sort(), f(e) ? {} : Array.from(e.attributes).reduce((e, t) => (e[t.name] = t.value, e), {}), n, r + n.indent, i, a, o), (0, t.printChildren)(Array.prototype.slice.call(e.childNodes || e.children), n, r + n.indent, i, a, o), n, r);
	};
	e.serialize = p, e.default = {
		serialize: p,
		test: l
	};
})), se = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.test = e.serialize = e.default = void 0;
	var t = te(), n = "@@__IMMUTABLE_ITERABLE__@@", r = "@@__IMMUTABLE_LIST__@@", i = "@@__IMMUTABLE_KEYED__@@", a = "@@__IMMUTABLE_MAP__@@", o = "@@__IMMUTABLE_ORDERED__@@", s = "@@__IMMUTABLE_RECORD__@@", c = "@@__IMMUTABLE_SEQ__@@", l = "@@__IMMUTABLE_SET__@@", u = "@@__IMMUTABLE_STACK__@@", d = (e) => "Immutable." + e, f = (e) => "[" + e + "]", p = " ", m = "…", h = (e, n, r, i, a, o, s) => ++i > n.maxDepth ? f(d(s)) : d(s) + p + "{" + (0, t.printIteratorEntries)(e.entries(), n, r, i, a, o) + "}";
	function g(e) {
		let t = 0;
		return { next() {
			if (t < e._keys.length) {
				let n = e._keys[t++];
				return {
					done: !1,
					value: [n, e.get(n)]
				};
			}
			return {
				done: !0,
				value: void 0
			};
		} };
	}
	var _ = (e, n, r, i, a, o) => {
		let s = d(e._name || "Record");
		return ++i > n.maxDepth ? f(s) : s + p + "{" + (0, t.printIteratorEntries)(g(e), n, r, i, a, o) + "}";
	}, v = (e, n, r, a, o, s) => {
		let c = d("Seq");
		return ++a > n.maxDepth ? f(c) : e[i] ? c + p + "{" + (e._iter || e._object ? (0, t.printIteratorEntries)(e.entries(), n, r, a, o, s) : m) + "}" : c + p + "[" + (e._iter || e._array || e._collection || e._iterable ? (0, t.printIteratorValues)(e.values(), n, r, a, o, s) : m) + "]";
	}, y = (e, n, r, i, a, o, s) => ++i > n.maxDepth ? f(d(s)) : d(s) + p + "[" + (0, t.printIteratorValues)(e.values(), n, r, i, a, o) + "]", b = (e, t, n, i, s, d) => e[a] ? h(e, t, n, i, s, d, e[o] ? "OrderedMap" : "Map") : e[r] ? y(e, t, n, i, s, d, "List") : e[l] ? y(e, t, n, i, s, d, e[o] ? "OrderedSet" : "Set") : e[u] ? y(e, t, n, i, s, d, "Stack") : e[c] ? v(e, t, n, i, s, d) : _(e, t, n, i, s, d);
	e.serialize = b;
	var x = (e) => e && (e[n] === !0 || e[s] === !0);
	e.test = x, e.default = {
		serialize: b,
		test: x
	};
})), ce = /* @__PURE__ */ l(((e) => {
	var t = 60103, n = 60106, r = 60107, i = 60108, a = 60114, o = 60109, s = 60110, c = 60112, l = 60113, u = 60120, d = 60115, f = 60116, p = 60121, m = 60122, h = 60117, g = 60129, _ = 60131;
	if (typeof Symbol == "function" && Symbol.for) {
		var v = Symbol.for;
		t = v("react.element"), n = v("react.portal"), r = v("react.fragment"), i = v("react.strict_mode"), a = v("react.profiler"), o = v("react.provider"), s = v("react.context"), c = v("react.forward_ref"), l = v("react.suspense"), u = v("react.suspense_list"), d = v("react.memo"), f = v("react.lazy"), p = v("react.block"), m = v("react.server.block"), h = v("react.fundamental"), g = v("react.debug_trace_mode"), _ = v("react.legacy_hidden");
	}
	function y(e) {
		if (typeof e == "object" && e) {
			var p = e.$$typeof;
			switch (p) {
				case t: switch (e = e.type, e) {
					case r:
					case a:
					case i:
					case l:
					case u: return e;
					default: switch (e &&= e.$$typeof, e) {
						case s:
						case c:
						case f:
						case d:
						case o: return e;
						default: return p;
					}
				}
				case n: return p;
			}
		}
	}
	var b = o, x = t, ee = c, te = r, ne = f, re = d, ie = n, S = a, ae = i, C = l;
	e.ContextConsumer = s, e.ContextProvider = b, e.Element = x, e.ForwardRef = ee, e.Fragment = te, e.Lazy = ne, e.Memo = re, e.Portal = ie, e.Profiler = S, e.StrictMode = ae, e.Suspense = C, e.isAsyncMode = function() {
		return !1;
	}, e.isConcurrentMode = function() {
		return !1;
	}, e.isContextConsumer = function(e) {
		return y(e) === s;
	}, e.isContextProvider = function(e) {
		return y(e) === o;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}, e.isForwardRef = function(e) {
		return y(e) === c;
	}, e.isFragment = function(e) {
		return y(e) === r;
	}, e.isLazy = function(e) {
		return y(e) === f;
	}, e.isMemo = function(e) {
		return y(e) === d;
	}, e.isPortal = function(e) {
		return y(e) === n;
	}, e.isProfiler = function(e) {
		return y(e) === a;
	}, e.isStrictMode = function(e) {
		return y(e) === i;
	}, e.isSuspense = function(e) {
		return y(e) === l;
	}, e.isValidElementType = function(e) {
		return !!(typeof e == "string" || typeof e == "function" || e === r || e === a || e === g || e === i || e === l || e === u || e === _ || typeof e == "object" && e && (e.$$typeof === f || e.$$typeof === d || e.$$typeof === o || e.$$typeof === s || e.$$typeof === c || e.$$typeof === h || e.$$typeof === p || e[0] === m));
	}, e.typeOf = y;
})), le = /* @__PURE__ */ l(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = 60103, n = 60106, r = 60107, i = 60108, a = 60114, o = 60109, s = 60110, c = 60112, l = 60113, u = 60120, d = 60115, f = 60116, p = 60121, m = 60122, h = 60117, g = 60129, _ = 60131;
		if (typeof Symbol == "function" && Symbol.for) {
			var v = Symbol.for;
			t = v("react.element"), n = v("react.portal"), r = v("react.fragment"), i = v("react.strict_mode"), a = v("react.profiler"), o = v("react.provider"), s = v("react.context"), c = v("react.forward_ref"), l = v("react.suspense"), u = v("react.suspense_list"), d = v("react.memo"), f = v("react.lazy"), p = v("react.block"), m = v("react.server.block"), h = v("react.fundamental"), v("react.scope"), v("react.opaque.id"), g = v("react.debug_trace_mode"), v("react.offscreen"), _ = v("react.legacy_hidden");
		}
		var y = !1;
		function b(e) {
			return !!(typeof e == "string" || typeof e == "function" || e === r || e === a || e === g || e === i || e === l || e === u || e === _ || y || typeof e == "object" && e && (e.$$typeof === f || e.$$typeof === d || e.$$typeof === o || e.$$typeof === s || e.$$typeof === c || e.$$typeof === h || e.$$typeof === p || e[0] === m));
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var p = e.$$typeof;
				switch (p) {
					case t:
						var m = e.type;
						switch (m) {
							case r:
							case a:
							case i:
							case l:
							case u: return m;
							default:
								var h = m && m.$$typeof;
								switch (h) {
									case s:
									case c:
									case f:
									case d:
									case o: return h;
									default: return p;
								}
						}
					case n: return p;
				}
			}
		}
		var ee = s, te = o, ne = t, re = c, ie = r, S = f, ae = d, C = n, oe = a, se = i, ce = l, le = !1, ue = !1;
		function w(e) {
			return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
		}
		function T(e) {
			return ue || (ue = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
		}
		function de(e) {
			return x(e) === s;
		}
		function fe(e) {
			return x(e) === o;
		}
		function pe(e) {
			return typeof e == "object" && !!e && e.$$typeof === t;
		}
		function E(e) {
			return x(e) === c;
		}
		function me(e) {
			return x(e) === r;
		}
		function he(e) {
			return x(e) === f;
		}
		function ge(e) {
			return x(e) === d;
		}
		function _e(e) {
			return x(e) === n;
		}
		function ve(e) {
			return x(e) === a;
		}
		function ye(e) {
			return x(e) === i;
		}
		function be(e) {
			return x(e) === l;
		}
		e.ContextConsumer = ee, e.ContextProvider = te, e.Element = ne, e.ForwardRef = re, e.Fragment = ie, e.Lazy = S, e.Memo = ae, e.Portal = C, e.Profiler = oe, e.StrictMode = se, e.Suspense = ce, e.isAsyncMode = w, e.isConcurrentMode = T, e.isContextConsumer = de, e.isContextProvider = fe, e.isElement = pe, e.isForwardRef = E, e.isFragment = me, e.isLazy = he, e.isMemo = ge, e.isPortal = _e, e.isProfiler = ve, e.isStrictMode = ye, e.isSuspense = be, e.isValidElementType = b, e.typeOf = x;
	})();
})), ue = /* @__PURE__ */ l(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = ce() : t.exports = le();
})), w = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.test = e.serialize = e.default = void 0;
	var t = i(ue()), n = C();
	function r(e) {
		if (typeof WeakMap != "function") return null;
		var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (r = function(e) {
			return e ? n : t;
		})(e);
	}
	function i(e, t) {
		if (!t && e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var n = r(t);
		if (n && n.has(e)) return n.get(e);
		var i = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var o in e) if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
			var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
			s && (s.get || s.set) ? Object.defineProperty(i, o, s) : i[o] = e[o];
		}
		return i.default = e, n && n.set(e, i), i;
	}
	var a = (e, t = []) => (Array.isArray(e) ? e.forEach((e) => {
		a(e, t);
	}) : e != null && e !== !1 && t.push(e), t), o = (e) => {
		let n = e.type;
		if (typeof n == "string") return n;
		if (typeof n == "function") return n.displayName || n.name || "Unknown";
		if (t.isFragment(e)) return "React.Fragment";
		if (t.isSuspense(e)) return "React.Suspense";
		if (typeof n == "object" && n) {
			if (t.isContextProvider(e)) return "Context.Provider";
			if (t.isContextConsumer(e)) return "Context.Consumer";
			if (t.isForwardRef(e)) {
				if (n.displayName) return n.displayName;
				let e = n.render.displayName || n.render.name || "";
				return e === "" ? "ForwardRef" : "ForwardRef(" + e + ")";
			}
			if (t.isMemo(e)) {
				let e = n.displayName || n.type.displayName || n.type.name || "";
				return e === "" ? "Memo" : "Memo(" + e + ")";
			}
		}
		return "UNDEFINED";
	}, s = (e) => {
		let { props: t } = e;
		return Object.keys(t).filter((e) => e !== "children" && t[e] !== void 0).sort();
	}, c = (e, t, r, i, c, l) => ++i > t.maxDepth ? (0, n.printElementAsLeaf)(o(e), t) : (0, n.printElement)(o(e), (0, n.printProps)(s(e), e.props, t, r + t.indent, i, c, l), (0, n.printChildren)(a(e.props.children), t, r + t.indent, i, c, l), t, r);
	e.serialize = c;
	var l = (e) => e != null && t.isElement(e);
	e.test = l, e.default = {
		serialize: c,
		test: l
	};
})), T = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.test = e.serialize = e.default = void 0;
	var t = C(), n = (function() {
		return typeof globalThis < "u" ? globalThis : n === void 0 ? typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")() : n;
	})(), r = n["jest-symbol-do-not-touch"] || n.Symbol, i = typeof r == "function" && r.for ? r.for("react.test.json") : 245830487, a = (e) => {
		let { props: t } = e;
		return t ? Object.keys(t).filter((e) => t[e] !== void 0).sort() : [];
	}, o = (e, n, r, i, o, s) => ++i > n.maxDepth ? (0, t.printElementAsLeaf)(e.type, n) : (0, t.printElement)(e.type, e.props ? (0, t.printProps)(a(e), e.props, n, r + n.indent, i, o, s) : "", e.children ? (0, t.printChildren)(e.children, n, r + n.indent, i, o, s) : "", n, r);
	e.serialize = o;
	var s = (e) => e && e.$$typeof === i;
	e.test = s, e.default = {
		serialize: o,
		test: s
	};
})), de = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.DEFAULT_OPTIONS = void 0, e.format = we, e.plugins = void 0;
	var t = u(ee()), n = te(), r = u(ne()), i = u(ie()), a = u(S()), o = u(oe()), s = u(se()), c = u(w()), l = u(T());
	function u(e) {
		return e && e.__esModule ? e : { default: e };
	}
	var d = Object.prototype.toString, f = Date.prototype.toISOString, p = Error.prototype.toString, m = RegExp.prototype.toString, h = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", g = (e) => typeof window < "u" && e === window, _ = /^Symbol\((.*)\)(.*)$/, v = /\n/gi, y = class extends Error {
		constructor(e, t) {
			super(e), this.stack = t, this.name = this.constructor.name;
		}
	};
	function b(e) {
		return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
	}
	function x(e) {
		return Object.is(e, -0) ? "-0" : String(e);
	}
	function re(e) {
		return String(`${e}n`);
	}
	function ae(e, t) {
		return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]";
	}
	function C(e) {
		return String(e).replace(_, "Symbol($1)");
	}
	function ce(e) {
		return "[" + p.call(e) + "]";
	}
	function le(e, t, n, r) {
		if (e === !0 || e === !1) return "" + e;
		if (e === void 0) return "undefined";
		if (e === null) return "null";
		let i = typeof e;
		if (i === "number") return x(e);
		if (i === "bigint") return re(e);
		if (i === "string") return r ? "\"" + e.replace(/"|\\/g, "\\$&") + "\"" : "\"" + e + "\"";
		if (i === "function") return ae(e, t);
		if (i === "symbol") return C(e);
		let a = d.call(e);
		return a === "[object WeakMap]" ? "WeakMap {}" : a === "[object WeakSet]" ? "WeakSet {}" : a === "[object Function]" || a === "[object GeneratorFunction]" ? ae(e, t) : a === "[object Symbol]" ? C(e) : a === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : f.call(e) : a === "[object Error]" ? ce(e) : a === "[object RegExp]" ? n ? m.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : m.call(e) : e instanceof Error ? ce(e) : null;
	}
	function ue(e, t, r, i, a, o) {
		if (a.indexOf(e) !== -1) return "[Circular]";
		a = a.slice(), a.push(e);
		let s = ++i > t.maxDepth, c = t.min;
		if (t.callToJSON && !s && e.toJSON && typeof e.toJSON == "function" && !o) return E(e.toJSON(), t, r, i, a, !0);
		let l = d.call(e);
		return l === "[object Arguments]" ? s ? "[Arguments]" : (c ? "" : "Arguments ") + "[" + (0, n.printListItems)(e, t, r, i, a, E) + "]" : b(l) ? s ? "[" + e.constructor.name + "]" : (c || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : e.constructor.name + " ") + "[" + (0, n.printListItems)(e, t, r, i, a, E) + "]" : l === "[object Map]" ? s ? "[Map]" : "Map {" + (0, n.printIteratorEntries)(e.entries(), t, r, i, a, E, " => ") + "}" : l === "[object Set]" ? s ? "[Set]" : "Set {" + (0, n.printIteratorValues)(e.values(), t, r, i, a, E) + "}" : s || g(e) ? "[" + h(e) + "]" : (c || !t.printBasicPrototype && h(e) === "Object" ? "" : h(e) + " ") + "{" + (0, n.printObjectProperties)(e, t, r, i, a, E) + "}";
	}
	function de(e) {
		return e.serialize != null;
	}
	function fe(e, t, n, r, i, a) {
		let o;
		try {
			o = de(e) ? e.serialize(t, n, r, i, a, E) : e.print(t, (e) => E(e, n, r, i, a), (e) => {
				let t = r + n.indent;
				return t + e.replace(v, "\n" + t);
			}, {
				edgeSpacing: n.spacingOuter,
				min: n.min,
				spacing: n.spacingInner
			}, n.colors);
		} catch (e) {
			throw new y(e.message, e.stack);
		}
		if (typeof o != "string") throw Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof o}".`);
		return o;
	}
	function pe(e, t) {
		for (let n = 0; n < e.length; n++) try {
			if (e[n].test(t)) return e[n];
		} catch (e) {
			throw new y(e.message, e.stack);
		}
		return null;
	}
	function E(e, t, n, r, i, a) {
		let o = pe(t.plugins, e);
		if (o !== null) return fe(o, e, t, n, r, i);
		let s = le(e, t.printFunctionName, t.escapeRegex, t.escapeString);
		return s === null ? ue(e, t, n, r, i, a) : s;
	}
	var me = {
		comment: "gray",
		content: "reset",
		prop: "yellow",
		tag: "cyan",
		value: "green"
	}, he = Object.keys(me), ge = {
		callToJSON: !0,
		compareKeys: void 0,
		escapeRegex: !1,
		escapeString: !0,
		highlight: !1,
		indent: 2,
		maxDepth: Infinity,
		min: !1,
		plugins: [],
		printBasicPrototype: !0,
		printFunctionName: !0,
		theme: me
	};
	e.DEFAULT_OPTIONS = ge;
	function _e(e) {
		if (Object.keys(e).forEach((e) => {
			if (!ge.hasOwnProperty(e)) throw Error(`pretty-format: Unknown option "${e}".`);
		}), e.min && e.indent !== void 0 && e.indent !== 0) throw Error("pretty-format: Options \"min\" and \"indent\" cannot be used together.");
		if (e.theme !== void 0) {
			if (e.theme === null) throw Error("pretty-format: Option \"theme\" must not be null.");
			if (typeof e.theme != "object") throw Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`);
		}
	}
	var ve = (e) => he.reduce((n, r) => {
		let i = e.theme && e.theme[r] !== void 0 ? e.theme[r] : me[r], a = i && t.default[i];
		if (a && typeof a.close == "string" && typeof a.open == "string") n[r] = a;
		else throw Error(`pretty-format: Option "theme" has a key "${r}" whose value "${i}" is undefined in ansi-styles.`);
		return n;
	}, Object.create(null)), ye = () => he.reduce((e, t) => (e[t] = {
		close: "",
		open: ""
	}, e), Object.create(null)), be = (e) => e && e.printFunctionName !== void 0 ? e.printFunctionName : ge.printFunctionName, xe = (e) => e && e.escapeRegex !== void 0 ? e.escapeRegex : ge.escapeRegex, Se = (e) => e && e.escapeString !== void 0 ? e.escapeString : ge.escapeString, D = (e) => ({
		callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : ge.callToJSON,
		colors: e && e.highlight ? ve(e) : ye(),
		compareKeys: e && typeof e.compareKeys == "function" ? e.compareKeys : ge.compareKeys,
		escapeRegex: xe(e),
		escapeString: Se(e),
		indent: e && e.min ? "" : Ce(e && e.indent !== void 0 ? e.indent : ge.indent),
		maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : ge.maxDepth,
		min: e && e.min !== void 0 ? e.min : ge.min,
		plugins: e && e.plugins !== void 0 ? e.plugins : ge.plugins,
		printBasicPrototype: e?.printBasicPrototype ?? !0,
		printFunctionName: be(e),
		spacingInner: e && e.min ? " " : "\n",
		spacingOuter: e && e.min ? "" : "\n"
	});
	function Ce(e) {
		return Array(e + 1).join(" ");
	}
	function we(e, t) {
		if (t && (_e(t), t.plugins)) {
			let n = pe(t.plugins, e);
			if (n !== null) return fe(n, e, D(t), "", 0, []);
		}
		let n = le(e, be(t), xe(t), Se(t));
		return n === null ? ue(e, D(t), "", 0, []) : n;
	}
	e.plugins = {
		AsymmetricMatcher: r.default,
		ConvertAnsi: i.default,
		DOMCollection: a.default,
		DOMElement: o.default,
		Immutable: s.default,
		ReactElement: c.default,
		ReactTestComponent: l.default
	}, e.default = we;
})), fe = /* @__PURE__ */ d(h()), pe = /* @__PURE__ */ d(x()), E = /* @__PURE__ */ d(de()), me = Object.prototype.toString;
function he(e) {
	return typeof e == "function" || me.call(e) === "[object Function]";
}
function ge(e) {
	var t = Number(e);
	return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var _e = 2 ** 53 - 1;
function ve(e) {
	var t = ge(e);
	return Math.min(Math.max(t, 0), _e);
}
function ye(e, t) {
	var n = Array, r = Object(e);
	if (e == null) throw TypeError("Array.from requires an array-like object - not null or undefined");
	if (t !== void 0 && !he(t)) throw TypeError("Array.from: when provided, the second argument must be a function");
	for (var i = ve(r.length), a = he(n) ? Object(new n(i)) : Array(i), o = 0, s; o < i;) s = r[o], t ? a[o] = t(s, o) : a[o] = s, o += 1;
	return a.length = i, a;
}
//#endregion
//#region node_modules/dom-accessibility-api/dist/polyfills/SetLike.mjs
function be(e) {
	"@babel/helpers - typeof";
	return be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, be(e);
}
function xe(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Se(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, we(r.key), r);
	}
}
function D(e, t, n) {
	return t && Se(e.prototype, t), n && Se(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ce(e, t, n) {
	return t = we(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function we(e) {
	var t = Te(e, "string");
	return be(t) === "symbol" ? t : String(t);
}
function Te(e, t) {
	if (be(e) !== "object" || e === null) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (be(r) !== "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Ee = typeof Set > "u" ? Set : /* @__PURE__ */ function() {
	function e() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
		xe(this, e), Ce(this, "items", void 0), this.items = t;
	}
	return D(e, [
		{
			key: "add",
			value: function(e) {
				return this.has(e) === !1 && this.items.push(e), this;
			}
		},
		{
			key: "clear",
			value: function() {
				this.items = [];
			}
		},
		{
			key: "delete",
			value: function(e) {
				var t = this.items.length;
				return this.items = this.items.filter(function(t) {
					return t !== e;
				}), t !== this.items.length;
			}
		},
		{
			key: "forEach",
			value: function(e) {
				var t = this;
				this.items.forEach(function(n) {
					e(n, n, t);
				});
			}
		},
		{
			key: "has",
			value: function(e) {
				return this.items.indexOf(e) !== -1;
			}
		},
		{
			key: "size",
			get: function() {
				return this.items.length;
			}
		}
	]), e;
}();
//#endregion
//#region node_modules/dom-accessibility-api/dist/getRole.mjs
function O(e) {
	return e.localName ?? e.tagName.toLowerCase();
}
var De = {
	article: "article",
	aside: "complementary",
	button: "button",
	datalist: "listbox",
	dd: "definition",
	details: "group",
	dialog: "dialog",
	dt: "term",
	fieldset: "group",
	figure: "figure",
	form: "form",
	footer: "contentinfo",
	h1: "heading",
	h2: "heading",
	h3: "heading",
	h4: "heading",
	h5: "heading",
	h6: "heading",
	header: "banner",
	hr: "separator",
	html: "document",
	legend: "legend",
	li: "listitem",
	math: "math",
	main: "main",
	menu: "list",
	nav: "navigation",
	ol: "list",
	optgroup: "group",
	option: "option",
	output: "status",
	progress: "progressbar",
	section: "region",
	summary: "button",
	table: "table",
	tbody: "rowgroup",
	textarea: "textbox",
	tfoot: "rowgroup",
	td: "cell",
	th: "columnheader",
	thead: "rowgroup",
	tr: "row",
	ul: "list"
}, Oe = {
	caption: new Set(["aria-label", "aria-labelledby"]),
	code: new Set(["aria-label", "aria-labelledby"]),
	deletion: new Set(["aria-label", "aria-labelledby"]),
	emphasis: new Set(["aria-label", "aria-labelledby"]),
	generic: new Set([
		"aria-label",
		"aria-labelledby",
		"aria-roledescription"
	]),
	insertion: new Set(["aria-label", "aria-labelledby"]),
	paragraph: new Set(["aria-label", "aria-labelledby"]),
	presentation: new Set(["aria-label", "aria-labelledby"]),
	strong: new Set(["aria-label", "aria-labelledby"]),
	subscript: new Set(["aria-label", "aria-labelledby"]),
	superscript: new Set(["aria-label", "aria-labelledby"])
};
function ke(e, t) {
	return [
		"aria-atomic",
		"aria-busy",
		"aria-controls",
		"aria-current",
		"aria-describedby",
		"aria-details",
		"aria-dropeffect",
		"aria-flowto",
		"aria-grabbed",
		"aria-hidden",
		"aria-keyshortcuts",
		"aria-label",
		"aria-labelledby",
		"aria-live",
		"aria-owns",
		"aria-relevant",
		"aria-roledescription"
	].some(function(n) {
		var r;
		return e.hasAttribute(n) && !((r = Oe[t]) != null && r.has(n));
	});
}
function Ae(e, t) {
	return ke(e, t);
}
function je(e) {
	var t = Ne(e);
	if (t === null || t === "presentation") {
		var n = Me(e);
		if (t !== "presentation" || Ae(e, n || "")) return n;
	}
	return t;
}
function Me(e) {
	var t = De[O(e)];
	if (t !== void 0) return t;
	switch (O(e)) {
		case "a":
		case "area":
		case "link":
			if (e.hasAttribute("href")) return "link";
			break;
		case "img": return e.getAttribute("alt") === "" && !Ae(e, "img") ? "presentation" : "img";
		case "input":
			var n = e.type;
			switch (n) {
				case "button":
				case "image":
				case "reset":
				case "submit": return "button";
				case "checkbox":
				case "radio": return n;
				case "range": return "slider";
				case "email":
				case "tel":
				case "text":
				case "url": return e.hasAttribute("list") ? "combobox" : "textbox";
				case "search": return e.hasAttribute("list") ? "combobox" : "searchbox";
				case "number": return "spinbutton";
				default: return null;
			}
		case "select": return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
	}
	return null;
}
function Ne(e) {
	var t = e.getAttribute("role");
	if (t !== null) {
		var n = t.trim().split(" ")[0];
		if (n.length > 0) return n;
	}
	return null;
}
//#endregion
//#region node_modules/dom-accessibility-api/dist/util.mjs
function k(e) {
	return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function Pe(e) {
	return k(e) && O(e) === "caption";
}
function Fe(e) {
	return k(e) && O(e) === "input";
}
function Ie(e) {
	return k(e) && O(e) === "optgroup";
}
function Le(e) {
	return k(e) && O(e) === "select";
}
function Re(e) {
	return k(e) && O(e) === "table";
}
function ze(e) {
	return k(e) && O(e) === "textarea";
}
function Be(e) {
	var t = (e.ownerDocument === null ? e : e.ownerDocument).defaultView;
	if (t === null) throw TypeError("no window available");
	return t;
}
function Ve(e) {
	return k(e) && O(e) === "fieldset";
}
function He(e) {
	return k(e) && O(e) === "legend";
}
function Ue(e) {
	return k(e) && O(e) === "slot";
}
function We(e) {
	return k(e) && e.ownerSVGElement !== void 0;
}
function Ge(e) {
	return k(e) && O(e) === "svg";
}
function Ke(e) {
	return We(e) && O(e) === "title";
}
function qe(e, t) {
	if (k(e) && e.hasAttribute(t)) {
		var n = e.getAttribute(t).split(" "), r = e.getRootNode ? e.getRootNode() : e.ownerDocument;
		return n.map(function(e) {
			return r.getElementById(e);
		}).filter(function(e) {
			return e !== null;
		});
	}
	return [];
}
function Je(e, t) {
	return k(e) ? t.indexOf(je(e)) !== -1 : !1;
}
//#endregion
//#region node_modules/dom-accessibility-api/dist/accessible-name-and-description.mjs
function Ye(e) {
	return e.trim().replace(/\s\s+/g, " ");
}
function Xe(e, t) {
	if (!k(e)) return !1;
	if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true") return !0;
	var n = t(e);
	return n.getPropertyValue("display") === "none" || n.getPropertyValue("visibility") === "hidden";
}
function Ze(e) {
	return Je(e, [
		"button",
		"combobox",
		"listbox",
		"textbox"
	]) || Qe(e, "range");
}
function Qe(e, t) {
	if (!k(e)) return !1;
	switch (t) {
		case "range": return Je(e, [
			"meter",
			"progressbar",
			"scrollbar",
			"slider",
			"spinbutton"
		]);
		default: throw TypeError(`No knowledge about abstract role '${t}'. This is likely a bug :(`);
	}
}
function $e(e, t) {
	var n = ye(e.querySelectorAll(t));
	return qe(e, "aria-owns").forEach(function(e) {
		n.push.apply(n, ye(e.querySelectorAll(t)));
	}), n;
}
function A(e) {
	return Le(e) ? e.selectedOptions || $e(e, "[selected]") : $e(e, "[aria-selected=\"true\"]");
}
function et(e) {
	return Je(e, ["none", "presentation"]);
}
function tt(e) {
	return Pe(e);
}
function nt(e) {
	return Je(e, [
		"button",
		"cell",
		"checkbox",
		"columnheader",
		"gridcell",
		"heading",
		"label",
		"legend",
		"link",
		"menuitem",
		"menuitemcheckbox",
		"menuitemradio",
		"option",
		"radio",
		"row",
		"rowheader",
		"switch",
		"tab",
		"tooltip",
		"treeitem"
	]);
}
function rt(e) {
	return !1;
}
function at(e) {
	return Fe(e) || ze(e) ? e.value : e.textContent || "";
}
function ot(e) {
	var t = e.getPropertyValue("content");
	return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function st(e) {
	var t = O(e);
	return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function ct(e) {
	if (st(e)) return e;
	var t = null;
	return e.childNodes.forEach(function(e) {
		if (t === null && k(e)) {
			var n = ct(e);
			n !== null && (t = n);
		}
	}), t;
}
function lt(e) {
	if (e.control !== void 0) return e.control;
	var t = e.getAttribute("for");
	return t === null ? ct(e) : e.ownerDocument.getElementById(t);
}
function ut(e) {
	var t = e.labels;
	if (t === null) return t;
	if (t !== void 0) return ye(t);
	if (!st(e)) return null;
	var n = e.ownerDocument;
	return ye(n.querySelectorAll("label")).filter(function(t) {
		return lt(t) === e;
	});
}
function dt(e) {
	var t = e.assignedNodes();
	return t.length === 0 ? ye(e.childNodes) : t;
}
function ft(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = new Ee(), r = Be(e), i = t.compute, a = i === void 0 ? "name" : i, o = t.computedStyleSupportsPseudoElements, s = o === void 0 ? t.getComputedStyle !== void 0 : o, c = t.getComputedStyle, l = c === void 0 ? r.getComputedStyle.bind(r) : c, u = t.hidden, d = u === void 0 ? !1 : u;
	function f(e, t) {
		var n = "";
		if (k(e) && s && (n = `${ot(l(e, "::before"))} ${n}`), (Ue(e) ? dt(e) : ye(e.childNodes).concat(qe(e, "aria-owns"))).forEach(function(e) {
			var r = g(e, {
				isEmbeddedInLabel: t.isEmbeddedInLabel,
				isReferenced: !1,
				recursion: !0
			}), i = (k(e) ? l(e).getPropertyValue("display") : "inline") === "inline" ? "" : " ";
			n += `${i}${r}${i}`;
		}), k(e) && s) {
			var r = ot(l(e, "::after"));
			n = `${n} ${r}`;
		}
		return n.trim();
	}
	function p(e, t) {
		var r = e.getAttributeNode(t);
		return r !== null && !n.has(r) && r.value.trim() !== "" ? (n.add(r), r.value) : null;
	}
	function m(e) {
		return k(e) ? p(e, "title") : null;
	}
	function h(e) {
		if (!k(e)) return null;
		if (Ve(e)) {
			n.add(e);
			for (var t = ye(e.childNodes), r = 0; r < t.length; r += 1) {
				var i = t[r];
				if (He(i)) return g(i, {
					isEmbeddedInLabel: !1,
					isReferenced: !1,
					recursion: !1
				});
			}
		} else if (Re(e)) {
			n.add(e);
			for (var a = ye(e.childNodes), o = 0; o < a.length; o += 1) {
				var s = a[o];
				if (Pe(s)) return g(s, {
					isEmbeddedInLabel: !1,
					isReferenced: !1,
					recursion: !1
				});
			}
		} else if (Ge(e)) {
			n.add(e);
			for (var c = ye(e.childNodes), l = 0; l < c.length; l += 1) {
				var u = c[l];
				if (Ke(u)) return u.textContent;
			}
			return null;
		} else if (O(e) === "img" || O(e) === "area") {
			var d = p(e, "alt");
			if (d !== null) return d;
		} else if (Ie(e)) {
			var m = p(e, "label");
			if (m !== null) return m;
		}
		if (Fe(e) && (e.type === "button" || e.type === "submit" || e.type === "reset")) {
			var h = p(e, "value");
			if (h !== null) return h;
			if (e.type === "submit") return "Submit";
			if (e.type === "reset") return "Reset";
		}
		var _ = ut(e);
		if (_ !== null && _.length !== 0) return n.add(e), ye(_).map(function(e) {
			return g(e, {
				isEmbeddedInLabel: !0,
				isReferenced: !1,
				recursion: !0
			});
		}).filter(function(e) {
			return e.length > 0;
		}).join(" ");
		if (Fe(e) && e.type === "image") {
			var v = p(e, "alt");
			if (v !== null) return v;
			var y = p(e, "title");
			return y === null ? "Submit Query" : y;
		}
		if (Je(e, ["button"])) {
			var b = f(e, {
				isEmbeddedInLabel: !1,
				isReferenced: !1
			});
			if (b !== "") return b;
		}
		return null;
	}
	function g(e, t) {
		if (n.has(e)) return "";
		if (!d && Xe(e, l) && !t.isReferenced) return n.add(e), "";
		var r = k(e) ? e.getAttributeNode("aria-labelledby") : null, i = r !== null && !n.has(r) ? qe(e, "aria-labelledby") : [];
		if (a === "name" && !t.isReferenced && i.length > 0) return n.add(r), i.map(function(e) {
			return g(e, {
				isEmbeddedInLabel: t.isEmbeddedInLabel,
				isReferenced: !0,
				recursion: !1
			});
		}).join(" ");
		var o = t.recursion && Ze(e) && a === "name";
		if (!o) {
			var s = (k(e) && e.getAttribute("aria-label") || "").trim();
			if (s !== "" && a === "name") return n.add(e), s;
			if (!et(e)) {
				var c = h(e);
				if (c !== null) return n.add(e), c;
			}
		}
		if (Je(e, ["menu"])) return n.add(e), "";
		if (o || t.isEmbeddedInLabel || t.isReferenced) {
			if (Je(e, ["combobox", "listbox"])) {
				n.add(e);
				var u = A(e);
				return u.length === 0 ? Fe(e) ? e.value : "" : ye(u).map(function(e) {
					return g(e, {
						isEmbeddedInLabel: t.isEmbeddedInLabel,
						isReferenced: !1,
						recursion: !0
					});
				}).join(" ");
			}
			if (Qe(e, "range")) return n.add(e), e.hasAttribute("aria-valuetext") ? e.getAttribute("aria-valuetext") : e.hasAttribute("aria-valuenow") ? e.getAttribute("aria-valuenow") : e.getAttribute("value") || "";
			if (Je(e, ["textbox"])) return n.add(e), at(e);
		}
		if (nt(e) || k(e) && t.isReferenced || tt(e) || rt(e)) {
			var p = f(e, {
				isEmbeddedInLabel: t.isEmbeddedInLabel,
				isReferenced: !1
			});
			if (p !== "") return n.add(e), p;
		}
		if (e.nodeType === e.TEXT_NODE) return n.add(e), e.textContent || "";
		if (t.recursion) return n.add(e), f(e, {
			isEmbeddedInLabel: t.isEmbeddedInLabel,
			isReferenced: !1
		});
		var _ = m(e);
		return _ === null ? (n.add(e), "") : (n.add(e), _);
	}
	return Ye(g(e, {
		isEmbeddedInLabel: !1,
		isReferenced: a === "description",
		recursion: !1
	}));
}
//#endregion
//#region node_modules/dom-accessibility-api/dist/accessible-description.mjs
function pt(e) {
	"@babel/helpers - typeof";
	return pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, pt(e);
}
function mt(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ht(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? mt(Object(n), !0).forEach(function(t) {
			gt(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function gt(e, t, n) {
	return t = _t(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function _t(e) {
	var t = vt(e, "string");
	return pt(t) === "symbol" ? t : String(t);
}
function vt(e, t) {
	if (pt(e) !== "object" || e === null) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (pt(r) !== "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function yt(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = qe(e, "aria-describedby").map(function(e) {
		return ft(e, ht(ht({}, t), {}, { compute: "description" }));
	}).join(" ");
	if (n === "") {
		var r = e.getAttribute("title");
		n = r === null ? "" : r;
	}
	return n;
}
//#endregion
//#region node_modules/dom-accessibility-api/dist/accessible-name.mjs
function bt(e) {
	return Je(e, [
		"caption",
		"code",
		"deletion",
		"emphasis",
		"generic",
		"insertion",
		"paragraph",
		"presentation",
		"strong",
		"subscript",
		"superscript"
	]);
}
function xt(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return bt(e) ? "" : ft(e, t);
}
//#endregion
//#region node_modules/aria-query/lib/util/iteratorProxy.js
var St = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	function t() {
		var e = this, t = 0, n = {
			"@@iterator": function() {
				return n;
			},
			next: function() {
				if (t < e.length) {
					var n = e[t];
					return t += 1, {
						done: !1,
						value: n
					};
				} else return { done: !0 };
			}
		};
		return n;
	}
	e.default = t;
})), Ct = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var t = n(St());
	function n(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function r(e) {
		"@babel/helpers - typeof";
		return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
			return typeof e;
		} : function(e) {
			return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
		}, r(e);
	}
	function i(e, n) {
		return typeof Symbol == "function" && r(Symbol.iterator) === "symbol" && Object.defineProperty(e, Symbol.iterator, { value: t.default.bind(n) }), e;
	}
})), wt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = n(Ct());
	function n(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function r(e, t) {
		return o(e) || a(e, t) || c(e, t) || i();
	}
	function i() {
		throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function a(e, t) {
		var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var r = [], i = !0, a = !1, o, s;
			try {
				for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
			} catch (e) {
				a = !0, s = e;
			} finally {
				try {
					!i && n.return != null && n.return();
				} finally {
					if (a) throw s;
				}
			}
			return r;
		}
	}
	function o(e) {
		if (Array.isArray(e)) return e;
	}
	function s(e, t) {
		var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
		if (!n) {
			if (Array.isArray(e) || (n = c(e)) || t && e && typeof e.length == "number") {
				n && (e = n);
				var r = 0, i = function() {};
				return {
					s: i,
					n: function() {
						return r >= e.length ? { done: !0 } : {
							done: !1,
							value: e[r++]
						};
					},
					e: function(e) {
						throw e;
					},
					f: i
				};
			}
			throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		}
		var a = !0, o = !1, s;
		return {
			s: function() {
				n = n.call(e);
			},
			n: function() {
				var e = n.next();
				return a = e.done, e;
			},
			e: function(e) {
				o = !0, s = e;
			},
			f: function() {
				try {
					!a && n.return != null && n.return();
				} finally {
					if (o) throw s;
				}
			}
		};
	}
	function c(e, t) {
		if (e) {
			if (typeof e == "string") return l(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
		}
	}
	function l(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	var u = [
		["aria-activedescendant", { type: "id" }],
		["aria-atomic", { type: "boolean" }],
		["aria-autocomplete", {
			type: "token",
			values: [
				"inline",
				"list",
				"both",
				"none"
			]
		}],
		["aria-braillelabel", { type: "string" }],
		["aria-brailleroledescription", { type: "string" }],
		["aria-busy", { type: "boolean" }],
		["aria-checked", { type: "tristate" }],
		["aria-colcount", { type: "integer" }],
		["aria-colindex", { type: "integer" }],
		["aria-colspan", { type: "integer" }],
		["aria-controls", { type: "idlist" }],
		["aria-current", {
			type: "token",
			values: [
				"page",
				"step",
				"location",
				"date",
				"time",
				!0,
				!1
			]
		}],
		["aria-describedby", { type: "idlist" }],
		["aria-description", { type: "string" }],
		["aria-details", { type: "id" }],
		["aria-disabled", { type: "boolean" }],
		["aria-dropeffect", {
			type: "tokenlist",
			values: [
				"copy",
				"execute",
				"link",
				"move",
				"none",
				"popup"
			]
		}],
		["aria-errormessage", { type: "id" }],
		["aria-expanded", {
			type: "boolean",
			allowundefined: !0
		}],
		["aria-flowto", { type: "idlist" }],
		["aria-grabbed", {
			type: "boolean",
			allowundefined: !0
		}],
		["aria-haspopup", {
			type: "token",
			values: [
				!1,
				!0,
				"menu",
				"listbox",
				"tree",
				"grid",
				"dialog"
			]
		}],
		["aria-hidden", {
			type: "boolean",
			allowundefined: !0
		}],
		["aria-invalid", {
			type: "token",
			values: [
				"grammar",
				!1,
				"spelling",
				!0
			]
		}],
		["aria-keyshortcuts", { type: "string" }],
		["aria-label", { type: "string" }],
		["aria-labelledby", { type: "idlist" }],
		["aria-level", { type: "integer" }],
		["aria-live", {
			type: "token",
			values: [
				"assertive",
				"off",
				"polite"
			]
		}],
		["aria-modal", { type: "boolean" }],
		["aria-multiline", { type: "boolean" }],
		["aria-multiselectable", { type: "boolean" }],
		["aria-orientation", {
			type: "token",
			values: [
				"vertical",
				"undefined",
				"horizontal"
			]
		}],
		["aria-owns", { type: "idlist" }],
		["aria-placeholder", { type: "string" }],
		["aria-posinset", { type: "integer" }],
		["aria-pressed", { type: "tristate" }],
		["aria-readonly", { type: "boolean" }],
		["aria-relevant", {
			type: "tokenlist",
			values: [
				"additions",
				"all",
				"removals",
				"text"
			]
		}],
		["aria-required", { type: "boolean" }],
		["aria-roledescription", { type: "string" }],
		["aria-rowcount", { type: "integer" }],
		["aria-rowindex", { type: "integer" }],
		["aria-rowspan", { type: "integer" }],
		["aria-selected", {
			type: "boolean",
			allowundefined: !0
		}],
		["aria-setsize", { type: "integer" }],
		["aria-sort", {
			type: "token",
			values: [
				"ascending",
				"descending",
				"none",
				"other"
			]
		}],
		["aria-valuemax", { type: "number" }],
		["aria-valuemin", { type: "number" }],
		["aria-valuenow", { type: "number" }],
		["aria-valuetext", { type: "string" }]
	], d = {
		entries: function() {
			return u;
		},
		forEach: function(e) {
			var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = s(u), i;
			try {
				for (n.s(); !(i = n.n()).done;) {
					var a = r(i.value, 2), o = a[0], c = a[1];
					e.call(t, c, o, u);
				}
			} catch (e) {
				n.e(e);
			} finally {
				n.f();
			}
		},
		get: function(e) {
			var t = u.find(function(t) {
				return t[0] === e;
			});
			return t && t[1];
		},
		has: function(e) {
			return !!d.get(e);
		},
		keys: function() {
			return u.map(function(e) {
				return r(e, 1)[0];
			});
		},
		values: function() {
			return u.map(function(e) {
				return r(e, 2)[1];
			});
		}
	};
	e.default = (0, t.default)(d, d.entries());
})), Tt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = n(Ct());
	function n(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function r(e, t) {
		return o(e) || a(e, t) || c(e, t) || i();
	}
	function i() {
		throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function a(e, t) {
		var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var r = [], i = !0, a = !1, o, s;
			try {
				for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
			} catch (e) {
				a = !0, s = e;
			} finally {
				try {
					!i && n.return != null && n.return();
				} finally {
					if (a) throw s;
				}
			}
			return r;
		}
	}
	function o(e) {
		if (Array.isArray(e)) return e;
	}
	function s(e, t) {
		var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
		if (!n) {
			if (Array.isArray(e) || (n = c(e)) || t && e && typeof e.length == "number") {
				n && (e = n);
				var r = 0, i = function() {};
				return {
					s: i,
					n: function() {
						return r >= e.length ? { done: !0 } : {
							done: !1,
							value: e[r++]
						};
					},
					e: function(e) {
						throw e;
					},
					f: i
				};
			}
			throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		}
		var a = !0, o = !1, s;
		return {
			s: function() {
				n = n.call(e);
			},
			n: function() {
				var e = n.next();
				return a = e.done, e;
			},
			e: function(e) {
				o = !0, s = e;
			},
			f: function() {
				try {
					!a && n.return != null && n.return();
				} finally {
					if (o) throw s;
				}
			}
		};
	}
	function c(e, t) {
		if (e) {
			if (typeof e == "string") return l(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
		}
	}
	function l(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	var u = [
		["a", { reserved: !1 }],
		["abbr", { reserved: !1 }],
		["acronym", { reserved: !1 }],
		["address", { reserved: !1 }],
		["applet", { reserved: !1 }],
		["area", { reserved: !1 }],
		["article", { reserved: !1 }],
		["aside", { reserved: !1 }],
		["audio", { reserved: !1 }],
		["b", { reserved: !1 }],
		["base", { reserved: !0 }],
		["bdi", { reserved: !1 }],
		["bdo", { reserved: !1 }],
		["big", { reserved: !1 }],
		["blink", { reserved: !1 }],
		["blockquote", { reserved: !1 }],
		["body", { reserved: !1 }],
		["br", { reserved: !1 }],
		["button", { reserved: !1 }],
		["canvas", { reserved: !1 }],
		["caption", { reserved: !1 }],
		["center", { reserved: !1 }],
		["cite", { reserved: !1 }],
		["code", { reserved: !1 }],
		["col", { reserved: !0 }],
		["colgroup", { reserved: !0 }],
		["content", { reserved: !1 }],
		["data", { reserved: !1 }],
		["datalist", { reserved: !1 }],
		["dd", { reserved: !1 }],
		["del", { reserved: !1 }],
		["details", { reserved: !1 }],
		["dfn", { reserved: !1 }],
		["dialog", { reserved: !1 }],
		["dir", { reserved: !1 }],
		["div", { reserved: !1 }],
		["dl", { reserved: !1 }],
		["dt", { reserved: !1 }],
		["em", { reserved: !1 }],
		["embed", { reserved: !1 }],
		["fieldset", { reserved: !1 }],
		["figcaption", { reserved: !1 }],
		["figure", { reserved: !1 }],
		["font", { reserved: !1 }],
		["footer", { reserved: !1 }],
		["form", { reserved: !1 }],
		["frame", { reserved: !1 }],
		["frameset", { reserved: !1 }],
		["h1", { reserved: !1 }],
		["h2", { reserved: !1 }],
		["h3", { reserved: !1 }],
		["h4", { reserved: !1 }],
		["h5", { reserved: !1 }],
		["h6", { reserved: !1 }],
		["head", { reserved: !0 }],
		["header", { reserved: !1 }],
		["hgroup", { reserved: !1 }],
		["hr", { reserved: !1 }],
		["html", { reserved: !0 }],
		["i", { reserved: !1 }],
		["iframe", { reserved: !1 }],
		["img", { reserved: !1 }],
		["input", { reserved: !1 }],
		["ins", { reserved: !1 }],
		["kbd", { reserved: !1 }],
		["keygen", { reserved: !1 }],
		["label", { reserved: !1 }],
		["legend", { reserved: !1 }],
		["li", { reserved: !1 }],
		["link", { reserved: !0 }],
		["main", { reserved: !1 }],
		["map", { reserved: !1 }],
		["mark", { reserved: !1 }],
		["marquee", { reserved: !1 }],
		["menu", { reserved: !1 }],
		["menuitem", { reserved: !1 }],
		["meta", { reserved: !0 }],
		["meter", { reserved: !1 }],
		["nav", { reserved: !1 }],
		["noembed", { reserved: !0 }],
		["noscript", { reserved: !0 }],
		["object", { reserved: !1 }],
		["ol", { reserved: !1 }],
		["optgroup", { reserved: !1 }],
		["option", { reserved: !1 }],
		["output", { reserved: !1 }],
		["p", { reserved: !1 }],
		["param", { reserved: !0 }],
		["picture", { reserved: !0 }],
		["pre", { reserved: !1 }],
		["progress", { reserved: !1 }],
		["q", { reserved: !1 }],
		["rp", { reserved: !1 }],
		["rt", { reserved: !1 }],
		["rtc", { reserved: !1 }],
		["ruby", { reserved: !1 }],
		["s", { reserved: !1 }],
		["samp", { reserved: !1 }],
		["script", { reserved: !0 }],
		["section", { reserved: !1 }],
		["select", { reserved: !1 }],
		["small", { reserved: !1 }],
		["source", { reserved: !0 }],
		["spacer", { reserved: !1 }],
		["span", { reserved: !1 }],
		["strike", { reserved: !1 }],
		["strong", { reserved: !1 }],
		["style", { reserved: !0 }],
		["sub", { reserved: !1 }],
		["summary", { reserved: !1 }],
		["sup", { reserved: !1 }],
		["table", { reserved: !1 }],
		["tbody", { reserved: !1 }],
		["td", { reserved: !1 }],
		["textarea", { reserved: !1 }],
		["tfoot", { reserved: !1 }],
		["th", { reserved: !1 }],
		["thead", { reserved: !1 }],
		["time", { reserved: !1 }],
		["title", { reserved: !0 }],
		["tr", { reserved: !1 }],
		["track", { reserved: !0 }],
		["tt", { reserved: !1 }],
		["u", { reserved: !1 }],
		["ul", { reserved: !1 }],
		["var", { reserved: !1 }],
		["video", { reserved: !1 }],
		["wbr", { reserved: !1 }],
		["xmp", { reserved: !1 }]
	], d = {
		entries: function() {
			return u;
		},
		forEach: function(e) {
			var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = s(u), i;
			try {
				for (n.s(); !(i = n.n()).done;) {
					var a = r(i.value, 2), o = a[0], c = a[1];
					e.call(t, c, o, u);
				}
			} catch (e) {
				n.e(e);
			} finally {
				n.f();
			}
		},
		get: function(e) {
			var t = u.find(function(t) {
				return t[0] === e;
			});
			return t && t[1];
		},
		has: function(e) {
			return !!d.get(e);
		},
		keys: function() {
			return u.map(function(e) {
				return r(e, 1)[0];
			});
		},
		values: function() {
			return u.map(function(e) {
				return r(e, 2)[1];
			});
		}
	};
	e.default = (0, t.default)(d, d.entries());
})), Et = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget"]]
	};
})), Dt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-activedescendant": null,
			"aria-disabled": null
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget"]]
	};
})), Ot = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-disabled": null },
		relatedConcepts: [{
			concept: { name: "input" },
			module: "XForms"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget"]]
	};
})), kt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), At = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-valuemax": null,
			"aria-valuemin": null,
			"aria-valuenow": null
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	};
})), jt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {
			"aria-atomic": null,
			"aria-busy": null,
			"aria-controls": null,
			"aria-current": null,
			"aria-describedby": null,
			"aria-details": null,
			"aria-dropeffect": null,
			"aria-flowto": null,
			"aria-grabbed": null,
			"aria-hidden": null,
			"aria-keyshortcuts": null,
			"aria-label": null,
			"aria-labelledby": null,
			"aria-live": null,
			"aria-owns": null,
			"aria-relevant": null,
			"aria-roledescription": null
		},
		relatedConcepts: [{
			concept: { name: "role" },
			module: "XHTML"
		}, {
			concept: { name: "type" },
			module: "Dublin Core"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: []
	};
})), Mt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { name: "frontmatter" },
				module: "DTB"
			},
			{
				concept: { name: "level" },
				module: "DTB"
			},
			{
				concept: { name: "level" },
				module: "SMIL"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	};
})), Nt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	};
})), Pt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-orientation": null },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"composite"
		], [
			"roletype",
			"structure",
			"section",
			"group"
		]]
	};
})), Ft = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype"]]
	};
})), It = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype"]]
	};
})), Lt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-modal": null },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype"]]
	};
})), Rt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = p(Et()), n = p(Dt()), r = p(Ot()), i = p(kt()), a = p(At()), o = p(jt()), s = p(Mt()), c = p(Nt()), l = p(Pt()), u = p(Ft()), d = p(It()), f = p(Lt());
	function p(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.default = [
		["command", t.default],
		["composite", n.default],
		["input", r.default],
		["landmark", i.default],
		["range", a.default],
		["roletype", o.default],
		["section", s.default],
		["sectionhead", c.default],
		["select", l.default],
		["structure", u.default],
		["widget", d.default],
		["window", f.default]
	];
})), zt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-atomic": "true",
			"aria-live": "assertive"
		},
		relatedConcepts: [{
			concept: { name: "alert" },
			module: "XForms"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Bt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "alert" },
			module: "XForms"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"alert"
		], [
			"roletype",
			"window",
			"dialog"
		]]
	};
})), Vt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-activedescendant": null,
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{ concept: { name: "Device Independence Delivery Unit" } }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	};
})), Ht = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-posinset": null,
			"aria-setsize": null
		},
		relatedConcepts: [{
			concept: { name: "article" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"document"
		]]
	};
})), Ut = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: {
				constraints: ["scoped to the body element"],
				name: "header"
			},
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Wt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "blockquote" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Gt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-pressed": null
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [{
						name: "type",
						value: "button"
					}],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						name: "type",
						value: "image"
					}],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						name: "type",
						value: "reset"
					}],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						name: "type",
						value: "submit"
					}],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: { name: "button" },
				module: "HTML"
			},
			{
				concept: { name: "trigger" },
				module: "XForms"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"command"
		]]
	};
})), Kt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [{
			concept: { name: "caption" },
			module: "HTML"
		}],
		requireContextRole: [
			"figure",
			"grid",
			"table"
		],
		requiredContextRole: [
			"figure",
			"grid",
			"table"
		],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), qt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-colindex": null,
			"aria-colspan": null,
			"aria-rowindex": null,
			"aria-rowspan": null
		},
		relatedConcepts: [{
			concept: {
				constraints: ["ancestor table element has table role"],
				name: "td"
			},
			module: "HTML"
		}],
		requireContextRole: ["row"],
		requiredContextRole: ["row"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Jt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-checked": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-invalid": null,
			"aria-readonly": null,
			"aria-required": null
		},
		relatedConcepts: [{
			concept: {
				attributes: [{
					name: "type",
					value: "checkbox"
				}],
				name: "input"
			},
			module: "HTML"
		}, {
			concept: { name: "option" },
			module: "ARIA"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-checked": null },
		superClass: [[
			"roletype",
			"widget",
			"input"
		]]
	};
})), Yt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [{
			concept: { name: "code" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Xt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: { "aria-sort": null },
		relatedConcepts: [
			{
				concept: { name: "th" },
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						name: "scope",
						value: "col"
					}],
					name: "th"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						name: "scope",
						value: "colgroup"
					}],
					name: "th"
				},
				module: "HTML"
			}
		],
		requireContextRole: ["row"],
		requiredContextRole: ["row"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			[
				"roletype",
				"structure",
				"section",
				"cell"
			],
			[
				"roletype",
				"structure",
				"section",
				"cell",
				"gridcell"
			],
			[
				"roletype",
				"widget",
				"gridcell"
			],
			[
				"roletype",
				"structure",
				"sectionhead"
			]
		]
	};
})), Zt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-activedescendant": null,
			"aria-autocomplete": null,
			"aria-errormessage": null,
			"aria-invalid": null,
			"aria-readonly": null,
			"aria-required": null,
			"aria-expanded": "false",
			"aria-haspopup": "listbox"
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "list"
					}, {
						name: "type",
						value: "email"
					}],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "list"
					}, {
						name: "type",
						value: "search"
					}],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "list"
					}, {
						name: "type",
						value: "tel"
					}],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "list"
					}, {
						name: "type",
						value: "text"
					}],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "list"
					}, {
						name: "type",
						value: "url"
					}],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "list"
					}, {
						name: "type",
						value: "url"
					}],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["undefined"],
						name: "multiple"
					}, {
						constraints: ["undefined"],
						name: "size"
					}],
					constraints: ["the multiple attribute is not set and the size attribute does not have a value greater than 1"],
					name: "select"
				},
				module: "HTML"
			},
			{
				concept: { name: "select" },
				module: "XForms"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {
			"aria-controls": null,
			"aria-expanded": "false"
		},
		superClass: [[
			"roletype",
			"widget",
			"input"
		]]
	};
})), Qt = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { name: "aside" },
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "aria-label"
					}],
					constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
					name: "aside"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "aria-labelledby"
					}],
					constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
					name: "aside"
				},
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), $t = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: {
				constraints: ["scoped to the body element"],
				name: "footer"
			},
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), en = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "dd" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), tn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [{
			concept: { name: "del" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), nn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "dialog" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "window"]]
	};
})), rn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ module: "DAISY Guide" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"list"
		]]
	};
})), an = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: "Device Independence Delivery Unit" } }, {
			concept: { name: "html" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	};
})), on = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [{
			concept: { name: "em" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), sn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["article"]],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"list"
		]]
	};
})), cn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "figure" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), ln = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "aria-label"
					}],
					name: "form"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "aria-labelledby"
					}],
					name: "form"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "name"
					}],
					name: "form"
				},
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), un = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [
			{
				concept: { name: "a" },
				module: "HTML"
			},
			{
				concept: { name: "area" },
				module: "HTML"
			},
			{
				concept: { name: "aside" },
				module: "HTML"
			},
			{
				concept: { name: "b" },
				module: "HTML"
			},
			{
				concept: { name: "bdo" },
				module: "HTML"
			},
			{
				concept: { name: "body" },
				module: "HTML"
			},
			{
				concept: { name: "data" },
				module: "HTML"
			},
			{
				concept: { name: "div" },
				module: "HTML"
			},
			{
				concept: {
					constraints: [
						"scoped to the main element",
						"scoped to a sectioning content element",
						"scoped to a sectioning root element other than body"
					],
					name: "footer"
				},
				module: "HTML"
			},
			{
				concept: {
					constraints: [
						"scoped to the main element",
						"scoped to a sectioning content element",
						"scoped to a sectioning root element other than body"
					],
					name: "header"
				},
				module: "HTML"
			},
			{
				concept: { name: "hgroup" },
				module: "HTML"
			},
			{
				concept: { name: "i" },
				module: "HTML"
			},
			{
				concept: { name: "pre" },
				module: "HTML"
			},
			{
				concept: { name: "q" },
				module: "HTML"
			},
			{
				concept: { name: "samp" },
				module: "HTML"
			},
			{
				concept: { name: "section" },
				module: "HTML"
			},
			{
				concept: { name: "small" },
				module: "HTML"
			},
			{
				concept: { name: "span" },
				module: "HTML"
			},
			{
				concept: { name: "u" },
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	};
})), dn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-multiselectable": null,
			"aria-readonly": null
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["row"], ["row", "rowgroup"]],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"composite"
		], [
			"roletype",
			"structure",
			"section",
			"table"
		]]
	};
})), fn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null,
			"aria-readonly": null,
			"aria-required": null,
			"aria-selected": null
		},
		relatedConcepts: [{
			concept: {
				constraints: ["ancestor table element has grid role", "ancestor table element has treegrid role"],
				name: "td"
			},
			module: "HTML"
		}],
		requireContextRole: ["row"],
		requiredContextRole: ["row"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"cell"
		], ["roletype", "widget"]]
	};
})), pn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-activedescendant": null,
			"aria-disabled": null
		},
		relatedConcepts: [
			{
				concept: { name: "details" },
				module: "HTML"
			},
			{
				concept: { name: "fieldset" },
				module: "HTML"
			},
			{
				concept: { name: "optgroup" },
				module: "HTML"
			},
			{
				concept: { name: "address" },
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), mn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: { "aria-level": "2" },
		relatedConcepts: [
			{
				concept: { name: "h1" },
				module: "HTML"
			},
			{
				concept: { name: "h2" },
				module: "HTML"
			},
			{
				concept: { name: "h3" },
				module: "HTML"
			},
			{
				concept: { name: "h4" },
				module: "HTML"
			},
			{
				concept: { name: "h5" },
				module: "HTML"
			},
			{
				concept: { name: "h6" },
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-level": "2" },
		superClass: [[
			"roletype",
			"structure",
			"sectionhead"
		]]
	};
})), hn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "alt"
					}],
					name: "img"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["undefined"],
						name: "alt"
					}],
					name: "img"
				},
				module: "HTML"
			},
			{
				concept: { name: "imggroup" },
				module: "DTB"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), gn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [{
			concept: { name: "ins" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), _n = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-expanded": null,
			"aria-haspopup": null
		},
		relatedConcepts: [{
			concept: {
				attributes: [{
					constraints: ["set"],
					name: "href"
				}],
				name: "a"
			},
			module: "HTML"
		}, {
			concept: {
				attributes: [{
					constraints: ["set"],
					name: "href"
				}],
				name: "area"
			},
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"command"
		]]
	};
})), vn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { name: "menu" },
				module: "HTML"
			},
			{
				concept: { name: "ol" },
				module: "HTML"
			},
			{
				concept: { name: "ul" },
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["listitem"]],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), yn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-invalid": null,
			"aria-multiselectable": null,
			"aria-readonly": null,
			"aria-required": null,
			"aria-orientation": "vertical"
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [{
						constraints: [">1"],
						name: "size"
					}],
					constraints: ["the size attribute value is greater than 1"],
					name: "select"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{ name: "multiple" }],
					name: "select"
				},
				module: "HTML"
			},
			{
				concept: { name: "datalist" },
				module: "HTML"
			},
			{
				concept: { name: "list" },
				module: "ARIA"
			},
			{
				concept: { name: "select" },
				module: "XForms"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["option", "group"], ["option"]],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"composite",
			"select"
		], [
			"roletype",
			"structure",
			"section",
			"group",
			"select"
		]]
	};
})), bn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-level": null,
			"aria-posinset": null,
			"aria-setsize": null
		},
		relatedConcepts: [{
			concept: {
				constraints: [
					"direct descendant of ol",
					"direct descendant of ul",
					"direct descendant of menu"
				],
				name: "li"
			},
			module: "HTML"
		}, {
			concept: { name: "item" },
			module: "XForms"
		}],
		requireContextRole: ["directory", "list"],
		requiredContextRole: ["directory", "list"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), xn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-live": "polite" },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Sn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "main" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Cn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: [],
		props: {
			"aria-braillelabel": null,
			"aria-brailleroledescription": null,
			"aria-description": null
		},
		relatedConcepts: [{
			concept: { name: "mark" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), wn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Tn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "math" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), En = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-orientation": "vertical" },
		relatedConcepts: [
			{
				concept: { name: "MENU" },
				module: "JAPI"
			},
			{
				concept: { name: "list" },
				module: "ARIA"
			},
			{
				concept: { name: "select" },
				module: "XForms"
			},
			{
				concept: { name: "sidebar" },
				module: "DTB"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [
			["menuitem", "group"],
			["menuitemradio", "group"],
			["menuitemcheckbox", "group"],
			["menuitem"],
			["menuitemcheckbox"],
			["menuitemradio"]
		],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"composite",
			"select"
		], [
			"roletype",
			"structure",
			"section",
			"group",
			"select"
		]]
	};
})), Dn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-orientation": "horizontal" },
		relatedConcepts: [{
			concept: { name: "toolbar" },
			module: "ARIA"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [
			["menuitem", "group"],
			["menuitemradio", "group"],
			["menuitemcheckbox", "group"],
			["menuitem"],
			["menuitemcheckbox"],
			["menuitemradio"]
		],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"composite",
			"select",
			"menu"
		], [
			"roletype",
			"structure",
			"section",
			"group",
			"select",
			"menu"
		]]
	};
})), On = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-posinset": null,
			"aria-setsize": null
		},
		relatedConcepts: [
			{
				concept: { name: "MENU_ITEM" },
				module: "JAPI"
			},
			{
				concept: { name: "listitem" },
				module: "ARIA"
			},
			{
				concept: { name: "option" },
				module: "ARIA"
			}
		],
		requireContextRole: [
			"group",
			"menu",
			"menubar"
		],
		requiredContextRole: [
			"group",
			"menu",
			"menubar"
		],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"command"
		]]
	};
})), kn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "menuitem" },
			module: "ARIA"
		}],
		requireContextRole: [
			"group",
			"menu",
			"menubar"
		],
		requiredContextRole: [
			"group",
			"menu",
			"menubar"
		],
		requiredOwnedElements: [],
		requiredProps: { "aria-checked": null },
		superClass: [[
			"roletype",
			"widget",
			"input",
			"checkbox"
		], [
			"roletype",
			"widget",
			"command",
			"menuitem"
		]]
	};
})), An = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "menuitem" },
			module: "ARIA"
		}],
		requireContextRole: [
			"group",
			"menu",
			"menubar"
		],
		requiredContextRole: [
			"group",
			"menu",
			"menubar"
		],
		requiredOwnedElements: [],
		requiredProps: { "aria-checked": null },
		superClass: [
			[
				"roletype",
				"widget",
				"input",
				"checkbox",
				"menuitemcheckbox"
			],
			[
				"roletype",
				"widget",
				"command",
				"menuitem",
				"menuitemcheckbox"
			],
			[
				"roletype",
				"widget",
				"input",
				"radio"
			]
		]
	};
})), jn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-valuetext": null,
			"aria-valuemax": "100",
			"aria-valuemin": "0"
		},
		relatedConcepts: [{
			concept: { name: "meter" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-valuenow": null },
		superClass: [[
			"roletype",
			"structure",
			"range"
		]]
	};
})), Mn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "nav" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Nn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: []
	};
})), Pn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Fn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-checked": null,
			"aria-posinset": null,
			"aria-setsize": null,
			"aria-selected": "false"
		},
		relatedConcepts: [
			{
				concept: { name: "item" },
				module: "XForms"
			},
			{
				concept: { name: "listitem" },
				module: "ARIA"
			},
			{
				concept: { name: "option" },
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-selected": "false" },
		superClass: [[
			"roletype",
			"widget",
			"input"
		]]
	};
})), In = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [{
			concept: { name: "p" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Ln = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [{
			concept: {
				attributes: [{
					name: "alt",
					value: ""
				}],
				name: "img"
			},
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	};
})), Rn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-valuetext": null },
		relatedConcepts: [{
			concept: { name: "progress" },
			module: "HTML"
		}, {
			concept: { name: "status" },
			module: "ARIA"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"range"
		], ["roletype", "widget"]]
	};
})), zn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-checked": null,
			"aria-posinset": null,
			"aria-setsize": null
		},
		relatedConcepts: [{
			concept: {
				attributes: [{
					name: "type",
					value: "radio"
				}],
				name: "input"
			},
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-checked": null },
		superClass: [[
			"roletype",
			"widget",
			"input"
		]]
	};
})), Bn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-invalid": null,
			"aria-readonly": null,
			"aria-required": null
		},
		relatedConcepts: [{
			concept: { name: "list" },
			module: "ARIA"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["radio"]],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"composite",
			"select"
		], [
			"roletype",
			"structure",
			"section",
			"group",
			"select"
		]]
	};
})), Vn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "aria-label"
					}],
					name: "section"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["set"],
						name: "aria-labelledby"
					}],
					name: "section"
				},
				module: "HTML"
			},
			{ concept: { name: "Device Independence Glossart perceivable unit" } }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Hn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-colindex": null,
			"aria-expanded": null,
			"aria-level": null,
			"aria-posinset": null,
			"aria-rowindex": null,
			"aria-selected": null,
			"aria-setsize": null
		},
		relatedConcepts: [{
			concept: { name: "tr" },
			module: "HTML"
		}],
		requireContextRole: [
			"grid",
			"rowgroup",
			"table",
			"treegrid"
		],
		requiredContextRole: [
			"grid",
			"rowgroup",
			"table",
			"treegrid"
		],
		requiredOwnedElements: [
			["cell"],
			["columnheader"],
			["gridcell"],
			["rowheader"]
		],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"group"
		], ["roletype", "widget"]]
	};
})), Un = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { name: "tbody" },
				module: "HTML"
			},
			{
				concept: { name: "tfoot" },
				module: "HTML"
			},
			{
				concept: { name: "thead" },
				module: "HTML"
			}
		],
		requireContextRole: [
			"grid",
			"table",
			"treegrid"
		],
		requiredContextRole: [
			"grid",
			"table",
			"treegrid"
		],
		requiredOwnedElements: [["row"]],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	};
})), Wn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: { "aria-sort": null },
		relatedConcepts: [{
			concept: {
				attributes: [{
					name: "scope",
					value: "row"
				}],
				name: "th"
			},
			module: "HTML"
		}, {
			concept: {
				attributes: [{
					name: "scope",
					value: "rowgroup"
				}],
				name: "th"
			},
			module: "HTML"
		}],
		requireContextRole: ["row", "rowgroup"],
		requiredContextRole: ["row", "rowgroup"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			[
				"roletype",
				"structure",
				"section",
				"cell"
			],
			[
				"roletype",
				"structure",
				"section",
				"cell",
				"gridcell"
			],
			[
				"roletype",
				"widget",
				"gridcell"
			],
			[
				"roletype",
				"structure",
				"sectionhead"
			]
		]
	};
})), Gn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-valuetext": null,
			"aria-orientation": "vertical",
			"aria-valuemax": "100",
			"aria-valuemin": "0"
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {
			"aria-controls": null,
			"aria-valuenow": null
		},
		superClass: [[
			"roletype",
			"structure",
			"range"
		], ["roletype", "widget"]]
	};
})), Kn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), qn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: {
				attributes: [{
					constraints: ["undefined"],
					name: "list"
				}, {
					name: "type",
					value: "search"
				}],
				constraints: ["the list attribute is not set"],
				name: "input"
			},
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"input",
			"textbox"
		]]
	};
})), Jn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-orientation": "horizontal",
			"aria-valuemax": "100",
			"aria-valuemin": "0",
			"aria-valuenow": null,
			"aria-valuetext": null
		},
		relatedConcepts: [{
			concept: { name: "hr" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	};
})), Yn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-haspopup": null,
			"aria-invalid": null,
			"aria-readonly": null,
			"aria-valuetext": null,
			"aria-orientation": "horizontal",
			"aria-valuemax": "100",
			"aria-valuemin": "0"
		},
		relatedConcepts: [{
			concept: {
				attributes: [{
					name: "type",
					value: "range"
				}],
				name: "input"
			},
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-valuenow": null },
		superClass: [[
			"roletype",
			"widget",
			"input"
		], [
			"roletype",
			"structure",
			"range"
		]]
	};
})), Xn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-invalid": null,
			"aria-readonly": null,
			"aria-required": null,
			"aria-valuetext": null,
			"aria-valuenow": "0"
		},
		relatedConcepts: [{
			concept: {
				attributes: [{
					name: "type",
					value: "number"
				}],
				name: "input"
			},
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			[
				"roletype",
				"widget",
				"composite"
			],
			[
				"roletype",
				"widget",
				"input"
			],
			[
				"roletype",
				"structure",
				"range"
			]
		]
	};
})), Zn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-atomic": "true",
			"aria-live": "polite"
		},
		relatedConcepts: [{
			concept: { name: "output" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Qn = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [{
			concept: { name: "strong" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), $n = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [{
			concept: { name: "sub" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), er = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [{
			concept: { name: "sup" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), tr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "button" },
			module: "ARIA"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-checked": null },
		superClass: [[
			"roletype",
			"widget",
			"input",
			"checkbox"
		]]
	};
})), nr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-posinset": null,
			"aria-setsize": null,
			"aria-selected": "false"
		},
		relatedConcepts: [],
		requireContextRole: ["tablist"],
		requiredContextRole: ["tablist"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"sectionhead"
		], ["roletype", "widget"]]
	};
})), rr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-colcount": null,
			"aria-rowcount": null
		},
		relatedConcepts: [{
			concept: { name: "table" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["row"], ["row", "rowgroup"]],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), ir = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-level": null,
			"aria-multiselectable": null,
			"aria-orientation": "horizontal"
		},
		relatedConcepts: [{
			module: "DAISY",
			concept: { name: "guide" }
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["tab"]],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"composite"
		]]
	};
})), ar = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), or = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "dfn" },
			module: "HTML"
		}, {
			concept: { name: "dt" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), sr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-activedescendant": null,
			"aria-autocomplete": null,
			"aria-errormessage": null,
			"aria-haspopup": null,
			"aria-invalid": null,
			"aria-multiline": null,
			"aria-placeholder": null,
			"aria-readonly": null,
			"aria-required": null
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [{
						constraints: ["undefined"],
						name: "type"
					}, {
						constraints: ["undefined"],
						name: "list"
					}],
					constraints: ["the list attribute is not set"],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["undefined"],
						name: "list"
					}, {
						name: "type",
						value: "email"
					}],
					constraints: ["the list attribute is not set"],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["undefined"],
						name: "list"
					}, {
						name: "type",
						value: "tel"
					}],
					constraints: ["the list attribute is not set"],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["undefined"],
						name: "list"
					}, {
						name: "type",
						value: "text"
					}],
					constraints: ["the list attribute is not set"],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{
						constraints: ["undefined"],
						name: "list"
					}, {
						name: "type",
						value: "url"
					}],
					constraints: ["the list attribute is not set"],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: { name: "input" },
				module: "XForms"
			},
			{
				concept: { name: "textarea" },
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"input"
		]]
	};
})), cr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "time" },
			module: "HTML"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), lr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"status"
		]]
	};
})), ur = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-orientation": "horizontal" },
		relatedConcepts: [{
			concept: { name: "menubar" },
			module: "ARIA"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"group"
		]]
	};
})), dr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), fr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-invalid": null,
			"aria-multiselectable": null,
			"aria-required": null,
			"aria-orientation": "vertical"
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"composite",
			"select"
		], [
			"roletype",
			"structure",
			"section",
			"group",
			"select"
		]]
	};
})), pr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["row"], ["row", "rowgroup"]],
		requiredProps: {},
		superClass: [
			[
				"roletype",
				"widget",
				"composite",
				"grid"
			],
			[
				"roletype",
				"structure",
				"section",
				"table",
				"grid"
			],
			[
				"roletype",
				"widget",
				"composite",
				"select",
				"tree"
			],
			[
				"roletype",
				"structure",
				"section",
				"group",
				"select",
				"tree"
			]
		]
	};
})), mr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-expanded": null,
			"aria-haspopup": null
		},
		relatedConcepts: [],
		requireContextRole: ["group", "tree"],
		requiredContextRole: ["group", "tree"],
		requiredOwnedElements: [],
		requiredProps: { "aria-selected": null },
		superClass: [[
			"roletype",
			"structure",
			"section",
			"listitem"
		], [
			"roletype",
			"widget",
			"input",
			"option"
		]]
	};
})), hr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = A(zt()), n = A(Bt()), r = A(Vt()), i = A(Ht()), a = A(Ut()), o = A(Wt()), s = A(Gt()), c = A(Kt()), l = A(qt()), u = A(Jt()), d = A(Yt()), f = A(Xt()), p = A(Zt()), m = A(Qt()), h = A($t()), g = A(en()), _ = A(tn()), v = A(nn()), y = A(rn()), b = A(an()), x = A(on()), ee = A(sn()), te = A(cn()), ne = A(ln()), re = A(un()), ie = A(dn()), S = A(fn()), ae = A(pn()), C = A(mn()), oe = A(hn()), se = A(gn()), ce = A(_n()), le = A(vn()), ue = A(yn()), w = A(bn()), T = A(xn()), de = A(Sn()), fe = A(Cn()), pe = A(wn()), E = A(Tn()), me = A(En()), he = A(Dn()), ge = A(On()), _e = A(kn()), ve = A(An()), ye = A(jn()), be = A(Mn()), xe = A(Nn()), Se = A(Pn()), D = A(Fn()), Ce = A(In()), we = A(Ln()), Te = A(Rn()), Ee = A(zn()), O = A(Bn()), De = A(Vn()), Oe = A(Hn()), ke = A(Un()), Ae = A(Wn()), je = A(Gn()), Me = A(Kn()), Ne = A(qn()), k = A(Jn()), Pe = A(Yn()), Fe = A(Xn()), Ie = A(Zn()), Le = A(Qn()), Re = A($n()), ze = A(er()), Be = A(tr()), Ve = A(nr()), He = A(rr()), Ue = A(ir()), We = A(ar()), Ge = A(or()), Ke = A(sr()), qe = A(cr()), Je = A(lr()), Ye = A(ur()), Xe = A(dr()), Ze = A(fr()), Qe = A(pr()), $e = A(mr());
	function A(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.default = [
		["alert", t.default],
		["alertdialog", n.default],
		["application", r.default],
		["article", i.default],
		["banner", a.default],
		["blockquote", o.default],
		["button", s.default],
		["caption", c.default],
		["cell", l.default],
		["checkbox", u.default],
		["code", d.default],
		["columnheader", f.default],
		["combobox", p.default],
		["complementary", m.default],
		["contentinfo", h.default],
		["definition", g.default],
		["deletion", _.default],
		["dialog", v.default],
		["directory", y.default],
		["document", b.default],
		["emphasis", x.default],
		["feed", ee.default],
		["figure", te.default],
		["form", ne.default],
		["generic", re.default],
		["grid", ie.default],
		["gridcell", S.default],
		["group", ae.default],
		["heading", C.default],
		["img", oe.default],
		["insertion", se.default],
		["link", ce.default],
		["list", le.default],
		["listbox", ue.default],
		["listitem", w.default],
		["log", T.default],
		["main", de.default],
		["mark", fe.default],
		["marquee", pe.default],
		["math", E.default],
		["menu", me.default],
		["menubar", he.default],
		["menuitem", ge.default],
		["menuitemcheckbox", _e.default],
		["menuitemradio", ve.default],
		["meter", ye.default],
		["navigation", be.default],
		["none", xe.default],
		["note", Se.default],
		["option", D.default],
		["paragraph", Ce.default],
		["presentation", we.default],
		["progressbar", Te.default],
		["radio", Ee.default],
		["radiogroup", O.default],
		["region", De.default],
		["row", Oe.default],
		["rowgroup", ke.default],
		["rowheader", Ae.default],
		["scrollbar", je.default],
		["search", Me.default],
		["searchbox", Ne.default],
		["separator", k.default],
		["slider", Pe.default],
		["spinbutton", Fe.default],
		["status", Ie.default],
		["strong", Le.default],
		["subscript", Re.default],
		["superscript", ze.default],
		["switch", Be.default],
		["tab", Ve.default],
		["table", He.default],
		["tablist", Ue.default],
		["tabpanel", We.default],
		["term", Ge.default],
		["textbox", Ke.default],
		["time", qe.default],
		["timer", Je.default],
		["toolbar", Ye.default],
		["tooltip", Xe.default],
		["tree", Ze.default],
		["treegrid", Qe.default],
		["treeitem", $e.default]
	];
})), gr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "abstract [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), _r = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "acknowledgments [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), vr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "afterword [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), yr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "appendix [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), br = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "referrer [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"command",
			"link"
		]]
	};
})), xr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "EPUB biblioentry [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: ["doc-bibliography"],
		requiredContextRole: ["doc-bibliography"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"listitem"
		]]
	};
})), Sr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "bibliography [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["doc-biblioentry"]],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Cr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "biblioref [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"command",
			"link"
		]]
	};
})), wr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "chapter [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Tr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "colophon [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Er = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "conclusion [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Dr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "cover [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"img"
		]]
	};
})), Or = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "credit [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), kr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "credits [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Ar = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "dedication [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), jr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "rearnote [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: ["doc-endnotes"],
		requiredContextRole: ["doc-endnotes"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"listitem"
		]]
	};
})), Mr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "rearnotes [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["doc-endnote"]],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Nr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "epigraph [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Pr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "epilogue [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Fr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "errata [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Ir = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Lr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "footnote [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Rr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "foreword [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), zr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "glossary [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["definition"], ["term"]],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Br = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "glossref [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"command",
			"link"
		]]
	};
})), Vr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "index [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark",
			"navigation"
		]]
	};
})), Hr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "introduction [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Ur = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "noteref [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"widget",
			"command",
			"link"
		]]
	};
})), Wr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "notice [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"note"
		]]
	};
})), Gr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "pagebreak [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"separator"
		]]
	};
})), Kr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "page-list [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark",
			"navigation"
		]]
	};
})), qr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "part [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Jr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "preface [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Yr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "prologue [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark"
		]]
	};
})), Xr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{
			concept: { name: "pullquote [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["none"]]
	};
})), Zr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "qna [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section"
		]]
	};
})), Qr = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "subtitle [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"sectionhead"
		]]
	};
})), $r = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "help [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"note"
		]]
	};
})), ei = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{
			concept: { name: "toc [EPUB-SSV]" },
			module: "EPUB"
		}],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"landmark",
			"navigation"
		]]
	};
})), ti = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = E(gr()), n = E(_r()), r = E(vr()), i = E(yr()), a = E(br()), o = E(xr()), s = E(Sr()), c = E(Cr()), l = E(wr()), u = E(Tr()), d = E(Er()), f = E(Dr()), p = E(Or()), m = E(kr()), h = E(Ar()), g = E(jr()), _ = E(Mr()), v = E(Nr()), y = E(Pr()), b = E(Fr()), x = E(Ir()), ee = E(Lr()), te = E(Rr()), ne = E(zr()), re = E(Br()), ie = E(Vr()), S = E(Hr()), ae = E(Ur()), C = E(Wr()), oe = E(Gr()), se = E(Kr()), ce = E(qr()), le = E(Jr()), ue = E(Yr()), w = E(Xr()), T = E(Zr()), de = E(Qr()), fe = E($r()), pe = E(ei());
	function E(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.default = [
		["doc-abstract", t.default],
		["doc-acknowledgments", n.default],
		["doc-afterword", r.default],
		["doc-appendix", i.default],
		["doc-backlink", a.default],
		["doc-biblioentry", o.default],
		["doc-bibliography", s.default],
		["doc-biblioref", c.default],
		["doc-chapter", l.default],
		["doc-colophon", u.default],
		["doc-conclusion", d.default],
		["doc-cover", f.default],
		["doc-credit", p.default],
		["doc-credits", m.default],
		["doc-dedication", h.default],
		["doc-endnote", g.default],
		["doc-endnotes", _.default],
		["doc-epigraph", v.default],
		["doc-epilogue", y.default],
		["doc-errata", b.default],
		["doc-example", x.default],
		["doc-footnote", ee.default],
		["doc-foreword", te.default],
		["doc-glossary", ne.default],
		["doc-glossref", re.default],
		["doc-index", ie.default],
		["doc-introduction", S.default],
		["doc-noteref", ae.default],
		["doc-notice", C.default],
		["doc-pagebreak", oe.default],
		["doc-pagelist", se.default],
		["doc-part", ce.default],
		["doc-preface", le.default],
		["doc-prologue", ue.default],
		["doc-pullquote", w.default],
		["doc-qna", T.default],
		["doc-subtitle", de.default],
		["doc-tip", fe.default],
		["doc-toc", pe.default]
	];
})), ni = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{
				module: "GRAPHICS",
				concept: { name: "graphics-object" }
			},
			{
				module: "ARIA",
				concept: { name: "img" }
			},
			{
				module: "ARIA",
				concept: { name: "article" }
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"document"
		]]
	};
})), ri = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{
				module: "GRAPHICS",
				concept: { name: "graphics-document" }
			},
			{
				module: "ARIA",
				concept: { name: "group" }
			},
			{
				module: "ARIA",
				concept: { name: "img" }
			},
			{
				module: "GRAPHICS",
				concept: { name: "graphics-symbol" }
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"group"
		]]
	};
})), ii = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0, e.default = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [[
			"roletype",
			"structure",
			"section",
			"img"
		]]
	};
})), ai = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = i(ni()), n = i(ri()), r = i(ii());
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.default = [
		["graphics-document", t.default],
		["graphics-object", n.default],
		["graphics-symbol", r.default]
	];
})), oi = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = o(Rt()), n = o(hr()), r = o(ti()), i = o(ai()), a = o(Ct());
	function o(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function s(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function c(e, t) {
		var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
		if (!n) {
			if (Array.isArray(e) || (n = d(e)) || t && e && typeof e.length == "number") {
				n && (e = n);
				var r = 0, i = function() {};
				return {
					s: i,
					n: function() {
						return r >= e.length ? { done: !0 } : {
							done: !1,
							value: e[r++]
						};
					},
					e: function(e) {
						throw e;
					},
					f: i
				};
			}
			throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		}
		var a = !0, o = !1, s;
		return {
			s: function() {
				n = n.call(e);
			},
			n: function() {
				var e = n.next();
				return a = e.done, e;
			},
			e: function(e) {
				o = !0, s = e;
			},
			f: function() {
				try {
					!a && n.return != null && n.return();
				} finally {
					if (o) throw s;
				}
			}
		};
	}
	function l(e, t) {
		return m(e) || p(e, t) || d(e, t) || u();
	}
	function u() {
		throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function d(e, t) {
		if (e) {
			if (typeof e == "string") return f(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t);
		}
	}
	function f(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	function p(e, t) {
		var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var r = [], i = !0, a = !1, o, s;
			try {
				for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
			} catch (e) {
				a = !0, s = e;
			} finally {
				try {
					!i && n.return != null && n.return();
				} finally {
					if (a) throw s;
				}
			}
			return r;
		}
	}
	function m(e) {
		if (Array.isArray(e)) return e;
	}
	var h = [].concat(t.default, n.default, r.default, i.default);
	h.forEach(function(e) {
		var t = l(e, 2)[1], n = c(t.superClass), r;
		try {
			for (n.s(); !(r = n.n()).done;) {
				var i = r.value, a = c(i), o;
				try {
					var u = function() {
						var e = o.value, n = h.find(function(t) {
							return l(t, 1)[0] === e;
						});
						if (n) for (var r = n[1], i = 0, a = Object.keys(r.props); i < a.length; i++) {
							var c = a[i];
							Object.prototype.hasOwnProperty.call(t.props, c) || Object.assign(t.props, s({}, c, r.props[c]));
						}
					};
					for (a.s(); !(o = a.n()).done;) u();
				} catch (e) {
					a.e(e);
				} finally {
					a.f();
				}
			}
		} catch (e) {
			n.e(e);
		} finally {
			n.f();
		}
	});
	var g = {
		entries: function() {
			return h;
		},
		forEach: function(e) {
			var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = c(h), r;
			try {
				for (n.s(); !(r = n.n()).done;) {
					var i = l(r.value, 2), a = i[0], o = i[1];
					e.call(t, o, a, h);
				}
			} catch (e) {
				n.e(e);
			} finally {
				n.f();
			}
		},
		get: function(e) {
			var t = h.find(function(t) {
				return t[0] === e;
			});
			return t && t[1];
		},
		has: function(e) {
			return !!g.get(e);
		},
		keys: function() {
			return h.map(function(e) {
				return l(e, 1)[0];
			});
		},
		values: function() {
			return h.map(function(e) {
				return l(e, 2)[1];
			});
		}
	};
	e.default = (0, a.default)(g, g.entries());
})), si = /* @__PURE__ */ l(((e) => {
	var t = Object.prototype.hasOwnProperty;
	function n(e, r) {
		var i, a;
		if (e === r) return !0;
		if (e && r && (i = e.constructor) === r.constructor) {
			if (i === Date) return e.getTime() === r.getTime();
			if (i === RegExp) return e.toString() === r.toString();
			if (i === Array) {
				if ((a = e.length) === r.length) for (; a-- && n(e[a], r[a]););
				return a === -1;
			}
			if (!i || typeof e == "object") {
				for (i in a = 0, e) if (t.call(e, i) && ++a && !t.call(r, i) || !(i in r) || !n(e[i], r[i])) return !1;
				return Object.keys(r).length === a;
			}
		}
		return e !== e && r !== r;
	}
	e.dequal = n;
})), ci = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = si(), n = i(Ct()), r = i(oi());
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function a(e, t) {
		return c(e) || s(e, t) || u(e, t) || o();
	}
	function o() {
		throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function s(e, t) {
		var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var r = [], i = !0, a = !1, o, s;
			try {
				for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
			} catch (e) {
				a = !0, s = e;
			} finally {
				try {
					!i && n.return != null && n.return();
				} finally {
					if (a) throw s;
				}
			}
			return r;
		}
	}
	function c(e) {
		if (Array.isArray(e)) return e;
	}
	function l(e, t) {
		var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
		if (!n) {
			if (Array.isArray(e) || (n = u(e)) || t && e && typeof e.length == "number") {
				n && (e = n);
				var r = 0, i = function() {};
				return {
					s: i,
					n: function() {
						return r >= e.length ? { done: !0 } : {
							done: !1,
							value: e[r++]
						};
					},
					e: function(e) {
						throw e;
					},
					f: i
				};
			}
			throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		}
		var a = !0, o = !1, s;
		return {
			s: function() {
				n = n.call(e);
			},
			n: function() {
				var e = n.next();
				return a = e.done, e;
			},
			e: function(e) {
				o = !0, s = e;
			},
			f: function() {
				try {
					!a && n.return != null && n.return();
				} finally {
					if (o) throw s;
				}
			}
		};
	}
	function u(e, t) {
		if (e) {
			if (typeof e == "string") return d(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t);
		}
	}
	function d(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	for (var f = [], p = r.default.keys(), m = 0; m < p.length; m++) {
		var h = p[m], g = r.default.get(h);
		if (g) for (var _ = [].concat(g.baseConcepts, g.relatedConcepts), v = 0; v < _.length; v++) {
			var y = _[v];
			y.module === "HTML" && (function() {
				var e = y.concept;
				if (e) {
					for (var n = f.find(function(n) {
						return (0, t.dequal)(n, e);
					}), r = n ? n[1] : [], i = !0, a = 0; a < r.length; a++) if (r[a] === h) {
						i = !1;
						break;
					}
					i && r.push(h), f.push([e, r]);
				}
			})();
		}
	}
	var b = {
		entries: function() {
			return f;
		},
		forEach: function(e) {
			var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = l(f), r;
			try {
				for (n.s(); !(r = n.n()).done;) {
					var i = a(r.value, 2), o = i[0], s = i[1];
					e.call(t, s, o, f);
				}
			} catch (e) {
				n.e(e);
			} finally {
				n.f();
			}
		},
		get: function(e) {
			var n = f.find(function(n) {
				return e.name === n[0].name && (0, t.dequal)(e.attributes, n[0].attributes);
			});
			return n && n[1];
		},
		has: function(e) {
			return !!b.get(e);
		},
		keys: function() {
			return f.map(function(e) {
				return a(e, 1)[0];
			});
		},
		values: function() {
			return f.map(function(e) {
				return a(e, 2)[1];
			});
		}
	};
	e.default = (0, n.default)(b, b.entries());
})), li = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = r(Ct()), n = r(oi());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		return s(e) || o(e, t) || l(e, t) || a();
	}
	function a() {
		throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function o(e, t) {
		var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var r = [], i = !0, a = !1, o, s;
			try {
				for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
			} catch (e) {
				a = !0, s = e;
			} finally {
				try {
					!i && n.return != null && n.return();
				} finally {
					if (a) throw s;
				}
			}
			return r;
		}
	}
	function s(e) {
		if (Array.isArray(e)) return e;
	}
	function c(e, t) {
		var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
		if (!n) {
			if (Array.isArray(e) || (n = l(e)) || t && e && typeof e.length == "number") {
				n && (e = n);
				var r = 0, i = function() {};
				return {
					s: i,
					n: function() {
						return r >= e.length ? { done: !0 } : {
							done: !1,
							value: e[r++]
						};
					},
					e: function(e) {
						throw e;
					},
					f: i
				};
			}
			throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		}
		var a = !0, o = !1, s;
		return {
			s: function() {
				n = n.call(e);
			},
			n: function() {
				var e = n.next();
				return a = e.done, e;
			},
			e: function(e) {
				o = !0, s = e;
			},
			f: function() {
				try {
					!a && n.return != null && n.return();
				} finally {
					if (o) throw s;
				}
			}
		};
	}
	function l(e, t) {
		if (e) {
			if (typeof e == "string") return u(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
		}
	}
	function u(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	for (var d = [], f = n.default.keys(), p = 0; p < f.length; p++) {
		var m = f[p], h = n.default.get(m), g = [];
		if (h) {
			for (var _ = [].concat(h.baseConcepts, h.relatedConcepts), v = 0; v < _.length; v++) {
				var y = _[v];
				if (y.module === "HTML") {
					var b = y.concept;
					b != null && g.push(b);
				}
			}
			g.length > 0 && d.push([m, g]);
		}
	}
	var x = {
		entries: function() {
			return d;
		},
		forEach: function(e) {
			var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = c(d), r;
			try {
				for (n.s(); !(r = n.n()).done;) {
					var a = i(r.value, 2), o = a[0], s = a[1];
					e.call(t, s, o, d);
				}
			} catch (e) {
				n.e(e);
			} finally {
				n.f();
			}
		},
		get: function(e) {
			var t = d.find(function(t) {
				return t[0] === e;
			});
			return t && t[1];
		},
		has: function(e) {
			return !!x.get(e);
		},
		keys: function() {
			return d.map(function(e) {
				return i(e, 1)[0];
			});
		},
		values: function() {
			return d.map(function(e) {
				return i(e, 2)[1];
			});
		}
	};
	e.default = (0, t.default)(x, x.entries());
})), ui = /* @__PURE__ */ l(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.roles = e.roleElements = e.elementRoles = e.dom = e.aria = void 0;
	var t = o(wt()), n = o(Tt()), r = o(oi()), i = o(ci()), a = o(li());
	function o(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.aria = t.default, e.dom = n.default, e.roles = r.default, e.elementRoles = i.default, e.roleElements = a.default;
})), di = /* @__PURE__ */ l(((e, t) => {
	var n = (function() {
		var e = String.fromCharCode, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", r = {};
		function i(e, t) {
			if (!r[e]) {
				r[e] = {};
				for (var n = 0; n < e.length; n++) r[e][e.charAt(n)] = n;
			}
			return r[e][t];
		}
		var a = {
			compressToBase64: function(e) {
				if (e == null) return "";
				var n = a._compress(e, 6, function(e) {
					return t.charAt(e);
				});
				switch (n.length % 4) {
					default:
					case 0: return n;
					case 1: return n + "===";
					case 2: return n + "==";
					case 3: return n + "=";
				}
			},
			decompressFromBase64: function(e) {
				return e == null ? "" : e == "" ? null : a._decompress(e.length, 32, function(n) {
					return i(t, e.charAt(n));
				});
			},
			compressToUTF16: function(t) {
				return t == null ? "" : a._compress(t, 15, function(t) {
					return e(t + 32);
				}) + " ";
			},
			decompressFromUTF16: function(e) {
				return e == null ? "" : e == "" ? null : a._decompress(e.length, 16384, function(t) {
					return e.charCodeAt(t) - 32;
				});
			},
			compressToUint8Array: function(e) {
				for (var t = a.compress(e), n = new Uint8Array(t.length * 2), r = 0, i = t.length; r < i; r++) {
					var o = t.charCodeAt(r);
					n[r * 2] = o >>> 8, n[r * 2 + 1] = o % 256;
				}
				return n;
			},
			decompressFromUint8Array: function(t) {
				if (t == null) return a.decompress(t);
				for (var n = Array(t.length / 2), r = 0, i = n.length; r < i; r++) n[r] = t[r * 2] * 256 + t[r * 2 + 1];
				var o = [];
				return n.forEach(function(t) {
					o.push(e(t));
				}), a.decompress(o.join(""));
			},
			compressToEncodedURIComponent: function(e) {
				return e == null ? "" : a._compress(e, 6, function(e) {
					return n.charAt(e);
				});
			},
			decompressFromEncodedURIComponent: function(e) {
				return e == null ? "" : e == "" ? null : (e = e.replace(/ /g, "+"), a._decompress(e.length, 32, function(t) {
					return i(n, e.charAt(t));
				}));
			},
			compress: function(t) {
				return a._compress(t, 16, function(t) {
					return e(t);
				});
			},
			_compress: function(e, t, n) {
				if (e == null) return "";
				var r, i, a = {}, o = {}, s = "", c = "", l = "", u = 2, d = 3, f = 2, p = [], m = 0, h = 0, g;
				for (g = 0; g < e.length; g += 1) if (s = e.charAt(g), Object.prototype.hasOwnProperty.call(a, s) || (a[s] = d++, o[s] = !0), c = l + s, Object.prototype.hasOwnProperty.call(a, c)) l = c;
				else {
					if (Object.prototype.hasOwnProperty.call(o, l)) {
						if (l.charCodeAt(0) < 256) {
							for (r = 0; r < f; r++) m <<= 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++;
							for (i = l.charCodeAt(0), r = 0; r < 8; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
						} else {
							for (i = 1, r = 0; r < f; r++) m = m << 1 | i, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i = 0;
							for (i = l.charCodeAt(0), r = 0; r < 16; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
						}
						u--, u == 0 && (u = 2 ** f, f++), delete o[l];
					} else for (i = a[l], r = 0; r < f; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
					u--, u == 0 && (u = 2 ** f, f++), a[c] = d++, l = String(s);
				}
				if (l !== "") {
					if (Object.prototype.hasOwnProperty.call(o, l)) {
						if (l.charCodeAt(0) < 256) {
							for (r = 0; r < f; r++) m <<= 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++;
							for (i = l.charCodeAt(0), r = 0; r < 8; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
						} else {
							for (i = 1, r = 0; r < f; r++) m = m << 1 | i, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i = 0;
							for (i = l.charCodeAt(0), r = 0; r < 16; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
						}
						u--, u == 0 && (u = 2 ** f, f++), delete o[l];
					} else for (i = a[l], r = 0; r < f; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
					u--, u == 0 && (u = 2 ** f, f++);
				}
				for (i = 2, r = 0; r < f; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
				for (;;) if (m <<= 1, h == t - 1) {
					p.push(n(m));
					break;
				} else h++;
				return p.join("");
			},
			decompress: function(e) {
				return e == null ? "" : e == "" ? null : a._decompress(e.length, 32768, function(t) {
					return e.charCodeAt(t);
				});
			},
			_decompress: function(t, n, r) {
				var i = [], a = 4, o = 4, s = 3, c = "", l = [], u, d, f, p, m, h, g, _ = {
					val: r(0),
					position: n,
					index: 1
				};
				for (u = 0; u < 3; u += 1) i[u] = u;
				for (f = 0, m = 2 ** 2, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
				switch (f) {
					case 0:
						for (f = 0, m = 2 ** 8, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
						g = e(f);
						break;
					case 1:
						for (f = 0, m = 2 ** 16, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
						g = e(f);
						break;
					case 2: return "";
				}
				for (i[3] = g, d = g, l.push(g);;) {
					if (_.index > t) return "";
					for (f = 0, m = 2 ** s, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
					switch (g = f) {
						case 0:
							for (f = 0, m = 2 ** 8, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
							i[o++] = e(f), g = o - 1, a--;
							break;
						case 1:
							for (f = 0, m = 2 ** 16, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
							i[o++] = e(f), g = o - 1, a--;
							break;
						case 2: return l.join("");
					}
					if (a == 0 && (a = 2 ** s, s++), i[g]) c = i[g];
					else if (g === o) c = d + d.charAt(0);
					else return null;
					l.push(c), i[o++] = d + c.charAt(0), a--, d = c, a == 0 && (a = 2 ** s, s++);
				}
			}
		};
		return a;
	})();
	typeof define == "function" && define.amd ? define(function() {
		return n;
	}) : t !== void 0 && t != null ? t.exports = n : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
		return n;
	});
})), fi = ui(), pi = /* @__PURE__ */ d(di());
/* istanbul ignore file */
function mi(e) {
	return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var hi = (e, t, n, r, i, a, o) => {
	let s = r + n.indent, c = n.colors;
	return e.map((e) => {
		let l = t[e], u = o(l, n, s, i, a);
		return typeof l != "string" && (u.indexOf("\n") !== -1 && (u = n.spacingOuter + s + u + n.spacingOuter + r), u = "{" + u + "}"), n.spacingInner + r + c.prop.open + e + c.prop.close + "=" + c.value.open + u + c.value.close;
	}).join("");
}, gi = 3, _i = (e, t, n, r, i, a) => e.map((e) => {
	let o = typeof e == "string" ? yi(e, t) : a(e, t, n, r, i);
	return o === "" && typeof e == "object" && e && e.nodeType !== gi ? "" : t.spacingOuter + n + o;
}).join(""), yi = (e, t) => {
	let n = t.colors.content;
	return n.open + mi(e) + n.close;
}, bi = (e, t) => {
	let n = t.colors.comment;
	return n.open + "<!--" + mi(e) + "-->" + n.close;
}, xi = (e, t, n, r, i) => {
	let a = r.colors.tag;
	return a.open + "<" + e + (t && a.close + t + r.spacingOuter + i + a.open) + (n ? ">" + a.close + n + r.spacingOuter + i + a.open + "</" + e : (t && !r.min ? "" : " ") + "/") + ">" + a.close;
}, Si = (e, t) => {
	let n = t.colors.tag;
	return n.open + "<" + e + n.close + " …" + n.open + " />" + n.close;
}, Ci = 1, wi = 3, Ti = 8, Ei = 11, Di = /^((HTML|SVG)\w*)?Element$/, Oi = (e) => {
	let { tagName: t } = e;
	return !!(typeof t == "string" && t.includes("-") || typeof e.hasAttribute == "function" && e.hasAttribute("is"));
}, ki = (e) => {
	let t = e.constructor.name, { nodeType: n } = e;
	return n === Ci && (Di.test(t) || Oi(e)) || n === wi && t === "Text" || n === Ti && t === "Comment" || n === Ei && t === "DocumentFragment";
};
function Ai(e) {
	return e.nodeType === wi;
}
function ji(e) {
	return e.nodeType === Ti;
}
function Mi(e) {
	return e.nodeType === Ei;
}
function Ni(e) {
	return {
		test: (e) => {
			var t;
			return ((e == null || (t = e.constructor) == null ? void 0 : t.name) || Oi(e)) && ki(e);
		},
		serialize: (t, n, r, i, a, o) => {
			if (Ai(t)) return yi(t.data, n);
			if (ji(t)) return bi(t.data, n);
			let s = Mi(t) ? "DocumentFragment" : t.tagName.toLowerCase();
			return ++i > n.maxDepth ? Si(s, n) : xi(s, hi(Mi(t) ? [] : Array.from(t.attributes).map((e) => e.name).sort(), Mi(t) ? {} : Array.from(t.attributes).reduce((e, t) => (e[t.name] = t.value, e), {}), n, r + n.indent, i, a, o), _i(Array.prototype.slice.call(t.childNodes || t.children).filter(e), n, r + n.indent, i, a, o), n, r);
		}
	};
}
var Pi = null, Fi = null, Ii = null;
try {
	let e = module && module.require;
	Fi = e.call(module, "fs").readFileSync, Ii = e.call(module, "@babel/code-frame").codeFrameColumns, Pi = e.call(module, "picocolors");
} catch {}
function Li(e) {
	let t = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.slice(t, n), i = r.split(":"), [a, o, s] = [
		i[0],
		parseInt(i[1], 10),
		parseInt(i[2], 10)
	], c = "";
	try {
		c = Fi(a, "utf-8");
	} catch {
		return "";
	}
	let l = Ii(c, { start: {
		line: o,
		column: s
	} }, {
		highlightCode: !0,
		linesBelow: 0
	});
	return Pi.dim(r) + "\n" + l + "\n";
}
function Ri() {
	return !Fi || !Ii ? "" : Li((/* @__PURE__ */ Error()).stack.split("\n").slice(1).find((e) => !e.includes("node_modules/")));
}
var zi = 3;
function Bi() {
	// istanbul ignore next
	return typeof jest < "u" && jest !== null ? setTimeout._isMockFunction === !0 || Object.prototype.hasOwnProperty.call(setTimeout, "clock") : !1;
}
function Vi() {
	/* istanbul ignore if */
	if (typeof window > "u") throw Error("Could not find default container");
	return window.document;
}
function Hi(e) {
	if (e.defaultView) return e.defaultView;
	if (e.ownerDocument && e.ownerDocument.defaultView) return e.ownerDocument.defaultView;
	if (e.window) return e.window;
	throw e.ownerDocument && e.ownerDocument.defaultView === null ? Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function" ? Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : Error("The given node is not an Element, the node type is: " + typeof e + ".");
}
function j(e) {
	if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function") throw TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + t(e) + ".");
	function t(e) {
		return typeof e == "object" ? e === null ? "null" : e.constructor.name : typeof e;
	}
}
var M = () => {
	if (typeof process > "u") return !1;
	let e;
	try {
		let t = process.env?.COLORS;
		t && (e = JSON.parse(t));
	} catch {}
	return typeof e == "boolean" ? e : process.versions !== void 0 && process.versions.node !== void 0;
}, { DOMCollection: Ui } = E.plugins, Wi = 1, Gi = 8;
function Ki(e) {
	return e.nodeType !== Gi && (e.nodeType !== Wi || !e.matches(Qi().defaultIgnore));
}
function qi(e, t, n) {
	if (n === void 0 && (n = {}), e ||= Vi().body, typeof t != "number" && (t = typeof process < "u" && process.env !== void 0 && process.env.DEBUG_PRINT_LIMIT || 7e3), t === 0) return "";
	e.documentElement && (e = e.documentElement);
	let r = typeof e;
	if (r === "object" ? r = e.constructor.name : e = {}, !("outerHTML" in e)) throw TypeError("Expected an element or document but got " + r);
	let { filterNode: i = Ki, ...a } = n, o = E.format(e, {
		plugins: [Ni(i), Ui],
		printFunctionName: !1,
		highlight: M(),
		...a
	});
	return t !== void 0 && e.outerHTML.length > t ? o.slice(0, t) + "..." : o;
}
var Ji = function() {
	let e = Ri();
	console.log(e ? qi(...arguments) + "\n\n" + e : qi(...arguments));
}, Yi = {
	testIdAttribute: "data-testid",
	asyncUtilTimeout: 1e3,
	asyncWrapper: (e) => e(),
	unstable_advanceTimersWrapper: (e) => e(),
	eventWrapper: (e) => e(),
	defaultHidden: !1,
	defaultIgnore: "script, style",
	showOriginalStackTrace: !1,
	throwSuggestions: !1,
	getElementError(e, t) {
		let n = qi(t), r = Error([e, "Ignored nodes: comments, " + Yi.defaultIgnore + "\n" + n].filter(Boolean).join("\n\n"));
		return r.name = "TestingLibraryElementError", r;
	},
	_disableExpensiveErrorDiagnostics: !1,
	computedStyleSupportsPseudoElements: !1
};
function Xi(e) {
	try {
		return Yi._disableExpensiveErrorDiagnostics = !0, e();
	} finally {
		Yi._disableExpensiveErrorDiagnostics = !1;
	}
}
function Zi(e) {
	typeof e == "function" && (e = e(Yi)), Yi = {
		...Yi,
		...e
	};
}
function Qi() {
	return Yi;
}
var $i = [
	"button",
	"meter",
	"output",
	"progress",
	"select",
	"textarea",
	"input"
];
function ea(e) {
	return $i.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === zi ? e.textContent : Array.from(e.childNodes).map((e) => ea(e)).join("");
}
function ta(e) {
	let t;
	return t = e.tagName.toLowerCase() === "label" ? ea(e) : e.value || e.textContent, t;
}
function na(e) {
	if (e.labels !== void 0) return e.labels ?? [];
	if (!ra(e)) return [];
	let t = e.ownerDocument.querySelectorAll("label");
	return Array.from(t).filter((t) => t.control === e);
}
function ra(e) {
	return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || e.tagName === "INPUT" && e.getAttribute("type") !== "hidden";
}
function ia(e, t, n) {
	let { selector: r = "*" } = n === void 0 ? {} : n, i = t.getAttribute("aria-labelledby"), a = i ? i.split(" ") : [];
	return a.length ? a.map((t) => {
		let n = e.querySelector("[id=\"" + t + "\"]");
		return n ? {
			content: ta(n),
			formControl: null
		} : {
			content: "",
			formControl: null
		};
	}) : Array.from(na(t)).map((e) => ({
		content: ta(e),
		formControl: Array.from(e.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter((e) => e.matches(r))[0]
	}));
}
function aa(e) {
	if (e == null) throw Error("It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?");
}
function oa(e, t, n, r) {
	if (typeof e != "string") return !1;
	aa(n);
	let i = r(e);
	return typeof n == "string" || typeof n == "number" ? i.toLowerCase().includes(n.toString().toLowerCase()) : typeof n == "function" ? n(i, t) : ua(n, i);
}
function sa(e, t, n, r) {
	if (typeof e != "string") return !1;
	aa(n);
	let i = r(e);
	return n instanceof Function ? n(i, t) : n instanceof RegExp ? ua(n, i) : i === String(n);
}
function ca(e) {
	let { trim: t = !0, collapseWhitespace: n = !0 } = e === void 0 ? {} : e;
	return (e) => {
		let r = e;
		return r = t ? r.trim() : r, r = n ? r.replace(/\s+/g, " ") : r, r;
	};
}
function la(e) {
	let { trim: t, collapseWhitespace: n, normalizer: r } = e;
	if (!r) return ca({
		trim: t,
		collapseWhitespace: n
	});
	if (t !== void 0 || n !== void 0) throw Error("trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use \"getDefaultNormalizer({trim, collapseWhitespace})\" and compose that into your normalizer");
	return r;
}
function ua(e, t) {
	let n = e.test(t);
	return e.global && e.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), n;
}
function da(e) {
	return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((e) => e.nodeType === zi && !!e.textContent).map((e) => e.textContent).join("");
}
var fa = ga(fi.elementRoles);
function pa(e) {
	return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function ma(e, t) {
	t === void 0 && (t = {});
	let { isSubtreeInaccessible: n = pa } = t;
	if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === "hidden") return !0;
	let r = e;
	for (; r;) {
		if (n(r)) return !0;
		r = r.parentElement;
	}
	return !1;
}
function ha(e) {
	for (let { match: t, roles: n } of fa) if (t(e)) return [...n];
	return [];
}
function ga(e) {
	function t(e) {
		let { name: t, attributes: n } = e;
		return "" + t + n.map((e) => {
			let { name: t, value: n, constraints: r = [] } = e, i = r.indexOf("undefined") !== -1, a = r.indexOf("set") !== -1;
			return n === void 0 ? i ? ":not([" + t + "])" : a ? "[" + t + "]:not([" + t + "=\"\"])" : "[" + t + "]" : "[" + t + "=\"" + n + "\"]";
		}).join("");
	}
	function n(e) {
		let { attributes: t = [] } = e;
		return t.length;
	}
	function r(e, t) {
		let { specificity: n } = e, { specificity: r } = t;
		return r - n;
	}
	function i(e) {
		let { attributes: n = [] } = e, r = n.findIndex((e) => e.value && e.name === "type" && e.value === "text");
		r >= 0 && (n = [...n.slice(0, r), ...n.slice(r + 1)]);
		let i = t({
			...e,
			attributes: n
		});
		return (e) => r >= 0 && e.type !== "text" ? !1 : e.matches(i);
	}
	let a = [];
	for (let [t, r] of e.entries()) a = [...a, {
		match: i(t),
		roles: Array.from(r),
		specificity: n(t)
	}];
	return a.sort(r);
}
function _a(e, t) {
	let { hidden: n = !1 } = t === void 0 ? {} : t;
	function r(e) {
		return [e, ...Array.from(e.children).reduce((e, t) => [...e, ...r(t)], [])];
	}
	return r(e).filter((e) => n === !1 ? ma(e) === !1 : !0).reduce((e, t) => {
		let n = [];
		return n = t.hasAttribute("role") ? t.getAttribute("role").split(" ").slice(0, 1) : ha(t), n.reduce((e, n) => Array.isArray(e[n]) ? {
			...e,
			[n]: [...e[n], t]
		} : {
			...e,
			[n]: [t]
		}, e);
	}, {});
}
function va(e, t) {
	let { hidden: n, includeDescription: r } = t, i = _a(e, { hidden: n });
	return Object.entries(i).filter((e) => {
		let [t] = e;
		return t !== "generic";
	}).map((e) => {
		let [t, n] = e, i = "-".repeat(50), a = n.map((e) => {
			let t = "Name \"" + xt(e, { computedStyleSupportsPseudoElements: Qi().computedStyleSupportsPseudoElements }) + "\":\n", n = qi(e.cloneNode(!1));
			if (r) {
				let r = "Description \"" + yt(e, { computedStyleSupportsPseudoElements: Qi().computedStyleSupportsPseudoElements }) + "\":\n";
				return "" + t + r + n;
			}
			return "" + t + n;
		}).join("\n\n");
		return t + ":\n\n" + a + "\n\n" + i;
	}).join("\n");
}
function N(e) {
	return e.tagName === "OPTION" ? e.selected : Ca(e, "aria-selected");
}
function P(e) {
	return e.getAttribute("aria-busy") === "true";
}
function ya(e) {
	if (!("indeterminate" in e && e.indeterminate)) return "checked" in e ? e.checked : Ca(e, "aria-checked");
}
function ba(e) {
	return Ca(e, "aria-pressed");
}
function xa(e) {
	return Ca(e, "aria-current") ?? e.getAttribute("aria-current") ?? !1;
}
function Sa(e) {
	return Ca(e, "aria-expanded");
}
function Ca(e, t) {
	let n = e.getAttribute(t);
	if (n === "true") return !0;
	if (n === "false") return !1;
}
function wa(e) {
	return e.getAttribute("aria-level") && Number(e.getAttribute("aria-level")) || {
		H1: 1,
		H2: 2,
		H3: 3,
		H4: 4,
		H5: 5,
		H6: 6
	}[e.tagName];
}
function Ta(e) {
	let t = e.getAttribute("aria-valuenow");
	return t === null ? void 0 : +t;
}
function Ea(e) {
	let t = e.getAttribute("aria-valuemax");
	return t === null ? void 0 : +t;
}
function Da(e) {
	let t = e.getAttribute("aria-valuemin");
	return t === null ? void 0 : +t;
}
function Oa(e) {
	let t = e.getAttribute("aria-valuetext");
	return t === null ? void 0 : t;
}
var ka = ca();
function Aa(e) {
	return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function ja(e) {
	return new RegExp(Aa(e.toLowerCase()), "i");
}
function Ma(e, t, n, r) {
	let { variant: i, name: a } = r, o = "", s = {}, c = [["Role", "TestId"].includes(e) ? n : ja(n)];
	a && (s.name = ja(a)), e === "Role" && ma(t) && (s.hidden = !0, o = "Element is inaccessible. This means that the element and all its children are invisible to screen readers.\n    If you are using the aria-hidden prop, make sure this is the right choice for your case.\n    "), Object.keys(s).length > 0 && c.push(s);
	let l = i + "By" + e;
	return {
		queryName: e,
		queryMethod: l,
		queryArgs: c,
		variant: i,
		warning: o,
		toString() {
			o && console.warn(o);
			let [e, t] = c;
			return e = typeof e == "string" ? "'" + e + "'" : e, t = t ? ", { " + Object.entries(t).map((e) => {
				let [t, n] = e;
				return t + ": " + n;
			}).join(", ") + " }" : "", l + "(" + e + t + ")";
		}
	};
}
function Na(e, t, n) {
	return n && (!t || t.toLowerCase() === e.toLowerCase());
}
function Pa(e, t, n) {
	if (t === void 0 && (t = "get"), e.matches(Qi().defaultIgnore)) return;
	let r = e.getAttribute("role") ?? ha(e)?.[0];
	if (r !== "generic" && Na("Role", n, r)) return Ma("Role", e, r, {
		variant: t,
		name: xt(e, { computedStyleSupportsPseudoElements: Qi().computedStyleSupportsPseudoElements })
	});
	let i = ia(document, e).map((e) => e.content).join(" ");
	if (Na("LabelText", n, i)) return Ma("LabelText", e, i, { variant: t });
	let a = e.getAttribute("placeholder");
	if (Na("PlaceholderText", n, a)) return Ma("PlaceholderText", e, a, { variant: t });
	let o = ka(da(e));
	if (Na("Text", n, o)) return Ma("Text", e, o, { variant: t });
	if (Na("DisplayValue", n, e.value)) return Ma("DisplayValue", e, ka(e.value), { variant: t });
	let s = e.getAttribute("alt");
	if (Na("AltText", n, s)) return Ma("AltText", e, s, { variant: t });
	let c = e.getAttribute("title");
	if (Na("Title", n, c)) return Ma("Title", e, c, { variant: t });
	let l = e.getAttribute(Qi().testIdAttribute);
	if (Na("TestId", n, l)) return Ma("TestId", e, l, { variant: t });
}
function Fa(e, t) {
	e.stack = t.stack.replace(t.message, e.message);
}
function Ia(e, t) {
	let { container: n = Vi(), timeout: r = Qi().asyncUtilTimeout, showOriginalStackTrace: i = Qi().showOriginalStackTrace, stackTraceError: a, interval: o = 50, onTimeout: s = (e) => (Object.defineProperty(e, "message", { value: Qi().getElementError(e.message, n).message }), e), mutationObserverOptions: c = {
		subtree: !0,
		childList: !0,
		attributes: !0,
		characterData: !0
	} } = t;
	if (typeof e != "function") throw TypeError("Received `callback` arg must be a function");
	return new Promise(async (t, l) => {
		let u, d, f, p = !1, m = "idle", h = setTimeout(b, r), g = Bi();
		if (g) {
			let { unstable_advanceTimersWrapper: e } = Qi();
			for (y(); !p;) {
				if (!Bi()) {
					let e = /* @__PURE__ */ Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
					i || Fa(e, a), l(e);
					return;
				}
				if (await e(async () => {
					jest.advanceTimersByTime(o);
				}), p) break;
				y();
			}
		} else {
			try {
				j(n);
			} catch (e) {
				l(e);
				return;
			}
			d = setInterval(v, o);
			let { MutationObserver: e } = Hi(n);
			f = new e(v), f.observe(n, c), y();
		}
		function _(e, n) {
			p = !0, clearTimeout(h), g || (clearInterval(d), f.disconnect()), e ? l(e) : t(n);
		}
		function v() {
			if (Bi()) {
				let e = /* @__PURE__ */ Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
				return i || Fa(e, a), l(e);
			} else return y();
		}
		function y() {
			if (m !== "pending") try {
				let t = Xi(e);
				typeof t?.then == "function" ? (m = "pending", t.then((e) => {
					m = "resolved", _(null, e);
				}, (e) => {
					m = "rejected", u = e;
				})) : _(null, t);
			} catch (e) {
				u = e;
			}
		}
		function b() {
			let e;
			u ? (e = u, !i && e.name === "TestingLibraryElementError" && Fa(e, a)) : (e = /* @__PURE__ */ Error("Timed out in waitFor."), i || Fa(e, a)), _(s(e), null);
		}
	});
}
function La(e, t) {
	let n = /* @__PURE__ */ Error("STACK_TRACE_MESSAGE");
	return Qi().asyncWrapper(() => Ia(e, {
		stackTraceError: n,
		...t
	}));
}
function Ra(e, t) {
	return Qi().getElementError(e, t);
}
function za(e, t) {
	return Ra(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t);
}
function Ba(e, t, n, r) {
	let { exact: i = !0, collapseWhitespace: a, trim: o, normalizer: s } = r === void 0 ? {} : r, c = i ? sa : oa, l = la({
		collapseWhitespace: a,
		trim: o,
		normalizer: s
	});
	return Array.from(t.querySelectorAll("[" + e + "]")).filter((t) => c(t.getAttribute(e), t, n, l));
}
function Va(e, t) {
	return function(n) {
		var r = [...arguments].slice(1);
		let i = e(n, ...r);
		if (i.length > 1) {
			let e = i.map((e) => Ra(null, e).message).join("\n\n");
			throw za(t(n, ...r) + "\n\nHere are the matching elements:\n\n" + e, n);
		}
		return i[0] || null;
	};
}
function Ha(e, t) {
	return Qi().getElementError("A better query is available, try this:\n" + e.toString() + "\n", t);
}
function Ua(e, t) {
	return function(n) {
		var r = [...arguments].slice(1);
		let i = e(n, ...r);
		if (!i.length) throw Qi().getElementError(t(n, ...r), n);
		return i;
	};
}
function Wa(e) {
	return (t, n, r, i) => La(() => e(t, n, r), {
		container: t,
		...i
	});
}
var Ga = (e, t, n) => function(r) {
	var i = [...arguments].slice(1);
	let a = e(r, ...i), [{ suggest: o = Qi().throwSuggestions } = {}] = i.slice(-1);
	if (a && o) {
		let e = Pa(a, n);
		if (e && !t.endsWith(e.queryName)) throw Ha(e.toString(), r);
	}
	return a;
}, Ka = (e, t, n) => function(r) {
	var i = [...arguments].slice(1);
	let a = e(r, ...i), [{ suggest: o = Qi().throwSuggestions } = {}] = i.slice(-1);
	if (a.length && o) {
		let e = [...new Set(a.map((e) => Pa(e, n)?.toString()))];
		if (e.length === 1 && !t.endsWith(Pa(a[0], n).queryName)) throw Ha(e[0], r);
	}
	return a;
};
function qa(e, t, n) {
	let r = Ga(Va(e, t), e.name, "query"), i = Ua(e, n), a = Va(i, t), o = Ga(a, e.name, "get");
	return [
		r,
		Ka(i, e.name.replace("query", "get"), "getAll"),
		o,
		Wa(Ka(i, e.name, "findAll")),
		Wa(Ga(a, e.name, "find"))
	];
}
function Ja(e) {
	return Array.from(e.querySelectorAll("label,input")).map((e) => ({
		node: e,
		textToMatch: ta(e)
	})).filter((e) => {
		let { textToMatch: t } = e;
		return t !== null;
	});
}
var Ya = function(e, t, n) {
	let { exact: r = !0, trim: i, collapseWhitespace: a, normalizer: o } = n === void 0 ? {} : n, s = r ? sa : oa, c = la({
		collapseWhitespace: a,
		trim: i,
		normalizer: o
	});
	return Ja(e).filter((e) => {
		let { node: n, textToMatch: r } = e;
		return s(r, n, t, c);
	}).map((e) => {
		let { node: t } = e;
		return t;
	});
}, Xa = function(e, t, n) {
	let { selector: r = "*", exact: i = !0, collapseWhitespace: a, trim: o, normalizer: s } = n === void 0 ? {} : n;
	j(e);
	let c = i ? sa : oa, l = la({
		collapseWhitespace: a,
		trim: o,
		normalizer: s
	}), u = Array.from(e.querySelectorAll("*")).filter((e) => na(e).length || e.hasAttribute("aria-labelledby")).reduce((n, i) => {
		let a = ia(e, i, { selector: r });
		a.filter((e) => !!e.formControl).forEach((e) => {
			c(e.content, e.formControl, t, l) && e.formControl && n.push(e.formControl);
		});
		let o = a.filter((e) => !!e.content).map((e) => e.content);
		return c(o.join(" "), i, t, l) && n.push(i), o.length > 1 && o.forEach((e, r) => {
			c(e, i, t, l) && n.push(i);
			let a = [...o];
			a.splice(r, 1), a.length > 1 && c(a.join(" "), i, t, l) && n.push(i);
		}), n;
	}, []).concat(Ba("aria-label", e, t, {
		exact: i,
		normalizer: l
	}));
	return Array.from(new Set(u)).filter((e) => e.matches(r));
}, Za = function(e, t) {
	var n = [...arguments].slice(2);
	let r = Xa(e, t, ...n);
	if (!r.length) {
		let r = Ya(e, t, ...n);
		if (r.length) {
			let n = r.map((t) => Qa(e, t)).filter((e) => !!e);
			throw n.length ? Qi().getElementError(n.map((e) => "Found a label with the text of: " + t + ", however the element associated with this label (<" + e + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + e + " />, you can use aria-label or aria-labelledby instead.").join("\n\n"), e) : Qi().getElementError("Found a label with the text of: " + t + ", however no form control was found associated to that label. Make sure you're using the \"for\" attribute or \"aria-labelledby\" attribute correctly.", e);
		} else throw Qi().getElementError("Unable to find a label with the text of: " + t, e);
	}
	return r;
};
function Qa(e, t) {
	let n = t.getAttribute("for");
	if (!n) return null;
	let r = e.querySelector("[id=\"" + n + "\"]");
	return r ? r.tagName.toLowerCase() : null;
}
var $a = (e, t) => "Found multiple elements with the text of: " + t, eo = Ga(Va(Xa, $a), Xa.name, "query"), to = Va(Za, $a), no = Wa(Ka(Za, Za.name, "findAll")), ro = Wa(Ga(to, Za.name, "find")), io = Ka(Za, Za.name, "getAll"), ao = Ga(to, Za.name, "get"), oo = Ka(Xa, Xa.name, "queryAll"), so = function() {
	var e = [...arguments];
	return j(e[0]), Ba("placeholder", ...e);
}, co = (e, t) => "Found multiple elements with the placeholder text of: " + t, lo = (e, t) => "Unable to find an element with the placeholder text of: " + t, uo = Ka(so, so.name, "queryAll"), [fo, po, mo, ho, go] = qa(so, co, lo), _o = function(e, t, n) {
	let { selector: r = "*", exact: i = !0, collapseWhitespace: a, trim: o, ignore: s = Qi().defaultIgnore, normalizer: c } = n === void 0 ? {} : n;
	j(e);
	let l = i ? sa : oa, u = la({
		collapseWhitespace: a,
		trim: o,
		normalizer: c
	}), d = [];
	return typeof e.matches == "function" && e.matches(r) && (d = [e]), [...d, ...Array.from(e.querySelectorAll(r))].filter((e) => !s || !e.matches(s)).filter((e) => l(da(e), e, t, u));
}, vo = (e, t) => "Found multiple elements with the text: " + t, yo = function(e, t, n) {
	n === void 0 && (n = {});
	let { collapseWhitespace: r, trim: i, normalizer: a, selector: o } = n, s = la({
		collapseWhitespace: r,
		trim: i,
		normalizer: a
	})(t.toString()), c = s !== t.toString(), l = (o ?? "*") !== "*";
	return "Unable to find an element with the text: " + (c ? s + " (normalized from '" + t + "')" : t) + (l ? ", which matches selector '" + o + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, F = Ka(_o, _o.name, "queryAll"), [bo, xo, So, Co, wo] = qa(_o, vo, yo), To = function(e, t, n) {
	let { exact: r = !0, collapseWhitespace: i, trim: a, normalizer: o } = n === void 0 ? {} : n;
	j(e);
	let s = r ? sa : oa, c = la({
		collapseWhitespace: i,
		trim: a,
		normalizer: o
	});
	return Array.from(e.querySelectorAll("input,textarea,select")).filter((e) => e.tagName === "SELECT" ? Array.from(e.options).filter((e) => e.selected).some((e) => s(da(e), e, t, c)) : s(e.value, e, t, c));
}, Eo = (e, t) => "Found multiple elements with the display value: " + t + ".", Do = (e, t) => "Unable to find an element with the display value: " + t + ".", Oo = Ka(To, To.name, "queryAll"), [ko, Ao, jo, Mo, No] = qa(To, Eo, Do), Po = /^(img|input|area|.+-.+)$/i, Fo = function(e, t, n) {
	return n === void 0 && (n = {}), j(e), Ba("alt", e, t, n).filter((e) => Po.test(e.tagName));
}, Io = (e, t) => "Found multiple elements with the alt text: " + t, Lo = (e, t) => "Unable to find an element with the alt text: " + t, Ro = Ka(Fo, Fo.name, "queryAll"), [zo, Bo, Vo, Ho, Uo] = qa(Fo, Io, Lo), Wo = (e) => e.tagName.toLowerCase() === "title" && e.parentElement?.tagName.toLowerCase() === "svg", Go = function(e, t, n) {
	let { exact: r = !0, collapseWhitespace: i, trim: a, normalizer: o } = n === void 0 ? {} : n;
	j(e);
	let s = r ? sa : oa, c = la({
		collapseWhitespace: i,
		trim: a,
		normalizer: o
	});
	return Array.from(e.querySelectorAll("[title], svg > title")).filter((e) => s(e.getAttribute("title"), e, t, c) || Wo(e) && s(da(e), e, t, c));
}, Ko = (e, t) => "Found multiple elements with the title: " + t + ".", qo = (e, t) => "Unable to find an element with the title: " + t + ".", Jo = Ka(Go, Go.name, "queryAll"), [Yo, Xo, Zo, Qo, $o] = qa(Go, Ko, qo), es = function(e, t, n) {
	let { hidden: r = Qi().defaultHidden, name: i, description: a, queryFallbacks: o = !1, selected: s, busy: c, checked: l, pressed: u, current: d, level: f, expanded: p, value: { now: m, min: h, max: g, text: _ } = {} } = n === void 0 ? {} : n;
	if (j(e), s !== void 0 && fi.roles.get(t)?.props["aria-selected"] === void 0) throw Error("\"aria-selected\" is not supported on role \"" + t + "\".");
	if (c !== void 0 && fi.roles.get(t)?.props["aria-busy"] === void 0) throw Error("\"aria-busy\" is not supported on role \"" + t + "\".");
	if (l !== void 0 && fi.roles.get(t)?.props["aria-checked"] === void 0) throw Error("\"aria-checked\" is not supported on role \"" + t + "\".");
	if (u !== void 0 && fi.roles.get(t)?.props["aria-pressed"] === void 0) throw Error("\"aria-pressed\" is not supported on role \"" + t + "\".");
	if (d !== void 0 && fi.roles.get(t)?.props["aria-current"] === void 0) throw Error("\"aria-current\" is not supported on role \"" + t + "\".");
	if (f !== void 0 && t !== "heading") throw Error("Role \"" + t + "\" cannot have \"level\" property.");
	if (m !== void 0 && fi.roles.get(t)?.props["aria-valuenow"] === void 0) throw Error("\"aria-valuenow\" is not supported on role \"" + t + "\".");
	if (g !== void 0 && fi.roles.get(t)?.props["aria-valuemax"] === void 0) throw Error("\"aria-valuemax\" is not supported on role \"" + t + "\".");
	if (h !== void 0 && fi.roles.get(t)?.props["aria-valuemin"] === void 0) throw Error("\"aria-valuemin\" is not supported on role \"" + t + "\".");
	if (_ !== void 0 && fi.roles.get(t)?.props["aria-valuetext"] === void 0) throw Error("\"aria-valuetext\" is not supported on role \"" + t + "\".");
	if (p !== void 0 && fi.roles.get(t)?.props["aria-expanded"] === void 0) throw Error("\"aria-expanded\" is not supported on role \"" + t + "\".");
	let v = /* @__PURE__ */ new WeakMap();
	function y(e) {
		return v.has(e) || v.set(e, pa(e)), v.get(e);
	}
	return Array.from(e.querySelectorAll(ts(t))).filter((e) => {
		if (e.hasAttribute("role")) {
			let n = e.getAttribute("role");
			if (o) return n.split(" ").filter(Boolean).some((e) => e === t);
			let [r] = n.split(" ");
			return r === t;
		}
		return ha(e).some((e) => e === t);
	}).filter((e) => {
		if (s !== void 0) return s === N(e);
		if (c !== void 0) return c === P(e);
		if (l !== void 0) return l === ya(e);
		if (u !== void 0) return u === ba(e);
		if (d !== void 0) return d === xa(e);
		if (p !== void 0) return p === Sa(e);
		if (f !== void 0) return f === wa(e);
		if (m !== void 0 || g !== void 0 || h !== void 0 || _ !== void 0) {
			let t = !0;
			return m !== void 0 && (t &&= m === Ta(e)), g !== void 0 && (t &&= g === Ea(e)), h !== void 0 && (t &&= h === Da(e)), _ !== void 0 && (t &&= sa(Oa(e) ?? null, e, _, (e) => e)), t;
		}
		return !0;
	}).filter((e) => i === void 0 ? !0 : sa(xt(e, { computedStyleSupportsPseudoElements: Qi().computedStyleSupportsPseudoElements }), e, i, (e) => e)).filter((e) => a === void 0 ? !0 : sa(yt(e, { computedStyleSupportsPseudoElements: Qi().computedStyleSupportsPseudoElements }), e, a, (e) => e)).filter((e) => r === !1 ? ma(e, { isSubtreeInaccessible: y }) === !1 : !0);
};
function ts(e) {
	let t = "*[role~=\"" + e + "\"]", n = fi.roleElements.get(e) ?? /* @__PURE__ */ new Set(), r = new Set(Array.from(n).map((e) => {
		let { name: t } = e;
		return t;
	}));
	return [t].concat(Array.from(r)).join(",");
}
var ns = (e) => {
	let t = "";
	return t = e === void 0 ? "" : typeof e == "string" ? " and name \"" + e + "\"" : " and name `" + e + "`", t;
}, rs = function(e, t, n) {
	let { name: r } = n === void 0 ? {} : n;
	return "Found multiple elements with the role \"" + t + "\"" + ns(r);
}, is = function(e, t, n) {
	let { hidden: r = Qi().defaultHidden, name: i, description: a } = n === void 0 ? {} : n;
	if (Qi()._disableExpensiveErrorDiagnostics) return "Unable to find role=\"" + t + "\"" + ns(i);
	let o = "";
	Array.from(e.children).forEach((e) => {
		o += va(e, {
			hidden: r,
			includeDescription: a !== void 0
		});
	});
	let s;
	s = o.length === 0 ? r === !1 ? "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : "There are no available roles." : ("\nHere are the " + (r === !1 ? "accessible" : "available") + " roles:\n\n  " + o.replace(/\n/g, "\n  ").replace(/\n\s\s\n/g, "\n\n") + "\n").trim();
	let c = "";
	c = i === void 0 ? "" : typeof i == "string" ? " and name \"" + i + "\"" : " and name `" + i + "`";
	let l = "";
	return l = a === void 0 ? "" : typeof a == "string" ? " and description \"" + a + "\"" : " and description `" + a + "`", ("\nUnable to find an " + (r === !1 ? "accessible " : "") + "element with the role \"" + t + "\"" + c + l + "\n\n" + s).trim();
}, as = Ka(es, es.name, "queryAll"), [os, ss, cs, ls, us] = qa(es, rs, is), ds = () => Qi().testIdAttribute, fs = function() {
	var e = [...arguments];
	return j(e[0]), Ba(ds(), ...e);
}, ps = (e, t) => "Found multiple elements by: [" + ds() + "=\"" + t + "\"]", ms = (e, t) => "Unable to find an element by: [" + ds() + "=\"" + t + "\"]", hs = Ka(fs, fs.name, "queryAll"), [gs, _s, vs, ys, bs] = qa(fs, ps, ms), xs = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	queryAllByLabelText: oo,
	queryByLabelText: eo,
	getAllByLabelText: io,
	getByLabelText: ao,
	findAllByLabelText: no,
	findByLabelText: ro,
	queryByPlaceholderText: fo,
	queryAllByPlaceholderText: uo,
	getByPlaceholderText: mo,
	getAllByPlaceholderText: po,
	findAllByPlaceholderText: ho,
	findByPlaceholderText: go,
	queryByText: bo,
	queryAllByText: F,
	getByText: So,
	getAllByText: xo,
	findAllByText: Co,
	findByText: wo,
	queryByDisplayValue: ko,
	queryAllByDisplayValue: Oo,
	getByDisplayValue: jo,
	getAllByDisplayValue: Ao,
	findAllByDisplayValue: Mo,
	findByDisplayValue: No,
	queryByAltText: zo,
	queryAllByAltText: Ro,
	getByAltText: Vo,
	getAllByAltText: Bo,
	findAllByAltText: Ho,
	findByAltText: Uo,
	queryByTitle: Yo,
	queryAllByTitle: Jo,
	getByTitle: Zo,
	getAllByTitle: Xo,
	findAllByTitle: Qo,
	findByTitle: $o,
	queryByRole: os,
	queryAllByRole: as,
	getAllByRole: ss,
	getByRole: cs,
	findAllByRole: ls,
	findByRole: us,
	queryByTestId: gs,
	queryAllByTestId: hs,
	getByTestId: vs,
	getAllByTestId: _s,
	findAllByTestId: ys,
	findByTestId: bs
});
function Ss(e, t, n) {
	return t === void 0 && (t = xs), n === void 0 && (n = {}), Object.keys(t).reduce((n, r) => (n[r] = t[r].bind(null, e), n), n);
}
var Cs = {
	copy: {
		EventType: "ClipboardEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	cut: {
		EventType: "ClipboardEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	paste: {
		EventType: "ClipboardEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	compositionEnd: {
		EventType: "CompositionEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	compositionStart: {
		EventType: "CompositionEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	compositionUpdate: {
		EventType: "CompositionEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	keyDown: {
		EventType: "KeyboardEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			charCode: 0,
			composed: !0
		}
	},
	keyPress: {
		EventType: "KeyboardEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			charCode: 0,
			composed: !0
		}
	},
	keyUp: {
		EventType: "KeyboardEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			charCode: 0,
			composed: !0
		}
	},
	focus: {
		EventType: "FocusEvent",
		defaultInit: {
			bubbles: !1,
			cancelable: !1,
			composed: !0
		}
	},
	blur: {
		EventType: "FocusEvent",
		defaultInit: {
			bubbles: !1,
			cancelable: !1,
			composed: !0
		}
	},
	focusIn: {
		EventType: "FocusEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1,
			composed: !0
		}
	},
	focusOut: {
		EventType: "FocusEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1,
			composed: !0
		}
	},
	change: {
		EventType: "Event",
		defaultInit: {
			bubbles: !0,
			cancelable: !1
		}
	},
	input: {
		EventType: "InputEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1,
			composed: !0
		}
	},
	invalid: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !0
		}
	},
	submit: {
		EventType: "Event",
		defaultInit: {
			bubbles: !0,
			cancelable: !0
		}
	},
	reset: {
		EventType: "Event",
		defaultInit: {
			bubbles: !0,
			cancelable: !0
		}
	},
	click: {
		EventType: "MouseEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			button: 0,
			composed: !0
		}
	},
	contextMenu: {
		EventType: "MouseEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	dblClick: {
		EventType: "MouseEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	drag: {
		EventType: "DragEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	dragEnd: {
		EventType: "DragEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1,
			composed: !0
		}
	},
	dragEnter: {
		EventType: "DragEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	dragExit: {
		EventType: "DragEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1,
			composed: !0
		}
	},
	dragLeave: {
		EventType: "DragEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1,
			composed: !0
		}
	},
	dragOver: {
		EventType: "DragEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	dragStart: {
		EventType: "DragEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	drop: {
		EventType: "DragEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	mouseDown: {
		EventType: "MouseEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	mouseEnter: {
		EventType: "MouseEvent",
		defaultInit: {
			bubbles: !1,
			cancelable: !1,
			composed: !0
		}
	},
	mouseLeave: {
		EventType: "MouseEvent",
		defaultInit: {
			bubbles: !1,
			cancelable: !1,
			composed: !0
		}
	},
	mouseMove: {
		EventType: "MouseEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	mouseOut: {
		EventType: "MouseEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	mouseOver: {
		EventType: "MouseEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	mouseUp: {
		EventType: "MouseEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	select: {
		EventType: "Event",
		defaultInit: {
			bubbles: !0,
			cancelable: !1
		}
	},
	touchCancel: {
		EventType: "TouchEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1,
			composed: !0
		}
	},
	touchEnd: {
		EventType: "TouchEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	touchMove: {
		EventType: "TouchEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	touchStart: {
		EventType: "TouchEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	resize: {
		EventType: "UIEvent",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	scroll: {
		EventType: "UIEvent",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	wheel: {
		EventType: "WheelEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	abort: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	canPlay: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	canPlayThrough: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	durationChange: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	emptied: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	encrypted: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	ended: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	loadedData: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	loadedMetadata: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	loadStart: {
		EventType: "ProgressEvent",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	pause: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	play: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	playing: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	progress: {
		EventType: "ProgressEvent",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	rateChange: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	seeked: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	seeking: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	stalled: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	suspend: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	timeUpdate: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	volumeChange: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	waiting: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	load: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	error: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	animationStart: {
		EventType: "AnimationEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1
		}
	},
	animationEnd: {
		EventType: "AnimationEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1
		}
	},
	animationIteration: {
		EventType: "AnimationEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1
		}
	},
	transitionCancel: {
		EventType: "TransitionEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1
		}
	},
	transitionEnd: {
		EventType: "TransitionEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0
		}
	},
	transitionRun: {
		EventType: "TransitionEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1
		}
	},
	transitionStart: {
		EventType: "TransitionEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1
		}
	},
	pointerOver: {
		EventType: "PointerEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	pointerEnter: {
		EventType: "PointerEvent",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	pointerDown: {
		EventType: "PointerEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	pointerMove: {
		EventType: "PointerEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	pointerUp: {
		EventType: "PointerEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	pointerCancel: {
		EventType: "PointerEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1,
			composed: !0
		}
	},
	pointerOut: {
		EventType: "PointerEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0,
			composed: !0
		}
	},
	pointerLeave: {
		EventType: "PointerEvent",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	gotPointerCapture: {
		EventType: "PointerEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1,
			composed: !0
		}
	},
	lostPointerCapture: {
		EventType: "PointerEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1,
			composed: !0
		}
	},
	popState: {
		EventType: "PopStateEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !1
		}
	},
	offline: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	online: {
		EventType: "Event",
		defaultInit: {
			bubbles: !1,
			cancelable: !1
		}
	},
	pageHide: {
		EventType: "PageTransitionEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0
		}
	},
	pageShow: {
		EventType: "PageTransitionEvent",
		defaultInit: {
			bubbles: !0,
			cancelable: !0
		}
	}
}, ws = { doubleClick: "dblClick" };
function Ts(e, t) {
	return Qi().eventWrapper(() => {
		if (!t) throw Error("Unable to fire an event - please provide an event object.");
		if (!e) throw Error("Unable to fire a \"" + t.type + "\" event - please provide a DOM element.");
		return e.dispatchEvent(t);
	});
}
function Es(e, t, n, r) {
	let { EventType: i = "Event", defaultInit: a = {} } = r === void 0 ? {} : r;
	if (!t) throw Error("Unable to fire a \"" + e + "\" event - please provide a DOM element.");
	let o = {
		...a,
		...n
	}, { target: { value: s, files: c, ...l } = {} } = o;
	s !== void 0 && Ds(t, s), c !== void 0 && Object.defineProperty(t, "files", {
		configurable: !0,
		enumerable: !0,
		writable: !0,
		value: c
	}), Object.assign(t, l);
	let u = Hi(t), d = u[i] || u.Event, f;
	/* istanbul ignore else  */
	if (typeof d == "function") f = new d(e, o);
	else {
		f = u.document.createEvent(i);
		let { bubbles: t, cancelable: n, detail: r, ...a } = o;
		f.initEvent(e, t, n, r), Object.keys(a).forEach((e) => {
			f[e] = a[e];
		});
	}
	return ["dataTransfer", "clipboardData"].forEach((e) => {
		let t = o[e];
		typeof t == "object" && (typeof u.DataTransfer == "function" ? Object.defineProperty(f, e, { value: Object.getOwnPropertyNames(t).reduce((e, n) => (Object.defineProperty(e, n, { value: t[n] }), e), new u.DataTransfer()) }) : Object.defineProperty(f, e, { value: t }));
	}), f;
}
Object.keys(Cs).forEach((e) => {
	let { EventType: t, defaultInit: n } = Cs[e], r = e.toLowerCase();
	Es[e] = (e, i) => Es(r, e, i, {
		EventType: t,
		defaultInit: n
	}), Ts[e] = (t, n) => Ts(t, Es[e](t, n));
});
function Ds(e, t) {
	let { set: n } = Object.getOwnPropertyDescriptor(e, "value") || {}, { set: r } = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") || {};
	if (r && n !== r) r.call(e, t);
	else if (n) n.call(e, t);
	else throw Error("The given element does not have a value setter");
}
Object.keys(ws).forEach((e) => {
	let t = ws[e];
	Ts[e] = function() {
		return Ts[t](...arguments);
	};
});
function Os(e) {
	return e.replace(/[ \t]*[\n][ \t]*/g, "\n");
}
function ks(e) {
	return pi.default.compressToEncodedURIComponent(Os(e));
}
function As(e) {
	return "https://testing-playground.com/#markup=" + ks(e);
}
var js = {
	debug: (e, t, n) => Array.isArray(e) ? e.forEach((e) => Ji(e, t, n)) : Ji(e, t, n),
	logTestingPlaygroundURL: function(e) {
		if (e === void 0 && (e = Vi().body), !e || !("innerHTML" in e)) {
			console.log("The element you're providing isn't a valid DOM element.");
			return;
		}
		if (!e.innerHTML) {
			console.log("The provided element doesn't have any children.");
			return;
		}
		let t = As(e.innerHTML);
		return console.log("Open this URL in your browser\n\n" + t), t;
	}
};
typeof document < "u" && document.body ? Ss(document.body, xs, js) : Object.keys(xs).reduce((e, t) => (e[t] = () => {
	throw TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, e), js);
//#endregion
//#region node_modules/@testing-library/react/dist/@testing-library/react.esm.js
var Ms = typeof t.act == "function" ? t.act : fe.act;
function Ns() {
	/* istanbul ignore else */
	if (typeof globalThis < "u") return globalThis;
	/* istanbul ignore next */
	if (typeof self < "u") return self;
	/* istanbul ignore next */
	if (typeof window < "u") return window;
	/* istanbul ignore next */
	if (typeof global < "u") return global;
	/* istanbul ignore next */
	throw Error("unable to locate global object");
}
function Ps(e) {
	Ns().IS_REACT_ACT_ENVIRONMENT = e;
}
function Fs() {
	return Ns().IS_REACT_ACT_ENVIRONMENT;
}
function Is(e) {
	return (t) => {
		let n = Fs();
		Ps(!0);
		try {
			let r = !1, i = e(() => {
				let e = t();
				return typeof e == "object" && e && typeof e.then == "function" && (r = !0), e;
			});
			if (r) {
				let e = i;
				return { then: (t, r) => {
					e.then((e) => {
						Ps(n), t(e);
					}, (e) => {
						Ps(n), r(e);
					});
				} };
			} else return Ps(n), i;
		} catch (e) {
			throw Ps(n), e;
		}
	};
}
var Ls = Is(Ms), Rs = (...e) => Ts(...e);
Object.keys(Ts).forEach((e) => {
	Rs[e] = (...t) => Ts[e](...t);
});
var zs = Rs.mouseEnter, Bs = Rs.mouseLeave;
Rs.mouseEnter = (...e) => (zs(...e), Rs.mouseOver(...e)), Rs.mouseLeave = (...e) => (Bs(...e), Rs.mouseOut(...e));
var Vs = Rs.pointerEnter, Hs = Rs.pointerLeave;
Rs.pointerEnter = (...e) => (Vs(...e), Rs.pointerOver(...e)), Rs.pointerLeave = (...e) => (Hs(...e), Rs.pointerOut(...e));
var Us = Rs.select;
Rs.select = (e, t) => {
	Us(e, t), e.focus(), Rs.keyUp(e, t);
};
var Ws = Rs.blur, Gs = Rs.focus;
Rs.blur = (...e) => (Rs.focusOut(...e), Ws(...e)), Rs.focus = (...e) => (Rs.focusIn(...e), Gs(...e));
var Ks = { reactStrictMode: !1 };
function qs() {
	return {
		...Qi(),
		...Ks
	};
}
function Js() {
	return typeof jest < "u" && jest !== null ? setTimeout._isMockFunction === !0 || Object.prototype.hasOwnProperty.call(setTimeout, "clock") : !1;
}
Zi({
	unstable_advanceTimersWrapper: (e) => Ls(e),
	asyncWrapper: async (e) => {
		let t = Fs();
		Ps(!1);
		try {
			let t = await e();
			return await new Promise((e) => {
				setTimeout(() => {
					e();
				}, 0), Js() && jest.advanceTimersByTime(0);
			}), t;
		} finally {
			Ps(t);
		}
	},
	eventWrapper: (e) => {
		let t;
		return Ls(() => {
			t = e();
		}), t;
	}
});
var Ys = /* @__PURE__ */ new Set(), Xs = [];
function Zs(e, n) {
	return n ?? qs().reactStrictMode ? /* @__PURE__ */ t.createElement(t.StrictMode, null, e) : e;
}
function Qs(e, n) {
	return n ? /* @__PURE__ */ t.createElement(n, null, e) : e;
}
function $s(e, { hydrate: t, onCaughtError: n, onRecoverableError: r, ui: i, wrapper: a, reactStrictMode: o }) {
	let s;
	return t ? Ls(() => {
		s = pe.hydrateRoot(e, Zs(Qs(i, a), o), {
			onCaughtError: n,
			onRecoverableError: r
		});
	}) : s = pe.createRoot(e, {
		onCaughtError: n,
		onRecoverableError: r
	}), {
		hydrate() {
			/* istanbul ignore if */
			if (!t) throw Error("Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.");
		},
		render(e) {
			s.render(e);
		},
		unmount() {
			s.unmount();
		}
	};
}
function ec(e) {
	return {
		hydrate(t) {
			n.hydrate(t, e);
		},
		render(t) {
			n.render(t, e);
		},
		unmount() {
			n.unmountComponentAtNode(e);
		}
	};
}
function tc(e, { baseElement: t, container: n, hydrate: r, queries: i, root: a, wrapper: o, reactStrictMode: s }) {
	return Ls(() => {
		r ? a.hydrate(Zs(Qs(e, o), s), n) : a.render(Zs(Qs(e, o), s), n);
	}), {
		container: n,
		baseElement: t,
		debug: (e = t, n, r) => Array.isArray(e) ? e.forEach((e) => console.log(qi(e, n, r))) : console.log(qi(e, n, r)),
		unmount: () => {
			Ls(() => {
				a.unmount();
			});
		},
		rerender: (e) => {
			tc(e, {
				container: n,
				baseElement: t,
				root: a,
				wrapper: o,
				reactStrictMode: s
			});
		},
		asFragment: () => {
			/* istanbul ignore else (old jsdom limitation) */
			if (typeof document.createRange == "function") return document.createRange().createContextualFragment(n.innerHTML);
			{
				let e = document.createElement("template");
				return e.innerHTML = n.innerHTML, e.content;
			}
		},
		...Ss(t, i)
	};
}
function nc(e, { container: t, baseElement: r = t, legacyRoot: i = !1, onCaughtError: a, onUncaughtError: o, onRecoverableError: s, queries: c, hydrate: l = !1, wrapper: u, reactStrictMode: d } = {}) {
	if (o !== void 0) throw Error("onUncaughtError is not supported. The `render` call will already throw on uncaught errors.");
	if (i && typeof n.render != "function") {
		let e = /* @__PURE__ */ Error("`legacyRoot: true` is not supported in this version of React. If your app runs React 19 or later, you should remove this flag. If your app runs React 18 or earlier, visit https://react.dev/blog/2022/03/08/react-18-upgrade-guide for upgrade instructions.");
		throw Error.captureStackTrace(e, nc), e;
	}
	r ||= document.body, t ||= r.appendChild(document.createElement("div"));
	let f;
	return Ys.has(t) ? Xs.forEach((e) => {
		/* istanbul ignore else */
		e.container === t && (f = e.root);
	}) : (f = (i ? ec : $s)(t, {
		hydrate: l,
		onCaughtError: a,
		onRecoverableError: s,
		ui: e,
		wrapper: u,
		reactStrictMode: d
	}), Xs.push({
		container: t,
		root: f
	}), Ys.add(t)), tc(e, {
		container: t,
		baseElement: r,
		queries: c,
		hydrate: l,
		wrapper: u,
		root: f,
		reactStrictMode: d
	});
}
function rc() {
	Xs.forEach(({ root: e, container: t }) => {
		Ls(() => {
			e.unmount();
		}), t.parentNode === document.body && document.body.removeChild(t);
	}), Xs.length = 0, Ys.clear();
}
function ic(e, r = {}) {
	let { initialProps: i, ...a } = r;
	if (a.legacyRoot && typeof n.render != "function") {
		let e = /* @__PURE__ */ Error("`legacyRoot: true` is not supported in this version of React. If your app runs React 19 or later, you should remove this flag. If your app runs React 18 or earlier, visit https://react.dev/blog/2022/03/08/react-18-upgrade-guide for upgrade instructions.");
		throw Error.captureStackTrace(e, ic), e;
	}
	let o = /* @__PURE__ */ t.createRef();
	function s({ renderCallbackProps: n }) {
		let r = e(n);
		return t.useEffect(() => {
			o.current = r;
		}), null;
	}
	let { rerender: c, unmount: l } = nc(/* @__PURE__ */ t.createElement(s, { renderCallbackProps: i }), a);
	function u(e) {
		return c(/* @__PURE__ */ t.createElement(s, { renderCallbackProps: e }));
	}
	return {
		result: o,
		rerender: u,
		unmount: l
	};
}
if ((typeof process > "u" || !process.env?.RTL_SKIP_AUTO_CLEANUP) && (typeof afterEach == "function" ? afterEach(() => {
	rc();
}) : typeof teardown == "function" && teardown(() => {
	rc();
}), typeof beforeAll == "function" && typeof afterAll == "function")) {
	let e = Fs();
	beforeAll(() => {
		e = Fs(), Ps(!0);
	}), afterAll(() => {
		Ps(e);
	});
}
//#endregion
//#region src/usePrefersReducedMotion.test.ts
describe("usePrefersReducedMotion", () => {
	let t = (e) => ({
		matches: e,
		media: "(prefers-reduced-motion: reduce)",
		onchange: null,
		addListener: vi.fn(),
		removeListener: vi.fn(),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn()
	});
	beforeEach(() => {
		vi.restoreAllMocks();
	}), it("should return false when prefers-reduced-motion is not set", () => {
		window.matchMedia = vi.fn().mockImplementation(() => t(!1));
		let { result: n } = ic(() => e());
		expect(n.current).toBe(!1);
	}), it("should return true when prefers-reduced-motion: reduce is set", () => {
		window.matchMedia = vi.fn().mockImplementation(() => t(!0));
		let { result: n } = ic(() => e());
		expect(n.current).toBe(!0);
	}), it("should update the value when the media query changes", () => {
		let n;
		window.matchMedia = vi.fn().mockImplementation((e) => ({
			matches: !1,
			media: e,
			addEventListener: vi.fn((e, t) => {
				e === "change" && (n = t);
			}),
			removeEventListener: vi.fn()
		}));
		let { result: r } = ic(() => e());
		expect(r.current).toBe(!1), window.matchMedia = vi.fn().mockImplementation(() => t(!0)), Ls(() => {
			n();
		}), expect(r.current).toBe(!0);
	}), it("should clean up the event listener on unmount", () => {
		let t = vi.fn();
		window.matchMedia = vi.fn().mockImplementation(() => ({
			matches: !1,
			addEventListener: vi.fn(),
			removeEventListener: t
		}));
		let { unmount: n } = ic(() => e());
		n(), expect(t).toHaveBeenCalledWith("change", expect.any(Function));
	});
});
//#endregion
