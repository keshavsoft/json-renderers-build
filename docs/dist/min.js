const U = {
  version: "1.22.0",
  name: "json-renderers-build"
}, G = (e) => {
  e && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: U,
    render: e
  });
}, M = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.type;
  if (t === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof t != "string")
    throw new TypeError("type must be a string");
  return !0;
}, J = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.data;
  if (t === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(t))
    throw new TypeError("data must be an Array");
  return !0;
}, _ = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.columns;
  if (t === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(t))
    throw new TypeError("columns must be an Array");
  return !0;
}, Q = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.showLog;
  if (t !== void 0 && typeof t != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, P = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return M(a), J(a), _(a), Q(a), !0;
}, X = "table", Y = "", Z = [], tt = [], et = "", at = "replace", st = !1, C = {
  type: X,
  targetHtmlId: Y,
  data: Z,
  columns: tt,
  classToApply: et,
  appendPosition: at,
  showLog: st
}, ot = (e) => {
  const a = typeof e == "object" && e !== null ? e.inKey ?? e.key : e;
  return a && a in C ? C[a] : { ...C };
};
Object.assign(ot, C);
const nt = (e) => typeof e == "object" && e !== null && !Array.isArray(e), rt = (e, a) => {
  if (!nt(e)) return;
  let t = {};
  for (const [s, o] of Object.entries(e))
    t[s] = m(a, o);
  return t;
}, lt = (e, a) => {
  const t = structuredClone(e);
  return Array.isArray(t) ? t.map((o) => m(a, o)) : void 0;
}, S = (e, a, t) => {
  if (e === "${agg:count}" && "rowData" in a) {
    if (Array.isArray(a == null ? void 0 : a.rowData))
      return a == null ? void 0 : a.rowData.length;
  } else
    return e === "${rowValue}" && "rowData" in a ? a == null ? void 0 : a.rowData : e.replace(/\$\{(\w+)\}/g, (s, o) => a[o] !== void 0 ? a[o] : s);
}, it = (e, a) => S(e, a), ct = (e, a, t) => {
  if (t && console.log("inElement : ", e), t && console.log("inTemplate : ", a), a == null)
    throw new TypeError("inTemplate is required");
  if (typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inElement must be an object");
  return !0;
}, ut = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, dt = (e) => {
  var a, t;
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), (a = globalThis.ks).applyTemplate ?? (a.applyTemplate = e), (t = globalThis.ks).transformerFuncs ?? (t.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: ut,
    applyTemplate: e
  });
}, m = (e, a, t) => {
  const s = e, o = a;
  ct(s, o, t);
  const n = structuredClone(o);
  return typeof n == "string" ? S(n, s) : (n === null || typeof n != "object" || ("textContent" in n && (n.textContent = it(n == null ? void 0 : n.textContent, s)), "attributes" in n && (n.attributes = rt(n == null ? void 0 : n.attributes, s)), "children" in n && (n.children = lt(n == null ? void 0 : n.children, s))), n);
};
dt(m);
const bt = (e, a) => {
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
}, h = (e, a) => {
  const t = e, s = a;
  return bt(t, s), t.map((o) => m(o, s));
}, pt = (e, a) => e.map((s) => ({
  ...s,
  rowData: a[s.columnName]
})), mt = (e, a, t) => {
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
    const c = e[l], b = ((u = (i = c.template) == null ? void 0 : i.body) == null ? void 0 : u.cell) || ((d = c.template) == null ? void 0 : d.bodyCell) || "buildBodyCell";
    if (!(b in t))
      throw new Error(`Cell template "${b}" for column "${c.columnName}" not found in inSpec`);
  }
  return !0;
}, ht = (e, a) => e.map((s) => {
  var i, u, d;
  const o = ((u = (i = s.template) == null ? void 0 : i.body) == null ? void 0 : u.cell) || ((d = s.template) == null ? void 0 : d.bodyCell) || "buildBodyCell", n = a[o];
  return m(s, n);
}), E = (e, a, t) => {
  var d, l, c;
  mt(e, a, t);
  const s = e, o = a, n = t, r = ((c = (l = (d = s[0]) == null ? void 0 : d.template) == null ? void 0 : l.body) == null ? void 0 : c.tr) || "buildBodyTr", i = n[r];
  return o.map((b) => {
    const y = m(b, i), z = pt(s, b), H = ht(z, n);
    return y.children = H, y;
  });
}, ft = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, yt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Ct = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, $t = {
  tagName: "td",
  children: [
    {
      tagName: "input",
      attributes: {
        type: "text",
        placeholder: "enter ${columnName}",
        name: "${columnName}",
        class: "form-control"
      }
    }
  ]
}, wt = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, gt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Nt = {
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
}, xt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, kt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Ft = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, F = {
  buildBodyTr: ft,
  buildColGroup: yt,
  buildHeader: Ct,
  buildFooter: $t,
  buildBodyCell: wt,
  button: gt,
  buttonCell: Nt,
  buildOption: xt,
  buildSelect: kt,
  buildDataList: Ft
}, Tt = "table", It = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Bt = [
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
], L = {
  tagName: Tt,
  attributes: It,
  children: Bt
}, At = [
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
], vt = [
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
], f = (e, a) => {
  var t;
  if (((t = e == null ? void 0 : e.attributes) == null ? void 0 : t["data-role"]) === a) return e;
  for (const s of (e == null ? void 0 : e.children) ?? []) {
    const o = f(s, a);
    if (o) return o;
  }
  return null;
}, jt = (e, a) => {
  const t = e[a.fileName], s = a.dataRole ? f(t, a.dataRole) : t;
  return (a.filePath ?? []).reduce((o, n) => o[n], s);
}, w = (e) => Array.isArray(e) ? e : [e], D = (e, a, t) => {
  e[a] = t;
}, Rt = (e, a, t) => {
  e[a].push(...w(t));
}, Pt = (e, a, t) => {
  e[a].unshift(...w(t));
}, St = (e, a, t) => {
  e[a].forEach((s) => {
    s.children.push(...structuredClone(w(t)));
  });
}, Et = (e, a, t) => {
  e[a].forEach((s) => {
    s.children.unshift(...structuredClone(w(t)));
  });
}, Lt = (e, a, t) => {
  e[a].forEach((s, o) => {
    const n = structuredClone(t);
    n.textContent = o + 1, s.children.unshift(n);
  });
}, Dt = {
  set: D,
  push: Rt,
  unshift: Pt,
  pushToRows: St,
  unshiftToRows: Et,
  unshiftSerialToRows: Lt
}, Ot = (e, a) => {
  const t = a.dataRole ? f(e[a.fileName], a.dataRole) : e[a.fileName], s = [...a.filePath ?? []], o = s.pop();
  return { parent: s.reduce((r, i) => r[i], t), key: o };
}, O = (e, a, t) => {
  const { parent: s, key: o } = Ot(e, a);
  (Dt[a.action] || D)(s, o, t);
}, Kt = (e, a, t) => {
  var n, r;
  const s = !!((n = e.sourcePath) != null && n.fileName && Array.isArray((r = e.sourcePath) == null ? void 0 : r.filePath)), o = `structure/sourcePath: ${s ? "passed" : "failed"}`;
  return t.push(o), a && console.log(o), s;
}, Wt = (e, a, t) => {
  var n, r;
  const s = !!((n = e.destinationPath) != null && n.fileName && Array.isArray((r = e.destinationPath) == null ? void 0 : r.filePath)), o = `structure/destinationPath: ${s ? "passed" : "failed"}`;
  return t.push(o), a && console.log(o), s;
}, qt = (e, a, t) => {
  const s = e.templateKey === void 0 || typeof e.templateKey == "string" && e.templateKey.length > 0, o = `structure/templateKey: ${s ? "passed" : "failed"}`;
  return t.push(o), a && console.log(o), s;
}, Vt = (e, a, t) => {
  const s = typeof e.func == "string" && e.func.length > 0, o = `structure/func: ${s ? "passed" : "failed"}`;
  return t.push(o), a && console.log(o), s;
}, zt = (e, a, t) => [
  Kt(e, a, t),
  Wt(e, a, t),
  qt(e, a, t),
  Vt(e, a, t)
].every(Boolean), Ht = (e, a, t, s) => {
  const o = typeof a[e.func] == "function", n = `references/func (${e.func}): ${o ? "passed" : "failed"}`;
  return s.push(n), t && console.log(n), o;
}, Ut = (e, a, t, s) => {
  const o = e.templateKey === void 0 || Object.hasOwn(a, e.templateKey), n = `references/templateKey${e.templateKey === void 0 ? " (not used)" : ` (${e.templateKey})`}: ${o ? "passed" : "failed"}`;
  return s.push(n), t && console.log(n), o;
}, Gt = (e, a, t, s, o) => {
  const n = Ht(e, a, s, o), r = Ut(e, t, s, o);
  return n && r;
}, K = (e, a, t, s, o) => zt(e, s, o) ? Gt(e, a, t, s, o) : !1, Mt = (e, a, t, s, o, n) => {
  if (!K(e, t, s, o, n)) return;
  const r = s, i = e.templateKey, u = r[i];
  console.log("templateKey ; ", i), console.log("localSpecKey ; ", u);
  const d = jt(a, e.sourcePath), l = t[e.func](d, u);
  i === "buildFooter" && console.log("result ; ", l), O(a, e.destinationPath, l);
}, Jt = (e, a, t, s, o, n) => {
  e.forEach((r) => {
    Mt(r, a, t, s, o, n);
  });
}, _t = (e, a, t, s, o, n) => {
  if (!K(e, t, s, o, n)) return;
  const r = t[e.func](
    a.data.columns,
    a.data.data,
    s
  );
  O(a, e.destinationPath, r);
}, Qt = (e, a, t, s, o, n) => {
  e.forEach((r) => {
    _t(r, a, t, s, o, n);
  });
}, N = { data: {}, base: L, spec: F }, B = { fromCollection: h, twoDimensional: E }, Xt = (e, a = !1, t = []) => (N.data = e, Jt(At, N, B, F, a, t), Qt(vt, N, B, F, a, t), L), A = ({
  inData: e,
  inColumns: a,
  inType: t,
  footer: s = [],
  options: o
} = {}) => Xt({
  columns: a,
  data: e
}), Yt = ({ inData: e = [], inColumns: a = [] } = {}) => ({
  data: e,
  columns: a
}), Zt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, te = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, ee = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, p = {
  buildOption: Zt,
  buildSelect: te,
  buildDataList: ee
}, ae = (e, a = p.buildOption) => {
  const t = structuredClone(a);
  return t.textContent = t.textContent.replace("rowValue", e), t.attributes.value = t.attributes.value.replace("rowValue", e), t;
}, se = (e, a) => {
  const t = a == null ? void 0 : a.columnName, s = structuredClone(p.buildSelect);
  s.attributes.id = t, s.attributes["data-name"] = t;
  const o = ae(t, p.buildOption);
  return s.children = h(e, o), s;
}, oe = ({ data: e, columns: a }) => a.map((t) => se(e, t)), ne = (e = {}) => {
  const { data: a, columns: t } = Yt(e);
  return oe({ data: a, columns: t });
}, re = ({ inData: e = [], inColumns: a = [] } = {}) => ({
  data: e,
  columns: a
}), le = (e, a = p.buildOption) => {
  const t = structuredClone(a);
  return t.textContent = t.textContent.replace("rowValue", e), t.attributes.value = t.attributes.value.replace("rowValue", e), t;
}, ie = (e, a) => {
  const t = a == null ? void 0 : a.columnName, s = le(t, p.buildOption);
  return h(e, s);
}, ce = ({ data: e, columns: a }) => a.map((t) => ie(e, t)), ue = (e = {}) => {
  const { data: a, columns: t } = re(e);
  return ce({ data: a, columns: t });
}, de = ({ inData: e = [], inColumns: a = [] } = {}) => ({
  data: e,
  columns: a
}), be = (e, a = p.buildOption) => {
  const t = structuredClone(a);
  return t.textContent = t.textContent.replace("rowValue", e), t.attributes.value = t.attributes.value.replace("rowValue", e), t;
}, pe = (e, a) => {
  const t = a == null ? void 0 : a.columnName, s = structuredClone(p.buildDataList);
  s.attributes.id = t, s.attributes["data-name"] = t;
  const o = be(t, p.buildOption);
  return s.children = h(e, o), s;
}, me = ({ data: e, columns: a }) => a.map((t) => pe(e, t)), v = (e = {}) => {
  const { data: a, columns: t } = de(e);
  return me({ data: a, columns: t });
}, he = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, fe = (e) => {
  const a = e;
  if (typeof globalThis > "u" || !a) return;
  globalThis.ks ?? (globalThis.ks = {});
  const t = typeof a == "function" ? a : a.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: he,
    render: t,
    ...typeof a == "object" ? a : {}
  };
}, ye = "input", Ce = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, $e = {
  tagName: ye,
  attributes: Ce
}, $ = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, s = structuredClone($e);
  return t.placeholder && (s.attributes.placeholder = t.placeholder), t.class && (s.attributes.class = t.class), t.id && (s.attributes.id = t.id), t.name && (s.attributes.name = t.name), t.type && (s.attributes.type = t.type), t.value && (s.attributes.value = t.value), s;
}, we = "div", ge = {
  class: "d-flex align-items-center gap-2"
}, Ne = [
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
], xe = {
  tagName: we,
  attributes: ge,
  children: Ne
}, g = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, s = structuredClone(xe), o = s.children[0], n = s.children[1];
  return t.label && (o.textContent = t.label), t.id && (o.attributes.for = t.id, n.attributes.id = t.id), t.placeholder && (n.attributes.placeholder = t.placeholder), t.class && (n.attributes.class = t.class), t.name && (n.attributes.name = t.name), t.type && (n.attributes.type = t.type), t.wrapperClass && (s.attributes.class = t.wrapperClass), t.labelClass && (o.attributes.class = t.labelClass), s;
}, ke = "div", Fe = {
  class: "d-flex align-items-center gap-2"
}, Te = [
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
], Ie = {
  tagName: ke,
  attributes: Fe,
  children: Te
}, I = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, s = structuredClone(Ie), o = s.children[0], n = s.children[1], r = s.children[2];
  return t.label && (o.textContent = t.label), t.id && (o.attributes.for = t.id, n.attributes.id = t.id), t.placeholder && (n.attributes.placeholder = t.placeholder), t.class && (n.attributes.class = t.class), t.name && (n.attributes.name = t.name), t.type && (n.attributes.type = t.type), t.buttonText && (r.textContent = t.buttonText), t.buttonClass && (r.attributes.class = t.buttonClass), t.buttonId && (r.attributes.id = t.buttonId), t.wrapperClass && (s.attributes.class = t.wrapperClass), t.labelClass && (o.attributes.class = t.labelClass), s;
}, Be = {
  input: $,
  inputOnly: $,
  inputWithLabel: g,
  inputWithLabelButton: I
}, Ae = ({
  type: e = "inputWithLabel",
  options: a = {},
  inType: t,
  inOptions: s
} = {}) => {
  const o = t ?? e, n = s ?? a;
  return (Be[o] || g)({ inOptions: n, options: n });
};
fe({
  render: Ae,
  inputOnly: $,
  inputWithLabel: g,
  inputWithLabelButton: I
});
const x = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a;
  return (t == null ? void 0 : t.label) === !1 || (t == null ? void 0 : t.flavour) === "inputOnly" ? $({ inOptions: t }) : (t == null ? void 0 : t.flavour) === "inputWithLabelButton" || t != null && t.button || t != null && t.buttonText ? I({ inOptions: t }) : g({ inOptions: t });
}, ve = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, je = (e) => {
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: ve, render: e });
}, Re = "div", Pe = {
  class: "${cardClass}",
  "data-role": "form-card"
}, Se = [
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
], Ee = {
  tagName: Re,
  attributes: Pe,
  children: Se
}, Le = () => structuredClone(Ee), De = "header-actions", Oe = "button", j = {
  destinationRole: De,
  template: Oe
}, Ke = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, We = {
  button: Ke
}, qe = (e, a) => {
  const t = structuredClone(e), s = h(a.header.actions, We[j.template]);
  return f(t, j.destinationRole).children.push(...s), t;
}, Ve = "form-body", ze = {
  destinationRole: Ve
}, He = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, Ue = {
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
}, Ge = {
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
}, Me = {
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
}, Je = {
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
}, _e = {
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
}, Qe = {
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
}, Xe = {
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
}, Ye = {
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
}, Ze = {
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
}, ta = {
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
}, ea = {
  buildBodyTr: He,
  buildBodyCell: Ue,
  buildRequiredField: Ge,
  buildTextareaField: Me,
  buildCheckboxField: Je,
  buildInlineField: _e,
  buildInlineRequiredField: Qe,
  buildInlineFieldWithButton: Xe,
  buildInlineRequiredFieldWithButton: Ye,
  buildInlineTextareaField: Ze,
  buildInlineCheckboxField: ta
}, aa = (e, a, t) => {
  const s = e.map((r) => {
    var d, l, c, b, y;
    const i = ((l = (d = r.template) == null ? void 0 : d.body) == null ? void 0 : l.cell) ?? (r.required ? "buildRequiredField" : "buildBodyCell");
    let u = ((c = t.fieldTemplates) == null ? void 0 : c[i]) ?? i;
    return r.buttonText && (u = ((b = t.buttonFieldTemplates) == null ? void 0 : b[u]) ?? u), {
      ...r,
      label: r.label ?? r.title ?? r.columnName,
      type: r.type ?? "text",
      placeholder: r.placeholder ?? "",
      buttonType: r.buttonType ?? "button",
      template: { ...r.template, body: { ...(y = r.template) == null ? void 0 : y.body, cell: u } }
    };
  }), o = a[0] ?? {}, n = Object.fromEntries(s.map((r) => [
    r.columnName,
    o[r.columnName] ?? r.value ?? ""
  ]));
  return { columns: s, rows: [n] };
}, sa = (e, a, t) => {
  const s = aa(a.columns, a.records, t.body), o = E(s.columns, s.rows, ea), n = structuredClone(e);
  return f(n, ze.destinationRole).children.push(...Array.isArray(o) ? o : [o]), n;
}, oa = "footer-actions", na = "button", R = {
  destinationRole: oa,
  template: na
}, ra = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, la = {
  button: ra
}, ia = (e, a) => {
  const t = structuredClone(e), s = h(a.footer.actions, la[R.template]);
  return f(t, R.destinationRole).children.push(...s), t;
}, W = ({ inColumns: e, inData: a, inOptions: t, columns: s, data: o, options: n } = {}) => ({
  columns: Array.isArray(e) && e.length > 0 ? e : Array.isArray(s) ? s : [],
  records: Array.isArray(a) && a.length > 0 ? a : Array.isArray(o) ? o : [],
  options: t && Object.keys(t).length > 0 ? t : n ?? {}
}), ca = "bigButtonsForm", ua = "Account details", da = "Update your profile information.", ba = "", pa = "label", ma = "stacked", ha = "saveCancel", fa = {
  formId: ca,
  title: ua,
  description: da,
  recordId: ba,
  header: pa,
  body: ma,
  footer: ha
}, ya = {
  actions: []
}, Ca = {
  actions: []
}, $a = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, wa = {
  actions: []
}, ga = {
  none: ya,
  label: Ca,
  labelWithRefresh: $a,
  labelWithId: wa
}, Na = {
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
}, xa = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, ka = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, Fa = {
  inline: Na,
  stacked: xa,
  threeColumns: ka
}, Ta = {
  actions: []
}, Ia = {
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
}, Ba = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, Aa = {
  none: Ta,
  saveCancel: Ia,
  edit: Ba
}, k = (e, a, t) => {
  const s = e[a];
  if (!s) throw new RangeError("Unknown bigButtons " + t + ": " + a);
  return s;
}, q = (e) => {
  if (typeof e != "object" || e === null || Array.isArray(e))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const a = e["form.bigButtons"] ?? {};
  if (typeof a != "object" || a === null || Array.isArray(a))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const t = { ...fa, ...a };
  return {
    options: t,
    header: k(ga, t.header, "header"),
    body: k(Fa, t.body, "body"),
    footer: k(Aa, t.footer, "footer")
  };
}, va = (e, a = {}) => {
  const t = W(a), s = q(t.options), o = qe(e, s), n = sa(o, t, s);
  return ia(n, s);
}, ja = {
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
}, Ra = {
  bootstrap: ja
}, Pa = (e, a) => {
  var s;
  const t = (s = Ra[a]) == null ? void 0 : s[e.header];
  if (!t) throw new RangeError("Unknown bigButtons header: " + e.header);
  return t;
}, Sa = "bootstrap", Ea = {
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
}, T = {
  defaultFramework: Sa,
  frameworks: Ea
}, La = (e, a) => {
  const t = T.frameworks[a];
  if (!t) throw new RangeError("Unknown bigButtons framework: " + a);
  const s = t.bodies[e.body];
  if (!s) throw new RangeError("Unknown bigButtons body: " + e.body);
  return { ...t.base, ...s };
}, Da = {
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
}, Oa = {
  bootstrap: Da
}, Ka = (e, a) => {
  const t = Oa[a], s = t == null ? void 0 : t.footers[e.footer];
  if (!t) throw new RangeError("Unknown bigButtons framework: " + a);
  if (!s) throw new RangeError("Unknown bigButtons footer: " + e.footer);
  return { ...t.base, ...s };
}, Wa = (e, a = {}) => {
  const t = q(W(a).options), { options: s } = t, o = s.framework ?? T.defaultFramework;
  if (!T.frameworks[o]) throw new RangeError("Unknown bigButtons framework: " + o);
  const r = Object.assign(
    {},
    s,
    La(s, o),
    Pa(s, o),
    Ka(s, o)
  );
  return m(r, structuredClone(e));
}, qa = (e = {}) => {
  const a = Le(), t = va(a, e);
  return Wa(t, e);
}, V = (e = {}) => {
  const a = { ...e, type: e.type ?? "form.bigButtons" };
  return P(a), qa(a);
};
je(V);
const Va = ({
  inType: e = "stacked",
  inData: a,
  inColumns: t
} = {}) => V({
  type: e,
  columns: t,
  data: a
}), za = {
  table: A,
  tableFromSpec: A,
  select: ne,
  selectOptionsOnly: ue,
  dataList: v,
  datalist: v,
  searchInput: x,
  search: x,
  inputRow: x,
  form: Va
}, Ha = (e = {}) => {
  P(e);
  const a = e == null ? void 0 : e.showLog, t = e.type;
  let s = t, o = t;
  if (t.includes(".")) {
    const i = t.split(".");
    s = i[0], o = i[1];
  }
  const n = za[s];
  if (!n)
    throw new Error(`Renderer for type "${s}" not found.`);
  const r = n({
    inType: o,
    inColumns: e.columns,
    inData: e.data,
    inOptions: e.options,
    options: e.options
  });
  return a && console.log("json-renderers-build output:", r), r;
};
G(Ha);
export {
  Ha as default,
  Ha as render
};
