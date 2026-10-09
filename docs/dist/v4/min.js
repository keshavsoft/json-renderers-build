const g = {
  version: "v4.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, j = (t) => {
  var r;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (r = globalThis.ks).jsonRenderersBuild ?? (r.jsonRenderersBuild = {
    meta: g,
    renderToDom: t
  }));
}, E = {
  version: "v32",
  description: "JSON-to-DOM engine with centralized traversal and responsibility-focused construction"
}, N = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const r = {
    meta: E,
    buildSpecElement: t
  };
  globalThis.ks.jsonToSpec = r;
}, O = (t, r) => f(t, r), b = (t, r) => Array.isArray(t) ? t.map((e) => O(e, r)).flat(1 / 0).filter(Boolean) : [], x = (t, r) => {
  if ("source" in t && (t == null ? void 0 : t.source) in r) {
    const e = r[t == null ? void 0 : t.source];
    if (Array.isArray(e))
      return e.map((o) => {
        const c = t == null ? void 0 : t.template;
        if (c)
          return f(c, o);
      });
  }
}, F = (t, r) => {
  let e = [];
  for (const [n, o] of Object.entries(r)) {
    const c = t == null ? void 0 : t.template;
    if (c) {
      const a = f(c, {
        key: n,
        value: o
      });
      e.push(a);
    }
  }
  return e;
}, R = (t, r) => {
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
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return x(t, r);
    if (t.operation === "loopObject")
      return F(t, r);
    if (t.operation === "loopCollection")
      return R(t, r);
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
}, k = (t, r) => {
  let e = {};
  for (const [n, o] of Object.entries(t)) {
    const c = A(o, r);
    e[n] = c;
  }
  return e;
}, C = (t, r) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const e = A(t.textContent, r);
      t.textContent = e;
    }
    if ("attributes" in t) {
      const e = k(t.attributes, r);
      t.attributes = e;
    }
  }
}, w = (t, r) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const e = structuredClone(t);
  if (!e) return null;
  if ("tagName" in e && C(e, r), "jsonToSpec" in e) {
    const n = e == null ? void 0 : e.jsonToSpec, o = D(n, r);
    Array.isArray(o) ? e.children = o : e.children = [o], delete e.jsonToSpec;
  }
  if (Array.isArray(e == null ? void 0 : e.children)) {
    const n = b(e == null ? void 0 : e.children, r);
    e.children = n;
  }
  return e;
}, f = (t, r) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? b(t, r) : typeof t == "object" ? w(t, r) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t, y = (t, r) => f(t, r);
N({
  inFuncDefinition: y
});
const V = {
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
}, I = ({
  inColumns: t,
  inData: r
} = {}) => {
  const e = r ?? [], n = t;
  return y(V.default, {
    columns: n,
    data: e
  });
}, K = "select", B = {
  id: "LedgerName"
}, M = {
  operation: "loopArray",
  source: "arrayOfStrings",
  template: {
    tagName: "option",
    attributes: {
      value: "${}"
    },
    textContent: "${}"
  }
}, T = [], G = {
  tagName: K,
  attributes: B,
  jsonToSpec: M,
  children: T
}, z = ({
  inData: t
} = {}) => y(G, {
  arrayOfStrings: t ?? []
}), $ = ({ inItems: t, inRecipe: r, inExecute: e }) => {
  const n = t, o = r, c = e;
  return n.map((a) => d({
    inSource: a,
    inRecipe: o,
    inExecute: c
  })).flat(1 / 0).filter(Boolean);
}, L = ({ inSource: t, inRecipe: r, inExecute: e }) => {
  const n = t, o = r, c = e;
  let a = n;
  typeof c == "function" && (a = c({
    inSource: n,
    inRecipe: o
  }));
  for (const [l, u] of Object.entries(a))
    Array.isArray(u) && o && l in o && (a[l] = $({
      inItems: u,
      inRecipe: o[l],
      inExecute: c
    }));
  return a;
}, d = ({ inSource: t, inRecipe: r, inExecute: e }) => {
  const n = t, o = r, c = e;
  return Array.isArray(n) ? $({
    inItems: n,
    inRecipe: o,
    inExecute: c
  }) : typeof n == "object" && n !== null ? L({
    inSource: n,
    inRecipe: o,
    inExecute: c
  }) : n;
}, P = ({ inKey: t, inDirective: r }) => {
  const e = t, n = r;
  return (n == null ? void 0 : n.alterKey) || e;
}, U = ({ inValue: t, inDirective: r, inExecute: e }) => {
  const n = t, o = r, c = e;
  return o && "transform" in o ? d({
    inSource: n,
    inRecipe: o,
    inExecute: c
  }) : n;
}, _ = ({ inValue: t, inDirective: r }) => {
  const e = t, n = r;
  return (n == null ? void 0 : n.valueType) === "array" && !Array.isArray(e) ? [e] : e;
}, q = ({ inValue: t, inDirective: r }) => {
  const e = t, n = r;
  return n != null && n.valueKey && e && typeof e == "object" ? e[n.valueKey] : e;
}, H = ({ inSource: t, inTransform: r, inExecute: e }) => {
  const n = t, o = r, c = e, a = {};
  for (const [l, u] of Object.entries(n)) {
    if (!(l in o))
      continue;
    const i = o[l], h = P({ inKey: l, inDirective: i });
    let s = u;
    s = U({
      inValue: s,
      inDirective: i,
      inExecute: c
    }), s = _({ inValue: s, inDirective: i }), s = q({ inValue: s, inDirective: i }), a[h] = s;
  }
  return a;
};
function v(t, r) {
  for (const e in t)
    typeof t[e] == "object" && t[e] !== null ? v(t[e], r) : typeof t[e] == "string" && t[e] === "${}" && (t[e] = r);
  return t;
}
const Q = ({ inSource: t, inOperation: r, inExecute: e }) => {
  const n = t, o = r;
  for (const [c, a] of Object.entries(o))
    if ("operationType" in a && a.operationType === "loopArray" && c in n) {
      const l = n[c].map((u) => {
        const i = { ...a == null ? void 0 : a.template };
        return v(i, u), i;
      });
      n[c] = l;
    }
  return n;
}, m = ({ inSource: t, inRecipe: r }) => {
  let e = t;
  const n = r;
  return n && typeof n == "object" && "transform" in n && (e = H({
    inSource: e,
    inTransform: n.transform,
    inExecute: m
  })), n && typeof n == "object" && "operation" in n && (e = Q({
    inSource: e,
    inOperation: n.operation,
    inExecute: m
  })), e;
}, W = (t, r) => d({
  inSource: t,
  inRecipe: r,
  inExecute: m
}), X = {
  children: ""
}, Y = {
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
}, Z = {
  transform: X,
  operation: Y
}, S = ({
  inData: t
} = {}) => W({
  Children: t ?? []
}, Z), p = {
  table: I,
  select: z,
  selectOptionsOnly: S
}, J = ({
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
j(J);
export {
  J as default
};
