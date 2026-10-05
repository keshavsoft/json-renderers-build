const F = {
  version: "v2.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, O = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: F,
    renderToDom: t
  }));
}, w = {
  version: "v32",
  description: "JSON-to-DOM engine with centralized traversal and responsibility-focused construction"
}, R = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: w,
    buildSpecElement: t
  };
  globalThis.ks.jsonToSpec = e;
}, I = (t, e) => n(t, e), f = (t, e) => Array.isArray(t) ? t.map((r) => I(r, e)).flat(1 / 0).filter(Boolean) : [], E = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const r = e[t == null ? void 0 : t.source];
    if (Array.isArray(r))
      return r.map((l) => {
        const o = t == null ? void 0 : t.template;
        if (o)
          return n(o, l);
      });
  }
}, H = (t, e) => {
  let r = [];
  for (const [a, l] of Object.entries(e)) {
    const o = t == null ? void 0 : t.template;
    if (o) {
      const u = n(o, {
        key: a,
        value: l
      });
      r.push(u);
    }
  }
  return r;
}, x = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const r = e[t == null ? void 0 : t.source];
    if (Array.isArray(r))
      return r.map((l) => {
        const o = t == null ? void 0 : t.template;
        if (o)
          return n(o, l);
      });
  }
}, L = (t, e) => {
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return E(t, e);
    if (t.operation === "loopObject")
      return H(t, e);
    if (t.operation === "loopCollection")
      return x(t, e);
  }
}, d = (t, e) => {
  if (typeof e == "string") return e;
  if (typeof t != "string") return t;
  if (t === "${value}")
    return e.value;
  const r = t.match(/^\$\{(.+?)\}$/);
  if (r) {
    const a = r[1];
    return (e == null ? void 0 : e[a]) ?? "";
  }
  return t;
}, G = (t, e) => {
  let r = {};
  for (const [a, l] of Object.entries(t)) {
    const o = d(l, e);
    r[a] = o;
  }
  return r;
}, M = (t, e) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const r = d(t.textContent, e);
      t.textContent = r;
    }
    if ("attributes" in t) {
      const r = G(t.attributes, e);
      t.attributes = r;
    }
  }
}, B = (t, e) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const r = structuredClone(t);
  if (!r) return null;
  if ("tagName" in r && M(r, e), "jsonToSpec" in r) {
    const a = r == null ? void 0 : r.jsonToSpec, l = L(a, e);
    Array.isArray(l) ? r.children = l : r.children = [l], delete r.jsonToSpec;
  }
  if (Array.isArray(r == null ? void 0 : r.children)) {
    const a = f(r == null ? void 0 : r.children, e);
    r.children = a;
  }
  return r;
}, n = (t, e) => {
  if (t == null) return null;
  debugger;
  return typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? f(t, e) : typeof t == "object" ? B(t, e) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t;
}, m = (t, e) => n(t, e);
R({
  inFuncDefinition: m
});
const z = {
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
}, P = ({
  targetHtmlId: t,
  inTargetHtmlId: e,
  inColumns: r,
  inData: a
} = {}) => {
  const l = a ?? [], o = r;
  return m(z.default, {
    columns: o,
    data: l
  });
}, c = {
  table: P
}, U = ({
  type: t = "table",
  targetHtmlId: e,
  data: r,
  classToApply: a,
  inTargetHtmlId: l,
  inData: o,
  columns: u,
  inColumns: y,
  colGroup: b,
  inColGroup: g,
  footerData: h,
  inFooterData: v,
  config: A,
  inConfig: j,
  variant: $,
  skeletonType: p,
  inSkeletonType: N,
  showLog: C = !1,
  inShowLog: k
} = {}) => {
  const i = t, D = typeof i == "string" ? i.toLowerCase() : "table", s = c[D];
  return s ? s({
    targetHtmlId: l ?? e,
    inColumns: y ?? u,
    inData: o ?? r,
    inColGroup: g ?? b,
    inFooterData: v ?? h ?? [],
    inConfig: j ?? A ?? {},
    inSkeletonType: N ?? p ?? $ ?? "default",
    inShowLog: k ?? C ?? !1
  }) : (console.error(
    `[Renderer] Unknown renderer type "${i}". Available types: ${Object.keys(c).join(", ")}`
  ), null);
};
O(U);
export {
  U as default
};
