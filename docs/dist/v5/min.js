const E = {
  version: "v4.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, N = (t) => {
  var r;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (r = globalThis.ks).jsonRenderersBuild ?? (r.jsonRenderersBuild = {
    meta: E,
    renderToDom: t
  }));
}, x = {
  version: "v32",
  description: "JSON-to-DOM engine with centralized traversal and responsibility-focused construction"
}, F = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const r = {
    meta: x,
    buildSpecElement: t
  };
  globalThis.ks.jsonToSpec = r;
}, O = (t, r) => f(t, r), b = (t, r) => Array.isArray(t) ? t.map((e) => O(e, r)).flat(1 / 0).filter(Boolean) : [], R = (t, r) => {
  if ("source" in t && (t == null ? void 0 : t.source) in r) {
    const e = r[t == null ? void 0 : t.source];
    if (Array.isArray(e))
      return e.map((o) => {
        const c = t == null ? void 0 : t.template;
        if (c)
          return f(c, o);
      });
  }
}, D = (t, r) => {
  let e = [];
  for (const [n, o] of Object.entries(r)) {
    const c = t == null ? void 0 : t.template;
    if (c) {
      const l = f(c, {
        key: n,
        value: o
      });
      e.push(l);
    }
  }
  return e;
}, k = (t, r) => {
  if ("source" in t && (t == null ? void 0 : t.source) in r) {
    const e = r[t == null ? void 0 : t.source];
    if (Array.isArray(e))
      return e.map((o) => {
        const c = t == null ? void 0 : t.template;
        if (c)
          return f(c, o);
      });
  }
}, C = (t, r) => {
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return R(t, r);
    if (t.operation === "loopObject")
      return D(t, r);
    if (t.operation === "loopCollection")
      return k(t, r);
  }
}, A = (t, r) => {
  if (typeof r == "string") return r;
  if (typeof t != "string") return t;
  if (t === "${value}")
    return r.value;
  const e = t.match(/^\$\{(.+?)\}$/);
  if (e) {
    const n = e[1];
    return (r == null ? void 0 : r[n]) ?? "";
  }
  return t;
}, w = (t, r) => {
  let e = {};
  for (const [n, o] of Object.entries(t)) {
    const c = A(o, r);
    e[n] = c;
  }
  return e;
}, V = (t, r) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const e = A(t.textContent, r);
      t.textContent = e;
    }
    if ("attributes" in t) {
      const e = w(t.attributes, r);
      t.attributes = e;
    }
  }
}, I = (t, r) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const e = structuredClone(t);
  if (!e) return null;
  if ("tagName" in e && V(e, r), "jsonToSpec" in e) {
    const n = e == null ? void 0 : e.jsonToSpec, o = C(n, r);
    Array.isArray(o) ? e.children = o : e.children = [o], delete e.jsonToSpec;
  }
  if (Array.isArray(e == null ? void 0 : e.children)) {
    const n = b(e == null ? void 0 : e.children, r);
    e.children = n;
  }
  return e;
}, f = (t, r) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? b(t, r) : typeof t == "object" ? I(t, r) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t, $ = (t, r) => f(t, r);
F({
  inFuncDefinition: $
});
const K = {
  default: {
    tagName: "table",
    attributes: {
      class: "table table-hover table-striped mb-0"
    },
    children: [
      {
        tagName: "thead",
        children: [
          {
            tagName: "tr",
            jsonToSpec: {
              operation: "loopCollection",
              source: "columns",
              template: {
                tagName: "th",
                textContent: "${title}"
              }
            },
            children: []
          }
        ]
      },
      {
        tagName: "tbody",
        jsonToSpec: {
          operation: "loopCollection",
          source: "data",
          template: {
            tagName: "tr",
            jsonToSpec: {
              operation: "loopObject",
              source: "data",
              template: {
                tagName: "td",
                textContent: "${value}"
              }
            },
            children: []
          }
        },
        children: []
      }
    ]
  }
}, B = ({
  inColumns: t,
  inData: r
} = {}) => {
  const e = r ?? [], n = t;
  return $(K.default, {
    columns: n,
    data: e
  });
}, h = ({ inItems: t, inRecipe: r, inExecute: e }) => {
  const n = t, o = r, c = e;
  return n.map((l) => y({
    inSource: l,
    inRecipe: o,
    inExecute: c
  })).flat(1 / 0).filter(Boolean);
}, M = ({ inSource: t, inRecipe: r, inExecute: e }) => {
  const n = t, o = r, c = e;
  let l = n;
  typeof c == "function" && (l = c({
    inSource: n,
    inRecipe: o
  }));
  for (const [a, u] of Object.entries(l))
    Array.isArray(u) && o && a in o && (l[a] = h({
      inItems: u,
      inRecipe: o[a],
      inExecute: c
    }));
  return l;
}, y = ({ inSource: t, inRecipe: r, inExecute: e }) => {
  const n = t, o = r, c = e;
  return Array.isArray(n) ? h({
    inItems: n,
    inRecipe: o,
    inExecute: c
  }) : typeof n == "object" && n !== null ? M({
    inSource: n,
    inRecipe: o,
    inExecute: c
  }) : n;
}, G = ({ inKey: t, inDirective: r }) => {
  const e = t, n = r;
  return (n == null ? void 0 : n.alterKey) || e;
}, z = ({ inValue: t, inDirective: r, inExecute: e }) => {
  const n = t, o = r, c = e;
  return o && "transform" in o ? y({
    inSource: n,
    inRecipe: o,
    inExecute: c
  }) : n;
}, L = ({ inValue: t, inDirective: r }) => {
  const e = t, n = r;
  return (n == null ? void 0 : n.valueType) === "array" && !Array.isArray(e) ? [e] : e;
}, P = ({ inValue: t, inDirective: r }) => {
  const e = t, n = r;
  return n != null && n.valueKey && e && typeof e == "object" ? e[n.valueKey] : e;
}, U = ({ inSource: t, inTransform: r, inExecute: e }) => {
  const n = t, o = r, c = e, l = {};
  for (const [a, u] of Object.entries(n)) {
    if (!(a in o))
      continue;
    const i = o[a], j = G({ inKey: a, inDirective: i });
    let s = u;
    s = z({
      inValue: s,
      inDirective: i,
      inExecute: c
    }), s = L({ inValue: s, inDirective: i }), s = P({ inValue: s, inDirective: i }), l[j] = s;
  }
  return l;
};
function v(t, r) {
  for (const e in t)
    typeof t[e] == "object" && t[e] !== null ? v(t[e], r) : typeof t[e] == "string" && t[e] === "${}" && (t[e] = r);
  return t;
}
const _ = ({ inSource: t, inOperation: r, inExecute: e }) => {
  const n = t, o = r;
  for (const [c, l] of Object.entries(o))
    if ("operationType" in l && l.operationType === "loopArray" && c in n) {
      const a = n[c].map((u) => {
        const i = { ...l == null ? void 0 : l.template };
        return v(i, u), i;
      });
      n[c] = a;
    }
  return n;
}, m = ({ inSource: t, inRecipe: r }) => {
  let e = t;
  const n = r;
  return n && typeof n == "object" && "transform" in n && (e = U({
    inSource: e,
    inTransform: n.transform,
    inExecute: m
  })), n && typeof n == "object" && "operation" in n && (e = _({
    inSource: e,
    inOperation: n.operation,
    inExecute: m
  })), e;
}, q = (t, r) => y({
  inSource: t,
  inRecipe: r,
  inExecute: m
}), H = {
  children: ""
}, Q = {
  children: {
    operationType: "loopArray",
    template: {
      tagName: "option",
      attributes: {
        value: "${}"
      },
      textContent: "${}"
    }
  }
}, W = {
  transform: H,
  operation: Q
}, g = ({
  inData: t
} = {}) => q({
  children: t ?? []
}, W), X = "select", Y = {
  id: "LedgerName"
}, Z = [], d = {
  tagName: X,
  attributes: Y,
  children: Z
}, T = ({
  inData: t
} = {}) => {
  let e = g({
    inData: t ?? []
  });
  return d.children = e == null ? void 0 : e.children, d;
}, p = {
  table: B,
  select: T,
  selectOptionsOnly: g
}, S = ({
  type: t = "table",
  data: r,
  columns: e
} = {}) => {
  const n = t, o = p[n];
  return o ? o({
    inColumns: e,
    inData: r
  }) : (console.error(
    `[Renderer] Unknown renderer type "${n}". Available types: ${Object.keys(p).join(", ")}`
  ), null);
};
N(S);
export {
  S as default
};
