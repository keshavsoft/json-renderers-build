const d = {
  version: "v3.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, m = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: d,
    renderToDom: t
  }));
}, b = {
  version: "v32",
  description: "JSON-to-DOM engine with centralized traversal and responsibility-focused construction"
}, y = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: b,
    buildSpecElement: t
  };
  globalThis.ks.jsonToSpec = e;
}, g = (t, e) => n(t, e), c = (t, e) => Array.isArray(t) ? t.map((r) => g(r, e)).flat(1 / 0).filter(Boolean) : [], h = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const r = e[t == null ? void 0 : t.source];
    if (Array.isArray(r))
      return r.map((a) => {
        const o = t == null ? void 0 : t.template;
        if (o)
          return n(o, a);
      });
  }
}, v = (t, e) => {
  let r = [];
  for (const [l, a] of Object.entries(e)) {
    const o = t == null ? void 0 : t.template;
    if (o) {
      const u = n(o, {
        key: l,
        value: a
      });
      r.push(u);
    }
  }
  return r;
}, A = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const r = e[t == null ? void 0 : t.source];
    if (Array.isArray(r))
      return r.map((a) => {
        const o = t == null ? void 0 : t.template;
        if (o)
          return n(o, a);
      });
  }
}, j = (t, e) => {
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return h(t, e);
    if (t.operation === "loopObject")
      return v(t, e);
    if (t.operation === "loopCollection")
      return A(t, e);
  }
}, f = (t, e) => {
  if (typeof e == "string") return e;
  if (typeof t != "string") return t;
  if (t === "${value}")
    return e.value;
  const r = t.match(/^\$\{(.+?)\}$/);
  if (r) {
    const l = r[1];
    return (e == null ? void 0 : e[l]) ?? "";
  }
  return t;
}, $ = (t, e) => {
  let r = {};
  for (const [l, a] of Object.entries(t)) {
    const o = f(a, e);
    r[l] = o;
  }
  return r;
}, N = (t, e) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const r = f(t.textContent, e);
      t.textContent = r;
    }
    if ("attributes" in t) {
      const r = $(t.attributes, e);
      t.attributes = r;
    }
  }
}, p = (t, e) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const r = structuredClone(t);
  if (!r) return null;
  if ("tagName" in r && N(r, e), "jsonToSpec" in r) {
    const l = r == null ? void 0 : r.jsonToSpec, a = j(l, e);
    Array.isArray(a) ? r.children = a : r.children = [a], delete r.jsonToSpec;
  }
  if (Array.isArray(r == null ? void 0 : r.children)) {
    const l = c(r == null ? void 0 : r.children, e);
    r.children = l;
  }
  return r;
}, n = (t, e) => {
  if (t == null) return null;
  debugger;
  return typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? c(t, e) : typeof t == "object" ? p(t, e) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t;
}, s = (t, e) => n(t, e);
y({
  inFuncDefinition: s
});
const C = {
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
}, D = ({
  inColumns: t,
  inData: e
} = {}) => {
  const r = e ?? [], l = t;
  return s(C.default, {
    columns: l,
    data: r
  });
}, k = "select", O = {
  id: "LedgerName"
}, F = {
  operation: "loopArray",
  source: "arrayOfStrings",
  template: {
    tagName: "option",
    attributes: {
      value: "${}"
    },
    textContent: "${}"
  }
}, R = [], w = {
  tagName: k,
  attributes: O,
  jsonToSpec: F,
  children: R
}, x = ({
  inData: t
} = {}) => s(w, {
  arrayOfStrings: t ?? []
}), i = {
  table: D,
  select: x
}, E = ({
  type: t = "table",
  data: e,
  columns: r
} = {}) => {
  const l = t, a = typeof l == "string" ? l.toLowerCase() : "table", o = i[a];
  return o ? o({
    inColumns: r,
    inData: e
  }) : (console.error(
    `[Renderer] Unknown renderer type "${l}". Available types: ${Object.keys(i).join(", ")}`
  ), null);
};
m(E);
export {
  E as default
};
