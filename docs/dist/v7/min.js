const k = {
  version: "v4.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, E = (n) => {
  var r;
  typeof globalThis > "u" || !n || (globalThis.ks ?? (globalThis.ks = {}), (r = globalThis.ks).jsonRenderersBuild ?? (r.jsonRenderersBuild = {
    meta: k,
    renderToDom: n
  }));
}, y = ({ inItems: n, inRecipe: r, inExecute: e }) => {
  const t = n, o = r, c = e;
  return t.map((a) => p({
    inSource: a,
    inRecipe: o,
    inExecute: c
  })).flat(1 / 0).filter(Boolean);
}, N = ({ inSource: n, inRecipe: r, inExecute: e }) => {
  const t = n, o = r, c = e;
  let a = t;
  typeof c == "function" && (a = c({
    inSource: t,
    inRecipe: o
  }));
  for (const [s, l] of Object.entries(a))
    Array.isArray(l) && o && s in o && (a[s] = y({
      inItems: l,
      inRecipe: o[s],
      inExecute: c
    }));
  return a;
}, p = ({ inSource: n, inRecipe: r, inExecute: e }) => {
  const t = n, o = r, c = e;
  return Array.isArray(t) ? y({
    inItems: t,
    inRecipe: o,
    inExecute: c
  }) : typeof t == "object" && t !== null ? N({
    inSource: t,
    inRecipe: o,
    inExecute: c
  }) : t;
}, x = ({ inKey: n, inDirective: r }) => {
  const e = n, t = r;
  return (t == null ? void 0 : t.alterKey) || e;
}, S = ({ inValue: n, inDirective: r, inExecute: e }) => {
  const t = n, o = r, c = e;
  return o && "transform" in o ? p({
    inSource: t,
    inRecipe: o,
    inExecute: c
  }) : t;
}, F = ({ inValue: n, inDirective: r }) => {
  const e = n, t = r;
  return (t == null ? void 0 : t.valueType) === "array" && !Array.isArray(e) ? [e] : e;
}, R = ({ inValue: n, inDirective: r }) => {
  const e = n, t = r;
  return t != null && t.valueKey && e && typeof e == "object" ? e[t.valueKey] : e;
}, C = ({ inSource: n, inTransform: r, inExecute: e }) => {
  const t = n, o = r, c = e, a = {};
  for (const [s, l] of Object.entries(t)) {
    if (!(s in o))
      continue;
    const i = o[s], g = x({ inKey: s, inDirective: i });
    let u = l;
    u = S({
      inValue: u,
      inDirective: i,
      inExecute: c
    }), u = F({ inValue: u, inDirective: i }), u = R({ inValue: u, inDirective: i }), a[g] = u;
  }
  return a;
};
function $(n, r) {
  for (const e in n)
    typeof n[e] == "object" && n[e] !== null ? $(n[e], r) : typeof n[e] == "string" && n[e] === "${}" && (n[e] = r);
  return n;
}
const O = ({ inSource: n, inOperation: r, inExecute: e }) => {
  const t = n, o = r;
  for (const [c, a] of Object.entries(o))
    if ("operationType" in a && a.operationType === "loopArray" && c in t) {
      const s = t[c].map((l) => {
        const i = structuredClone(a == null ? void 0 : a.template);
        return $(i, l), i;
      });
      t[c] = s;
    }
  return t;
}, d = ({ inSource: n, inRecipe: r }) => {
  let e = n;
  const t = r;
  return t && typeof t == "object" && "transform" in t && (e = C({
    inSource: e,
    inTransform: t.transform,
    inExecute: d
  })), t && typeof t == "object" && "operation" in t && (e = O({
    inSource: e,
    inOperation: t.operation,
    inExecute: d
  })), e;
}, f = (n, r) => p({
  inSource: n,
  inRecipe: r,
  inExecute: d
}), T = {
  children: ""
}, j = {
  children: {
    operationType: "loopArray",
    template: {
      tagName: "th",
      attributes: {
        value: "${}"
      },
      textContent: "${}"
    }
  }
}, A = {
  transform: T,
  operation: j
}, v = ({
  inData: n
} = {}) => {
  const e = (n ?? []).map((o) => typeof o == "object" && o !== null ? o.title || o.name || o.key || "" : String(o)), t = f({
    children: e
  }, A);
  return (t == null ? void 0 : t.children) ?? [];
}, J = "tr", V = [], K = {
  tagName: J,
  children: V
}, w = ({
  inData: n
} = {}) => {
  const r = n ?? [], e = structuredClone(K);
  return e.children = v({ inData: r }), e;
}, I = "thead", B = [], H = {
  tagName: I,
  children: B
}, h = ({
  inData: n
} = {}) => {
  const r = n ?? [], e = structuredClone(H);
  return e.children = [w({ inData: r })], e;
}, M = {
  children: ""
}, G = {
  children: {
    operationType: "loopArray",
    template: {
      tagName: "td",
      attributes: {
        value: "${}"
      },
      textContent: "${}"
    }
  }
}, L = {
  transform: M,
  operation: G
}, P = ({
  inData: n
} = {}) => {
  const e = (n ?? []).map((o) => typeof o == "object" && o !== null ? JSON.stringify(o) : String(o ?? "")), t = f({
    children: e
  }, L);
  return (t == null ? void 0 : t.children) ?? [];
}, U = "tr", _ = [], q = {
  tagName: U,
  children: _
}, z = ({
  inData: n,
  inColumns: r
} = {}) => {
  const e = n ?? [], t = r;
  return e.map((o) => {
    let c;
    Array.isArray(o) ? c = o : typeof o == "object" && o !== null ? Array.isArray(t) && t.length > 0 ? c = t.map((s) => {
      const l = typeof s == "object" ? s.key || s.dataKey || s.title || s.name : s;
      return o[l] ?? "";
    }) : c = Object.values(o) : c = [o];
    const a = structuredClone(q);
    return a.children = P({ inData: c }), a;
  });
}, Q = "tbody", W = [], X = {
  tagName: Q,
  children: W
}, b = ({
  inData: n,
  inColumns: r
} = {}) => {
  const e = structuredClone(X);
  return e.children = z({ inData: n, inColumns: r }), e;
}, Y = "table", Z = {
  class: "table table-hover table-striped mb-0"
}, tt = [], et = {
  tagName: Y,
  attributes: Z,
  children: tt
}, nt = ({
  inColumns: n,
  inData: r
} = {}) => {
  const e = n ?? [], t = r ?? [], o = structuredClone(et);
  return o.children = [
    h({ inData: e }),
    b({ inData: t, inColumns: e })
  ], o;
}, ot = {
  children: ""
}, rt = {
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
}, ct = {
  transform: ot,
  operation: rt
}, D = ({
  inData: n
} = {}) => {
  let e = f({
    children: n ?? []
  }, ct);
  return (e == null ? void 0 : e.children) ?? [];
}, at = "select", st = {
  id: "LedgerName"
}, lt = [], it = {
  tagName: at,
  attributes: st,
  children: lt
}, ut = ({
  inData: n
} = {}) => {
  let e = D({
    inData: n ?? []
  });
  const t = structuredClone(it);
  return t.children = e, t;
}, m = {
  table: nt,
  select: ut,
  selectOptionsOnly: D,
  tableHead: h,
  tableBody: b
}, dt = ({
  type: n = "table",
  data: r,
  columns: e
} = {}) => {
  const t = n, o = m[t];
  return o ? o({
    inColumns: e,
    inData: r
  }) : (console.error(
    `[Renderer] Unknown renderer type "${t}". Available types: ${Object.keys(m).join(", ")}`
  ), null);
};
E(dt);
export {
  dt as default,
  ut as renderSelect,
  D as renderSelectOptions,
  nt as renderTable,
  b as renderTableBody,
  h as renderTableHead
};
