const et = {
  version: "1.22.0",
  name: "json-renderers-build"
}, at = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: et,
    render: t
  });
}, ot = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.type;
  if (e === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof e != "string")
    throw new TypeError("type must be a string");
  return !0;
}, st = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.data;
  if (e === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(e))
    throw new TypeError("data must be an Array");
  return !0;
}, nt = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.columns;
  if (e === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(e))
    throw new TypeError("columns must be an Array");
  return !0;
}, lt = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.showLog;
  if (e !== void 0 && typeof e != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, V = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return ot(a), st(a), nt(a), lt(a), !0;
}, rt = "table", it = "", ct = [], ut = [], dt = "", bt = "replace", pt = !1, w = {
  type: rt,
  targetHtmlId: it,
  data: ct,
  columns: ut,
  classToApply: dt,
  appendPosition: bt,
  showLog: pt
}, mt = (t) => {
  const a = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return a && a in w ? w[a] : { ...w };
};
Object.assign(mt, w);
const ht = (t) => typeof t == "object" && t !== null && !Array.isArray(t), ft = (t, a) => {
  if (!ht(t)) return;
  let e = {};
  for (const [o, s] of Object.entries(t))
    e[o] = p(a, s);
  return e;
}, yt = (t, a) => {
  const e = structuredClone(t);
  return Array.isArray(e) ? e.map((s) => p(a, s)) : void 0;
}, z = (t, a, e) => {
  if (t === "${agg:count}" && "rowData" in a) {
    if (Array.isArray(a == null ? void 0 : a.rowData))
      return a == null ? void 0 : a.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in a ? a == null ? void 0 : a.rowData : t.replace(/\$\{(\w+)\}/g, (o, s) => a[s] !== void 0 ? a[s] : o);
}, Ct = (t, a) => z(t, a), $t = (t, a, e) => {
  if (e && console.log("inElement : ", t), e && console.log("inTemplate : ", a), a == null)
    throw new TypeError("inTemplate is required");
  if (typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, gt = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, wt = (t) => {
  var a, e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (a = globalThis.ks).applyTemplate ?? (a.applyTemplate = t), (e = globalThis.ks).transformerFuncs ?? (e.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: gt,
    applyTemplate: t
  });
}, p = (t, a, e) => {
  const o = t, s = a;
  $t(o, s, e);
  const n = structuredClone(s);
  return typeof n == "string" ? z(n, o) : (n === null || typeof n != "object" || ("textContent" in n && (n.textContent = Ct(n == null ? void 0 : n.textContent, o)), "attributes" in n && (n.attributes = ft(n == null ? void 0 : n.attributes, o)), "children" in n && (n.children = yt(n == null ? void 0 : n.children, o))), n);
};
wt(p);
const Nt = (t, a) => {
  if (!Array.isArray(t))
    throw new TypeError("inSource must be an Array");
  if (t.length === 0)
    throw new Error("inSource cannot be empty");
  for (let e = 0; e < t.length; e++)
    if (!t[e] || typeof t[e] != "object")
      throw new TypeError(`inSource[${e}] must be an object`);
  if (!a || typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, m = (t, a) => {
  const e = t, o = a;
  return Nt(e, o), e.map((s) => p(s, o));
}, xt = (t, a) => t.map((o) => ({
  ...o,
  rowData: a[o.columnName]
})), Pt = (t, a, e) => {
  var s, n, l, r, i, b;
  if (!Array.isArray(t))
    throw new TypeError("inColumns must be an Array");
  if (t.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let c = 0; c < t.length; c++) {
    const d = t[c];
    if (!d || typeof d != "object")
      throw new TypeError(`inColumns[${c}] must be an object`);
    if (typeof d.columnName != "string" || !d.columnName.trim())
      throw new TypeError(`inColumns[${c}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(a))
    throw new TypeError("inData must be an Array");
  for (let c = 0; c < a.length; c++) {
    const d = a[c];
    if (!d || typeof d != "object")
      throw new TypeError(`inData[${c}] must be an object`);
  }
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inSpec must be an object");
  const o = ((l = (n = (s = t[0]) == null ? void 0 : s.template) == null ? void 0 : n.body) == null ? void 0 : l.tr) || "buildBodyTr";
  if (!(o in e))
    throw new Error(`Row template "${o}" not found in inSpec`);
  for (let c = 0; c < t.length; c++) {
    const d = t[c], h = ((i = (r = d.template) == null ? void 0 : r.body) == null ? void 0 : i.cell) || ((b = d.template) == null ? void 0 : b.bodyCell) || "buildBodyCell";
    if (!(h in e))
      throw new Error(`Cell template "${h}" for column "${d.columnName}" not found in inSpec`);
  }
  return !0;
}, Tt = (t, a) => t.map((o) => {
  var r, i, b;
  const s = ((i = (r = o.template) == null ? void 0 : r.body) == null ? void 0 : i.cell) || ((b = o.template) == null ? void 0 : b.bodyCell) || "buildBodyCell", n = a[s];
  return p(o, n);
}), g = (t, a, e) => {
  var b, c, d;
  Pt(t, a, e);
  const o = t, s = a, n = e, l = ((d = (c = (b = o[0]) == null ? void 0 : b.template) == null ? void 0 : c.body) == null ? void 0 : d.tr) || "buildBodyTr", r = n[l];
  return s.map((h) => {
    const $ = p(h, r), Z = xt(o, h), tt = Tt(Z, n);
    return $.children = tt, $;
  });
}, Ft = {
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
}, It = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, kt = {
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
}, At = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, vt = {
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
}, jt = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "${columnName}",
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
}, Ot = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Kt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Dt = {
  tagName: "td",
  children: []
}, u = {
  buildBodyTr: Ft,
  buildColGroup: Bt,
  buildHeader: It,
  buildFooter: kt,
  buildBodyCell: Rt,
  button: At,
  buttonCell: vt,
  optionsButtonCell: jt,
  buildOption: St,
  buildSelect: Ot,
  buildDataList: Kt,
  emptyCell: Dt
}, Et = "table", Wt = {
  class: "table table-hover table-striped align-middle border mb-0"
}, qt = [
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
], Lt = {
  tagName: Et,
  attributes: Wt,
  children: qt
}, Vt = [
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
], zt = [
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
], C = (t, a) => {
  var e;
  if (((e = t == null ? void 0 : t.attributes) == null ? void 0 : e["data-role"]) === a) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const s = C(o, a);
    if (s) return s;
  }
  return null;
}, Ht = (t, a) => {
  const e = t[a.fileName], o = a.dataRole ? C(e, a.dataRole) : e;
  return (a.filePath ?? []).reduce((s, n) => s[n], o);
}, P = (t) => Array.isArray(t) ? t : [t], H = (t, a, e) => {
  t[a] = e;
}, Gt = (t, a, e) => {
  t[a].push(...P(e));
}, Mt = (t, a, e) => {
  t[a].unshift(...P(e));
}, Ut = (t, a, e) => {
  t[a].forEach((o) => {
    o.children.push(...structuredClone(P(e)));
  });
}, Jt = (t, a, e) => {
  t[a].forEach((o) => {
    o.children.unshift(...structuredClone(P(e)));
  });
}, _t = (t, a, e) => {
  t[a].forEach((o, s) => {
    const n = structuredClone(e);
    n.textContent = s + 1, o.children.unshift(n);
  });
}, Qt = {
  set: H,
  push: Gt,
  unshift: Mt,
  pushToRows: Ut,
  unshiftToRows: Jt,
  unshiftSerialToRows: _t
}, Xt = (t, a) => {
  const e = a.dataRole ? C(t[a.fileName], a.dataRole) : t[a.fileName], o = [...a.filePath ?? []], s = o.pop();
  return { parent: o.reduce((l, r) => l[r], e), key: s };
}, G = (t, a, e) => {
  const { parent: o, key: s } = Xt(t, a);
  (Qt[a.action] || H)(o, s, e);
}, Yt = (t, a, e) => {
  var n, l;
  const o = !!((n = t.sourcePath) != null && n.fileName && Array.isArray((l = t.sourcePath) == null ? void 0 : l.filePath)), s = `structure/sourcePath: ${o ? "passed" : "failed"}`;
  return e.push(s), a && console.log(s), o;
}, Zt = (t, a, e) => {
  var n, l;
  const o = !!((n = t.destinationPath) != null && n.fileName && Array.isArray((l = t.destinationPath) == null ? void 0 : l.filePath)), s = `structure/destinationPath: ${o ? "passed" : "failed"}`;
  return e.push(s), a && console.log(s), o;
}, te = (t, a, e) => {
  const o = t.templateKey === void 0 || typeof t.templateKey == "string" && t.templateKey.length > 0, s = `structure/templateKey: ${o ? "passed" : "failed"}`;
  return e.push(s), a && console.log(s), o;
}, ee = (t, a, e) => {
  const o = typeof t.func == "string" && t.func.length > 0, s = `structure/func: ${o ? "passed" : "failed"}`;
  return e.push(s), a && console.log(s), o;
}, ae = (t, a, e) => [
  Yt(t, a, e),
  Zt(t, a, e),
  te(t, a, e),
  ee(t, a, e)
].every(Boolean), oe = (t, a, e, o) => {
  const s = typeof a[t.func] == "function", n = `references/func (${t.func}): ${s ? "passed" : "failed"}`;
  return o.push(n), e && console.log(n), s;
}, se = (t, a, e, o) => {
  const s = t.templateKey === void 0 || Object.hasOwn(a, t.templateKey), n = `references/templateKey${t.templateKey === void 0 ? " (not used)" : ` (${t.templateKey})`}: ${s ? "passed" : "failed"}`;
  return o.push(n), e && console.log(n), s;
}, ne = (t, a, e, o, s) => {
  const n = oe(t, a, o, s), l = se(t, e, o, s);
  return n && l;
}, M = (t, a, e, o, s) => ae(t, o, s) ? ne(t, a, e, o, s) : !1, le = (t, a, e, o, s, n) => {
  if (!M(t, e, o, s, n)) return;
  const l = o, r = t.templateKey, i = l[r];
  console.log("templateKey ; ", r), console.log("localSpecKey ; ", i);
  const b = Ht(a, t.sourcePath), c = e[t.func](b, i);
  r === "buildFooter" && console.log("result ; ", c), G(a, t.destinationPath, c);
}, f = (t, a, e, o, s, n) => {
  t.forEach((l) => {
    le(l, a, e, o, s, n);
  });
}, re = (t, a, e, o, s, n) => {
  if (!M(t, e, o, s, n)) return;
  const l = e[t.func](
    a.data.columns,
    a.data.data,
    o
  );
  G(a, t.destinationPath, l);
}, k = (t, a, e, o, s, n) => {
  t.forEach((l) => {
    re(l, a, e, o, s, n);
  });
}, ie = [
  {
    narration: "Prepend the serial column width to the table colgroup.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-colgroup",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "serial",
        "col"
      ]
    },
    templateKey: "buildColGroup",
    func: "applyTemplate"
  },
  {
    narration: "Prepend the serial header cell to the table header row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-header-row",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "serial",
        "header"
      ]
    },
    templateKey: "buildHeader",
    func: "applyTemplate"
  },
  {
    narration: "Prepend the serial number cell into each table body row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-body",
      filePath: [
        "children"
      ],
      action: "unshiftSerialToRows"
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "serial",
        "body"
      ]
    },
    templateKey: "buildBodyCell",
    func: "applyTemplate"
  }
], ce = [
  {
    narration: "Prepend an empty cell into the table footer row if footer row is present.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-footer-row",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "serial",
        "footer"
      ]
    },
    templateKey: "emptyCell",
    func: "applyTemplate"
  }
], A = { applyTemplate: p }, ue = (t = {}, a = {}, e = !1, o = []) => {
  let s = t, n = a;
  t && typeof t == "object" && "inTableSpec" in t && (s = t.inTableSpec, n = t.inSerial || a);
  const r = {
    data: {
      serial: {
        col: { width: "50px" },
        header: { columnName: "#" },
        body: {},
        footer: {},
        ...n
      }
    },
    base: s,
    spec: u
  };
  f(ie, r, A, u, e, o);
  const i = C(s, "table-footer-row");
  return i && Array.isArray(i.children) && i.children.length > 0 && f(ce, r, A, u, e, o), s;
}, de = [
  {
    narration: "Append the options column width to the table colgroup.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-colgroup",
      filePath: [
        "children"
      ],
      action: "push"
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "options",
        "col"
      ]
    },
    templateKey: "buildColGroup",
    func: "applyTemplate"
  },
  {
    narration: "Append the options header cell to the table header row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-header-row",
      filePath: [
        "children"
      ],
      action: "push"
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "options",
        "header"
      ]
    },
    templateKey: "buildHeader",
    func: "applyTemplate"
  },
  {
    narration: "Append the options button cell into each table body row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-body",
      filePath: [
        "children"
      ],
      action: "pushToRows"
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "options",
        "body"
      ]
    },
    templateKey: "optionsButtonCell",
    func: "applyTemplate"
  }
], be = [
  {
    narration: "Append an empty cell into the table footer row if footer row is present.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-footer-row",
      filePath: [
        "children"
      ],
      action: "push"
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "options",
        "footer"
      ]
    },
    templateKey: "emptyCell",
    func: "applyTemplate"
  }
], v = { applyTemplate: p }, pe = (t = {}, a = {}, e = !1, o = []) => {
  let s = t, n = a;
  t && typeof t == "object" && "inTableSpec" in t && (s = t.inTableSpec, n = t.inOptions || a);
  const r = {
    data: {
      options: {
        col: { width: "100px" },
        header: { columnName: "options" },
        body: { columnName: "show" },
        footer: {},
        ...n
      }
    },
    base: s,
    spec: u
  };
  f(de, r, v, u, e, o);
  const i = C(s, "table-footer-row");
  return i && Array.isArray(i.children) && i.children.length > 0 && f(be, r, v, u, e, o), s;
}, U = ({ inOptions: t = {}, inBase: a, showLog: e = !1, returnLog: o = [] }) => {
  const s = t, n = a;
  return (s.showSerial || s.serial) && ue(n, s.serial || {}, e, o), (s.showOptions || s.options) && pe(n, s.options || {}, e, o), n;
}, j = { fromCollection: m, twoDimensional: g }, me = (t = {}, a = !1, e = []) => {
  const o = t, s = o.columns || [], n = o.data || [], l = o.options, r = structuredClone(Lt), i = {
    data: {
      columns: s,
      data: n
    },
    base: r,
    spec: u
  };
  return f(Vt, i, j, u, a, e), k(zt, i, j, u, a, e), U({ inOptions: l, inBase: r }), r;
}, he = "table", fe = {
  class: "table table-hover table-striped align-middle border mb-0"
}, ye = [
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
  tagName: he,
  attributes: fe,
  children: ye
}, Ce = [
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
], S = { data: {}, base: J, spec: u }, $e = { fromCollection: m }, ge = (t, a = !1, e = []) => (S.data = t, f(Ce, S, $e, u, a, e), J), we = [], _ = {
  children: we
}, Ne = [
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
], O = { data: {}, base: _, spec: u }, xe = { twoDimensional: g }, Pe = (t, a = !1, e = []) => (O.data = t, k(Ne, O, xe, u, a, e), _.children), Te = "table", Fe = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Be = [
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
], Ie = {
  tagName: Te,
  attributes: Fe,
  children: Be
}, ke = [
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
], Re = [
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
], K = { fromCollection: m, twoDimensional: g }, Ae = (t = {}, a = !1, e = []) => {
  const o = t, s = o.inColumns || o.columns || [], n = o.inData || o.data || [], l = o.inOptions || o.options || {}, r = structuredClone(Ie), i = {
    data: {
      columns: s,
      data: n
    },
    base: r,
    spec: u
  };
  return f(ke, i, K, u, a, e), k(Re, i, K, u, a, e), U({ inOptions: l, inBase: r }), r;
}, ve = [], N = {
  children: ve
}, je = [
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
], D = { data: {}, base: N, spec: u }, Se = { fromCollection: m, twoDimensional: g }, Oe = (t, a = !1, e = []) => (D.data = t, f(je, D, Se, u, a, e), N == null ? void 0 : N.children), Ke = {
  simple: me,
  headerOnly: ge,
  bodyOnly: Pe,
  withFooter: Ae,
  footerOnly: Oe
}, E = ({
  inData: t,
  inColumns: a,
  inType: e,
  footer: o = [],
  options: s,
  inShowLog: n
} = {}) => {
  const r = Ke[e];
  return r({
    columns: a,
    data: t,
    showLog: n
  });
}, De = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), Ee = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, We = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, qe = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, y = {
  buildOption: Ee,
  buildSelect: We,
  buildDataList: qe
}, Le = (t, a = y.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, Ve = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = structuredClone(y.buildSelect);
  o.attributes.id = e, o.attributes["data-name"] = e;
  const s = Le(e, y.buildOption);
  return o.children = m(t, s), o;
}, ze = ({ data: t, columns: a }) => a.map((e) => Ve(t, e)), He = (t = {}) => {
  const { data: a, columns: e } = De(t);
  return ze({ data: a, columns: e });
}, Ge = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), Me = (t, a = y.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, Ue = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = Me(e, y.buildOption);
  return m(t, o);
}, Je = ({ data: t, columns: a }) => a.map((e) => Ue(t, e)), _e = (t = {}) => {
  const { data: a, columns: e } = Ge(t);
  return Je({ data: a, columns: e });
}, Qe = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), Xe = (t, a = y.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, Ye = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = structuredClone(y.buildDataList);
  o.attributes.id = e, o.attributes["data-name"] = e;
  const s = Xe(e, y.buildOption);
  return o.children = m(t, s), o;
}, Ze = ({ data: t, columns: a }) => a.map((e) => Ye(t, e)), W = (t = {}) => {
  const { data: a, columns: e } = Qe(t);
  return Ze({ data: a, columns: e });
}, ta = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, ea = (t) => {
  const a = t;
  if (typeof globalThis > "u" || !a) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof a == "function" ? a : a.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: ta,
    render: e,
    ...typeof a == "object" ? a : {}
  };
}, aa = "input", oa = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, sa = {
  tagName: aa,
  attributes: oa
}, x = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(sa);
  return e.placeholder && (o.attributes.placeholder = e.placeholder), e.class && (o.attributes.class = e.class), e.id && (o.attributes.id = e.id), e.name && (o.attributes.name = e.name), e.type && (o.attributes.type = e.type), e.value && (o.attributes.value = e.value), o;
}, na = "div", la = {
  class: "d-flex align-items-center gap-2"
}, ra = [
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
], ia = {
  tagName: na,
  attributes: la,
  children: ra
}, T = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(ia), s = o.children[0], n = o.children[1];
  return e.label && (s.textContent = e.label), e.id && (s.attributes.for = e.id, n.attributes.id = e.id), e.placeholder && (n.attributes.placeholder = e.placeholder), e.class && (n.attributes.class = e.class), e.name && (n.attributes.name = e.name), e.type && (n.attributes.type = e.type), e.wrapperClass && (o.attributes.class = e.wrapperClass), e.labelClass && (s.attributes.class = e.labelClass), o;
}, ca = "div", ua = {
  class: "d-flex align-items-center gap-2"
}, da = [
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
], ba = {
  tagName: ca,
  attributes: ua,
  children: da
}, R = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(ba), s = o.children[0], n = o.children[1], l = o.children[2];
  return e.label && (s.textContent = e.label), e.id && (s.attributes.for = e.id, n.attributes.id = e.id), e.placeholder && (n.attributes.placeholder = e.placeholder), e.class && (n.attributes.class = e.class), e.name && (n.attributes.name = e.name), e.type && (n.attributes.type = e.type), e.buttonText && (l.textContent = e.buttonText), e.buttonClass && (l.attributes.class = e.buttonClass), e.buttonId && (l.attributes.id = e.buttonId), e.wrapperClass && (o.attributes.class = e.wrapperClass), e.labelClass && (s.attributes.class = e.labelClass), o;
}, pa = {
  input: x,
  inputOnly: x,
  inputWithLabel: T,
  inputWithLabelButton: R
}, ma = ({
  type: t = "inputWithLabel",
  options: a = {},
  inType: e,
  inOptions: o
} = {}) => {
  const s = e ?? t, n = o ?? a;
  return (pa[s] || T)({ inOptions: n, options: n });
};
ea({
  render: ma,
  inputOnly: x,
  inputWithLabel: T,
  inputWithLabelButton: R
});
const F = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a;
  return (e == null ? void 0 : e.label) === !1 || (e == null ? void 0 : e.flavour) === "inputOnly" ? x({ inOptions: e }) : (e == null ? void 0 : e.flavour) === "inputWithLabelButton" || e != null && e.button || e != null && e.buttonText ? R({ inOptions: e }) : T({ inOptions: e });
}, ha = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, fa = (t) => {
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: ha, render: t });
}, ya = "div", Ca = {
  class: "${cardClass}",
  "data-role": "form-card"
}, $a = [
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
], ga = {
  tagName: ya,
  attributes: Ca,
  children: $a
}, wa = () => structuredClone(ga), Na = "header-actions", xa = "button", q = {
  destinationRole: Na,
  template: xa
}, Pa = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, Ta = {
  button: Pa
}, Fa = (t, a) => {
  const e = structuredClone(t), o = m(a.header.actions, Ta[q.template]);
  return C(e, q.destinationRole).children.push(...o), e;
}, Ba = "form-body", Ia = {
  destinationRole: Ba
}, ka = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, Ra = {
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
}, Aa = {
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
}, va = {
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
}, ja = {
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
}, Sa = {
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
}, Oa = {
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
}, Ka = {
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
}, Da = {
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
}, Ea = {
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
}, Wa = {
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
}, qa = {
  buildBodyTr: ka,
  buildBodyCell: Ra,
  buildRequiredField: Aa,
  buildTextareaField: va,
  buildCheckboxField: ja,
  buildInlineField: Sa,
  buildInlineRequiredField: Oa,
  buildInlineFieldWithButton: Ka,
  buildInlineRequiredFieldWithButton: Da,
  buildInlineTextareaField: Ea,
  buildInlineCheckboxField: Wa
}, La = (t, a, e) => {
  const o = t.map((l) => {
    var b, c, d, h, $;
    const r = ((c = (b = l.template) == null ? void 0 : b.body) == null ? void 0 : c.cell) ?? (l.required ? "buildRequiredField" : "buildBodyCell");
    let i = ((d = e.fieldTemplates) == null ? void 0 : d[r]) ?? r;
    return l.buttonText && (i = ((h = e.buttonFieldTemplates) == null ? void 0 : h[i]) ?? i), {
      ...l,
      label: l.label ?? l.title ?? l.columnName,
      type: l.type ?? "text",
      placeholder: l.placeholder ?? "",
      buttonType: l.buttonType ?? "button",
      template: { ...l.template, body: { ...($ = l.template) == null ? void 0 : $.body, cell: i } }
    };
  }), s = a[0] ?? {}, n = Object.fromEntries(o.map((l) => [
    l.columnName,
    s[l.columnName] ?? l.value ?? ""
  ]));
  return { columns: o, rows: [n] };
}, Va = (t, a, e) => {
  const o = La(a.columns, a.records, e.body), s = g(o.columns, o.rows, qa), n = structuredClone(t);
  return C(n, Ia.destinationRole).children.push(...Array.isArray(s) ? s : [s]), n;
}, za = "footer-actions", Ha = "button", L = {
  destinationRole: za,
  template: Ha
}, Ga = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, Ma = {
  button: Ga
}, Ua = (t, a) => {
  const e = structuredClone(t), o = m(a.footer.actions, Ma[L.template]);
  return C(e, L.destinationRole).children.push(...o), e;
}, Q = ({ inColumns: t, inData: a, inOptions: e, columns: o, data: s, options: n } = {}) => ({
  columns: Array.isArray(t) && t.length > 0 ? t : Array.isArray(o) ? o : [],
  records: Array.isArray(a) && a.length > 0 ? a : Array.isArray(s) ? s : [],
  options: e && Object.keys(e).length > 0 ? e : n ?? {}
}), Ja = "bigButtonsForm", _a = "Account details", Qa = "Update your profile information.", Xa = "", Ya = "label", Za = "stacked", to = "saveCancel", eo = {
  formId: Ja,
  title: _a,
  description: Qa,
  recordId: Xa,
  header: Ya,
  body: Za,
  footer: to
}, ao = {
  actions: []
}, oo = {
  actions: []
}, so = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, no = {
  actions: []
}, lo = {
  none: ao,
  label: oo,
  labelWithRefresh: so,
  labelWithId: no
}, ro = {
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
}, io = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, co = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, uo = {
  inline: ro,
  stacked: io,
  threeColumns: co
}, bo = {
  actions: []
}, po = {
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
}, mo = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, ho = {
  none: bo,
  saveCancel: po,
  edit: mo
}, B = (t, a, e) => {
  const o = t[a];
  if (!o) throw new RangeError("Unknown bigButtons " + e + ": " + a);
  return o;
}, X = (t) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const a = t["form.bigButtons"] ?? {};
  if (typeof a != "object" || a === null || Array.isArray(a))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const e = { ...eo, ...a };
  return {
    options: e,
    header: B(lo, e.header, "header"),
    body: B(uo, e.body, "body"),
    footer: B(ho, e.footer, "footer")
  };
}, fo = (t, a = {}) => {
  const e = Q(a), o = X(e.options), s = Fa(t, o), n = Va(s, e, o);
  return Ua(n, o);
}, yo = {
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
}, Co = {
  bootstrap: yo
}, $o = (t, a) => {
  var o;
  const e = (o = Co[a]) == null ? void 0 : o[t.header];
  if (!e) throw new RangeError("Unknown bigButtons header: " + t.header);
  return e;
}, go = "bootstrap", wo = {
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
}, I = {
  defaultFramework: go,
  frameworks: wo
}, No = (t, a) => {
  const e = I.frameworks[a];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + a);
  const o = e.bodies[t.body];
  if (!o) throw new RangeError("Unknown bigButtons body: " + t.body);
  return { ...e.base, ...o };
}, xo = {
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
}, Po = {
  bootstrap: xo
}, To = (t, a) => {
  const e = Po[a], o = e == null ? void 0 : e.footers[t.footer];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + a);
  if (!o) throw new RangeError("Unknown bigButtons footer: " + t.footer);
  return { ...e.base, ...o };
}, Fo = (t, a = {}) => {
  const e = X(Q(a).options), { options: o } = e, s = o.framework ?? I.defaultFramework;
  if (!I.frameworks[s]) throw new RangeError("Unknown bigButtons framework: " + s);
  const l = Object.assign(
    {},
    o,
    No(o, s),
    $o(o, s),
    To(o, s)
  );
  return p(l, structuredClone(t));
}, Bo = (t = {}) => {
  const a = wa(), e = fo(a, t);
  return Fo(e, t);
}, Y = (t = {}) => {
  const a = { ...t, type: t.type ?? "form.bigButtons" };
  return V(a), Bo(a);
};
fa(Y);
const Io = ({
  inType: t = "stacked",
  inData: a,
  inColumns: e
} = {}) => Y({
  type: t,
  columns: e,
  data: a
}), ko = {
  table: E,
  tableFromSpec: E,
  select: He,
  selectOptionsOnly: _e,
  dataList: W,
  datalist: W,
  searchInput: F,
  search: F,
  inputRow: F,
  form: Io
}, Ro = (t = {}) => {
  V(t);
  const a = t == null ? void 0 : t.showLog, e = t.type;
  let o = e, s = e;
  if (e.includes(".")) {
    const r = e.split(".");
    o = r[0], s = r[1];
  }
  const n = ko[o];
  if (!n)
    throw new Error(`Renderer for type "${o}" not found.`);
  const l = n({
    inType: s,
    inColumns: t.columns,
    inData: t.data,
    inOptions: t.options,
    options: t.options,
    inShowLog: a
  });
  return a && console.log("json-renderers-build output:", l), l;
};
at(Ro);
export {
  Ro as default,
  Ro as render
};
