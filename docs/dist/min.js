const F = {
  version: "v4.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, k = (t) => {
  var r;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (r = globalThis.ks).jsonRenderersBuild ?? (r.jsonRenderersBuild = {
    meta: F,
    renderToDom: t
  }));
}, O = {
  version: "v32",
  description: "JSON-to-DOM engine with centralized traversal and responsibility-focused construction"
}, C = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const r = {
    meta: O,
    buildSpecElement: t
  };
  globalThis.ks.jsonToSpec = r;
}, R = (t, r) => d(t, r), j = (t, r) => Array.isArray(t) ? t.map((e) => R(e, r)).flat(1 / 0).filter(Boolean) : [], w = (t, r) => {
  if ("source" in t && (t == null ? void 0 : t.source) in r) {
    const e = r[t == null ? void 0 : t.source];
    if (Array.isArray(e))
      return e.map((a) => {
        const o = t == null ? void 0 : t.template;
        if (o)
          return d(o, a);
      });
  }
}, I = (t, r) => {
  let e = [];
  for (const [n, a] of Object.entries(r)) {
    const o = t == null ? void 0 : t.template;
    if (o) {
      const c = d(o, {
        key: n,
        value: a
      });
      e.push(c);
    }
  }
  return e;
}, V = (t, r) => {
  if ("source" in t && (t == null ? void 0 : t.source) in r) {
    const e = r[t == null ? void 0 : t.source];
    if (Array.isArray(e))
      return e.map((a) => {
        const o = t == null ? void 0 : t.template;
        if (o)
          return d(o, a);
      });
  }
}, K = (t, r) => {
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return w(t, r);
    if (t.operation === "loopObject")
      return I(t, r);
    if (t.operation === "loopCollection")
      return V(t, r);
  }
}, N = (t, r) => {
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
}, T = (t, r) => {
  let e = {};
  for (const [n, a] of Object.entries(t)) {
    const o = N(a, r);
    e[n] = o;
  }
  return e;
}, B = (t, r) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const e = N(t.textContent, r);
      t.textContent = e;
    }
    if ("attributes" in t) {
      const e = T(t.attributes, r);
      t.attributes = e;
    }
  }
}, L = (t, r) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const e = structuredClone(t);
  if (!e) return null;
  if ("tagName" in e && B(e, r), "jsonToSpec" in e) {
    const n = e == null ? void 0 : e.jsonToSpec, a = K(n, r);
    Array.isArray(a) ? e.children = a : e.children = [a], delete e.jsonToSpec;
  }
  if (Array.isArray(e == null ? void 0 : e.children)) {
    const n = j(e == null ? void 0 : e.children, r);
    e.children = n;
  }
  return e;
}, d = (t, r) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? j(t, r) : typeof t == "object" ? L(t, r) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t, p = (t, r) => d(t, r);
C({
  inFuncDefinition: p
});
const M = {
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
}, z = ({
  inColumns: t,
  inData: r
} = {}) => {
  const e = r ?? [], n = t;
  return p(M.default, {
    columns: n,
    data: e
  });
}, E = ({ inItems: t, inRecipe: r, inExecute: e }) => {
  const n = t, a = r, o = e;
  return n.map((c) => h({
    inSource: c,
    inRecipe: a,
    inExecute: o
  })).flat(1 / 0).filter(Boolean);
}, G = ({ inSource: t, inRecipe: r, inExecute: e }) => {
  const n = t, a = r, o = e;
  let c = n;
  typeof o == "function" && (c = o({
    inSource: n,
    inRecipe: a
  }));
  for (const [l, i] of Object.entries(c))
    Array.isArray(i) && a && l in a && (c[l] = E({
      inItems: i,
      inRecipe: a[l],
      inExecute: o
    }));
  return c;
}, h = ({ inSource: t, inRecipe: r, inExecute: e }) => {
  const n = t, a = r, o = e;
  return Array.isArray(n) ? E({
    inItems: n,
    inRecipe: a,
    inExecute: o
  }) : typeof n == "object" && n !== null ? G({
    inSource: n,
    inRecipe: a,
    inExecute: o
  }) : n;
}, H = ({ inKey: t, inDirective: r }) => {
  const e = t, n = r;
  return (n == null ? void 0 : n.alterKey) || e;
}, U = ({ inValue: t, inDirective: r, inExecute: e }) => {
  const n = t, a = r, o = e;
  return a && "transform" in a ? h({
    inSource: n,
    inRecipe: a,
    inExecute: o
  }) : n;
}, _ = ({ inValue: t, inDirective: r }) => {
  const e = t, n = r;
  return (n == null ? void 0 : n.valueType) === "array" && !Array.isArray(e) ? [e] : e;
}, P = ({ inValue: t, inDirective: r }) => {
  const e = t, n = r;
  return n != null && n.valueKey && e && typeof e == "object" ? e[n.valueKey] : e;
}, q = ({ inSource: t, inTransform: r, inExecute: e }) => {
  const n = t, a = r, o = e, c = {};
  for (const [l, i] of Object.entries(n)) {
    if (!(l in a))
      continue;
    const u = a[l], f = H({ inKey: l, inDirective: u });
    let s = i;
    s = U({
      inValue: s,
      inDirective: u,
      inExecute: o
    }), s = _({ inValue: s, inDirective: u }), s = P({ inValue: s, inDirective: u }), c[f] = s;
  }
  return c;
};
function x(t, r) {
  for (const e in t)
    typeof t[e] == "object" && t[e] !== null ? x(t[e], r) : typeof t[e] == "string" && t[e] === "${}" && (t[e] = r);
  return t;
}
const Q = ({ inSource: t, inOperation: r, inExecute: e }) => {
  const n = t, a = r;
  for (const [o, c] of Object.entries(a))
    if ("operationType" in c && c.operationType === "loopArray" && o in n) {
      const l = n[o].map((i) => {
        const u = { ...c == null ? void 0 : c.template };
        return x(u, i), u;
      });
      n[o] = l;
    }
  return n;
}, b = ({ inSource: t, inRecipe: r }) => {
  let e = t;
  const n = r;
  return n && typeof n == "object" && "transform" in n && (e = q({
    inSource: e,
    inTransform: n.transform,
    inExecute: b
  })), n && typeof n == "object" && "operation" in n && (e = Q({
    inSource: e,
    inOperation: n.operation,
    inExecute: b
  })), e;
}, W = (t, r) => h({
  inSource: t,
  inRecipe: r,
  inExecute: b
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
}, D = ({
  inData: t
} = {}) => W({
  children: t ?? []
}, Z), S = "select", J = {
  id: "LedgerName"
}, tt = [], $ = {
  tagName: S,
  attributes: J,
  children: tt
}, et = ({
  inData: t
} = {}) => {
  let e = D({
    inData: t ?? []
  });
  return $.children = e == null ? void 0 : e.children, $;
}, rt = {
  default: {
    tagName: "ul",
    attributes: {
      class: "nav flex-column"
    },
    jsonToSpec: {
      operation: "loopCollection",
      source: "data",
      template: {
        tagName: "li",
        attributes: {
          class: "nav-item"
        },
        children: [
          {
            tagName: "a",
            attributes: {
              class: "${class}",
              href: "${href}"
            },
            children: [
              {
                tagName: "i",
                attributes: {
                  class: "${icon}"
                }
              },
              {
                tagName: "span",
                textContent: "${name}"
              }
            ]
          }
        ]
      }
    },
    children: []
  }
}, nt = {
  dashboard: "bi bi-house-door",
  orders: "bi bi-file-earmark",
  products: "bi bi-cart",
  customers: "bi bi-people",
  reports: "bi bi-graph-up",
  integrations: "bi bi-puzzle",
  settings: "bi bi-gear"
}, ot = ({
  inData: t,
  data: r
} = {}) => {
  const n = (t ?? r ?? []).map((o, c) => {
    const l = typeof o == "string" ? o : (o == null ? void 0 : o.name) ?? "", i = typeof o == "object" && (o != null && o.href) ? o.href : "#", u = typeof o == "object" && (o != null && o.icon) ? o.icon : nt[l.toLowerCase()] || "bi bi-circle", f = typeof o == "object" && (o == null ? void 0 : o.active) !== void 0 ? o.active : c === 0, s = typeof o == "object" && (o != null && o.class) ? o.class : `nav-link d-flex align-items-center gap-2${f ? " active" : ""}`;
    return {
      name: l,
      href: i,
      icon: u,
      class: s
    };
  });
  return p(rt.default, {
    data: n
  });
}, m = (t) => {
  if (!t || typeof t != "object") return null;
  if (t.tagName) {
    const r = document.createElement(t.tagName);
    if (t.attributes)
      for (const [e, n] of Object.entries(t.attributes))
        n != null && r.setAttribute(e, n);
    return t.textContent != null && (r.textContent = t.textContent), Array.isArray(t.children) && t.children.forEach((e) => {
      const n = m(e);
      n && r.appendChild(n);
    }), r;
  }
  if (Array.isArray(t.children)) {
    const r = document.createDocumentFragment();
    return t.children.forEach((e) => {
      const n = m(e);
      n && r.appendChild(n);
    }), r;
  }
  return null;
}, v = {
  table: z,
  select: et,
  selectOptionsOnly: D,
  sidebar: ot
}, at = ({
  type: t = "table",
  data: r,
  inData: e,
  columns: n,
  inColumns: a,
  targetHtmlId: o,
  inTargetHtmlId: c
} = {}) => {
  const l = t, i = v[l];
  if (!i)
    return console.error(
      `[Renderer] Unknown renderer type "${l}". Available types: ${Object.keys(v).join(", ")}`
    ), null;
  const u = e ?? r, f = a ?? n, s = c ?? o, g = i({
    inColumns: f,
    inData: u
  });
  if (s && typeof document < "u") {
    const y = document.getElementById(s);
    if (y) {
      y.innerHTML = "";
      const A = m(g);
      A && y.appendChild(A);
    }
  }
  return g;
};
k(at);
export {
  m as buildDomNode,
  at as default,
  at as render
};
