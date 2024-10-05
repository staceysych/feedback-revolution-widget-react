import * as Ne from "react";
import Ld, { createContext as gr, useContext as _e, useRef as ue, useEffect as He, useCallback as ve, useState as rt, useId as $o, useLayoutEffect as Wa, useMemo as Ue, forwardRef as Yi, Component as _m, useInsertionEffect as Nd, Fragment as Wd, createElement as Hd, Children as Ud, isValidElement as Gd, memo as Am, useSyncExternalStore as $m, cloneElement as qd } from "react";
import { createPortal as Yd } from "react-dom";
var Zo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ua = { exports: {} }, Vn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ac;
function Em() {
  if (ac) return Vn;
  ac = 1;
  var e = Ld, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, c) {
    var u, d = {}, f = null, p = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (u in l) n.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (a && a.defaultProps) for (u in l = a.defaultProps, l) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: a, key: f, ref: p, props: d, _owner: o.current };
  }
  return Vn.Fragment = r, Vn.jsx = s, Vn.jsxs = s, Vn;
}
var Fn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lc;
function Rm() {
  return lc || (lc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ld, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function v(m) {
      if (m === null || typeof m != "object")
        return null;
      var A = g && m[g] || m[y];
      return typeof A == "function" ? A : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(m) {
      {
        for (var A = arguments.length, R = new Array(A > 1 ? A - 1 : 0), B = 1; B < A; B++)
          R[B - 1] = arguments[B];
        T("error", m, R);
      }
    }
    function T(m, A, R) {
      {
        var B = w.ReactDebugCurrentFrame, X = B.getStackAddendum();
        X !== "" && (A += "%s", R = R.concat([X]));
        var ie = R.map(function(G) {
          return String(G);
        });
        ie.unshift("Warning: " + A), Function.prototype.apply.call(console[m], console, ie);
      }
    }
    var k = !1, C = !1, $ = !1, E = !1, O = !1, I;
    I = Symbol.for("react.module.reference");
    function M(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === n || m === i || O || m === o || m === c || m === u || E || m === p || k || C || $ || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === d || m.$$typeof === s || m.$$typeof === a || m.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === I || m.getModuleId !== void 0));
    }
    function L(m, A, R) {
      var B = m.displayName;
      if (B)
        return B;
      var X = A.displayName || A.name || "";
      return X !== "" ? R + "(" + X + ")" : R;
    }
    function pe(m) {
      return m.displayName || "Context";
    }
    function q(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case a:
            var A = m;
            return pe(A) + ".Consumer";
          case s:
            var R = m;
            return pe(R._context) + ".Provider";
          case l:
            return L(m, m.render, "ForwardRef");
          case d:
            var B = m.displayName || null;
            return B !== null ? B : q(m.type) || "Memo";
          case f: {
            var X = m, ie = X._payload, G = X._init;
            try {
              return q(G(ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var fe = Object.assign, Te = 0, se, W, le, xe, De, ct, nt;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function Ge() {
      {
        if (Te === 0) {
          se = console.log, W = console.info, le = console.warn, xe = console.error, De = console.group, ct = console.groupCollapsed, nt = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        Te++;
      }
    }
    function Ve() {
      {
        if (Te--, Te === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: fe({}, m, {
              value: se
            }),
            info: fe({}, m, {
              value: W
            }),
            warn: fe({}, m, {
              value: le
            }),
            error: fe({}, m, {
              value: xe
            }),
            group: fe({}, m, {
              value: De
            }),
            groupCollapsed: fe({}, m, {
              value: ct
            }),
            groupEnd: fe({}, m, {
              value: nt
            })
          });
        }
        Te < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Me = w.ReactCurrentDispatcher, Qe;
    function Ce(m, A, R) {
      {
        if (Qe === void 0)
          try {
            throw Error();
          } catch (X) {
            var B = X.stack.trim().match(/\n( *(at )?)/);
            Qe = B && B[1] || "";
          }
        return `
` + Qe + m;
      }
    }
    var $e = !1, qe;
    {
      var ut = typeof WeakMap == "function" ? WeakMap : Map;
      qe = new ut();
    }
    function z(m, A) {
      if (!m || $e)
        return "";
      {
        var R = qe.get(m);
        if (R !== void 0)
          return R;
      }
      var B;
      $e = !0;
      var X = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ie;
      ie = Me.current, Me.current = null, Ge();
      try {
        if (A) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (Ye) {
              B = Ye;
            }
            Reflect.construct(m, [], G);
          } else {
            try {
              G.call();
            } catch (Ye) {
              B = Ye;
            }
            m.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ye) {
            B = Ye;
          }
          m();
        }
      } catch (Ye) {
        if (Ye && B && typeof Ye.stack == "string") {
          for (var H = Ye.stack.split(`
`), Fe = B.stack.split(`
`), Se = H.length - 1, ge = Fe.length - 1; Se >= 1 && ge >= 0 && H[Se] !== Fe[ge]; )
            ge--;
          for (; Se >= 1 && ge >= 0; Se--, ge--)
            if (H[Se] !== Fe[ge]) {
              if (Se !== 1 || ge !== 1)
                do
                  if (Se--, ge--, ge < 0 || H[Se] !== Fe[ge]) {
                    var ot = `
` + H[Se].replace(" at new ", " at ");
                    return m.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", m.displayName)), typeof m == "function" && qe.set(m, ot), ot;
                  }
                while (Se >= 1 && ge >= 0);
              break;
            }
        }
      } finally {
        $e = !1, Me.current = ie, Ve(), Error.prepareStackTrace = X;
      }
      var Bt = m ? m.displayName || m.name : "", jt = Bt ? Ce(Bt) : "";
      return typeof m == "function" && qe.set(m, jt), jt;
    }
    function St(m, A, R) {
      return z(m, !1);
    }
    function wt(m) {
      var A = m.prototype;
      return !!(A && A.isReactComponent);
    }
    function N(m, A, R) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return z(m, wt(m));
      if (typeof m == "string")
        return Ce(m);
      switch (m) {
        case c:
          return Ce("Suspense");
        case u:
          return Ce("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case l:
            return St(m.render);
          case d:
            return N(m.type, A, R);
          case f: {
            var B = m, X = B._payload, ie = B._init;
            try {
              return N(ie(X), A, R);
            } catch {
            }
          }
        }
      return "";
    }
    var Pe = Object.prototype.hasOwnProperty, me = {}, Be = w.ReactDebugCurrentFrame;
    function dt(m) {
      if (m) {
        var A = m._owner, R = N(m.type, m._source, A ? A.type : null);
        Be.setExtraStackFrame(R);
      } else
        Be.setExtraStackFrame(null);
    }
    function je(m, A, R, B, X) {
      {
        var ie = Function.call.bind(Pe);
        for (var G in m)
          if (ie(m, G)) {
            var H = void 0;
            try {
              if (typeof m[G] != "function") {
                var Fe = Error((B || "React class") + ": " + R + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Fe.name = "Invariant Violation", Fe;
              }
              H = m[G](A, G, B, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Se) {
              H = Se;
            }
            H && !(H instanceof Error) && (dt(X), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", R, G, typeof H), dt(null)), H instanceof Error && !(H.message in me) && (me[H.message] = !0, dt(X), S("Failed %s type: %s", R, H.message), dt(null));
          }
      }
    }
    var Tt = Array.isArray;
    function Ct(m) {
      return Tt(m);
    }
    function ft(m) {
      {
        var A = typeof Symbol == "function" && Symbol.toStringTag, R = A && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return R;
      }
    }
    function br(m) {
      try {
        return vr(m), !1;
      } catch {
        return !0;
      }
    }
    function vr(m) {
      return "" + m;
    }
    function zr(m) {
      if (br(m))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ft(m)), vr(m);
    }
    var Nt = w.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rn, Mn, Kr;
    Kr = {};
    function Lo(m) {
      if (Pe.call(m, "ref")) {
        var A = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function fs(m) {
      if (Pe.call(m, "key")) {
        var A = Object.getOwnPropertyDescriptor(m, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function hs(m, A) {
      if (typeof m.ref == "string" && Nt.current && A && Nt.current.stateNode !== A) {
        var R = q(Nt.current.type);
        Kr[R] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(Nt.current.type), m.ref), Kr[R] = !0);
      }
    }
    function nr(m, A) {
      {
        var R = function() {
          Rn || (Rn = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        R.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function Xr(m, A) {
      {
        var R = function() {
          Mn || (Mn = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        R.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var ps = function(m, A, R, B, X, ie, G) {
      var H = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: A,
        ref: R,
        props: G,
        // Record the component responsible for creating this element.
        _owner: ie
      };
      return H._store = {}, Object.defineProperty(H._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(H, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.defineProperty(H, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.freeze && (Object.freeze(H.props), Object.freeze(H)), H;
    };
    function No(m, A, R, B, X) {
      {
        var ie, G = {}, H = null, Fe = null;
        R !== void 0 && (zr(R), H = "" + R), fs(A) && (zr(A.key), H = "" + A.key), Lo(A) && (Fe = A.ref, hs(A, X));
        for (ie in A)
          Pe.call(A, ie) && !rr.hasOwnProperty(ie) && (G[ie] = A[ie]);
        if (m && m.defaultProps) {
          var Se = m.defaultProps;
          for (ie in Se)
            G[ie] === void 0 && (G[ie] = Se[ie]);
        }
        if (H || Fe) {
          var ge = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          H && nr(G, ge), Fe && Xr(G, ge);
        }
        return ps(m, H, Fe, X, B, Nt.current, G);
      }
    }
    var On = w.ReactCurrentOwner, zn = w.ReactDebugCurrentFrame;
    function Pt(m) {
      if (m) {
        var A = m._owner, R = N(m.type, m._source, A ? A.type : null);
        zn.setExtraStackFrame(R);
      } else
        zn.setExtraStackFrame(null);
    }
    var Dn;
    Dn = !1;
    function Dt(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function Wo() {
      {
        if (On.current) {
          var m = q(On.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function ms(m) {
      return "";
    }
    var Ho = {};
    function gs(m) {
      {
        var A = Wo();
        if (!A) {
          var R = typeof m == "string" ? m : m.displayName || m.name;
          R && (A = `

Check the top-level render call using <` + R + ">.");
        }
        return A;
      }
    }
    function Uo(m, A) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var R = gs(A);
        if (Ho[R])
          return;
        Ho[R] = !0;
        var B = "";
        m && m._owner && m._owner !== On.current && (B = " It was passed a child from " + q(m._owner.type) + "."), Pt(m), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, B), Pt(null);
      }
    }
    function kt(m, A) {
      {
        if (typeof m != "object")
          return;
        if (Ct(m))
          for (var R = 0; R < m.length; R++) {
            var B = m[R];
            Dt(B) && Uo(B, A);
          }
        else if (Dt(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var X = v(m);
          if (typeof X == "function" && X !== m.entries)
            for (var ie = X.call(m), G; !(G = ie.next()).done; )
              Dt(G.value) && Uo(G.value, A);
        }
      }
    }
    function ys(m) {
      {
        var A = m.type;
        if (A == null || typeof A == "string")
          return;
        var R;
        if (typeof A == "function")
          R = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === d))
          R = A.propTypes;
        else
          return;
        if (R) {
          var B = q(A);
          je(R, m.props, "prop", B, m);
        } else if (A.PropTypes !== void 0 && !Dn) {
          Dn = !0;
          var X = q(A);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
        }
        typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bs(m) {
      {
        for (var A = Object.keys(m.props), R = 0; R < A.length; R++) {
          var B = A[R];
          if (B !== "children" && B !== "key") {
            Pt(m), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), Pt(null);
            break;
          }
        }
        m.ref !== null && (Pt(m), S("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var Go = {};
    function qo(m, A, R, B, X, ie) {
      {
        var G = M(m);
        if (!G) {
          var H = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (H += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fe = ms();
          Fe ? H += Fe : H += Wo();
          var Se;
          m === null ? Se = "null" : Ct(m) ? Se = "array" : m !== void 0 && m.$$typeof === t ? (Se = "<" + (q(m.type) || "Unknown") + " />", H = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof m, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, H);
        }
        var ge = No(m, A, R, X, ie);
        if (ge == null)
          return ge;
        if (G) {
          var ot = A.children;
          if (ot !== void 0)
            if (B)
              if (Ct(ot)) {
                for (var Bt = 0; Bt < ot.length; Bt++)
                  kt(ot[Bt], m);
                Object.freeze && Object.freeze(ot);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              kt(ot, m);
        }
        if (Pe.call(A, "key")) {
          var jt = q(m), Ye = Object.keys(A).filter(function(ws) {
            return ws !== "key";
          }), Sr = Ye.length > 0 ? "{key: someKey, " + Ye.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Go[jt + Sr]) {
            var Yo = Ye.length > 0 ? "{" + Ye.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Sr, jt, Yo, jt), Go[jt + Sr] = !0;
          }
        }
        return m === n ? bs(ge) : ys(ge), ge;
      }
    }
    function vs(m, A, R) {
      return qo(m, A, R, !0);
    }
    function xr(m, A, R) {
      return qo(m, A, R, !1);
    }
    var xs = xr, Ss = vs;
    Fn.Fragment = n, Fn.jsx = xs, Fn.jsxs = Ss;
  }()), Fn;
}
process.env.NODE_ENV === "production" ? ua.exports = Em() : ua.exports = Rm();
var _ = ua.exports;
function Ha(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function Mm() {
  return !!(globalThis != null && globalThis.document);
}
function Xd(e) {
  return e.parentElement && Xd(e.parentElement) ? !0 : e.hidden;
}
function Om(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function zm(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Dm(e) {
  var t;
  return ((t = Zd(e)) == null ? void 0 : t.defaultView) ?? window;
}
function Zd(e) {
  return Ha(e) ? e.ownerDocument : document;
}
function Bm(e) {
  return Zd(e).activeElement;
}
function jm(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
const cc = (e) => e ? "" : void 0;
function fi(e) {
  return Array.isArray(e);
}
function pt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !fi(e);
}
function Vm(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Fm(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function da(e) {
  if (e == null)
    return e;
  const { unitless: t } = Fm(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
const Jd = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Ua = (e) => Object.fromEntries(Object.entries(e).sort(Jd));
function uc(e) {
  const t = Ua(e);
  return Object.assign(Object.values(t), t);
}
function Im(e) {
  const t = Object.keys(Ua(e));
  return new Set(t);
}
function dc(e) {
  if (!e)
    return e;
  e = da(e) ?? e;
  const t = -0.02;
  return typeof e == "number" ? `${e + t}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + t}`);
}
function Gn(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${da(e)})`), t && r.push("and", `(max-width: ${da(t)})`), r.join(" ");
}
function Lm(e) {
  if (!e)
    return null;
  e.base = e.base ?? "0px";
  const t = uc(e), r = Object.entries(e).sort(Jd).map(([i, s], a, l) => {
    let [, c] = l[a + 1] ?? [];
    return c = parseFloat(c) > 0 ? dc(c) : void 0, {
      _minW: dc(s),
      breakpoint: i,
      minW: s,
      maxW: c,
      maxWQuery: Gn(null, c),
      minWQuery: Gn(s),
      minMaxQuery: Gn(s, c)
    };
  }), n = Im(e), o = Array.from(n.values());
  return {
    keys: n,
    normalized: t,
    isResponsive(i) {
      const s = Object.keys(i);
      return s.length > 0 && s.every((a) => n.has(a));
    },
    asObject: Ua(e),
    asArray: uc(e),
    details: r,
    get(i) {
      return r.find((s) => s.breakpoint === i);
    },
    media: [
      null,
      ...t.map((i) => Gn(i)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(i) {
      if (!pt(i))
        throw new Error("toArrayValue: value must be an object");
      const s = o.map((a) => i[a] ?? null);
      for (; Vm(s) === null; )
        s.pop();
      return s;
    },
    /**
     * Converts the array responsive syntax to object syntax
     *
     * @example
     * toObjectValue([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
     */
    toObjectValue(i) {
      if (!Array.isArray(i))
        throw new Error("toObjectValue: value must be an array");
      return i.reduce(
        (s, a, l) => {
          const c = o[l];
          return c != null && a != null && (s[c] = a), s;
        },
        {}
      );
    }
  };
}
function Nm(...e) {
  return function(...r) {
    e.forEach((n) => n == null ? void 0 : n(...r));
  };
}
function Wt(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function Ga(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function Wm(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function yr(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: i,
    defaultValue: s
  } = e, a = gr(s);
  a.displayName = t;
  function l() {
    var u;
    const c = _e(a);
    if (!c && r) {
      const d = new Error(
        i ?? Wm(n, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [a.Provider, l, a];
}
const vt = (...e) => e.filter(Boolean).join(" "), Qd = (e) => e.hasAttribute("tabindex"), Hm = (e) => Qd(e) && e.tabIndex === -1;
function ef(e) {
  if (!Ha(e) || Xd(e) || zm(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : Om(e) ? !0 : Qd(e);
}
function Um(e) {
  return e ? Ha(e) && ef(e) && !Hm(e) : !1;
}
const Gm = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
], qm = Gm.join(), Ym = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function Km(e) {
  const t = Array.from(
    e.querySelectorAll(qm)
  );
  return t.unshift(e), t.filter((r) => ef(r) && Ym(r));
}
function Xm(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
const Zm = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, s) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const a = t.get(n);
    if (a.has(o))
      return a.get(o);
    const l = e(n, o, i, s);
    return a.set(o, l), l;
  };
}, tf = Zm(Xm), Jm = (e) => e.default || e;
function Qm(e) {
  const { wasSelected: t, enabled: r, isSelected: n, mode: o = "unmount" } = e;
  return !!(!r || n || o === "keepMounted" && t);
}
function rf(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function eg(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
const tg = (e) => typeof e == "function";
function Lt(e, ...t) {
  return tg(e) ? e(...t) : e;
}
function rg(e, ...t) {
  const r = Object.getOwnPropertyDescriptors(e), n = Object.keys(r), o = (s) => {
    const a = {};
    for (let l = 0; l < s.length; l++) {
      const c = s[l];
      r[c] && (Object.defineProperty(a, c, r[c]), delete r[c]);
    }
    return a;
  }, i = (s) => o(Array.isArray(s) ? s : n.filter(s));
  return t.map(i).concat(o(n));
}
function fc(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(s, a = []) {
    if (pt(s) || Array.isArray(s)) {
      const l = {};
      for (const [c, u] of Object.entries(s)) {
        const d = (o == null ? void 0 : o(c)) ?? c, f = [...a, d];
        if (n != null && n(s, f))
          return t(s, a);
        l[d] = i(u, f);
      }
      return l;
    }
    return t(s, a);
  }
  return i(e);
}
var Ri = { exports: {} };
Ri.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, s = 9007199254740991, a = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", y = "[object Map]", v = "[object Number]", w = "[object Null]", S = "[object Object]", T = "[object Proxy]", k = "[object RegExp]", C = "[object Set]", $ = "[object String]", E = "[object Undefined]", O = "[object WeakMap]", I = "[object ArrayBuffer]", M = "[object DataView]", L = "[object Float32Array]", pe = "[object Float64Array]", q = "[object Int8Array]", fe = "[object Int16Array]", Te = "[object Int32Array]", se = "[object Uint8Array]", W = "[object Uint8ClampedArray]", le = "[object Uint16Array]", xe = "[object Uint32Array]", De = /[\\^$.*+?()[\]{}|]/g, ct = /^\[object .+?Constructor\]$/, nt = /^(?:0|[1-9]\d*)$/, U = {};
  U[L] = U[pe] = U[q] = U[fe] = U[Te] = U[se] = U[W] = U[le] = U[xe] = !0, U[a] = U[l] = U[I] = U[u] = U[M] = U[d] = U[f] = U[p] = U[y] = U[v] = U[S] = U[k] = U[C] = U[$] = U[O] = !1;
  var Ge = typeof Zo == "object" && Zo && Zo.Object === Object && Zo, Ve = typeof self == "object" && self && self.Object === Object && self, Me = Ge || Ve || Function("return this")(), Qe = t && !t.nodeType && t, Ce = Qe && !0 && e && !e.nodeType && e, $e = Ce && Ce.exports === Qe, qe = $e && Ge.process, ut = function() {
    try {
      var h = Ce && Ce.require && Ce.require("util").types;
      return h || qe && qe.binding && qe.binding("util");
    } catch {
    }
  }(), z = ut && ut.isTypedArray;
  function St(h, x, P) {
    switch (P.length) {
      case 0:
        return h.call(x);
      case 1:
        return h.call(x, P[0]);
      case 2:
        return h.call(x, P[0], P[1]);
      case 3:
        return h.call(x, P[0], P[1], P[2]);
    }
    return h.apply(x, P);
  }
  function wt(h, x) {
    for (var P = -1, D = Array(h); ++P < h; )
      D[P] = x(P);
    return D;
  }
  function N(h) {
    return function(x) {
      return h(x);
    };
  }
  function Pe(h, x) {
    return h == null ? void 0 : h[x];
  }
  function me(h, x) {
    return function(P) {
      return h(x(P));
    };
  }
  var Be = Array.prototype, dt = Function.prototype, je = Object.prototype, Tt = Me["__core-js_shared__"], Ct = dt.toString, ft = je.hasOwnProperty, br = function() {
    var h = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
    return h ? "Symbol(src)_1." + h : "";
  }(), vr = je.toString, zr = Ct.call(Object), Nt = RegExp(
    "^" + Ct.call(ft).replace(De, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), rr = $e ? Me.Buffer : void 0, Rn = Me.Symbol, Mn = Me.Uint8Array;
  rr && rr.allocUnsafe;
  var Kr = me(Object.getPrototypeOf, Object), Lo = Object.create, fs = je.propertyIsEnumerable, hs = Be.splice, nr = Rn ? Rn.toStringTag : void 0, Xr = function() {
    try {
      var h = Ts(Object, "defineProperty");
      return h({}, "", {}), h;
    } catch {
    }
  }(), ps = rr ? rr.isBuffer : void 0, No = Math.max, On = Date.now, zn = Ts(Me, "Map"), Pt = Ts(Object, "create"), Dn = /* @__PURE__ */ function() {
    function h() {
    }
    return function(x) {
      if (!Dr(x))
        return {};
      if (Lo)
        return Lo(x);
      h.prototype = x;
      var P = new h();
      return h.prototype = void 0, P;
    };
  }();
  function Dt(h) {
    var x = -1, P = h == null ? 0 : h.length;
    for (this.clear(); ++x < P; ) {
      var D = h[x];
      this.set(D[0], D[1]);
    }
  }
  function Wo() {
    this.__data__ = Pt ? Pt(null) : {}, this.size = 0;
  }
  function ms(h) {
    var x = this.has(h) && delete this.__data__[h];
    return this.size -= x ? 1 : 0, x;
  }
  function Ho(h) {
    var x = this.__data__;
    if (Pt) {
      var P = x[h];
      return P === n ? void 0 : P;
    }
    return ft.call(x, h) ? x[h] : void 0;
  }
  function gs(h) {
    var x = this.__data__;
    return Pt ? x[h] !== void 0 : ft.call(x, h);
  }
  function Uo(h, x) {
    var P = this.__data__;
    return this.size += this.has(h) ? 0 : 1, P[h] = Pt && x === void 0 ? n : x, this;
  }
  Dt.prototype.clear = Wo, Dt.prototype.delete = ms, Dt.prototype.get = Ho, Dt.prototype.has = gs, Dt.prototype.set = Uo;
  function kt(h) {
    var x = -1, P = h == null ? 0 : h.length;
    for (this.clear(); ++x < P; ) {
      var D = h[x];
      this.set(D[0], D[1]);
    }
  }
  function ys() {
    this.__data__ = [], this.size = 0;
  }
  function bs(h) {
    var x = this.__data__, P = Bt(x, h);
    if (P < 0)
      return !1;
    var D = x.length - 1;
    return P == D ? x.pop() : hs.call(x, P, 1), --this.size, !0;
  }
  function Go(h) {
    var x = this.__data__, P = Bt(x, h);
    return P < 0 ? void 0 : x[P][1];
  }
  function qo(h) {
    return Bt(this.__data__, h) > -1;
  }
  function vs(h, x) {
    var P = this.__data__, D = Bt(P, h);
    return D < 0 ? (++this.size, P.push([h, x])) : P[D][1] = x, this;
  }
  kt.prototype.clear = ys, kt.prototype.delete = bs, kt.prototype.get = Go, kt.prototype.has = qo, kt.prototype.set = vs;
  function xr(h) {
    var x = -1, P = h == null ? 0 : h.length;
    for (this.clear(); ++x < P; ) {
      var D = h[x];
      this.set(D[0], D[1]);
    }
  }
  function xs() {
    this.size = 0, this.__data__ = {
      hash: new Dt(),
      map: new (zn || kt)(),
      string: new Dt()
    };
  }
  function Ss(h) {
    var x = Ko(this, h).delete(h);
    return this.size -= x ? 1 : 0, x;
  }
  function m(h) {
    return Ko(this, h).get(h);
  }
  function A(h) {
    return Ko(this, h).has(h);
  }
  function R(h, x) {
    var P = Ko(this, h), D = P.size;
    return P.set(h, x), this.size += P.size == D ? 0 : 1, this;
  }
  xr.prototype.clear = xs, xr.prototype.delete = Ss, xr.prototype.get = m, xr.prototype.has = A, xr.prototype.set = R;
  function B(h) {
    var x = this.__data__ = new kt(h);
    this.size = x.size;
  }
  function X() {
    this.__data__ = new kt(), this.size = 0;
  }
  function ie(h) {
    var x = this.__data__, P = x.delete(h);
    return this.size = x.size, P;
  }
  function G(h) {
    return this.__data__.get(h);
  }
  function H(h) {
    return this.__data__.has(h);
  }
  function Fe(h, x) {
    var P = this.__data__;
    if (P instanceof kt) {
      var D = P.__data__;
      if (!zn || D.length < r - 1)
        return D.push([h, x]), this.size = ++P.size, this;
      P = this.__data__ = new xr(D);
    }
    return P.set(h, x), this.size = P.size, this;
  }
  B.prototype.clear = X, B.prototype.delete = ie, B.prototype.get = G, B.prototype.has = H, B.prototype.set = Fe;
  function Se(h, x) {
    var P = ks(h), D = !P && Ps(h), K = !P && !D && tc(h), ce = !P && !D && !K && nc(h), ye = P || D || K || ce, Z = ye ? wt(h.length, String) : [], be = Z.length;
    for (var Vt in h)
      ye && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Vt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      K && (Vt == "offset" || Vt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ce && (Vt == "buffer" || Vt == "byteLength" || Vt == "byteOffset") || // Skip index properties.
      Ql(Vt, be)) || Z.push(Vt);
    return Z;
  }
  function ge(h, x, P) {
    (P !== void 0 && !Xo(h[x], P) || P === void 0 && !(x in h)) && jt(h, x, P);
  }
  function ot(h, x, P) {
    var D = h[x];
    (!(ft.call(h, x) && Xo(D, P)) || P === void 0 && !(x in h)) && jt(h, x, P);
  }
  function Bt(h, x) {
    for (var P = h.length; P--; )
      if (Xo(h[P][0], x))
        return P;
    return -1;
  }
  function jt(h, x, P) {
    x == "__proto__" && Xr ? Xr(h, x, {
      configurable: !0,
      enumerable: !0,
      value: P,
      writable: !0
    }) : h[x] = P;
  }
  var Ye = cm();
  function Sr(h) {
    return h == null ? h === void 0 ? E : w : nr && nr in Object(h) ? um(h) : gm(h);
  }
  function Yo(h) {
    return Bn(h) && Sr(h) == a;
  }
  function ws(h) {
    if (!Dr(h) || pm(h))
      return !1;
    var x = As(h) ? Nt : ct;
    return x.test(xm(h));
  }
  function Jp(h) {
    return Bn(h) && rc(h.length) && !!U[Sr(h)];
  }
  function Qp(h) {
    if (!Dr(h))
      return mm(h);
    var x = ec(h), P = [];
    for (var D in h)
      D == "constructor" && (x || !ft.call(h, D)) || P.push(D);
    return P;
  }
  function Jl(h, x, P, D, K) {
    h !== x && Ye(x, function(ce, ye) {
      if (K || (K = new B()), Dr(ce))
        em(h, x, ye, P, Jl, D, K);
      else {
        var Z = D ? D(Cs(h, ye), ce, ye + "", h, x, K) : void 0;
        Z === void 0 && (Z = ce), ge(h, ye, Z);
      }
    }, oc);
  }
  function em(h, x, P, D, K, ce, ye) {
    var Z = Cs(h, P), be = Cs(x, P), Vt = ye.get(be);
    if (Vt) {
      ge(h, P, Vt);
      return;
    }
    var ht = ce ? ce(Z, be, P + "", h, x, ye) : void 0, jn = ht === void 0;
    if (jn) {
      var $s = ks(be), Es = !$s && tc(be), sc = !$s && !Es && nc(be);
      ht = be, $s || Es || sc ? ks(Z) ? ht = Z : Sm(Z) ? ht = sm(Z) : Es ? (jn = !1, ht = nm(be)) : sc ? (jn = !1, ht = im(be)) : ht = [] : wm(be) || Ps(be) ? (ht = Z, Ps(Z) ? ht = Tm(Z) : (!Dr(Z) || As(Z)) && (ht = dm(be))) : jn = !1;
    }
    jn && (ye.set(be, ht), K(ht, be, D, ce, ye), ye.delete(be)), ge(h, P, ht);
  }
  function tm(h, x) {
    return bm(ym(h, x, ic), h + "");
  }
  var rm = Xr ? function(h, x) {
    return Xr(h, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Pm(x),
      writable: !0
    });
  } : ic;
  function nm(h, x) {
    return h.slice();
  }
  function om(h) {
    var x = new h.constructor(h.byteLength);
    return new Mn(x).set(new Mn(h)), x;
  }
  function im(h, x) {
    var P = om(h.buffer);
    return new h.constructor(P, h.byteOffset, h.length);
  }
  function sm(h, x) {
    var P = -1, D = h.length;
    for (x || (x = Array(D)); ++P < D; )
      x[P] = h[P];
    return x;
  }
  function am(h, x, P, D) {
    var K = !P;
    P || (P = {});
    for (var ce = -1, ye = x.length; ++ce < ye; ) {
      var Z = x[ce], be = void 0;
      be === void 0 && (be = h[Z]), K ? jt(P, Z, be) : ot(P, Z, be);
    }
    return P;
  }
  function lm(h) {
    return tm(function(x, P) {
      var D = -1, K = P.length, ce = K > 1 ? P[K - 1] : void 0, ye = K > 2 ? P[2] : void 0;
      for (ce = h.length > 3 && typeof ce == "function" ? (K--, ce) : void 0, ye && fm(P[0], P[1], ye) && (ce = K < 3 ? void 0 : ce, K = 1), x = Object(x); ++D < K; ) {
        var Z = P[D];
        Z && h(x, Z, D, ce);
      }
      return x;
    });
  }
  function cm(h) {
    return function(x, P, D) {
      for (var K = -1, ce = Object(x), ye = D(x), Z = ye.length; Z--; ) {
        var be = ye[++K];
        if (P(ce[be], be, ce) === !1)
          break;
      }
      return x;
    };
  }
  function Ko(h, x) {
    var P = h.__data__;
    return hm(x) ? P[typeof x == "string" ? "string" : "hash"] : P.map;
  }
  function Ts(h, x) {
    var P = Pe(h, x);
    return ws(P) ? P : void 0;
  }
  function um(h) {
    var x = ft.call(h, nr), P = h[nr];
    try {
      h[nr] = void 0;
      var D = !0;
    } catch {
    }
    var K = vr.call(h);
    return D && (x ? h[nr] = P : delete h[nr]), K;
  }
  function dm(h) {
    return typeof h.constructor == "function" && !ec(h) ? Dn(Kr(h)) : {};
  }
  function Ql(h, x) {
    var P = typeof h;
    return x = x ?? s, !!x && (P == "number" || P != "symbol" && nt.test(h)) && h > -1 && h % 1 == 0 && h < x;
  }
  function fm(h, x, P) {
    if (!Dr(P))
      return !1;
    var D = typeof x;
    return (D == "number" ? _s(P) && Ql(x, P.length) : D == "string" && x in P) ? Xo(P[x], h) : !1;
  }
  function hm(h) {
    var x = typeof h;
    return x == "string" || x == "number" || x == "symbol" || x == "boolean" ? h !== "__proto__" : h === null;
  }
  function pm(h) {
    return !!br && br in h;
  }
  function ec(h) {
    var x = h && h.constructor, P = typeof x == "function" && x.prototype || je;
    return h === P;
  }
  function mm(h) {
    var x = [];
    if (h != null)
      for (var P in Object(h))
        x.push(P);
    return x;
  }
  function gm(h) {
    return vr.call(h);
  }
  function ym(h, x, P) {
    return x = No(x === void 0 ? h.length - 1 : x, 0), function() {
      for (var D = arguments, K = -1, ce = No(D.length - x, 0), ye = Array(ce); ++K < ce; )
        ye[K] = D[x + K];
      K = -1;
      for (var Z = Array(x + 1); ++K < x; )
        Z[K] = D[K];
      return Z[x] = P(ye), St(h, this, Z);
    };
  }
  function Cs(h, x) {
    if (!(x === "constructor" && typeof h[x] == "function") && x != "__proto__")
      return h[x];
  }
  var bm = vm(rm);
  function vm(h) {
    var x = 0, P = 0;
    return function() {
      var D = On(), K = i - (D - P);
      if (P = D, K > 0) {
        if (++x >= o)
          return arguments[0];
      } else
        x = 0;
      return h.apply(void 0, arguments);
    };
  }
  function xm(h) {
    if (h != null) {
      try {
        return Ct.call(h);
      } catch {
      }
      try {
        return h + "";
      } catch {
      }
    }
    return "";
  }
  function Xo(h, x) {
    return h === x || h !== h && x !== x;
  }
  var Ps = Yo(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Yo : function(h) {
    return Bn(h) && ft.call(h, "callee") && !fs.call(h, "callee");
  }, ks = Array.isArray;
  function _s(h) {
    return h != null && rc(h.length) && !As(h);
  }
  function Sm(h) {
    return Bn(h) && _s(h);
  }
  var tc = ps || km;
  function As(h) {
    if (!Dr(h))
      return !1;
    var x = Sr(h);
    return x == p || x == g || x == c || x == T;
  }
  function rc(h) {
    return typeof h == "number" && h > -1 && h % 1 == 0 && h <= s;
  }
  function Dr(h) {
    var x = typeof h;
    return h != null && (x == "object" || x == "function");
  }
  function Bn(h) {
    return h != null && typeof h == "object";
  }
  function wm(h) {
    if (!Bn(h) || Sr(h) != S)
      return !1;
    var x = Kr(h);
    if (x === null)
      return !0;
    var P = ft.call(x, "constructor") && x.constructor;
    return typeof P == "function" && P instanceof P && Ct.call(P) == zr;
  }
  var nc = z ? N(z) : Jp;
  function Tm(h) {
    return am(h, oc(h));
  }
  function oc(h) {
    return _s(h) ? Se(h) : Qp(h);
  }
  var Cm = lm(function(h, x, P, D) {
    Jl(h, x, P, D);
  });
  function Pm(h) {
    return function() {
      return h;
    };
  }
  function ic(h) {
    return h;
  }
  function km() {
    return !1;
  }
  e.exports = Cm;
})(Ri, Ri.exports);
var ng = Ri.exports;
const Rt = /* @__PURE__ */ Kd(ng);
function Mi(e, t = []) {
  const r = ue(e);
  return He(() => {
    r.current = e;
  }), ve((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function qa(e, t, r, n) {
  const o = Mi(r);
  return He(() => {
    const i = typeof e == "function" ? e() : e ?? document;
    if (!(!r || !i))
      return i.addEventListener(t, o, n), () => {
        i.removeEventListener(t, o, n);
      };
  }, [t, e, n, o, r]), () => {
    const i = typeof e == "function" ? e() : e ?? document;
    i == null || i.removeEventListener(t, o, n);
  };
}
function og(e) {
  const { isOpen: t, ref: r } = e, [n, o] = rt(t), [i, s] = rt(!1);
  return He(() => {
    i || (o(t), s(!0));
  }, [t, i, n]), qa(
    () => r.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !n),
    onComplete() {
      var u;
      const l = Dm(r.current), c = new l.CustomEvent("animationend", { bubbles: !0 });
      (u = r.current) == null || u.dispatchEvent(c);
    }
  };
}
function nf(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, i = Mi(r), s = Mi(t), [a, l] = rt(e.defaultIsOpen || !1), c = n !== void 0 ? n : a, u = n !== void 0, d = $o(), f = o ?? `disclosure-${d}`, p = ve(() => {
    u || l(!1), s == null || s();
  }, [u, s]), g = ve(() => {
    u || l(!0), i == null || i();
  }, [u, i]), y = ve(() => {
    c ? p() : g();
  }, [c, g, p]);
  function v(S = {}) {
    return {
      ...S,
      "aria-expanded": c,
      "aria-controls": f,
      onClick(T) {
        var k;
        (k = S.onClick) == null || k.call(S, T), y();
      }
    };
  }
  function w(S = {}) {
    return {
      ...S,
      hidden: !c,
      id: f
    };
  }
  return {
    isOpen: c,
    onOpen: g,
    onClose: p,
    onToggle: y,
    isControlled: u,
    getButtonProps: v,
    getDisclosureProps: w
  };
}
const Oi = globalThis != null && globalThis.document ? Wa : He, zi = (e, t) => {
  const r = ue(!1), n = ue(!1);
  He(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), He(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
};
function ig(e) {
  const t = e.current;
  if (!t)
    return !1;
  const r = Bm(t);
  return !r || t.contains(r) ? !1 : !!Um(r);
}
function sg(e, t) {
  const { shouldFocus: r, visible: n, focusRef: o } = t, i = r && !n;
  zi(() => {
    if (!i || ig(e))
      return;
    const s = (o == null ? void 0 : o.current) || e.current;
    let a;
    if (s)
      return a = requestAnimationFrame(() => {
        s.focus({ preventScroll: !0 });
      }), () => {
        cancelAnimationFrame(a);
      };
  }, [i, e, o]);
}
const ag = {
  preventScroll: !0,
  shouldFocus: !1
};
function lg(e, t = ag) {
  const { focusRef: r, preventScroll: n, shouldFocus: o, visible: i } = t, s = cg(e) ? e.current : e, a = o && i, l = ue(a), c = ue(i);
  Oi(() => {
    !c.current && i && (l.current = a), c.current = i;
  }, [i, a]);
  const u = ve(() => {
    if (!(!i || !s || !l.current) && (l.current = !1, !s.contains(document.activeElement)))
      if (r != null && r.current)
        requestAnimationFrame(() => {
          var d;
          (d = r.current) == null || d.focus({ preventScroll: n });
        });
      else {
        const d = Km(s);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: n });
        });
      }
  }, [i, n, s, r]);
  zi(() => {
    u();
  }, [u]), qa(s, "transitionend", u);
}
function cg(e) {
  return "current" in e;
}
function ug(e) {
  return "current" in e;
}
const of = () => typeof window < "u";
function dg() {
  const e = navigator.userAgentData;
  return (e == null ? void 0 : e.platform) ?? navigator.platform;
}
const fg = (e) => of() && e.test(navigator.vendor), hg = (e) => of() && e.test(dg()), pg = () => hg(/mac|iphone|ipad|ipod/i), mg = () => pg() && fg(/apple/i);
function gg(e) {
  const { ref: t, elements: r, enabled: n } = e, o = () => {
    var i;
    return ((i = t.current) == null ? void 0 : i.ownerDocument) ?? document;
  };
  qa(o, "pointerdown", (i) => {
    var c, u;
    if (!mg() || !n)
      return;
    const s = ((u = (c = i.composedPath) == null ? void 0 : c.call(i)) == null ? void 0 : u[0]) ?? i.target, l = (r ?? [t]).some((d) => {
      const f = ug(d) ? d.current : d;
      return (f == null ? void 0 : f.contains(s)) || f === s;
    });
    o().activeElement !== s && l && (i.preventDefault(), s.focus());
  });
}
function yg(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function kr(...e) {
  return (t) => {
    e.forEach((r) => {
      yg(r, t);
    });
  };
}
function bg(...e) {
  return Ue(() => kr(...e), e);
}
function vg(e, t) {
  const r = Mi(e);
  He(() => {
    if (t == null)
      return;
    let n = null;
    return n = window.setTimeout(() => {
      r();
    }, t), () => {
      n && window.clearTimeout(n);
    };
  }, [t, r]);
}
const Oe = {
  open: (e, t) => `${e}[data-open], ${e}[open], ${e}[data-state=open] ${t}`,
  closed: (e, t) => `${e}[data-closed], ${e}[data-state=closed] ${t}`,
  hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  focusVisible: (e, t) => `${e}:focus-visible ${t}`,
  focusWithin: (e, t) => `${e}:focus-within ${t}`,
  active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
  readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
  expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
  placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
}, Ht = (e) => sf((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), or = (e) => sf((t) => e(t, "~ &"), "[data-peer]", ".peer"), sf = (e, ...t) => t.map(e).join(", "), xg = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within, &[data-focus-within]",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty, &[data-empty]",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded], &[data-state=expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked], &[data-state=checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate], &[data-state=indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is open
   */
  _groupOpen: Ht(Oe.open),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is closed
   */
  _groupClosed: Ht(Oe.closed),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: Ht(Oe.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: or(Oe.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Ht(Oe.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: or(Oe.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Ht(Oe.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: or(Oe.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Ht(Oe.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: or(Oe.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Ht(Oe.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: or(Oe.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Ht(Oe.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: or(Oe.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Ht(Oe.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: or(Oe.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Ht(Oe.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: or(Oe.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: or(Oe.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder, &[data-placeholder]",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown, &[data-placeholder-shown]",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen, &[data-fullscreen]",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]",
  /**
   * Styles for the CSS Selector `&[data-open], &[open], &[data-state=open]`
   */
  _open: "&[data-open], &[open], &[data-state=open]",
  /**
   * Styles for the CSS Selector `&[data-closed], &[data-state=closed]`
   */
  _closed: "&[data-closed], &[data-state=closed]",
  /**
   * Styles for the CSS Selector `&[data-complete]`
   */
  _complete: "&[data-complete]",
  /**
   * Styles for the CSS Selector `&[data-incomplete]`
   */
  _incomplete: "&[data-incomplete]",
  /**
   * Styles for the CSS Selector `&[data-current]`
   */
  _current: "&[data-current]"
};
function Ki(e) {
  const t = e.conditions ?? {}, r = Object.fromEntries(
    Object.entries(t).map(([n, o]) => [`_${n}`, o])
  );
  return { ...xg, ...r };
}
function af(e) {
  return Object.keys(Ki(e));
}
const Sg = (e) => /!(important)?$/.test(e), hc = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, wg = (e, t) => (r) => {
  const n = String(t), o = Sg(n), i = hc(n), s = e ? `${e}.${i}` : i;
  let a = pt(r.__cssMap) && s in r.__cssMap ? r.__cssMap[s].varRef : t;
  return a = hc(a), o ? `${a} !important` : a;
};
function Ya(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, s) => {
    const a = wg(t, i)(s);
    let l = (r == null ? void 0 : r(a, s)) ?? a;
    return n && (l = n(l, s)), l;
  };
}
const Jo = (...e) => (t) => e.reduce((r, n) => n(r), t);
function _t(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = Ya({
      scale: e,
      transform: t
    }), n;
  };
}
const Tg = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function Cg(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: Tg(t),
    transform: r ? Ya({
      scale: r,
      compose: n
    }) : n
  };
}
const lf = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function Pg() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...lf
  ].join(" ");
}
function kg() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...lf
  ].join(" ");
}
const _g = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, Ag = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function $g(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
const Eg = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, fa = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, Rg = new Set(Object.values(fa)), ha = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), Mg = (e) => e.trim();
function Og(e, t) {
  if (e == null || ha.has(e))
    return e;
  if (!(pa(e) || ha.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], s = o == null ? void 0 : o[2];
  if (!i || !s)
    return e;
  const a = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...c] = s.split(",").map(Mg).filter(Boolean);
  if ((c == null ? void 0 : c.length) === 0)
    return e;
  const u = l in fa ? fa[l] : l;
  c.unshift(u);
  const d = c.map((f) => {
    if (Rg.has(f))
      return f;
    const p = f.indexOf(" "), [g, y] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], v = pa(y) ? y : y && y.split(" "), w = `colors.${g}`, S = w in t.__cssMap ? t.__cssMap[w].varRef : g;
    return v ? [
      S,
      ...Array.isArray(v) ? v : [v]
    ].join(" ") : S;
  });
  return `${a}(${d.join(", ")})`;
}
const pa = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), zg = (e, t) => Og(e, t ?? {});
function Dg(e) {
  return /^var\(--.+\)$/.test(e);
}
const Bg = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, Ut = (e) => (t) => `${e}(${t})`, Y = {
  filter(e) {
    return e !== "auto" ? e : _g;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : Ag;
  },
  ring(e) {
    return $g(Y.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? Pg() : e === "auto-gpu" ? kg() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = Bg(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const r = { left: "right", right: "left" };
    return t.direction === "rtl" ? r[e] : e;
  },
  degree(e) {
    if (Dg(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: zg,
  blur: Ut("blur"),
  opacity: Ut("opacity"),
  brightness: Ut("brightness"),
  contrast: Ut("contrast"),
  dropShadow: Ut("drop-shadow"),
  grayscale: Ut("grayscale"),
  hueRotate: (e) => Ut("hue-rotate")(Y.degree(e)),
  invert: Ut("invert"),
  saturate: Ut("saturate"),
  sepia: Ut("sepia"),
  bgImage(e) {
    return e == null || pa(e) || ha.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    const { space: t, divide: r } = Eg[e] ?? {}, n = { flexDirection: e };
    return t && (n[t] = 1), r && (n[r] = 1), n;
  }
}, b = {
  borderWidths: _t("borderWidths"),
  borderStyles: _t("borderStyles"),
  colors: _t("colors"),
  borders: _t("borders"),
  gradients: _t("gradients", Y.gradient),
  radii: _t("radii", Y.px),
  space: _t("space", Jo(Y.vh, Y.px)),
  spaceT: _t("space", Jo(Y.vh, Y.px)),
  degreeT(e) {
    return { property: e, transform: Y.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: Ya({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: _t("sizes", Jo(Y.vh, Y.px)),
  sizesT: _t("sizes", Jo(Y.vh, Y.fraction)),
  shadows: _t("shadows"),
  logical: Cg,
  blur: _t("blur", Y.blur)
}, hi = {
  background: b.colors("background"),
  backgroundColor: b.colors("backgroundColor"),
  backgroundImage: b.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: Y.bgClip },
  bgSize: b.prop("backgroundSize"),
  bgPosition: b.prop("backgroundPosition"),
  bg: b.colors("background"),
  bgColor: b.colors("backgroundColor"),
  bgPos: b.prop("backgroundPosition"),
  bgRepeat: b.prop("backgroundRepeat"),
  bgAttachment: b.prop("backgroundAttachment"),
  bgGradient: b.gradients("backgroundImage"),
  bgClip: { transform: Y.bgClip }
};
Object.assign(hi, {
  bgImage: hi.backgroundImage,
  bgImg: hi.backgroundImage
});
const J = {
  border: b.borders("border"),
  borderWidth: b.borderWidths("borderWidth"),
  borderStyle: b.borderStyles("borderStyle"),
  borderColor: b.colors("borderColor"),
  borderRadius: b.radii("borderRadius"),
  borderTop: b.borders("borderTop"),
  borderBlockStart: b.borders("borderBlockStart"),
  borderTopLeftRadius: b.radii("borderTopLeftRadius"),
  borderStartStartRadius: b.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: b.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: b.radii("borderTopRightRadius"),
  borderStartEndRadius: b.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: b.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: b.borders("borderRight"),
  borderInlineEnd: b.borders("borderInlineEnd"),
  borderBottom: b.borders("borderBottom"),
  borderBlockEnd: b.borders("borderBlockEnd"),
  borderBottomLeftRadius: b.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: b.radii("borderBottomRightRadius"),
  borderLeft: b.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: b.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: b.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: b.borders(["borderLeft", "borderRight"]),
  borderInline: b.borders("borderInline"),
  borderY: b.borders(["borderTop", "borderBottom"]),
  borderBlock: b.borders("borderBlock"),
  borderTopWidth: b.borderWidths("borderTopWidth"),
  borderBlockStartWidth: b.borderWidths("borderBlockStartWidth"),
  borderTopColor: b.colors("borderTopColor"),
  borderBlockStartColor: b.colors("borderBlockStartColor"),
  borderTopStyle: b.borderStyles("borderTopStyle"),
  borderBlockStartStyle: b.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: b.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: b.borderWidths("borderBlockEndWidth"),
  borderBottomColor: b.colors("borderBottomColor"),
  borderBlockEndColor: b.colors("borderBlockEndColor"),
  borderBottomStyle: b.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: b.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: b.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: b.borderWidths("borderInlineStartWidth"),
  borderLeftColor: b.colors("borderLeftColor"),
  borderInlineStartColor: b.colors("borderInlineStartColor"),
  borderLeftStyle: b.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: b.borderStyles("borderInlineStartStyle"),
  borderRightWidth: b.borderWidths("borderRightWidth"),
  borderInlineEndWidth: b.borderWidths("borderInlineEndWidth"),
  borderRightColor: b.colors("borderRightColor"),
  borderInlineEndColor: b.colors("borderInlineEndColor"),
  borderRightStyle: b.borderStyles("borderRightStyle"),
  borderInlineEndStyle: b.borderStyles("borderInlineEndStyle"),
  borderTopRadius: b.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: b.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: b.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: b.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(J, {
  rounded: J.borderRadius,
  roundedTop: J.borderTopRadius,
  roundedTopLeft: J.borderTopLeftRadius,
  roundedTopRight: J.borderTopRightRadius,
  roundedTopStart: J.borderStartStartRadius,
  roundedTopEnd: J.borderStartEndRadius,
  roundedBottom: J.borderBottomRadius,
  roundedBottomLeft: J.borderBottomLeftRadius,
  roundedBottomRight: J.borderBottomRightRadius,
  roundedBottomStart: J.borderEndStartRadius,
  roundedBottomEnd: J.borderEndEndRadius,
  roundedLeft: J.borderLeftRadius,
  roundedRight: J.borderRightRadius,
  roundedStart: J.borderInlineStartRadius,
  roundedEnd: J.borderInlineEndRadius,
  borderStart: J.borderInlineStart,
  borderEnd: J.borderInlineEnd,
  borderTopStartRadius: J.borderStartStartRadius,
  borderTopEndRadius: J.borderStartEndRadius,
  borderBottomStartRadius: J.borderEndStartRadius,
  borderBottomEndRadius: J.borderEndEndRadius,
  borderStartRadius: J.borderInlineStartRadius,
  borderEndRadius: J.borderInlineEndRadius,
  borderStartWidth: J.borderInlineStartWidth,
  borderEndWidth: J.borderInlineEndWidth,
  borderStartColor: J.borderInlineStartColor,
  borderEndColor: J.borderInlineEndColor,
  borderStartStyle: J.borderInlineStartStyle,
  borderEndStyle: J.borderInlineEndStyle
});
const jg = {
  color: b.colors("color"),
  textColor: b.colors("color"),
  fill: b.colors("fill"),
  stroke: b.colors("stroke"),
  accentColor: b.colors("accentColor"),
  textFillColor: b.colors("textFillColor")
}, Di = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: Y.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: b.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: b.space("gap"),
  rowGap: b.space("rowGap"),
  columnGap: b.space("columnGap")
};
Object.assign(Di, {
  flexDir: Di.flexDirection
});
const $t = {
  width: b.sizesT("width"),
  inlineSize: b.sizesT("inlineSize"),
  height: b.sizes("height"),
  blockSize: b.sizes("blockSize"),
  boxSize: b.sizes(["width", "height"]),
  minWidth: b.sizes("minWidth"),
  minInlineSize: b.sizes("minInlineSize"),
  minHeight: b.sizes("minHeight"),
  minBlockSize: b.sizes("minBlockSize"),
  maxWidth: b.sizes("maxWidth"),
  maxInlineSize: b.sizes("maxInlineSize"),
  maxHeight: b.sizes("maxHeight"),
  maxBlockSize: b.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, t) => {
      var o, i;
      return { [`@media screen and (min-width: ${((i = (o = t.__breakpoints) == null ? void 0 : o.get(e)) == null ? void 0 : i.minW) ?? e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var o, i;
      return { [`@media screen and (max-width: ${((i = (o = t.__breakpoints) == null ? void 0 : o.get(e)) == null ? void 0 : i._minW) ?? e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: b.propT("float", Y.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign($t, {
  w: $t.width,
  h: $t.height,
  minW: $t.minWidth,
  maxW: $t.maxWidth,
  minH: $t.minHeight,
  maxH: $t.maxHeight,
  overscroll: $t.overscrollBehavior,
  overscrollX: $t.overscrollBehaviorX,
  overscrollY: $t.overscrollBehaviorY
});
const Vg = {
  filter: { transform: Y.filter },
  blur: b.blur("--chakra-blur"),
  brightness: b.propT("--chakra-brightness", Y.brightness),
  contrast: b.propT("--chakra-contrast", Y.contrast),
  hueRotate: b.propT("--chakra-hue-rotate", Y.hueRotate),
  invert: b.propT("--chakra-invert", Y.invert),
  saturate: b.propT("--chakra-saturate", Y.saturate),
  dropShadow: b.propT("--chakra-drop-shadow", Y.dropShadow),
  backdropFilter: { transform: Y.backdropFilter },
  backdropBlur: b.blur("--chakra-backdrop-blur"),
  backdropBrightness: b.propT(
    "--chakra-backdrop-brightness",
    Y.brightness
  ),
  backdropContrast: b.propT("--chakra-backdrop-contrast", Y.contrast),
  backdropHueRotate: b.propT(
    "--chakra-backdrop-hue-rotate",
    Y.hueRotate
  ),
  backdropInvert: b.propT("--chakra-backdrop-invert", Y.invert),
  backdropSaturate: b.propT("--chakra-backdrop-saturate", Y.saturate)
}, Fg = {
  ring: { transform: Y.ring },
  ringColor: b.colors("--chakra-ring-color"),
  ringOffset: b.prop("--chakra-ring-offset-width"),
  ringOffsetColor: b.colors("--chakra-ring-offset-color"),
  ringInset: b.prop("--chakra-ring-inset")
}, Ig = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: Y.outline },
  outlineOffset: !0,
  outlineColor: b.colors("outlineColor")
}, cf = {
  gridGap: b.space("gridGap"),
  gridColumnGap: b.space("gridColumnGap"),
  gridRowGap: b.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
};
function Lg(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
const Ng = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, s) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const a = t.get(n);
    if (a.has(o))
      return a.get(o);
    const l = e(n, o, i, s);
    return a.set(o, l), l;
  };
}, Wg = Ng(Lg), Hg = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Ug = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Rs = (e, t, r) => {
  const n = {}, o = Wg(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, Gg = {
  srOnly: {
    transform(e) {
      return e === !0 ? Hg : e === "focusable" ? Ug : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Rs(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Rs(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Rs(t, e, r)
  }
}, to = {
  position: !0,
  pos: b.prop("position"),
  zIndex: b.prop("zIndex", "zIndices"),
  inset: b.spaceT("inset"),
  insetX: b.spaceT(["left", "right"]),
  insetInline: b.spaceT("insetInline"),
  insetY: b.spaceT(["top", "bottom"]),
  insetBlock: b.spaceT("insetBlock"),
  top: b.spaceT("top"),
  insetBlockStart: b.spaceT("insetBlockStart"),
  bottom: b.spaceT("bottom"),
  insetBlockEnd: b.spaceT("insetBlockEnd"),
  left: b.spaceT("left"),
  insetInlineStart: b.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: b.spaceT("right"),
  insetInlineEnd: b.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(to, {
  insetStart: to.insetInlineStart,
  insetEnd: to.insetInlineEnd
});
const ma = {
  boxShadow: b.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: b.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: b.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(ma, {
  shadow: ma.boxShadow
});
const he = {
  margin: b.spaceT("margin"),
  marginTop: b.spaceT("marginTop"),
  marginBlockStart: b.spaceT("marginBlockStart"),
  marginRight: b.spaceT("marginRight"),
  marginInlineEnd: b.spaceT("marginInlineEnd"),
  marginBottom: b.spaceT("marginBottom"),
  marginBlockEnd: b.spaceT("marginBlockEnd"),
  marginLeft: b.spaceT("marginLeft"),
  marginInlineStart: b.spaceT("marginInlineStart"),
  marginX: b.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: b.spaceT("marginInline"),
  marginY: b.spaceT(["marginTop", "marginBottom"]),
  marginBlock: b.spaceT("marginBlock"),
  padding: b.space("padding"),
  paddingTop: b.space("paddingTop"),
  paddingBlockStart: b.space("paddingBlockStart"),
  paddingRight: b.space("paddingRight"),
  paddingBottom: b.space("paddingBottom"),
  paddingBlockEnd: b.space("paddingBlockEnd"),
  paddingLeft: b.space("paddingLeft"),
  paddingInlineStart: b.space("paddingInlineStart"),
  paddingInlineEnd: b.space("paddingInlineEnd"),
  paddingX: b.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: b.space("paddingInline"),
  paddingY: b.space(["paddingTop", "paddingBottom"]),
  paddingBlock: b.space("paddingBlock")
};
Object.assign(he, {
  m: he.margin,
  mt: he.marginTop,
  mr: he.marginRight,
  me: he.marginInlineEnd,
  marginEnd: he.marginInlineEnd,
  mb: he.marginBottom,
  ml: he.marginLeft,
  ms: he.marginInlineStart,
  marginStart: he.marginInlineStart,
  mx: he.marginX,
  my: he.marginY,
  p: he.padding,
  pt: he.paddingTop,
  py: he.paddingY,
  px: he.paddingX,
  pb: he.paddingBottom,
  pl: he.paddingLeft,
  ps: he.paddingInlineStart,
  paddingStart: he.paddingInlineStart,
  pr: he.paddingRight,
  pe: he.paddingInlineEnd,
  paddingEnd: he.paddingInlineEnd
});
const qg = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: b.spaceT("scrollMargin"),
  scrollMarginTop: b.spaceT("scrollMarginTop"),
  scrollMarginBottom: b.spaceT("scrollMarginBottom"),
  scrollMarginLeft: b.spaceT("scrollMarginLeft"),
  scrollMarginRight: b.spaceT("scrollMarginRight"),
  scrollMarginX: b.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: b.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: b.spaceT("scrollPadding"),
  scrollPaddingTop: b.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: b.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: b.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: b.spaceT("scrollPaddingRight"),
  scrollPaddingX: b.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: b.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
}, Yg = {
  fontFamily: b.prop("fontFamily", "fonts"),
  fontSize: b.prop("fontSize", "fontSizes", Y.px),
  fontWeight: b.prop("fontWeight", "fontWeights"),
  lineHeight: b.prop("lineHeight", "lineHeights"),
  letterSpacing: b.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, Kg = {
  textDecorationColor: b.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: b.shadows("textShadow")
}, Xg = {
  clipPath: !0,
  transform: b.propT("transform", Y.transform),
  transformOrigin: !0,
  translateX: b.spaceT("--chakra-translate-x"),
  translateY: b.spaceT("--chakra-translate-y"),
  skewX: b.degreeT("--chakra-skew-x"),
  skewY: b.degreeT("--chakra-skew-y"),
  scaleX: b.prop("--chakra-scale-x"),
  scaleY: b.prop("--chakra-scale-y"),
  scale: b.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: b.degreeT("--chakra-rotate")
}, Zg = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: b.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: b.prop("listStyleImage")
}, Jg = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: b.prop("transitionDuration", "transition.duration"),
  transitionProperty: b.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: b.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, Ka = Rt(
  {},
  hi,
  J,
  jg,
  Di,
  $t,
  Vg,
  Fg,
  Ig,
  cf,
  Gg,
  to,
  ma,
  he,
  qg,
  Yg,
  Kg,
  Xg,
  Zg,
  Jg
);
Object.assign({}, he, $t, Di, cf, to);
const Qg = (e) => [
  ...Object.keys(Ka),
  ...af(e)
], ey = (e) => {
  const t = Ki(e);
  return (r) => {
    const n = { ...Ka, ...t };
    return Object.hasOwnProperty.call(n, r);
  };
}, ty = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const s in e) {
    let a = Lt(e[s], t);
    if (a == null)
      continue;
    if (a = pt(a) && r(a) ? n(a) : a, !Array.isArray(a)) {
      i[s] = a;
      continue;
    }
    const l = a.slice(0, o.length).length;
    for (let c = 0; c < l; c += 1) {
      const u = o == null ? void 0 : o[c];
      if (!u) {
        i[s] = a[c];
        continue;
      }
      i[u] = i[u] || {}, a[c] != null && (i[u][s] = a[c]);
    }
  }
  return i;
};
function ry(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function ny(e) {
  return /^var\(--.+\)$/.test(e);
}
const oy = (e, t) => e.startsWith("--") && typeof t == "string" && !ny(t), iy = (e, t) => {
  if (t == null)
    return t;
  const r = (s) => {
    var a, l;
    return (l = (a = e.__cssMap) == null ? void 0 : a[s]) == null ? void 0 : l.varRef;
  }, n = (s) => r(s) ?? s, [o, i] = ry(t);
  return t = r(o) ?? n(i) ?? n(t), t;
};
function sy(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, s = !1) => {
    var u;
    const a = Lt(i, n), l = ty(a)(n);
    let c = {};
    for (let d in l) {
      const f = l[d];
      let p = Lt(f, n);
      d in r && (d = r[d]), oy(d, p) && (p = iy(n, p));
      let g = t[d];
      if (g === !0 && (g = { property: d }), pt(p)) {
        c[d] = c[d] ?? {}, c[d] = Rt(
          {},
          c[d],
          o(p, !0)
        );
        continue;
      }
      let y = ((u = g == null ? void 0 : g.transform) == null ? void 0 : u.call(g, p, n, a)) ?? p;
      y = g != null && g.processResult ? o(y, !0) : y;
      const v = Lt(g == null ? void 0 : g.property, n);
      if (!s && (g != null && g.static)) {
        const w = Lt(g.static, n);
        c = Rt({}, c, w);
      }
      if (v && Array.isArray(v)) {
        for (const w of v)
          c[w] = y;
        continue;
      }
      if (v) {
        v === "&" && pt(y) ? c = Rt({}, c, y) : c[v] = y;
        continue;
      }
      if (pt(y)) {
        c = Rt({}, c, y);
        continue;
      }
      c[d] = y;
    }
    return c;
  };
  return o;
}
const uf = (e) => (t) => sy({
  theme: t,
  pseudos: Ki(t),
  configs: Ka
})(e);
function de(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function ay(e, t) {
  if (Array.isArray(e))
    return e;
  if (pt(e))
    return t(e);
  if (e != null)
    return [e];
}
function ly(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function cy(e) {
  const t = e.__breakpoints;
  return function(n, o, i, s) {
    var f, p;
    if (!t)
      return;
    const a = {}, l = ay(i, t.toArrayValue);
    if (!l)
      return a;
    const c = l.length, u = c === 1, d = !!n.parts;
    for (let g = 0; g < c; g++) {
      const y = t.details[g], v = t.details[ly(l, g)], w = Gn(y.minW, v == null ? void 0 : v._minW), S = Lt((f = n[o]) == null ? void 0 : f[l[g]], s);
      if (S) {
        if (d) {
          (p = n.parts) == null || p.forEach((T) => {
            Rt(a, {
              [T]: u ? S[T] : { [w]: S[T] }
            });
          });
          continue;
        }
        if (!d) {
          u ? Rt(a, S) : a[w] = S;
          continue;
        }
        a[w] = S;
      }
    }
    return a;
  };
}
function uy(e) {
  return (t) => {
    const { variant: r, size: n, theme: o } = t, i = cy(o);
    return Rt(
      {},
      Lt(e.baseStyle ?? {}, t),
      i(e, "sizes", n, t),
      i(e, "variants", r, t)
    );
  };
}
function _n(e) {
  return rf(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function df(e) {
  return pt(e) && e.reference ? e.reference : String(e);
}
const Xi = (e, ...t) => t.map(df).join(` ${e} `).replace(/calc/g, ""), pc = (...e) => `calc(${Xi("+", ...e)})`, mc = (...e) => `calc(${Xi("-", ...e)})`, ga = (...e) => `calc(${Xi("*", ...e)})`, gc = (...e) => `calc(${Xi("/", ...e)})`, yc = (e) => {
  const t = df(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : ga(t, -1);
}, Fr = Object.assign(
  (e) => ({
    add: (...t) => Fr(pc(e, ...t)),
    subtract: (...t) => Fr(mc(e, ...t)),
    multiply: (...t) => Fr(ga(e, ...t)),
    divide: (...t) => Fr(gc(e, ...t)),
    negate: () => Fr(yc(e)),
    toString: () => e.toString()
  }),
  {
    add: pc,
    subtract: mc,
    multiply: ga,
    divide: gc,
    negate: yc
  }
);
function dy(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function fy(e) {
  const t = dy(e.toString());
  return py(hy(t));
}
function hy(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function py(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function my(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function gy(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function yy(e, t = "") {
  return fy(`--${my(e, t)}`);
}
function V(e, t, r) {
  const n = yy(e, r);
  return {
    variable: n,
    reference: gy(n, t)
  };
}
function by(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, i] = n;
      r[o] = V(`${e}-${o}`, i);
      continue;
    }
    r[n] = V(`${e}-${n}`);
  }
  return r;
}
const vy = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints"
];
function xy(e) {
  return eg(e, vy);
}
function Sy(e) {
  return e.semanticTokens;
}
function wy(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
function Ty(e) {
  const t = xy(e), r = Sy(e), n = af(e), o = (s) => n.includes(s) || s === "default", i = {};
  return fc(t, (s, a) => {
    s != null && (i[a.join(".")] = { isSemantic: !1, value: s });
  }), fc(
    r,
    (s, a) => {
      s != null && (i[a.join(".")] = { isSemantic: !0, value: s });
    },
    {
      stop: (s) => Object.keys(s).every(o)
    }
  ), i;
}
function bc(e, t) {
  return V(String(e).replace(/\./g, "-"), void 0, t);
}
function Cy(e) {
  var a;
  const t = Ty(e), r = (a = e.config) == null ? void 0 : a.cssVarPrefix, n = Ki(e);
  let o = {};
  const i = {};
  function s(l, c) {
    const d = [String(l).split(".")[0], c].join(".");
    if (!t[d])
      return c;
    const { reference: p } = bc(d, r);
    return p;
  }
  for (const [l, c] of Object.entries(t)) {
    const { isSemantic: u, value: d } = c, { variable: f, reference: p } = bc(l, r);
    if (!u) {
      if (l.startsWith("space")) {
        const y = l.split("."), [v, ...w] = y, S = `${v}.-${w.join(".")}`, T = Fr.negate(d), k = Fr.negate(p);
        i[S] = {
          value: T,
          var: f,
          varRef: k
        };
      }
      o[f] = d, i[l] = {
        value: d,
        var: f,
        varRef: p
      };
      continue;
    }
    const g = pt(d) ? d : { default: d };
    o = Rt(
      o,
      Object.entries(g).reduce(
        (y, [v, w]) => {
          if (!w)
            return y;
          const S = s(l, `${w}`);
          if (v === "default")
            return y[f] = S, y;
          const T = (n == null ? void 0 : n[v]) ?? v;
          return y[T] = { [f]: S }, y;
        },
        {}
      )
    ), i[l] = {
      value: p,
      var: f,
      varRef: p
    };
  }
  return {
    cssVars: o,
    cssMap: i
  };
}
function Py(e) {
  const t = wy(e), {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap: r,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars: n
  } = Cy(t);
  return Object.assign(t, {
    __cssVars: { ...{
      "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-ring-offset-width": "0px",
      "--chakra-ring-offset-color": "#fff",
      "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
      "--chakra-ring-offset-shadow": "0 0 #0000",
      "--chakra-ring-shadow": "0 0 #0000",
      "--chakra-space-x-reverse": "0",
      "--chakra-space-y-reverse": "0"
    }, ...n },
    __cssMap: r,
    __breakpoints: Lm(t.breakpoints)
  }), t;
}
function re(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...u) {
    n();
    for (const d of u)
      t[d] = l(d);
    return re(e, t);
  }
  function i(...u) {
    for (const d of u)
      d in t || (t[d] = l(d));
    return re(e, t);
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(u) {
    const p = `chakra-${(["container", "root"].includes(u ?? "") ? [e] : [e, u]).filter(Boolean).join("__")}`;
    return {
      className: p,
      selector: `.${p}`,
      toString: () => u
    };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: s,
    classnames: a,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
const ky = re("accordion").parts(
  "root",
  "container",
  "button",
  "panel",
  "icon"
), _y = re("alert").parts(
  "title",
  "description",
  "container",
  "icon",
  "spinner"
), Ay = re("avatar").parts(
  "label",
  "badge",
  "container",
  "excessLabel",
  "group"
), $y = re("breadcrumb").parts(
  "link",
  "item",
  "container",
  "separator"
);
re("button").parts();
const Ey = re("checkbox").parts(
  "control",
  "icon",
  "container",
  "label"
);
re("progress").parts(
  "track",
  "filledTrack",
  "label"
);
const Ry = re("drawer").parts(
  "overlay",
  "dialogContainer",
  "dialog",
  "header",
  "closeButton",
  "body",
  "footer"
), My = re("editable").parts(
  "preview",
  "input",
  "textarea"
), Oy = re("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), zy = re("formError").parts("text", "icon"), Dy = re("input").parts(
  "addon",
  "field",
  "element",
  "group"
), By = re("list").parts("container", "item", "icon"), jy = re("menu").parts(
  "button",
  "list",
  "item",
  "groupTitle",
  "icon",
  "command",
  "divider"
), Vy = re("modal").parts(
  "overlay",
  "dialogContainer",
  "dialog",
  "header",
  "closeButton",
  "body",
  "footer"
), Fy = re("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
re("pininput").parts("field");
const Iy = re("popover").parts(
  "content",
  "header",
  "body",
  "footer",
  "popper",
  "arrow",
  "closeButton"
), Ly = re("progress").parts(
  "label",
  "filledTrack",
  "track"
), Ny = re("radio").parts(
  "container",
  "control",
  "label"
), Wy = re("select").parts("field", "icon"), Hy = re("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), Uy = re("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), Gy = re("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), qy = re("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), Yy = re("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), Ky = re("tag").parts(
  "container",
  "label",
  "closeButton"
), Xy = re("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
re("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
const { definePartsStyle: Zy, defineMultiStyleConfig: Jy } = de(ky.keys), Qy = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, eb = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, tb = {
  pt: "2",
  px: "4",
  pb: "5"
}, rb = {
  fontSize: "1.25em"
}, nb = Zy({
  container: Qy,
  button: eb,
  panel: tb,
  icon: rb
}), ob = Jy({ baseStyle: nb });
function Lr(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class ib extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var qn = ib;
function Xa(e) {
  if (typeof e != "string") throw new qn(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = hb.test(e) ? lb(e) : e;
  const r = cb.exec(t);
  if (r) {
    const s = Array.from(r).slice(1);
    return [...s.slice(0, 3).map((a) => parseInt(po(a, 2), 16)), parseInt(po(s[3] || "f", 2), 16) / 255];
  }
  const n = ub.exec(t);
  if (n) {
    const s = Array.from(n).slice(1);
    return [...s.slice(0, 3).map((a) => parseInt(a, 16)), parseInt(s[3] || "ff", 16) / 255];
  }
  const o = db.exec(t);
  if (o) {
    const s = Array.from(o).slice(1);
    return [...s.slice(0, 3).map((a) => parseInt(a, 10)), parseFloat(s[3] || "1")];
  }
  const i = fb.exec(t);
  if (i) {
    const [s, a, l, c] = Array.from(i).slice(1).map(parseFloat);
    if (Lr(0, 100, a) !== a) throw new qn(e);
    if (Lr(0, 100, l) !== l) throw new qn(e);
    return [...pb(s, a, l), Number.isNaN(c) ? 1 : c];
  }
  throw new qn(e);
}
function sb(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const vc = (e) => parseInt(e.replace(/_/g, ""), 36), ab = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = vc(t.substring(0, 3)), n = vc(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - n.length; i++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function lb(e) {
  const t = e.toLowerCase().trim(), r = ab[sb(t)];
  if (!r) throw new qn(e);
  return `#${r}`;
}
const po = (e, t) => Array.from(Array(t)).map(() => e).join(""), cb = new RegExp(`^#${po("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), ub = new RegExp(`^#${po("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), db = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${po(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), fb = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, hb = /^[a-z]+$/i, xc = (e) => Math.round(e * 255), pb = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(xc);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * (t / 100), s = i * (1 - Math.abs(o % 2 - 1));
  let a = 0, l = 0, c = 0;
  o >= 0 && o < 1 ? (a = i, l = s) : o >= 1 && o < 2 ? (a = s, l = i) : o >= 2 && o < 3 ? (l = i, c = s) : o >= 3 && o < 4 ? (l = s, c = i) : o >= 4 && o < 5 ? (a = s, c = i) : o >= 5 && o < 6 && (a = i, c = s);
  const u = n - i / 2, d = a + u, f = l + u, p = c + u;
  return [d, f, p].map(xc);
};
function mb(e, t, r, n) {
  return `rgba(${Lr(0, 255, e).toFixed()}, ${Lr(0, 255, t).toFixed()}, ${Lr(0, 255, r).toFixed()}, ${parseFloat(Lr(0, 1, n).toFixed(3))})`;
}
function gb(e, t) {
  const [r, n, o, i] = Xa(e);
  return mb(r, n, o, i - t);
}
function yb(e) {
  const [t, r, n, o] = Xa(e);
  let i = (s) => {
    const a = Lr(0, 255, s).toString(16);
    return a.length === 1 ? `0${a}` : a;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
const bb = (e) => Object.keys(e).length === 0;
function vb(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
const et = (e, t, r) => {
  const n = vb(e, `colors.${t}`, t);
  try {
    return yb(n), n;
  } catch {
    return "#000000";
  }
}, xb = (e) => {
  const [t, r, n] = Xa(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, Sb = (e) => (t) => {
  const r = et(t, e);
  return xb(r) < 128 ? "dark" : "light";
}, wb = (e) => (t) => Sb(e)(t) === "dark", yn = (e, t) => (r) => {
  const n = et(r, e);
  return gb(n, 1 - t);
};
function Sc(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
const Tb = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function Cb(e) {
  const t = Tb();
  return !e || bb(e) ? t : e.string && e.colors ? kb(e.string, e.colors) : e.string && !e.colors ? Pb(e.string) : e.colors && !e.string ? _b(e.colors) : t;
}
function Pb(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let n = 0; n < e.length; n += 1)
    t = e.charCodeAt(n) + ((t << 5) - t), t = t & t;
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const o = t >> n * 8 & 255;
    r += `00${o.toString(16)}`.substr(-2);
  }
  return r;
}
function kb(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function _b(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function j(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function Za(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function ff(e) {
  return pt(e) && e.reference ? e.reference : String(e);
}
const Zi = (e, ...t) => t.map(ff).join(` ${e} `).replace(/calc/g, ""), wc = (...e) => `calc(${Zi("+", ...e)})`, Tc = (...e) => `calc(${Zi("-", ...e)})`, ya = (...e) => `calc(${Zi("*", ...e)})`, Cc = (...e) => `calc(${Zi("/", ...e)})`, Pc = (e) => {
  const t = ff(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : ya(t, -1);
}, ir = Object.assign(
  (e) => ({
    add: (...t) => ir(wc(e, ...t)),
    subtract: (...t) => ir(Tc(e, ...t)),
    multiply: (...t) => ir(ya(e, ...t)),
    divide: (...t) => ir(Cc(e, ...t)),
    negate: () => ir(Pc(e)),
    toString: () => e.toString()
  }),
  {
    add: wc,
    subtract: Tc,
    multiply: ya,
    divide: Cc,
    negate: Pc
  }
);
function Ab(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function $b(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function hf(e) {
  const t = $b(e.toString());
  return t.includes("\\.") ? e : Ab(e) ? t.replace(".", "\\.") : e;
}
function Eb(e, t = "") {
  return [t, hf(e)].filter(Boolean).join("-");
}
function Rb(e, t) {
  return `var(${hf(e)}${t ? `, ${t}` : ""})`;
}
function Mb(e, t = "") {
  return `--${Eb(e, t)}`;
}
function ze(e, t) {
  const r = Mb(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: Rb(r, Ob(t == null ? void 0 : t.fallback))
  };
}
function Ob(e) {
  return e == null ? void 0 : e.reference;
}
const { definePartsStyle: Eo, defineMultiStyleConfig: zb } = de(_y.keys), mt = V("alert-fg"), hr = V("alert-bg"), Db = Eo({
  container: {
    bg: hr.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: mt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: mt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Ja(e) {
  const { theme: t, colorScheme: r } = e, n = yn(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
const Bb = Eo((e) => {
  const { colorScheme: t } = e, r = Ja(e);
  return {
    container: {
      [mt.variable]: `colors.${t}.600`,
      [hr.variable]: r.light,
      _dark: {
        [mt.variable]: `colors.${t}.200`,
        [hr.variable]: r.dark
      }
    }
  };
}), jb = Eo((e) => {
  const { colorScheme: t } = e, r = Ja(e);
  return {
    container: {
      [mt.variable]: `colors.${t}.600`,
      [hr.variable]: r.light,
      _dark: {
        [mt.variable]: `colors.${t}.200`,
        [hr.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: mt.reference
    }
  };
}), Vb = Eo((e) => {
  const { colorScheme: t } = e, r = Ja(e);
  return {
    container: {
      [mt.variable]: `colors.${t}.600`,
      [hr.variable]: r.light,
      _dark: {
        [mt.variable]: `colors.${t}.200`,
        [hr.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: mt.reference
    }
  };
}), Fb = Eo((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [mt.variable]: "colors.white",
      [hr.variable]: `colors.${t}.600`,
      _dark: {
        [mt.variable]: "colors.gray.900",
        [hr.variable]: `colors.${t}.200`
      },
      color: mt.reference
    }
  };
}), Ib = {
  subtle: Bb,
  "left-accent": jb,
  "top-accent": Vb,
  solid: Fb
}, Lb = zb({
  baseStyle: Db,
  variants: Ib,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), pf = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, Nb = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, Wb = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, mf = {
  ...pf,
  ...Nb,
  container: Wb
}, Hb = (e) => typeof e == "function";
function tt(e, ...t) {
  return Hb(e) ? e(...t) : e;
}
const { definePartsStyle: gf, defineMultiStyleConfig: Ub } = de(Ay.keys), fn = V("avatar-border-color"), ro = V("avatar-bg"), mo = V("avatar-font-size"), bn = V("avatar-size"), Gb = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: fn.reference,
  [fn.variable]: "white",
  _dark: {
    [fn.variable]: "colors.gray.800"
  }
}, qb = {
  bg: ro.reference,
  fontSize: mo.reference,
  width: bn.reference,
  height: bn.reference,
  lineHeight: "1",
  [ro.variable]: "colors.gray.200",
  _dark: {
    [ro.variable]: "colors.whiteAlpha.400"
  }
}, Yb = (e) => {
  const { name: t, theme: r } = e, n = t ? Cb({ string: t }) : "colors.gray.400", o = wb(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: ro.reference,
    fontSize: mo.reference,
    color: i,
    borderColor: fn.reference,
    verticalAlign: "top",
    width: bn.reference,
    height: bn.reference,
    "&:not([data-loaded])": {
      [ro.variable]: n
    },
    [fn.variable]: "colors.white",
    _dark: {
      [fn.variable]: "colors.gray.800"
    }
  };
}, Kb = {
  fontSize: mo.reference,
  lineHeight: "1"
}, Xb = gf((e) => ({
  badge: tt(Gb, e),
  excessLabel: tt(qb, e),
  container: tt(Yb, e),
  label: Kb
}));
function wr(e) {
  const t = e !== "100%" ? mf[e] : void 0;
  return gf({
    container: {
      [bn.variable]: t ?? e,
      [mo.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [bn.variable]: t ?? e,
      [mo.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
const Zb = {
  "2xs": wr(4),
  xs: wr(6),
  sm: wr(8),
  md: wr(12),
  lg: wr(16),
  xl: wr(24),
  "2xl": wr(32),
  full: wr("100%")
}, Jb = Ub({
  baseStyle: Xb,
  sizes: Zb,
  defaultProps: {
    size: "md"
  }
}), Ae = by("badge", ["bg", "color", "shadow"]), Qb = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Ae.bg.reference,
  color: Ae.color.reference,
  boxShadow: Ae.shadow.reference
}, ev = (e) => {
  const { colorScheme: t, theme: r } = e, n = yn(`${t}.500`, 0.6)(r);
  return {
    [Ae.bg.variable]: `colors.${t}.500`,
    [Ae.color.variable]: "colors.white",
    _dark: {
      [Ae.bg.variable]: n,
      [Ae.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, tv = (e) => {
  const { colorScheme: t, theme: r } = e, n = yn(`${t}.200`, 0.16)(r);
  return {
    [Ae.bg.variable]: `colors.${t}.100`,
    [Ae.color.variable]: `colors.${t}.800`,
    _dark: {
      [Ae.bg.variable]: n,
      [Ae.color.variable]: `colors.${t}.200`
    }
  };
}, rv = (e) => {
  const { colorScheme: t, theme: r } = e, n = yn(`${t}.200`, 0.8)(r);
  return {
    [Ae.color.variable]: `colors.${t}.500`,
    _dark: {
      [Ae.color.variable]: n
    },
    [Ae.shadow.variable]: `inset 0 0 0px 1px ${Ae.color.reference}`
  };
}, nv = {
  solid: ev,
  subtle: tv,
  outline: rv
}, no = {
  baseStyle: Qb,
  variants: nv,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: ov, definePartsStyle: iv } = de($y.keys), Ms = V("breadcrumb-link-decor"), sv = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: Ms.reference,
  [Ms.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [Ms.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, av = iv({
  link: sv
}), lv = ov({
  baseStyle: av
}), cv = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, yf = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: j("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: j("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: j("gray.200", "whiteAlpha.300")(e) }
    };
  const n = yn(`${t}.200`, 0.12)(r), o = yn(`${t}.200`, 0.24)(r);
  return {
    color: j(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: j(`${t}.50`, n)(e)
    },
    _active: {
      bg: j(`${t}.100`, o)(e)
    }
  };
}, uv = (e) => {
  const { colorScheme: t } = e, r = j("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...tt(yf, e)
  };
}, dv = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, fv = (e) => {
  const { colorScheme: t } = e;
  if (t === "gray") {
    const a = j("gray.100", "whiteAlpha.200")(e);
    return {
      bg: a,
      color: j("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: j("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: a
        }
      },
      _active: { bg: j("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: r = `${t}.500`,
    color: n = "white",
    hoverBg: o = `${t}.600`,
    activeBg: i = `${t}.700`
  } = dv[t] ?? {}, s = j(r, `${t}.200`)(e);
  return {
    bg: s,
    color: j(n, "gray.800")(e),
    _hover: {
      bg: j(o, `${t}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: j(i, `${t}.400`)(e) }
  };
}, hv = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: j(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: j(`${t}.700`, `${t}.500`)(e)
    }
  };
}, pv = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, mv = {
  ghost: yf,
  outline: uv,
  solid: fv,
  link: hv,
  unstyled: pv
}, gv = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, yv = {
  baseStyle: cv,
  variants: mv,
  sizes: gv,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Wr, defineMultiStyleConfig: bv } = de(Xy.keys), Bi = V("card-bg"), cr = V("card-padding"), bf = V("card-shadow"), pi = V("card-radius"), vf = V("card-border-width", "0"), xf = V("card-border-color"), vv = Wr({
  container: {
    [Bi.variable]: "colors.chakra-body-bg",
    backgroundColor: Bi.reference,
    boxShadow: bf.reference,
    borderRadius: pi.reference,
    color: "chakra-body-text",
    borderWidth: vf.reference,
    borderColor: xf.reference
  },
  body: {
    padding: cr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: cr.reference
  },
  footer: {
    padding: cr.reference
  }
}), xv = {
  sm: Wr({
    container: {
      [pi.variable]: "radii.base",
      [cr.variable]: "space.3"
    }
  }),
  md: Wr({
    container: {
      [pi.variable]: "radii.md",
      [cr.variable]: "space.5"
    }
  }),
  lg: Wr({
    container: {
      [pi.variable]: "radii.xl",
      [cr.variable]: "space.7"
    }
  })
}, Sv = {
  elevated: Wr({
    container: {
      [bf.variable]: "shadows.base",
      _dark: {
        [Bi.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Wr({
    container: {
      [vf.variable]: "1px",
      [xf.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Wr({
    container: {
      [Bi.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [cr.variable]: 0
    },
    header: {
      [cr.variable]: 0
    },
    footer: {
      [cr.variable]: 0
    }
  }
}, wv = bv({
  baseStyle: vv,
  variants: Sv,
  sizes: xv,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), { definePartsStyle: mi, defineMultiStyleConfig: Tv } = de(Ey.keys), oo = V("checkbox-size"), Cv = (e) => {
  const { colorScheme: t } = e;
  return {
    w: oo.reference,
    h: oo.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: j(`${t}.500`, `${t}.200`)(e),
      borderColor: j(`${t}.500`, `${t}.200`)(e),
      color: j("white", "gray.900")(e),
      _hover: {
        bg: j(`${t}.600`, `${t}.300`)(e),
        borderColor: j(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: j("gray.200", "transparent")(e),
        bg: j("gray.200", "whiteAlpha.300")(e),
        color: j("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: j(`${t}.500`, `${t}.200`)(e),
      borderColor: j(`${t}.500`, `${t}.200`)(e),
      color: j("white", "gray.900")(e)
    },
    _disabled: {
      bg: j("gray.100", "whiteAlpha.100")(e),
      borderColor: j("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: j("red.500", "red.300")(e)
    }
  };
}, Pv = {
  _disabled: { cursor: "not-allowed" }
}, kv = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, _v = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, Av = mi((e) => ({
  icon: _v,
  container: Pv,
  control: tt(Cv, e),
  label: kv
})), $v = {
  sm: mi({
    control: { [oo.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: mi({
    control: { [oo.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: mi({
    control: { [oo.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Pr = Tv({
  baseStyle: Av,
  sizes: $v,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), io = ze("close-button-size"), In = ze("close-button-bg"), Ev = {
  w: [io.reference],
  h: [io.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [In.variable]: "colors.blackAlpha.100",
    _dark: {
      [In.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [In.variable]: "colors.blackAlpha.200",
    _dark: {
      [In.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: In.reference
}, Rv = {
  lg: {
    [io.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [io.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [io.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, Mv = {
  baseStyle: Ev,
  sizes: Rv,
  defaultProps: {
    size: "md"
  }
}, { variants: Ov, defaultProps: zv } = no, Dv = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Ae.bg.reference,
  color: Ae.color.reference,
  boxShadow: Ae.shadow.reference
}, Bv = {
  baseStyle: Dv,
  variants: Ov,
  defaultProps: zv
}, jv = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, Vv = {
  baseStyle: jv
}, Fv = {
  opacity: 0.6,
  borderColor: "inherit"
}, Iv = {
  borderStyle: "solid"
}, Lv = {
  borderStyle: "dashed"
}, Nv = {
  solid: Iv,
  dashed: Lv
}, Wv = {
  baseStyle: Fv,
  variants: Nv,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: ba, defineMultiStyleConfig: Hv } = de(Ry.keys), Os = V("drawer-bg"), zs = V("drawer-box-shadow");
function Zr(e) {
  return ba(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
const Uv = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, Gv = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, qv = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [Os.variable]: "colors.white",
    [zs.variable]: "shadows.lg",
    _dark: {
      [Os.variable]: "colors.gray.700",
      [zs.variable]: "shadows.dark-lg"
    },
    bg: Os.reference,
    boxShadow: zs.reference
  };
}, Yv = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, Kv = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, Xv = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, Zv = {
  px: "6",
  py: "4"
}, Jv = ba((e) => ({
  overlay: Uv,
  dialogContainer: Gv,
  dialog: tt(qv, e),
  header: Yv,
  closeButton: Kv,
  body: Xv,
  footer: Zv
})), Qv = {
  xs: Zr("xs"),
  sm: Zr("md"),
  md: Zr("lg"),
  lg: Zr("2xl"),
  xl: Zr("4xl"),
  full: Zr("full")
}, e0 = Hv({
  baseStyle: Jv,
  sizes: Qv,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: t0, defineMultiStyleConfig: r0 } = de(My.keys), n0 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, o0 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, i0 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, s0 = t0({
  preview: n0,
  input: o0,
  textarea: i0
}), a0 = r0({
  baseStyle: s0
}), { definePartsStyle: l0, defineMultiStyleConfig: c0 } = de(Oy.keys), hn = V("form-control-color"), u0 = {
  marginStart: "1",
  [hn.variable]: "colors.red.500",
  _dark: {
    [hn.variable]: "colors.red.300"
  },
  color: hn.reference
}, d0 = {
  mt: "2",
  [hn.variable]: "colors.gray.600",
  _dark: {
    [hn.variable]: "colors.whiteAlpha.600"
  },
  color: hn.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, f0 = l0({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: u0,
  helperText: d0
}), h0 = c0({
  baseStyle: f0
}), { definePartsStyle: p0, defineMultiStyleConfig: m0 } = de(zy.keys), pn = V("form-error-color"), g0 = {
  [pn.variable]: "colors.red.500",
  _dark: {
    [pn.variable]: "colors.red.300"
  },
  color: pn.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, y0 = {
  marginEnd: "0.5em",
  [pn.variable]: "colors.red.500",
  _dark: {
    [pn.variable]: "colors.red.300"
  },
  color: pn.reference
}, b0 = p0({
  text: g0,
  icon: y0
}), v0 = m0({
  baseStyle: b0
}), x0 = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, S0 = {
  baseStyle: x0
}, w0 = {
  fontFamily: "heading",
  fontWeight: "bold"
}, T0 = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, C0 = {
  baseStyle: w0,
  sizes: T0,
  defaultProps: {
    size: "xl"
  }
}, { definePartsStyle: ar, defineMultiStyleConfig: P0 } = de(Dy.keys), en = V("input-height"), tn = V("input-font-size"), rn = V("input-padding"), nn = V("input-border-radius"), k0 = ar({
  addon: {
    height: en.reference,
    fontSize: tn.reference,
    px: rn.reference,
    borderRadius: nn.reference
  },
  field: {
    width: "100%",
    height: en.reference,
    fontSize: tn.reference,
    px: rn.reference,
    borderRadius: nn.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), Tr = {
  lg: {
    [tn.variable]: "fontSizes.lg",
    [rn.variable]: "space.4",
    [nn.variable]: "radii.md",
    [en.variable]: "sizes.12"
  },
  md: {
    [tn.variable]: "fontSizes.md",
    [rn.variable]: "space.4",
    [nn.variable]: "radii.md",
    [en.variable]: "sizes.10"
  },
  sm: {
    [tn.variable]: "fontSizes.sm",
    [rn.variable]: "space.3",
    [nn.variable]: "radii.sm",
    [en.variable]: "sizes.8"
  },
  xs: {
    [tn.variable]: "fontSizes.xs",
    [rn.variable]: "space.2",
    [nn.variable]: "radii.sm",
    [en.variable]: "sizes.6"
  }
}, _0 = {
  lg: ar({
    field: Tr.lg,
    group: Tr.lg
  }),
  md: ar({
    field: Tr.md,
    group: Tr.md
  }),
  sm: ar({
    field: Tr.sm,
    group: Tr.sm
  }),
  xs: ar({
    field: Tr.xs,
    group: Tr.xs
  })
};
function Qa(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || j("blue.500", "blue.300")(e),
    errorBorderColor: r || j("red.500", "red.300")(e)
  };
}
const A0 = ar((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Qa(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: j("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: et(t, n),
        boxShadow: `0 0 0 1px ${et(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: et(t, r),
        boxShadow: `0 0 0 1px ${et(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: j("inherit", "whiteAlpha.50")(e),
      bg: j("gray.100", "whiteAlpha.300")(e)
    }
  };
}), $0 = ar((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Qa(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: j("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: j("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: et(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: et(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: j("gray.100", "whiteAlpha.50")(e)
    }
  };
}), E0 = ar((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Qa(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: et(t, n),
        boxShadow: `0px 1px 0px 0px ${et(t, n)}`
      },
      _focusVisible: {
        borderColor: et(t, r),
        boxShadow: `0px 1px 0px 0px ${et(t, r)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), R0 = ar({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), M0 = {
  outline: A0,
  filled: $0,
  flushed: E0,
  unstyled: R0
}, te = P0({
  baseStyle: k0,
  sizes: _0,
  variants: M0,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Ds = V("kbd-bg"), O0 = {
  [Ds.variable]: "colors.gray.100",
  _dark: {
    [Ds.variable]: "colors.whiteAlpha.100"
  },
  bg: Ds.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, z0 = {
  baseStyle: O0
}, D0 = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, B0 = {
  baseStyle: D0
}, { defineMultiStyleConfig: j0, definePartsStyle: V0 } = de(By.keys), F0 = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, I0 = V0({
  icon: F0
}), L0 = j0({
  baseStyle: I0
}), { defineMultiStyleConfig: N0, definePartsStyle: W0 } = de(jy.keys), Gt = V("menu-bg"), Bs = V("menu-shadow"), H0 = {
  [Gt.variable]: "#fff",
  [Bs.variable]: "shadows.sm",
  _dark: {
    [Gt.variable]: "colors.gray.700",
    [Bs.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: "dropdown",
  borderRadius: "md",
  borderWidth: "1px",
  bg: Gt.reference,
  boxShadow: Bs.reference
}, U0 = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Gt.variable]: "colors.gray.100",
    _dark: {
      [Gt.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Gt.variable]: "colors.gray.200",
    _dark: {
      [Gt.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Gt.variable]: "colors.gray.100",
    _dark: {
      [Gt.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Gt.reference
}, G0 = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, q0 = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, Y0 = {
  opacity: 0.6
}, K0 = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, X0 = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, Z0 = W0({
  button: X0,
  list: H0,
  item: U0,
  groupTitle: G0,
  icon: q0,
  command: Y0,
  divider: K0
}), J0 = N0({
  baseStyle: Z0
}), { defineMultiStyleConfig: Q0, definePartsStyle: va } = de(Vy.keys), js = V("modal-bg"), Vs = V("modal-shadow"), ex = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, tx = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, rx = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [js.variable]: "colors.white",
    [Vs.variable]: "shadows.lg",
    _dark: {
      [js.variable]: "colors.gray.700",
      [Vs.variable]: "shadows.dark-lg"
    },
    bg: js.reference,
    boxShadow: Vs.reference
  };
}, nx = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, ox = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, ix = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, sx = {
  px: "6",
  py: "4"
}, ax = va((e) => ({
  overlay: ex,
  dialogContainer: tt(tx, e),
  dialog: tt(rx, e),
  header: nx,
  closeButton: ox,
  body: tt(ix, e),
  footer: sx
}));
function Ft(e) {
  return va(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
const lx = {
  xs: Ft("xs"),
  sm: Ft("sm"),
  md: Ft("md"),
  lg: Ft("lg"),
  xl: Ft("xl"),
  "2xl": Ft("2xl"),
  "3xl": Ft("3xl"),
  "4xl": Ft("4xl"),
  "5xl": Ft("5xl"),
  "6xl": Ft("6xl"),
  full: Ft("full")
}, cx = Q0({
  baseStyle: ax,
  sizes: lx,
  defaultProps: { size: "md" }
}), Sf = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, { defineMultiStyleConfig: ux, definePartsStyle: wf } = de(Fy.keys), el = ze("number-input-stepper-width"), Tf = ze("number-input-input-padding"), dx = ir(el).add("0.5rem").toString(), Fs = ze("number-input-bg"), Is = ze("number-input-color"), Ls = ze("number-input-border-color"), fx = {
  [el.variable]: "sizes.6",
  [Tf.variable]: dx
}, hx = (e) => {
  var t;
  return ((t = tt(te.baseStyle, e)) == null ? void 0 : t.field) ?? {};
}, px = {
  width: el.reference
}, mx = {
  borderStart: "1px solid",
  borderStartColor: Ls.reference,
  color: Is.reference,
  bg: Fs.reference,
  [Is.variable]: "colors.chakra-body-text",
  [Ls.variable]: "colors.chakra-border-color",
  _dark: {
    [Is.variable]: "colors.whiteAlpha.800",
    [Ls.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Fs.variable]: "colors.gray.200",
    _dark: {
      [Fs.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, gx = wf((e) => ({
  root: fx,
  field: tt(hx, e) ?? {},
  stepperGroup: px,
  stepper: mx
}));
function Qo(e) {
  var i, s;
  const t = (i = te.sizes) == null ? void 0 : i[e], r = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, n = ((s = t.field) == null ? void 0 : s.fontSize) ?? "md", o = Sf.fontSizes[n];
  return wf({
    field: {
      ...t.field,
      paddingInlineEnd: Tf.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: ir(o).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: r[e]
      },
      _last: {
        borderBottomEndRadius: r[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
const yx = {
  xs: Qo("xs"),
  sm: Qo("sm"),
  md: Qo("md"),
  lg: Qo("lg")
}, bx = ux({
  baseStyle: gx,
  sizes: yx,
  variants: te.variants,
  defaultProps: te.defaultProps
});
var Cd;
const vx = {
  ...(Cd = te.baseStyle) == null ? void 0 : Cd.field,
  textAlign: "center"
}, xx = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
};
var Pd;
const Sx = {
  outline: (e) => {
    var t, r;
    return ((r = tt((t = te.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) ?? {};
  },
  flushed: (e) => {
    var t, r;
    return ((r = tt((t = te.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) ?? {};
  },
  filled: (e) => {
    var t, r;
    return ((r = tt((t = te.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) ?? {};
  },
  unstyled: ((Pd = te.variants) == null ? void 0 : Pd.unstyled.field) ?? {}
}, wx = {
  baseStyle: vx,
  sizes: xx,
  variants: Sx,
  defaultProps: te.defaultProps
}, { defineMultiStyleConfig: Tx, definePartsStyle: Cx } = de(Iy.keys), ei = ze("popper-bg"), Px = ze("popper-arrow-bg"), kc = ze("popper-arrow-shadow-color"), kx = { zIndex: 10 }, _x = {
  [ei.variable]: "colors.white",
  bg: ei.reference,
  [Px.variable]: ei.reference,
  [kc.variable]: "colors.gray.200",
  _dark: {
    [ei.variable]: "colors.gray.700",
    [kc.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, Ax = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, $x = {
  px: 3,
  py: 2
}, Ex = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, Rx = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, Mx = Cx({
  popper: kx,
  content: _x,
  header: Ax,
  body: $x,
  footer: Ex,
  closeButton: Rx
}), Ox = Tx({
  baseStyle: Mx
}), { defineMultiStyleConfig: zx, definePartsStyle: Yn } = de(Ly.keys), Dx = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = j(
    Sc(),
    Sc("1rem", "rgba(0,0,0,0.1)")
  )(e), s = j(`${t}.500`, `${t}.200`)(e), a = `linear-gradient(
    to right,
    transparent 0%,
    ${et(r, s)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && i,
    ...n ? { bgImage: a } : { bgColor: s }
  };
}, Bx = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, jx = (e) => ({
  bg: j("gray.100", "whiteAlpha.300")(e)
}), Vx = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...Dx(e)
}), Fx = Yn((e) => ({
  label: Bx,
  filledTrack: Vx(e),
  track: jx(e)
})), Ix = {
  xs: Yn({
    track: { h: "1" }
  }),
  sm: Yn({
    track: { h: "2" }
  }),
  md: Yn({
    track: { h: "3" }
  }),
  lg: Yn({
    track: { h: "4" }
  })
}, Lx = zx({
  sizes: Ix,
  baseStyle: Fx,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Nx, definePartsStyle: gi } = de(Ny.keys), Wx = (e) => {
  var r;
  const t = (r = tt(Pr.baseStyle, e)) == null ? void 0 : r.control;
  return {
    ...t,
    borderRadius: "full",
    _checked: {
      ...t == null ? void 0 : t._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, Hx = gi((e) => {
  var t, r;
  return {
    label: (t = Pr.baseStyle) == null ? void 0 : t.call(Pr, e).label,
    container: (r = Pr.baseStyle) == null ? void 0 : r.call(Pr, e).container,
    control: Wx(e)
  };
}), Ux = {
  md: gi({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: gi({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: gi({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, Gx = Nx({
  baseStyle: Hx,
  sizes: Ux,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: qx, definePartsStyle: Yx } = de(Wy.keys), ti = V("select-bg");
var kd;
const Kx = {
  ...(kd = te.baseStyle) == null ? void 0 : kd.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: ti.reference,
  [ti.variable]: "colors.white",
  _dark: {
    [ti.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: ti.reference
  }
}, Xx = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, Zx = Yx({
  field: Kx,
  icon: Xx
}), ri = {
  paddingInlineEnd: "8"
};
var _d, Ad, $d, Ed, Rd, Md, Od, zd;
const Jx = {
  lg: {
    ...(_d = te.sizes) == null ? void 0 : _d.lg,
    field: {
      ...(Ad = te.sizes) == null ? void 0 : Ad.lg.field,
      ...ri
    }
  },
  md: {
    ...($d = te.sizes) == null ? void 0 : $d.md,
    field: {
      ...(Ed = te.sizes) == null ? void 0 : Ed.md.field,
      ...ri
    }
  },
  sm: {
    ...(Rd = te.sizes) == null ? void 0 : Rd.sm,
    field: {
      ...(Md = te.sizes) == null ? void 0 : Md.sm.field,
      ...ri
    }
  },
  xs: {
    ...(Od = te.sizes) == null ? void 0 : Od.xs,
    field: {
      ...(zd = te.sizes) == null ? void 0 : zd.xs.field,
      ...ri
    },
    icon: {
      insetEnd: "1"
    }
  }
}, Qx = qx({
  baseStyle: Zx,
  sizes: Jx,
  variants: te.variants,
  defaultProps: te.defaultProps
}), Ns = V("skeleton-start-color"), Ws = V("skeleton-end-color"), eS = {
  [Ns.variable]: "colors.gray.100",
  [Ws.variable]: "colors.gray.400",
  _dark: {
    [Ns.variable]: "colors.gray.800",
    [Ws.variable]: "colors.gray.600"
  },
  background: Ns.reference,
  borderColor: Ws.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, tS = {
  baseStyle: eS
}, Hs = V("skip-link-bg"), rS = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Hs.variable]: "colors.white",
    _dark: {
      [Hs.variable]: "colors.gray.700"
    },
    bg: Hs.reference
  }
}, nS = {
  baseStyle: rS
}, { defineMultiStyleConfig: oS, definePartsStyle: Ji } = de(Hy.keys), go = V("slider-thumb-size"), yo = V("slider-track-size"), _r = V("slider-bg"), iS = (e) => {
  const { orientation: t } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...Za({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, sS = (e) => ({
  ...Za({
    orientation: e.orientation,
    horizontal: { h: yo.reference },
    vertical: { w: yo.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [_r.variable]: "colors.gray.200",
  _dark: {
    [_r.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [_r.variable]: "colors.gray.300",
    _dark: {
      [_r.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: _r.reference
}), aS = (e) => {
  const { orientation: t } = e;
  return {
    ...Za({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: go.reference,
    h: go.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, lS = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [_r.variable]: `colors.${t}.500`,
    _dark: {
      [_r.variable]: `colors.${t}.200`
    },
    bg: _r.reference
  };
}, cS = Ji((e) => ({
  container: iS(e),
  track: sS(e),
  thumb: aS(e),
  filledTrack: lS(e)
})), uS = Ji({
  container: {
    [go.variable]: "sizes.4",
    [yo.variable]: "sizes.1"
  }
}), dS = Ji({
  container: {
    [go.variable]: "sizes.3.5",
    [yo.variable]: "sizes.1"
  }
}), fS = Ji({
  container: {
    [go.variable]: "sizes.2.5",
    [yo.variable]: "sizes.0.5"
  }
}), hS = {
  lg: uS,
  md: dS,
  sm: fS
}, pS = oS({
  baseStyle: cS,
  sizes: hS,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Ir = ze("spinner-size"), mS = {
  width: [Ir.reference],
  height: [Ir.reference]
}, gS = {
  xs: {
    [Ir.variable]: "sizes.3"
  },
  sm: {
    [Ir.variable]: "sizes.4"
  },
  md: {
    [Ir.variable]: "sizes.6"
  },
  lg: {
    [Ir.variable]: "sizes.8"
  },
  xl: {
    [Ir.variable]: "sizes.12"
  }
}, yS = {
  baseStyle: mS,
  sizes: gS,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: bS, definePartsStyle: Cf } = de(Uy.keys), vS = {
  fontWeight: "medium"
}, xS = {
  opacity: 0.8,
  marginBottom: "2"
}, SS = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, wS = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, TS = Cf({
  container: {},
  label: vS,
  helpText: xS,
  number: SS,
  icon: wS
}), CS = {
  md: Cf({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, PS = bS({
  baseStyle: TS,
  sizes: CS,
  defaultProps: {
    size: "md"
  }
}), { defineMultiStyleConfig: kS, definePartsStyle: Kn } = de([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), sr = V("stepper-indicator-size"), on = V("stepper-icon-size"), sn = V("stepper-title-font-size"), Xn = V("stepper-description-font-size"), Ln = V("stepper-accent-color"), _S = Kn(({ colorScheme: e }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [Ln.variable]: `colors.${e}.500`,
    _dark: {
      [Ln.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: sn.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Xn.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: sn.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: on.reference,
    height: on.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: sr.reference,
    height: sr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Ln.reference
    },
    "&[data-status=complete]": {
      bg: Ln.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: Ln.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${sr.reference} - 8px)`,
      top: `calc(${sr.reference} + 4px)`,
      insetStart: `calc(${sr.reference} / 2 - 1px)`
    }
  }
})), AS = kS({
  baseStyle: _S,
  sizes: {
    xs: Kn({
      stepper: {
        [sr.variable]: "sizes.4",
        [on.variable]: "sizes.3",
        [sn.variable]: "fontSizes.xs",
        [Xn.variable]: "fontSizes.xs"
      }
    }),
    sm: Kn({
      stepper: {
        [sr.variable]: "sizes.6",
        [on.variable]: "sizes.4",
        [sn.variable]: "fontSizes.sm",
        [Xn.variable]: "fontSizes.xs"
      }
    }),
    md: Kn({
      stepper: {
        [sr.variable]: "sizes.8",
        [on.variable]: "sizes.5",
        [sn.variable]: "fontSizes.md",
        [Xn.variable]: "fontSizes.sm"
      }
    }),
    lg: Kn({
      stepper: {
        [sr.variable]: "sizes.10",
        [on.variable]: "sizes.6",
        [sn.variable]: "fontSizes.lg",
        [Xn.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: $S, definePartsStyle: yi } = de(Gy.keys), so = ze("switch-track-width"), Hr = ze("switch-track-height"), Us = ze("switch-track-diff"), ES = ir.subtract(so, Hr), xa = ze("switch-thumb-x"), Nn = ze("switch-bg"), RS = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [so.reference],
    height: [Hr.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Nn.variable]: "colors.gray.300",
    _dark: {
      [Nn.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Nn.variable]: `colors.${t}.500`,
      _dark: {
        [Nn.variable]: `colors.${t}.200`
      }
    },
    bg: Nn.reference
  };
}, MS = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Hr.reference],
  height: [Hr.reference],
  _checked: {
    transform: `translateX(${xa.reference})`
  }
}, OS = yi((e) => ({
  container: {
    [Us.variable]: ES,
    [xa.variable]: Us.reference,
    _rtl: {
      [xa.variable]: ir(Us).negate().toString()
    }
  },
  track: RS(e),
  thumb: MS
})), zS = {
  sm: yi({
    container: {
      [so.variable]: "1.375rem",
      [Hr.variable]: "sizes.3"
    }
  }),
  md: yi({
    container: {
      [so.variable]: "1.875rem",
      [Hr.variable]: "sizes.4"
    }
  }),
  lg: yi({
    container: {
      [so.variable]: "2.875rem",
      [Hr.variable]: "sizes.6"
    }
  })
}, DS = $S({
  baseStyle: OS,
  sizes: zS,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: BS, definePartsStyle: mn } = de(qy.keys), jS = mn({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), ji = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, VS = mn((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: j("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: j(`${t}.100`, `${t}.700`)(e),
      ...ji
    },
    td: {
      borderBottom: "1px",
      borderColor: j(`${t}.100`, `${t}.700`)(e),
      ...ji
    },
    caption: {
      color: j("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), FS = mn((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: j("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: j(`${t}.100`, `${t}.700`)(e),
      ...ji
    },
    td: {
      borderBottom: "1px",
      borderColor: j(`${t}.100`, `${t}.700`)(e),
      ...ji
    },
    caption: {
      color: j("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: j(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: j(`${t}.100`, `${t}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), IS = {
  simple: VS,
  striped: FS,
  unstyled: {}
}, LS = {
  sm: mn({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: mn({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: mn({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, NS = BS({
  baseStyle: jS,
  variants: IS,
  sizes: LS,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), it = V("tabs-color"), It = V("tabs-bg"), ni = V("tabs-border-color"), { defineMultiStyleConfig: WS, definePartsStyle: Kt } = de(Yy.keys), HS = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, US = (e) => {
  const { isFitted: t } = e;
  return {
    flex: t ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, GS = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, qS = {
  p: 4
}, YS = Kt((e) => ({
  root: HS(e),
  tab: US(e),
  tablist: GS(e),
  tabpanel: qS
})), KS = {
  sm: Kt({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Kt({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Kt({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, XS = Kt((e) => {
  const { colorScheme: t, orientation: r } = e, n = r === "vertical", o = n ? "borderStart" : "borderBottom", i = n ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [o]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [o]: "2px solid",
      borderColor: "transparent",
      [i]: "-2px",
      _selected: {
        [it.variable]: `colors.${t}.600`,
        _dark: {
          [it.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [It.variable]: "colors.gray.200",
        _dark: {
          [It.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: it.reference,
      bg: It.reference
    }
  };
}), ZS = Kt((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [ni.variable]: "transparent",
      _selected: {
        [it.variable]: `colors.${t}.600`,
        [ni.variable]: "colors.white",
        _dark: {
          [it.variable]: `colors.${t}.300`,
          [ni.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: ni.reference
      },
      color: it.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), JS = Kt((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [It.variable]: "colors.gray.50",
      _dark: {
        [It.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [It.variable]: "colors.white",
        [it.variable]: `colors.${t}.600`,
        _dark: {
          [It.variable]: "colors.gray.800",
          [it.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: it.reference,
      bg: It.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), QS = Kt((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: et(r, `${t}.700`),
        bg: et(r, `${t}.100`)
      }
    }
  };
}), e1 = Kt((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [it.variable]: "colors.gray.600",
      _dark: {
        [it.variable]: "inherit"
      },
      _selected: {
        [it.variable]: "colors.white",
        [It.variable]: `colors.${t}.600`,
        _dark: {
          [it.variable]: "colors.gray.800",
          [It.variable]: `colors.${t}.300`
        }
      },
      color: it.reference,
      bg: It.reference
    }
  };
}), t1 = Kt({}), r1 = {
  line: XS,
  enclosed: ZS,
  "enclosed-colored": JS,
  "soft-rounded": QS,
  "solid-rounded": e1,
  unstyled: t1
}, n1 = WS({
  baseStyle: YS,
  sizes: KS,
  variants: r1,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: o1, definePartsStyle: Ur } = de(Ky.keys), _c = V("tag-bg"), Ac = V("tag-color"), Gs = V("tag-shadow"), bi = V("tag-min-height"), vi = V("tag-min-width"), xi = V("tag-font-size"), Si = V("tag-padding-inline"), i1 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Ac.variable]: Ae.color.reference,
  [_c.variable]: Ae.bg.reference,
  [Gs.variable]: Ae.shadow.reference,
  color: Ac.reference,
  bg: _c.reference,
  boxShadow: Gs.reference,
  borderRadius: "md",
  minH: bi.reference,
  minW: vi.reference,
  fontSize: xi.reference,
  px: Si.reference,
  _focusVisible: {
    [Gs.variable]: "shadows.outline"
  }
}, s1 = {
  lineHeight: 1.2,
  overflow: "visible"
}, a1 = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, l1 = Ur({
  container: i1,
  label: s1,
  closeButton: a1
}), c1 = {
  sm: Ur({
    container: {
      [bi.variable]: "sizes.5",
      [vi.variable]: "sizes.5",
      [xi.variable]: "fontSizes.xs",
      [Si.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Ur({
    container: {
      [bi.variable]: "sizes.6",
      [vi.variable]: "sizes.6",
      [xi.variable]: "fontSizes.sm",
      [Si.variable]: "space.2"
    }
  }),
  lg: Ur({
    container: {
      [bi.variable]: "sizes.8",
      [vi.variable]: "sizes.8",
      [xi.variable]: "fontSizes.md",
      [Si.variable]: "space.3"
    }
  })
}, u1 = {
  subtle: Ur((e) => {
    var t;
    return {
      container: (t = no.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Ur((e) => {
    var t;
    return {
      container: (t = no.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Ur((e) => {
    var t;
    return {
      container: (t = no.variants) == null ? void 0 : t.outline(e)
    };
  })
}, d1 = o1({
  variants: u1,
  baseStyle: l1,
  sizes: c1,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});
var Dd;
const f1 = {
  ...(Dd = te.baseStyle) == null ? void 0 : Dd.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
};
var Bd;
const h1 = {
  outline: (e) => {
    var t;
    return ((t = te.variants) == null ? void 0 : t.outline(e).field) ?? {};
  },
  flushed: (e) => {
    var t;
    return ((t = te.variants) == null ? void 0 : t.flushed(e).field) ?? {};
  },
  filled: (e) => {
    var t;
    return ((t = te.variants) == null ? void 0 : t.filled(e).field) ?? {};
  },
  unstyled: ((Bd = te.variants) == null ? void 0 : Bd.unstyled.field) ?? {}
};
var jd, Vd, Fd, Id;
const p1 = {
  xs: ((jd = te.sizes) == null ? void 0 : jd.xs.field) ?? {},
  sm: ((Vd = te.sizes) == null ? void 0 : Vd.sm.field) ?? {},
  md: ((Fd = te.sizes) == null ? void 0 : Fd.md.field) ?? {},
  lg: ((Id = te.sizes) == null ? void 0 : Id.lg.field) ?? {}
}, m1 = {
  baseStyle: f1,
  sizes: p1,
  variants: h1,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, oi = ze("tooltip-bg"), qs = ze("tooltip-fg"), g1 = ze("popper-arrow-bg"), y1 = {
  bg: oi.reference,
  color: qs.reference,
  [oi.variable]: "colors.gray.700",
  [qs.variable]: "colors.whiteAlpha.900",
  _dark: {
    [oi.variable]: "colors.gray.300",
    [qs.variable]: "colors.gray.900"
  },
  [g1.variable]: oi.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, b1 = {
  baseStyle: y1
}, v1 = {
  Accordion: ob,
  Alert: Lb,
  Avatar: Jb,
  Badge: no,
  Breadcrumb: lv,
  Button: yv,
  Checkbox: Pr,
  CloseButton: Mv,
  Code: Bv,
  Container: Vv,
  Divider: Wv,
  Drawer: e0,
  Editable: a0,
  Form: h0,
  FormError: v0,
  FormLabel: S0,
  Heading: C0,
  Input: te,
  Kbd: z0,
  Link: B0,
  List: L0,
  Menu: J0,
  Modal: cx,
  NumberInput: bx,
  PinInput: wx,
  Popover: Ox,
  Progress: Lx,
  Radio: Gx,
  Select: Qx,
  Skeleton: tS,
  SkipLink: nS,
  Slider: pS,
  Spinner: yS,
  Stat: PS,
  Switch: DS,
  Table: NS,
  Tabs: n1,
  Tag: d1,
  Textarea: m1,
  Tooltip: b1,
  Card: wv,
  Stepper: AS
}, x1 = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, S1 = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, w1 = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  }
}, T1 = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, C1 = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, P1 = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, k1 = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, _1 = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, A1 = {
  property: P1,
  easing: k1,
  duration: _1
}, $1 = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, E1 = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, R1 = {
  breakpoints: S1,
  zIndices: $1,
  radii: T1,
  blur: E1,
  colors: w1,
  ...Sf,
  sizes: mf,
  shadows: C1,
  space: pf,
  borders: x1,
  transition: A1
}, M1 = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, O1 = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
}, z1 = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function D1(e) {
  return pt(e) ? z1.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
const B1 = "ltr", j1 = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, Pf = {
  semanticTokens: M1,
  direction: B1,
  ...R1,
  components: v1,
  styles: O1,
  config: j1
};
var V1 = !1;
function F1(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function I1(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var L1 = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !V1 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(I1(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = F1(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Ke = "-ms-", Vi = "-moz-", Q = "-webkit-", kf = "comm", tl = "rule", rl = "decl", N1 = "@import", _f = "@keyframes", W1 = "@layer", H1 = Math.abs, Qi = String.fromCharCode, U1 = Object.assign;
function G1(e, t) {
  return Le(e, 0) ^ 45 ? (((t << 2 ^ Le(e, 0)) << 2 ^ Le(e, 1)) << 2 ^ Le(e, 2)) << 2 ^ Le(e, 3) : 0;
}
function Af(e) {
  return e.trim();
}
function q1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function Sa(e, t) {
  return e.indexOf(t);
}
function Le(e, t) {
  return e.charCodeAt(t) | 0;
}
function bo(e, t, r) {
  return e.slice(t, r);
}
function qt(e) {
  return e.length;
}
function nl(e) {
  return e.length;
}
function ii(e, t) {
  return t.push(e), e;
}
function Y1(e, t) {
  return e.map(t).join("");
}
var es = 1, vn = 1, $f = 0, lt = 0, Ee = 0, An = "";
function ts(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: es, column: vn, length: s, return: "" };
}
function Wn(e, t) {
  return U1(ts("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function K1() {
  return Ee;
}
function X1() {
  return Ee = lt > 0 ? Le(An, --lt) : 0, vn--, Ee === 10 && (vn = 1, es--), Ee;
}
function gt() {
  return Ee = lt < $f ? Le(An, lt++) : 0, vn++, Ee === 10 && (vn = 1, es++), Ee;
}
function Xt() {
  return Le(An, lt);
}
function wi() {
  return lt;
}
function Ro(e, t) {
  return bo(An, e, t);
}
function vo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ef(e) {
  return es = vn = 1, $f = qt(An = e), lt = 0, [];
}
function Rf(e) {
  return An = "", e;
}
function Ti(e) {
  return Af(Ro(lt - 1, wa(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Z1(e) {
  for (; (Ee = Xt()) && Ee < 33; )
    gt();
  return vo(e) > 2 || vo(Ee) > 3 ? "" : " ";
}
function J1(e, t) {
  for (; --t && gt() && !(Ee < 48 || Ee > 102 || Ee > 57 && Ee < 65 || Ee > 70 && Ee < 97); )
    ;
  return Ro(e, wi() + (t < 6 && Xt() == 32 && gt() == 32));
}
function wa(e) {
  for (; gt(); )
    switch (Ee) {
      case e:
        return lt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wa(Ee);
        break;
      case 40:
        e === 41 && wa(e);
        break;
      case 92:
        gt();
        break;
    }
  return lt;
}
function Q1(e, t) {
  for (; gt() && e + Ee !== 57; )
    if (e + Ee === 84 && Xt() === 47)
      break;
  return "/*" + Ro(t, lt - 1) + "*" + Qi(e === 47 ? e : gt());
}
function ew(e) {
  for (; !vo(Xt()); )
    gt();
  return Ro(e, lt);
}
function tw(e) {
  return Rf(Ci("", null, null, null, [""], e = Ef(e), 0, [0], e));
}
function Ci(e, t, r, n, o, i, s, a, l) {
  for (var c = 0, u = 0, d = s, f = 0, p = 0, g = 0, y = 1, v = 1, w = 1, S = 0, T = "", k = o, C = i, $ = n, E = T; v; )
    switch (g = S, S = gt()) {
      case 40:
        if (g != 108 && Le(E, d - 1) == 58) {
          Sa(E += ee(Ti(S), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Ti(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Z1(g);
        break;
      case 92:
        E += J1(wi() - 1, 7);
        continue;
      case 47:
        switch (Xt()) {
          case 42:
          case 47:
            ii(rw(Q1(gt(), wi()), t, r), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * y:
        a[c++] = qt(E) * w;
      case 125 * y:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            v = 0;
          case 59 + u:
            w == -1 && (E = ee(E, /\f/g, "")), p > 0 && qt(E) - d && ii(p > 32 ? Ec(E + ";", n, r, d - 1) : Ec(ee(E, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            E += ";";
          default:
            if (ii($ = $c(E, t, r, c, u, o, a, T, k = [], C = [], d), i), S === 123)
              if (u === 0)
                Ci(E, t, $, $, k, i, d, a, C);
              else
                switch (f === 99 && Le(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ci(e, $, $, n && ii($c(e, $, $, 0, 0, o, a, T, o, k = [], d), C), o, C, d, a, n ? k : C);
                    break;
                  default:
                    Ci(E, $, $, $, [""], C, 0, a, C);
                }
        }
        c = u = p = 0, y = w = 1, T = E = "", d = s;
        break;
      case 58:
        d = 1 + qt(E), p = g;
      default:
        if (y < 1) {
          if (S == 123)
            --y;
          else if (S == 125 && y++ == 0 && X1() == 125)
            continue;
        }
        switch (E += Qi(S), S * y) {
          case 38:
            w = u > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            a[c++] = (qt(E) - 1) * w, w = 1;
            break;
          case 64:
            Xt() === 45 && (E += Ti(gt())), f = Xt(), u = d = qt(T = E += ew(wi())), S++;
            break;
          case 45:
            g === 45 && qt(E) == 2 && (y = 0);
        }
    }
  return i;
}
function $c(e, t, r, n, o, i, s, a, l, c, u) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = nl(f), g = 0, y = 0, v = 0; g < n; ++g)
    for (var w = 0, S = bo(e, d + 1, d = H1(y = s[g])), T = e; w < p; ++w)
      (T = Af(y > 0 ? f[w] + " " + S : ee(S, /&\f/g, f[w]))) && (l[v++] = T);
  return ts(e, t, r, o === 0 ? tl : a, l, c, u);
}
function rw(e, t, r) {
  return ts(e, t, r, kf, Qi(K1()), bo(e, 2, -2), 0);
}
function Ec(e, t, r, n) {
  return ts(e, t, r, rl, bo(e, 0, n), bo(e, n + 1, -1), n);
}
function gn(e, t) {
  for (var r = "", n = nl(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function nw(e, t, r, n) {
  switch (e.type) {
    case W1:
      if (e.children.length) break;
    case N1:
    case rl:
      return e.return = e.return || e.value;
    case kf:
      return "";
    case _f:
      return e.return = e.value + "{" + gn(e.children, n) + "}";
    case tl:
      e.value = e.props.join(",");
  }
  return qt(r = gn(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ow(e) {
  var t = nl(e);
  return function(r, n, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](r, n, o, i) || "";
    return s;
  };
}
function iw(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Rc = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function Mf(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var sw = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Xt(), o === 38 && i === 12 && (r[n] = 1), !vo(i); )
    gt();
  return Ro(t, lt);
}, aw = function(t, r) {
  var n = -1, o = 44;
  do
    switch (vo(o)) {
      case 0:
        o === 38 && Xt() === 12 && (r[n] = 1), t[n] += sw(lt - 1, r, n);
        break;
      case 2:
        t[n] += Ti(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Xt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Qi(o);
    }
  while (o = gt());
  return t;
}, lw = function(t, r) {
  return Rf(aw(Ef(t), r));
}, Mc = /* @__PURE__ */ new WeakMap(), cw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Mc.get(n)) && !o) {
      Mc.set(t, !0);
      for (var i = [], s = lw(r, i), a = n.props, l = 0, c = 0; l < s.length; l++)
        for (var u = 0; u < a.length; u++, c++)
          t.props[c] = i[l] ? s[l].replace(/&\f/g, a[u]) : a[u] + " " + s[l];
    }
  }
}, uw = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Of(e, t) {
  switch (G1(e, t)) {
    case 5103:
      return Q + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Q + e + Vi + e + Ke + e + e;
    case 6828:
    case 4268:
      return Q + e + Ke + e + e;
    case 6165:
      return Q + e + Ke + "flex-" + e + e;
    case 5187:
      return Q + e + ee(e, /(\w+).+(:[^]+)/, Q + "box-$1$2" + Ke + "flex-$1$2") + e;
    case 5443:
      return Q + e + Ke + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return Q + e + Ke + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Q + e + Ke + ee(e, "shrink", "negative") + e;
    case 5292:
      return Q + e + Ke + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return Q + "box-" + ee(e, "-grow", "") + Q + e + Ke + ee(e, "grow", "positive") + e;
    case 4554:
      return Q + ee(e, /([^-])(transform)/g, "$1" + Q + "$2") + e;
    case 6187:
      return ee(ee(ee(e, /(zoom-|grab)/, Q + "$1"), /(image-set)/, Q + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Q + "$1$`$1");
    case 4968:
      return ee(ee(e, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + Ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Q + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, Q + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (qt(e) - 1 - t > 6) switch (Le(e, t + 1)) {
        case 109:
          if (Le(e, t + 4) !== 45) break;
        case 102:
          return ee(e, /(.+:)(.+)-([^]+)/, "$1" + Q + "$2-$3$1" + Vi + (Le(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Sa(e, "stretch") ? Of(ee(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Le(e, t + 1) !== 115) break;
    case 6444:
      switch (Le(e, qt(e) - 3 - (~Sa(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + Q) + e;
        case 101:
          return ee(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Q + (Le(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Q + "$2$3$1" + Ke + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Le(e, t + 11)) {
        case 114:
          return Q + e + Ke + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Q + e + Ke + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Q + e + Ke + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Q + e + Ke + e + e;
  }
  return e;
}
var dw = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case rl:
      t.return = Of(t.value, t.length);
      break;
    case _f:
      return gn([Wn(t, {
        value: ee(t.value, "@", "@" + Q)
      })], o);
    case tl:
      if (t.length) return Y1(t.props, function(i) {
        switch (q1(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return gn([Wn(t, {
              props: [ee(i, /:(read-\w+)/, ":" + Vi + "$1")]
            })], o);
          case "::placeholder":
            return gn([Wn(t, {
              props: [ee(i, /:(plac\w+)/, ":" + Q + "input-$1")]
            }), Wn(t, {
              props: [ee(i, /:(plac\w+)/, ":" + Vi + "$1")]
            }), Wn(t, {
              props: [ee(i, /:(plac\w+)/, Ke + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, fw = [dw], hw = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var v = y.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || fw, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(y) {
      for (var v = y.getAttribute("data-emotion").split(" "), w = 1; w < v.length; w++)
        i[v[w]] = !0;
      a.push(y);
    }
  );
  var l, c = [cw, uw];
  {
    var u, d = [nw, iw(function(y) {
      u.insert(y);
    })], f = ow(c.concat(o, d)), p = function(v) {
      return gn(tw(v), f);
    };
    l = function(v, w, S, T) {
      u = S, p(v ? v + "{" + w.styles + "}" : w.styles), T && (g.inserted[w.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new L1({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return g.sheet.hydrate(a), g;
};
function Fi() {
  return Fi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fi.apply(null, arguments);
}
var Ta = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oc;
function pw() {
  if (Oc) return ne;
  Oc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function T(C) {
    if (typeof C == "object" && C !== null) {
      var $ = C.$$typeof;
      switch ($) {
        case t:
          switch (C = C.type, C) {
            case l:
            case c:
            case n:
            case i:
            case o:
            case d:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case a:
                case u:
                case g:
                case p:
                case s:
                  return C;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  function k(C) {
    return T(C) === c;
  }
  return ne.AsyncMode = l, ne.ConcurrentMode = c, ne.ContextConsumer = a, ne.ContextProvider = s, ne.Element = t, ne.ForwardRef = u, ne.Fragment = n, ne.Lazy = g, ne.Memo = p, ne.Portal = r, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = d, ne.isAsyncMode = function(C) {
    return k(C) || T(C) === l;
  }, ne.isConcurrentMode = k, ne.isContextConsumer = function(C) {
    return T(C) === a;
  }, ne.isContextProvider = function(C) {
    return T(C) === s;
  }, ne.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, ne.isForwardRef = function(C) {
    return T(C) === u;
  }, ne.isFragment = function(C) {
    return T(C) === n;
  }, ne.isLazy = function(C) {
    return T(C) === g;
  }, ne.isMemo = function(C) {
    return T(C) === p;
  }, ne.isPortal = function(C) {
    return T(C) === r;
  }, ne.isProfiler = function(C) {
    return T(C) === i;
  }, ne.isStrictMode = function(C) {
    return T(C) === o;
  }, ne.isSuspense = function(C) {
    return T(C) === d;
  }, ne.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === c || C === i || C === o || C === d || C === f || typeof C == "object" && C !== null && (C.$$typeof === g || C.$$typeof === p || C.$$typeof === s || C.$$typeof === a || C.$$typeof === u || C.$$typeof === v || C.$$typeof === w || C.$$typeof === S || C.$$typeof === y);
  }, ne.typeOf = T, ne;
}
var oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zc;
function mw() {
  return zc || (zc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function T(z) {
      return typeof z == "string" || typeof z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      z === n || z === c || z === i || z === o || z === d || z === f || typeof z == "object" && z !== null && (z.$$typeof === g || z.$$typeof === p || z.$$typeof === s || z.$$typeof === a || z.$$typeof === u || z.$$typeof === v || z.$$typeof === w || z.$$typeof === S || z.$$typeof === y);
    }
    function k(z) {
      if (typeof z == "object" && z !== null) {
        var St = z.$$typeof;
        switch (St) {
          case t:
            var wt = z.type;
            switch (wt) {
              case l:
              case c:
              case n:
              case i:
              case o:
              case d:
                return wt;
              default:
                var N = wt && wt.$$typeof;
                switch (N) {
                  case a:
                  case u:
                  case g:
                  case p:
                  case s:
                    return N;
                  default:
                    return St;
                }
            }
          case r:
            return St;
        }
      }
    }
    var C = l, $ = c, E = a, O = s, I = t, M = u, L = n, pe = g, q = p, fe = r, Te = i, se = o, W = d, le = !1;
    function xe(z) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), De(z) || k(z) === l;
    }
    function De(z) {
      return k(z) === c;
    }
    function ct(z) {
      return k(z) === a;
    }
    function nt(z) {
      return k(z) === s;
    }
    function U(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function Ge(z) {
      return k(z) === u;
    }
    function Ve(z) {
      return k(z) === n;
    }
    function Me(z) {
      return k(z) === g;
    }
    function Qe(z) {
      return k(z) === p;
    }
    function Ce(z) {
      return k(z) === r;
    }
    function $e(z) {
      return k(z) === i;
    }
    function qe(z) {
      return k(z) === o;
    }
    function ut(z) {
      return k(z) === d;
    }
    oe.AsyncMode = C, oe.ConcurrentMode = $, oe.ContextConsumer = E, oe.ContextProvider = O, oe.Element = I, oe.ForwardRef = M, oe.Fragment = L, oe.Lazy = pe, oe.Memo = q, oe.Portal = fe, oe.Profiler = Te, oe.StrictMode = se, oe.Suspense = W, oe.isAsyncMode = xe, oe.isConcurrentMode = De, oe.isContextConsumer = ct, oe.isContextProvider = nt, oe.isElement = U, oe.isForwardRef = Ge, oe.isFragment = Ve, oe.isLazy = Me, oe.isMemo = Qe, oe.isPortal = Ce, oe.isProfiler = $e, oe.isStrictMode = qe, oe.isSuspense = ut, oe.isValidElementType = T, oe.typeOf = k;
  }()), oe;
}
process.env.NODE_ENV === "production" ? Ta.exports = pw() : Ta.exports = mw();
var gw = Ta.exports, zf = gw, yw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, bw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Df = {};
Df[zf.ForwardRef] = yw;
Df[zf.Memo] = bw;
var vw = !0;
function xw(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Bf = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  vw === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, jf = function(t, r, n) {
  Bf(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Sw(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var ww = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Tw = !1, Cw = /[A-Z]|^ms/g, Pw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Vf = function(t) {
  return t.charCodeAt(1) === 45;
}, Dc = function(t) {
  return t != null && typeof t != "boolean";
}, Ys = /* @__PURE__ */ Mf(function(e) {
  return Vf(e) ? e : e.replace(Cw, "-$&").toLowerCase();
}), Bc = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Pw, function(n, o, i) {
          return Yt = {
            name: o,
            styles: i,
            next: Yt
          }, o;
        });
  }
  return ww[t] !== 1 && !Vf(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, kw = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function xo(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Yt = {
          name: o.name,
          styles: o.styles,
          next: Yt
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Yt = {
              name: s.name,
              styles: s.styles,
              next: Yt
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return _w(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Yt, c = r(e);
        return Yt = l, xo(e, t, c);
      }
      break;
    }
  }
  var u = r;
  if (t == null)
    return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function _w(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += xo(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : Dc(a) && (n += Ys(i) + ":" + Bc(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && Tw)
          throw new Error(kw);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            Dc(s[l]) && (n += Ys(i) + ":" + Bc(i, s[l]) + ";");
        else {
          var c = xo(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Ys(i) + ":" + c + ";";
              break;
            }
            default:
              n += i + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
var jc = /label:\s*([^\s;{]+)\s*(;|$)/g, Yt;
function ol(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Yt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += xo(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += xo(r, t, e[a]), n) {
      var l = i;
      o += l[a];
    }
  jc.lastIndex = 0;
  for (var c = "", u; (u = jc.exec(o)) !== null; )
    c += "-" + u[1];
  var d = Sw(o) + c;
  return {
    name: d,
    styles: o,
    next: Yt
  };
}
var Aw = function(t) {
  return t();
}, Ff = Ne.useInsertionEffect ? Ne.useInsertionEffect : !1, $w = Ff || Aw, Vc = Ff || Ne.useLayoutEffect, If = /* @__PURE__ */ Ne.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ hw({
    key: "css"
  }) : null
);
If.Provider;
var il = function(t) {
  return /* @__PURE__ */ Yi(function(r, n) {
    var o = _e(If);
    return t(r, o, n);
  });
}, So = /* @__PURE__ */ Ne.createContext({}), Ew = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    return n;
  }
  return Fi({}, t, r);
}, Rw = /* @__PURE__ */ Rc(function(e) {
  return Rc(function(t) {
    return Ew(e, t);
  });
}), Mw = function(t) {
  var r = Ne.useContext(So);
  return t.theme !== r && (r = Rw(r)(t.theme)), /* @__PURE__ */ Ne.createElement(So.Provider, {
    value: r
  }, t.children);
}, rs = /* @__PURE__ */ il(function(e, t) {
  var r = e.styles, n = ol([r], void 0, Ne.useContext(So)), o = Ne.useRef();
  return Vc(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), Vc(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && jf(t, n.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
function Ow() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return ol(t);
}
var zw = function() {
  var t = Ow.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
const sl = gr({});
sl.displayName = "ColorModeContext";
function al() {
  const e = _e(sl);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
const si = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function Dw(e = {}) {
  const { preventTransition: t = !0, nonce: r } = e, n = {
    setDataset: (o) => {
      const i = t ? n.preventTransition() : void 0;
      document.documentElement.dataset.theme = o, document.documentElement.style.colorScheme = o, i == null || i();
    },
    setClassName(o) {
      document.body.classList.add(o ? si.dark : si.light), document.body.classList.remove(o ? si.light : si.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(o) {
      return n.query().matches ?? o === "dark" ? "dark" : "light";
    },
    addListener(o) {
      const i = n.query(), s = (a) => {
        o(a.matches ? "dark" : "light");
      };
      return typeof i.addListener == "function" ? i.addListener(s) : i.addEventListener("change", s), () => {
        typeof i.removeListener == "function" ? i.removeListener(s) : i.removeEventListener("change", s);
      };
    },
    preventTransition() {
      const o = document.createElement("style");
      return o.appendChild(
        document.createTextNode(
          "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
        )
      ), r !== void 0 && (o.nonce = r), document.head.appendChild(o), () => {
        window.getComputedStyle(document.body), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(o);
          });
        });
      };
    }
  };
  return n;
}
const Bw = "chakra-ui-color-mode";
function jw(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document))
        return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {
      }
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
const Vw = jw(Bw), Fc = () => {
}, Fw = Mm() ? Wa : He;
function Ic(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
const Lf = il(function(t, r) {
  const {
    value: n,
    children: o,
    options: {
      useSystemColorMode: i,
      initialColorMode: s,
      disableTransitionOnChange: a
    } = {},
    colorModeManager: l = Vw
  } = t, c = s === "dark" ? "dark" : "light", [u, d] = rt(
    () => Ic(l, c)
  ), [f, p] = rt(
    () => Ic(l)
  ), { getSystemTheme: g, setClassName: y, setDataset: v, addListener: w } = Ue(
    () => Dw({
      preventTransition: a,
      nonce: r == null ? void 0 : r.nonce
    }),
    [a, r == null ? void 0 : r.nonce]
  ), S = s === "system" && !u ? f : u, T = ve(
    ($) => {
      const E = $ === "system" ? g() : $;
      d(E), y(E === "dark"), v(E), l.set(E);
    },
    [l, g, y, v]
  );
  Fw(() => {
    s === "system" && p(g());
  }, []), He(() => {
    const $ = l.get();
    if ($) {
      T($);
      return;
    }
    if (s === "system") {
      T("system");
      return;
    }
    T(c);
  }, [l, c, s, T]);
  const k = ve(() => {
    T(S === "dark" ? "light" : "dark");
  }, [S, T]);
  He(() => {
    if (i)
      return w(T);
  }, [i, w, T]);
  const C = Ue(
    () => ({
      colorMode: n ?? S,
      toggleColorMode: n ? Fc : k,
      setColorMode: n ? Fc : T,
      forced: n !== void 0
    }),
    [S, k, T, n]
  );
  return /* @__PURE__ */ _.jsx(sl.Provider, { value: C, children: o });
});
Lf.displayName = "ColorModeProvider";
const Nf = String.raw, Wf = Nf`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`, Iw = () => /* @__PURE__ */ _.jsx(rs, { styles: Wf }), Lw = ({ scope: e = "" }) => /* @__PURE__ */ _.jsx(
  rs,
  {
    styles: Nf`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${Wf}
    `
  }
);
function Nw(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = Ue(() => Py(r), [r]);
  return /* @__PURE__ */ _.jsxs(Mw, { theme: o, children: [
    /* @__PURE__ */ _.jsx(Ww, { root: t }),
    n
  ] });
}
function Ww({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ _.jsx(rs, { styles: (r) => ({ [t]: r.__cssVars }) });
}
yr({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function Hw() {
  const { colorMode: e } = al();
  return /* @__PURE__ */ _.jsx(
    rs,
    {
      styles: (t) => {
        const r = tf(t, "styles.global"), n = Lt(r, { theme: t, colorMode: e });
        return n ? uf(n)(t) : void 0;
      }
    }
  );
}
const [Uw, Gw] = yr({
  strict: !1,
  name: "PortalManagerContext"
});
function Hf(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ _.jsx(Uw, { value: { zIndex: r }, children: t });
}
Hf.displayName = "PortalManager";
const Uf = gr({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Uf.displayName = "EnvironmentContext";
function Gf(e) {
  const { children: t, environment: r, disabled: n } = e, o = ue(null), i = Ue(() => r || {
    getDocument: () => {
      var a;
      return ((a = o.current) == null ? void 0 : a.ownerDocument) ?? document;
    },
    getWindow: () => {
      var a;
      return ((a = o.current) == null ? void 0 : a.ownerDocument.defaultView) ?? window;
    }
  }, [r]), s = !n || !r;
  return /* @__PURE__ */ _.jsxs(Uf.Provider, { value: i, children: [
    t,
    s && /* @__PURE__ */ _.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
Gf.displayName = "EnvironmentProvider";
const qw = (e) => {
  const {
    children: t,
    colorModeManager: r,
    portalZIndex: n,
    resetScope: o,
    resetCSS: i = !0,
    theme: s = {},
    environment: a,
    cssVarsRoot: l,
    disableEnvironment: c,
    disableGlobalStyle: u
  } = e, d = /* @__PURE__ */ _.jsx(
    Gf,
    {
      environment: a,
      disabled: c,
      children: t
    }
  );
  return /* @__PURE__ */ _.jsx(Nw, { theme: s, cssVarsRoot: l, children: /* @__PURE__ */ _.jsxs(
    Lf,
    {
      colorModeManager: r,
      options: s.config,
      children: [
        i ? /* @__PURE__ */ _.jsx(Lw, { scope: o }) : /* @__PURE__ */ _.jsx(Iw, {}),
        !u && /* @__PURE__ */ _.jsx(Hw, {}),
        n ? /* @__PURE__ */ _.jsx(Hf, { zIndex: n, children: d }) : d
      ]
    }
  ) });
}, Lc = /* @__PURE__ */ new Set();
function ns(e, t, r) {
  e || Lc.has(t) || (console.warn(t), Lc.add(t));
}
function Yw(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), r = (...n) => (process.env.NODE_ENV !== "production" && ns(!1, "motion() is deprecated. Use motion.create() instead."), e(...n));
  return new Proxy(r, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (n, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
function wo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ca = (e) => Array.isArray(e);
function qf(e, t) {
  if (!Array.isArray(t))
    return !1;
  const r = t.length;
  if (r !== e.length)
    return !1;
  for (let n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function To(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Nc(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((r, n) => {
    t[0][n] = r.get(), t[1][n] = r.getVelocity();
  }), t;
}
function ll(e, t, r, n) {
  if (typeof t == "function") {
    const [o, i] = Nc(n);
    t = t(r !== void 0 ? r : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = Nc(n);
    t = t(r !== void 0 ? r : e.custom, o, i);
  }
  return t;
}
function os(e, t, r) {
  const n = e.getProps();
  return ll(n, t, r !== void 0 ? r : n.custom, e);
}
const cl = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ul = ["initial", ...cl], Mo = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Rr = new Set(Mo), Zt = (e) => e * 1e3, ur = (e) => e / 1e3, Kw = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Xw = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Zw = {
  type: "keyframes",
  duration: 0.8
}, Jw = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Qw = (e, { keyframes: t }) => t.length > 2 ? Zw : Rr.has(e) ? e.startsWith("scale") ? Xw(t[1]) : Kw : Jw;
function dl(e, t) {
  return e[t] || e.default || e;
}
const eT = {
  skipAnimations: !1,
  useManualTiming: !1
}, tT = (e) => e !== null;
function is(e, { repeat: t, repeatType: r = "loop" }, n) {
  const o = e.filter(tT), i = t && r !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || n === void 0 ? o[i] : n;
}
const We = (e) => e;
function rT(e) {
  let t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = !1, o = !1;
  const i = /* @__PURE__ */ new WeakSet();
  let s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(c) {
    i.has(c) && (l.schedule(c), e()), c(s);
  }
  const l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, u = !1, d = !1) => {
      const p = d && n ? t : r;
      return u && i.add(c), p.has(c) || p.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      r.delete(c), i.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (s = c, n) {
        o = !0;
        return;
      }
      n = !0, [t, r] = [r, t], r.clear(), t.forEach(a), n = !1, o && (o = !1, l.process(c));
    }
  };
  return l;
}
const ai = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], nT = 40;
function Yf(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => r = !0, s = ai.reduce((w, S) => (w[S] = rT(i), w), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: d, postRender: f } = s, p = () => {
    const w = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(w - o.timestamp, nT), 1), o.timestamp = w, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), u.process(o), d.process(o), f.process(o), o.isProcessing = !1, r && t && (n = !1, e(p));
  }, g = () => {
    r = !0, n = !0, o.isProcessing || e(p);
  };
  return { schedule: ai.reduce((w, S) => {
    const T = s[S];
    return w[S] = (k, C = !1, $ = !1) => (r || g(), T.schedule(k, C, $)), w;
  }, {}), cancel: (w) => {
    for (let S = 0; S < ai.length; S++)
      s[ai[S]].cancel(w);
  }, state: o, steps: s };
}
const { schedule: ae, cancel: Ar, state: Ie, steps: Ks } = Yf(typeof requestAnimationFrame < "u" ? requestAnimationFrame : We, !0), Kf = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, oT = 1e-7, iT = 12;
function sT(e, t, r, n, o) {
  let i, s, a = 0;
  do
    s = t + (r - t) / 2, i = Kf(s, n, o) - e, i > 0 ? r = s : t = s;
  while (Math.abs(i) > oT && ++a < iT);
  return s;
}
function Oo(e, t, r, n) {
  if (e === t && r === n)
    return We;
  const o = (i) => sT(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : Kf(o(i), t, n);
}
const Xf = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Zf = (e) => (t) => 1 - e(1 - t), Jf = /* @__PURE__ */ Oo(0.33, 1.53, 0.69, 0.99), fl = /* @__PURE__ */ Zf(Jf), Qf = /* @__PURE__ */ Xf(fl), eh = (e) => (e *= 2) < 1 ? 0.5 * fl(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), hl = (e) => 1 - Math.sin(Math.acos(e)), th = Zf(hl), rh = Xf(hl), nh = (e) => /^0[^.\s]+$/u.test(e);
function aT(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || nh(e) : !0;
}
let $n = We, pr = We;
process.env.NODE_ENV !== "production" && ($n = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, pr = (e, t) => {
  if (!e)
    throw new Error(t);
});
const oh = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), ih = (e) => (t) => typeof t == "string" && t.startsWith(e), sh = /* @__PURE__ */ ih("--"), lT = /* @__PURE__ */ ih("var(--"), pl = (e) => lT(e) ? cT.test(e.split("/*")[0].trim()) : !1, cT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, uT = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function dT(e) {
  const t = uT.exec(e);
  if (!t)
    return [,];
  const [, r, n, o] = t;
  return [`--${r ?? n}`, o];
}
const fT = 4;
function ah(e, t, r = 1) {
  pr(r <= fT, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [n, o] = dT(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const s = i.trim();
    return oh(s) ? parseFloat(s) : s;
  }
  return pl(o) ? ah(o, t, r + 1) : o;
}
const $r = (e, t, r) => r > t ? t : r < e ? e : r, En = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Co = {
  ...En,
  transform: (e) => $r(0, 1, e)
}, li = {
  ...En,
  default: 1
}, zo = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Cr = /* @__PURE__ */ zo("deg"), Jt = /* @__PURE__ */ zo("%"), F = /* @__PURE__ */ zo("px"), hT = /* @__PURE__ */ zo("vh"), pT = /* @__PURE__ */ zo("vw"), Wc = {
  ...Jt,
  parse: (e) => Jt.parse(e) / 100,
  transform: (e) => Jt.transform(e * 100)
}, mT = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), Hc = (e) => e === En || e === F, Uc = (e, t) => parseFloat(e.split(", ")[t]), Gc = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return Uc(o[1], t);
  {
    const i = n.match(/^matrix\((.+)\)$/u);
    return i ? Uc(i[1], e) : 0;
  }
}, gT = /* @__PURE__ */ new Set(["x", "y", "z"]), yT = Mo.filter((e) => !gT.has(e));
function bT(e) {
  const t = [];
  return yT.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t;
}
const xn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Gc(4, 13),
  y: Gc(5, 14)
};
xn.translateX = xn.x;
xn.translateY = xn.y;
const lh = (e) => (t) => t.test(e), vT = {
  test: (e) => e === "auto",
  parse: (e) => e
}, ch = [En, F, Jt, Cr, pT, hT, vT], qc = (e) => ch.find(lh(e)), Gr = /* @__PURE__ */ new Set();
let Pa = !1, ka = !1;
function uh() {
  if (ka) {
    const e = Array.from(Gr).filter((n) => n.needsMeasurement), t = new Set(e.map((n) => n.element)), r = /* @__PURE__ */ new Map();
    t.forEach((n) => {
      const o = bT(n);
      o.length && (r.set(n, o), n.render());
    }), e.forEach((n) => n.measureInitialState()), t.forEach((n) => {
      n.render();
      const o = r.get(n);
      o && o.forEach(([i, s]) => {
        var a;
        (a = n.getValue(i)) === null || a === void 0 || a.set(s);
      });
    }), e.forEach((n) => n.measureEndState()), e.forEach((n) => {
      n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
    });
  }
  ka = !1, Pa = !1, Gr.forEach((e) => e.complete()), Gr.clear();
}
function dh() {
  Gr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ka = !0);
  });
}
function xT() {
  dh(), uh();
}
class ml {
  constructor(t, r, n, o, i, s = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = r, this.name = n, this.motionValue = o, this.element = i, this.isAsync = s;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Gr.add(this), Pa || (Pa = !0, ae.read(dh), ae.resolveKeyframes(uh))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: r, element: n, motionValue: o } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(), a = t[t.length - 1];
          if (s !== void 0)
            t[0] = s;
          else if (n && r) {
            const l = n.readValue(r, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else
          t[i] = t[i - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Gr.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Gr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const ao = (e) => Math.round(e * 1e5) / 1e5, gl = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ST(e) {
  return e == null;
}
const wT = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, yl = (e, t) => (r) => !!(typeof r == "string" && wT.test(r) && r.startsWith(e) || t && !ST(r) && Object.prototype.hasOwnProperty.call(r, t)), fh = (e, t, r) => (n) => {
  if (typeof n != "string")
    return n;
  const [o, i, s, a] = n.match(gl);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, TT = (e) => $r(0, 255, e), Xs = {
  ...En,
  transform: (e) => Math.round(TT(e))
}, Nr = {
  test: /* @__PURE__ */ yl("rgb", "red"),
  parse: /* @__PURE__ */ fh("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + Xs.transform(e) + ", " + Xs.transform(t) + ", " + Xs.transform(r) + ", " + ao(Co.transform(n)) + ")"
};
function CT(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const _a = {
  test: /* @__PURE__ */ yl("#"),
  parse: CT,
  transform: Nr.transform
}, an = {
  test: /* @__PURE__ */ yl("hsl", "hue"),
  parse: /* @__PURE__ */ fh("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Jt.transform(ao(t)) + ", " + Jt.transform(ao(r)) + ", " + ao(Co.transform(n)) + ")"
}, Xe = {
  test: (e) => Nr.test(e) || _a.test(e) || an.test(e),
  parse: (e) => Nr.test(e) ? Nr.parse(e) : an.test(e) ? an.parse(e) : _a.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Nr.transform(e) : an.transform(e)
}, PT = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function kT(e) {
  var t, r;
  return isNaN(e) && typeof e == "string" && (((t = e.match(gl)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(PT)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const hh = "number", ph = "color", _T = "var", AT = "var(", Yc = "${}", $T = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Po(e) {
  const t = e.toString(), r = [], n = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const a = t.replace($T, (l) => (Xe.test(l) ? (n.color.push(i), o.push(ph), r.push(Xe.parse(l))) : l.startsWith(AT) ? (n.var.push(i), o.push(_T), r.push(l)) : (n.number.push(i), o.push(hh), r.push(parseFloat(l))), ++i, Yc)).split(Yc);
  return { values: r, split: a, indexes: n, types: o };
}
function mh(e) {
  return Po(e).values;
}
function gh(e) {
  const { split: t, types: r } = Po(e), n = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < n; s++)
      if (i += t[s], o[s] !== void 0) {
        const a = r[s];
        a === hh ? i += ao(o[s]) : a === ph ? i += Xe.transform(o[s]) : i += o[s];
      }
    return i;
  };
}
const ET = (e) => typeof e == "number" ? 0 : e;
function RT(e) {
  const t = mh(e);
  return gh(e)(t.map(ET));
}
const Er = {
  test: kT,
  parse: mh,
  createTransformer: gh,
  getAnimatableNone: RT
}, MT = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function OT(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(gl) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = MT.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const zT = /\b([a-z-]*)\(.*?\)/gu, Aa = {
  ...Er,
  getAnimatableNone: (e) => {
    const t = e.match(zT);
    return t ? t.map(OT).join(" ") : e;
  }
}, DT = {
  // Border props
  borderWidth: F,
  borderTopWidth: F,
  borderRightWidth: F,
  borderBottomWidth: F,
  borderLeftWidth: F,
  borderRadius: F,
  radius: F,
  borderTopLeftRadius: F,
  borderTopRightRadius: F,
  borderBottomRightRadius: F,
  borderBottomLeftRadius: F,
  // Positioning props
  width: F,
  maxWidth: F,
  height: F,
  maxHeight: F,
  top: F,
  right: F,
  bottom: F,
  left: F,
  // Spacing props
  padding: F,
  paddingTop: F,
  paddingRight: F,
  paddingBottom: F,
  paddingLeft: F,
  margin: F,
  marginTop: F,
  marginRight: F,
  marginBottom: F,
  marginLeft: F,
  // Misc
  backgroundPositionX: F,
  backgroundPositionY: F
}, BT = {
  rotate: Cr,
  rotateX: Cr,
  rotateY: Cr,
  rotateZ: Cr,
  scale: li,
  scaleX: li,
  scaleY: li,
  scaleZ: li,
  skew: Cr,
  skewX: Cr,
  skewY: Cr,
  distance: F,
  translateX: F,
  translateY: F,
  translateZ: F,
  x: F,
  y: F,
  z: F,
  perspective: F,
  transformPerspective: F,
  opacity: Co,
  originX: Wc,
  originY: Wc,
  originZ: F
}, Kc = {
  ...En,
  transform: Math.round
}, bl = {
  ...DT,
  ...BT,
  zIndex: Kc,
  size: F,
  // SVG
  fillOpacity: Co,
  strokeOpacity: Co,
  numOctaves: Kc
}, jT = {
  ...bl,
  // Color props
  color: Xe,
  backgroundColor: Xe,
  outlineColor: Xe,
  fill: Xe,
  stroke: Xe,
  // Border props
  borderColor: Xe,
  borderTopColor: Xe,
  borderRightColor: Xe,
  borderBottomColor: Xe,
  borderLeftColor: Xe,
  filter: Aa,
  WebkitFilter: Aa
}, vl = (e) => jT[e];
function yh(e, t) {
  let r = vl(e);
  return r !== Aa && (r = Er), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const VT = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function FT(e, t, r) {
  let n = 0, o;
  for (; n < e.length && !o; ) {
    const i = e[n];
    typeof i == "string" && !VT.has(i) && Po(i).values.length && (o = e[n]), n++;
  }
  if (o && r)
    for (const i of t)
      e[i] = yh(r, o);
}
class bh extends ml {
  constructor(t, r, n, o, i) {
    super(t, r, n, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: r, name: n } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && (c = c.trim(), pl(c))) {
        const u = ah(c, r.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !mT.has(n) || t.length !== 2)
      return;
    const [o, i] = t, s = qc(o), a = qc(i);
    if (s !== a)
      if (Hc(s) && Hc(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: r } = this, n = [];
    for (let o = 0; o < t.length; o++)
      aT(t[o]) && n.push(o);
    n.length && FT(t, n, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: n } = this;
    if (!t || !t.current)
      return;
    n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = xn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), r[0] = this.measuredOrigin;
    const o = r[r.length - 1];
    o !== void 0 && t.getValue(n, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: r, name: n, unresolvedKeyframes: o } = this;
    if (!r || !r.current)
      return;
    const i = r.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1, a = o[s];
    o[s] = xn[n](r.measureViewportBox(), window.getComputedStyle(r.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      r.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function xl(e) {
  return typeof e == "function";
}
let Pi;
function IT() {
  Pi = void 0;
}
const Qt = {
  now: () => (Pi === void 0 && Qt.set(Ie.isProcessing || eT.useManualTiming ? Ie.timestamp : performance.now()), Pi),
  set: (e) => {
    Pi = e, queueMicrotask(IT);
  }
}, Xc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Er.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function LT(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t)
      return !0;
}
function NT(e, t, r, n) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], s = Xc(o, t), a = Xc(i, t);
  return $n(s === a, `You are trying to animate ${t} from "${o}" to "${i}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${i} via the \`style\` property.`), !s || !a ? !1 : LT(e) || (r === "spring" || xl(r)) && n;
}
const WT = 40;
class vh {
  constructor({ autoplay: t = !0, delay: r = 0, type: n = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: s = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Qt.now(), this.options = {
      autoplay: t,
      delay: r,
      type: n,
      repeat: o,
      repeatDelay: i,
      repeatType: s,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > WT ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && xT(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, r) {
    this.resolvedAt = Qt.now(), this.hasAttemptedResolve = !0;
    const { name: n, type: o, velocity: i, delay: s, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !NT(t, n, o, i))
      if (s)
        this.options.duration = 0;
      else {
        l == null || l(is(t, this.options, r)), a == null || a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, r);
    u !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: r,
      ...u
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, r) {
    return this.currentFinishedPromise.then(t, r);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function xh(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const HT = 5;
function Sh(e, t, r) {
  const n = Math.max(t - HT, 0);
  return xh(r - e(n), t - n);
}
const Zs = 1e-3, UT = 0.01, Zc = 10, GT = 0.05, qT = 1;
function YT({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i;
  $n(e <= Zt(Zc), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  s = $r(GT, qT, s), e = $r(UT, Zc, ur(e)), s < 1 ? (o = (c) => {
    const u = c * s, d = u * e, f = u - r, p = $a(c, s), g = Math.exp(-d);
    return Zs - f / p * g;
  }, i = (c) => {
    const d = c * s * e, f = d * r + r, p = Math.pow(s, 2) * Math.pow(c, 2) * e, g = Math.exp(-d), y = $a(Math.pow(c, 2), s);
    return (-o(c) + Zs > 0 ? -1 : 1) * ((f - p) * g) / y;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - r) * e + 1;
    return -Zs + u * d;
  }, i = (c) => {
    const u = Math.exp(-c * e), d = (r - c) * (e * e);
    return u * d;
  });
  const a = 5 / e, l = XT(o, i, a);
  if (e = Zt(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * n;
    return {
      stiffness: c,
      damping: s * 2 * Math.sqrt(n * c),
      duration: e
    };
  }
}
const KT = 12;
function XT(e, t, r) {
  let n = r;
  for (let o = 1; o < KT; o++)
    n = n - e(n) / t(n);
  return n;
}
function $a(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const ZT = ["duration", "bounce"], JT = ["stiffness", "damping", "mass"];
function Jc(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function QT(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Jc(e, JT) && Jc(e, ZT)) {
    const r = YT(e);
    t = {
      ...t,
      ...r,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function wh({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], i = e[e.length - 1], s = { done: !1, value: o }, { stiffness: a, damping: l, mass: c, duration: u, velocity: d, isResolvedFromDuration: f } = QT({
    ...n,
    velocity: -ur(n.velocity || 0)
  }), p = d || 0, g = l / (2 * Math.sqrt(a * c)), y = i - o, v = ur(Math.sqrt(a / c)), w = Math.abs(y) < 5;
  r || (r = w ? 0.01 : 2), t || (t = w ? 5e-3 : 0.5);
  let S;
  if (g < 1) {
    const T = $a(v, g);
    S = (k) => {
      const C = Math.exp(-g * v * k);
      return i - C * ((p + g * v * y) / T * Math.sin(T * k) + y * Math.cos(T * k));
    };
  } else if (g === 1)
    S = (T) => i - Math.exp(-v * T) * (y + (p + v * y) * T);
  else {
    const T = v * Math.sqrt(g * g - 1);
    S = (k) => {
      const C = Math.exp(-g * v * k), $ = Math.min(T * k, 300);
      return i - C * ((p + g * v * y) * Math.sinh($) + T * y * Math.cosh($)) / T;
    };
  }
  return {
    calculatedDuration: f && u || null,
    next: (T) => {
      const k = S(T);
      if (f)
        s.done = T >= u;
      else {
        let C = 0;
        g < 1 && (C = T === 0 ? Zt(p) : Sh(S, T, k));
        const $ = Math.abs(C) <= r, E = Math.abs(i - k) <= t;
        s.done = $ && E;
      }
      return s.value = s.done ? i : k, s;
    }
  };
}
function Qc({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: s, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (O) => a !== void 0 && O < a || l !== void 0 && O > l, g = (O) => a === void 0 ? l : l === void 0 || Math.abs(a - O) < Math.abs(l - O) ? a : l;
  let y = r * t;
  const v = d + y, w = s === void 0 ? v : s(v);
  w !== v && (y = w - d);
  const S = (O) => -y * Math.exp(-O / n), T = (O) => w + S(O), k = (O) => {
    const I = S(O), M = T(O);
    f.done = Math.abs(I) <= c, f.value = f.done ? w : M;
  };
  let C, $;
  const E = (O) => {
    p(f.value) && (C = O, $ = wh({
      keyframes: [f.value, g(f.value)],
      velocity: Sh(T, O, f.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: c,
      restSpeed: u
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (O) => {
      let I = !1;
      return !$ && C === void 0 && (I = !0, k(O), E(O)), C !== void 0 && O >= C ? $.next(O - C) : (!I && k(O), f);
    }
  };
}
const eC = /* @__PURE__ */ Oo(0.42, 0, 1, 1), tC = /* @__PURE__ */ Oo(0, 0, 0.58, 1), Th = /* @__PURE__ */ Oo(0.42, 0, 0.58, 1), rC = (e) => Array.isArray(e) && typeof e[0] != "number", eu = {
  linear: We,
  easeIn: eC,
  easeInOut: Th,
  easeOut: tC,
  circIn: hl,
  circInOut: rh,
  circOut: th,
  backIn: fl,
  backInOut: Qf,
  backOut: Jf,
  anticipate: eh
}, tu = (e) => {
  if (Array.isArray(e)) {
    pr(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, n, o] = e;
    return Oo(t, r, n, o);
  } else if (typeof e == "string")
    return pr(eu[e] !== void 0, `Invalid easing type '${e}'`), eu[e];
  return e;
}, nC = (e, t) => (r) => t(e(r)), dr = (...e) => e.reduce(nC), Sn = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, we = (e, t, r) => e + (t - e) * r;
function Js(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function oC({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, i = 0, s = 0;
  if (!t)
    o = i = s = r;
  else {
    const a = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - a;
    o = Js(l, a, e + 1 / 3), i = Js(l, a, e), s = Js(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: n
  };
}
function Ii(e, t) {
  return (r) => r > 0 ? t : e;
}
const Qs = (e, t, r) => {
  const n = e * e, o = r * (t * t - n) + n;
  return o < 0 ? 0 : Math.sqrt(o);
}, iC = [_a, Nr, an], sC = (e) => iC.find((t) => t.test(e));
function ru(e) {
  const t = sC(e);
  if ($n(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let r = t.parse(e);
  return t === an && (r = oC(r)), r;
}
const nu = (e, t) => {
  const r = ru(e), n = ru(t);
  if (!r || !n)
    return Ii(e, t);
  const o = { ...r };
  return (i) => (o.red = Qs(r.red, n.red, i), o.green = Qs(r.green, n.green, i), o.blue = Qs(r.blue, n.blue, i), o.alpha = we(r.alpha, n.alpha, i), Nr.transform(o));
}, Ea = /* @__PURE__ */ new Set(["none", "hidden"]);
function aC(e, t) {
  return Ea.has(e) ? (r) => r <= 0 ? e : t : (r) => r >= 1 ? t : e;
}
function lC(e, t) {
  return (r) => we(e, t, r);
}
function Sl(e) {
  return typeof e == "number" ? lC : typeof e == "string" ? pl(e) ? Ii : Xe.test(e) ? nu : dC : Array.isArray(e) ? Ch : typeof e == "object" ? Xe.test(e) ? nu : cC : Ii;
}
function Ch(e, t) {
  const r = [...e], n = r.length, o = e.map((i, s) => Sl(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < n; s++)
      r[s] = o[s](i);
    return r;
  };
}
function cC(e, t) {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Sl(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}
function uC(e, t) {
  var r;
  const n = [], o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i], a = e.indexes[s][o[s]], l = (r = e.values[a]) !== null && r !== void 0 ? r : 0;
    n[i] = l, o[s]++;
  }
  return n;
}
const dC = (e, t) => {
  const r = Er.createTransformer(t), n = Po(e), o = Po(t);
  return n.indexes.var.length === o.indexes.var.length && n.indexes.color.length === o.indexes.color.length && n.indexes.number.length >= o.indexes.number.length ? Ea.has(e) && !o.values.length || Ea.has(t) && !n.values.length ? aC(e, t) : dr(Ch(uC(n, o), o.values), r) : ($n(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Ii(e, t));
};
function Ph(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number" ? we(e, t, r) : Sl(e)(e, t);
}
function fC(e, t, r) {
  const n = [], o = r || Ph, i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || We : t;
      a = dr(l, a);
    }
    n.push(a);
  }
  return n;
}
function hC(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if (pr(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  if (i === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const s = fC(t, n, o), a = s.length, l = (c) => {
    let u = 0;
    if (a > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = Sn(e[u], e[u + 1], c);
    return s[u](d);
  };
  return r ? (c) => l($r(e[0], e[i - 1], c)) : l;
}
function pC(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Sn(0, t, n);
    e.push(we(r, 1, o));
  }
}
function mC(e) {
  const t = [0];
  return pC(t, e.length - 1), t;
}
function gC(e, t) {
  return e.map((r) => r * t);
}
function yC(e, t) {
  return e.map(() => t || Th).splice(0, e.length - 1);
}
function Li({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = rC(n) ? n.map(tu) : tu(n), i = {
    done: !1,
    value: t[0]
  }, s = gC(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : mC(t),
    e
  ), a = hC(s, t, {
    ease: Array.isArray(o) ? o : yC(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = a(l), i.done = l >= e, i)
  };
}
const ou = 2e4;
function bC(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < ou; )
    t += r, n = e.next(t);
  return t >= ou ? 1 / 0 : t;
}
const vC = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => ae.update(t, !0),
    stop: () => Ar(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ie.isProcessing ? Ie.timestamp : Qt.now()
  };
}, xC = {
  decay: Qc,
  inertia: Qc,
  tween: Li,
  keyframes: Li,
  spring: wh
}, SC = (e) => e / 100;
class wl extends vh {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: r, motionValue: n, element: o, keyframes: i } = this.options, s = (o == null ? void 0 : o.KeyframeResolver) || ml, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new s(i, a, r, n, o), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const { type: r = "keyframes", repeat: n = 0, repeatDelay: o = 0, repeatType: i, velocity: s = 0 } = this.options, a = xl(r) ? r : xC[r] || Li;
    let l, c;
    a !== Li && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && pr(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), l = dr(SC, Ph(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    i === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -s
    })), u.calculatedDuration === null && (u.calculatedDuration = bC(u));
    const { calculatedDuration: d } = u, f = d + o, p = f * (n + 1) - o;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: p
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, r = !1) {
    const { resolved: n } = this;
    if (!n) {
      const { keyframes: O } = this.options;
      return { done: !0, value: O[O.length - 1] };
    }
    const { finalKeyframe: o, generator: i, mirroredGenerator: s, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: u, resolvedDuration: d } = n;
    if (this.startTime === null)
      return i.next(0);
    const { delay: f, repeat: p, repeatType: g, repeatDelay: y, onUpdate: v } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), r ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const w = this.currentTime - f * (this.speed >= 0 ? 1 : -1), S = this.speed >= 0 ? w < 0 : w > u;
    this.currentTime = Math.max(w, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let T = this.currentTime, k = i;
    if (p) {
      const O = Math.min(this.currentTime, u) / d;
      let I = Math.floor(O), M = O % 1;
      !M && O >= 1 && (M = 1), M === 1 && I--, I = Math.min(I, p + 1), !!(I % 2) && (g === "reverse" ? (M = 1 - M, y && (M -= y / d)) : g === "mirror" && (k = s)), T = $r(0, 1, M) * d;
    }
    const C = S ? { done: !1, value: l[0] } : k.next(T);
    a && (C.value = a(C.value));
    let { done: $ } = C;
    !S && c !== null && ($ = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && $);
    return E && o !== void 0 && (C.value = is(l, this.options, o)), v && v(C.value), E && this.finish(), C;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? ur(t.calculatedDuration) : 0;
  }
  get time() {
    return ur(this.currentTime);
  }
  set time(t) {
    t = Zt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const r = this.playbackSpeed !== t;
    this.playbackSpeed = t, r && (this.time = ur(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = vC, onPlay: r, startTime: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), r && r();
    const o = this.driver.now();
    this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = n ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const kh = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), _h = (e) => Array.isArray(e) && typeof e[0] == "number", wC = 10, TC = (e, t) => {
  let r = "";
  const n = Math.max(Math.round(t / wC), 2);
  for (let o = 0; o < n; o++)
    r += e(Sn(0, n - 1, o)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function Tl(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const CC = {
  linearEasing: void 0
};
function PC(e, t) {
  const r = Tl(e);
  return () => {
    var n;
    return (n = CC[t]) !== null && n !== void 0 ? n : r();
  };
}
const Ni = /* @__PURE__ */ PC(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function Ah(e) {
  return !!(typeof e == "function" && Ni() || !e || typeof e == "string" && (e in Ra || Ni()) || _h(e) || Array.isArray(e) && e.every(Ah));
}
const Zn = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, Ra = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Zn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Zn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Zn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Zn([0.33, 1.53, 0.69, 0.99])
};
function $h(e, t) {
  if (e)
    return typeof e == "function" && Ni() ? TC(e, t) : _h(e) ? Zn(e) : Array.isArray(e) ? e.map((r) => $h(r, t) || Ra.easeOut) : Ra[e];
}
function kC(e, t, r, { delay: n = 0, duration: o = 300, repeat: i = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
  const c = { [t]: r };
  l && (c.offset = l);
  const u = $h(a, o);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: n,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: i + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  });
}
function iu(e, t) {
  e.timeline = t, e.onfinish = null;
}
const _C = /* @__PURE__ */ Tl(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Wi = 10, AC = 2e4;
function $C(e) {
  return xl(e.type) || e.type === "spring" || !Ah(e.ease);
}
function EC(e, t) {
  const r = new wl({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let n = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !n.done && i < AC; )
    n = r.sample(i), o.push(n.value), i += Wi;
  return {
    times: void 0,
    keyframes: o,
    duration: i - Wi,
    ease: "linear"
  };
}
const Eh = {
  anticipate: eh,
  backInOut: Qf,
  circInOut: rh
};
function RC(e) {
  return e in Eh;
}
class su extends vh {
  constructor(t) {
    super(t);
    const { name: r, motionValue: n, element: o, keyframes: i } = this.options;
    this.resolver = new bh(i, (s, a) => this.onKeyframesResolved(s, a), r, n, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, r) {
    var n;
    let { duration: o = 300, times: i, ease: s, type: a, motionValue: l, name: c, startTime: u } = this.options;
    if (!(!((n = l.owner) === null || n === void 0) && n.current))
      return !1;
    if (typeof s == "string" && Ni() && RC(s) && (s = Eh[s]), $C(this.options)) {
      const { onComplete: f, onUpdate: p, motionValue: g, element: y, ...v } = this.options, w = EC(t, v);
      t = w.keyframes, t.length === 1 && (t[1] = t[0]), o = w.duration, i = w.times, s = w.ease, a = "keyframes";
    }
    const d = kC(l.owner.current, c, t, { ...this.options, duration: o, times: i, ease: s });
    return d.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (iu(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
      const { onComplete: f } = this.options;
      l.set(is(t, this.options, r)), f && f(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: d,
      duration: o,
      times: i,
      type: a,
      ease: s,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: r } = t;
    return ur(r);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: r } = t;
    return ur(r.currentTime || 0);
  }
  set time(t) {
    const { resolved: r } = this;
    if (!r)
      return;
    const { animation: n } = r;
    n.currentTime = Zt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: r } = t;
    return r.playbackRate;
  }
  set speed(t) {
    const { resolved: r } = this;
    if (!r)
      return;
    const { animation: n } = r;
    n.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: r } = t;
    return r.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: r } = t;
    return r.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: r } = this;
      if (!r)
        return We;
      const { animation: n } = r;
      iu(n, t);
    }
    return We;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: r } = t;
    r.playState === "finished" && this.updateFinishedPromise(), r.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: r } = t;
    r.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: r, keyframes: n, duration: o, type: i, ease: s, times: a } = t;
    if (r.playState === "idle" || r.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: c, onUpdate: u, onComplete: d, element: f, ...p } = this.options, g = new wl({
        ...p,
        keyframes: n,
        duration: o,
        type: i,
        ease: s,
        times: a,
        isGenerator: !0
      }), y = Zt(this.time);
      c.setWithVelocity(g.sample(y - Wi).value, g.sample(y).value, Wi);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: r, name: n, repeatDelay: o, repeatType: i, damping: s, type: a } = t;
    return _C() && n && kh.has(n) && r && r.owner && r.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !r.owner.getProps().onUpdate && !o && i !== "mirror" && s !== 0 && a !== "inertia";
  }
}
const MC = Tl(() => window.ScrollTimeline !== void 0);
class OC {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  then(t, r) {
    return Promise.all(this.animations).then(t).catch(r);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, r) {
    for (let n = 0; n < this.animations.length; n++)
      this.animations[n][t] = r;
  }
  attachTimeline(t, r) {
    const n = this.animations.map((o) => MC() && o.attachTimeline ? o.attachTimeline(t) : r(o));
    return () => {
      n.forEach((o, i) => {
        o && o(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let r = 0; r < this.animations.length; r++)
      t = Math.max(t, this.animations[r].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((r) => r[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function zC({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const Cl = (e, t, r, n = {}, o, i) => (s) => {
  const a = dl(n, e) || {}, l = a.delay || n.delay || 0;
  let { elapsed: c = 0 } = n;
  c = c - Zt(l);
  let u = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (f) => {
      t.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      s(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: i ? void 0 : o
  };
  zC(a) || (u = {
    ...u,
    ...Qw(e, u)
  }), u.duration && (u.duration = Zt(u.duration)), u.repeatDelay && (u.repeatDelay = Zt(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let d = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (d = !0)), d && !i && t.get() !== void 0) {
    const f = is(u.keyframes, a);
    if (f !== void 0)
      return ae.update(() => {
        u.onUpdate(f), u.onComplete();
      }), new OC([]);
  }
  return !i && su.supports(u) ? new su(u) : new wl(u);
}, DC = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), BC = (e) => Ca(e) ? e[e.length - 1] || 0 : e;
function Pl(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function kl(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class _l {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Pl(this.subscriptions, t), () => kl(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, r, n);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const au = 30, jC = (e) => !isNaN(parseFloat(e));
class VC {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, r = {}) {
    this.version = "11.11.1", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (n, o = !0) => {
      const i = Qt.now();
      this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = r.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Qt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = jC(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && ns(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new _l());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), ae.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, r) {
    this.passiveEffect = t, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - n;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, r = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = Qt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > au)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, au);
    return xh(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = t(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ko(e, t) {
  return new VC(e, t);
}
function FC(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, ko(r));
}
function IC(e, t) {
  const r = os(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r || {};
  i = { ...i, ...n };
  for (const s in i) {
    const a = BC(i[s]);
    FC(e, s, a);
  }
}
const ss = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), LC = "framerAppearId", Rh = "data-" + ss(LC);
function Mh(e) {
  return e.props[Rh];
}
const Je = (e) => !!(e && e.getVelocity);
function NC(e) {
  return !!(Je(e) && e.add);
}
function Oh(e) {
  if (Rr.has(e))
    return "transform";
  if (kh.has(e))
    return ss(e);
}
function Ma(e, t) {
  var r;
  if (!e.applyWillChange)
    return;
  const n = e.getValue("willChange");
  if (NC(n))
    return n.add(t);
  !(!((r = e.props.style) === null || r === void 0) && r.willChange) && Oh(t) && e.setStaticValue("willChange", "transform");
}
function WC({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function zh(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  n && (s = n);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const f = e.getValue(d, (i = e.latestValues[d]) !== null && i !== void 0 ? i : null), p = l[d];
    if (p === void 0 || u && WC(u, d))
      continue;
    const g = {
      delay: r,
      ...dl(s || {}, d)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const w = Mh(e);
      if (w) {
        const S = window.MotionHandoffAnimation(w, d, ae);
        S !== null && (g.startTime = S, y = !0);
      }
    }
    Ma(e, d), f.start(Cl(d, f, p, e.shouldReduceMotion && Rr.has(d) ? { type: !1 } : g, e, y));
    const v = f.animation;
    v && c.push(v);
  }
  return a && Promise.all(c).then(() => {
    ae.update(() => {
      a && IC(e, a);
    });
  }), c;
}
function Oa(e, t, r = {}) {
  var n;
  const o = os(e, t, r.type === "exit" ? (n = e.presenceContext) === null || n === void 0 ? void 0 : n.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  r.transitionOverride && (i = r.transitionOverride);
  const s = o ? () => Promise.all(zh(e, o, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: d, staggerDirection: f } = i;
    return HC(e, t, u + c, d, f, r);
  } : () => Promise.resolve(), { when: l } = i;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => u());
  } else
    return Promise.all([s(), a(r.delay)]);
}
function HC(e, t, r = 0, n = 0, o = 1, i) {
  const s = [], a = (e.variantChildren.size - 1) * n, l = o === 1 ? (c = 0) => c * n : (c = 0) => a - c * n;
  return Array.from(e.variantChildren).sort(UC).forEach((c, u) => {
    c.notify("AnimationStart", t), s.push(Oa(c, t, {
      ...i,
      delay: r + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(s);
}
function UC(e, t) {
  return e.sortNodePosition(t);
}
function GC(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Oa(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Oa(e, t, r);
  else {
    const o = typeof t == "function" ? os(e, t, r.custom) : t;
    n = Promise.all(zh(e, o, r));
  }
  return n.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const qC = ul.length;
function Dh(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const r = e.parent ? Dh(e.parent) || {} : {};
    return e.props.initial !== void 0 && (r.initial = e.props.initial), r;
  }
  const t = {};
  for (let r = 0; r < qC; r++) {
    const n = ul[r], o = e.props[n];
    (To(o) || o === !1) && (t[n] = o);
  }
  return t;
}
const YC = [...cl].reverse(), KC = cl.length;
function XC(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => GC(e, r, n)));
}
function ZC(e) {
  let t = XC(e), r = lu(), n = !0;
  const o = (l) => (c, u) => {
    var d;
    const f = os(e, u, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
    if (f) {
      const { transition: p, transitionEnd: g, ...y } = f;
      c = { ...c, ...y, ...g };
    }
    return c;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const { props: c } = e, u = Dh(e.parent) || {}, d = [], f = /* @__PURE__ */ new Set();
    let p = {}, g = 1 / 0;
    for (let v = 0; v < KC; v++) {
      const w = YC[v], S = r[w], T = c[w] !== void 0 ? c[w] : u[w], k = To(T), C = w === l ? S.isActive : null;
      C === !1 && (g = v);
      let $ = T === u[w] && T !== c[w] && k;
      if ($ && n && e.manuallyAnimateOnMount && ($ = !1), S.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !S.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !T && !S.prevProp || // Or if the prop doesn't define an animation
      wo(T) || typeof T == "boolean")
        continue;
      const E = JC(S.prevProp, T);
      let O = E || // If we're making this variant active, we want to always make it active
      w === l && S.isActive && !$ && k || // If we removed a higher-priority variant (i is in reverse order)
      v > g && k, I = !1;
      const M = Array.isArray(T) ? T : [T];
      let L = M.reduce(o(w), {});
      C === !1 && (L = {});
      const { prevResolvedValues: pe = {} } = S, q = {
        ...pe,
        ...L
      }, fe = (W) => {
        O = !0, f.has(W) && (I = !0, f.delete(W)), S.needsAnimating[W] = !0;
        const le = e.getValue(W);
        le && (le.liveStyle = !1);
      };
      for (const W in q) {
        const le = L[W], xe = pe[W];
        if (p.hasOwnProperty(W))
          continue;
        let De = !1;
        Ca(le) && Ca(xe) ? De = !qf(le, xe) : De = le !== xe, De ? le != null ? fe(W) : f.add(W) : le !== void 0 && f.has(W) ? fe(W) : S.protectedKeys[W] = !0;
      }
      S.prevProp = T, S.prevResolvedValues = L, S.isActive && (p = { ...p, ...L }), n && e.blockInitialAnimation && (O = !1), O && (!($ && E) || I) && d.push(...M.map((W) => ({
        animation: W,
        options: { type: w }
      })));
    }
    if (f.size) {
      const v = {};
      f.forEach((w) => {
        const S = e.getBaseTarget(w), T = e.getValue(w);
        T && (T.liveStyle = !0), v[w] = S ?? null;
      }), d.push({ animation: v });
    }
    let y = !!d.length;
    return n && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (y = !1), n = !1, y ? t(d) : Promise.resolve();
  }
  function a(l, c) {
    var u;
    if (r[l].isActive === c)
      return Promise.resolve();
    (u = e.variantChildren) === null || u === void 0 || u.forEach((f) => {
      var p;
      return (p = f.animationState) === null || p === void 0 ? void 0 : p.setActive(l, c);
    }), r[l].isActive = c;
    const d = s(l);
    for (const f in r)
      r[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => r,
    reset: () => {
      r = lu(), n = !0;
    }
  };
}
function JC(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !qf(t, e) : !1;
}
function Br(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function lu() {
  return {
    animate: Br(!0),
    whileInView: Br(),
    whileHover: Br(),
    whileTap: Br(),
    whileDrag: Br(),
    whileFocus: Br(),
    exit: Br()
  };
}
class Mr {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class QC extends Mr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = ZC(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    wo(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let eP = 0;
class tP extends Mr {
  constructor() {
    super(...arguments), this.id = eP++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: r } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === n)
      return;
    const o = this.node.animationState.setActive("exit", !t);
    r && !t && o.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const rP = {
  animation: {
    Feature: QC
  },
  exit: {
    Feature: tP
  }
}, Bh = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function as(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const nP = (e) => (t) => Bh(t) && e(t, as(t));
function lr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
function fr(e, t, r, n) {
  return lr(e, t, nP(r), n);
}
const cu = (e, t) => Math.abs(e - t);
function oP(e, t) {
  const r = cu(e.x, t.x), n = cu(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class jh {
  constructor(t, r, { transformPagePoint: n, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = ta(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, p = oP(d.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !p)
        return;
      const { point: g } = d, { timestamp: y } = Ie;
      this.history.push({ ...g, timestamp: y });
      const { onStart: v, onMove: w } = this.handlers;
      f || (v && v(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = ea(f, this.transformPagePoint), ae.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: p, onSessionEnd: g, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const v = ta(d.type === "pointercancel" ? this.lastMoveEventInfo : ea(f, this.transformPagePoint), this.history);
      this.startEvent && p && p(d, v), g && g(d, v);
    }, !Bh(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = r, this.transformPagePoint = n, this.contextWindow = o || window;
    const s = as(t), a = ea(s, this.transformPagePoint), { point: l } = a, { timestamp: c } = Ie;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = r;
    u && u(t, ta(a, this.history)), this.removeListeners = dr(fr(this.contextWindow, "pointermove", this.handlePointerMove), fr(this.contextWindow, "pointerup", this.handlePointerUp), fr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ar(this.updatePoint);
  }
}
function ea(e, t) {
  return t ? { point: t(e.point) } : e;
}
function uu(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ta({ point: e }, t) {
  return {
    point: e,
    delta: uu(e, Vh(t)),
    offset: uu(e, iP(t)),
    velocity: sP(t, 0.1)
  };
}
function iP(e) {
  return e[0];
}
function Vh(e) {
  return e[e.length - 1];
}
function sP(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = Vh(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > Zt(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const i = ur(o.timestamp - n.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (o.x - n.x) / i,
    y: (o.y - n.y) / i
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Fh(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const du = Fh("dragHorizontal"), fu = Fh("dragVertical");
function Ih(e) {
  let t = !1;
  if (e === "y")
    t = fu();
  else if (e === "x")
    t = du();
  else {
    const r = du(), n = fu();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function Lh() {
  const e = Ih(!0);
  return e ? (e(), !1) : !0;
}
function ln(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const Nh = 1e-4, aP = 1 - Nh, lP = 1 + Nh, Wh = 0.01, cP = 0 - Wh, uP = 0 + Wh;
function yt(e) {
  return e.max - e.min;
}
function dP(e, t, r) {
  return Math.abs(e - t) <= r;
}
function hu(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = we(t.min, t.max, e.origin), e.scale = yt(r) / yt(t), e.translate = we(r.min, r.max, e.origin) - e.originPoint, (e.scale >= aP && e.scale <= lP || isNaN(e.scale)) && (e.scale = 1), (e.translate >= cP && e.translate <= uP || isNaN(e.translate)) && (e.translate = 0);
}
function lo(e, t, r, n) {
  hu(e.x, t.x, r.x, n ? n.originX : void 0), hu(e.y, t.y, r.y, n ? n.originY : void 0);
}
function pu(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + yt(t);
}
function fP(e, t, r) {
  pu(e.x, t.x, r.x), pu(e.y, t.y, r.y);
}
function mu(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + yt(t);
}
function co(e, t, r) {
  mu(e.x, t.x, r.x), mu(e.y, t.y, r.y);
}
function hP(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? we(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? we(r, e, n.max) : Math.min(e, r)), e;
}
function gu(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function pP(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: gu(e.x, r, o),
    y: gu(e.y, t, n)
  };
}
function yu(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function mP(e, t) {
  return {
    x: yu(e.x, t.x),
    y: yu(e.y, t.y)
  };
}
function gP(e, t) {
  let r = 0.5;
  const n = yt(e), o = yt(t);
  return o > n ? r = Sn(t.min, t.max - n, e.min) : n > o && (r = Sn(e.min, e.max - o, t.min)), $r(0, 1, r);
}
function yP(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const za = 0.35;
function bP(e = za) {
  return e === !1 ? e = 0 : e === !0 && (e = za), {
    x: bu(e, "left", "right"),
    y: bu(e, "top", "bottom")
  };
}
function bu(e, t, r) {
  return {
    min: vu(e, t),
    max: vu(e, r)
  };
}
function vu(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const xu = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), cn = () => ({
  x: xu(),
  y: xu()
}), Su = () => ({ min: 0, max: 0 }), ke = () => ({
  x: Su(),
  y: Su()
});
function Et(e) {
  return [e("x"), e("y")];
}
function Hh({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function vP({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function xP(e, t) {
  if (!t)
    return e;
  const r = t({ x: e.left, y: e.top }), n = t({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: n.y,
    right: n.x
  };
}
function ra(e) {
  return e === void 0 || e === 1;
}
function Da({ scale: e, scaleX: t, scaleY: r }) {
  return !ra(e) || !ra(t) || !ra(r);
}
function jr(e) {
  return Da(e) || Uh(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Uh(e) {
  return wu(e.x) || wu(e.y);
}
function wu(e) {
  return e && e !== "0%";
}
function Hi(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function Tu(e, t, r, n, o) {
  return o !== void 0 && (e = Hi(e, o, n)), Hi(e, r, n) + t;
}
function Ba(e, t = 0, r = 1, n, o) {
  e.min = Tu(e.min, t, r, n, o), e.max = Tu(e.max, t, r, n, o);
}
function Gh(e, { x: t, y: r }) {
  Ba(e.x, t.translate, t.scale, t.originPoint), Ba(e.y, r.translate, r.scale, r.originPoint);
}
const Cu = 0.999999999999, Pu = 1.0000000000001;
function SP(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    i = r[a], s = i.projectionDelta;
    const { visualElement: l } = i.options;
    l && l.props.style && l.props.style.display === "contents" || (n && i.options.layoutScroll && i.scroll && i !== i.root && dn(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Gh(e, s)), n && jr(i.latestValues) && dn(e, i.latestValues));
  }
  t.x < Pu && t.x > Cu && (t.x = 1), t.y < Pu && t.y > Cu && (t.y = 1);
}
function un(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function ku(e, t, r, n, o = 0.5) {
  const i = we(e.min, e.max, o);
  Ba(e, t, r, i, n);
}
function dn(e, t) {
  ku(e.x, t.x, t.scaleX, t.scale, t.originX), ku(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function qh(e, t) {
  return Hh(xP(e.getBoundingClientRect(), t));
}
function wP(e, t, r) {
  const n = qh(e, r), { scroll: o } = t;
  return o && (un(n.x, o.offset.x), un(n.y, o.offset.y)), n;
}
const Yh = ({ current: e }) => e ? e.ownerDocument.defaultView : null, TP = /* @__PURE__ */ new WeakMap();
class CP {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ke(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (u) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(as(u, "page").point);
    }, i = (u, d) => {
      const { drag: f, dragPropagation: p, onDragStart: g } = this.getProps();
      if (f && !p && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ih(f), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Et((v) => {
        let w = this.getAxisMotionValue(v).get() || 0;
        if (Jt.test(w)) {
          const { projection: S } = this.visualElement;
          if (S && S.layout) {
            const T = S.layout.layoutBox[v];
            T && (w = yt(T) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[v] = w;
      }), g && ae.postRender(() => g(u, d)), Ma(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, s = (u, d) => {
      const { dragPropagation: f, dragDirectionLock: p, onDirectionLock: g, onDrag: y } = this.getProps();
      if (!f && !this.openGlobalLock)
        return;
      const { offset: v } = d;
      if (p && this.currentDirection === null) {
        this.currentDirection = PP(v), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, v), this.updateAxis("y", d.point, v), this.visualElement.render(), y && y(u, d);
    }, a = (u, d) => this.stop(u, d), l = () => Et((u) => {
      var d;
      return this.getAnimationState(u) === "paused" && ((d = this.getAxisMotionValue(u).animation) === null || d === void 0 ? void 0 : d.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new jh(t, {
      onSessionStart: o,
      onStart: i,
      onMove: s,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: Yh(this.visualElement)
    });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && ae.postRender(() => i(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !ci(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (s = hP(s, this.constraints[t], this.elastic[t])), i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    r && ln(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = pP(o.layoutBox, r) : this.constraints = !1, this.elastic = bP(n), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Et((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = yP(o.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !ln(t))
      return !1;
    const n = t.current;
    pr(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = wP(n, o.root, this.visualElement.getTransformPagePoint());
    let s = mP(o.layout.layoutBox, i);
    if (r) {
      const a = r(vP(s));
      this.hasMutatedConstraints = !!a, a && (s = Hh(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = Et((u) => {
      if (!ci(u, r, this.currentDirection))
        return;
      let d = l && l[u] || {};
      s && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, g = {
        type: "inertia",
        velocity: n ? t[u] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...d
      };
      return this.startAxisValueAnimation(u, g);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return Ma(this.visualElement, t), n.start(Cl(t, n, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    Et((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Et((t) => {
      var r;
      return (r = this.getAxisMotionValue(t).animation) === null || r === void 0 ? void 0 : r.pause();
    });
  }
  getAnimationState(t) {
    var r;
    return (r = this.getAxisMotionValue(t).animation) === null || r === void 0 ? void 0 : r.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const r = `_drag${t.toUpperCase()}`, n = this.visualElement.getProps(), o = n[r];
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Et((r) => {
      const { drag: n } = this.getProps();
      if (!ci(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[r];
        i.set(t[r] - we(s, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: r } = this.getProps(), { projection: n } = this.visualElement;
    if (!ln(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Et((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = gP({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Et((s) => {
      if (!ci(s, t, null))
        return;
      const a = this.getAxisMotionValue(s), { min: l, max: c } = this.constraints[s];
      a.set(we(l, c, o[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    TP.set(this.visualElement, this);
    const t = this.visualElement.current, r = fr(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      ln(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), ae.read(n);
    const s = lr(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Et((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), r(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: s = za, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function ci(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function PP(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class kP extends Mr {
  constructor(t) {
    super(t), this.removeGroupControls = We, this.removeListeners = We, this.controls = new CP(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || We;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const _u = (e) => (t, r) => {
  e && ae.postRender(() => e(t, r));
};
class _P extends Mr {
  constructor() {
    super(...arguments), this.removePointerDownListener = We;
  }
  onPointerDown(t) {
    this.session = new jh(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Yh(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: _u(t),
      onStart: _u(r),
      onMove: n,
      onEnd: (i, s) => {
        delete this.session, o && ae.postRender(() => o(i, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = fr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Do = gr(null);
function AP() {
  const e = _e(Do);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = $o();
  He(() => n(o), []);
  const i = ve(() => r && r(o), [o, r]);
  return !t && r ? [!1, i] : [!0];
}
function $P() {
  return EP(_e(Do));
}
function EP(e) {
  return e === null ? !0 : e.isPresent;
}
const Al = gr({}), Kh = gr({}), ki = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Au(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Hn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (F.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = Au(e, t.target.x), n = Au(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, RP = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = Er.parse(e);
    if (o.length > 5)
      return n;
    const i = Er.createTransformer(e), s = typeof o[0] != "number" ? 1 : 0, a = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + s] /= a, o[1 + s] /= l;
    const c = we(a, l, 0.5);
    return typeof o[2 + s] == "number" && (o[2 + s] /= c), typeof o[3 + s] == "number" && (o[3 + s] /= c), i(o);
  }
}, Ui = {};
function MP(e) {
  Object.assign(Ui, e);
}
const { schedule: $l, cancel: eE } = Yf(queueMicrotask, !1);
class OP extends _m {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    MP(zP), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), ki.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props, s = n.projection;
    return s && (s.isPresent = i, o || t.layoutDependency !== r || r === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? s.promote() : s.relegate() || ae.postRender(() => {
      const a = s.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), $l.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(o), n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Xh(e) {
  const [t, r] = AP(), n = _e(Al);
  return _.jsx(OP, { ...e, layoutGroup: n, switchLayoutGroup: _e(Kh), isPresent: t, safeToRemove: r });
}
const zP = {
  borderRadius: {
    ...Hn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Hn,
  borderTopRightRadius: Hn,
  borderBottomLeftRadius: Hn,
  borderBottomRightRadius: Hn,
  boxShadow: RP
}, Zh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], DP = Zh.length, $u = (e) => typeof e == "string" ? parseFloat(e) : e, Eu = (e) => typeof e == "number" || F.test(e);
function BP(e, t, r, n, o, i) {
  o ? (e.opacity = we(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    jP(n)
  ), e.opacityExit = we(t.opacity !== void 0 ? t.opacity : 1, 0, VP(n))) : i && (e.opacity = we(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let s = 0; s < DP; s++) {
    const a = `border${Zh[s]}Radius`;
    let l = Ru(t, a), c = Ru(r, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Eu(l) === Eu(c) ? (e[a] = Math.max(we($u(l), $u(c), n), 0), (Jt.test(c) || Jt.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || r.rotate) && (e.rotate = we(t.rotate || 0, r.rotate || 0, n));
}
function Ru(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const jP = /* @__PURE__ */ Jh(0, 0.5, th), VP = /* @__PURE__ */ Jh(0.5, 0.95, We);
function Jh(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(Sn(e, t, n));
}
function Mu(e, t) {
  e.min = t.min, e.max = t.max;
}
function At(e, t) {
  Mu(e.x, t.x), Mu(e.y, t.y);
}
function Ou(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function zu(e, t, r, n, o) {
  return e -= t, e = Hi(e, 1 / r, n), o !== void 0 && (e = Hi(e, 1 / o, n)), e;
}
function FP(e, t = 0, r = 1, n = 0.5, o, i = e, s = e) {
  if (Jt.test(t) && (t = parseFloat(t), t = we(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let a = we(i.min, i.max, n);
  e === i && (a -= t), e.min = zu(e.min, t, r, a, o), e.max = zu(e.max, t, r, a, o);
}
function Du(e, t, [r, n, o], i, s) {
  FP(e, t[r], t[n], t[o], t.scale, i, s);
}
const IP = ["x", "scaleX", "originX"], LP = ["y", "scaleY", "originY"];
function Bu(e, t, r, n) {
  Du(e.x, t, IP, r ? r.x : void 0, n ? n.x : void 0), Du(e.y, t, LP, r ? r.y : void 0, n ? n.y : void 0);
}
function ju(e) {
  return e.translate === 0 && e.scale === 1;
}
function Qh(e) {
  return ju(e.x) && ju(e.y);
}
function Vu(e, t) {
  return e.min === t.min && e.max === t.max;
}
function NP(e, t) {
  return Vu(e.x, t.x) && Vu(e.y, t.y);
}
function Fu(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ep(e, t) {
  return Fu(e.x, t.x) && Fu(e.y, t.y);
}
function Iu(e) {
  return yt(e.x) / yt(e.y);
}
function Lu(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class WP {
  constructor() {
    this.members = [];
  }
  add(t) {
    Pl(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (kl(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0)
      return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
      n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, r && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function HP(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, s = (r == null ? void 0 : r.z) || 0;
  if ((o || i || s) && (n = `translate3d(${o}px, ${i}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { transformPerspective: c, rotate: u, rotateX: d, rotateY: f, skewX: p, skewY: g } = r;
    c && (n = `perspective(${c}px) ${n}`), u && (n += `rotate(${u}deg) `), d && (n += `rotateX(${d}deg) `), f && (n += `rotateY(${f}deg) `), p && (n += `skewX(${p}deg) `), g && (n += `skewY(${g}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (n += `scale(${a}, ${l})`), n || "none";
}
const UP = (e, t) => e.depth - t.depth;
class GP {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Pl(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    kl(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(UP), this.isDirty = !1, this.children.forEach(t);
  }
}
function _i(e) {
  const t = Je(e) ? e.get() : e;
  return DC(t) ? t.toValue() : t;
}
function qP(e, t) {
  const r = Qt.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (Ar(n), e(i - t));
  };
  return ae.read(n, !0), () => Ar(n);
}
function YP(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function KP(e, t, r) {
  const n = Je(e) ? e : ko(e);
  return n.start(Cl("", n, t, r)), n.animation;
}
const Vr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Jn = typeof window < "u" && window.MotionDebug !== void 0, na = ["", "X", "Y", "Z"], XP = { visibility: "hidden" }, Nu = 1e3;
let ZP = 0;
function oa(e, t, r, n) {
  const { latestValues: o } = t;
  o[e] && (r[e] = o[e], t.setStaticValue(e, 0), n && (n[e] = 0));
}
function tp(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const r = Mh(t);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(r, "transform", ae, !(o || i));
  }
  const { parent: n } = e;
  n && !n.hasCheckedOptimisedAppear && tp(n);
}
function rp({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      this.id = ZP++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Jn && (Vr.totalNodes = Vr.resolvedTargetDeltas = Vr.recalculatedProjection = 0), this.nodes.forEach(ek), this.nodes.forEach(ik), this.nodes.forEach(sk), this.nodes.forEach(tk), Jn && window.MotionDebug.record(Vr);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new GP());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new _l()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = YP(s), this.instance = s;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(s, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = qP(f, 250), ki.hasAnimatedSinceResize && (ki.hasAnimatedSinceResize = !1, this.nodes.forEach(Hu));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || u.getDefaultTransition() || dk, { onLayoutAnimationStart: v, onLayoutAnimationComplete: w } = u.getProps(), S = !this.targetLayout || !ep(this.targetLayout, g) || p, T = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || T || f && (S || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, T);
          const k = {
            ...dl(y, "layout"),
            onPlay: v,
            onComplete: w
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k);
        } else
          f || Hu(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Ar(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ak), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && tp(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Wu);
        return;
      }
      this.isUpdating || this.nodes.forEach(nk), this.isUpdating = !1, this.nodes.forEach(ok), this.nodes.forEach(JP), this.nodes.forEach(QP), this.clearAllSnapshots();
      const a = Qt.now();
      Ie.delta = $r(0, 1e3 / 60, a - Ie.timestamp), Ie.timestamp = a, Ie.isProcessing = !0, Ks.update.process(Ie), Ks.preRender.process(Ie), Ks.render.process(Ie), Ie.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, $l.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(rk), this.sharedNodes.forEach(lk);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ae.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ae.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ke(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
        const l = n(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Qh(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      s && (a || jr(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return s && (l = this.removeTransform(l)), fk(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a)
        return ke();
      const l = a.measureViewportBox();
      if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(hk))) {
        const { scroll: u } = this.root;
        u && (un(l.x, u.offset.x), un(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = ke();
      if (At(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: d, options: f } = u;
        u !== this.root && d && f.layoutScroll && (d.wasRoot && At(l, s), un(l.x, d.offset.x), un(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = ke();
      At(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && dn(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), jr(u.latestValues) && dn(l, u.latestValues);
      }
      return jr(this.latestValues) && dn(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ke();
      At(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !jr(c.latestValues))
          continue;
        Da(c.latestValues) && c.updateSnapshot();
        const u = ke(), d = c.measurePageBox();
        At(u, d), Bu(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return jr(this.latestValues) && Bu(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ie.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(s || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = Ie.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ke(), this.relativeTargetOrigin = ke(), co(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), At(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ke(), this.targetWithTransforms = ke()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), fP(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : At(this.target, this.layout.layoutBox), Gh(this.target, this.targetDelta)) : At(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ke(), this.relativeTargetOrigin = ke(), co(this.relativeTargetOrigin, this.target, p.target), At(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Jn && Vr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Da(this.parent.latestValues) || Uh(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === Ie.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      At(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      SP(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ke());
      const { target: g } = a;
      if (!g) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ou(this.prevProjectionDelta.x, this.projectionDelta.x), Ou(this.prevProjectionDelta.y, this.projectionDelta.y)), lo(this.projectionDelta, this.layoutCorrected, g, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== p || !Lu(this.projectionDelta.x, this.prevProjectionDelta.x) || !Lu(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), Jn && Vr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = cn(), this.projectionDelta = cn(), this.projectionDeltaWithTransform = cn();
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = cn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = ke(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, y = p !== g, v = this.getStack(), w = !v || v.members.length <= 1, S = !!(y && !w && this.options.crossfade === !0 && !this.path.some(uk));
      this.animationProgress = 0;
      let T;
      this.mixTargetDelta = (k) => {
        const C = k / 1e3;
        Uu(d.x, s.x, C), Uu(d.y, s.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (co(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), ck(this.relativeTarget, this.relativeTargetOrigin, f, C), T && NP(this.relativeTarget, T) && (this.isProjectionDirty = !1), T || (T = ke()), At(T, this.relativeTarget)), y && (this.animationValues = u, BP(u, c, this.latestValues, C, S, w)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Ar(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ae.update(() => {
        ki.hasAnimatedSinceResize = !0, this.currentAnimation = KP(0, Nu, {
          ...s,
          onUpdate: (a) => {
            this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Nu), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (this !== s && this.layout && c && np(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ke();
          const d = yt(this.layout.layoutBox.x);
          l.x.min = s.target.x.min, l.x.max = l.x.min + d;
          const f = yt(this.layout.layoutBox.y);
          l.y.min = s.target.y.min, l.y.max = l.y.min + f;
        }
        At(a, l), dn(a, u), lo(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new WP()), this.sharedNodes.get(s).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let a = !1;
      const { latestValues: l } = s;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && oa("z", s, c, this.animationValues);
      for (let u = 0; u < na.length; u++)
        oa(`rotate${na[u]}`, s, c, this.animationValues), oa(`skew${na[u]}`, s, c, this.animationValues);
      s.render();
      for (const u in c)
        s.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return XP;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = _i(s == null ? void 0 : s.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = _i(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !jr(this.latestValues) && (y.transform = u ? u({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = HP(this.projectionDeltaWithTransform, this.treeScale, f), u && (c.transform = u(f, c.transform));
      const { x: p, y: g } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in Ui) {
        if (f[y] === void 0)
          continue;
        const { correct: v, applyTo: w } = Ui[y], S = c.transform === "none" ? f[y] : v(f[y], d);
        if (w) {
          const T = w.length;
          for (let k = 0; k < T; k++)
            c[w[k]] = S;
        } else
          c[y] = S;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? _i(s == null ? void 0 : s.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Wu), this.root.sharedNodes.clear();
    }
  };
}
function JP(e) {
  e.updateLayout();
}
function QP(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, s = r.source !== e.layout.source;
    i === "size" ? Et((d) => {
      const f = s ? r.measuredBox[d] : r.layoutBox[d], p = yt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : np(i, r.layoutBox, n) && Et((d) => {
      const f = s ? r.measuredBox[d] : r.layoutBox[d], p = yt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const a = cn();
    lo(a, n, r.layoutBox);
    const l = cn();
    s ? lo(l, e.applyTransform(o, !0), r.measuredBox) : lo(l, n, r.layoutBox);
    const c = !Qh(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const g = ke();
          co(g, r.layoutBox, f.layoutBox);
          const y = ke();
          co(y, n, p.layoutBox), ep(g, y) || (u = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = g, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function ek(e) {
  Jn && Vr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function tk(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function rk(e) {
  e.clearSnapshot();
}
function Wu(e) {
  e.clearMeasurements();
}
function nk(e) {
  e.isLayoutDirty = !1;
}
function ok(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Hu(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function ik(e) {
  e.resolveTargetDelta();
}
function sk(e) {
  e.calcProjection();
}
function ak(e) {
  e.resetSkewAndRotation();
}
function lk(e) {
  e.removeLeadSnapshot();
}
function Uu(e, t, r) {
  e.translate = we(t.translate, 0, r), e.scale = we(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Gu(e, t, r, n) {
  e.min = we(t.min, r.min, n), e.max = we(t.max, r.max, n);
}
function ck(e, t, r, n) {
  Gu(e.x, t.x, r.x, n), Gu(e.y, t.y, r.y, n);
}
function uk(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const dk = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, qu = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Yu = qu("applewebkit/") && !qu("chrome/") ? Math.round : We;
function Ku(e) {
  e.min = Yu(e.min), e.max = Yu(e.max);
}
function fk(e) {
  Ku(e.x), Ku(e.y);
}
function np(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !dP(Iu(t), Iu(r), 0.2);
}
function hk(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const pk = rp({
  attachResizeListener: (e, t) => lr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), ia = {
  current: void 0
}, op = rp({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!ia.current) {
      const e = new pk({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), ia.current = e;
    }
    return ia.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), mk = {
  pan: {
    Feature: _P
  },
  drag: {
    Feature: kP,
    ProjectionNode: op,
    MeasureLayout: Xh
  }
};
function Xu(e, t) {
  const r = t ? "pointerenter" : "pointerleave", n = t ? "onHoverStart" : "onHoverEnd", o = (i, s) => {
    if (i.pointerType === "touch" || Lh())
      return;
    const a = e.getProps();
    e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
    const l = a[n];
    l && ae.postRender(() => l(i, s));
  };
  return fr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class gk extends Mr {
  mount() {
    this.unmount = dr(Xu(this.node, !0), Xu(this.node, !1));
  }
  unmount() {
  }
}
class yk extends Mr {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = dr(lr(this.node.current, "focus", () => this.onFocus()), lr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const ip = (e, t) => t ? e === t ? !0 : ip(e, t.parentElement) : !1;
function sa(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, as(r));
}
class bk extends Mr {
  constructor() {
    super(...arguments), this.removeStartListeners = We, this.removeEndListeners = We, this.removeAccessibleListeners = We, this.startPointerPress = (t, r) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const n = this.node.getProps(), i = fr(window, "pointerup", (a, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u, globalTapTarget: d } = this.node.getProps(), f = !d && !ip(this.node.current, a.target) ? u : c;
        f && ae.update(() => f(a, l));
      }, {
        passive: !(n.onTap || n.onPointerUp)
      }), s = fr(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
        passive: !(n.onTapCancel || n.onPointerCancel)
      });
      this.removeEndListeners = dr(i, s), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const s = (a) => {
          a.key !== "Enter" || !this.checkPressEnd() || sa("up", (l, c) => {
            const { onTap: u } = this.node.getProps();
            u && ae.postRender(() => u(l, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = lr(this.node.current, "keyup", s), sa("down", (a, l) => {
          this.startPress(a, l);
        });
      }, r = lr(this.node.current, "keydown", t), n = () => {
        this.isPressing && sa("cancel", (i, s) => this.cancelPress(i, s));
      }, o = lr(this.node.current, "blur", n);
      this.removeAccessibleListeners = dr(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && ae.postRender(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Lh();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && ae.postRender(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = fr(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), n = lr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = dr(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const ja = /* @__PURE__ */ new WeakMap(), aa = /* @__PURE__ */ new WeakMap(), vk = (e) => {
  const t = ja.get(e.target);
  t && t(e);
}, xk = (e) => {
  e.forEach(vk);
};
function Sk({ root: e, ...t }) {
  const r = e || document;
  aa.has(r) || aa.set(r, {});
  const n = aa.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(xk, { root: e, ...t })), n[o];
}
function wk(e, t, r) {
  const n = Sk(t);
  return ja.set(e, r), n.observe(e), () => {
    ja.delete(e), n.unobserve(e);
  };
}
const Tk = {
  some: 0,
  all: 1
};
class Ck extends Mr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, s = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : Tk[o]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, i && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), f = c ? u : d;
      f && f(l);
    };
    return wk(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(Pk(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function Pk({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const kk = {
  inView: {
    Feature: Ck
  },
  tap: {
    Feature: bk
  },
  focus: {
    Feature: yk
  },
  hover: {
    Feature: gk
  }
}, _k = {
  layout: {
    ProjectionNode: op,
    MeasureLayout: Xh
  }
}, El = gr({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), ls = gr({}), Rl = typeof window < "u", sp = Rl ? Wa : He, ap = gr({ strict: !1 });
function Ak(e, t, r, n, o) {
  var i, s;
  const { visualElement: a } = _e(ls), l = _e(ap), c = _e(Do), u = _e(El).reducedMotion, d = ue();
  n = n || l.renderer, !d.current && n && (d.current = n(e, {
    visualState: t,
    parent: a,
    props: r,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const f = d.current, p = _e(Kh);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && $k(d.current, r, o, p), Nd(() => {
    f && f.update(r, c);
  });
  const g = r[Rh], y = ue(!!g && !(!((i = window.MotionHandoffIsComplete) === null || i === void 0) && i.call(window, g)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, g)));
  return sp(() => {
    f && (window.MotionIsMounted = !0, f.updateFeatures(), $l.render(f.render), y.current && f.animationState && f.animationState.animateChanges());
  }), He(() => {
    f && (!y.current && f.animationState && f.animationState.animateChanges(), y.current && (queueMicrotask(() => {
      var v;
      (v = window.MotionHandoffMarkAsComplete) === null || v === void 0 || v.call(window, g);
    }), y.current = !1));
  }), f;
}
function $k(e, t, r, n) {
  const { layoutId: o, layout: i, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new r(e.latestValues, t["data-framer-portal-id"] ? void 0 : lp(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!s || a && ln(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof i == "string" ? i : "both",
    initialPromotionConfig: n,
    layoutScroll: l,
    layoutRoot: c
  });
}
function lp(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : lp(e.parent);
}
function Ek(e, t, r) {
  return ve(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : ln(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function cs(e) {
  return wo(e.animate) || ul.some((t) => To(e[t]));
}
function cp(e) {
  return !!(cs(e) || e.variants);
}
function Rk(e, t) {
  if (cs(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || To(r) ? r : void 0,
      animate: To(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Mk(e) {
  const { initial: t, animate: r } = Rk(e, _e(ls));
  return Ue(() => ({ initial: t, animate: r }), [Zu(t), Zu(r)]);
}
function Zu(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ju = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, wn = {};
for (const e in Ju)
  wn[e] = {
    isEnabled: (t) => Ju[e].some((r) => !!t[r])
  };
function Ok(e) {
  for (const t in e)
    wn[t] = {
      ...wn[t],
      ...e[t]
    };
}
const zk = Symbol.for("motionComponentSymbol");
function Dk({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && Ok(e);
  function i(a, l) {
    let c;
    const u = {
      ..._e(El),
      ...a,
      layoutId: Bk(a)
    }, { isStatic: d } = u, f = Mk(a), p = n(a, d);
    if (!d && Rl) {
      jk(u, e);
      const g = Vk(u);
      c = g.MeasureLayout, f.visualElement = Ak(o, p, u, t, g.ProjectionNode);
    }
    return _.jsxs(ls.Provider, { value: f, children: [c && f.visualElement ? _.jsx(c, { visualElement: f.visualElement, ...u }) : null, r(o, a, Ek(p, f.visualElement, l), p, d, f.visualElement)] });
  }
  const s = Yi(i);
  return s[zk] = o, s;
}
function Bk({ layoutId: e }) {
  const t = _e(Al).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function jk(e, t) {
  const r = _e(ap).strict;
  if (process.env.NODE_ENV !== "production" && t && r) {
    const n = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? $n(!1, n) : pr(!1, n);
  }
}
function Vk(e) {
  const { drag: t, layout: r } = wn;
  if (!t && !r)
    return {};
  const n = { ...t, ...r };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || r != null && r.isEnabled(e) ? n.MeasureLayout : void 0,
    ProjectionNode: n.ProjectionNode
  };
}
const Fk = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Ml(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Fk.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function up(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const dp = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function fp(e, t, r, n) {
  up(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(dp.has(o) ? o : ss(o), t.attrs[o]);
}
function hp(e, { layout: t, layoutId: r }) {
  return Rr.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!Ui[e] || e === "opacity");
}
function Ol(e, t, r) {
  var n;
  const { style: o } = e, i = {};
  for (const s in o)
    (Je(o[s]) || t.style && Je(t.style[s]) || hp(s, e) || ((n = r == null ? void 0 : r.getValue(s)) === null || n === void 0 ? void 0 : n.liveStyle) !== void 0) && (i[s] = o[s]);
  return r && o && typeof o.willChange == "string" && (r.applyWillChange = !1), i;
}
function pp(e, t, r) {
  const n = Ol(e, t, r);
  for (const o in e)
    if (Je(e[o]) || Je(t[o])) {
      const i = Mo.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      n[i] = e[o];
    }
  return n;
}
function zl(e) {
  const t = ue(null);
  return t.current === null && (t.current = e()), t.current;
}
function Ik({ applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: r, onMount: n }, o, i, s, a) {
  const l = {
    latestValues: Lk(o, i, s, a ? !1 : e, t),
    renderState: r()
  };
  return n && (l.mount = (c) => n(o, c, l)), l;
}
const mp = (e) => (t, r) => {
  const n = _e(ls), o = _e(Do), i = () => Ik(e, t, n, o, r);
  return r ? i() : zl(i);
};
function Qu(e, t, r) {
  const n = Array.isArray(t) ? t : [t];
  for (let o = 0; o < n.length; o++) {
    const i = ll(e, n[o]);
    if (i) {
      const { transitionEnd: s, transition: a, ...l } = i;
      r(l, s);
    }
  }
}
function Lk(e, t, r, n, o) {
  var i;
  const s = {};
  let a = n && ((i = e.style) === null || i === void 0 ? void 0 : i.willChange) === void 0;
  const l = o(e, {});
  for (const y in l)
    s[y] = _i(l[y]);
  let { initial: c, animate: u } = e;
  const d = cs(e), f = cp(e);
  t && f && !d && e.inherit !== !1 && (c === void 0 && (c = t.initial), u === void 0 && (u = t.animate));
  let p = r ? r.initial === !1 : !1;
  p = p || c === !1;
  const g = p ? u : c;
  return g && typeof g != "boolean" && !wo(g) && Qu(e, g, (y, v) => {
    for (const w in y) {
      let S = y[w];
      if (Array.isArray(S)) {
        const T = p ? S.length - 1 : 0;
        S = S[T];
      }
      S !== null && (s[w] = S);
    }
    for (const w in v)
      s[w] = v[w];
  }), a && u && c !== !1 && !wo(u) && Qu(e, u, (y) => {
    for (const v in y)
      if (Oh(v)) {
        s.willChange = "transform";
        return;
      }
  }), s;
}
const Dl = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), gp = () => ({
  ...Dl(),
  attrs: {}
}), yp = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Nk = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Wk = Mo.length;
function Hk(e, t, r) {
  let n = "", o = !0;
  for (let i = 0; i < Wk; i++) {
    const s = Mo[i], a = e[s];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || r) {
      const c = yp(a, bl[s]);
      if (!l) {
        o = !1;
        const u = Nk[s] || s;
        n += `${u}(${c}) `;
      }
      r && (t[s] = c);
    }
  }
  return n = n.trim(), r ? n = r(t, o ? "" : n) : o && (n = "none"), n;
}
function Bl(e, t, r) {
  const { style: n, vars: o, transformOrigin: i } = e;
  let s = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (Rr.has(l)) {
      s = !0;
      continue;
    } else if (sh(l)) {
      o[l] = c;
      continue;
    } else {
      const u = yp(c, bl[l]);
      l.startsWith("origin") ? (a = !0, i[l] = u) : n[l] = u;
    }
  }
  if (t.transform || (s || r ? n.transform = Hk(t, e.transform, r) : n.transform && (n.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = i;
    n.transformOrigin = `${l} ${c} ${u}`;
  }
}
function ed(e, t, r) {
  return typeof e == "string" ? e : F.transform(t + r * e);
}
function Uk(e, t, r) {
  const n = ed(t, e.x, e.width), o = ed(r, e.y, e.height);
  return `${n} ${o}`;
}
const Gk = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, qk = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Yk(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? Gk : qk;
  e[i.offset] = F.transform(-n);
  const s = F.transform(t), a = F.transform(r);
  e[i.array] = `${s} ${a}`;
}
function jl(e, {
  attrX: t,
  attrY: r,
  attrScale: n,
  originX: o,
  originY: i,
  pathLength: s,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, d) {
  if (Bl(e, c, d), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: p, dimensions: g } = e;
  f.transform && (g && (p.transform = f.transform), delete f.transform), g && (o !== void 0 || i !== void 0 || p.transform) && (p.transformOrigin = Uk(g, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (f.x = t), r !== void 0 && (f.y = r), n !== void 0 && (f.scale = n), s !== void 0 && Yk(f, s, a, l, !1);
}
const Vl = (e) => typeof e == "string" && e.toLowerCase() === "svg", Kk = {
  useVisualState: mp({
    scrapeMotionValuesFromProps: pp,
    createRenderState: gp,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      ae.read(() => {
        try {
          r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          r.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), ae.render(() => {
        jl(r, n, Vl(t.tagName), e.transformTemplate), fp(t, r);
      });
    }
  })
}, Xk = {
  useVisualState: mp({
    applyWillChange: !0,
    scrapeMotionValuesFromProps: Ol,
    createRenderState: Dl
  })
};
function bp(e, t, r) {
  for (const n in t)
    !Je(t[n]) && !hp(n, r) && (e[n] = t[n]);
}
function Zk({ transformTemplate: e }, t) {
  return Ue(() => {
    const r = Dl();
    return Bl(r, t, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function Jk(e, t) {
  const r = e.style || {}, n = {};
  return bp(n, r, e), Object.assign(n, Zk(e, t)), n;
}
function Qk(e, t) {
  const r = {}, n = Jk(e, t);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = n, r;
}
const e_ = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Gi(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || e_.has(e);
}
let vp = (e) => !Gi(e);
function t_(e) {
  e && (vp = (t) => t.startsWith("on") ? !Gi(t) : e(t));
}
try {
  t_(require("@emotion/is-prop-valid").default);
} catch {
}
function r_(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (vp(o) || r === !0 && Gi(o) || !t && !Gi(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function n_(e, t, r, n) {
  const o = Ue(() => {
    const i = gp();
    return jl(i, t, Vl(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    bp(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function o_(e = !1) {
  return (r, n, o, { latestValues: i }, s) => {
    const l = (Ml(r) ? n_ : Qk)(n, i, s, r), c = r_(n, typeof r == "string", e), u = r !== Wd ? { ...c, ...l, ref: o } : {}, { children: d } = n, f = Ue(() => Je(d) ? d.get() : d, [d]);
    return Hd(r, {
      ...u,
      children: f
    });
  };
}
function i_(e, t) {
  return function(n, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...Ml(n) ? Kk : Xk,
      preloadedFeatures: e,
      useRender: o_(o),
      createVisualElement: t,
      Component: n
    };
    return Dk(s);
  };
}
const Va = { current: null }, xp = { current: !1 };
function s_() {
  if (xp.current = !0, !!Rl)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Va.current = e.matches;
      e.addListener(t), t();
    } else
      Va.current = !1;
}
function a_(e, t, r) {
  for (const n in t) {
    const o = t[n], i = r[n];
    if (Je(o))
      e.addValue(n, o), process.env.NODE_ENV === "development" && ns(o.version === "11.11.1", `Attempting to mix Framer Motion versions ${o.version} with 11.11.1 may not work as expected.`);
    else if (Je(i))
      e.addValue(n, ko(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(n)) {
        const s = e.getValue(n);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(n);
        e.addValue(n, ko(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const n in r)
    t[n] === void 0 && e.removeValue(n);
  return t;
}
const td = /* @__PURE__ */ new WeakMap(), l_ = [...ch, Xe, Er], c_ = (e) => l_.find(lh(e)), rd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class u_ {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, r, n) {
    return {};
  }
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, blockInitialAnimation: i, visualState: s }, a = {}) {
    this.applyWillChange = !1, this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ml, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = Qt.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, ae.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c } = s;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = r.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!i, this.isControllingVariants = cs(r), this.isVariantNode = cp(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const f in d) {
      const p = d[f];
      l[f] !== void 0 && Je(p) && p.set(l[f], !1);
    }
  }
  mount(t) {
    this.current = t, td.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), xp.current || s_(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Va.current, process.env.NODE_ENV !== "production" && ns(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    td.delete(this.current), this.projection && this.projection.unmount(), Ar(this.notifyUpdate), Ar(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const r = this.features[t];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, r) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const n = Rr.has(t), o = r.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && ae.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0);
    }), i = r.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, r)), this.valueSubscriptions.set(t, () => {
      o(), i(), s && s(), r.owner && r.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in wn) {
      const r = wn[t];
      if (!r)
        continue;
      const { isEnabled: n, Feature: o } = r;
      if (!this.features[t] && o && n(this.props) && (this.features[t] = new o(this)), this.features[t]) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), i.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ke();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let n = 0; n < rd.length; n++) {
      const o = rd[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o, s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    this.prevMotionValues = a_(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, r) {
    const n = this.values.get(t);
    r !== n && (n && this.removeValue(t), this.bindToMotionValue(t, r), this.values.set(t, r), this.latestValues[t] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let n = this.values.get(t);
    return n === void 0 && r !== void 0 && (n = ko(r === null ? void 0 : r, { owner: this }), this.addValue(t, n)), n;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, r) {
    var n;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (oh(o) || nh(o)) ? o = parseFloat(o) : !c_(o) && Er.test(r) && (o = yh(t, r)), this.setBaseTarget(t, Je(o) ? o.get() : o)), Je(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props;
    let o;
    if (typeof n == "string" || typeof n == "object") {
      const s = ll(this.props, n, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
      s && (o = s[t]);
    }
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Je(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new _l()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Sp extends u_ {
  constructor() {
    super(...arguments), this.KeyframeResolver = bh;
  }
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
}
function d_(e) {
  return window.getComputedStyle(e);
}
class f_ extends Sp {
  constructor() {
    super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = up;
  }
  readValueFromInstance(t, r) {
    if (Rr.has(r)) {
      const n = vl(r);
      return n && n.default || 0;
    } else {
      const n = d_(t), o = (sh(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return qh(t, r);
  }
  build(t, r, n) {
    Bl(t, r, n.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return Ol(t, r, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Je(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
class h_ extends Sp {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ke;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Rr.has(r)) {
      const n = vl(r);
      return n && n.default || 0;
    }
    return r = dp.has(r) ? r : ss(r), t.getAttribute(r);
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return pp(t, r, n);
  }
  build(t, r, n) {
    jl(t, r, this.isSVGTag, n.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    fp(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = Vl(t.tagName), super.mount(t);
  }
}
const p_ = (e, t) => Ml(e) ? new h_(t) : new f_(t, {
  allowProjection: e !== Wd
}), m_ = /* @__PURE__ */ i_({
  ...rP,
  ...kk,
  ...mk,
  ..._k
}, p_), wp = /* @__PURE__ */ Yw(m_);
class g_ extends Ne.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      n.height = r.offsetHeight || 0, n.width = r.offsetWidth || 0, n.top = r.offsetTop, n.left = r.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function y_({ children: e, isPresent: t }) {
  const r = $o(), n = ue(null), o = ue({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: i } = _e(El);
  return Nd(() => {
    const { width: s, height: a, top: l, left: c } = o.current;
    if (t || !n.current || !s || !a)
      return;
    n.current.dataset.motionPopId = r;
    const u = document.createElement("style");
    return i && (u.nonce = i), document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [t]), _.jsx(g_, { isPresent: t, childRef: n, sizeRef: o, children: Ne.cloneElement(e, { ref: n }) });
}
const b_ = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: i, mode: s }) => {
  const a = zl(v_), l = $o(), c = Ue(
    () => ({
      id: l,
      initial: t,
      isPresent: r,
      custom: o,
      onExitComplete: (u) => {
        a.set(u, !0);
        for (const d of a.values())
          if (!d)
            return;
        n && n();
      },
      register: (u) => (a.set(u, !1), () => a.delete(u))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? [Math.random()] : [r]
  );
  return Ue(() => {
    a.forEach((u, d) => a.set(d, !1));
  }, [r]), Ne.useEffect(() => {
    !r && !a.size && n && n();
  }, [r]), s === "popLayout" && (e = _.jsx(y_, { isPresent: r, children: e })), _.jsx(Do.Provider, { value: c, children: e });
};
function v_() {
  return /* @__PURE__ */ new Map();
}
const ui = (e) => e.key || "";
function nd(e) {
  const t = [];
  return Ud.forEach(e, (r) => {
    Gd(r) && t.push(r);
  }), t;
}
const x_ = ({ children: e, exitBeforeEnter: t, custom: r, initial: n = !0, onExitComplete: o, presenceAffectsLayout: i = !0, mode: s = "sync" }) => {
  pr(!t, "Replace exitBeforeEnter with mode='wait'");
  const a = Ue(() => nd(e), [e]), l = a.map(ui), c = ue(!0), u = ue(a), d = zl(() => /* @__PURE__ */ new Map()), [f, p] = rt(a), [g, y] = rt(a);
  sp(() => {
    c.current = !1, u.current = a;
    for (let S = 0; S < g.length; S++) {
      const T = ui(g[S]);
      l.includes(T) ? d.delete(T) : d.get(T) !== !0 && d.set(T, !1);
    }
  }, [g, l.length, l.join("-")]);
  const v = [];
  if (a !== f) {
    let S = [...a];
    for (let T = 0; T < g.length; T++) {
      const k = g[T], C = ui(k);
      l.includes(C) || (S.splice(T, 0, k), v.push(k));
    }
    s === "wait" && v.length && (S = v), y(nd(S)), p(a);
    return;
  }
  process.env.NODE_ENV !== "production" && s === "wait" && g.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: w } = _e(Al);
  return _.jsx(_.Fragment, { children: g.map((S) => {
    const T = ui(S), k = a === g || l.includes(T), C = () => {
      if (d.has(T))
        d.set(T, !0);
      else
        return;
      let $ = !0;
      d.forEach((E) => {
        E || ($ = !1);
      }), $ && (w == null || w(), y(u.current), o && o());
    };
    return _.jsx(b_, { isPresent: k, initial: !c.current || n ? void 0 : !1, custom: k ? void 0 : r, presenceAffectsLayout: i, mode: s, onExitComplete: k ? void 0 : C, children: S }, T);
  }) });
}, S_ = (e, t) => e.find((r) => r.id === t);
function od(e, t) {
  const r = Tp(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function Tp(e, t) {
  for (const [r, n] of Object.entries(e))
    if (S_(n, t))
      return r;
}
function w_(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function T_(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0, n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", s = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: o,
    right: i,
    left: s
  };
}
var C_ = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, P_ = /* @__PURE__ */ Mf(
  function(e) {
    return C_.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), k_ = P_, __ = function(t) {
  return t !== "theme";
}, id = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? k_ : __;
}, sd = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, A_ = !1, $_ = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Bf(r, n, o), $w(function() {
    return jf(r, n, o);
  }), null;
}, E_ = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var a = sd(t, r, n), l = a || id(o), c = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        d.push(u[p], u[0][p]);
    }
    var g = il(function(y, v, w) {
      var S = c && y.as || o, T = "", k = [], C = y;
      if (y.theme == null) {
        C = {};
        for (var $ in y)
          C[$] = y[$];
        C.theme = Ne.useContext(So);
      }
      typeof y.className == "string" ? T = xw(v.registered, k, y.className) : y.className != null && (T = y.className + " ");
      var E = ol(d.concat(k), v.registered, C);
      T += v.key + "-" + E.name, s !== void 0 && (T += " " + s);
      var O = c && a === void 0 ? id(S) : l, I = {};
      for (var M in y)
        c && M === "as" || O(M) && (I[M] = y[M]);
      return I.className = T, w && (I.ref = w), /* @__PURE__ */ Ne.createElement(Ne.Fragment, null, /* @__PURE__ */ Ne.createElement($_, {
        cache: v,
        serialized: E,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ Ne.createElement(S, I));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = a, Object.defineProperty(g, "toString", {
      value: function() {
        return s === void 0 && A_ ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), g.withComponent = function(y, v) {
      return e(y, Fi({}, r, v, {
        shouldForwardProp: sd(g, v, !0)
      })).apply(void 0, d);
    }, g;
  };
}, R_ = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Fa = E_.bind();
R_.forEach(function(e) {
  Fa[e] = Fa(e);
});
const M_ = /* @__PURE__ */ new Set([
  ...Qg({}),
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), O_ = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function z_(e) {
  return (O_.has(e) || !M_.has(e)) && e[0] !== "_";
}
const D_ = Jm(Fa), B_ = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...s } = t, a = ey(r), [l] = rg(s, a), c = Lt(e, t), u = jm(
    {},
    o,
    c,
    Ga(l),
    i
  ), d = uf(u)(t.theme);
  return n ? [d, n] : d;
};
function la(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = z_);
  const o = B_({ baseStyle: r }), i = D_(
    e,
    n
  )(o);
  return Yi(
    function(l, c) {
      const { children: u, ...d } = l, { colorMode: f, forced: p } = al();
      return Hd(
        i,
        { ref: c, "data-theme": p ? f : void 0, ...d },
        u
      );
    }
  );
}
function j_() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(la, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return la(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, la(r)), e.get(r);
    }
  });
}
const Re = j_(), V_ = {
  initial: (e) => {
    const { position: t } = e, r = ["top", "bottom"].includes(t) ? "y" : "x";
    let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
    return t === "bottom" && (n = 1), {
      opacity: 0,
      [r]: n * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
}, Cp = Am((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: i = !1,
    position: s = "bottom",
    duration: a = 5e3,
    containerStyle: l,
    motionVariants: c = V_,
    toastSpacing: u = "0.5rem"
  } = e, [d, f] = rt(a), p = $P();
  zi(() => {
    p || n == null || n();
  }, [p]), zi(() => {
    f(a);
  }, [a]);
  const g = () => f(null), y = () => f(a), v = () => {
    p && o();
  };
  He(() => {
    p && i && o();
  }, [p, i, o]), vg(v, d);
  const w = Ue(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: u,
      ...l
    }),
    [l, u]
  ), S = Ue(() => w_(s), [s]);
  return /* @__PURE__ */ _.jsx(
    wp.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: c,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: g,
      onHoverEnd: y,
      custom: { position: s },
      style: S,
      children: /* @__PURE__ */ _.jsx(
        Re.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: w,
          children: Lt(r, { id: t, onClose: v })
        }
      )
    }
  );
});
Cp.displayName = "ToastComponent";
function xt(e) {
  return Yi(e);
}
var F_ = typeof Element < "u", I_ = typeof Map == "function", L_ = typeof Set == "function", N_ = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ai(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!Ai(e[n], t[n])) return !1;
      return !0;
    }
    var i;
    if (I_ && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Ai(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (L_ && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (N_ && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length) return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    if (F_ && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Ai(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var W_ = function(t, r) {
  try {
    return Ai(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const H_ = /* @__PURE__ */ Kd(W_);
function Pp() {
  const e = _e(
    So
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
function U_() {
  const e = al(), t = Pp();
  return { ...e, theme: t };
}
function kp(e, t = {}) {
  const { styleConfig: r, ...n } = t, { theme: o, colorMode: i } = U_(), s = e ? tf(o, `components.${e}`) : void 0, a = r || s, l = Rt(
    { theme: o, colorMode: i },
    (a == null ? void 0 : a.defaultProps) ?? {},
    Ga(rf(n, ["children"]))
  ), c = ue({});
  if (a) {
    const d = uy(a)(l);
    H_(c.current, d) || (c.current = d);
  }
  return c.current;
}
function Bo(e, t = {}) {
  return kp(e, t);
}
function _p(e, t = {}) {
  return kp(e, t);
}
const ad = {
  path: /* @__PURE__ */ _.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ _.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ _.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ _.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, jo = xt((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: i = !1,
    children: s,
    className: a,
    __css: l,
    ...c
  } = e, u = vt("chakra-icon", a), d = Bo("Icon", e), f = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: o,
    ...l,
    ...d
  }, p = {
    ref: t,
    focusable: i,
    className: u,
    __css: f
  }, g = n ?? ad.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ _.jsx(Re.svg, { as: r, ...p, ...c });
  const y = s ?? ad.path;
  return /* @__PURE__ */ _.jsx(Re.svg, { verticalAlign: "middle", viewBox: g, ...p, ...c, children: y });
});
jo.displayName = "Icon";
function G_(e) {
  return /* @__PURE__ */ _.jsx(jo, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ _.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function q_(e) {
  return /* @__PURE__ */ _.jsx(jo, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ _.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function ld(e) {
  return /* @__PURE__ */ _.jsx(jo, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ _.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
const Y_ = zw({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Fl = xt((e, t) => {
  const r = Bo("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: s = "transparent",
    className: a,
    ...l
  } = _n(e), c = vt("chakra-spinner", a), u = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: s,
    borderLeftColor: s,
    animation: `${Y_} ${i} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ _.jsx(
    Re.div,
    {
      ref: t,
      __css: u,
      className: c,
      ...l,
      children: n && /* @__PURE__ */ _.jsx(Re.span, { srOnly: !0, children: n })
    }
  );
});
Fl.displayName = "Spinner";
const [K_, Il] = yr({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [X_, Ll] = yr({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), Ap = {
  info: { icon: q_, colorScheme: "blue" },
  warning: { icon: ld, colorScheme: "orange" },
  success: { icon: G_, colorScheme: "green" },
  error: { icon: ld, colorScheme: "red" },
  loading: { icon: Fl, colorScheme: "blue" }
};
function Z_(e) {
  return Ap[e].colorScheme;
}
function J_(e) {
  return Ap[e].icon;
}
const $p = xt(function(t, r) {
  const { status: n = "info", addRole: o = !0, ...i } = _n(t), s = t.colorScheme ?? Z_(n), a = _p("Alert", { ...t, colorScheme: s }), l = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...a.container
  };
  return /* @__PURE__ */ _.jsx(K_, { value: { status: n }, children: /* @__PURE__ */ _.jsx(X_, { value: a, children: /* @__PURE__ */ _.jsx(
    Re.div,
    {
      "data-status": n,
      role: o ? "alert" : void 0,
      ref: r,
      ...i,
      className: vt("chakra-alert", t.className),
      __css: l
    }
  ) }) });
});
$p.displayName = "Alert";
function Ep(e) {
  const { status: t } = Il(), r = J_(t), n = Ll(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ _.jsx(
    Re.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: vt("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ _.jsx(r, { h: "100%", w: "100%" })
    }
  );
}
Ep.displayName = "AlertIcon";
const Rp = xt(
  function(t, r) {
    const n = Ll(), { status: o } = Il();
    return /* @__PURE__ */ _.jsx(
      Re.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: vt("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
Rp.displayName = "AlertTitle";
const Mp = xt(
  function(t, r) {
    const { status: n } = Il(), o = Ll(), i = {
      display: "inline",
      ...o.description
    };
    return /* @__PURE__ */ _.jsx(
      Re.div,
      {
        ref: r,
        "data-status": n,
        ...t,
        className: vt("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
Mp.displayName = "AlertDescription";
function Q_(e) {
  return /* @__PURE__ */ _.jsx(jo, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ _.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
const Nl = xt(
  function(t, r) {
    const n = Bo("CloseButton", t), { children: o, isDisabled: i, __css: s, ...a } = _n(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ _.jsx(
      Re.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: r,
        disabled: i,
        __css: {
          ...l,
          ...n,
          ...s
        },
        ...a,
        children: o || /* @__PURE__ */ _.jsx(Q_, { width: "1em", height: "1em" })
      }
    );
  }
);
Nl.displayName = "CloseButton";
const eA = (e) => {
  const {
    status: t,
    variant: r = "solid",
    id: n,
    title: o,
    isClosable: i,
    onClose: s,
    description: a,
    colorScheme: l,
    icon: c
  } = e, u = n ? {
    root: `toast-${n}`,
    title: `toast-${n}-title`,
    description: `toast-${n}-description`
  } : void 0;
  return /* @__PURE__ */ _.jsxs(
    $p,
    {
      addRole: !1,
      status: t,
      variant: r,
      id: u == null ? void 0 : u.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme: l,
      children: [
        /* @__PURE__ */ _.jsx(Ep, { children: c }),
        /* @__PURE__ */ _.jsxs(Re.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ _.jsx(Rp, { id: u == null ? void 0 : u.title, children: o }),
          a && /* @__PURE__ */ _.jsx(Mp, { id: u == null ? void 0 : u.description, display: "block", children: a })
        ] }),
        i && /* @__PURE__ */ _.jsx(
          Nl,
          {
            size: "sm",
            onClick: s,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function tA(e = {}) {
  const { render: t, toastComponent: r = eA } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ _.jsx(r, { ...o, ...e });
}
const rA = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, uo = nA(rA);
function nA(e) {
  let t = e;
  const r = /* @__PURE__ */ new Set(), n = (o) => {
    t = o(t), r.forEach((i) => i());
  };
  return {
    getState: () => t,
    subscribe: (o) => (r.add(o), () => {
      n(() => e), r.delete(o);
    }),
    /**
     * Delete a toast record at its position
     */
    removeToast: (o, i) => {
      n((s) => ({
        ...s,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [i]: s[i].filter((a) => a.id != o)
      }));
    },
    notify: (o, i) => {
      const s = oA(o, i), { position: a, id: l } = s;
      return n((c) => {
        const d = a.includes("top") ? [s, ...c[a] ?? []] : [...c[a] ?? [], s];
        return {
          ...c,
          [a]: d
        };
      }), l;
    },
    update: (o, i) => {
      o && n((s) => {
        const a = { ...s }, { position: l, index: c } = od(a, o);
        return l && c !== -1 && (a[l][c] = {
          ...a[l][c],
          ...i,
          message: tA(i)
        }), a;
      });
    },
    closeAll: ({ positions: o } = {}) => {
      n((i) => (o ?? [
        "bottom",
        "bottom-right",
        "bottom-left",
        "top",
        "top-left",
        "top-right"
      ]).reduce(
        (l, c) => (l[c] = i[c].map((u) => ({
          ...u,
          requestClose: !0
        })), l),
        { ...i }
      ));
    },
    close: (o) => {
      n((i) => {
        const s = Tp(i, o);
        return s ? {
          ...i,
          [s]: i[s].map((a) => a.id == o ? {
            ...a,
            requestClose: !0
          } : a)
        } : i;
      });
    },
    isActive: (o) => !!od(uo.getState(), o).position
  };
}
let cd = 0;
function oA(e, t = {}) {
  cd += 1;
  const r = t.id ?? cd, n = t.position ?? "bottom";
  return {
    id: r,
    message: e,
    position: n,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => uo.removeToast(String(r), n),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
const [Op, iA] = yr({
  strict: !1,
  name: "PortalContext"
}), Wl = "chakra-portal", sA = ".chakra-portal", aA = (e) => /* @__PURE__ */ _.jsx(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: e.zIndex,
      top: 0,
      left: 0,
      right: 0
      // NB: Don't add `bottom: 0`, it makes the entire app unusable
      // @see https://github.com/chakra-ui/chakra-ui/issues/3201
    },
    children: e.children
  }
), lA = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = rt(null), i = ue(null), [, s] = rt({});
  He(() => s({}), []);
  const a = iA(), l = Gw();
  Oi(() => {
    if (!n)
      return;
    const u = n.ownerDocument, d = t ? a ?? u.body : u.body;
    if (!d)
      return;
    i.current = u.createElement("div"), i.current.className = Wl, d.appendChild(i.current), s({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const c = l != null && l.zIndex ? /* @__PURE__ */ _.jsx(aA, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return i.current ? Yd(
    /* @__PURE__ */ _.jsx(Op, { value: i.current, children: c }),
    i.current
  ) : /* @__PURE__ */ _.jsx(
    "span",
    {
      ref: (u) => {
        u && o(u);
      }
    }
  );
}, cA = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, i = o ?? (typeof window < "u" ? document.body : void 0), s = Ue(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Wl), l;
  }, [o]), [, a] = rt({});
  return Oi(() => a({}), []), Oi(() => {
    if (!(!s || !i))
      return i.appendChild(s), () => {
        i.removeChild(s);
      };
  }, [s, i]), i && s ? Yd(
    /* @__PURE__ */ _.jsx(Op, { value: n ? s : null, children: t }),
    s
  ) : null;
};
function us(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ _.jsx(cA, { containerRef: r, ...n }) : /* @__PURE__ */ _.jsx(lA, { ...n });
}
us.className = Wl;
us.selector = sA;
us.displayName = "Portal";
const [uA, rE] = yr({
  name: "ToastOptionsContext",
  strict: !1
}), dA = (e) => {
  const t = $m(
    uo.subscribe,
    uo.getState,
    uo.getState
  ), {
    motionVariants: r,
    component: n = Cp,
    portalProps: o,
    animatePresenceProps: i
  } = e, a = Object.keys(t).map((l) => {
    const c = t[l];
    return /* @__PURE__ */ _.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${l}`,
        id: `chakra-toast-manager-${l}`,
        style: T_(l),
        children: /* @__PURE__ */ _.jsx(x_, { ...i, initial: !1, children: c.map((u) => /* @__PURE__ */ _.jsx(
          n,
          {
            motionVariants: r,
            ...u
          },
          u.id
        )) })
      },
      l
    );
  });
  return /* @__PURE__ */ _.jsx(us, { ...o, children: a });
}, fA = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ _.jsxs(qw, { theme: n, ...i, children: [
    /* @__PURE__ */ _.jsx(uA, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ _.jsx(dA, { ...o })
  ] });
}, hA = fA(Pf), [nE, pA] = yr({
  strict: !1,
  name: "ButtonGroupContext"
});
function Qn(e) {
  const { children: t, className: r, ...n } = e, o = Gd(t) ? qd(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = vt("chakra-button__icon", r);
  return /* @__PURE__ */ _.jsx(
    Re.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...n,
      className: i,
      children: o
    }
  );
}
Qn.displayName = "ButtonIcon";
function Ia(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ _.jsx(Fl, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: s,
    ...a
  } = e, l = vt("chakra-button__spinner", i), c = r === "start" ? "marginEnd" : "marginStart", u = Ue(
    () => ({
      display: "flex",
      alignItems: "center",
      position: t ? "relative" : "absolute",
      [c]: t ? n : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...s
    }),
    [s, t, c, n]
  );
  return /* @__PURE__ */ _.jsx(Re.div, { className: l, ...a, __css: u, children: o });
}
Ia.displayName = "ButtonSpinner";
function mA(e) {
  const [t, r] = rt(!e);
  return { ref: ve((i) => {
    i && r(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
const zp = xt((e, t) => {
  const r = pA(), n = Bo("Button", { ...r, ...e }), {
    isDisabled: o = r == null ? void 0 : r.isDisabled,
    isLoading: i,
    isActive: s,
    children: a,
    leftIcon: l,
    rightIcon: c,
    loadingText: u,
    iconSpacing: d = "0.5rem",
    type: f,
    spinner: p,
    spinnerPlacement: g = "start",
    className: y,
    as: v,
    shouldWrapChildren: w,
    ...S
  } = _n(e), T = Ue(() => {
    const E = { ...n == null ? void 0 : n._focus, zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...n,
      ...!!r && { _focus: E }
    };
  }, [n, r]), { ref: k, type: C } = mA(v), $ = {
    rightIcon: c,
    leftIcon: l,
    iconSpacing: d,
    children: a,
    shouldWrapChildren: w
  };
  return /* @__PURE__ */ _.jsxs(
    Re.button,
    {
      disabled: o || i,
      ref: bg(t, k),
      as: v,
      type: f ?? C,
      "data-active": cc(s),
      "data-loading": cc(i),
      __css: T,
      className: vt("chakra-button", y),
      ...S,
      children: [
        i && g === "start" && /* @__PURE__ */ _.jsx(
          Ia,
          {
            className: "chakra-button__spinner--start",
            label: u,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? u || /* @__PURE__ */ _.jsx(Re.span, { opacity: 0, children: /* @__PURE__ */ _.jsx(ud, { ...$ }) }) : /* @__PURE__ */ _.jsx(ud, { ...$ }),
        i && g === "end" && /* @__PURE__ */ _.jsx(
          Ia,
          {
            className: "chakra-button__spinner--end",
            label: u,
            placement: "end",
            spacing: d,
            children: p
          }
        )
      ]
    }
  );
});
zp.displayName = "Button";
function ud(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o, shouldWrapChildren: i } = e;
  return i ? /* @__PURE__ */ _.jsxs("span", { style: { display: "contents" }, children: [
    t && /* @__PURE__ */ _.jsx(Qn, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ _.jsx(Qn, { marginStart: o, children: r })
  ] }) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    t && /* @__PURE__ */ _.jsx(Qn, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ _.jsx(Qn, { marginStart: o, children: r })
  ] });
}
function eo(e) {
  return typeof e == "function";
}
function gA(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
const yA = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return D1(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, gA(
    ...n.map(
      (i) => (s) => eo(i) ? i(s) : vA(s, i)
    )
  )(o);
}, bA = yA(Pf);
function vA(...e) {
  return Rt({}, ...e, Dp);
}
function Dp(e, t, r, n) {
  if ((eo(e) || eo(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = eo(e) ? e(...o) : e, s = eo(t) ? t(...o) : t;
      return Rt({}, i, s, Dp);
    };
  if (fi(e) && fi(t))
    return [...e, ...t];
  if (fi(e) && pt(t))
    return t;
}
const Bp = xt(function(t, r) {
  const { direction: n, align: o, justify: i, wrap: s, basis: a, grow: l, shrink: c, ...u } = t, d = {
    display: "flex",
    flexDirection: n,
    alignItems: o,
    justifyContent: i,
    flexWrap: s,
    flexBasis: a,
    flexGrow: l,
    flexShrink: c
  };
  return /* @__PURE__ */ _.jsx(Re.div, { ref: r, __css: d, ...u });
});
Bp.displayName = "Flex";
var st = "top", Ot = "bottom", zt = "right", at = "left", Hl = "auto", Vo = [st, Ot, zt, at], Tn = "start", _o = "end", xA = "clippingParents", jp = "viewport", Un = "popper", SA = "reference", dd = /* @__PURE__ */ Vo.reduce(function(e, t) {
  return e.concat([t + "-" + Tn, t + "-" + _o]);
}, []), Vp = /* @__PURE__ */ [].concat(Vo, [Hl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Tn, t + "-" + _o]);
}, []), wA = "beforeRead", TA = "read", CA = "afterRead", PA = "beforeMain", kA = "main", _A = "afterMain", AA = "beforeWrite", $A = "write", EA = "afterWrite", RA = [wA, TA, CA, PA, kA, _A, AA, $A, EA];
function tr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function bt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Yr(e) {
  var t = bt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Mt(e) {
  var t = bt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ul(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = bt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function MA(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !Mt(i) || !tr(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function OA(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], i = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), a = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !Mt(o) || !tr(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const zA = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: MA,
  effect: OA,
  requires: ["computeStyles"]
};
function er(e) {
  return e.split("-")[0];
}
var qr = Math.max, qi = Math.min, Cn = Math.round;
function La() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Fp() {
  return !/^((?!chrome|android).)*safari/i.test(La());
}
function Pn(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && Mt(e) && (o = e.offsetWidth > 0 && Cn(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Cn(n.height) / e.offsetHeight || 1);
  var s = Yr(e) ? bt(e) : window, a = s.visualViewport, l = !Fp() && r, c = (n.left + (l && a ? a.offsetLeft : 0)) / o, u = (n.top + (l && a ? a.offsetTop : 0)) / i, d = n.width / o, f = n.height / i;
  return {
    width: d,
    height: f,
    top: u,
    right: c + d,
    bottom: u + f,
    left: c,
    x: c,
    y: u
  };
}
function Gl(e) {
  var t = Pn(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Ip(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Ul(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function mr(e) {
  return bt(e).getComputedStyle(e);
}
function DA(e) {
  return ["table", "td", "th"].indexOf(tr(e)) >= 0;
}
function Or(e) {
  return ((Yr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ds(e) {
  return tr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ul(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Or(e)
  );
}
function fd(e) {
  return !Mt(e) || // https://github.com/popperjs/popper-core/issues/837
  mr(e).position === "fixed" ? null : e.offsetParent;
}
function BA(e) {
  var t = /firefox/i.test(La()), r = /Trident/i.test(La());
  if (r && Mt(e)) {
    var n = mr(e);
    if (n.position === "fixed")
      return null;
  }
  var o = ds(e);
  for (Ul(o) && (o = o.host); Mt(o) && ["html", "body"].indexOf(tr(o)) < 0; ) {
    var i = mr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Fo(e) {
  for (var t = bt(e), r = fd(e); r && DA(r) && mr(r).position === "static"; )
    r = fd(r);
  return r && (tr(r) === "html" || tr(r) === "body" && mr(r).position === "static") ? t : r || BA(e) || t;
}
function ql(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fo(e, t, r) {
  return qr(e, qi(t, r));
}
function jA(e, t, r) {
  var n = fo(e, t, r);
  return n > r ? r : n;
}
function Lp() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Np(e) {
  return Object.assign({}, Lp(), e);
}
function Wp(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var VA = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Np(typeof t != "number" ? t : Wp(t, Vo));
};
function FA(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, s = r.modifiersData.popperOffsets, a = er(r.placement), l = ql(a), c = [at, zt].indexOf(a) >= 0, u = c ? "height" : "width";
  if (!(!i || !s)) {
    var d = VA(o.padding, r), f = Gl(i), p = l === "y" ? st : at, g = l === "y" ? Ot : zt, y = r.rects.reference[u] + r.rects.reference[l] - s[l] - r.rects.popper[u], v = s[l] - r.rects.reference[l], w = Fo(i), S = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, T = y / 2 - v / 2, k = d[p], C = S - f[u] - d[g], $ = S / 2 - f[u] / 2 + T, E = fo(k, $, C), O = l;
    r.modifiersData[n] = (t = {}, t[O] = E, t.centerOffset = E - $, t);
  }
}
function IA(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ip(t.elements.popper, o) && (t.elements.arrow = o));
}
const LA = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: FA,
  effect: IA,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function kn(e) {
  return e.split("-")[1];
}
var NA = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function WA(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Cn(r * o) / o || 0,
    y: Cn(n * o) / o || 0
  };
}
function hd(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, a = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = s.x, p = f === void 0 ? 0 : f, g = s.y, y = g === void 0 ? 0 : g, v = typeof u == "function" ? u({
    x: p,
    y
  }) : {
    x: p,
    y
  };
  p = v.x, y = v.y;
  var w = s.hasOwnProperty("x"), S = s.hasOwnProperty("y"), T = at, k = st, C = window;
  if (c) {
    var $ = Fo(r), E = "clientHeight", O = "clientWidth";
    if ($ === bt(r) && ($ = Or(r), mr($).position !== "static" && a === "absolute" && (E = "scrollHeight", O = "scrollWidth")), $ = $, o === st || (o === at || o === zt) && i === _o) {
      k = Ot;
      var I = d && $ === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        $[E]
      );
      y -= I - n.height, y *= l ? 1 : -1;
    }
    if (o === at || (o === st || o === Ot) && i === _o) {
      T = zt;
      var M = d && $ === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        $[O]
      );
      p -= M - n.width, p *= l ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: a
  }, c && NA), pe = u === !0 ? WA({
    x: p,
    y
  }, bt(r)) : {
    x: p,
    y
  };
  if (p = pe.x, y = pe.y, l) {
    var q;
    return Object.assign({}, L, (q = {}, q[k] = S ? "0" : "", q[T] = w ? "0" : "", q.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + y + "px)" : "translate3d(" + p + "px, " + y + "px, 0)", q));
  }
  return Object.assign({}, L, (t = {}, t[k] = S ? y + "px" : "", t[T] = w ? p + "px" : "", t.transform = "", t));
}
function HA(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, s = i === void 0 ? !0 : i, a = r.roundOffsets, l = a === void 0 ? !0 : a, c = {
    placement: er(t.placement),
    variation: kn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, hd(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, hd(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const UA = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: HA,
  data: {}
};
var di = {
  passive: !0
};
function GA(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, s = n.resize, a = s === void 0 ? !0 : s, l = bt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, di);
  }), a && l.addEventListener("resize", r.update, di), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, di);
    }), a && l.removeEventListener("resize", r.update, di);
  };
}
const qA = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: GA,
  data: {}
};
var YA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $i(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return YA[t];
  });
}
var KA = {
  start: "end",
  end: "start"
};
function pd(e) {
  return e.replace(/start|end/g, function(t) {
    return KA[t];
  });
}
function Yl(e) {
  var t = bt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Kl(e) {
  return Pn(Or(e)).left + Yl(e).scrollLeft;
}
function XA(e, t) {
  var r = bt(e), n = Or(e), o = r.visualViewport, i = n.clientWidth, s = n.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    var c = Fp();
    (c || !c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + Kl(e),
    y: l
  };
}
function ZA(e) {
  var t, r = Or(e), n = Yl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = qr(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = qr(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -n.scrollLeft + Kl(e), l = -n.scrollTop;
  return mr(o || r).direction === "rtl" && (a += qr(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Xl(e) {
  var t = mr(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Hp(e) {
  return ["html", "body", "#document"].indexOf(tr(e)) >= 0 ? e.ownerDocument.body : Mt(e) && Xl(e) ? e : Hp(ds(e));
}
function ho(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Hp(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = bt(n), s = o ? [i].concat(i.visualViewport || [], Xl(n) ? n : []) : n, a = t.concat(s);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(ho(ds(s)))
  );
}
function Na(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function JA(e, t) {
  var r = Pn(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function md(e, t, r) {
  return t === jp ? Na(XA(e, r)) : Yr(t) ? JA(t, r) : Na(ZA(Or(e)));
}
function QA(e) {
  var t = ho(ds(e)), r = ["absolute", "fixed"].indexOf(mr(e).position) >= 0, n = r && Mt(e) ? Fo(e) : e;
  return Yr(n) ? t.filter(function(o) {
    return Yr(o) && Ip(o, n) && tr(o) !== "body";
  }) : [];
}
function e$(e, t, r, n) {
  var o = t === "clippingParents" ? QA(e) : [].concat(t), i = [].concat(o, [r]), s = i[0], a = i.reduce(function(l, c) {
    var u = md(e, c, n);
    return l.top = qr(u.top, l.top), l.right = qi(u.right, l.right), l.bottom = qi(u.bottom, l.bottom), l.left = qr(u.left, l.left), l;
  }, md(e, s, n));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Up(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? er(n) : null, i = n ? kn(n) : null, s = t.x + t.width / 2 - r.width / 2, a = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case st:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case Ot:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case zt:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case at:
      l = {
        x: t.x - r.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var c = o ? ql(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case Tn:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case _o:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Ao(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, s = i === void 0 ? e.strategy : i, a = r.boundary, l = a === void 0 ? xA : a, c = r.rootBoundary, u = c === void 0 ? jp : c, d = r.elementContext, f = d === void 0 ? Un : d, p = r.altBoundary, g = p === void 0 ? !1 : p, y = r.padding, v = y === void 0 ? 0 : y, w = Np(typeof v != "number" ? v : Wp(v, Vo)), S = f === Un ? SA : Un, T = e.rects.popper, k = e.elements[g ? S : f], C = e$(Yr(k) ? k : k.contextElement || Or(e.elements.popper), l, u, s), $ = Pn(e.elements.reference), E = Up({
    reference: $,
    element: T,
    strategy: "absolute",
    placement: o
  }), O = Na(Object.assign({}, T, E)), I = f === Un ? O : $, M = {
    top: C.top - I.top + w.top,
    bottom: I.bottom - C.bottom + w.bottom,
    left: C.left - I.left + w.left,
    right: I.right - C.right + w.right
  }, L = e.modifiersData.offset;
  if (f === Un && L) {
    var pe = L[o];
    Object.keys(M).forEach(function(q) {
      var fe = [zt, Ot].indexOf(q) >= 0 ? 1 : -1, Te = [st, Ot].indexOf(q) >= 0 ? "y" : "x";
      M[q] += pe[Te] * fe;
    });
  }
  return M;
}
function t$(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, s = r.padding, a = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? Vp : l, u = kn(n), d = u ? a ? dd : dd.filter(function(g) {
    return kn(g) === u;
  }) : Vo, f = d.filter(function(g) {
    return c.indexOf(g) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(g, y) {
    return g[y] = Ao(e, {
      placement: y,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[er(y)], g;
  }, {});
  return Object.keys(p).sort(function(g, y) {
    return p[g] - p[y];
  });
}
function r$(e) {
  if (er(e) === Hl)
    return [];
  var t = $i(e);
  return [pd(e), t, pd(t)];
}
function n$(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, a = s === void 0 ? !0 : s, l = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, g = p === void 0 ? !0 : p, y = r.allowedAutoPlacements, v = t.options.placement, w = er(v), S = w === v, T = l || (S || !g ? [$i(v)] : r$(v)), k = [v].concat(T).reduce(function(Ge, Ve) {
      return Ge.concat(er(Ve) === Hl ? t$(t, {
        placement: Ve,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: g,
        allowedAutoPlacements: y
      }) : Ve);
    }, []), C = t.rects.reference, $ = t.rects.popper, E = /* @__PURE__ */ new Map(), O = !0, I = k[0], M = 0; M < k.length; M++) {
      var L = k[M], pe = er(L), q = kn(L) === Tn, fe = [st, Ot].indexOf(pe) >= 0, Te = fe ? "width" : "height", se = Ao(t, {
        placement: L,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), W = fe ? q ? zt : at : q ? Ot : st;
      C[Te] > $[Te] && (W = $i(W));
      var le = $i(W), xe = [];
      if (i && xe.push(se[pe] <= 0), a && xe.push(se[W] <= 0, se[le] <= 0), xe.every(function(Ge) {
        return Ge;
      })) {
        I = L, O = !1;
        break;
      }
      E.set(L, xe);
    }
    if (O)
      for (var De = g ? 3 : 1, ct = function(Ve) {
        var Me = k.find(function(Qe) {
          var Ce = E.get(Qe);
          if (Ce)
            return Ce.slice(0, Ve).every(function($e) {
              return $e;
            });
        });
        if (Me)
          return I = Me, "break";
      }, nt = De; nt > 0; nt--) {
        var U = ct(nt);
        if (U === "break") break;
      }
    t.placement !== I && (t.modifiersData[n]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const o$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: n$,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function gd(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function yd(e) {
  return [st, zt, Ot, at].some(function(t) {
    return e[t] >= 0;
  });
}
function i$(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Ao(t, {
    elementContext: "reference"
  }), a = Ao(t, {
    altBoundary: !0
  }), l = gd(s, n), c = gd(a, o, i), u = yd(l), d = yd(c);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const s$ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: i$
};
function a$(e, t, r) {
  var n = er(e), o = [at, st].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [at, zt].indexOf(n) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function l$(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, s = Vp.reduce(function(u, d) {
    return u[d] = a$(d, t.rects, i), u;
  }, {}), a = s[t.placement], l = a.x, c = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = s;
}
const c$ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: l$
};
function u$(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Up({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const d$ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: u$,
  data: {}
};
function f$(e) {
  return e === "x" ? "y" : "x";
}
function h$(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, a = s === void 0 ? !1 : s, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, g = r.tetherOffset, y = g === void 0 ? 0 : g, v = Ao(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), w = er(t.placement), S = kn(t.placement), T = !S, k = ql(w), C = f$(k), $ = t.modifiersData.popperOffsets, E = t.rects.reference, O = t.rects.popper, I = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, M = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, pe = {
    x: 0,
    y: 0
  };
  if ($) {
    if (i) {
      var q, fe = k === "y" ? st : at, Te = k === "y" ? Ot : zt, se = k === "y" ? "height" : "width", W = $[k], le = W + v[fe], xe = W - v[Te], De = p ? -O[se] / 2 : 0, ct = S === Tn ? E[se] : O[se], nt = S === Tn ? -O[se] : -E[se], U = t.elements.arrow, Ge = p && U ? Gl(U) : {
        width: 0,
        height: 0
      }, Ve = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Lp(), Me = Ve[fe], Qe = Ve[Te], Ce = fo(0, E[se], Ge[se]), $e = T ? E[se] / 2 - De - Ce - Me - M.mainAxis : ct - Ce - Me - M.mainAxis, qe = T ? -E[se] / 2 + De + Ce + Qe + M.mainAxis : nt + Ce + Qe + M.mainAxis, ut = t.elements.arrow && Fo(t.elements.arrow), z = ut ? k === "y" ? ut.clientTop || 0 : ut.clientLeft || 0 : 0, St = (q = L == null ? void 0 : L[k]) != null ? q : 0, wt = W + $e - St - z, N = W + qe - St, Pe = fo(p ? qi(le, wt) : le, W, p ? qr(xe, N) : xe);
      $[k] = Pe, pe[k] = Pe - W;
    }
    if (a) {
      var me, Be = k === "x" ? st : at, dt = k === "x" ? Ot : zt, je = $[C], Tt = C === "y" ? "height" : "width", Ct = je + v[Be], ft = je - v[dt], br = [st, at].indexOf(w) !== -1, vr = (me = L == null ? void 0 : L[C]) != null ? me : 0, zr = br ? Ct : je - E[Tt] - O[Tt] - vr + M.altAxis, Nt = br ? je + E[Tt] + O[Tt] - vr - M.altAxis : ft, rr = p && br ? jA(zr, je, Nt) : fo(p ? zr : Ct, je, p ? Nt : ft);
      $[C] = rr, pe[C] = rr - je;
    }
    t.modifiersData[n] = pe;
  }
}
const p$ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: h$,
  requiresIfExists: ["offset"]
};
function m$(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function g$(e) {
  return e === bt(e) || !Mt(e) ? Yl(e) : m$(e);
}
function y$(e) {
  var t = e.getBoundingClientRect(), r = Cn(t.width) / e.offsetWidth || 1, n = Cn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function b$(e, t, r) {
  r === void 0 && (r = !1);
  var n = Mt(t), o = Mt(t) && y$(t), i = Or(t), s = Pn(e, o, r), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((tr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Xl(i)) && (a = g$(t)), Mt(t) ? (l = Pn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Kl(i))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function v$(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!r.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function x$(e) {
  var t = v$(e);
  return RA.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function S$(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function w$(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var bd = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function vd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function T$(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? bd : o;
  return function(a, l, c) {
    c === void 0 && (c = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, bd, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: u,
      setOptions: function(w) {
        var S = typeof w == "function" ? w(u.options) : w;
        y(), u.options = Object.assign({}, i, u.options, S), u.scrollParents = {
          reference: Yr(a) ? ho(a) : a.contextElement ? ho(a.contextElement) : [],
          popper: ho(l)
        };
        var T = x$(w$([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = T.filter(function(k) {
          return k.enabled;
        }), g(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var w = u.elements, S = w.reference, T = w.popper;
          if (vd(S, T)) {
            u.rects = {
              reference: b$(S, Fo(T), u.options.strategy === "fixed"),
              popper: Gl(T)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(M) {
              return u.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var k = 0; k < u.orderedModifiers.length; k++) {
              if (u.reset === !0) {
                u.reset = !1, k = -1;
                continue;
              }
              var C = u.orderedModifiers[k], $ = C.fn, E = C.options, O = E === void 0 ? {} : E, I = C.name;
              typeof $ == "function" && (u = $({
                state: u,
                options: O,
                name: I,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: S$(function() {
        return new Promise(function(v) {
          p.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!vd(a, l))
      return p;
    p.setOptions(c).then(function(v) {
      !f && c.onFirstUpdate && c.onFirstUpdate(v);
    });
    function g() {
      u.orderedModifiers.forEach(function(v) {
        var w = v.name, S = v.options, T = S === void 0 ? {} : S, k = v.effect;
        if (typeof k == "function") {
          var C = k({
            state: u,
            name: w,
            instance: p,
            options: T
          }), $ = function() {
          };
          d.push(C || $);
        }
      });
    }
    function y() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return p;
  };
}
var C$ = [qA, d$, UA, zA, c$, o$, p$, LA, s$], P$ = /* @__PURE__ */ T$({
  defaultModifiers: C$
});
const Jr = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), Ze = {
  arrowShadowColor: Jr("--popper-arrow-shadow-color"),
  arrowSize: Jr("--popper-arrow-size", "8px"),
  arrowSizeHalf: Jr("--popper-arrow-size-half"),
  arrowBg: Jr("--popper-arrow-bg"),
  transformOrigin: Jr("--popper-transform-origin"),
  arrowOffset: Jr("--popper-arrow-offset")
};
function k$(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
const _$ = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
}, A$ = (e) => _$[e], xd = {
  scroll: !0,
  resize: !0
};
function $$(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...xd, ...e }
  } : t = {
    enabled: e,
    options: xd
  }, t;
}
const E$ = {
  name: "matchWidth",
  enabled: !0,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state: e }) => {
    e.styles.popper.width = `${e.rects.reference.width}px`;
  },
  effect: ({ state: e }) => () => {
    const t = e.elements.reference;
    e.elements.popper.style.width = `${t.offsetWidth}px`;
  }
}, R$ = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    Sd(e);
  },
  effect: ({ state: e }) => () => {
    Sd(e);
  }
}, Sd = (e) => {
  e.elements.popper.style.setProperty(
    Ze.transformOrigin.var,
    A$(e.placement)
  );
}, M$ = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    O$(e);
  }
}, O$ = (e) => {
  var r;
  if (!e.placement)
    return;
  const t = z$(e.placement);
  if ((r = e.elements) != null && r.arrow && t) {
    Object.assign(e.elements.arrow.style, {
      [t.property]: t.value,
      width: Ze.arrowSize.varRef,
      height: Ze.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [Ze.arrowSizeHalf.var]: `calc(${Ze.arrowSize.varRef} / 2 - 1px)`,
      [Ze.arrowOffset.var]: `calc(${Ze.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, z$ = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: Ze.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: Ze.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: Ze.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: Ze.arrowOffset.varRef };
}, D$ = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    wd(e);
  },
  effect: ({ state: e }) => () => {
    wd(e);
  }
}, wd = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = k$(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: Ze.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, B$ = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, j$ = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function V$(e, t = "ltr") {
  var n;
  const r = ((n = B$[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? r : j$[e] ?? r;
}
function F$(e = {}) {
  const {
    enabled: t = !0,
    modifiers: r,
    placement: n = "bottom",
    strategy: o = "absolute",
    arrowPadding: i = 8,
    eventListeners: s = !0,
    offset: a,
    gutter: l = 8,
    flip: c = !0,
    boundary: u = "clippingParents",
    preventOverflow: d = !0,
    matchWidth: f,
    direction: p = "ltr"
  } = e, g = ue(null), y = ue(null), v = ue(null), w = V$(n, p), S = ue(() => {
  }), T = ve(() => {
    var M;
    !t || !g.current || !y.current || ((M = S.current) == null || M.call(S), v.current = P$(g.current, y.current, {
      placement: w,
      modifiers: [
        D$,
        M$,
        R$,
        {
          ...E$,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...$$(s)
        },
        {
          name: "arrow",
          options: { padding: i }
        },
        {
          name: "offset",
          options: {
            offset: a ?? [0, l]
          }
        },
        {
          name: "flip",
          enabled: !!c,
          options: { padding: 8 }
        },
        {
          name: "preventOverflow",
          enabled: !!d,
          options: { boundary: u }
        },
        // allow users override internal modifiers
        ...r ?? []
      ],
      strategy: o
    }), v.current.forceUpdate(), S.current = v.current.destroy);
  }, [
    w,
    t,
    r,
    f,
    s,
    i,
    a,
    l,
    c,
    d,
    u,
    o
  ]);
  He(() => () => {
    var M;
    !g.current && !y.current && ((M = v.current) == null || M.destroy(), v.current = null);
  }, []);
  const k = ve(
    (M) => {
      g.current = M, T();
    },
    [T]
  ), C = ve(
    (M = {}, L = null) => ({
      ...M,
      ref: kr(k, L)
    }),
    [k]
  ), $ = ve(
    (M) => {
      y.current = M, T();
    },
    [T]
  ), E = ve(
    (M = {}, L = null) => ({
      ...M,
      ref: kr($, L),
      style: {
        ...M.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, $, f]
  ), O = ve((M = {}, L = null) => {
    const { size: pe, shadowColor: q, bg: fe, style: Te, ...se } = M;
    return {
      ...se,
      ref: L,
      "data-popper-arrow": "",
      style: I$(M)
    };
  }, []), I = ve(
    (M = {}, L = null) => ({
      ...M,
      ref: L,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var M;
      (M = v.current) == null || M.update();
    },
    forceUpdate() {
      var M;
      (M = v.current) == null || M.forceUpdate();
    },
    transformOrigin: Ze.transformOrigin.varRef,
    referenceRef: k,
    popperRef: $,
    getPopperProps: E,
    getArrowProps: O,
    getArrowInnerProps: I,
    getReferenceProps: C
  };
}
function I$(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), r && (i["--popper-arrow-shadow-color"] = r), n && (i["--popper-arrow-bg"] = n), i;
}
const [L$, Io] = yr({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [N$, Zl] = yr({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), Qr = {
  click: "click",
  hover: "hover"
};
function W$(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: r = !0,
    initialFocusRef: n,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: s = !0,
    arrowSize: a,
    arrowShadowColor: l,
    trigger: c = Qr.click,
    openDelay: u = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: g,
    ...y
  } = e, { isOpen: v, onClose: w, onOpen: S, onToggle: T } = nf(e), k = ue(null), C = ue(null), $ = ue(null), E = ue(!1), O = ue(!1);
  v && (O.current = !0);
  const [I, M] = rt(!1), [L, pe] = rt(!1), q = $o(), fe = o ?? q, [Te, se, W, le] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((N) => `${N}-${fe}`), {
    referenceRef: xe,
    getArrowProps: De,
    getPopperProps: ct,
    getArrowInnerProps: nt,
    forceUpdate: U
  } = F$({
    ...y,
    enabled: v || !!g
  }), Ge = og({ isOpen: v, ref: $ });
  gg({
    enabled: v,
    ref: C
  }), sg($, {
    focusRef: C,
    visible: v,
    shouldFocus: i && c === Qr.click
  }), lg($, {
    focusRef: n,
    visible: v,
    shouldFocus: s && c === Qr.click
  });
  const Ve = Qm({
    wasSelected: O.current,
    enabled: f,
    mode: p,
    isSelected: Ge.present
  }), Me = ve(
    (N = {}, Pe = null) => {
      const me = {
        ...N,
        style: {
          ...N.style,
          transformOrigin: Ze.transformOrigin.varRef,
          [Ze.arrowSize.var]: a ? `${a}px` : void 0,
          [Ze.arrowShadowColor.var]: l
        },
        ref: kr($, Pe),
        children: Ve ? N.children : null,
        id: se,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: Wt(N.onKeyDown, (Be) => {
          r && Be.key === "Escape" && (Be.preventDefault(), Be.stopPropagation(), w());
        }),
        onBlur: Wt(N.onBlur, (Be) => {
          const dt = Td(Be), je = ca($.current, dt), Tt = ca(C.current, dt);
          v && t && (!je && !Tt) && w();
        }),
        "aria-labelledby": I ? W : void 0,
        "aria-describedby": L ? le : void 0
      };
      return c === Qr.hover && (me.role = "tooltip", me.onMouseEnter = Wt(N.onMouseEnter, () => {
        E.current = !0;
      }), me.onMouseLeave = Wt(
        N.onMouseLeave,
        (Be) => {
          Be.nativeEvent.relatedTarget !== null && (E.current = !1, setTimeout(() => w(), d));
        }
      )), me;
    },
    [
      Ve,
      se,
      I,
      W,
      L,
      le,
      c,
      r,
      w,
      v,
      t,
      d,
      l,
      a
    ]
  ), Qe = ve(
    (N = {}, Pe = null) => ct(
      {
        ...N,
        style: {
          visibility: v ? "visible" : "hidden",
          ...N.style
        }
      },
      Pe
    ),
    [v, ct]
  ), Ce = ve(
    (N, Pe = null) => ({
      ...N,
      // If anchor is rendered, it is used as reference.
      ref: kr(Pe, k, xe)
    }),
    [k, xe]
  ), $e = ue(), qe = ue(), ut = ve(
    (N) => {
      k.current == null && xe(N);
    },
    [xe]
  ), z = ve(
    (N = {}, Pe = null) => {
      const me = {
        ...N,
        ref: kr(C, Pe, ut),
        id: Te,
        "aria-haspopup": "dialog",
        "aria-expanded": v,
        "aria-controls": se
      };
      return c === Qr.click && (me.onClick = Wt(N.onClick, T)), c === Qr.hover && (me.onFocus = Wt(N.onFocus, () => {
        $e.current === void 0 && S();
      }), me.onBlur = Wt(N.onBlur, (Be) => {
        const dt = Td(Be), je = !ca($.current, dt);
        v && t && je && w();
      }), me.onKeyDown = Wt(N.onKeyDown, (Be) => {
        Be.key === "Escape" && w();
      }), me.onMouseEnter = Wt(N.onMouseEnter, () => {
        E.current = !0, $e.current = window.setTimeout(() => S(), u);
      }), me.onMouseLeave = Wt(N.onMouseLeave, () => {
        E.current = !1, $e.current && (clearTimeout($e.current), $e.current = void 0), qe.current = window.setTimeout(() => {
          E.current === !1 && w();
        }, d);
      })), me;
    },
    [
      Te,
      v,
      se,
      c,
      ut,
      T,
      S,
      t,
      w,
      u,
      d
    ]
  );
  He(() => () => {
    $e.current && clearTimeout($e.current), qe.current && clearTimeout(qe.current);
  }, []);
  const St = ve(
    (N = {}, Pe = null) => ({
      ...N,
      id: W,
      ref: kr(Pe, (me) => {
        M(!!me);
      })
    }),
    [W]
  ), wt = ve(
    (N = {}, Pe = null) => ({
      ...N,
      id: le,
      ref: kr(Pe, (me) => {
        pe(!!me);
      })
    }),
    [le]
  );
  return {
    forceUpdate: U,
    isOpen: v,
    onAnimationComplete: Ge.onComplete,
    onClose: w,
    getAnchorProps: Ce,
    getArrowProps: De,
    getArrowInnerProps: nt,
    getPopoverPositionerProps: Qe,
    getPopoverProps: Me,
    getTriggerProps: z,
    getHeaderProps: St,
    getBodyProps: wt
  };
}
function ca(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function Td(e) {
  const t = e.currentTarget.ownerDocument.activeElement;
  return e.relatedTarget ?? t;
}
function Gp(e) {
  const t = _p("Popover", e), { children: r, ...n } = _n(e), o = Pp(), i = W$({ ...n, direction: o.direction });
  return /* @__PURE__ */ _.jsx(L$, { value: i, children: /* @__PURE__ */ _.jsx(N$, { value: t, children: Lt(r, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
Gp.displayName = "Popover";
const qp = xt(
  function(t, r) {
    const { onClose: n } = Io(), o = Zl();
    return /* @__PURE__ */ _.jsx(
      Nl,
      {
        size: "sm",
        onClick: n,
        className: vt("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: r,
        ...t
      }
    );
  }
);
qp.displayName = "PopoverCloseButton";
function H$(e) {
  if (e)
    return {
      enter: {
        ...e.enter,
        visibility: "visible"
      },
      exit: {
        ...e.exit,
        transitionEnd: {
          visibility: "hidden"
        }
      }
    };
}
const U$ = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1]
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1]
    }
  }
}, G$ = Re(wp.section), Yp = xt(function(t, r) {
  const { variants: n = U$, ...o } = t, { isOpen: i } = Io();
  return /* @__PURE__ */ _.jsx(
    G$,
    {
      ref: r,
      variants: H$(n),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
Yp.displayName = "PopoverTransition";
const Kp = xt(
  function(t, r) {
    const { rootProps: n, motionProps: o, ...i } = t, { getPopoverProps: s, getPopoverPositionerProps: a, onAnimationComplete: l } = Io(), c = Zl(), u = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...c.content
    };
    return /* @__PURE__ */ _.jsx(
      Re.div,
      {
        ...a(n),
        __css: c.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ _.jsx(
          Yp,
          {
            ...o,
            ...s(i, r),
            onAnimationComplete: Nm(
              l,
              i.onAnimationComplete
            ),
            className: vt("chakra-popover__content", t.className),
            __css: u
          }
        )
      }
    );
  }
);
Kp.displayName = "PopoverContent";
const Xp = xt(
  function(t, r) {
    const { getHeaderProps: n } = Io(), o = Zl();
    return /* @__PURE__ */ _.jsx(
      Re.header,
      {
        ...n(t, r),
        className: vt("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
Xp.displayName = "PopoverHeader";
function Zp(e) {
  const t = Ud.only(e.children), { getTriggerProps: r } = Io();
  return /* @__PURE__ */ _.jsx(_.Fragment, { children: qd(t, r(t.props, t.ref)) });
}
Zp.displayName = "PopoverTrigger";
const Ei = xt(function(t, r) {
  const n = Bo("Text", t), { className: o, align: i, decoration: s, casing: a, ...l } = _n(t), c = Ga({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ _.jsx(
    Re.p,
    {
      ref: r,
      className: vt("chakra-text", t.className),
      ...c,
      ...l,
      __css: n
    }
  );
});
Ei.displayName = "Text";
const q$ = {
  white: "FAF7F7",
  text: "#251055"
}, Y$ = {
  base: q$
}, K$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: Y$
}, Symbol.toStringTag, { value: "Module" })), X$ = bA({
  ...K$
}), Z$ = [
  {
    // icon: <ReviewIcon height={44} width={44} />,
    label: "Review",
    subtitle: "Share what you think about the project"
  },
  {
    // icon: <IdeaIcon height={50} width={50} />,
    label: "Idea",
    subtitle: "Share how we can improve"
  },
  {
    // icon: <IssueIcon height={48} width={48} />,
    label: "Issue",
    subtitle: "Report a bug or issue"
  }
], oE = ({ triggerComponent: e }) => {
  const { onOpen: t, onClose: r, isOpen: n } = nf(), [o, i] = rt("");
  return console.log(e), /* @__PURE__ */ _.jsx(hA, { theme: X$, children: /* @__PURE__ */ _.jsxs(
    Gp,
    {
      isOpen: n,
      onOpen: t,
      onClose: r,
      placement: "bottom",
      children: [
        /* @__PURE__ */ _.jsx(Zp, { children: e }),
        /* @__PURE__ */ _.jsxs(
          Kp,
          {
            p: 5,
            bg: "base.white",
            boxShadow: "lg",
            borderRadius: 10,
            width: 430,
            height: 260,
            color: "base.text",
            pb: 2,
            children: [
              /* @__PURE__ */ _.jsx(qp, { color: "base.text" }),
              /* @__PURE__ */ _.jsx(
                Xp,
                {
                  border: "0",
                  textAlign: "center",
                  mb: 4,
                  transition: "all 0.3s ease",
                  children: /* @__PURE__ */ _.jsx(Ei, { fontSize: "xl", fontWeight: "bold", children: "What's on your mind?" })
                }
              ),
              /* @__PURE__ */ _.jsx(
                Bp,
                {
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 6,
                  children: Z$.map(({ label: s, subtitle: a }) => /* @__PURE__ */ _.jsx(
                    zp,
                    {
                      display: "flex",
                      flexDir: "column",
                      height: 118,
                      flex: 1,
                      gap: 4,
                      onMouseEnter: () => i(a),
                      onMouseLeave: () => i(""),
                      color: "base.text",
                      children: s
                    }
                  ))
                }
              ),
              /* @__PURE__ */ _.jsx(Ei, { fontSize: "sm", m: 2, textAlign: "center", children: o }),
              /* @__PURE__ */ _.jsx(
                Ei,
                {
                  fontSize: "8px",
                  mt: 1,
                  textAlign: "center",
                  color: "base.text",
                  opacity: 0.5,
                  margin: "auto 0 0 !important",
                  children: "by Feedback Revolution"
                }
              )
            ]
          }
        )
      ]
    }
  ) });
};
export {
  oE as FeedbackWidget
};
//# sourceMappingURL=index.js.map
