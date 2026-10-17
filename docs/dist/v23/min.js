const Y = {
  version: "1.22.0",
  name: "json-renderers-build"
}, Z = (r) => {
  r && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: Y,
    render: r
  });
}, O = (r) => {
  const t = (r == null ? void 0 : r.inConfig) ?? r;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const s = t.type;
  if (s === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof s != "string")
    throw new TypeError("type must be a string");
  return !0;
}, tt = (r) => {
  const t = (r == null ? void 0 : r.inConfig) ?? r;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const s = t.data;
  if (s === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(s))
    throw new TypeError("data must be an Array");
  return !0;
}, et = (r) => {
  const t = (r == null ? void 0 : r.inConfig) ?? r;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const s = t.columns;
  if (s === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(s))
    throw new TypeError("columns must be an Array");
  return !0;
}, rt = (r) => {
  const t = (r == null ? void 0 : r.inConfig) ?? r;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const s = t.showLog;
  if (s === void 0)
    throw new Error('Missing compulsory key: "showLog"');
  if (typeof s != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, k = (r) => {
  const t = (r == null ? void 0 : r.inConfig) ?? r;
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("Config must be an object");
  return O(t), tt(t), et(t), rt(t), !0;
}, st = (r) => {
  const t = (r == null ? void 0 : r.inConfig) ?? r;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const s = t.targetHtmlId;
  if (s === void 0)
    throw new Error('Missing compulsory key: "targetHtmlId"');
  if (typeof s != "string")
    throw new TypeError("targetHtmlId must be a string");
  if (s.trim().length === 0)
    throw new Error("targetHtmlId must be a non-empty string");
  return !0;
}, at = (r) => {
  const t = (r == null ? void 0 : r.inConfig) ?? r;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const s = t.appendPosition;
  if (s === void 0)
    throw new Error('Missing compulsory key: "appendPosition"');
  if (typeof s != "string")
    throw new TypeError("appendPosition must be a string");
  return !0;
}, nt = (r) => {
  const t = (r == null ? void 0 : r.inConfig) ?? r;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const s = t.classToApply;
  if (s === void 0)
    throw new Error('Missing compulsory key: "classToApply"');
  if (typeof s != "string")
    throw new TypeError("classToApply must be a string");
  return !0;
}, K = (r) => {
  const t = (r == null ? void 0 : r.inConfig) ?? r;
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("Config must be an object");
  return st(t), at(t), nt(t), !0;
}, ot = "table", it = "", ct = [], lt = [], ut = "", bt = "replace", dt = !1, g = {
  type: ot,
  targetHtmlId: it,
  data: ct,
  columns: lt,
  classToApply: ut,
  appendPosition: bt,
  showLog: dt
}, W = (r) => {
  const t = typeof r == "object" && r !== null ? r.inKey ?? r.key : r;
  return t && t in g ? g[t] : { ...g };
};
Object.assign(W, g);
const A = (r) => {
  const t = (r == null ? void 0 : r.inConfig) ?? r;
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("Config must be an object");
  return k(t), K(t), !0;
};
A.getSpec = W;
A.configSpec = g;
A.guardSpec = k;
A.guardMount = K;
const pt = (r) => typeof r == "object" && r !== null && !Array.isArray(r), ft = (r, t) => {
  if (!pt(r)) return;
  let s = {};
  for (const [e, o] of Object.entries(r))
    s[e] = C(t, o);
  return s;
}, yt = (r, t) => {
  const s = structuredClone(r);
  return Array.isArray(s) ? s.map((o) => C(t, o)) : void 0;
}, G = (r, t, s) => {
  if (r === "${agg:count}" && "rowData" in t) {
    if (Array.isArray(t == null ? void 0 : t.rowData))
      return t == null ? void 0 : t.rowData.length;
  } else
    return r === "${rowValue}" && "rowData" in t ? t == null ? void 0 : t.rowData : r.replace(/\$\{(\w+)\}/g, (e, o) => t[o] !== void 0 ? t[o] : e);
}, ht = (r, t) => G(r, t), mt = (r, t, s) => {
  if (t == null)
    throw new TypeError("inTemplate is required");
  if (typeof t != "object" && typeof t != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!r || typeof r != "object" || Array.isArray(r))
    throw new TypeError("inElement must be an object");
  return !0;
}, C = (r, t, s) => {
  const e = r, o = t;
  mt(e, o);
  const a = structuredClone(o);
  return typeof a == "string" ? G(a, e) : (a === null || typeof a != "object" || ("textContent" in a && (a.textContent = ht(a == null ? void 0 : a.textContent, e)), "attributes" in a && (a.attributes = ft(a == null ? void 0 : a.attributes, e)), "children" in a && (a.children = yt(a == null ? void 0 : a.children, e))), a);
}, wt = (r, t) => {
  if (!Array.isArray(r))
    throw new TypeError("inSource must be an Array");
  if (r.length === 0)
    throw new Error("inSource cannot be empty");
  for (let s = 0; s < r.length; s++)
    if (!r[s] || typeof r[s] != "object")
      throw new TypeError(`inSource[${s}] must be an object`);
  if (!t || typeof t != "object" && typeof t != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, S = (r, t) => {
  const s = r, e = t;
  return wt(s, e), s.map((o) => C(o, e));
}, gt = (r, t) => r.map((e) => ({
  ...e,
  rowData: t[e.columnName]
})), Nt = (r, t, s) => {
  var o, a, l, b, n, u;
  if (!Array.isArray(r))
    throw new TypeError("inColumns must be an Array");
  if (r.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    if (!c || typeof c != "object")
      throw new TypeError(`inColumns[${i}] must be an object`);
    if (typeof c.columnName != "string" || !c.columnName.trim())
      throw new TypeError(`inColumns[${i}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(t))
    throw new TypeError("inData must be an Array");
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (!c || typeof c != "object")
      throw new TypeError(`inData[${i}] must be an object`);
  }
  if (!s || typeof s != "object" || Array.isArray(s))
    throw new TypeError("inSpec must be an object");
  const e = ((l = (a = (o = r[0]) == null ? void 0 : o.template) == null ? void 0 : a.body) == null ? void 0 : l.tr) || "buildBodyTr";
  if (!(e in s))
    throw new Error(`Row template "${e}" not found in inSpec`);
  for (let i = 0; i < r.length; i++) {
    const c = r[i], d = ((n = (b = c.template) == null ? void 0 : b.body) == null ? void 0 : n.cell) || ((u = c.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(d in s))
      throw new Error(`Cell template "${d}" for column "${c.columnName}" not found in inSpec`);
  }
  return !0;
}, At = (r, t) => r.map((e) => {
  var b, n, u;
  const o = ((n = (b = e.template) == null ? void 0 : b.body) == null ? void 0 : n.cell) || ((u = e.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", a = t[o];
  return C(e, a);
}), Ct = (r, t, s) => {
  var u, i, c;
  Nt(r, t, s);
  const e = r, o = t, a = s, l = ((c = (i = (u = e[0]) == null ? void 0 : u.template) == null ? void 0 : i.body) == null ? void 0 : c.tr) || "buildBodyTr", b = a[l];
  return o.map((d) => {
    const f = C(d, b), $ = gt(e, d), T = At($, a);
    return f.children = T, f;
  });
}, R = (r, t) => {
  var s;
  if (((s = r == null ? void 0 : r.attributes) == null ? void 0 : s["data-role"]) === t) return r;
  for (const e of (r == null ? void 0 : r.children) ?? []) {
    const o = R(e, t);
    if (o) return o;
  }
  return null;
}, xt = (r, t) => {
  const s = r[t.fileName], e = t.dataRole ? R(s, t.dataRole) : s;
  return (t.filePath ?? []).reduce((o, a) => o[a], e);
}, $t = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Tt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, jt = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, It = {
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
}, St = {
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
}, Bt = {
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
}, vt = {
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
}, kt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, P = {
  buildBodyTr: $t,
  buildColGroup: Tt,
  buildHeader: jt,
  buildFooter: It,
  buildBodyCell: St,
  button: Lt,
  buttonCell: Bt,
  buildOption: vt,
  buildSelect: Et,
  buildDataList: kt
}, Rt = "table", Pt = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Ft = [
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
  tagName: Rt,
  attributes: Pt,
  children: Ft
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
], Mt = [
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
], j = (r) => Array.isArray(r) ? r : [r], D = {
  set: (r, t, s) => {
    r[t] = s;
  },
  push: (r, t, s) => {
    r[t].push(...j(s));
  },
  unshift: (r, t, s) => {
    r[t].unshift(...j(s));
  },
  pushToRows: (r, t, s) => {
    r[t].forEach((e) => {
      e.children.push(...structuredClone(j(s)));
    });
  },
  unshiftToRows: (r, t, s) => {
    r[t].forEach((e) => {
      e.children.unshift(...structuredClone(j(s)));
    });
  },
  unshiftSerialToRows: (r, t, s) => {
    r[t].forEach((e, o) => {
      const a = structuredClone(s);
      a.textContent = o + 1, e.children.unshift(a);
    });
  }
}, q = (r, t, s) => {
  const e = t.dataRole ? R(r[t.fileName], t.dataRole) : r[t.fileName], o = [...t.filePath ?? []], a = o.pop(), l = o.reduce((n, u) => n[u], e);
  (D[t.action] || D.set)(l, a, s);
}, m = { data: {}, base: _, spec: P }, z = {
  fromCollection: S,
  twoDimensional: Ct
}, Ht = (r) => {
  r.forEach((t) => {
    const s = xt(m, t.sourcePath);
    if (s) {
      const e = z[t.func](s, P[t.templateKey]);
      q(m, t.destinationPath, e);
    } else
      console.log("   !instruction : ", t), console.log("   !source : ", s);
  });
}, Vt = (r) => {
  r.forEach((t) => {
    const s = z[t.func](
      m.data.columns,
      m.data.data,
      P
    );
    q(m, t.destinationPath, s);
  });
}, Kt = (r) => (m.data = r, Ht(Dt), Vt(Mt), _), M = ({
  inData: r,
  inColumns: t,
  inType: s,
  footer: e = [],
  options: o
} = {}) => Kt({
  columns: t,
  data: r
}), Wt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Gt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, _t = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, N = {
  buildOption: Wt,
  buildSelect: Gt,
  buildDataList: _t
}, qt = ({ inData: r = [] } = {}) => {
  const t = (r ?? []).map(
    (e) => typeof e == "object" && e !== null ? e : { rowValue: e }
  ), s = structuredClone(N.buildSelect);
  return s.children = S(t, N.buildOption), s;
}, zt = ({ inData: r = [], inColumns: t = [] } = {}) => t.map((e) => {
  const o = structuredClone(N.buildOption);
  o.textContent = o.textContent.replace("rowValue", e.columnName), o.attributes.value = o.attributes.value.replace("rowValue", e.columnName);
  const a = S(r, o);
  return console.log("createdArray : ", a[0], o), a;
}), H = ({ inData: r = [] } = {}) => {
  const t = (r ?? []).map(
    (e) => typeof e == "object" && e !== null ? e : { rowValue: e }
  ), s = structuredClone(N.buildDataList);
  return s.children = S(t, N.buildOption), s;
}, Jt = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, Qt = (r) => {
  const t = r;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const s = typeof t == "function" ? t : t.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: Jt,
    render: s,
    ...typeof t == "object" ? t : {}
  };
}, Ut = "input", Xt = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, Yt = {
  tagName: Ut,
  attributes: Xt
}, I = ({ inOptions: r = {}, options: t = {} } = {}) => {
  const s = r && Object.keys(r).length > 0 ? r : t, e = structuredClone(Yt);
  return s.placeholder && (e.attributes.placeholder = s.placeholder), s.class && (e.attributes.class = s.class), s.id && (e.attributes.id = s.id), s.name && (e.attributes.name = s.name), s.type && (e.attributes.type = s.type), s.value && (e.attributes.value = s.value), e;
}, Zt = "div", Ot = {
  class: "d-flex align-items-center gap-2"
}, te = [
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
], ee = {
  tagName: Zt,
  attributes: Ot,
  children: te
}, x = ({ inOptions: r = {}, options: t = {} } = {}) => {
  const s = r && Object.keys(r).length > 0 ? r : t, e = structuredClone(ee), o = e.children[0], a = e.children[1];
  return s.label && (o.textContent = s.label), s.id && (o.attributes.for = s.id, a.attributes.id = s.id), s.placeholder && (a.attributes.placeholder = s.placeholder), s.class && (a.attributes.class = s.class), s.name && (a.attributes.name = s.name), s.type && (a.attributes.type = s.type), s.wrapperClass && (e.attributes.class = s.wrapperClass), s.labelClass && (o.attributes.class = s.labelClass), e;
}, re = "div", se = {
  class: "d-flex align-items-center gap-2"
}, ae = [
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
], ne = {
  tagName: re,
  attributes: se,
  children: ae
}, L = ({ inOptions: r = {}, options: t = {} } = {}) => {
  const s = r && Object.keys(r).length > 0 ? r : t, e = structuredClone(ne), o = e.children[0], a = e.children[1], l = e.children[2];
  return s.label && (o.textContent = s.label), s.id && (o.attributes.for = s.id, a.attributes.id = s.id), s.placeholder && (a.attributes.placeholder = s.placeholder), s.class && (a.attributes.class = s.class), s.name && (a.attributes.name = s.name), s.type && (a.attributes.type = s.type), s.buttonText && (l.textContent = s.buttonText), s.buttonClass && (l.attributes.class = s.buttonClass), s.buttonId && (l.attributes.id = s.buttonId), s.wrapperClass && (e.attributes.class = s.wrapperClass), s.labelClass && (o.attributes.class = s.labelClass), e;
}, oe = {
  input: I,
  inputOnly: I,
  inputWithLabel: x,
  inputWithLabelButton: L
}, ie = ({
  type: r = "inputWithLabel",
  options: t = {},
  inType: s,
  inOptions: e
} = {}) => {
  const o = s ?? r, a = e ?? t;
  return (oe[o] || x)({ inOptions: a, options: a });
};
Qt({
  render: ie,
  inputOnly: I,
  inputWithLabel: x,
  inputWithLabelButton: L
});
const B = ({ inOptions: r = {}, options: t = {} } = {}) => {
  const s = r && Object.keys(r).length > 0 ? r : t;
  return (s == null ? void 0 : s.label) === !1 || (s == null ? void 0 : s.flavour) === "inputOnly" ? I({ inOptions: s }) : (s == null ? void 0 : s.flavour) === "inputWithLabelButton" || s != null && s.button || s != null && s.buttonText ? L({ inOptions: s }) : x({ inOptions: s });
}, ce = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, le = (r) => {
  const t = r;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const s = typeof t == "function" ? t : t.render;
  globalThis.ks.jsonRenderersBuildForm = {
    meta: ce,
    render: s,
    ...typeof t == "object" ? t : {}
  };
}, ue = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "appFormId"
  },
  children: []
}, be = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: []
}, de = {
  tagName: "label",
  textContent: "Label",
  attributes: {
    class: "form-label fw-semibold",
    for: "fieldId"
  }
}, pe = {
  tagName: "input",
  attributes: {
    type: "text",
    placeholder: "",
    class: "form-control",
    id: "fieldId",
    name: "fieldName"
  }
}, fe = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, h = {
  form: ue,
  fieldWrapper: be,
  label: de,
  input: pe,
  submitButton: fe
}, J = ({ inColumn: r, inRow: t = {}, inIndex: s = 0 } = {}) => {
  var $, T;
  const e = r, o = t, a = s, l = (e == null ? void 0 : e.columnName) ?? `field_${a}`, b = (e == null ? void 0 : e.type) ?? "text", n = (e == null ? void 0 : e.label) ?? (e == null ? void 0 : e.title) ?? l, u = (e == null ? void 0 : e.id) ?? `form-${a}-${l.toLowerCase()}`, i = o[l] ?? (e == null ? void 0 : e.value), c = structuredClone(h.fieldWrapper), d = structuredClone(h.label);
  if (d.textContent = n, d.attributes.for = u, b === "checkbox") {
    c.attributes.class = "form-check mb-3";
    const p = structuredClone(h.input);
    return p.attributes.type = "checkbox", p.attributes.class = "form-check-input", p.attributes.id = u, p.attributes.name = l, p.attributes.value = "true", p.properties = { checked: !!(i ?? (e == null ? void 0 : e.checked) ?? !1) }, d.attributes.class = "form-check-label", c.children = [p, d], c;
  }
  if (b === "textarea") {
    const p = {
      tagName: "textarea",
      textContent: i ? String(i) : "",
      attributes: {
        class: (e == null ? void 0 : e.class) ?? "form-control",
        rows: String((e == null ? void 0 : e.rows) ?? 3),
        id: u,
        name: l,
        placeholder: (e == null ? void 0 : e.placeholder) ?? ""
      }
    };
    return c.children = [d, p], c;
  }
  if (b === "select") {
    const p = {
      tagName: "select",
      attributes: {
        class: (e == null ? void 0 : e.class) ?? "form-select",
        id: u,
        name: l
      },
      children: ((e == null ? void 0 : e.options) ?? []).map((y) => {
        const F = String(typeof y == "object" ? y.value : y), U = typeof y == "object" ? y.label ?? y.value : String(y), X = i != null && String(i) === F;
        return {
          tagName: "option",
          textContent: U,
          attributes: {
            value: F,
            ...X ? { selected: !0 } : {}
          }
        };
      })
    };
    return c.children = [d, p], c;
  }
  const f = structuredClone(h.input);
  if (f.attributes.type = b, f.attributes.id = u, f.attributes.name = l, e != null && e.placeholder && (f.attributes.placeholder = e.placeholder), e != null && e.class && (f.attributes.class = e.class), i != null && (f.attributes.value = String(i)), e != null && e.buttonText || e != null && e.button) {
    const p = {
      tagName: "button",
      textContent: e.buttonText ?? (($ = e.button) == null ? void 0 : $.text) ?? "Action",
      attributes: {
        type: "button",
        class: e.buttonClass ?? ((T = e.button) == null ? void 0 : T.class) ?? "btn btn-success",
        id: e.buttonId ?? `${u}-btn`
      }
    };
    return c.children = [d, f, p], c;
  }
  return c.children = [d, f], c;
}, w = ({ inColumns: r = [], inData: t = [], inOptions: s = {}, columns: e, data: o, options: a } = {}) => {
  const l = Array.isArray(r) && r.length > 0 ? r : Array.isArray(e) ? e : [], b = Array.isArray(t) && t.length > 0 ? t : Array.isArray(o) ? o : [], n = s && Object.keys(s).length > 0 ? s : a ?? {}, u = b[0] ?? {}, i = structuredClone(h.form);
  if (n != null && n.formId && (i.attributes.id = n.formId), n != null && n.className && (i.attributes.class = n.className), i.children = l.map(
    (c, d) => J({ inColumn: c, inRow: u, inIndex: d })
  ), (n == null ? void 0 : n.showSubmit) !== !1 && (n == null ? void 0 : n.submitButton) !== !1) {
    const c = structuredClone(h.submitButton);
    n != null && n.submitLabel && (c.textContent = n.submitLabel), n != null && n.submitClass && (c.attributes.class = n.submitClass), i.children.push(c);
  }
  return i;
}, ye = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "inlineFormId"
  },
  children: []
}, he = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, V = {
  form: ye,
  submitButton: he
}, me = ({ inColumn: r, inRow: t = {}, inIndex: s = 0 } = {}) => {
  var c, d;
  const e = r, o = t, a = s, l = (e == null ? void 0 : e.columnName) ?? `field_${a}`, b = (e == null ? void 0 : e.type) ?? "text", n = (e == null ? void 0 : e.label) ?? (e == null ? void 0 : e.title) ?? l, u = (e == null ? void 0 : e.id) ?? `form-${a}-${l.toLowerCase()}`, i = o[l] ?? (e == null ? void 0 : e.value);
  return e != null && e.buttonText || e != null && e.button ? L({
    inOptions: {
      label: n,
      type: b,
      id: u,
      name: l,
      placeholder: (e == null ? void 0 : e.placeholder) ?? "",
      class: (e == null ? void 0 : e.class) ?? "form-control",
      value: i != null ? String(i) : void 0,
      buttonText: e.buttonText ?? ((c = e.button) == null ? void 0 : c.text) ?? "Action",
      buttonClass: e.buttonClass ?? ((d = e.button) == null ? void 0 : d.class) ?? "btn btn-outline-primary",
      buttonId: e.buttonId ?? `${u}-btn`,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  }) : x({
    inOptions: {
      label: n,
      type: b,
      id: u,
      name: l,
      placeholder: (e == null ? void 0 : e.placeholder) ?? "",
      class: (e == null ? void 0 : e.class) ?? "form-control",
      value: i != null ? String(i) : void 0,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  });
}, v = ({ inColumns: r = [], inData: t = [], inOptions: s = {}, columns: e, data: o, options: a } = {}) => {
  const l = Array.isArray(r) && r.length > 0 ? r : Array.isArray(e) ? e : [], b = Array.isArray(t) && t.length > 0 ? t : Array.isArray(o) ? o : [], n = s && Object.keys(s).length > 0 ? s : a ?? {}, u = b[0] ?? {}, i = structuredClone(V.form);
  if (n != null && n.formId && (i.attributes.id = n.formId), n != null && n.className && (i.attributes.class = n.className), i.children = l.map(
    (c, d) => me({ inColumn: c, inRow: u, inIndex: d })
  ), (n == null ? void 0 : n.showSubmit) !== !1 && (n == null ? void 0 : n.submitButton) !== !1) {
    const c = structuredClone(V.submitButton);
    n != null && n.submitLabel && (c.textContent = n.submitLabel), n != null && n.submitClass && (c.attributes.class = n.submitClass), i.children.push(c);
  }
  return i;
}, we = {
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
}, ge = {
  buttonBar: we
}, E = ({ inColumns: r = [], inData: t = [], inOptions: s = {}, columns: e, data: o, options: a } = {}) => {
  const l = Array.isArray(r) && r.length > 0 ? r : Array.isArray(e) ? e : [], b = Array.isArray(t) && t.length > 0 ? t : Array.isArray(o) ? o : [], n = s && Object.keys(s).length > 0 ? s : a ?? {}, u = w({
    inColumns: l,
    inData: b,
    inOptions: { ...n, submitButton: !1, showSubmit: !1 }
  }), i = structuredClone(ge.buttonBar);
  return n.submitLabel && (i.children[0].textContent = n.submitLabel), n.cancelLabel && (i.children[1].textContent = n.cancelLabel), u.children.push(i), u;
}, Ne = {
  stacked: w,
  vertical: w,
  inline: v,
  horizontal: v,
  withButtons: E,
  buttons: E
}, Q = ({
  type: r = "stacked",
  columns: t = [],
  data: s = [],
  options: e = {},
  inType: o,
  inColumns: a,
  inData: l,
  inOptions: b
} = {}) => {
  const n = o ?? r, u = a ?? t, i = l ?? s, c = b ?? e;
  return A({
    inConfig: {
      type: "form",
      columns: u,
      data: i,
      options: c
    }
  }), (Ne[n] || w)({
    inColumns: u,
    inData: i,
    inOptions: c
  });
}, Ae = w, Ce = J;
le({
  render: Q,
  stacked: w,
  inline: v,
  withButtons: E,
  renderForm: Ae,
  renderField: Ce
});
const xe = ({
  inType: r = "stacked",
  inData: t,
  inColumns: s
} = {}) => Q({
  type: r,
  columns: s,
  data: t
}), $e = {
  table: M,
  tableFromSpec: M,
  select: qt,
  selectOptionsOnly: zt,
  dataList: H,
  datalist: H,
  searchInput: B,
  search: B,
  inputRow: B,
  form: xe
}, Te = (r = {}) => {
  const t = k(r), s = t == null ? void 0 : t.showLog, e = t.type;
  let o = e, a = e;
  if (e.includes(".")) {
    const n = e.split(".");
    o = n[0], a = n[1];
  }
  const l = $e[o];
  if (!l)
    throw new Error(`Renderer for type "${o}" not found.`);
  const b = l({
    inType: a,
    inColumns: t.columns,
    inData: t.data,
    inOptions: t.options,
    options: t.options
  });
  return s && console.log("json-renderers-build output:", b), b;
};
Z(Te);
export {
  Te as default,
  Te as render
};
