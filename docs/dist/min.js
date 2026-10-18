const K = {
  version: "1.22.0",
  name: "json-renderers-build"
}, U = (e) => {
  e && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: K,
    render: e
  });
}, G = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.type;
  if (t === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof t != "string")
    throw new TypeError("type must be a string");
  return !0;
}, M = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.data;
  if (t === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(t))
    throw new TypeError("data must be an Array");
  return !0;
}, J = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.columns;
  if (t === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(t))
    throw new TypeError("columns must be an Array");
  return !0;
}, _ = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const t = a.showLog;
  if (t !== void 0 && typeof t != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, L = (e) => {
  const a = (e == null ? void 0 : e.inConfig) ?? e;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return G(a), M(a), J(a), _(a), !0;
}, Q = "table", X = "", Y = [], Z = [], tt = "", et = "replace", at = !1, w = {
  type: Q,
  targetHtmlId: X,
  data: Y,
  columns: Z,
  classToApply: tt,
  appendPosition: et,
  showLog: at
}, st = (e) => {
  const a = typeof e == "object" && e !== null ? e.inKey ?? e.key : e;
  return a && a in w ? w[a] : { ...w };
};
Object.assign(st, w);
const ot = (e) => typeof e == "object" && e !== null && !Array.isArray(e), nt = (e, a) => {
  if (!ot(e)) return;
  let t = {};
  for (const [s, n] of Object.entries(e))
    t[s] = m(a, n);
  return t;
}, rt = (e, a) => {
  const t = structuredClone(e);
  return Array.isArray(t) ? t.map((n) => m(a, n)) : void 0;
}, E = (e, a, t) => {
  if (e === "${agg:count}" && "rowData" in a) {
    if (Array.isArray(a == null ? void 0 : a.rowData))
      return a == null ? void 0 : a.rowData.length;
  } else
    return e === "${rowValue}" && "rowData" in a ? a == null ? void 0 : a.rowData : e.replace(/\$\{(\w+)\}/g, (s, n) => a[n] !== void 0 ? a[n] : s);
}, lt = (e, a) => E(e, a), it = (e, a, t) => {
  if (t && console.log("inElement : ", e), t && console.log("inTemplate : ", a), a == null)
    throw new TypeError("inTemplate is required");
  if (typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inElement must be an object");
  return !0;
}, ct = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, ut = (e) => {
  var a, t;
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), (a = globalThis.ks).applyTemplate ?? (a.applyTemplate = e), (t = globalThis.ks).transformerFuncs ?? (t.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: ct,
    applyTemplate: e
  });
}, m = (e, a, t) => {
  const s = e, n = a;
  it(s, n, t);
  const o = structuredClone(n);
  return typeof o == "string" ? E(o, s) : (o === null || typeof o != "object" || ("textContent" in o && (o.textContent = lt(o == null ? void 0 : o.textContent, s)), "attributes" in o && (o.attributes = nt(o == null ? void 0 : o.attributes, s)), "children" in o && (o.children = rt(o == null ? void 0 : o.children, s))), o);
};
ut(m);
const dt = (e, a) => {
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
}, f = (e, a) => {
  const t = e, s = a;
  return dt(t, s), t.map((n) => m(n, s));
}, bt = (e, a) => e.map((s) => ({
  ...s,
  rowData: a[s.columnName]
})), pt = (e, a, t) => {
  var n, o, r, c, u, d;
  if (!Array.isArray(e))
    throw new TypeError("inColumns must be an Array");
  if (e.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let l = 0; l < e.length; l++) {
    const i = e[l];
    if (!i || typeof i != "object")
      throw new TypeError(`inColumns[${l}] must be an object`);
    if (typeof i.columnName != "string" || !i.columnName.trim())
      throw new TypeError(`inColumns[${l}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(a))
    throw new TypeError("inData must be an Array");
  for (let l = 0; l < a.length; l++) {
    const i = a[l];
    if (!i || typeof i != "object")
      throw new TypeError(`inData[${l}] must be an object`);
  }
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inSpec must be an object");
  const s = ((r = (o = (n = e[0]) == null ? void 0 : n.template) == null ? void 0 : o.body) == null ? void 0 : r.tr) || "buildBodyTr";
  if (!(s in t))
    throw new Error(`Row template "${s}" not found in inSpec`);
  for (let l = 0; l < e.length; l++) {
    const i = e[l], p = ((u = (c = i.template) == null ? void 0 : c.body) == null ? void 0 : u.cell) || ((d = i.template) == null ? void 0 : d.bodyCell) || "buildBodyCell";
    if (!(p in t))
      throw new Error(`Cell template "${p}" for column "${i.columnName}" not found in inSpec`);
  }
  return !0;
}, mt = (e, a) => e.map((s) => {
  var c, u, d;
  const n = ((u = (c = s.template) == null ? void 0 : c.body) == null ? void 0 : u.cell) || ((d = s.template) == null ? void 0 : d.bodyCell) || "buildBodyCell", o = a[n];
  return m(s, o);
}), S = (e, a, t) => {
  var d, l, i;
  pt(e, a, t);
  const s = e, n = a, o = t, r = ((i = (l = (d = s[0]) == null ? void 0 : d.template) == null ? void 0 : l.body) == null ? void 0 : i.tr) || "buildBodyTr", c = o[r];
  return n.map((p) => {
    const C = m(p, c), z = bt(s, p), H = mt(z, o);
    return C.children = H, C;
  });
}, y = (e, a) => {
  var t;
  if (((t = e == null ? void 0 : e.attributes) == null ? void 0 : t["data-role"]) === a) return e;
  for (const s of (e == null ? void 0 : e.children) ?? []) {
    const n = y(s, a);
    if (n) return n;
  }
  return null;
}, ht = (e, a) => {
  const t = e[a.fileName], s = a.dataRole ? y(t, a.dataRole) : t;
  return (a.filePath ?? []).reduce((n, o) => n[o], s);
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
}, Tt = {
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
}, I = {
  buildBodyTr: ft,
  buildColGroup: yt,
  buildHeader: Ct,
  buildFooter: $t,
  buildBodyCell: wt,
  button: gt,
  buttonCell: Nt,
  buildOption: xt,
  buildSelect: Tt,
  buildDataList: Ft
}, It = "table", kt = {
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
], O = {
  tagName: It,
  attributes: kt,
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
], jt = [
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
], $ = (e) => Array.isArray(e) ? e : [e], B = {
  set: (e, a, t) => {
    e[a] = t;
  },
  push: (e, a, t) => {
    e[a].push(...$(t));
  },
  unshift: (e, a, t) => {
    e[a].unshift(...$(t));
  },
  pushToRows: (e, a, t) => {
    e[a].forEach((s) => {
      s.children.push(...structuredClone($(t)));
    });
  },
  unshiftToRows: (e, a, t) => {
    e[a].forEach((s) => {
      s.children.unshift(...structuredClone($(t)));
    });
  },
  unshiftSerialToRows: (e, a, t) => {
    e[a].forEach((s, n) => {
      const o = structuredClone(t);
      o.textContent = n + 1, s.children.unshift(o);
    });
  }
}, P = (e, a, t) => {
  const s = a.dataRole ? y(e[a.fileName], a.dataRole) : e[a.fileName], n = [...a.filePath ?? []], o = n.pop(), r = n.reduce((u, d) => u[d], s);
  (B[a.action] || B.set)(r, o, t);
}, h = { data: {}, base: O, spec: I }, V = {
  fromCollection: f,
  twoDimensional: S
}, vt = (e) => {
  e.forEach((a) => {
    const t = ht(h, a.sourcePath);
    if (t) {
      const s = V[a.func](t, I[a.templateKey]);
      P(h, a.destinationPath, s);
    } else
      console.log("   !instruction : ", a), console.log("   !source : ", t);
  });
}, Rt = (e) => {
  e.forEach((a) => {
    const t = V[a.func](
      h.data.columns,
      h.data.data,
      I
    );
    P(h, a.destinationPath, t);
  });
}, Lt = (e) => (h.data = e, vt(At), Rt(jt), O), A = ({
  inData: e,
  inColumns: a,
  inType: t,
  footer: s = [],
  options: n
} = {}) => Lt({
  columns: a,
  data: e
}), Et = ({ inData: e = [], inColumns: a = [] } = {}) => ({
  data: (e ?? []).map(
    (t) => typeof t == "object" && t !== null ? t : { rowValue: t }
  ),
  columns: a
}), St = {
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
}, Pt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, b = {
  buildOption: St,
  buildSelect: Ot,
  buildDataList: Pt
}, Vt = (e, a = b.buildOption) => {
  const t = structuredClone(a);
  return t.textContent = t.textContent.replace("rowValue", e), t.attributes.value = t.attributes.value.replace("rowValue", e), t;
}, Wt = (e) => {
  const a = structuredClone(b.buildSelect), t = e.map((s) => Vt((s == null ? void 0 : s.rowValue) ?? s, b.buildOption));
  return a.children = f(e, b.buildOption), a.children = t, a;
}, qt = (e = {}) => {
  const { data: a } = Et(e);
  return Wt(a);
}, Dt = ({ inData: e = [], inColumns: a = [] } = {}) => ({
  data: e,
  columns: a
}), zt = (e, a = b.buildOption) => {
  const t = structuredClone(a), s = e == null ? void 0 : e.columnName;
  return t.textContent = t.textContent.replace("rowValue", s), t.attributes.value = t.attributes.value.replace("rowValue", s), t;
}, Ht = (e, a) => {
  const t = zt(a, b.buildOption);
  return f(e, t);
}, Kt = ({ data: e, columns: a }) => a.map((t) => Ht(e, t)), Ut = (e = {}) => {
  const { data: a, columns: t } = Dt(e);
  return Kt({ data: a, columns: t });
}, Gt = ({ inData: e = [], inColumns: a = [] } = {}) => ({
  data: e,
  columns: a
}), Mt = (e, a = b.buildOption) => {
  const t = structuredClone(a);
  return t.textContent = t.textContent.replace("rowValue", e), t.attributes.value = t.attributes.value.replace("rowValue", e), t;
}, Jt = (e, a) => {
  const t = a == null ? void 0 : a.columnName, s = structuredClone(b.buildDataList), n = Mt(t, b.buildOption);
  return s.children = f(e, n), s;
}, _t = ({ data: e, columns: a }) => a.map((t) => Jt(e, t)), j = (e = {}) => {
  const { data: a, columns: t } = Gt(e);
  return _t({ data: a, columns: t });
}, Qt = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, Xt = (e) => {
  const a = e;
  if (typeof globalThis > "u" || !a) return;
  globalThis.ks ?? (globalThis.ks = {});
  const t = typeof a == "function" ? a : a.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: Qt,
    render: t,
    ...typeof a == "object" ? a : {}
  };
}, Yt = "input", Zt = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, te = {
  tagName: Yt,
  attributes: Zt
}, g = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, s = structuredClone(te);
  return t.placeholder && (s.attributes.placeholder = t.placeholder), t.class && (s.attributes.class = t.class), t.id && (s.attributes.id = t.id), t.name && (s.attributes.name = t.name), t.type && (s.attributes.type = t.type), t.value && (s.attributes.value = t.value), s;
}, ee = "div", ae = {
  class: "d-flex align-items-center gap-2"
}, se = [
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
], oe = {
  tagName: ee,
  attributes: ae,
  children: se
}, N = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, s = structuredClone(oe), n = s.children[0], o = s.children[1];
  return t.label && (n.textContent = t.label), t.id && (n.attributes.for = t.id, o.attributes.id = t.id), t.placeholder && (o.attributes.placeholder = t.placeholder), t.class && (o.attributes.class = t.class), t.name && (o.attributes.name = t.name), t.type && (o.attributes.type = t.type), t.wrapperClass && (s.attributes.class = t.wrapperClass), t.labelClass && (n.attributes.class = t.labelClass), s;
}, ne = "div", re = {
  class: "d-flex align-items-center gap-2"
}, le = [
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
], ie = {
  tagName: ne,
  attributes: re,
  children: le
}, k = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a, s = structuredClone(ie), n = s.children[0], o = s.children[1], r = s.children[2];
  return t.label && (n.textContent = t.label), t.id && (n.attributes.for = t.id, o.attributes.id = t.id), t.placeholder && (o.attributes.placeholder = t.placeholder), t.class && (o.attributes.class = t.class), t.name && (o.attributes.name = t.name), t.type && (o.attributes.type = t.type), t.buttonText && (r.textContent = t.buttonText), t.buttonClass && (r.attributes.class = t.buttonClass), t.buttonId && (r.attributes.id = t.buttonId), t.wrapperClass && (s.attributes.class = t.wrapperClass), t.labelClass && (n.attributes.class = t.labelClass), s;
}, ce = {
  input: g,
  inputOnly: g,
  inputWithLabel: N,
  inputWithLabelButton: k
}, ue = ({
  type: e = "inputWithLabel",
  options: a = {},
  inType: t,
  inOptions: s
} = {}) => {
  const n = t ?? e, o = s ?? a;
  return (ce[n] || N)({ inOptions: o, options: o });
};
Xt({
  render: ue,
  inputOnly: g,
  inputWithLabel: N,
  inputWithLabelButton: k
});
const x = ({ inOptions: e = {}, options: a = {} } = {}) => {
  const t = e && Object.keys(e).length > 0 ? e : a;
  return (t == null ? void 0 : t.label) === !1 || (t == null ? void 0 : t.flavour) === "inputOnly" ? g({ inOptions: t }) : (t == null ? void 0 : t.flavour) === "inputWithLabelButton" || t != null && t.button || t != null && t.buttonText ? k({ inOptions: t }) : N({ inOptions: t });
}, de = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, be = (e) => {
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: de, render: e });
}, pe = "div", me = {
  class: "${cardClass}",
  "data-role": "form-card"
}, he = [
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
], fe = {
  tagName: pe,
  attributes: me,
  children: he
}, ye = () => structuredClone(fe), Ce = "header-actions", $e = "button", v = {
  destinationRole: Ce,
  template: $e
}, we = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, ge = {
  button: we
}, Ne = (e, a) => {
  const t = structuredClone(e), s = f(a.header.actions, ge[v.template]);
  return y(t, v.destinationRole).children.push(...s), t;
}, xe = "form-body", Te = {
  destinationRole: xe
}, Fe = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, Ie = {
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
}, ke = {
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
}, Be = {
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
}, Ae = {
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
}, je = {
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
}, ve = {
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
}, Re = {
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
}, Le = {
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
}, Ee = {
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
}, Se = {
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
}, Oe = {
  buildBodyTr: Fe,
  buildBodyCell: Ie,
  buildRequiredField: ke,
  buildTextareaField: Be,
  buildCheckboxField: Ae,
  buildInlineField: je,
  buildInlineRequiredField: ve,
  buildInlineFieldWithButton: Re,
  buildInlineRequiredFieldWithButton: Le,
  buildInlineTextareaField: Ee,
  buildInlineCheckboxField: Se
}, Pe = (e, a, t) => {
  const s = e.map((r) => {
    var d, l, i, p, C;
    const c = ((l = (d = r.template) == null ? void 0 : d.body) == null ? void 0 : l.cell) ?? (r.required ? "buildRequiredField" : "buildBodyCell");
    let u = ((i = t.fieldTemplates) == null ? void 0 : i[c]) ?? c;
    return r.buttonText && (u = ((p = t.buttonFieldTemplates) == null ? void 0 : p[u]) ?? u), {
      ...r,
      label: r.label ?? r.title ?? r.columnName,
      type: r.type ?? "text",
      placeholder: r.placeholder ?? "",
      buttonType: r.buttonType ?? "button",
      template: { ...r.template, body: { ...(C = r.template) == null ? void 0 : C.body, cell: u } }
    };
  }), n = a[0] ?? {}, o = Object.fromEntries(s.map((r) => [
    r.columnName,
    n[r.columnName] ?? r.value ?? ""
  ]));
  return { columns: s, rows: [o] };
}, Ve = (e, a, t) => {
  const s = Pe(a.columns, a.records, t.body), n = S(s.columns, s.rows, Oe), o = structuredClone(e);
  return y(o, Te.destinationRole).children.push(...Array.isArray(n) ? n : [n]), o;
}, We = "footer-actions", qe = "button", R = {
  destinationRole: We,
  template: qe
}, De = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, ze = {
  button: De
}, He = (e, a) => {
  const t = structuredClone(e), s = f(a.footer.actions, ze[R.template]);
  return y(t, R.destinationRole).children.push(...s), t;
}, W = ({ inColumns: e, inData: a, inOptions: t, columns: s, data: n, options: o } = {}) => ({
  columns: Array.isArray(e) && e.length > 0 ? e : Array.isArray(s) ? s : [],
  records: Array.isArray(a) && a.length > 0 ? a : Array.isArray(n) ? n : [],
  options: t && Object.keys(t).length > 0 ? t : o ?? {}
}), Ke = "bigButtonsForm", Ue = "Account details", Ge = "Update your profile information.", Me = "", Je = "label", _e = "stacked", Qe = "saveCancel", Xe = {
  formId: Ke,
  title: Ue,
  description: Ge,
  recordId: Me,
  header: Je,
  body: _e,
  footer: Qe
}, Ye = {
  actions: []
}, Ze = {
  actions: []
}, ta = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, ea = {
  actions: []
}, aa = {
  none: Ye,
  label: Ze,
  labelWithRefresh: ta,
  labelWithId: ea
}, sa = {
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
}, oa = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, na = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, ra = {
  inline: sa,
  stacked: oa,
  threeColumns: na
}, la = {
  actions: []
}, ia = {
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
}, ca = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, ua = {
  none: la,
  saveCancel: ia,
  edit: ca
}, T = (e, a, t) => {
  const s = e[a];
  if (!s) throw new RangeError("Unknown bigButtons " + t + ": " + a);
  return s;
}, q = (e) => {
  if (typeof e != "object" || e === null || Array.isArray(e))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const a = e["form.bigButtons"] ?? {};
  if (typeof a != "object" || a === null || Array.isArray(a))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const t = { ...Xe, ...a };
  return {
    options: t,
    header: T(aa, t.header, "header"),
    body: T(ra, t.body, "body"),
    footer: T(ua, t.footer, "footer")
  };
}, da = (e, a = {}) => {
  const t = W(a), s = q(t.options), n = Ne(e, s), o = Ve(n, t, s);
  return He(o, s);
}, ba = {
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
}, pa = {
  bootstrap: ba
}, ma = (e, a) => {
  var s;
  const t = (s = pa[a]) == null ? void 0 : s[e.header];
  if (!t) throw new RangeError("Unknown bigButtons header: " + e.header);
  return t;
}, ha = "bootstrap", fa = {
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
}, F = {
  defaultFramework: ha,
  frameworks: fa
}, ya = (e, a) => {
  const t = F.frameworks[a];
  if (!t) throw new RangeError("Unknown bigButtons framework: " + a);
  const s = t.bodies[e.body];
  if (!s) throw new RangeError("Unknown bigButtons body: " + e.body);
  return { ...t.base, ...s };
}, Ca = {
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
}, $a = {
  bootstrap: Ca
}, wa = (e, a) => {
  const t = $a[a], s = t == null ? void 0 : t.footers[e.footer];
  if (!t) throw new RangeError("Unknown bigButtons framework: " + a);
  if (!s) throw new RangeError("Unknown bigButtons footer: " + e.footer);
  return { ...t.base, ...s };
}, ga = (e, a = {}) => {
  const t = q(W(a).options), { options: s } = t, n = s.framework ?? F.defaultFramework;
  if (!F.frameworks[n]) throw new RangeError("Unknown bigButtons framework: " + n);
  const r = Object.assign(
    {},
    s,
    ya(s, n),
    ma(s, n),
    wa(s, n)
  );
  return m(r, structuredClone(e));
}, Na = (e = {}) => {
  const a = ye(), t = da(a, e);
  return ga(t, e);
}, D = (e = {}) => {
  const a = { ...e, type: e.type ?? "form.bigButtons" };
  return L(a), Na(a);
};
be(D);
const xa = ({
  inType: e = "stacked",
  inData: a,
  inColumns: t
} = {}) => D({
  type: e,
  columns: t,
  data: a
}), Ta = {
  table: A,
  tableFromSpec: A,
  select: qt,
  selectOptionsOnly: Ut,
  dataList: j,
  datalist: j,
  searchInput: x,
  search: x,
  inputRow: x,
  form: xa
}, Fa = (e = {}) => {
  L(e);
  const a = e == null ? void 0 : e.showLog, t = e.type;
  let s = t, n = t;
  if (t.includes(".")) {
    const c = t.split(".");
    s = c[0], n = c[1];
  }
  const o = Ta[s];
  if (!o)
    throw new Error(`Renderer for type "${s}" not found.`);
  const r = o({
    inType: n,
    inColumns: e.columns,
    inData: e.data,
    inOptions: e.options,
    options: e.options
  });
  return a && console.log("json-renderers-build output:", r), r;
};
U(Fa);
export {
  Fa as default,
  Fa as render
};
