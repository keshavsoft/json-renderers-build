const $ = {
  version: "v9.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, N = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: $,
    renderToDom: t
  }));
}, C = "table", S = {
  class: "table table-hover table-striped mb-0"
}, x = [], A = {
  tagName: C,
  attributes: S,
  children: x
}, E = "thead", w = [], U = {
  tagName: E,
  children: w
}, v = "tr", T = [], J = {
  tagName: v,
  children: T
}, W = "th", R = {
  value: ""
}, k = "", F = {
  tagName: W,
  attributes: R,
  textContent: k
}, O = ({ inColumn: t } = {}) => {
  const e = structuredClone(F);
  return e.attributes.value = t, e.textContent = t, e;
}, D = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(J), n = t.map((o) => O({ inColumn: o }));
  return e.children = n, e;
}, B = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(U), n = [
    D({ inColumns: t })
  ];
  return e.children = n, e;
}, j = "tbody", V = [], I = {
  tagName: j,
  children: V
}, H = "tr", K = [], M = {
  tagName: H,
  children: K
}, q = "td", G = {
  value: ""
}, L = "", P = {
  tagName: q,
  attributes: G,
  textContent: L
}, _ = ({ inValue: t } = {}) => {
  const e = structuredClone(P);
  return e.attributes.value = t, e.textContent = t, e;
}, z = ({ inRow: t, inColumns: e = [] } = {}) => {
  const n = structuredClone(M), o = e.map((a) => {
    const s = Array.isArray(t) ? t[a] : t == null ? void 0 : t[a];
    return _({ inValue: s });
  });
  return n.children = o, n;
}, Q = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const n = structuredClone(I), o = t.map((a) => z({
    inRow: a,
    inColumns: e
  }));
  return n.children = o, n;
}, X = "tfoot", Y = {
  class: "table-light"
}, Z = [], tt = {
  tagName: X,
  attributes: Y,
  children: Z
}, et = "tr", nt = {
  class: "align-middle"
}, ot = [], at = {
  tagName: et,
  attributes: nt,
  children: ot
}, st = "td", rt = {
  class: "align-middle py-2"
}, ct = [], lt = {
  tagName: st,
  attributes: rt,
  children: ct
}, it = "input", ut = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, dt = {
  tagName: it,
  attributes: ut
}, mt = ({ inColumn: t } = {}) => {
  const e = structuredClone(lt), n = structuredClone(dt);
  return n.attributes.name = t, n.attributes.placeholder = t, e.children.push(n), e;
}, bt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(at);
  return e.children = t.map((n) => mt({ inColumn: n })), e;
}, pt = ({ inColumns: t = [] } = {}) => bt({ inColumns: t }), ht = "tr", gt = {
  class: "align-middle"
}, yt = [], ft = {
  tagName: ht,
  attributes: gt,
  children: yt
}, $t = "td", Nt = {
  class: "align-middle py-2"
}, Ct = [], St = {
  tagName: $t,
  attributes: Nt,
  children: Ct
}, xt = "input", At = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, Et = {
  tagName: xt,
  attributes: At
}, wt = "button", Ut = {
  type: "button",
  class: "btn btn-primary btn-sm ms-2"
}, vt = "Save", Tt = {
  tagName: wt,
  attributes: Ut,
  textContent: vt
}, Jt = ({ inColumn: t, inSave: e = !1 } = {}) => {
  const n = structuredClone(St), o = structuredClone(Et);
  return o.attributes.name = t, o.attributes.placeholder = t, n.children.push(o), e && n.children.push(structuredClone(Tt)), n;
}, Wt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(ft);
  return e.children = t.map((n, o) => Jt({
    inColumn: n,
    inSave: o === t.length - 1
  })), e;
}, Rt = ({ inColumns: t = [] } = {}) => Wt({ inColumns: t }), kt = "tr", Ft = {
  class: "fw-semibold align-middle"
}, Ot = [], Dt = {
  tagName: kt,
  attributes: Ft,
  children: Ot
}, Bt = "td", jt = {
  class: "align-middle py-2"
}, Vt = "", It = {
  tagName: Bt,
  attributes: jt,
  textContent: Vt
}, Ht = (t, e) => Array.isArray(t) ? t[e] : t == null ? void 0 : t[e], Kt = ({ inColumn: t, inIndex: e, inData: n = [] } = {}) => {
  const o = structuredClone(It), a = n.map((s) => Ht(s, t)).filter((s) => s != null && String(s).trim() !== "").map(Number).filter(Number.isFinite);
  return o.textContent = a.length ? String(a.reduce((s, r) => s + r, 0)) : e === 0 ? "Total" : "", o;
}, Mt = ({ inColumns: t = [], inData: e = [] } = {}) => {
  const n = structuredClone(Dt);
  return n.children = t.map(
    (o, a) => Kt({ inColumn: o, inIndex: a, inData: e })
  ), n;
}, qt = ({ inColumns: t = [], inData: e = [] } = {}) => Mt({ inColumns: t, inData: e }), Gt = "tr", Lt = {
  class: "align-middle"
}, Pt = [], _t = {
  tagName: Gt,
  attributes: Lt,
  children: Pt
}, zt = "td", Qt = {
  class: "align-middle py-2"
}, Xt = {
  tagName: zt,
  attributes: Qt
}, Yt = () => structuredClone(Xt), Zt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(_t);
  return e.children = t.map(() => Yt()), e;
}, te = ({ inColumns: t = [] } = {}) => Zt({ inColumns: t }), b = {
  inputs: pt,
  inputsWithSave: Rt,
  totals: qt,
  empty: te
}, ee = ({ inFooter: t = [], inColumns: e = [], inData: n = [] } = {}) => {
  const o = structuredClone(tt);
  return o.children = t.map((a) => {
    if (!Object.hasOwn(b, a))
      throw new Error(`Unknown footer "${a}".`);
    return b[a]({ inColumns: e, inData: n });
  }), o;
}, ne = ({
  inColumns: t = [],
  inData: e = [],
  inFooter: n = []
} = {}) => {
  const o = structuredClone(A), a = [
    B({ inColumns: t }),
    Q({ inData: e, inColumns: t })
  ];
  if (!Array.isArray(n))
    throw new TypeError("The footer property must be an array of footer names.");
  return n.length > 0 && a.push(ee({
    inFooter: n,
    inColumns: t,
    inData: e
  })), o.children = a, o;
}, oe = (t) => {
  const [e, n] = t.children;
  e.children[0].children.unshift({
    tagName: "th",
    textContent: "#"
  }), n.children.forEach((o, a) => {
    o.children.unshift({
      tagName: "td",
      textContent: String(a + 1)
    });
  });
}, ae = (t) => t === !0 ? [{ label: "Apply", type: "button" }] : Array.isArray(t) ? t : [], se = (t, e) => {
  const n = ae(e);
  if (n.length === 0) return;
  const [o, a] = t.children;
  o.children[0].children.push({
    tagName: "th",
    textContent: "Actions"
  }), a.children.forEach((s) => {
    s.children.push({
      tagName: "td",
      children: n.map((r) => ({
        tagName: "button",
        attributes: { type: r.type || "button" },
        textContent: r.label
      }))
    });
  });
}, re = (t, e = {}) => (e.showSerial && oe(t), e.showOptions && se(t, e.showOptions), t), ce = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, le = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {
    showSerial: !0
  }
}, ie = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {
    showOptions: !0
  }
}, ue = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {
    showOptions: [
      {
        label: "Show",
        type: "button"
      },
      {
        label: "Edit",
        type: "button"
      }
    ]
  }
}, de = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {
    showSerial: !0,
    showOptions: [
      {
        label: "Show",
        type: "button"
      }
    ]
  }
}, me = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  footer: [
    "inputs"
  ],
  options: {}
}, be = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  footer: [
    "inputsWithSave"
  ],
  options: {}
}, pe = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "2"
    },
    {
      itemName: "0.11-25",
      baseUnit: "3"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  footer: [
    "totals"
  ],
  options: {}
}, he = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "2"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  footer: [
    "inputs",
    "totals",
    "inputsWithSave",
    "empty"
  ],
  options: {}
}, ge = {
  type: "tableHead",
  data: [],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, ye = {
  type: "tableBody",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, fe = {
  table: ce,
  tableWithSerial: le,
  tableWithDefaultAction: ie,
  tableWithCustomActions: ue,
  tableWithSerialAndActions: de,
  tableWithFooter: me,
  tableWithFooterSave: be,
  tableWithTotals: pe,
  tableWithMultipleFooters: he,
  tableHead: ge,
  tableBody: ye
}, p = ({
  type: t = "table",
  inData: e,
  inColumns: n,
  footer: o = [],
  options: a = {}
} = {}) => {
  if (t === "table") {
    const s = ne({
      inColumns: n,
      inData: e,
      inFooter: o
    });
    return re(s, a);
  }
  throw new Error(`Unknown table renderer type "${t}".`);
};
p.requests = fe;
const h = ({ inItems: t, inRecipe: e, inExecute: n }) => {
  const o = t, a = e, s = n;
  return o.map((r) => m({
    inSource: r,
    inRecipe: a,
    inExecute: s
  })).flat(1 / 0).filter(Boolean);
}, $e = ({ inSource: t, inRecipe: e, inExecute: n }) => {
  const o = t, a = e, s = n;
  let r = o;
  typeof s == "function" && (r = s({
    inSource: o,
    inRecipe: a
  }));
  for (const [c, u] of Object.entries(r))
    Array.isArray(u) && a && c in a && (r[c] = h({
      inItems: u,
      inRecipe: a[c],
      inExecute: s
    }));
  return r;
}, m = ({ inSource: t, inRecipe: e, inExecute: n }) => {
  const o = t, a = e, s = n;
  return Array.isArray(o) ? h({
    inItems: o,
    inRecipe: a,
    inExecute: s
  }) : typeof o == "object" && o !== null ? $e({
    inSource: o,
    inRecipe: a,
    inExecute: s
  }) : o;
}, Ne = ({ inKey: t, inDirective: e }) => {
  const n = t, o = e;
  return (o == null ? void 0 : o.alterKey) || n;
}, Ce = ({ inValue: t, inDirective: e, inExecute: n }) => {
  const o = t, a = e, s = n;
  return a && "transform" in a ? m({
    inSource: o,
    inRecipe: a,
    inExecute: s
  }) : o;
}, Se = ({ inValue: t, inDirective: e }) => {
  const n = t, o = e;
  return (o == null ? void 0 : o.valueType) === "array" && !Array.isArray(n) ? [n] : n;
}, xe = ({ inValue: t, inDirective: e }) => {
  const n = t, o = e;
  return o != null && o.valueKey && n && typeof n == "object" ? n[o.valueKey] : n;
}, Ae = ({ inSource: t, inTransform: e, inExecute: n }) => {
  const o = t, a = e, s = n, r = {};
  for (const [c, u] of Object.entries(o)) {
    if (!(c in a))
      continue;
    const l = a[c], f = Ne({ inKey: c, inDirective: l });
    let i = u;
    i = Ce({
      inValue: i,
      inDirective: l,
      inExecute: s
    }), i = Se({ inValue: i, inDirective: l }), i = xe({ inValue: i, inDirective: l }), r[f] = i;
  }
  return r;
};
function g(t, e) {
  for (const n in t)
    typeof t[n] == "object" && t[n] !== null ? g(t[n], e) : typeof t[n] == "string" && t[n] === "${}" && (t[n] = e);
  return t;
}
const Ee = ({ inSource: t, inOperation: e, inExecute: n }) => {
  const o = t, a = e;
  for (const [s, r] of Object.entries(a))
    if ("operationType" in r && r.operationType === "loopArray" && s in o) {
      const c = o[s].map((u) => {
        const l = structuredClone(r == null ? void 0 : r.template);
        return g(l, u), l;
      });
      o[s] = c;
    }
  return o;
}, d = ({ inSource: t, inRecipe: e }) => {
  let n = t;
  const o = e;
  return o && typeof o == "object" && "transform" in o && (n = Ae({
    inSource: n,
    inTransform: o.transform,
    inExecute: d
  })), o && typeof o == "object" && "operation" in o && (n = Ee({
    inSource: n,
    inOperation: o.operation,
    inExecute: d
  })), n;
}, we = (t, e) => m({
  inSource: t,
  inRecipe: e,
  inExecute: d
}), Ue = {
  children: ""
}, ve = {
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
}, Te = {
  transform: Ue,
  operation: ve
}, y = ({
  inData: t
}) => {
  let n = we({
    children: t
  }, Te);
  return n == null ? void 0 : n.children;
}, Je = "select", We = {
  id: "LedgerName"
}, Re = [], ke = {
  tagName: Je,
  attributes: We,
  children: Re
}, Fe = ({
  inData: t
}) => {
  let n = y({
    inData: t
  });
  const o = structuredClone(ke);
  return o.children = n, o;
}, Oe = {
  table: p,
  select: Fe,
  selectOptionsOnly: y
}, De = ({
  type: t = "table",
  data: e,
  columns: n
}) => {
  const a = Oe[t];
  return a({
    inColumns: n,
    inData: e
  });
};
N(De);
export {
  De as default,
  Fe as renderSelect,
  y as renderSelectOptions,
  p as renderTable
};
