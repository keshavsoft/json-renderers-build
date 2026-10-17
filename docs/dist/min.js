const tt = {
  version: "1.22.0",
  name: "json-renderers-build"
}, et = (r) => {
  const t = r;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof t == "function" ? t : t.render, n = typeof t == "object" ? t.getSpec : void 0;
  globalThis.ks.jsonRenderersBuild = {
    meta: tt,
    renderToDom: e,
    render: e,
    ...n ? { getSpec: n } : {},
    ...typeof t == "object" ? t : {}
  };
}, R = ["table", "tableFromSpec", "select", "selectOptionsOnly", "dataList", "datalist", "searchInput", "search", "inputRow", "form"], rt = ["table", "tableFromSpec"], K = ["text", "email", "number", "tel", "url", "password", "search", "date", "datetime-local", "time", "month", "week", "color", "textarea", "select", "checkbox"], Y = ({ inConfig: r } = {}) => {
  const t = r;
  if (!t || typeof t != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  if (typeof t.type != "string" || !R.includes(t.type))
    throw console.error(`type must be one of: ${R.join(", ")}`), new Error(`type must be one of: ${R.join(", ")}`);
  if (t.showLog !== void 0 && typeof t.showLog != "boolean")
    throw console.error("showLog must be a boolean"), new TypeError("showLog must be a boolean");
  if (!Array.isArray(t.data))
    throw console.error("data must be an Array"), new TypeError("data must be an Array");
  if (rt.includes(t.type)) {
    if (!Array.isArray(t.columns))
      throw console.error("columns must be an array for table rendering"), new TypeError("columns must be an array for table rendering");
    for (let e = 0; e < t.columns.length; e++) {
      const n = t.columns[e];
      if (!n || typeof n != "object")
        throw console.error(`columns[${e}] must be an object`), new TypeError(`columns[${e}] must be an object`);
      if (typeof n.columnName != "string" || !n.columnName.trim())
        throw console.error(`columns[${e}].columnName must be a non-empty string`), new TypeError(`columns[${e}].columnName must be a non-empty string`);
    }
    for (let e = 0; e < t.data.length; e++) {
      const n = t.data[e];
      if (!n || typeof n != "object")
        throw console.error(`data[${e}] must be an object`), new TypeError(`data[${e}] must be an object`);
    }
    if (t.columns.length > 0 && t.data.length > 0) {
      const e = t.columns.map((a) => a.columnName), n = Object.keys(t.data[0]);
      if (!e.some((a) => n.includes(a))) {
        const a = `Data alignment error: None of the columns [${e.join(", ")}] match any keys in data rows [${n.join(", ")}]`;
        throw console.error(a), new Error(a);
      }
    }
  }
  if (t.type === "form") {
    if (!Array.isArray(t.columns))
      throw new TypeError("columns must be an array for form rendering");
    t.columns.forEach((e, n) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new TypeError(`columns[${n}] must be an object`);
      if (typeof e.columnName != "string" || !e.columnName.trim())
        throw new TypeError(`columns[${n}].columnName must be a non-empty string`);
      if (e.type !== void 0 && !K.includes(e.type))
        throw new TypeError(`columns[${n}].type must be one of: ${K.join(", ")}`);
      if (e.options !== void 0 && !Array.isArray(e.options))
        throw new TypeError(`columns[${n}].options must be an array`);
    });
    for (let e = 0; e < t.data.length; e++) {
      const n = t.data[e];
      if (!n || typeof n != "object" || Array.isArray(n))
        throw new TypeError(`data[${e}] must be an object for form rendering`);
    }
  }
  return !0;
}, ot = "table", nt = [], at = [], st = {}, ct = !1, g = {
  type: ot,
  columns: nt,
  data: at,
  options: st,
  showLog: ct
}, it = [
  {
    columnName: "Name",
    width: "150px"
  },
  {
    columnName: "Designation",
    width: "100px"
  }
], lt = [
  {
    Name: "Keshav",
    Designation: "Founder"
  }
], ut = {
  columns: it,
  data: lt
}, w = {
  ...g,
  ...ut
}, k = ({
  type: r = w.type,
  data: t = w.data,
  columns: e = w.columns,
  options: n = w.options,
  showLog: o = w.showLog
} = {}) => {
  const c = {
    type: r,
    data: t,
    columns: e,
    options: n,
    showLog: o
  };
  return Y({ inConfig: c }), c;
};
Object.assign(k, w);
k.toJSON = () => structuredClone(w);
const dt = (r) => typeof r == "object" && r !== null && !Array.isArray(r), bt = (r, t) => {
  if (!dt(r)) return;
  let e = {};
  for (const [n, o] of Object.entries(r))
    e[n] = C(t, o);
  return e;
}, ft = (r, t) => {
  const e = structuredClone(r);
  return Array.isArray(e) ? e.map((o) => C(t, o)) : void 0;
}, H = (r, t, e) => {
  if (r === "${agg:count}" && "rowData" in t) {
    if (Array.isArray(t == null ? void 0 : t.rowData))
      return t == null ? void 0 : t.rowData.length;
  } else
    return r === "${rowValue}" && "rowData" in t ? t == null ? void 0 : t.rowData : r.replace(/\$\{(\w+)\}/g, (n, o) => t[o] !== void 0 ? t[o] : n);
}, mt = (r, t) => H(r, t), pt = (r, t, e) => {
  if (t == null)
    throw new TypeError("inTemplate is required");
  if (typeof t != "object" && typeof t != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!r || typeof r != "object" || Array.isArray(r))
    throw new TypeError("inElement must be an object");
  return !0;
}, C = (r, t, e) => {
  const n = r, o = t;
  pt(n, o);
  const a = structuredClone(o);
  return typeof a == "string" ? H(a, n) : (a === null || typeof a != "object" || ("textContent" in a && (a.textContent = mt(a == null ? void 0 : a.textContent, n)), "attributes" in a && (a.attributes = bt(a == null ? void 0 : a.attributes, n)), "children" in a && (a.children = ft(a == null ? void 0 : a.children, n))), a);
}, ht = (r, t) => {
  if (!Array.isArray(r))
    throw new TypeError("inSource must be an Array");
  if (r.length === 0)
    throw new Error("inSource cannot be empty");
  for (let e = 0; e < r.length; e++)
    if (!r[e] || typeof r[e] != "object")
      throw new TypeError(`inSource[${e}] must be an object`);
  if (!t || typeof t != "object" && typeof t != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, L = (r, t) => {
  const e = r, n = t;
  return ht(e, n), e.map((o) => C(o, n));
}, yt = (r, t) => r.map((n) => ({
  ...n,
  rowData: t[n.columnName]
})), wt = (r, t, e) => {
  var o, a, l, d, s, u;
  if (!Array.isArray(r))
    throw new TypeError("inColumns must be an Array");
  if (r.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let c = 0; c < r.length; c++) {
    const i = r[c];
    if (!i || typeof i != "object")
      throw new TypeError(`inColumns[${c}] must be an object`);
    if (typeof i.columnName != "string" || !i.columnName.trim())
      throw new TypeError(`inColumns[${c}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(t))
    throw new TypeError("inData must be an Array");
  for (let c = 0; c < t.length; c++) {
    const i = t[c];
    if (!i || typeof i != "object")
      throw new TypeError(`inData[${c}] must be an object`);
  }
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inSpec must be an object");
  const n = ((l = (a = (o = r[0]) == null ? void 0 : o.template) == null ? void 0 : a.body) == null ? void 0 : l.tr) || "buildBodyTr";
  if (!(n in e))
    throw new Error(`Row template "${n}" not found in inSpec`);
  for (let c = 0; c < r.length; c++) {
    const i = r[c], b = ((s = (d = i.template) == null ? void 0 : d.body) == null ? void 0 : s.cell) || ((u = i.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(b in e))
      throw new Error(`Cell template "${b}" for column "${i.columnName}" not found in inSpec`);
  }
  return !0;
}, gt = (r, t) => r.map((n) => {
  var d, s, u;
  const o = ((s = (d = n.template) == null ? void 0 : d.body) == null ? void 0 : s.cell) || ((u = n.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", a = t[o];
  return C(n, a);
}), Nt = (r, t, e) => {
  var u, c, i;
  wt(r, t, e);
  const n = r, o = t, a = e, l = ((i = (c = (u = n[0]) == null ? void 0 : u.template) == null ? void 0 : c.body) == null ? void 0 : i.tr) || "buildBodyTr", d = a[l];
  return o.map((b) => {
    const p = C(b, d), E = yt(n, b), T = gt(E, a);
    return p.children = T, p;
  });
}, P = (r, t) => {
  var e;
  if (((e = r == null ? void 0 : r.attributes) == null ? void 0 : e["data-role"]) === t) return r;
  for (const n of (r == null ? void 0 : r.children) ?? []) {
    const o = P(n, t);
    if (o) return o;
  }
  return null;
}, $t = (r, t) => {
  const e = r[t.fileName], n = t.dataRole ? P(e, t.dataRole) : e;
  return (t.filePath ?? []).reduce((o, a) => o[a], n);
}, jt = {
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
}, Ct = {
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
}, At = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Lt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, St = {
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
}, It = {
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
}, Rt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, B = {
  buildBodyTr: jt,
  buildColGroup: xt,
  buildHeader: Ct,
  buildFooter: Tt,
  buildBodyCell: At,
  button: Lt,
  buttonCell: St,
  buildOption: It,
  buildSelect: Et,
  buildDataList: Rt
}, Dt = "table", Ft = {
  class: "table table-hover table-striped align-middle border mb-0"
}, vt = [
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
], q = {
  tagName: Dt,
  attributes: Ft,
  children: vt
}, kt = [
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
], A = (r) => Array.isArray(r) ? r : [r], M = {
  set: (r, t, e) => {
    r[t] = e;
  },
  push: (r, t, e) => {
    r[t].push(...A(e));
  },
  unshift: (r, t, e) => {
    r[t].unshift(...A(e));
  },
  pushToRows: (r, t, e) => {
    r[t].forEach((n) => {
      n.children.push(...structuredClone(A(e)));
    });
  },
  unshiftToRows: (r, t, e) => {
    r[t].forEach((n) => {
      n.children.unshift(...structuredClone(A(e)));
    });
  },
  unshiftSerialToRows: (r, t, e) => {
    r[t].forEach((n, o) => {
      const a = structuredClone(e);
      a.textContent = o + 1, n.children.unshift(a);
    });
  }
}, U = (r, t, e) => {
  const n = t.dataRole ? P(r[t.fileName], t.dataRole) : r[t.fileName], o = [...t.filePath ?? []], a = o.pop(), l = o.reduce((s, u) => s[u], n);
  (M[t.action] || M.set)(l, a, e);
}, N = { data: {}, base: q, spec: B }, z = {
  fromCollection: L,
  twoDimensional: Nt
}, Bt = (r) => {
  r.forEach((t) => {
    const e = $t(N, t.sourcePath);
    if (e) {
      const n = z[t.func](e, B[t.templateKey]);
      U(N, t.destinationPath, n);
    } else
      console.log("   !instruction : ", t), console.log("   !source : ", e);
  });
}, Vt = (r) => {
  r.forEach((t) => {
    const e = z[t.func](
      N.data.columns,
      N.data.data,
      B
    );
    U(N, t.destinationPath, e);
  });
}, Wt = (r) => (N.data = r, Bt(kt), Vt(Pt), q), G = ({
  inData: r,
  inColumns: t,
  footer: e = [],
  options: n
} = {}) => Wt({
  columns: t,
  data: r
}), _t = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Kt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Mt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, x = {
  buildOption: _t,
  buildSelect: Kt,
  buildDataList: Mt
}, Gt = ({ inData: r = [] } = {}) => {
  const t = (r ?? []).map(
    (n) => typeof n == "object" && n !== null ? n : { rowValue: n }
  ), e = structuredClone(x.buildSelect);
  return e.children = L(t, x.buildOption), e;
}, Yt = ({ inData: r = [], inColumns: t = [] } = {}) => t.map((n) => {
  const o = structuredClone(x.buildOption);
  o.textContent = o.textContent.replace("rowValue", n.columnName), o.attributes.value = o.attributes.value.replace("rowValue", n.columnName);
  const a = L(r, o);
  return console.log("createdArray : ", a[0], o), a;
}), v = ({ inData: r = [] } = {}) => {
  const t = (r ?? []).map(
    (n) => typeof n == "object" && n !== null ? n : { rowValue: n }
  ), e = structuredClone(x.buildDataList);
  return e.children = L(t, x.buildOption), e;
}, Ht = {
  version: "1.1.0",
  name: "json-renderers-build-input-row"
}, qt = (r) => {
  const t = r;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof t == "function" ? t : t.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: Ht,
    render: e,
    ...typeof t == "object" ? t : {}
  };
}, D = [
  "input",
  "inputOnly",
  "inputWithLabel",
  "inputWithLabelButton"
], Ut = ({ inConfig: r } = {}) => {
  const t = r;
  if (!t || typeof t != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  if (t.type && (typeof t.type != "string" || !D.includes(t.type)))
    throw console.error(`type must be one of: ${D.join(", ")}`), new Error(`type must be one of: ${D.join(", ")}`);
  if (t.options && typeof t.options != "object")
    throw console.error("options must be an object"), new TypeError("options must be an object");
  return !0;
}, zt = {
  tagName: "input",
  attributes: {
    type: "search",
    placeholder: "Search...",
    class: "form-control",
    id: "searchInputId"
  }
}, Jt = {
  tagName: "label",
  textContent: "Search:",
  attributes: {
    class: "form-label mb-0 text-nowrap fw-semibold",
    for: "searchInputId"
  }
}, Qt = {
  tagName: "button",
  textContent: "Search",
  attributes: {
    type: "button",
    class: "btn btn-primary text-nowrap",
    id: "searchButtonId"
  }
}, Xt = {
  tagName: "div",
  attributes: {
    class: "d-flex align-items-center gap-2"
  },
  children: []
}, m = {
  input: zt,
  label: Jt,
  button: Qt,
  rowWrapper: Xt
}, $ = ({ inOptions: r = {} } = {}) => {
  const t = r, e = structuredClone(m.input);
  return t != null && t.placeholder && (e.attributes.placeholder = t.placeholder), t != null && t.class && (e.attributes.class = t.class), t != null && t.id && (e.attributes.id = t.id), t != null && t.name && (e.attributes.name = t.name), t != null && t.type && (e.attributes.type = t.type), t != null && t.value && (e.attributes.value = t.value), e;
}, S = ({ inOptions: r = {} } = {}) => {
  const t = r, e = structuredClone(m.rowWrapper), n = structuredClone(m.label), o = (t == null ? void 0 : t.id) ?? m.input.attributes.id;
  t != null && t.wrapperClass && (e.attributes.class = t.wrapperClass), t != null && t.label && (n.textContent = t.label), t != null && t.labelClass && (n.attributes.class = t.labelClass), n.attributes.for = o;
  const a = $({
    inOptions: {
      ...t,
      id: o
    }
  });
  return e.children = [n, a], e;
}, I = ({ inOptions: r = {} } = {}) => {
  const t = r, e = structuredClone(m.rowWrapper), n = structuredClone(m.label), o = structuredClone(m.button), a = (t == null ? void 0 : t.id) ?? m.input.attributes.id, l = (t == null ? void 0 : t.buttonId) ?? m.button.attributes.id;
  t != null && t.wrapperClass && (e.attributes.class = t.wrapperClass), t != null && t.label && (n.textContent = t.label), t != null && t.labelClass && (n.attributes.class = t.labelClass), n.attributes.for = a;
  const d = $({
    inOptions: {
      ...t,
      id: a
    }
  });
  return t != null && t.buttonText && (o.textContent = t.buttonText), t != null && t.buttonClass && (o.attributes.class = t.buttonClass), t != null && t.buttonType && (o.attributes.type = t.buttonType), o.attributes.id = l, e.children = [n, d, o], e;
}, Zt = {
  input: $,
  inputOnly: $,
  inputWithLabel: S,
  inputWithLabelButton: I
}, Ot = ({
  type: r = "inputWithLabel",
  options: t = {},
  inType: e,
  inOptions: n,
  showLog: o = !1
} = {}) => {
  const a = e ?? r, l = n ?? t, d = o;
  Ut({ inConfig: { type: a, options: l } });
  const s = Zt[a];
  if (!s)
    throw new Error(`Flavour for type "${a}" not found.`);
  const u = s({ inOptions: l });
  return d && console.log("json-renderers-build-input-row output:", u), u;
};
qt({
  render: Ot,
  inputOnly: $,
  inputWithLabel: S,
  inputWithLabelButton: I
});
const F = ({ inOptions: r = {}, options: t = {} } = {}) => {
  const e = r && Object.keys(r).length > 0 ? r : t;
  return (e == null ? void 0 : e.label) === !1 || (e == null ? void 0 : e.flavour) === "inputOnly" ? $({ inOptions: e }) : (e == null ? void 0 : e.flavour) === "inputWithLabelButton" || e != null && e.button || e != null && e.buttonText ? I({ inOptions: e }) : S({ inOptions: e });
}, te = {
  version: "1.1.0",
  name: "json-renderers-build-form"
}, ee = (r) => {
  const t = r;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof t == "function" ? t : t.render;
  globalThis.ks.jsonRenderersBuildForm = {
    meta: te,
    render: e,
    ...typeof t == "object" ? t : {}
  };
}, re = ({ inConfig: r } = {}) => {
  const t = r;
  if (!t || typeof t != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  if (t.columns && !Array.isArray(t.columns))
    throw console.error("columns must be an Array"), new TypeError("columns must be an Array");
  if (t.data && !Array.isArray(t.data))
    throw console.error("data must be an Array"), new TypeError("data must be an Array");
  if (t.options && typeof t.options != "object")
    throw console.error("options must be an object"), new TypeError("options must be an object");
  return !0;
}, oe = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "appFormId"
  },
  children: []
}, ne = {
  tagName: "button",
  textContent: "Save",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, ae = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: [
    {
      tagName: "label",
      textContent: "Notes",
      attributes: {
        class: "form-label fw-semibold",
        for: "fieldId"
      }
    },
    {
      tagName: "textarea",
      attributes: {
        class: "form-control",
        rows: "3",
        id: "fieldId",
        name: "fieldName"
      }
    }
  ]
}, se = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: [
    {
      tagName: "label",
      textContent: "Select",
      attributes: {
        class: "form-label fw-semibold",
        for: "fieldId"
      }
    },
    {
      tagName: "select",
      attributes: {
        class: "form-select",
        id: "fieldId",
        name: "fieldName"
      },
      children: []
    }
  ]
}, ce = {
  tagName: "div",
  attributes: {
    class: "form-check mb-3"
  },
  children: [
    {
      tagName: "input",
      attributes: {
        type: "checkbox",
        class: "form-check-input",
        id: "fieldId",
        name: "fieldName",
        value: "true"
      }
    },
    {
      tagName: "label",
      textContent: "Agree",
      attributes: {
        class: "form-check-label",
        for: "fieldId"
      }
    }
  ]
}, j = {
  form: oe,
  submitButton: ne,
  textareaRow: ae,
  selectRow: se,
  checkboxRow: ce
}, ie = /* @__PURE__ */ new Set([
  "text",
  "email",
  "number",
  "tel",
  "url",
  "password",
  "search",
  "date",
  "datetime-local",
  "time",
  "month",
  "week",
  "color"
]), le = (r) => String(r ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "field", ue = ({ inOption: r, inSelectedValue: t } = {}) => {
  const e = r, n = t, o = e && typeof e == "object" ? e.value : e, a = e && typeof e == "object" ? e.label ?? o : e, l = n != null && String(o) === String(n);
  return {
    tagName: "option",
    textContent: String(a ?? ""),
    attributes: {
      value: String(o ?? ""),
      ...l ? { selected: !0 } : {}
    }
  };
}, J = ({ inColumn: r, inRow: t = {}, inIndex: e = 0, inFormLayout: n = "vertical" } = {}) => {
  var V, W, _;
  const o = r, a = t, l = e, d = n, s = (o == null ? void 0 : o.columnName) ?? `field_${l}`, u = (o == null ? void 0 : o.type) ?? "text", c = (o == null ? void 0 : o.label) ?? (o == null ? void 0 : o.title) ?? s, i = (o == null ? void 0 : o.id) ?? `form-${l}-${le(s)}`, b = a[s] ?? (o == null ? void 0 : o.value), p = {
    id: i,
    name: s,
    ...o != null && o.placeholder ? { placeholder: o.placeholder } : {},
    ...o != null && o.required ? { required: !0 } : {},
    ...o != null && o.disabled ? { disabled: !0 } : {},
    ...o != null && o.readOnly ? { readonly: !0 } : {}
  };
  if (u === "checkbox") {
    const f = structuredClone(j.checkboxRow), h = f.children[0], y = f.children[1];
    return Object.assign(h.attributes, p, {
      type: "checkbox",
      value: (o == null ? void 0 : o.value) ?? "true"
    }), h.properties = { checked: !!(b ?? (o == null ? void 0 : o.checked) ?? !1) }, y.textContent = c, y.attributes.for = i, f;
  }
  if (u === "textarea") {
    const f = structuredClone(j.textareaRow), h = f.children[0], y = f.children[1];
    return h.textContent = c, h.attributes.for = i, Object.assign(y.attributes, p, {
      rows: String((o == null ? void 0 : o.rows) ?? 3)
    }), b != null && (y.textContent = String(b)), f;
  }
  if (u === "select") {
    const f = structuredClone(j.selectRow), h = f.children[0], y = f.children[1];
    return h.textContent = c, h.attributes.for = i, Object.assign(y.attributes, p), y.children = ((o == null ? void 0 : o.options) ?? []).map(
      (O) => ue({ inOption: O, inSelectedValue: b })
    ), f;
  }
  const E = ie.has(u) ? u : "text", T = {
    label: c,
    type: E,
    id: i,
    name: s,
    placeholder: (o == null ? void 0 : o.placeholder) ?? "",
    class: (o == null ? void 0 : o.class) ?? "form-control",
    value: b != null ? String(b) : void 0,
    wrapperClass: d === "inline" ? "d-flex align-items-center gap-2 mb-3" : "mb-3",
    labelClass: d === "inline" ? "form-label mb-0 text-nowrap fw-semibold" : "form-label fw-semibold"
  };
  return o != null && o.buttonText || o != null && o.button ? I({
    inOptions: {
      ...T,
      buttonText: o.buttonText ?? ((V = o.button) == null ? void 0 : V.text) ?? "Action",
      buttonClass: o.buttonClass ?? ((W = o.button) == null ? void 0 : W.class) ?? "btn btn-outline-primary",
      buttonId: o.buttonId ?? ((_ = o.button) == null ? void 0 : _.id) ?? `${i}-btn`
    }
  }) : S({ inOptions: T });
}, Q = ({ inColumns: r = [], inData: t = [], inOptions: e = {}, columns: n, data: o, options: a } = {}) => {
  const l = Array.isArray(r) && r.length > 0 ? r : Array.isArray(n) ? n : [], d = Array.isArray(t) && t.length > 0 ? t : Array.isArray(o) ? o : [], s = e && Object.keys(e).length > 0 ? e : a ?? {}, u = d[0] ?? {}, c = (s == null ? void 0 : s.layout) ?? "vertical", i = structuredClone(j.form);
  if (s != null && s.formId && (i.attributes.id = s.formId), s != null && s.className && (i.attributes.class = s.className), s != null && s.ariaLabel && (i.attributes["aria-label"] = s.ariaLabel), i.children = l.map(
    (b, p) => J({
      inColumn: b,
      inRow: u,
      inIndex: p,
      inFormLayout: c
    })
  ), (s == null ? void 0 : s.showSubmit) !== !1) {
    const b = structuredClone(j.submitButton);
    b.textContent = (s == null ? void 0 : s.submitLabel) ?? "Save", s != null && s.submitClass && (b.attributes.class = s.submitClass), s != null && s.submitId && (b.attributes.id = s.submitId), i.children.push(b);
  }
  return i;
}, X = ({
  columns: r = [],
  data: t = [],
  options: e = {},
  inColumns: n,
  inData: o,
  inOptions: a,
  showLog: l = !1
} = {}) => {
  const d = n ?? r, s = o ?? t, u = a ?? e, c = l;
  re({
    inConfig: {
      columns: d,
      data: s,
      options: u
    }
  });
  const i = Q({
    inColumns: d,
    inData: s,
    inOptions: u
  });
  return c && console.log("json-renderers-build-form output:", i), i;
};
ee({
  render: X,
  renderForm: Q,
  renderField: J
});
const de = /* @__PURE__ */ new Set([
  "text",
  "email",
  "number",
  "tel",
  "url",
  "search",
  "date",
  "datetime-local",
  "time",
  "month",
  "week"
]), be = (r) => String(r ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "field", Z = (r, t) => {
  var e;
  if (((e = r == null ? void 0 : r.attributes) == null ? void 0 : e.id) === t) return r;
  for (const n of (r == null ? void 0 : r.children) ?? []) {
    const o = Z(n, t);
    if (o) return o;
  }
}, fe = (r, t) => {
  const e = /* @__PURE__ */ new Set();
  return r.flatMap((n) => {
    const o = n == null ? void 0 : n[t];
    if (o == null) return [];
    const a = String(o).trim(), l = a.toLocaleLowerCase();
    return !a || e.has(l) ? [] : (e.add(l), [a]);
  });
}, me = ({ formSpec: r, columns: t, data: e } = {}) => {
  const n = t.flatMap((a, l) => {
    const d = a.type ?? "text";
    if (!a.dataListId || !de.has(d)) return [];
    const s = fe(e, a.columnName);
    if (!s.length) return [];
    const u = a.id ?? `form-${l}-${be(a.columnName)}`, c = Z(r, u);
    if (!c) throw new Error(`Form input not found for datalist column "${a.columnName}"`);
    c.attributes.list = a.dataListId;
    const i = v({ inData: s });
    return i.attributes = { id: a.dataListId }, [i];
  }), o = r.children.findIndex(
    (a) => {
      var l;
      return a.tagName === "button" && ((l = a.attributes) == null ? void 0 : l.type) === "submit";
    }
  );
  return r.children.splice(o < 0 ? r.children.length : o, 0, ...n), r;
}, pe = ({
  inColumns: r = [],
  inData: t = [],
  inOptions: e = {},
  columns: n,
  data: o,
  options: a
} = {}) => {
  const l = r && r.length > 0 ? r : n ?? [], d = t && t.length > 0 ? t : o ?? [], s = e && Object.keys(e).length > 0 ? e : a ?? {}, u = s.prefill === !1 ? [] : d, c = X({
    inColumns: l,
    inData: u,
    inOptions: s
  });
  return me({ formSpec: c, columns: l, data: d });
}, he = {
  table: G,
  tableFromSpec: G,
  select: Gt,
  selectOptionsOnly: Yt,
  dataList: v,
  datalist: v,
  searchInput: F,
  search: F,
  inputRow: F,
  form: pe
}, ye = ({
  type: r = g.type,
  data: t = g.data,
  columns: e = g.columns,
  options: n = g.options,
  showLog: o = g.showLog
} = {}) => {
  const c = {
    type: r,
    data: t,
    columns: e,
    options: n,
    showLog: o
  };
  Y({ inConfig: c });
  const i = he[c.type];
  if (!i)
    throw new Error(`Renderer for type "${c.type}" not found.`);
  const b = i({
    inColumns: c.columns,
    inData: c.data,
    inOptions: c.options,
    options: c.options
  });
  return c.showLog && console.log("json-renderers-build output:", b), b;
};
et({ render: ye, getSpec: k, spec: w });
export {
  ye as default,
  k as getSpec,
  ye as render,
  w as spec
};
