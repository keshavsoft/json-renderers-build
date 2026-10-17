const U = {
  version: "1.22.0",
  name: "json-renderers-build"
}, X = (e) => {
  e && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: U,
    render: e
  });
}, Y = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.type;
  if (t === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof t != "string")
    throw new TypeError("type must be a string");
  return !0;
}, Z = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.data;
  if (t === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(t))
    throw new TypeError("data must be an Array");
  return !0;
}, tt = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.columns;
  if (t === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(t))
    throw new TypeError("columns must be an Array");
  return !0;
}, et = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.showLog;
  if (t !== void 0 && typeof t != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, rt = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return Y(a), Z(a), tt(a), et(a), !0;
}, at = "table", st = "", nt = [], ot = [], it = "", ct = "replace", lt = !1, x = {
  type: at,
  targetHtmlId: st,
  data: nt,
  columns: ot,
  classToApply: it,
  appendPosition: ct,
  showLog: lt
}, ut = (e) => {
  const a = typeof e == "object" && e !== null ? e.inKey ?? e.key : e;
  return a && a in x ? x[a] : { ...x };
};
Object.assign(ut, x);
const bt = (e) => typeof e == "object" && e !== null && !Array.isArray(e), dt = (e, a) => {
  if (!bt(e)) return;
  let t = {};
  for (const [r, n] of Object.entries(e))
    t[r] = g(a, n);
  return t;
}, pt = (e, a) => {
  const t = structuredClone(e);
  return Array.isArray(t) ? t.map((n) => g(a, n)) : void 0;
}, G = (e, a, t) => {
  if (e === "${agg:count}" && "rowData" in a) {
    if (Array.isArray(a == null ? void 0 : a.rowData))
      return a == null ? void 0 : a.rowData.length;
  } else
    return e === "${rowValue}" && "rowData" in a ? a == null ? void 0 : a.rowData : e.replace(/\$\{(\w+)\}/g, (r, n) => a[n] !== void 0 ? a[n] : r);
}, ft = (e, a) => G(e, a), ht = (e, a, t) => {
  if (a == null)
    throw new TypeError("inTemplate is required");
  if (typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inElement must be an object");
  return !0;
}, g = (e, a, t) => {
  const r = e, n = a;
  ht(r, n);
  const s = structuredClone(n);
  return typeof s == "string" ? G(s, r) : (s === null || typeof s != "object" || ("textContent" in s && (s.textContent = ft(s == null ? void 0 : s.textContent, r)), "attributes" in s && (s.attributes = dt(s == null ? void 0 : s.attributes, r)), "children" in s && (s.children = pt(s == null ? void 0 : s.children, r))), s);
}, yt = (e, a) => {
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
}, I = (e, a) => {
  const t = e, r = a;
  return yt(t, r), t.map((n) => g(n, r));
}, mt = (e, a) => e.map((r) => ({
  ...r,
  rowData: a[r.columnName]
})), wt = (e, a, t) => {
  var n, s, l, b, o, u;
  if (!Array.isArray(e))
    throw new TypeError("inColumns must be an Array");
  if (e.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let i = 0; i < e.length; i++) {
    const c = e[i];
    if (!c || typeof c != "object")
      throw new TypeError(`inColumns[${i}] must be an object`);
    if (typeof c.columnName != "string" || !c.columnName.trim())
      throw new TypeError(`inColumns[${i}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(a))
    throw new TypeError("inData must be an Array");
  for (let i = 0; i < a.length; i++) {
    const c = a[i];
    if (!c || typeof c != "object")
      throw new TypeError(`inData[${i}] must be an object`);
  }
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inSpec must be an object");
  const r = ((l = (s = (n = e[0]) == null ? void 0 : n.template) == null ? void 0 : s.body) == null ? void 0 : l.tr) || "buildBodyTr";
  if (!(r in t))
    throw new Error(`Row template "${r}" not found in inSpec`);
  for (let i = 0; i < e.length; i++) {
    const c = e[i], d = ((o = (b = c.template) == null ? void 0 : b.body) == null ? void 0 : o.cell) || ((u = c.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(d in t))
      throw new Error(`Cell template "${d}" for column "${c.columnName}" not found in inSpec`);
  }
  return !0;
}, gt = (e, a) => e.map((r) => {
  var b, o, u;
  const n = ((o = (b = r.template) == null ? void 0 : b.body) == null ? void 0 : o.cell) || ((u = r.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", s = a[n];
  return g(r, s);
}), $t = (e, a, t) => {
  var u, i, c;
  wt(e, a, t);
  const r = e, n = a, s = t, l = ((c = (i = (u = r[0]) == null ? void 0 : u.template) == null ? void 0 : i.body) == null ? void 0 : c.tr) || "buildBodyTr", b = s[l];
  return n.map((d) => {
    const f = g(d, b), $ = mt(r, d), C = gt($, s);
    return f.children = C, f;
  });
}, E = (e, a) => {
  var t;
  if (((t = e == null ? void 0 : e.attributes) == null ? void 0 : t["data-role"]) === a) return e;
  for (const r of (e == null ? void 0 : e.children) ?? []) {
    const n = E(r, a);
    if (n) return n;
  }
  return null;
}, Ct = (e, a) => {
  const t = e[a.fileName], r = a.dataRole ? E(t, a.dataRole) : t;
  return (a.filePath ?? []).reduce((n, s) => n[s], r);
}, Nt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, xt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, At = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Tt = {
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
}, jt = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, It = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Lt = {
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
}, Bt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, vt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, R = {
  buildBodyTr: Nt,
  buildColGroup: xt,
  buildHeader: At,
  buildFooter: Tt,
  buildBodyCell: jt,
  button: It,
  buttonCell: Lt,
  buildOption: St,
  buildSelect: Bt,
  buildDataList: vt
}, Et = "table", Rt = {
  class: "table table-hover table-striped align-middle border mb-0"
}, kt = [
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
], _ = {
  tagName: Et,
  attributes: Rt,
  children: kt
}, Dt = [
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
], Pt = [
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
], N = (e) => Array.isArray(e) ? e : [e], F = {
  set: (e, a, t) => {
    e[a] = t;
  },
  push: (e, a, t) => {
    e[a].push(...N(t));
  },
  unshift: (e, a, t) => {
    e[a].unshift(...N(t));
  },
  pushToRows: (e, a, t) => {
    e[a].forEach((r) => {
      r.children.push(...structuredClone(N(t)));
    });
  },
  unshiftToRows: (e, a, t) => {
    e[a].forEach((r) => {
      r.children.unshift(...structuredClone(N(t)));
    });
  },
  unshiftSerialToRows: (e, a, t) => {
    e[a].forEach((r, n) => {
      const s = structuredClone(t);
      s.textContent = n + 1, r.children.unshift(s);
    });
  }
}, O = (e, a, t) => {
  const r = a.dataRole ? E(e[a.fileName], a.dataRole) : e[a.fileName], n = [...a.filePath ?? []], s = n.pop(), l = n.reduce((o, u) => o[u], r);
  (F[a.action] || F.set)(l, s, t);
}, m = { data: {}, base: _, spec: R }, q = {
  fromCollection: I,
  twoDimensional: $t
}, Ft = (e) => {
  e.forEach((a) => {
    const t = Ct(m, a.sourcePath);
    if (t) {
      const r = q[a.func](t, R[a.templateKey]);
      O(m, a.destinationPath, r);
    } else
      console.log("   !instruction : ", a), console.log("   !source : ", t);
  });
}, Wt = (e) => {
  e.forEach((a) => {
    const t = q[a.func](
      m.data.columns,
      m.data.data,
      R
    );
    O(m, a.destinationPath, t);
  });
}, Kt = (e) => (m.data = e, Ft(Dt), Wt(Pt), _), W = ({
  inData: e,
  inColumns: a,
  inType: t,
  footer: r = [],
  options: n
} = {}) => Kt({
  columns: a,
  data: e
}), Mt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Vt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Ht = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, w = {
  buildOption: Mt,
  buildSelect: Vt,
  buildDataList: Ht
}, Gt = ({ inData: e = [] } = {}) => {
  const a = (e ?? []).map(
    (r) => typeof r == "object" && r !== null ? r : { rowValue: r }
  ), t = structuredClone(w.buildSelect);
  return t.children = I(a, w.buildOption), t;
}, _t = ({ inData: e = [], inColumns: a = [] } = {}) => a.map((r) => {
  const n = structuredClone(w.buildOption);
  n.textContent = n.textContent.replace("rowValue", r.columnName), n.attributes.value = n.attributes.value.replace("rowValue", r.columnName);
  const s = I(e, n);
  return console.log("createdArray : ", s[0], n), s;
}), K = ({ inData: e = [] } = {}) => {
  const a = (e ?? []).map(
    (r) => typeof r == "object" && r !== null ? r : { rowValue: r }
  ), t = structuredClone(w.buildDataList);
  return t.children = I(a, w.buildOption), t;
}, Ot = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, qt = (e) => {
  const a = e;
  if (typeof globalThis > "u" || !a) return;
  globalThis.ks ?? (globalThis.ks = {});
  const t = typeof a == "function" ? a : a.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: Ot,
    render: t,
    ...typeof a == "object" ? a : {}
  };
}, zt = "input", Jt = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, Qt = {
  tagName: zt,
  attributes: Jt
}, T = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, r = structuredClone(Qt);
  return t.placeholder && (r.attributes.placeholder = t.placeholder), t.class && (r.attributes.class = t.class), t.id && (r.attributes.id = t.id), t.name && (r.attributes.name = t.name), t.type && (r.attributes.type = t.type), t.value && (r.attributes.value = t.value), r;
}, Ut = "div", Xt = {
  class: "d-flex align-items-center gap-2"
}, Yt = [
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
], Zt = {
  tagName: Ut,
  attributes: Xt,
  children: Yt
}, L = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, r = structuredClone(Zt), n = r.children[0], s = r.children[1];
  return t.label && (n.textContent = t.label), t.id && (n.attributes.for = t.id, s.attributes.id = t.id), t.placeholder && (s.attributes.placeholder = t.placeholder), t.class && (s.attributes.class = t.class), t.name && (s.attributes.name = t.name), t.type && (s.attributes.type = t.type), t.wrapperClass && (r.attributes.class = t.wrapperClass), t.labelClass && (n.attributes.class = t.labelClass), r;
}, te = "div", ee = {
  class: "d-flex align-items-center gap-2"
}, re = [
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
], ae = {
  tagName: te,
  attributes: ee,
  children: re
}, k = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, r = structuredClone(ae), n = r.children[0], s = r.children[1], l = r.children[2];
  return t.label && (n.textContent = t.label), t.id && (n.attributes.for = t.id, s.attributes.id = t.id), t.placeholder && (s.attributes.placeholder = t.placeholder), t.class && (s.attributes.class = t.class), t.name && (s.attributes.name = t.name), t.type && (s.attributes.type = t.type), t.buttonText && (l.textContent = t.buttonText), t.buttonClass && (l.attributes.class = t.buttonClass), t.buttonId && (l.attributes.id = t.buttonId), t.wrapperClass && (r.attributes.class = t.wrapperClass), t.labelClass && (n.attributes.class = t.labelClass), r;
}, se = {
  input: T,
  inputOnly: T,
  inputWithLabel: L,
  inputWithLabelButton: k
}, ne = ({
  type: e = "inputWithLabel",
  options: a = {},
  inType: t,
  inOptions: r
} = {}) => {
  const n = t ?? e, s = r ?? a;
  return (se[n] || L)({ inOptions: s, options: s });
};
qt({
  render: ne,
  inputOnly: T,
  inputWithLabel: L,
  inputWithLabelButton: k
});
const B = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a;
  return (t == null ? void 0 : t.label) === !1 || (t == null ? void 0 : t.flavour) === "inputOnly" ? T({ inOptions: t }) : (t == null ? void 0 : t.flavour) === "inputWithLabelButton" || t != null && t.button || t != null && t.buttonText ? k({ inOptions: t }) : L({ inOptions: t });
}, oe = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.type;
  if (t === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof t != "string")
    throw new TypeError("type must be a string");
  return !0;
}, ie = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.data;
  if (t === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(t))
    throw new TypeError("data must be an Array");
  return !0;
}, ce = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.columns;
  if (t === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(t))
    throw new TypeError("columns must be an Array");
  return !0;
}, le = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.showLog;
  if (t !== void 0 && typeof t != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, ue = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return oe(a), ie(a), ce(a), le(a), !0;
}, be = "table", de = "", pe = [], fe = [], he = "", ye = "replace", me = !1, A = {
  type: be,
  targetHtmlId: de,
  data: pe,
  columns: fe,
  classToApply: he,
  appendPosition: ye,
  showLog: me
}, we = (e) => {
  const a = typeof e == "object" && e !== null ? e.inKey ?? e.key : e;
  return a && a in A ? A[a] : { ...A };
};
Object.assign(we, A);
const ge = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, $e = (e) => {
  const a = e;
  typeof globalThis > "u" || !a || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = {
    meta: ge,
    render: a
  });
}, Ce = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "appFormId"
  },
  children: []
}, Ne = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: []
}, xe = {
  tagName: "label",
  textContent: "Label",
  attributes: {
    class: "form-label fw-semibold",
    for: "fieldId"
  }
}, Ae = {
  tagName: "input",
  attributes: {
    type: "text",
    placeholder: "",
    class: "form-control",
    id: "fieldId",
    name: "fieldName"
  }
}, Te = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, y = {
  form: Ce,
  fieldWrapper: Ne,
  label: xe,
  input: Ae,
  submitButton: Te
}, je = ({ inColumn: e, inRow: a = {}, inIndex: t = 0 } = {}) => {
  var $, C;
  const r = e, n = a, s = t, l = (r == null ? void 0 : r.columnName) ?? `field_${s}`, b = (r == null ? void 0 : r.type) ?? "text", o = (r == null ? void 0 : r.label) ?? (r == null ? void 0 : r.title) ?? l, u = (r == null ? void 0 : r.id) ?? `form-${s}-${l.toLowerCase()}`, i = n[l] ?? (r == null ? void 0 : r.value), c = structuredClone(y.fieldWrapper), d = structuredClone(y.label);
  if (d.textContent = o, d.attributes.for = u, b === "checkbox") {
    c.attributes.class = "form-check mb-3";
    const p = structuredClone(y.input);
    return p.attributes.type = "checkbox", p.attributes.class = "form-check-input", p.attributes.id = u, p.attributes.name = l, p.attributes.value = "true", p.properties = { checked: !!(i ?? (r == null ? void 0 : r.checked) ?? !1) }, d.attributes.class = "form-check-label", c.children = [p, d], c;
  }
  if (b === "textarea") {
    const p = {
      tagName: "textarea",
      textContent: i ? String(i) : "",
      attributes: {
        class: (r == null ? void 0 : r.class) ?? "form-control",
        rows: String((r == null ? void 0 : r.rows) ?? 3),
        id: u,
        name: l,
        placeholder: (r == null ? void 0 : r.placeholder) ?? ""
      }
    };
    return c.children = [d, p], c;
  }
  if (b === "select") {
    const p = {
      tagName: "select",
      attributes: {
        class: (r == null ? void 0 : r.class) ?? "form-select",
        id: u,
        name: l
      },
      children: ((r == null ? void 0 : r.options) ?? []).map((h) => {
        const P = String(typeof h == "object" ? h.value : h), J = typeof h == "object" ? h.label ?? h.value : String(h), Q = i != null && String(i) === P;
        return {
          tagName: "option",
          textContent: J,
          attributes: {
            value: P,
            ...Q ? { selected: !0 } : {}
          }
        };
      })
    };
    return c.children = [d, p], c;
  }
  const f = structuredClone(y.input);
  if (f.attributes.type = b, f.attributes.id = u, f.attributes.name = l, r != null && r.placeholder && (f.attributes.placeholder = r.placeholder), r != null && r.class && (f.attributes.class = r.class), i != null && (f.attributes.value = String(i)), r != null && r.buttonText || r != null && r.button) {
    const p = {
      tagName: "button",
      textContent: r.buttonText ?? (($ = r.button) == null ? void 0 : $.text) ?? "Action",
      attributes: {
        type: "button",
        class: r.buttonClass ?? ((C = r.button) == null ? void 0 : C.class) ?? "btn btn-success",
        id: r.buttonId ?? `${u}-btn`
      }
    };
    return c.children = [d, f, p], c;
  }
  return c.children = [d, f], c;
}, j = ({ inColumns: e = [], inData: a = [], inOptions: t = {}, columns: r, data: n, options: s } = {}) => {
  const l = Array.isArray(e) && e.length > 0 ? e : Array.isArray(r) ? r : [], b = Array.isArray(a) && a.length > 0 ? a : Array.isArray(n) ? n : [], o = t && Object.keys(t).length > 0 ? t : s ?? {}, u = b[0] ?? {}, i = structuredClone(y.form);
  if (o != null && o.formId && (i.attributes.id = o.formId), o != null && o.className && (i.attributes.class = o.className), i.children = l.map(
    (c, d) => je({ inColumn: c, inRow: u, inIndex: d })
  ), (o == null ? void 0 : o.showSubmit) !== !1 && (o == null ? void 0 : o.submitButton) !== !1) {
    const c = structuredClone(y.submitButton);
    o != null && o.submitLabel && (c.textContent = o.submitLabel), o != null && o.submitClass && (c.attributes.class = o.submitClass), i.children.push(c);
  }
  return i;
}, Ie = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "inlineFormId"
  },
  children: []
}, Le = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, M = {
  form: Ie,
  submitButton: Le
}, Se = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, Be = (e) => {
  const a = e;
  if (typeof globalThis > "u" || !a) return;
  globalThis.ks ?? (globalThis.ks = {});
  const t = typeof a == "function" ? a : a.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: Se,
    render: t,
    ...typeof a == "object" ? a : {}
  };
}, ve = "input", Ee = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, Re = {
  tagName: ve,
  attributes: Ee
}, v = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, r = structuredClone(Re);
  return t.placeholder && (r.attributes.placeholder = t.placeholder), t.class && (r.attributes.class = t.class), t.id && (r.attributes.id = t.id), t.name && (r.attributes.name = t.name), t.type && (r.attributes.type = t.type), t.value && (r.attributes.value = t.value), r;
}, ke = "div", De = {
  class: "d-flex align-items-center gap-2"
}, Pe = [
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
], Fe = {
  tagName: ke,
  attributes: De,
  children: Pe
}, S = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, r = structuredClone(Fe), n = r.children[0], s = r.children[1];
  return t.label && (n.textContent = t.label), t.id && (n.attributes.for = t.id, s.attributes.id = t.id), t.placeholder && (s.attributes.placeholder = t.placeholder), t.class && (s.attributes.class = t.class), t.name && (s.attributes.name = t.name), t.type && (s.attributes.type = t.type), t.wrapperClass && (r.attributes.class = t.wrapperClass), t.labelClass && (n.attributes.class = t.labelClass), r;
}, We = "div", Ke = {
  class: "d-flex align-items-center gap-2"
}, Me = [
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
], Ve = {
  tagName: We,
  attributes: Ke,
  children: Me
}, D = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, r = structuredClone(Ve), n = r.children[0], s = r.children[1], l = r.children[2];
  return t.label && (n.textContent = t.label), t.id && (n.attributes.for = t.id, s.attributes.id = t.id), t.placeholder && (s.attributes.placeholder = t.placeholder), t.class && (s.attributes.class = t.class), t.name && (s.attributes.name = t.name), t.type && (s.attributes.type = t.type), t.buttonText && (l.textContent = t.buttonText), t.buttonClass && (l.attributes.class = t.buttonClass), t.buttonId && (l.attributes.id = t.buttonId), t.wrapperClass && (r.attributes.class = t.wrapperClass), t.labelClass && (n.attributes.class = t.labelClass), r;
}, He = {
  input: v,
  inputOnly: v,
  inputWithLabel: S,
  inputWithLabelButton: D
}, Ge = ({
  type: e = "inputWithLabel",
  options: a = {},
  inType: t,
  inOptions: r
} = {}) => {
  const n = t ?? e, s = r ?? a;
  return (He[n] || S)({ inOptions: s, options: s });
};
Be({
  render: Ge,
  inputOnly: v,
  inputWithLabel: S,
  inputWithLabelButton: D
});
const _e = ({ inColumn: e, inRow: a = {}, inIndex: t = 0 } = {}) => {
  var c, d;
  const r = e, n = a, s = t, l = (r == null ? void 0 : r.columnName) ?? `field_${s}`, b = (r == null ? void 0 : r.type) ?? "text", o = (r == null ? void 0 : r.label) ?? (r == null ? void 0 : r.title) ?? l, u = (r == null ? void 0 : r.id) ?? `form-${s}-${l.toLowerCase()}`, i = n[l] ?? (r == null ? void 0 : r.value);
  return r != null && r.buttonText || r != null && r.button ? D({
    inOptions: {
      label: o,
      type: b,
      id: u,
      name: l,
      placeholder: (r == null ? void 0 : r.placeholder) ?? "",
      class: (r == null ? void 0 : r.class) ?? "form-control",
      value: i != null ? String(i) : void 0,
      buttonText: r.buttonText ?? ((c = r.button) == null ? void 0 : c.text) ?? "Action",
      buttonClass: r.buttonClass ?? ((d = r.button) == null ? void 0 : d.class) ?? "btn btn-outline-primary",
      buttonId: r.buttonId ?? `${u}-btn`,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  }) : S({
    inOptions: {
      label: o,
      type: b,
      id: u,
      name: l,
      placeholder: (r == null ? void 0 : r.placeholder) ?? "",
      class: (r == null ? void 0 : r.class) ?? "form-control",
      value: i != null ? String(i) : void 0,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  });
}, V = ({ inColumns: e = [], inData: a = [], inOptions: t = {}, columns: r, data: n, options: s } = {}) => {
  const l = Array.isArray(e) && e.length > 0 ? e : Array.isArray(r) ? r : [], b = Array.isArray(a) && a.length > 0 ? a : Array.isArray(n) ? n : [], o = t && Object.keys(t).length > 0 ? t : s ?? {}, u = b[0] ?? {}, i = structuredClone(M.form);
  if (o != null && o.formId && (i.attributes.id = o.formId), o != null && o.className && (i.attributes.class = o.className), i.children = l.map(
    (c, d) => _e({ inColumn: c, inRow: u, inIndex: d })
  ), (o == null ? void 0 : o.showSubmit) !== !1 && (o == null ? void 0 : o.submitButton) !== !1) {
    const c = structuredClone(M.submitButton);
    o != null && o.submitLabel && (c.textContent = o.submitLabel), o != null && o.submitClass && (c.attributes.class = o.submitClass), i.children.push(c);
  }
  return i;
}, Oe = {
  tagName: "div",
  attributes: {
    class: "d-flex align-items-center gap-2 mt-3"
  },
  children: [
    {
      tagName: "button",
      textContent: "Submit",
      attributes: {
        type: "submit",
        class: "btn btn-primary",
        id: "submitBtnId"
      }
    },
    {
      tagName: "button",
      textContent: "Cancel",
      attributes: {
        type: "button",
        class: "btn btn-secondary",
        id: "cancelBtnId"
      }
    }
  ]
}, qe = {
  buttonBar: Oe
}, H = ({ inColumns: e = [], inData: a = [], inOptions: t = {}, columns: r, data: n, options: s } = {}) => {
  const l = Array.isArray(e) && e.length > 0 ? e : Array.isArray(r) ? r : [], b = Array.isArray(a) && a.length > 0 ? a : Array.isArray(n) ? n : [], o = t && Object.keys(t).length > 0 ? t : s ?? {}, u = j({
    inColumns: l,
    inData: b,
    inOptions: { ...o, submitButton: !1, showSubmit: !1 }
  }), i = structuredClone(qe.buttonBar);
  return o.submitLabel && (i.children[0].textContent = o.submitLabel), o.cancelLabel && (i.children[1].textContent = o.cancelLabel), u.children.push(i), u;
}, ze = {
  stacked: j,
  vertical: j,
  inline: V,
  horizontal: V,
  withButtons: H,
  buttons: H
}, z = (e = {}) => (e.type ?? (e.type = "stacked"), ue(e), (ze[e.type] || j)({
  inColumns: e.columns,
  inData: e.data,
  inOptions: e.options
}));
$e(z);
const Je = ({
  inType: e = "stacked",
  inData: a,
  inColumns: t
} = {}) => z({
  type: e,
  columns: t,
  data: a
}), Qe = {
  table: W,
  tableFromSpec: W,
  select: Gt,
  selectOptionsOnly: _t,
  dataList: K,
  datalist: K,
  searchInput: B,
  search: B,
  inputRow: B,
  form: Je
}, Ue = (e = {}) => {
  rt(e);
  const a = e == null ? void 0 : e.showLog, t = e.type;
  let r = t, n = t;
  if (t.includes(".")) {
    const b = t.split(".");
    r = b[0], n = b[1];
  }
  const s = Qe[r];
  if (!s)
    throw new Error(`Renderer for type "${r}" not found.`);
  const l = s({
    inType: n,
    inColumns: e.columns,
    inData: e.data,
    inOptions: e.options,
    options: e.options
  });
  return a && console.log("json-renderers-build output:", l), l;
};
X(Ue);
export {
  Ue as default,
  Ue as render
};
