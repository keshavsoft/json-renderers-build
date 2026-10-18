const Q = {
  version: "1.22.0",
  name: "json-renderers-build"
}, X = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: Q,
    render: t
  });
}, Y = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.type;
  if (r === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof r != "string")
    throw new TypeError("type must be a string");
  return !0;
}, Z = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.data;
  if (r === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(r))
    throw new TypeError("data must be an Array");
  return !0;
}, tt = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.columns;
  if (r === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(r))
    throw new TypeError("columns must be an Array");
  return !0;
}, et = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.showLog;
  if (r !== void 0 && typeof r != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, rt = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return Y(e), Z(e), tt(e), et(e), !0;
}, at = "table", ot = "", st = [], nt = [], lt = "", ct = "replace", it = !1, $ = {
  type: at,
  targetHtmlId: ot,
  data: st,
  columns: nt,
  classToApply: lt,
  appendPosition: ct,
  showLog: it
}, ut = (t) => {
  const e = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return e && e in $ ? $[e] : { ...$ };
};
Object.assign(ut, $);
const dt = (t) => typeof t == "object" && t !== null && !Array.isArray(t), bt = (t, e) => {
  if (!dt(t)) return;
  let r = {};
  for (const [a, s] of Object.entries(t))
    r[a] = f(e, s);
  return r;
}, pt = (t, e) => {
  const r = structuredClone(t);
  return Array.isArray(r) ? r.map((s) => f(e, s)) : void 0;
}, V = (t, e, r) => {
  if (t === "${agg:count}" && "rowData" in e) {
    if (Array.isArray(e == null ? void 0 : e.rowData))
      return e == null ? void 0 : e.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in e ? e == null ? void 0 : e.rowData : t.replace(/\$\{(\w+)\}/g, (a, s) => e[s] !== void 0 ? e[s] : a);
}, mt = (t, e) => V(t, e), ht = (t, e, r) => {
  if (e == null)
    throw new TypeError("inTemplate is required");
  if (typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, f = (t, e, r) => {
  const a = t, s = e;
  ht(a, s);
  const o = structuredClone(s);
  return typeof o == "string" ? V(o, a) : (o === null || typeof o != "object" || ("textContent" in o && (o.textContent = mt(o == null ? void 0 : o.textContent, a)), "attributes" in o && (o.attributes = bt(o == null ? void 0 : o.attributes, a)), "children" in o && (o.children = pt(o == null ? void 0 : o.children, a))), o);
}, yt = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("inSource must be an Array");
  if (t.length === 0)
    throw new Error("inSource cannot be empty");
  for (let r = 0; r < t.length; r++)
    if (!t[r] || typeof t[r] != "object")
      throw new TypeError(`inSource[${r}] must be an object`);
  if (!e || typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, x = (t, e) => {
  const r = t, a = e;
  return yt(r, a), r.map((s) => f(s, a));
}, ft = (t, e) => t.map((a) => ({
  ...a,
  rowData: e[a.columnName]
})), Ct = (t, e, r) => {
  var s, o, n, i, d, u;
  if (!Array.isArray(t))
    throw new TypeError("inColumns must be an Array");
  if (t.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let l = 0; l < t.length; l++) {
    const c = t[l];
    if (!c || typeof c != "object")
      throw new TypeError(`inColumns[${l}] must be an object`);
    if (typeof c.columnName != "string" || !c.columnName.trim())
      throw new TypeError(`inColumns[${l}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(e))
    throw new TypeError("inData must be an Array");
  for (let l = 0; l < e.length; l++) {
    const c = e[l];
    if (!c || typeof c != "object")
      throw new TypeError(`inData[${l}] must be an object`);
  }
  if (!r || typeof r != "object" || Array.isArray(r))
    throw new TypeError("inSpec must be an object");
  const a = ((n = (o = (s = t[0]) == null ? void 0 : s.template) == null ? void 0 : o.body) == null ? void 0 : n.tr) || "buildBodyTr";
  if (!(a in r))
    throw new Error(`Row template "${a}" not found in inSpec`);
  for (let l = 0; l < t.length; l++) {
    const c = t[l], b = ((d = (i = c.template) == null ? void 0 : i.body) == null ? void 0 : d.cell) || ((u = c.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(b in r))
      throw new Error(`Cell template "${b}" for column "${c.columnName}" not found in inSpec`);
  }
  return !0;
}, wt = (t, e) => t.map((a) => {
  var i, d, u;
  const s = ((d = (i = a.template) == null ? void 0 : i.body) == null ? void 0 : d.cell) || ((u = a.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", o = e[s];
  return f(a, o);
}), $t = (t, e, r) => {
  var u, l, c;
  Ct(t, e, r);
  const a = t, s = e, o = r, n = ((c = (l = (u = a[0]) == null ? void 0 : u.template) == null ? void 0 : l.body) == null ? void 0 : c.tr) || "buildBodyTr", i = o[n];
  return s.map((b) => {
    const m = f(b, i), j = ft(a, b), I = wt(j, o);
    return m.children = I, m;
  });
}, k = (t, e) => {
  var r;
  if (((r = t == null ? void 0 : t.attributes) == null ? void 0 : r["data-role"]) === e) return t;
  for (const a of (t == null ? void 0 : t.children) ?? []) {
    const s = k(a, e);
    if (s) return s;
  }
  return null;
}, gt = (t, e) => {
  const r = t[e.fileName], a = e.dataRole ? k(r, e.dataRole) : r;
  return (e.filePath ?? []).reduce((s, o) => s[o], a);
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
}, Ft = {
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
}, Bt = {
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
}, Rt = {
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
  buttonCell: Ft,
  buildOption: Bt,
  buildSelect: kt,
  buildDataList: Rt
}, vt = "table", Lt = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Et = [
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
], K = {
  tagName: vt,
  attributes: Lt,
  children: Et
}, St = [
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
], Dt = [
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
], C = (t) => Array.isArray(t) ? t : [t], L = {
  set: (t, e, r) => {
    t[e] = r;
  },
  push: (t, e, r) => {
    t[e].push(...C(r));
  },
  unshift: (t, e, r) => {
    t[e].unshift(...C(r));
  },
  pushToRows: (t, e, r) => {
    t[e].forEach((a) => {
      a.children.push(...structuredClone(C(r)));
    });
  },
  unshiftToRows: (t, e, r) => {
    t[e].forEach((a) => {
      a.children.unshift(...structuredClone(C(r)));
    });
  },
  unshiftSerialToRows: (t, e, r) => {
    t[e].forEach((a, s) => {
      const o = structuredClone(r);
      o.textContent = s + 1, a.children.unshift(o);
    });
  }
}, z = (t, e, r) => {
  const a = e.dataRole ? k(t[e.fileName], e.dataRole) : t[e.fileName], s = [...e.filePath ?? []], o = s.pop(), n = s.reduce((d, u) => d[u], a);
  (L[e.action] || L.set)(n, o, r);
}, h = { data: {}, base: K, spec: R }, H = {
  fromCollection: x,
  twoDimensional: $t
}, Pt = (t) => {
  t.forEach((e) => {
    const r = gt(h, e.sourcePath);
    if (r) {
      const a = H[e.func](r, R[e.templateKey]);
      z(h, e.destinationPath, a);
    } else
      console.log("   !instruction : ", e), console.log("   !source : ", r);
  });
}, Ot = (t) => {
  t.forEach((e) => {
    const r = H[e.func](
      h.data.columns,
      h.data.data,
      R
    );
    z(h, e.destinationPath, r);
  });
}, Wt = (t) => (h.data = t, Pt(St), Ot(Dt), K), E = ({
  inData: t,
  inColumns: e,
  inType: r,
  footer: a = [],
  options: s
} = {}) => Wt({
  columns: e,
  data: t
}), qt = {
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
}, Kt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, p = {
  buildOption: qt,
  buildSelect: Vt,
  buildDataList: Kt
}, zt = ({ inData: t = [] } = {}) => {
  const e = (t ?? []).map(
    (a) => typeof a == "object" && a !== null ? a : { rowValue: a }
  ), r = structuredClone(p.buildSelect);
  return r.children = x(e, p.buildOption), r;
}, Ht = ({ inData: t = [], inColumns: e = [] } = {}) => e.map((a) => {
  const s = structuredClone(p.buildOption);
  s.textContent = s.textContent.replace("rowValue", a.columnName), s.attributes.value = s.attributes.value.replace("rowValue", a.columnName);
  const o = x(t, s);
  return console.log("createdArray : ", o[0], s), o;
}), S = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const r = e, a = t;
  let s = [];
  return r.forEach((o) => {
    const n = o == null ? void 0 : o.columnName, i = structuredClone(p.buildDataList);
    p.buildOption.textContent = p.buildOption.textContent.replace("rowValue", n), p.buildOption.attributes.value = p.buildOption.attributes.value.replace("rowValue", n), i.children = x(a, p.buildOption), s.push(i);
  }), s;
}, Mt = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, Gt = (t) => {
  const e = t;
  if (typeof globalThis > "u" || !e) return;
  globalThis.ks ?? (globalThis.ks = {});
  const r = typeof e == "function" ? e : e.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: Mt,
    render: r,
    ...typeof e == "object" ? e : {}
  };
}, Ut = "input", Jt = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, _t = {
  tagName: Ut,
  attributes: Jt
}, N = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const r = t && Object.keys(t).length > 0 ? t : e, a = structuredClone(_t);
  return r.placeholder && (a.attributes.placeholder = r.placeholder), r.class && (a.attributes.class = r.class), r.id && (a.attributes.id = r.id), r.name && (a.attributes.name = r.name), r.type && (a.attributes.type = r.type), r.value && (a.attributes.value = r.value), a;
}, Qt = "div", Xt = {
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
  tagName: Qt,
  attributes: Xt,
  children: Yt
}, A = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const r = t && Object.keys(t).length > 0 ? t : e, a = structuredClone(Zt), s = a.children[0], o = a.children[1];
  return r.label && (s.textContent = r.label), r.id && (s.attributes.for = r.id, o.attributes.id = r.id), r.placeholder && (o.attributes.placeholder = r.placeholder), r.class && (o.attributes.class = r.class), r.name && (o.attributes.name = r.name), r.type && (o.attributes.type = r.type), r.wrapperClass && (a.attributes.class = r.wrapperClass), r.labelClass && (s.attributes.class = r.labelClass), a;
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
}, v = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const r = t && Object.keys(t).length > 0 ? t : e, a = structuredClone(ae), s = a.children[0], o = a.children[1], n = a.children[2];
  return r.label && (s.textContent = r.label), r.id && (s.attributes.for = r.id, o.attributes.id = r.id), r.placeholder && (o.attributes.placeholder = r.placeholder), r.class && (o.attributes.class = r.class), r.name && (o.attributes.name = r.name), r.type && (o.attributes.type = r.type), r.buttonText && (n.textContent = r.buttonText), r.buttonClass && (n.attributes.class = r.buttonClass), r.buttonId && (n.attributes.id = r.buttonId), r.wrapperClass && (a.attributes.class = r.wrapperClass), r.labelClass && (s.attributes.class = r.labelClass), a;
}, oe = {
  input: N,
  inputOnly: N,
  inputWithLabel: A,
  inputWithLabelButton: v
}, se = ({
  type: t = "inputWithLabel",
  options: e = {},
  inType: r,
  inOptions: a
} = {}) => {
  const s = r ?? t, o = a ?? e;
  return (oe[s] || A)({ inOptions: o, options: o });
};
Gt({
  render: se,
  inputOnly: N,
  inputWithLabel: A,
  inputWithLabelButton: v
});
const F = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const r = t && Object.keys(t).length > 0 ? t : e;
  return (r == null ? void 0 : r.label) === !1 || (r == null ? void 0 : r.flavour) === "inputOnly" ? N({ inOptions: r }) : (r == null ? void 0 : r.flavour) === "inputWithLabelButton" || r != null && r.button || r != null && r.buttonText ? v({ inOptions: r }) : A({ inOptions: r });
}, ne = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.type;
  if (r === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof r != "string")
    throw new TypeError("type must be a string");
  return !0;
}, le = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.data;
  if (r === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(r))
    throw new TypeError("data must be an Array");
  return !0;
}, ce = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.columns;
  if (r === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(r))
    throw new TypeError("columns must be an Array");
  return !0;
}, ie = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.showLog;
  if (r !== void 0 && typeof r != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, ue = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return ne(e), le(e), ce(e), ie(e), !0;
}, de = "table", be = "", pe = [], me = [], he = "", ye = "replace", fe = !1, g = {
  type: de,
  targetHtmlId: be,
  data: pe,
  columns: me,
  classToApply: he,
  appendPosition: ye,
  showLog: fe
}, Ce = (t) => {
  const e = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return e && e in g ? g[e] : { ...g };
};
Object.assign(Ce, g);
const we = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, $e = (t) => {
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: we, render: t });
}, ge = "div", Ne = {
  class: "${cardClass}",
  "data-role": "form-card"
}, xe = [
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
], Ae = {
  tagName: ge,
  attributes: Ne,
  children: xe
}, Te = () => structuredClone(Ae), je = (t) => typeof t == "object" && t !== null && !Array.isArray(t), Ie = (t, e) => {
  if (!je(t)) return;
  let r = {};
  for (const [a, s] of Object.entries(t))
    r[a] = y(e, s);
  return r;
}, Fe = (t, e) => {
  const r = structuredClone(t);
  return Array.isArray(r) ? r.map((s) => y(e, s)) : void 0;
}, M = (t, e, r) => {
  if (t === "${agg:count}" && "rowData" in e) {
    if (Array.isArray(e == null ? void 0 : e.rowData))
      return e == null ? void 0 : e.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in e ? e == null ? void 0 : e.rowData : t.replace(/\$\{(\w+)\}/g, (a, s) => e[s] !== void 0 ? e[s] : a);
}, Be = (t, e) => M(t, e), ke = (t, e, r) => {
  if (e == null)
    throw new TypeError("inTemplate is required");
  if (typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, y = (t, e, r) => {
  const a = t, s = e;
  ke(a, s);
  const o = structuredClone(s);
  return typeof o == "string" ? M(o, a) : (o === null || typeof o != "object" || ("textContent" in o && (o.textContent = Be(o == null ? void 0 : o.textContent, a)), "attributes" in o && (o.attributes = Ie(o == null ? void 0 : o.attributes, a)), "children" in o && (o.children = Fe(o == null ? void 0 : o.children, a))), o);
}, Re = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("inSource must be an Array");
  if (t.length === 0)
    throw new Error("inSource cannot be empty");
  for (let r = 0; r < t.length; r++)
    if (!t[r] || typeof t[r] != "object")
      throw new TypeError(`inSource[${r}] must be an object`);
  if (!e || typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, G = (t, e) => {
  const r = t, a = e;
  return Re(r, a), r.map((s) => y(s, a));
}, ve = (t, e) => t.map((a) => ({
  ...a,
  rowData: e[a.columnName]
})), Le = (t, e, r) => {
  var s, o, n, i, d, u;
  if (!Array.isArray(t))
    throw new TypeError("inColumns must be an Array");
  if (t.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let l = 0; l < t.length; l++) {
    const c = t[l];
    if (!c || typeof c != "object")
      throw new TypeError(`inColumns[${l}] must be an object`);
    if (typeof c.columnName != "string" || !c.columnName.trim())
      throw new TypeError(`inColumns[${l}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(e))
    throw new TypeError("inData must be an Array");
  for (let l = 0; l < e.length; l++) {
    const c = e[l];
    if (!c || typeof c != "object")
      throw new TypeError(`inData[${l}] must be an object`);
  }
  if (!r || typeof r != "object" || Array.isArray(r))
    throw new TypeError("inSpec must be an object");
  const a = ((n = (o = (s = t[0]) == null ? void 0 : s.template) == null ? void 0 : o.body) == null ? void 0 : n.tr) || "buildBodyTr";
  if (!(a in r))
    throw new Error(`Row template "${a}" not found in inSpec`);
  for (let l = 0; l < t.length; l++) {
    const c = t[l], b = ((d = (i = c.template) == null ? void 0 : i.body) == null ? void 0 : d.cell) || ((u = c.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(b in r))
      throw new Error(`Cell template "${b}" for column "${c.columnName}" not found in inSpec`);
  }
  return !0;
}, Ee = (t, e) => t.map((a) => {
  var i, d, u;
  const s = ((d = (i = a.template) == null ? void 0 : i.body) == null ? void 0 : d.cell) || ((u = a.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", o = e[s];
  return y(a, o);
}), Se = (t, e, r) => {
  var u, l, c;
  Le(t, e, r);
  const a = t, s = e, o = r, n = ((c = (l = (u = a[0]) == null ? void 0 : u.template) == null ? void 0 : l.body) == null ? void 0 : c.tr) || "buildBodyTr", i = o[n];
  return s.map((b) => {
    const m = y(b, i), j = ve(a, b), I = Ee(j, o);
    return m.children = I, m;
  });
}, T = (t, e) => {
  var r;
  if (((r = t == null ? void 0 : t.attributes) == null ? void 0 : r["data-role"]) === e) return t;
  for (const a of (t == null ? void 0 : t.children) ?? []) {
    const s = T(a, e);
    if (s) return s;
  }
  return null;
}, De = "header-actions", Pe = "button", D = {
  destinationRole: De,
  template: Pe
}, Oe = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, We = {
  button: Oe
}, qe = (t, e) => {
  const r = structuredClone(t), a = G(e.header.actions, We[D.template]);
  return T(r, D.destinationRole).children.push(...a), r;
}, Ve = "form-body", Ke = {
  destinationRole: Ve
}, ze = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, He = {
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
}, Ue = {
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
}, Je = {
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
        value: "${rowValue}",
        required: "required"
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
}, Ze = {
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
}, tr = {
  buildBodyTr: ze,
  buildBodyCell: He,
  buildRequiredField: Me,
  buildTextareaField: Ge,
  buildCheckboxField: Ue,
  buildInlineField: Je,
  buildInlineRequiredField: _e,
  buildInlineFieldWithButton: Qe,
  buildInlineRequiredFieldWithButton: Xe,
  buildInlineTextareaField: Ye,
  buildInlineCheckboxField: Ze
}, er = (t, e, r) => {
  const a = t.map((n) => {
    var u, l, c, b, m;
    const i = ((l = (u = n.template) == null ? void 0 : u.body) == null ? void 0 : l.cell) ?? (n.required ? "buildRequiredField" : "buildBodyCell");
    let d = ((c = r.fieldTemplates) == null ? void 0 : c[i]) ?? i;
    return n.buttonText && (d = ((b = r.buttonFieldTemplates) == null ? void 0 : b[d]) ?? d), {
      ...n,
      label: n.label ?? n.title ?? n.columnName,
      type: n.type ?? "text",
      placeholder: n.placeholder ?? "",
      buttonType: n.buttonType ?? "button",
      template: { ...n.template, body: { ...(m = n.template) == null ? void 0 : m.body, cell: d } }
    };
  }), s = e[0] ?? {}, o = Object.fromEntries(a.map((n) => [
    n.columnName,
    s[n.columnName] ?? n.value ?? ""
  ]));
  return { columns: a, rows: [o] };
}, rr = (t, e, r) => {
  const a = er(e.columns, e.records, r.body), s = Se(a.columns, a.rows, tr), o = structuredClone(t);
  return T(o, Ke.destinationRole).children.push(...Array.isArray(s) ? s : [s]), o;
}, ar = "footer-actions", or = "button", P = {
  destinationRole: ar,
  template: or
}, sr = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, nr = {
  button: sr
}, lr = (t, e) => {
  const r = structuredClone(t), a = G(e.footer.actions, nr[P.template]);
  return T(r, P.destinationRole).children.push(...a), r;
}, U = ({ inColumns: t, inData: e, inOptions: r, columns: a, data: s, options: o } = {}) => ({
  columns: Array.isArray(t) && t.length > 0 ? t : Array.isArray(a) ? a : [],
  records: Array.isArray(e) && e.length > 0 ? e : Array.isArray(s) ? s : [],
  options: r && Object.keys(r).length > 0 ? r : o ?? {}
}), cr = "bigButtonsForm", ir = "Account details", ur = "Update your profile information.", dr = "", br = "label", pr = "stacked", mr = "saveCancel", hr = {
  formId: cr,
  title: ir,
  description: ur,
  recordId: dr,
  header: br,
  body: pr,
  footer: mr
}, yr = {
  actions: []
}, fr = {
  actions: []
}, Cr = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, wr = {
  actions: []
}, $r = {
  none: yr,
  label: fr,
  labelWithRefresh: Cr,
  labelWithId: wr
}, gr = {
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
}, Nr = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, xr = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, Ar = {
  inline: gr,
  stacked: Nr,
  threeColumns: xr
}, Tr = {
  actions: []
}, jr = {
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
}, Ir = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, Fr = {
  none: Tr,
  saveCancel: jr,
  edit: Ir
}, B = (t, e, r) => {
  const a = t[e];
  if (!a) throw new RangeError("Unknown bigButtons " + r + ": " + e);
  return a;
}, J = (t) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const e = t["form.bigButtons"] ?? {};
  if (typeof e != "object" || e === null || Array.isArray(e))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const r = { ...hr, ...e };
  return {
    options: r,
    header: B($r, r.header, "header"),
    body: B(Ar, r.body, "body"),
    footer: B(Fr, r.footer, "footer")
  };
}, Br = (t, e = {}) => {
  const r = U(e), a = J(r.options), s = qe(t, a), o = rr(s, r, a);
  return lr(o, a);
}, kr = {
  cardClass: "card border-0 shadow-sm w-100",
  cardBodyClass: "card-body p-4 p-lg-5",
  labelClass: "form-label fw-semibold",
  inputClass: "form-control",
  inputSizeClass: "form-control-lg",
  checkboxWrapperClass: "form-check mb-3",
  checkboxInputClass: "form-check-input",
  checkboxLabelClass: "form-check-label"
}, Rr = {
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
}, w = {
  base: kr,
  bodies: Rr
}, vr = (t = {}) => {
  var s;
  const e = (t == null ? void 0 : t.inOptions) ?? t, r = w.frameworks ? w.frameworks.bootstrap ?? w : w, a = (s = r.bodies) == null ? void 0 : s[e == null ? void 0 : e.body];
  if (!a) throw new RangeError("Unknown bigButtons body: " + (e == null ? void 0 : e.body));
  return { ...r.base, ...a };
}, Lr = {
  headerClass: "d-none",
  headerActionsClass: "d-none"
}, Er = {
  headerClass: "card-header d-flex align-items-center justify-content-between gap-3",
  headingClass: "me-auto",
  titleClass: "h4 fw-semibold mb-1",
  descriptionClass: "text-muted mb-0",
  recordIdClass: "d-none",
  headerActionsClass: "d-none",
  headerButtonClass: "btn btn-outline-secondary text-nowrap"
}, Sr = {
  headerClass: "card-header d-flex align-items-center justify-content-between gap-3",
  headingClass: "me-auto",
  titleClass: "h4 fw-semibold mb-1",
  descriptionClass: "text-muted mb-0",
  recordIdClass: "d-none",
  headerActionsClass: "d-flex align-items-center gap-2",
  headerButtonClass: "btn btn-outline-secondary text-nowrap"
}, Dr = {
  headerClass: "card-header d-flex align-items-center justify-content-between gap-3",
  headingClass: "me-auto",
  titleClass: "h4 fw-semibold mb-1",
  descriptionClass: "text-muted mb-0",
  recordIdClass: "badge text-bg-light border text-secondary",
  headerActionsClass: "d-none",
  headerButtonClass: "btn btn-outline-secondary text-nowrap"
}, O = {
  none: Lr,
  label: Er,
  labelWithRefresh: Sr,
  labelWithId: Dr
}, Pr = (t = {}) => {
  var a;
  const e = (t == null ? void 0 : t.inOptions) ?? t, r = O[e == null ? void 0 : e.header] ?? ((a = O.bootstrap) == null ? void 0 : a[e == null ? void 0 : e.header]);
  if (!r) throw new RangeError("Unknown bigButtons header: " + (e == null ? void 0 : e.header));
  return r;
}, Or = {
  footerClass: "card-footer bg-transparent",
  footerActionsClass: "d-flex flex-wrap justify-content-end gap-2",
  buttonSizeClass: "btn-lg",
  buttonPaddingClass: "px-4 py-2",
  primaryButtonClass: "btn btn-primary text-nowrap",
  secondaryButtonClass: "btn btn-outline-secondary text-nowrap",
  infoButtonClass: "btn btn-outline-info text-nowrap",
  inlineButtonClass: "btn btn-outline-secondary text-nowrap"
}, Wr = {
  none: {
    footerClass: "d-none"
  },
  saveCancel: {},
  edit: {}
}, W = {
  base: Or,
  footers: Wr
}, qr = (t = {}) => {
  var s;
  const e = (t == null ? void 0 : t.inOptions) ?? t, r = W.bootstrap ?? W, a = (s = r.footers) == null ? void 0 : s[e == null ? void 0 : e.footer];
  if (!a) throw new RangeError("Unknown bigButtons footer: " + (e == null ? void 0 : e.footer));
  return { ...r.base, ...a };
}, q = (t = {}) => {
  const e = (t == null ? void 0 : t.inOptions) ?? t;
  return Object.assign(
    {},
    vr(e),
    Pr(e),
    qr(e)
  );
}, Vr = {
  BS5: q,
  bootstrap: q
}, Kr = "BS5", zr = (t, e = {}) => {
  const r = J(U(e).options), { options: a } = r, s = a.framework ?? Kr, o = Vr[s];
  if (!o) throw new RangeError("Unknown bigButtons framework: " + s);
  const n = Object.assign(
    {},
    a,
    o(a)
  );
  return y(n, structuredClone(t));
}, Hr = (t = {}) => {
  const e = Te(), r = Br(e, t);
  console.log("instructedJson : ", r);
  const a = zr(r, t);
  return console.log("afterClasses : ", a), a;
}, _ = (t = {}) => {
  const e = { ...t, type: t.type ?? "form.bigButtons" };
  return ue(e), Hr(e);
};
$e(_);
const Mr = ({
  inType: t = "stacked",
  inData: e,
  inColumns: r
} = {}) => _({
  type: t,
  columns: r,
  data: e
}), Gr = {
  table: E,
  tableFromSpec: E,
  select: zt,
  selectOptionsOnly: Ht,
  dataList: S,
  datalist: S,
  searchInput: F,
  search: F,
  inputRow: F,
  form: Mr
}, Ur = (t = {}) => {
  rt(t);
  const e = t == null ? void 0 : t.showLog, r = t.type;
  let a = r, s = r;
  if (r.includes(".")) {
    const i = r.split(".");
    a = i[0], s = i[1];
  }
  const o = Gr[a];
  if (!o)
    throw new Error(`Renderer for type "${a}" not found.`);
  const n = o({
    inType: s,
    inColumns: t.columns,
    inData: t.data,
    inOptions: t.options,
    options: t.options
  });
  return e && console.log("json-renderers-build output:", n), n;
};
X(Ur);
export {
  Ur as default,
  Ur as render
};
