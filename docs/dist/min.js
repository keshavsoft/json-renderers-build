const at = {
  version: "1.22.0",
  name: "json-renderers-build"
}, st = (e) => {
  e && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: at,
    render: e
  });
}, ot = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.type;
  if (t === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof t != "string")
    throw new TypeError("type must be a string");
  return !0;
}, nt = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.data;
  if (t === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(t))
    throw new TypeError("data must be an Array");
  return !0;
}, rt = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.columns;
  if (t === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(t))
    throw new TypeError("columns must be an Array");
  return !0;
}, lt = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.showLog;
  if (t !== void 0 && typeof t != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, V = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return ot(a), nt(a), rt(a), lt(a), !0;
}, it = "table", ct = "", ut = [], dt = [], bt = "", mt = "replace", pt = !1, g = {
  type: it,
  targetHtmlId: ct,
  data: ut,
  columns: dt,
  classToApply: bt,
  appendPosition: mt,
  showLog: pt
}, ht = (e) => {
  const a = typeof e == "object" && e !== null ? e.inKey ?? e.key : e;
  return a && a in g ? g[a] : { ...g };
};
Object.assign(ht, g);
const ft = (e) => typeof e == "object" && e !== null && !Array.isArray(e), yt = (e, a) => {
  if (!ft(e)) return;
  let t = {};
  for (const [s, o] of Object.entries(e))
    t[s] = f(a, o);
  return t;
}, $t = (e, a) => {
  const t = structuredClone(e);
  return Array.isArray(t) ? t.map((o) => f(a, o)) : void 0;
}, z = (e, a, t) => {
  if (e === "${agg:count}" && "rowData" in a) {
    if (Array.isArray(a == null ? void 0 : a.rowData))
      return a == null ? void 0 : a.rowData.length;
  } else
    return e === "${rowValue}" && "rowData" in a ? a == null ? void 0 : a.rowData : e.replace(/\$\{(\w+)\}/g, (s, o) => a[o] !== void 0 ? a[o] : s);
}, Ct = (e, a) => z(e, a), gt = (e, a, t) => {
  if (t && console.log("inElement : ", e), t && console.log("inTemplate : ", a), a == null)
    throw new TypeError("inTemplate is required");
  if (typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inElement must be an object");
  return !0;
}, wt = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, Nt = (e) => {
  var a, t;
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), (a = globalThis.ks).applyTemplate ?? (a.applyTemplate = e), (t = globalThis.ks).transformerFuncs ?? (t.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: wt,
    applyTemplate: e
  });
}, f = (e, a, t) => {
  const s = e, o = a;
  gt(s, o, t);
  const n = structuredClone(o);
  return typeof n == "string" ? z(n, s) : (n === null || typeof n != "object" || ("textContent" in n && (n.textContent = Ct(n == null ? void 0 : n.textContent, s)), "attributes" in n && (n.attributes = yt(n == null ? void 0 : n.attributes, s)), "children" in n && (n.children = $t(n == null ? void 0 : n.children, s))), n);
};
Nt(f);
const xt = (e, a) => {
  if (!Array.isArray(e))
    throw new TypeError("inSource must be an Array");
  if (e.length === 0)
    throw new Error("inSource cannot be empty");
  for (let t = 0; t < e.length; t++)
    if (!e[t] || typeof e[t] != "object")
      throw new TypeError(`inSource[${t}] must be an object`);
  if (!a || typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, m = (e, a) => {
  const t = e, s = a;
  return xt(t, s), t.map((o) => f(o, s));
}, Ft = (e, a) => e.map((s) => ({
  ...s,
  rowData: a[s.columnName]
})), kt = (e, a, t) => {
  var o, n, r, i, u, d;
  if (!Array.isArray(e))
    throw new TypeError("inColumns must be an Array");
  if (e.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let l = 0; l < e.length; l++) {
    const c = e[l];
    if (!c || typeof c != "object")
      throw new TypeError(`inColumns[${l}] must be an object`);
    if (typeof c.columnName != "string" || !c.columnName.trim())
      throw new TypeError(`inColumns[${l}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(a))
    throw new TypeError("inData must be an Array");
  for (let l = 0; l < a.length; l++) {
    const c = a[l];
    if (!c || typeof c != "object")
      throw new TypeError(`inData[${l}] must be an object`);
  }
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inSpec must be an object");
  const s = ((r = (n = (o = e[0]) == null ? void 0 : o.template) == null ? void 0 : n.body) == null ? void 0 : r.tr) || "buildBodyTr";
  if (!(s in t))
    throw new Error(`Row template "${s}" not found in inSpec`);
  for (let l = 0; l < e.length; l++) {
    const c = e[l], p = ((u = (i = c.template) == null ? void 0 : i.body) == null ? void 0 : u.cell) || ((d = c.template) == null ? void 0 : d.bodyCell) || "buildBodyCell";
    if (!(p in t))
      throw new Error(`Cell template "${p}" for column "${c.columnName}" not found in inSpec`);
  }
  return !0;
}, Tt = (e, a) => e.map((s) => {
  var i, u, d;
  const o = ((u = (i = s.template) == null ? void 0 : i.body) == null ? void 0 : u.cell) || ((d = s.template) == null ? void 0 : d.bodyCell) || "buildBodyCell", n = a[o];
  return f(s, n);
}), C = (e, a, t) => {
  var d, l, c;
  kt(e, a, t);
  const s = e, o = a, n = t, r = ((c = (l = (d = s[0]) == null ? void 0 : d.template) == null ? void 0 : l.body) == null ? void 0 : c.tr) || "buildBodyTr", i = n[r];
  return o.map((p) => {
    const $ = f(p, i), tt = Ft(s, p), et = Tt(tt, n);
    return $.children = et, $;
  });
}, It = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Bt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Pt = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, At = {
  tagName: "td",
  children: [
    {
      tagName: "input",
      attributes: {
        type: "text",
        placeholder: "enter ${columnName}",
        name: "${columnName}",
        id: "${columnName}",
        list: "${columnName}",
        class: "form-control"
      }
    }
  ]
}, Rt = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, vt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, jt = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "${agg:count}",
      attributes: {
        class: "btn btn-primary btn-sm"
      }
    }
  ]
}, St = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Et = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Dt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, b = {
  buildBodyTr: It,
  buildColGroup: Bt,
  buildHeader: Pt,
  buildFooter: At,
  buildBodyCell: Rt,
  button: vt,
  buttonCell: jt,
  buildOption: St,
  buildSelect: Et,
  buildDataList: Dt
}, Kt = "table", Ot = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Lt = [
  {
    tagName: "colgroup",
    attributes: {
      "data-role": "table-colgroup"
    },
    children: []
  },
  {
    tagName: "thead",
    attributes: {
      class: "table-dark",
      "data-role": "table-header"
    },
    children: [
      {
        tagName: "tr",
        attributes: {
          "data-role": "table-header-row"
        },
        children: []
      }
    ]
  },
  {
    tagName: "tbody",
    attributes: {
      "data-role": "table-body"
    },
    children: []
  },
  {
    tagName: "tfoot",
    attributes: {
      "data-role": "table-footer"
    },
    children: [
      {
        tagName: "tr",
        attributes: {
          "data-role": "table-footer-row"
        },
        children: []
      }
    ]
  }
], H = {
  tagName: Kt,
  attributes: Ot,
  children: Lt
}, Wt = [
  {
    narration: "Build the column widths for the table using the configured columns.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-colgroup",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    templateKey: "buildColGroup",
    func: "fromCollection"
  },
  {
    narration: "Build the header row for the table using the configured columns.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-header-row",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    templateKey: "buildHeader",
    func: "fromCollection"
  }
], qt = [
  {
    narration: "Build the table body rows for the table using the configured columns and data.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-body",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    func: "twoDimensional"
  }
], y = (e, a) => {
  var t;
  if (((t = e == null ? void 0 : e.attributes) == null ? void 0 : t["data-role"]) === a) return e;
  for (const s of (e == null ? void 0 : e.children) ?? []) {
    const o = y(s, a);
    if (o) return o;
  }
  return null;
}, Vt = (e, a) => {
  const t = e[a.fileName], s = a.dataRole ? y(t, a.dataRole) : t;
  return (a.filePath ?? []).reduce((o, n) => o[n], s);
}, x = (e) => Array.isArray(e) ? e : [e], G = (e, a, t) => {
  e[a] = t;
}, zt = (e, a, t) => {
  e[a].push(...x(t));
}, Ht = (e, a, t) => {
  e[a].unshift(...x(t));
}, Gt = (e, a, t) => {
  e[a].forEach((s) => {
    s.children.push(...structuredClone(x(t)));
  });
}, Ut = (e, a, t) => {
  e[a].forEach((s) => {
    s.children.unshift(...structuredClone(x(t)));
  });
}, Mt = (e, a, t) => {
  e[a].forEach((s, o) => {
    const n = structuredClone(t);
    n.textContent = o + 1, s.children.unshift(n);
  });
}, Jt = {
  set: G,
  push: zt,
  unshift: Ht,
  pushToRows: Gt,
  unshiftToRows: Ut,
  unshiftSerialToRows: Mt
}, _t = (e, a) => {
  const t = a.dataRole ? y(e[a.fileName], a.dataRole) : e[a.fileName], s = [...a.filePath ?? []], o = s.pop();
  return { parent: s.reduce((r, i) => r[i], t), key: o };
}, U = (e, a, t) => {
  const { parent: s, key: o } = _t(e, a);
  (Jt[a.action] || G)(s, o, t);
}, Qt = (e, a, t) => {
  var n, r;
  const s = !!((n = e.sourcePath) != null && n.fileName && Array.isArray((r = e.sourcePath) == null ? void 0 : r.filePath)), o = `structure/sourcePath: ${s ? "passed" : "failed"}`;
  return t.push(o), a && console.log(o), s;
}, Xt = (e, a, t) => {
  var n, r;
  const s = !!((n = e.destinationPath) != null && n.fileName && Array.isArray((r = e.destinationPath) == null ? void 0 : r.filePath)), o = `structure/destinationPath: ${s ? "passed" : "failed"}`;
  return t.push(o), a && console.log(o), s;
}, Yt = (e, a, t) => {
  const s = e.templateKey === void 0 || typeof e.templateKey == "string" && e.templateKey.length > 0, o = `structure/templateKey: ${s ? "passed" : "failed"}`;
  return t.push(o), a && console.log(o), s;
}, Zt = (e, a, t) => {
  const s = typeof e.func == "string" && e.func.length > 0, o = `structure/func: ${s ? "passed" : "failed"}`;
  return t.push(o), a && console.log(o), s;
}, te = (e, a, t) => [
  Qt(e, a, t),
  Xt(e, a, t),
  Yt(e, a, t),
  Zt(e, a, t)
].every(Boolean), ee = (e, a, t, s) => {
  const o = typeof a[e.func] == "function", n = `references/func (${e.func}): ${o ? "passed" : "failed"}`;
  return s.push(n), t && console.log(n), o;
}, ae = (e, a, t, s) => {
  const o = e.templateKey === void 0 || Object.hasOwn(a, e.templateKey), n = `references/templateKey${e.templateKey === void 0 ? " (not used)" : ` (${e.templateKey})`}: ${o ? "passed" : "failed"}`;
  return s.push(n), t && console.log(n), o;
}, se = (e, a, t, s, o) => {
  const n = ee(e, a, s, o), r = ae(e, t, s, o);
  return n && r;
}, M = (e, a, t, s, o) => te(e, s, o) ? se(e, a, t, s, o) : !1, oe = (e, a, t, s, o, n) => {
  if (!M(e, t, s, o, n)) return;
  const r = s, i = e.templateKey, u = r[i];
  console.log("templateKey ; ", i), console.log("localSpecKey ; ", u);
  const d = Vt(a, e.sourcePath), l = t[e.func](d, u);
  i === "buildFooter" && console.log("result ; ", l), U(a, e.destinationPath, l);
}, F = (e, a, t, s, o, n) => {
  e.forEach((r) => {
    oe(r, a, t, s, o, n);
  });
}, ne = (e, a, t, s, o, n) => {
  if (!M(e, t, s, o, n)) return;
  const r = t[e.func](
    a.data.columns,
    a.data.data,
    s
  );
  U(a, e.destinationPath, r);
}, R = (e, a, t, s, o, n) => {
  e.forEach((r) => {
    ne(r, a, t, s, o, n);
  });
}, T = { data: {}, base: H, spec: b }, j = { fromCollection: m, twoDimensional: C }, re = (e, a = !1, t = []) => (T.data = e, F(Wt, T, j, b, a, t), R(qt, T, j, b, a, t), H), le = "table", ie = {
  class: "table table-hover table-striped align-middle border mb-0"
}, ce = [
  {
    tagName: "colgroup",
    attributes: {
      "data-role": "table-colgroup"
    },
    children: []
  },
  {
    tagName: "thead",
    attributes: {
      class: "table-dark",
      "data-role": "table-header"
    },
    children: [
      {
        tagName: "tr",
        attributes: {
          "data-role": "table-header-row"
        },
        children: []
      }
    ]
  },
  {
    tagName: "tbody",
    attributes: {
      "data-role": "table-body"
    },
    children: []
  },
  {
    tagName: "tfoot",
    attributes: {
      "data-role": "table-footer"
    },
    children: [
      {
        tagName: "tr",
        attributes: {
          "data-role": "table-footer-row"
        },
        children: []
      }
    ]
  }
], J = {
  tagName: le,
  attributes: ie,
  children: ce
}, ue = [
  {
    narration: "Build the column widths for the table using the configured columns.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-colgroup",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    templateKey: "buildColGroup",
    func: "fromCollection"
  },
  {
    narration: "Build the header row for the table using the configured columns.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-header-row",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    templateKey: "buildHeader",
    func: "fromCollection"
  }
], S = { data: {}, base: J, spec: b }, de = { fromCollection: m }, be = (e, a = !1, t = []) => (S.data = e, F(ue, S, de, b, a, t), J), me = [], _ = {
  children: me
}, pe = [
  {
    narration: "Build the table body rows for the table using the configured columns and data.",
    destinationPath: {
      fileName: "base",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    func: "twoDimensional"
  }
], E = { data: {}, base: _, spec: b }, he = { twoDimensional: C }, fe = (e, a = !1, t = []) => (E.data = e, R(pe, E, he, b, a, t), _.children), ye = "table", $e = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Ce = [
  {
    tagName: "colgroup",
    attributes: {
      "data-role": "table-colgroup"
    },
    children: []
  },
  {
    tagName: "thead",
    attributes: {
      class: "table-dark",
      "data-role": "table-header"
    },
    children: [
      {
        tagName: "tr",
        attributes: {
          "data-role": "table-header-row"
        },
        children: []
      }
    ]
  },
  {
    tagName: "tbody",
    attributes: {
      "data-role": "table-body"
    },
    children: []
  },
  {
    tagName: "tfoot",
    attributes: {
      "data-role": "table-footer"
    },
    children: [
      {
        tagName: "tr",
        attributes: {
          "data-role": "table-footer-row"
        },
        children: []
      }
    ]
  }
], Q = {
  tagName: ye,
  attributes: $e,
  children: Ce
}, ge = [
  {
    narration: "Build the column widths for the table using the configured columns.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-colgroup",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    templateKey: "buildColGroup",
    func: "fromCollection"
  },
  {
    narration: "Build the header row for the table using the configured columns.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-header-row",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    templateKey: "buildHeader",
    func: "fromCollection"
  },
  {
    narration: "Build the footer row for the table using the configured columns.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-footer-row",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    templateKey: "buildFooter",
    func: "fromCollection"
  }
], we = [
  {
    narration: "Build the table body rows for the table using the configured columns and data.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-body",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    func: "twoDimensional"
  }
], I = { data: {}, base: Q, spec: b }, D = { fromCollection: m, twoDimensional: C }, Ne = (e, a = !1, t = []) => (I.data = e, F(ge, I, D, b, a, t), R(we, I, D, b, a, t), Q), xe = [], w = {
  children: xe
}, Fe = [
  {
    narration: "Build the footer row for the table using the configured columns.",
    destinationPath: {
      fileName: "base",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    templateKey: "buildFooter",
    func: "fromCollection"
  }
], K = { data: {}, base: w, spec: b }, ke = { fromCollection: m, twoDimensional: C }, Te = (e, a = !1, t = []) => (K.data = e, F(Fe, K, ke, b, a, t), w == null ? void 0 : w.children), Ie = {
  simple: re,
  headerOnly: be,
  bodyOnly: fe,
  withFooter: Ne,
  footerOnly: Te
}, O = ({
  inData: e,
  inColumns: a,
  inType: t,
  footer: s = [],
  options: o,
  inShowLog: n
} = {}) => {
  const i = Ie[t];
  return i({
    columns: a,
    data: e,
    showLog: n
  });
}, Be = ({ inData: e = [], inColumns: a = [] } = {}) => ({
  data: e,
  columns: a
}), Pe = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Ae = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Re = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, h = {
  buildOption: Pe,
  buildSelect: Ae,
  buildDataList: Re
}, ve = (e, a = h.buildOption) => {
  const t = structuredClone(a);
  return t.textContent = t.textContent.replace("rowValue", e), t.attributes.value = t.attributes.value.replace("rowValue", e), t;
}, je = (e, a) => {
  const t = a == null ? void 0 : a.columnName, s = structuredClone(h.buildSelect);
  s.attributes.id = t, s.attributes["data-name"] = t;
  const o = ve(t, h.buildOption);
  return s.children = m(e, o), s;
}, Se = ({ data: e, columns: a }) => a.map((t) => je(e, t)), Ee = (e = {}) => {
  const { data: a, columns: t } = Be(e);
  return Se({ data: a, columns: t });
}, De = ({ inData: e = [], inColumns: a = [] } = {}) => ({
  data: e,
  columns: a
}), Ke = (e, a = h.buildOption) => {
  const t = structuredClone(a);
  return t.textContent = t.textContent.replace("rowValue", e), t.attributes.value = t.attributes.value.replace("rowValue", e), t;
}, Oe = (e, a) => {
  const t = a == null ? void 0 : a.columnName, s = Ke(t, h.buildOption);
  return m(e, s);
}, Le = ({ data: e, columns: a }) => a.map((t) => Oe(e, t)), We = (e = {}) => {
  const { data: a, columns: t } = De(e);
  return Le({ data: a, columns: t });
}, qe = ({ inData: e = [], inColumns: a = [] } = {}) => ({
  data: e,
  columns: a
}), Ve = (e, a = h.buildOption) => {
  const t = structuredClone(a);
  return t.textContent = t.textContent.replace("rowValue", e), t.attributes.value = t.attributes.value.replace("rowValue", e), t;
}, ze = (e, a) => {
  const t = a == null ? void 0 : a.columnName, s = structuredClone(h.buildDataList);
  s.attributes.id = t, s.attributes["data-name"] = t;
  const o = Ve(t, h.buildOption);
  return s.children = m(e, o), s;
}, He = ({ data: e, columns: a }) => a.map((t) => ze(e, t)), L = (e = {}) => {
  const { data: a, columns: t } = qe(e);
  return He({ data: a, columns: t });
}, Ge = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, Ue = (e) => {
  const a = e;
  if (typeof globalThis > "u" || !a) return;
  globalThis.ks ?? (globalThis.ks = {});
  const t = typeof a == "function" ? a : a.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: Ge,
    render: t,
    ...typeof a == "object" ? a : {}
  };
}, Me = "input", Je = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, _e = {
  tagName: Me,
  attributes: Je
}, N = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, s = structuredClone(_e);
  return t.placeholder && (s.attributes.placeholder = t.placeholder), t.class && (s.attributes.class = t.class), t.id && (s.attributes.id = t.id), t.name && (s.attributes.name = t.name), t.type && (s.attributes.type = t.type), t.value && (s.attributes.value = t.value), s;
}, Qe = "div", Xe = {
  class: "d-flex align-items-center gap-2"
}, Ye = [
  {
    tagName: "label",
    textContent: "Search:",
    attributes: {
      class: "form-label mb-0 text-nowrap fw-semibold",
      for: "searchInputId"
    }
  },
  {
    tagName: "input",
    attributes: {
      type: "search",
      placeholder: "Search...",
      class: "form-control",
      id: "searchInputId"
    }
  }
], Ze = {
  tagName: Qe,
  attributes: Xe,
  children: Ye
}, k = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, s = structuredClone(Ze), o = s.children[0], n = s.children[1];
  return t.label && (o.textContent = t.label), t.id && (o.attributes.for = t.id, n.attributes.id = t.id), t.placeholder && (n.attributes.placeholder = t.placeholder), t.class && (n.attributes.class = t.class), t.name && (n.attributes.name = t.name), t.type && (n.attributes.type = t.type), t.wrapperClass && (s.attributes.class = t.wrapperClass), t.labelClass && (o.attributes.class = t.labelClass), s;
}, ta = "div", ea = {
  class: "d-flex align-items-center gap-2"
}, aa = [
  {
    tagName: "label",
    textContent: "Search:",
    attributes: {
      class: "form-label mb-0 text-nowrap fw-semibold",
      for: "searchInputId"
    }
  },
  {
    tagName: "input",
    attributes: {
      type: "search",
      placeholder: "Search...",
      class: "form-control",
      id: "searchInputId"
    }
  },
  {
    tagName: "button",
    textContent: "Search",
    attributes: {
      type: "button",
      class: "btn btn-primary text-nowrap",
      id: "searchButtonId"
    }
  }
], sa = {
  tagName: ta,
  attributes: ea,
  children: aa
}, v = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, s = structuredClone(sa), o = s.children[0], n = s.children[1], r = s.children[2];
  return t.label && (o.textContent = t.label), t.id && (o.attributes.for = t.id, n.attributes.id = t.id), t.placeholder && (n.attributes.placeholder = t.placeholder), t.class && (n.attributes.class = t.class), t.name && (n.attributes.name = t.name), t.type && (n.attributes.type = t.type), t.buttonText && (r.textContent = t.buttonText), t.buttonClass && (r.attributes.class = t.buttonClass), t.buttonId && (r.attributes.id = t.buttonId), t.wrapperClass && (s.attributes.class = t.wrapperClass), t.labelClass && (o.attributes.class = t.labelClass), s;
}, oa = {
  input: N,
  inputOnly: N,
  inputWithLabel: k,
  inputWithLabelButton: v
}, na = ({
  type: e = "inputWithLabel",
  options: a = {},
  inType: t,
  inOptions: s
} = {}) => {
  const o = t ?? e, n = s ?? a;
  return (oa[o] || k)({ inOptions: n, options: n });
};
Ue({
  render: na,
  inputOnly: N,
  inputWithLabel: k,
  inputWithLabelButton: v
});
const B = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a;
  return (t == null ? void 0 : t.label) === !1 || (t == null ? void 0 : t.flavour) === "inputOnly" ? N({ inOptions: t }) : (t == null ? void 0 : t.flavour) === "inputWithLabelButton" || t != null && t.button || t != null && t.buttonText ? v({ inOptions: t }) : k({ inOptions: t });
}, ra = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, la = (e) => {
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: ra, render: e });
}, ia = "div", ca = {
  class: "${cardClass}",
  "data-role": "form-card"
}, ua = [
  {
    tagName: "header",
    attributes: {
      class: "${headerClass}",
      "data-role": "form-header"
    },
    children: [
      {
        tagName: "div",
        attributes: {
          class: "${headingClass}"
        },
        children: [
          {
            tagName: "h2",
            textContent: "${title}",
            attributes: {
              class: "${titleClass}"
            }
          },
          {
            tagName: "p",
            textContent: "${description}",
            attributes: {
              class: "${descriptionClass}"
            }
          }
        ]
      },
      {
        tagName: "span",
        textContent: "${recordId}",
        attributes: {
          class: "${recordIdClass}",
          "data-role": "record-id"
        }
      },
      {
        tagName: "div",
        attributes: {
          class: "${headerActionsClass}",
          "data-role": "header-actions"
        },
        children: []
      }
    ]
  },
  {
    tagName: "div",
    attributes: {
      class: "${cardBodyClass}"
    },
    children: [
      {
        tagName: "form",
        attributes: {
          id: "${formId}",
          "data-role": "form-body"
        },
        children: []
      }
    ]
  },
  {
    tagName: "footer",
    attributes: {
      class: "${footerClass}",
      "data-role": "form-footer"
    },
    children: [
      {
        tagName: "div",
        attributes: {
          class: "${footerActionsClass}",
          "data-role": "footer-actions"
        },
        children: []
      }
    ]
  }
], da = {
  tagName: ia,
  attributes: ca,
  children: ua
}, ba = () => structuredClone(da), ma = "header-actions", pa = "button", W = {
  destinationRole: ma,
  template: pa
}, ha = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, fa = {
  button: ha
}, ya = (e, a) => {
  const t = structuredClone(e), s = m(a.header.actions, fa[W.template]);
  return y(t, W.destinationRole).children.push(...s), t;
}, $a = "form-body", Ca = {
  destinationRole: $a
}, ga = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, wa = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${labelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}"
      }
    }
  ]
}, Na = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${labelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}",
        required: "required"
      }
    }
  ]
}, xa = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${labelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "textarea",
      textContent: "${rowValue}",
      attributes: {
        class: "${inputClass} ${inputSizeClass}",
        rows: "3",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}"
      }
    }
  ]
}, Fa = {
  tagName: "div",
  attributes: {
    class: "${checkboxWrapperClass} ${fieldClass}"
  },
  children: [
    {
      tagName: "input",
      attributes: {
        type: "checkbox",
        class: "${checkboxInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        value: "true"
      }
    },
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${checkboxLabelClass}",
        for: "${columnName}"
      }
    }
  ]
}, ka = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}"
      }
    }
  ]
}, Ta = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}",
        required: "required"
      }
    }
  ]
}, Ia = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}"
      }
    },
    {
      tagName: "button",
      textContent: "${buttonText}",
      attributes: {
        type: "${buttonType}",
        class: "${inlineButtonClass}"
      }
    }
  ]
}, Ba = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}",
        required: "required"
      }
    },
    {
      tagName: "button",
      textContent: "${buttonText}",
      attributes: {
        type: "${buttonType}",
        class: "${inlineButtonClass}"
      }
    }
  ]
}, Pa = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "textarea",
      textContent: "${rowValue}",
      attributes: {
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        rows: "3",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}"
      }
    }
  ]
}, Aa = {
  tagName: "div",
  attributes: {
    class: "${inlineCheckboxWrapperClass}"
  },
  children: [
    {
      tagName: "input",
      attributes: {
        type: "checkbox",
        class: "${checkboxInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        value: "true"
      }
    },
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${checkboxLabelClass}",
        for: "${columnName}"
      }
    }
  ]
}, Ra = {
  buildBodyTr: ga,
  buildBodyCell: wa,
  buildRequiredField: Na,
  buildTextareaField: xa,
  buildCheckboxField: Fa,
  buildInlineField: ka,
  buildInlineRequiredField: Ta,
  buildInlineFieldWithButton: Ia,
  buildInlineRequiredFieldWithButton: Ba,
  buildInlineTextareaField: Pa,
  buildInlineCheckboxField: Aa
}, va = (e, a, t) => {
  const s = e.map((r) => {
    var d, l, c, p, $;
    const i = ((l = (d = r.template) == null ? void 0 : d.body) == null ? void 0 : l.cell) ?? (r.required ? "buildRequiredField" : "buildBodyCell");
    let u = ((c = t.fieldTemplates) == null ? void 0 : c[i]) ?? i;
    return r.buttonText && (u = ((p = t.buttonFieldTemplates) == null ? void 0 : p[u]) ?? u), {
      ...r,
      label: r.label ?? r.title ?? r.columnName,
      type: r.type ?? "text",
      placeholder: r.placeholder ?? "",
      buttonType: r.buttonType ?? "button",
      template: { ...r.template, body: { ...($ = r.template) == null ? void 0 : $.body, cell: u } }
    };
  }), o = a[0] ?? {}, n = Object.fromEntries(s.map((r) => [
    r.columnName,
    o[r.columnName] ?? r.value ?? ""
  ]));
  return { columns: s, rows: [n] };
}, ja = (e, a, t) => {
  const s = va(a.columns, a.records, t.body), o = C(s.columns, s.rows, Ra), n = structuredClone(e);
  return y(n, Ca.destinationRole).children.push(...Array.isArray(o) ? o : [o]), n;
}, Sa = "footer-actions", Ea = "button", q = {
  destinationRole: Sa,
  template: Ea
}, Da = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, Ka = {
  button: Da
}, Oa = (e, a) => {
  const t = structuredClone(e), s = m(a.footer.actions, Ka[q.template]);
  return y(t, q.destinationRole).children.push(...s), t;
}, X = ({ inColumns: e, inData: a, inOptions: t, columns: s, data: o, options: n } = {}) => ({
  columns: Array.isArray(e) && e.length > 0 ? e : Array.isArray(s) ? s : [],
  records: Array.isArray(a) && a.length > 0 ? a : Array.isArray(o) ? o : [],
  options: t && Object.keys(t).length > 0 ? t : n ?? {}
}), La = "bigButtonsForm", Wa = "Account details", qa = "Update your profile information.", Va = "", za = "label", Ha = "stacked", Ga = "saveCancel", Ua = {
  formId: La,
  title: Wa,
  description: qa,
  recordId: Va,
  header: za,
  body: Ha,
  footer: Ga
}, Ma = {
  actions: []
}, Ja = {
  actions: []
}, _a = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, Qa = {
  actions: []
}, Xa = {
  none: Ma,
  label: Ja,
  labelWithRefresh: _a,
  labelWithId: Qa
}, Ya = {
  fieldTemplates: {
    buildBodyCell: "buildInlineField",
    buildRequiredField: "buildInlineRequiredField",
    buildTextareaField: "buildInlineTextareaField",
    buildCheckboxField: "buildInlineCheckboxField"
  },
  buttonFieldTemplates: {
    buildInlineField: "buildInlineFieldWithButton",
    buildInlineRequiredField: "buildInlineRequiredFieldWithButton"
  }
}, Za = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, ts = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, es = {
  inline: Ya,
  stacked: Za,
  threeColumns: ts
}, as = {
  actions: []
}, ss = {
  actions: [
    {
      label: "Save",
      type: "submit",
      buttonClass: "${primaryButtonClass}"
    },
    {
      label: "Cancel",
      type: "reset",
      buttonClass: "${secondaryButtonClass}"
    }
  ]
}, os = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, ns = {
  none: as,
  saveCancel: ss,
  edit: os
}, P = (e, a, t) => {
  const s = e[a];
  if (!s) throw new RangeError("Unknown bigButtons " + t + ": " + a);
  return s;
}, Y = (e) => {
  if (typeof e != "object" || e === null || Array.isArray(e))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const a = e["form.bigButtons"] ?? {};
  if (typeof a != "object" || a === null || Array.isArray(a))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const t = { ...Ua, ...a };
  return {
    options: t,
    header: P(Xa, t.header, "header"),
    body: P(es, t.body, "body"),
    footer: P(ns, t.footer, "footer")
  };
}, rs = (e, a = {}) => {
  const t = X(a), s = Y(t.options), o = ya(e, s), n = ja(o, t, s);
  return Oa(n, s);
}, ls = {
  none: {
    headerClass: "d-none",
    headerActionsClass: "d-none"
  },
  label: {
    headerClass: "card-header d-flex align-items-center justify-content-between gap-3",
    headingClass: "me-auto",
    titleClass: "h4 fw-semibold mb-1",
    descriptionClass: "text-muted mb-0",
    recordIdClass: "d-none",
    headerActionsClass: "d-none",
    headerButtonClass: "btn btn-outline-secondary text-nowrap"
  },
  labelWithRefresh: {
    headerClass: "card-header d-flex align-items-center justify-content-between gap-3",
    headingClass: "me-auto",
    titleClass: "h4 fw-semibold mb-1",
    descriptionClass: "text-muted mb-0",
    recordIdClass: "d-none",
    headerActionsClass: "d-flex align-items-center gap-2",
    headerButtonClass: "btn btn-outline-secondary text-nowrap"
  },
  labelWithId: {
    headerClass: "card-header d-flex align-items-center justify-content-between gap-3",
    headingClass: "me-auto",
    titleClass: "h4 fw-semibold mb-1",
    descriptionClass: "text-muted mb-0",
    recordIdClass: "badge text-bg-light border text-secondary",
    headerActionsClass: "d-none",
    headerButtonClass: "btn btn-outline-secondary text-nowrap"
  }
}, is = {
  bootstrap: ls
}, cs = (e, a) => {
  var s;
  const t = (s = is[a]) == null ? void 0 : s[e.header];
  if (!t) throw new RangeError("Unknown bigButtons header: " + e.header);
  return t;
}, us = "bootstrap", ds = {
  bootstrap: {
    base: {
      cardClass: "card border-0 shadow-sm w-100",
      cardBodyClass: "card-body p-4 p-lg-5",
      labelClass: "form-label fw-semibold",
      inputClass: "form-control",
      inputSizeClass: "form-control-lg",
      checkboxWrapperClass: "form-check mb-3",
      checkboxInputClass: "form-check-input",
      checkboxLabelClass: "form-check-label"
    },
    bodies: {
      inline: {
        rowClass: "vstack gap-3",
        fieldClass: "d-flex align-items-center gap-3",
        inlineLabelClass: "form-label fw-semibold mb-0 text-nowrap",
        inlineInputClass: "flex-grow-1",
        inlineCheckboxWrapperClass: "form-check d-flex align-items-center gap-2"
      },
      stacked: {
        rowClass: "vstack gap-3",
        fieldClass: "w-100"
      },
      threeColumns: {
        rowClass: "row g-3",
        fieldClass: "col-md-4"
      }
    }
  }
}, A = {
  defaultFramework: us,
  frameworks: ds
}, bs = (e, a) => {
  const t = A.frameworks[a];
  if (!t) throw new RangeError("Unknown bigButtons framework: " + a);
  const s = t.bodies[e.body];
  if (!s) throw new RangeError("Unknown bigButtons body: " + e.body);
  return { ...t.base, ...s };
}, ms = {
  base: {
    footerClass: "card-footer bg-transparent",
    footerActionsClass: "d-flex flex-wrap justify-content-end gap-2",
    buttonSizeClass: "btn-lg",
    buttonPaddingClass: "px-4 py-2",
    primaryButtonClass: "btn btn-primary text-nowrap",
    secondaryButtonClass: "btn btn-outline-secondary text-nowrap",
    infoButtonClass: "btn btn-outline-info text-nowrap",
    inlineButtonClass: "btn btn-outline-secondary text-nowrap"
  },
  footers: {
    none: {
      footerClass: "d-none"
    },
    saveCancel: {},
    edit: {}
  }
}, ps = {
  bootstrap: ms
}, hs = (e, a) => {
  const t = ps[a], s = t == null ? void 0 : t.footers[e.footer];
  if (!t) throw new RangeError("Unknown bigButtons framework: " + a);
  if (!s) throw new RangeError("Unknown bigButtons footer: " + e.footer);
  return { ...t.base, ...s };
}, fs = (e, a = {}) => {
  const t = Y(X(a).options), { options: s } = t, o = s.framework ?? A.defaultFramework;
  if (!A.frameworks[o]) throw new RangeError("Unknown bigButtons framework: " + o);
  const r = Object.assign(
    {},
    s,
    bs(s, o),
    cs(s, o),
    hs(s, o)
  );
  return f(r, structuredClone(e));
}, ys = (e = {}) => {
  const a = ba(), t = rs(a, e);
  return fs(t, e);
}, Z = (e = {}) => {
  const a = { ...e, type: e.type ?? "form.bigButtons" };
  return V(a), ys(a);
};
la(Z);
const $s = ({
  inType: e = "stacked",
  inData: a,
  inColumns: t
} = {}) => Z({
  type: e,
  columns: t,
  data: a
}), Cs = {
  table: O,
  tableFromSpec: O,
  select: Ee,
  selectOptionsOnly: We,
  dataList: L,
  datalist: L,
  searchInput: B,
  search: B,
  inputRow: B,
  form: $s
}, gs = (e = {}) => {
  V(e);
  const a = e == null ? void 0 : e.showLog, t = e.type;
  let s = t, o = t;
  if (t.includes(".")) {
    const i = t.split(".");
    s = i[0], o = i[1];
  }
  const n = Cs[s];
  if (!n)
    throw new Error(`Renderer for type "${s}" not found.`);
  const r = n({
    inType: o,
    inColumns: e.columns,
    inData: e.data,
    inOptions: e.options,
    options: e.options,
    inShowLog: a
  });
  return a && console.log("json-renderers-build output:", r), r;
};
st(gs);
export {
  gs as default,
  gs as render
};
