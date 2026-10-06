const d = {
  version: "v3.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, m = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: d,
    renderToDom: t
  }));
}, y = {
  version: "v32",
  description: "JSON-to-DOM engine with centralized traversal and responsibility-focused construction"
}, b = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: y,
    buildSpecElement: t
  };
  globalThis.ks.jsonToSpec = e;
}, g = (t, e) => n(t, e), i = (t, e) => Array.isArray(t) ? t.map((r) => g(r, e)).flat(1 / 0).filter(Boolean) : [], h = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const r = e[t == null ? void 0 : t.source];
    if (Array.isArray(r))
      return r.map((a) => {
        const o = t == null ? void 0 : t.template;
        if (o)
          return n(o, a);
      });
  }
}, A = (t, e) => {
  let r = [];
  for (const [l, a] of Object.entries(e)) {
    const o = t == null ? void 0 : t.template;
    if (o) {
      const s = n(o, {
        key: l,
        value: a
      });
      r.push(s);
    }
  }
  return r;
}, v = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const r = e[t == null ? void 0 : t.source];
    if (Array.isArray(r))
      return r.map((a) => {
        const o = t == null ? void 0 : t.template;
        if (o)
          return n(o, a);
      });
  }
}, $ = (t, e) => {
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return h(t, e);
    if (t.operation === "loopObject")
      return A(t, e);
    if (t.operation === "loopCollection")
      return v(t, e);
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
}, j = (t, e) => {
  let r = {};
  for (const [l, a] of Object.entries(t)) {
    const o = f(a, e);
    r[l] = o;
  }
  return r;
}, p = (t, e) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const r = f(t.textContent, e);
      t.textContent = r;
    }
    if ("attributes" in t) {
      const r = j(t.attributes, e);
      t.attributes = r;
    }
  }
}, N = (t, e) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const r = structuredClone(t);
  if (!r) return null;
  if ("tagName" in r && p(r, e), "jsonToSpec" in r) {
    const l = r == null ? void 0 : r.jsonToSpec, a = $(l, e);
    Array.isArray(a) ? r.children = a : r.children = [a], delete r.jsonToSpec;
  }
  if (Array.isArray(r == null ? void 0 : r.children)) {
    const l = i(r == null ? void 0 : r.children, e);
    r.children = l;
  }
  return r;
}, n = (t, e) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? i(t, e) : typeof t == "object" ? N(t, e) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t, u = (t, e) => n(t, e);
b({
  inFuncDefinition: u
});
const D = {
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
}, O = ({
  inColumns: t,
  inData: e
} = {}) => {
  const r = e ?? [], l = t;
  return u(D.default, {
    columns: l,
    data: r
  });
}, C = "select", k = {
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
}, R = [], x = {
  tagName: C,
  attributes: k,
  jsonToSpec: F,
  children: R
}, E = ({
  inData: t
} = {}) => u(x, {
  arrayOfStrings: t ?? []
}), w = {
  operation: "loopArray",
  source: "arrayOfStrings",
  template: {
    tagName: "option",
    attributes: {
      value: "${}"
    },
    textContent: "${}"
  }
}, M = [], B = {
  jsonToSpec: w,
  children: M
}, G = ({
  inData: t
} = {}) => u(B, {
  arrayOfStrings: t ?? []
}), c = {
  table: O,
  select: E,
  selectOptionsOnly: G
}, z = ({
  type: t = "table",
  data: e,
  columns: r
} = {}) => {
  const l = t, a = c[l];
  return a ? a({
    inColumns: r,
    inData: e
  }) : (console.error(
    `[Renderer] Unknown renderer type "${l}". Available types: ${Object.keys(c).join(", ")}`
  ), null);
};
m(z);
export {
  z as default
};
