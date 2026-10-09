const g = {
  version: "v8.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, E = (n) => {
  var o;
  typeof globalThis > "u" || !n || (globalThis.ks ?? (globalThis.ks = {}), (o = globalThis.ks).jsonRenderersBuild ?? (o.jsonRenderersBuild = {
    meta: g,
    renderToDom: n
  }));
}, f = ({ inItems: n, inRecipe: o, inExecute: t }) => {
  const e = n, c = o, r = t;
  return e.map((a) => p({
    inSource: a,
    inRecipe: c,
    inExecute: r
  })).flat(1 / 0).filter(Boolean);
}, x = ({ inSource: n, inRecipe: o, inExecute: t }) => {
  const e = n, c = o, r = t;
  let a = e;
  typeof r == "function" && (a = r({
    inSource: e,
    inRecipe: c
  }));
  for (const [s, u] of Object.entries(a))
    Array.isArray(u) && c && s in c && (a[s] = f({
      inItems: u,
      inRecipe: c[s],
      inExecute: r
    }));
  return a;
}, p = ({ inSource: n, inRecipe: o, inExecute: t }) => {
  const e = n, c = o, r = t;
  return Array.isArray(e) ? f({
    inItems: e,
    inRecipe: c,
    inExecute: r
  }) : typeof e == "object" && e !== null ? x({
    inSource: e,
    inRecipe: c,
    inExecute: r
  }) : e;
}, N = ({ inKey: n, inDirective: o }) => {
  const t = n, e = o;
  return (e == null ? void 0 : e.alterKey) || t;
}, C = ({ inValue: n, inDirective: o, inExecute: t }) => {
  const e = n, c = o, r = t;
  return c && "transform" in c ? p({
    inSource: e,
    inRecipe: c,
    inExecute: r
  }) : e;
}, F = ({ inValue: n, inDirective: o }) => {
  const t = n, e = o;
  return (e == null ? void 0 : e.valueType) === "array" && !Array.isArray(t) ? [t] : t;
}, R = ({ inValue: n, inDirective: o }) => {
  const t = n, e = o;
  return e != null && e.valueKey && t && typeof t == "object" ? t[e.valueKey] : t;
}, T = ({ inSource: n, inTransform: o, inExecute: t }) => {
  const e = n, c = o, r = t, a = {};
  for (const [s, u] of Object.entries(e)) {
    if (!(s in c))
      continue;
    const l = c[s], D = N({ inKey: s, inDirective: l });
    let i = u;
    i = C({
      inValue: i,
      inDirective: l,
      inExecute: r
    }), i = F({ inValue: i, inDirective: l }), i = R({ inValue: i, inDirective: l }), a[D] = i;
  }
  return a;
};
function $(n, o) {
  for (const t in n)
    typeof n[t] == "object" && n[t] !== null ? $(n[t], o) : typeof n[t] == "string" && n[t] === "${}" && (n[t] = o);
  return n;
}
const S = ({ inSource: n, inOperation: o, inExecute: t }) => {
  const e = n, c = o;
  for (const [r, a] of Object.entries(c))
    if ("operationType" in a && a.operationType === "loopArray" && r in e) {
      const s = e[r].map((u) => {
        const l = structuredClone(a == null ? void 0 : a.template);
        return $(l, u), l;
      });
      e[r] = s;
    }
  return e;
}, d = ({ inSource: n, inRecipe: o }) => {
  let t = n;
  const e = o;
  return e && typeof e == "object" && "transform" in e && (t = T({
    inSource: t,
    inTransform: e.transform,
    inExecute: d
  })), e && typeof e == "object" && "operation" in e && (t = S({
    inSource: t,
    inOperation: e.operation,
    inExecute: d
  })), t;
}, m = (n, o) => p({
  inSource: n,
  inRecipe: o,
  inExecute: d
}), k = {
  children: ""
}, O = {
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
}, v = {
  transform: k,
  operation: O
}, A = ({
  inData: n
}) => {
  let t = m({
    children: n
  }, v);
  return t == null ? void 0 : t.children;
}, J = "tr", V = [], j = {
  tagName: J,
  children: V
}, w = ({
  inData: n
}) => {
  const o = n, t = structuredClone(j);
  return t.children = A({ inData: o }), t;
}, K = "thead", I = [], B = {
  tagName: K,
  children: I
}, y = ({
  inData: n
}) => {
  const o = n, t = structuredClone(B);
  return t.children = [w({ inData: o })], t;
}, H = {
  children: ""
}, M = {
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
}, G = {
  transform: H,
  operation: M
}, L = ({
  inData: n
}) => {
  let t = m({
    children: n
  }, G);
  return t == null ? void 0 : t.children;
}, P = "tr", _ = [], q = {
  tagName: P,
  children: _
}, z = ({
  inData: n,
  inColumns: o
}) => {
  const t = n, e = o;
  return t.map((c) => {
    const r = Array.isArray(c) ? c : e.map((s) => c[s]), a = structuredClone(q);
    return a.children = L({ inData: r }), a;
  });
}, Q = "tbody", U = [], W = {
  tagName: Q,
  children: U
}, h = ({
  inData: n,
  inColumns: o
}) => {
  const t = n, e = o, c = structuredClone(W);
  return c.children = z({
    inData: t,
    inColumns: e
  }), c;
}, X = "table", Y = {
  class: "table table-hover table-striped mb-0"
}, Z = [], tt = {
  tagName: X,
  attributes: Y,
  children: Z
}, et = ({
  inColumns: n,
  inData: o
}) => {
  const t = n, e = o, c = structuredClone(tt);
  return c.children = [
    y({ inData: t }),
    h({ inData: e, inColumns: t })
  ], c;
}, nt = {
  children: ""
}, ot = {
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
  transform: nt,
  operation: ot
}, b = ({
  inData: n
}) => {
  let t = m({
    children: n
  }, ct);
  return t == null ? void 0 : t.children;
}, rt = "select", at = {
  id: "LedgerName"
}, st = [], lt = {
  tagName: rt,
  attributes: at,
  children: st
}, it = ({
  inData: n
}) => {
  let t = b({
    inData: n
  });
  const e = structuredClone(lt);
  return e.children = t, e;
}, ut = {
  table: et,
  select: it,
  selectOptionsOnly: b,
  tableHead: y,
  tableBody: h
}, dt = ({
  type: n = "table",
  data: o,
  columns: t
}) => {
  const c = ut[n];
  return c({
    inColumns: t,
    inData: o
  });
};
E(dt);
export {
  dt as default,
  it as renderSelect,
  b as renderSelectOptions,
  et as renderTable,
  h as renderTableBody,
  y as renderTableHead
};
