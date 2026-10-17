const rt = {
  version: "1.22.0",
  name: "json-renderers-build"
}, ot = (o) => {
  const r = o;
  if (typeof globalThis > "u" || !r) return;
  globalThis.ks ?? (globalThis.ks = {});
  const t = typeof r == "function" ? r : r.render, e = typeof r == "object" ? r.getSpec : void 0;
  globalThis.ks.jsonRenderersBuild = {
    meta: rt,
    renderToDom: t,
    render: t,
    ...e ? { getSpec: e } : {},
    ...typeof r == "object" ? r : {}
  };
}, k = ["table", "tableFromSpec", "select", "selectOptionsOnly", "dataList", "datalist", "searchInput", "search", "inputRow", "form"], nt = ["table", "tableFromSpec"], K = ["text", "email", "number", "tel", "url", "password", "search", "date", "datetime-local", "time", "month", "week", "color", "textarea", "select", "checkbox"], G = ({ inConfig: o } = {}) => {
  const r = o;
  if (!r || typeof r != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  if (typeof r.type != "string" || !k.includes(r.type))
    throw console.error(`type must be one of: ${k.join(", ")}`), new Error(`type must be one of: ${k.join(", ")}`);
  if (r.showLog !== void 0 && typeof r.showLog != "boolean")
    throw console.error("showLog must be a boolean"), new TypeError("showLog must be a boolean");
  if (!Array.isArray(r.data))
    throw console.error("data must be an Array"), new TypeError("data must be an Array");
  if (nt.includes(r.type)) {
    if (!Array.isArray(r.columns))
      throw console.error("columns must be an array for table rendering"), new TypeError("columns must be an array for table rendering");
    for (let t = 0; t < r.columns.length; t++) {
      const e = r.columns[t];
      if (!e || typeof e != "object")
        throw console.error(`columns[${t}] must be an object`), new TypeError(`columns[${t}] must be an object`);
      if (typeof e.columnName != "string" || !e.columnName.trim())
        throw console.error(`columns[${t}].columnName must be a non-empty string`), new TypeError(`columns[${t}].columnName must be a non-empty string`);
    }
    for (let t = 0; t < r.data.length; t++) {
      const e = r.data[t];
      if (!e || typeof e != "object")
        throw console.error(`data[${t}] must be an object`), new TypeError(`data[${t}] must be an object`);
    }
    if (r.columns.length > 0 && r.data.length > 0) {
      const t = r.columns.map((n) => n.columnName), e = Object.keys(r.data[0]);
      if (!t.some((n) => e.includes(n))) {
        const n = `Data alignment error: None of the columns [${t.join(", ")}] match any keys in data rows [${e.join(", ")}]`;
        throw console.error(n), new Error(n);
      }
    }
  }
  if (r.type === "form") {
    if (!Array.isArray(r.columns))
      throw new TypeError("columns must be an array for form rendering");
    r.columns.forEach((t, e) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new TypeError(`columns[${e}] must be an object`);
      if (typeof t.columnName != "string" || !t.columnName.trim())
        throw new TypeError(`columns[${e}].columnName must be a non-empty string`);
      if (t.type !== void 0 && !K.includes(t.type))
        throw new TypeError(`columns[${e}].type must be one of: ${K.join(", ")}`);
      if (t.options !== void 0 && !Array.isArray(t.options))
        throw new TypeError(`columns[${e}].options must be an array`);
    });
    for (let t = 0; t < r.data.length; t++) {
      const e = r.data[t];
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new TypeError(`data[${t}] must be an object for form rendering`);
    }
  }
  return !0;
}, st = "table", at = [], ct = [], it = {}, lt = !1, h = {
  type: st,
  columns: at,
  data: ct,
  options: it,
  showLog: lt
}, ut = [
  {
    columnName: "Name",
    width: "150px"
  },
  {
    columnName: "Designation",
    width: "100px"
  }
], dt = [
  {
    Name: "Keshav",
    Designation: "Founder"
  }
], bt = {
  columns: ut,
  data: dt
}, m = {
  ...h,
  ...bt
}, P = ({
  type: o = m.type,
  data: r = m.data,
  columns: t = m.columns,
  options: e = m.options,
  showLog: s = m.showLog
} = {}) => {
  const c = {
    type: o,
    data: r,
    columns: t,
    options: e,
    showLog: s
  };
  return G({ inConfig: c }), c;
};
Object.assign(P, m);
P.toJSON = () => structuredClone(m);
const ft = (o) => typeof o == "object" && o !== null && !Array.isArray(o), pt = (o, r) => {
  if (!ft(o)) return;
  let t = {};
  for (const [e, s] of Object.entries(o))
    t[e] = T(r, s);
  return t;
}, mt = (o, r) => {
  const t = structuredClone(o);
  return Array.isArray(t) ? t.map((s) => T(r, s)) : void 0;
}, Y = (o, r, t) => {
  if (o === "${agg:count}" && "rowData" in r) {
    if (Array.isArray(r == null ? void 0 : r.rowData))
      return r == null ? void 0 : r.rowData.length;
  } else
    return o === "${rowValue}" && "rowData" in r ? r == null ? void 0 : r.rowData : o.replace(/\$\{(\w+)\}/g, (e, s) => r[s] !== void 0 ? r[s] : e);
}, yt = (o, r) => Y(o, r), ht = (o, r, t) => {
  if (r == null)
    throw new TypeError("inTemplate is required");
  if (typeof r != "object" && typeof r != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!o || typeof o != "object" || Array.isArray(o))
    throw new TypeError("inElement must be an object");
  return !0;
}, T = (o, r, t) => {
  const e = o, s = r;
  ht(e, s);
  const n = structuredClone(s);
  return typeof n == "string" ? Y(n, e) : (n === null || typeof n != "object" || ("textContent" in n && (n.textContent = yt(n == null ? void 0 : n.textContent, e)), "attributes" in n && (n.attributes = pt(n == null ? void 0 : n.attributes, e)), "children" in n && (n.children = mt(n == null ? void 0 : n.children, e))), n);
}, gt = (o, r) => {
  if (!Array.isArray(o))
    throw new TypeError("inSource must be an Array");
  if (o.length === 0)
    throw new Error("inSource cannot be empty");
  for (let t = 0; t < o.length; t++)
    if (!o[t] || typeof o[t] != "object")
      throw new TypeError(`inSource[${t}] must be an object`);
  if (!r || typeof r != "object" && typeof r != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, S = (o, r) => {
  const t = o, e = r;
  return gt(t, e), t.map((s) => T(s, e));
}, wt = (o, r) => o.map((e) => ({
  ...e,
  rowData: r[e.columnName]
})), Nt = (o, r, t) => {
  var s, n, l, d, a, u;
  if (!Array.isArray(o))
    throw new TypeError("inColumns must be an Array");
  if (o.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let c = 0; c < o.length; c++) {
    const i = o[c];
    if (!i || typeof i != "object")
      throw new TypeError(`inColumns[${c}] must be an object`);
    if (typeof i.columnName != "string" || !i.columnName.trim())
      throw new TypeError(`inColumns[${c}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(r))
    throw new TypeError("inData must be an Array");
  for (let c = 0; c < r.length; c++) {
    const i = r[c];
    if (!i || typeof i != "object")
      throw new TypeError(`inData[${c}] must be an object`);
  }
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inSpec must be an object");
  const e = ((l = (n = (s = o[0]) == null ? void 0 : s.template) == null ? void 0 : n.body) == null ? void 0 : l.tr) || "buildBodyTr";
  if (!(e in t))
    throw new Error(`Row template "${e}" not found in inSpec`);
  for (let c = 0; c < o.length; c++) {
    const i = o[c], b = ((a = (d = i.template) == null ? void 0 : d.body) == null ? void 0 : a.cell) || ((u = i.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(b in t))
      throw new Error(`Cell template "${b}" for column "${i.columnName}" not found in inSpec`);
  }
  return !0;
}, $t = (o, r) => o.map((e) => {
  var d, a, u;
  const s = ((a = (d = e.template) == null ? void 0 : d.body) == null ? void 0 : a.cell) || ((u = e.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", n = r[s];
  return T(e, n);
}), At = (o, r, t) => {
  var u, c, i;
  Nt(o, r, t);
  const e = o, s = r, n = t, l = ((i = (c = (u = e[0]) == null ? void 0 : u.template) == null ? void 0 : c.body) == null ? void 0 : i.tr) || "buildBodyTr", d = n[l];
  return s.map((b) => {
    const p = T(b, d), C = wt(e, b), j = $t(C, n);
    return p.children = j, p;
  });
}, R = (o, r) => {
  var t;
  if (((t = o == null ? void 0 : o.attributes) == null ? void 0 : t["data-role"]) === r) return o;
  for (const e of (o == null ? void 0 : o.children) ?? []) {
    const s = R(e, r);
    if (s) return s;
  }
  return null;
}, Tt = (o, r) => {
  const t = o[r.fileName], e = r.dataRole ? R(t, r.dataRole) : t;
  return (r.filePath ?? []).reduce((s, n) => s[n], e);
}, xt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Ct = {
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
}, Lt = {
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
}, It = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, St = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Et = {
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
}, kt = {
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
}, M = {
  buildBodyTr: xt,
  buildColGroup: Ct,
  buildHeader: jt,
  buildFooter: Lt,
  buildBodyCell: It,
  button: St,
  buttonCell: Et,
  buildOption: kt,
  buildSelect: Bt,
  buildDataList: vt
}, Dt = "table", Ft = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Pt = [
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
], z = {
  tagName: Dt,
  attributes: Ft,
  children: Pt
}, Rt = [
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
], L = (o) => Array.isArray(o) ? o : [o], _ = {
  set: (o, r, t) => {
    o[r] = t;
  },
  push: (o, r, t) => {
    o[r].push(...L(t));
  },
  unshift: (o, r, t) => {
    o[r].unshift(...L(t));
  },
  pushToRows: (o, r, t) => {
    o[r].forEach((e) => {
      e.children.push(...structuredClone(L(t)));
    });
  },
  unshiftToRows: (o, r, t) => {
    o[r].forEach((e) => {
      e.children.unshift(...structuredClone(L(t)));
    });
  },
  unshiftSerialToRows: (o, r, t) => {
    o[r].forEach((e, s) => {
      const n = structuredClone(t);
      n.textContent = s + 1, e.children.unshift(n);
    });
  }
}, J = (o, r, t) => {
  const e = r.dataRole ? R(o[r.fileName], r.dataRole) : o[r.fileName], s = [...r.filePath ?? []], n = s.pop(), l = s.reduce((a, u) => a[u], e);
  (_[r.action] || _.set)(l, n, t);
}, w = { data: {}, base: z, spec: M }, q = {
  fromCollection: S,
  twoDimensional: At
}, Ht = (o) => {
  o.forEach((r) => {
    const t = Tt(w, r.sourcePath);
    if (t) {
      const e = q[r.func](t, M[r.templateKey]);
      J(w, r.destinationPath, e);
    } else
      console.log("   !instruction : ", r), console.log("   !source : ", t);
  });
}, Vt = (o) => {
  o.forEach((r) => {
    const t = q[r.func](
      w.data.columns,
      w.data.data,
      M
    );
    J(w, r.destinationPath, t);
  });
}, Kt = (o) => (w.data = o, Ht(Rt), Vt(Mt), z), O = ({
  inData: o,
  inColumns: r,
  footer: t = [],
  options: e
} = {}) => Kt({
  columns: r,
  data: o
}), _t = {
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
}, Wt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, A = {
  buildOption: _t,
  buildSelect: Ot,
  buildDataList: Wt
}, Gt = ({ inData: o = [] } = {}) => {
  const r = (o ?? []).map(
    (e) => typeof e == "object" && e !== null ? e : { rowValue: e }
  ), t = structuredClone(A.buildSelect);
  return t.children = S(r, A.buildOption), t;
}, Yt = ({ inData: o = [], inColumns: r = [] } = {}) => r.map((e) => {
  const s = structuredClone(A.buildOption);
  s.textContent = s.textContent.replace("rowValue", e.columnName), s.attributes.value = s.attributes.value.replace("rowValue", e.columnName);
  const n = S(o, s);
  return console.log("createdArray : ", n[0], s), n;
}), v = ({ inData: o = [] } = {}) => {
  const r = (o ?? []).map(
    (e) => typeof e == "object" && e !== null ? e : { rowValue: e }
  ), t = structuredClone(A.buildDataList);
  return t.children = S(r, A.buildOption), t;
}, zt = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, Jt = (o) => {
  const r = o;
  if (typeof globalThis > "u" || !r) return;
  globalThis.ks ?? (globalThis.ks = {});
  const t = typeof r == "function" ? r : r.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: zt,
    render: t,
    ...typeof r == "object" ? r : {}
  };
}, qt = "input", Ut = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, Qt = {
  tagName: qt,
  attributes: Ut
}, I = ({ inOptions: o = {}, options: r = {} } = {}) => {
  const t = o && Object.keys(o).length > 0 ? o : r, e = structuredClone(Qt);
  return t.placeholder && (e.attributes.placeholder = t.placeholder), t.class && (e.attributes.class = t.class), t.id && (e.attributes.id = t.id), t.name && (e.attributes.name = t.name), t.type && (e.attributes.type = t.type), t.value && (e.attributes.value = t.value), e;
}, Xt = "div", Zt = {
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
  tagName: Xt,
  attributes: Zt,
  children: te
}, x = ({ inOptions: o = {}, options: r = {} } = {}) => {
  const t = o && Object.keys(o).length > 0 ? o : r, e = structuredClone(ee), s = e.children[0], n = e.children[1];
  return t.label && (s.textContent = t.label), t.id && (s.attributes.for = t.id, n.attributes.id = t.id), t.placeholder && (n.attributes.placeholder = t.placeholder), t.class && (n.attributes.class = t.class), t.name && (n.attributes.name = t.name), t.type && (n.attributes.type = t.type), t.wrapperClass && (e.attributes.class = t.wrapperClass), t.labelClass && (s.attributes.class = t.labelClass), e;
}, re = "div", oe = {
  class: "d-flex align-items-center gap-2"
}, ne = [
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
], se = {
  tagName: re,
  attributes: oe,
  children: ne
}, E = ({ inOptions: o = {}, options: r = {} } = {}) => {
  const t = o && Object.keys(o).length > 0 ? o : r, e = structuredClone(se), s = e.children[0], n = e.children[1], l = e.children[2];
  return t.label && (s.textContent = t.label), t.id && (s.attributes.for = t.id, n.attributes.id = t.id), t.placeholder && (n.attributes.placeholder = t.placeholder), t.class && (n.attributes.class = t.class), t.name && (n.attributes.name = t.name), t.type && (n.attributes.type = t.type), t.buttonText && (l.textContent = t.buttonText), t.buttonClass && (l.attributes.class = t.buttonClass), t.buttonId && (l.attributes.id = t.buttonId), t.wrapperClass && (e.attributes.class = t.wrapperClass), t.labelClass && (s.attributes.class = t.labelClass), e;
}, ae = {
  input: I,
  inputOnly: I,
  inputWithLabel: x,
  inputWithLabelButton: E
}, ce = ({
  type: o = "inputWithLabel",
  options: r = {},
  inType: t,
  inOptions: e
} = {}) => {
  const s = t ?? o, n = e ?? r;
  return (ae[s] || x)({ inOptions: n, options: n });
};
Jt({
  render: ce,
  inputOnly: I,
  inputWithLabel: x,
  inputWithLabelButton: E
});
const B = ({ inOptions: o = {}, options: r = {} } = {}) => {
  const t = o && Object.keys(o).length > 0 ? o : r;
  return (t == null ? void 0 : t.label) === !1 || (t == null ? void 0 : t.flavour) === "inputOnly" ? I({ inOptions: t }) : (t == null ? void 0 : t.flavour) === "inputWithLabelButton" || t != null && t.button || t != null && t.buttonText ? E({ inOptions: t }) : x({ inOptions: t });
}, ie = ({ inConfig: o, inValue: r } = {}) => {
  const t = o, e = t ? t.type : r;
  if (e === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof e != "string")
    throw new TypeError("type must be a string");
  return !0;
}, le = ({ inConfig: o, inValue: r } = {}) => {
  const t = o, e = t ? t.targetHtmlId : r;
  if (e === void 0)
    throw new Error('Missing compulsory key: "targetHtmlId"');
  if (typeof e != "string")
    throw new TypeError("targetHtmlId must be a string");
  if (e.trim().length === 0)
    throw new Error("targetHtmlId must be a non-empty string");
  return !0;
}, ue = ({ inConfig: o, inValue: r } = {}) => {
  const t = o, e = t ? t.data : r;
  if (e === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(e))
    throw new TypeError("data must be an Array");
  return !0;
}, de = ({ inConfig: o, inValue: r } = {}) => {
  const t = o, e = t ? t.columns : r;
  if (e === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(e))
    throw new TypeError("columns must be an Array");
  return !0;
}, be = ({ inConfig: o, inValue: r } = {}) => {
  const t = o, e = t ? t.classToApply : r;
  if (e === void 0)
    throw new Error('Missing compulsory key: "classToApply"');
  if (typeof e != "string")
    throw new TypeError("classToApply must be a string");
  return !0;
}, fe = ({ inConfig: o, inValue: r } = {}) => {
  const t = o, e = t ? t.appendPosition : r;
  if (e === void 0)
    throw new Error('Missing compulsory key: "appendPosition"');
  if (typeof e != "string")
    throw new TypeError("appendPosition must be a string");
  return !0;
}, pe = ({ inConfig: o, inValue: r } = {}) => {
  const t = o, e = t ? t.showLog : r;
  if (e === void 0)
    throw new Error('Missing compulsory key: "showLog"');
  if (typeof e != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, me = "table", ye = "", he = [], ge = [], we = "", Ne = "replace", $e = !1, $ = {
  type: me,
  targetHtmlId: ye,
  data: he,
  columns: ge,
  classToApply: we,
  appendPosition: Ne,
  showLog: $e
}, U = ({ inKey: o } = {}) => {
  const r = o;
  return r && r in $ ? $[r] : { ...$ };
};
Object.assign(U, $);
const H = ({ inConfig: o, config: r } = {}) => {
  const t = o ?? r;
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("Config must be an object");
  return ie({ inConfig: t }), le({ inConfig: t }), ue({ inConfig: t }), de({ inConfig: t }), be({ inConfig: t }), fe({ inConfig: t }), pe({ inConfig: t }), !0;
};
H.getSpec = U;
H.configSpec = $;
const Ae = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, Te = (o) => {
  const r = o;
  if (typeof globalThis > "u" || !r) return;
  globalThis.ks ?? (globalThis.ks = {});
  const t = typeof r == "function" ? r : r.render;
  globalThis.ks.jsonRenderersBuildForm = {
    meta: Ae,
    render: t,
    ...typeof r == "object" ? r : {}
  };
}, xe = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "appFormId"
  },
  children: []
}, Ce = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: []
}, je = {
  tagName: "label",
  textContent: "Label",
  attributes: {
    class: "form-label fw-semibold",
    for: "fieldId"
  }
}, Le = {
  tagName: "input",
  attributes: {
    type: "text",
    placeholder: "",
    class: "form-control",
    id: "fieldId",
    name: "fieldName"
  }
}, Ie = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, g = {
  form: xe,
  fieldWrapper: Ce,
  label: je,
  input: Le,
  submitButton: Ie
}, Q = ({ inColumn: o, inRow: r = {}, inIndex: t = 0 } = {}) => {
  var C, j;
  const e = o, s = r, n = t, l = (e == null ? void 0 : e.columnName) ?? `field_${n}`, d = (e == null ? void 0 : e.type) ?? "text", a = (e == null ? void 0 : e.label) ?? (e == null ? void 0 : e.title) ?? l, u = (e == null ? void 0 : e.id) ?? `form-${n}-${l.toLowerCase()}`, c = s[l] ?? (e == null ? void 0 : e.value), i = structuredClone(g.fieldWrapper), b = structuredClone(g.label);
  if (b.textContent = a, b.attributes.for = u, d === "checkbox") {
    i.attributes.class = "form-check mb-3";
    const f = structuredClone(g.input);
    return f.attributes.type = "checkbox", f.attributes.class = "form-check-input", f.attributes.id = u, f.attributes.name = l, f.attributes.value = "true", f.properties = { checked: !!(c ?? (e == null ? void 0 : e.checked) ?? !1) }, b.attributes.class = "form-check-label", i.children = [f, b], i;
  }
  if (d === "textarea") {
    const f = {
      tagName: "textarea",
      textContent: c ? String(c) : "",
      attributes: {
        class: (e == null ? void 0 : e.class) ?? "form-control",
        rows: String((e == null ? void 0 : e.rows) ?? 3),
        id: u,
        name: l,
        placeholder: (e == null ? void 0 : e.placeholder) ?? ""
      }
    };
    return i.children = [b, f], i;
  }
  if (d === "select") {
    const f = {
      tagName: "select",
      attributes: {
        class: (e == null ? void 0 : e.class) ?? "form-select",
        id: u,
        name: l
      },
      children: ((e == null ? void 0 : e.options) ?? []).map((y) => {
        const V = String(typeof y == "object" ? y.value : y), tt = typeof y == "object" ? y.label ?? y.value : String(y), et = c != null && String(c) === V;
        return {
          tagName: "option",
          textContent: tt,
          attributes: {
            value: V,
            ...et ? { selected: !0 } : {}
          }
        };
      })
    };
    return i.children = [b, f], i;
  }
  const p = structuredClone(g.input);
  if (p.attributes.type = d, p.attributes.id = u, p.attributes.name = l, e != null && e.placeholder && (p.attributes.placeholder = e.placeholder), e != null && e.class && (p.attributes.class = e.class), c != null && (p.attributes.value = String(c)), e != null && e.buttonText || e != null && e.button) {
    const f = {
      tagName: "button",
      textContent: e.buttonText ?? ((C = e.button) == null ? void 0 : C.text) ?? "Action",
      attributes: {
        type: "button",
        class: e.buttonClass ?? ((j = e.button) == null ? void 0 : j.class) ?? "btn btn-success",
        id: e.buttonId ?? `${u}-btn`
      }
    };
    return i.children = [b, p, f], i;
  }
  return i.children = [b, p], i;
}, N = ({ inColumns: o = [], inData: r = [], inOptions: t = {}, columns: e, data: s, options: n } = {}) => {
  const l = Array.isArray(o) && o.length > 0 ? o : Array.isArray(e) ? e : [], d = Array.isArray(r) && r.length > 0 ? r : Array.isArray(s) ? s : [], a = t && Object.keys(t).length > 0 ? t : n ?? {}, u = d[0] ?? {}, c = structuredClone(g.form);
  if (a != null && a.formId && (c.attributes.id = a.formId), a != null && a.className && (c.attributes.class = a.className), c.children = l.map(
    (i, b) => Q({ inColumn: i, inRow: u, inIndex: b })
  ), (a == null ? void 0 : a.showSubmit) !== !1 && (a == null ? void 0 : a.submitButton) !== !1) {
    const i = structuredClone(g.submitButton);
    a != null && a.submitLabel && (i.textContent = a.submitLabel), a != null && a.submitClass && (i.attributes.class = a.submitClass), c.children.push(i);
  }
  return c;
}, Se = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "inlineFormId"
  },
  children: []
}, Ee = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, W = {
  form: Se,
  submitButton: Ee
}, ke = ({ inColumn: o, inRow: r = {}, inIndex: t = 0 } = {}) => {
  var i, b;
  const e = o, s = r, n = t, l = (e == null ? void 0 : e.columnName) ?? `field_${n}`, d = (e == null ? void 0 : e.type) ?? "text", a = (e == null ? void 0 : e.label) ?? (e == null ? void 0 : e.title) ?? l, u = (e == null ? void 0 : e.id) ?? `form-${n}-${l.toLowerCase()}`, c = s[l] ?? (e == null ? void 0 : e.value);
  return e != null && e.buttonText || e != null && e.button ? E({
    inOptions: {
      label: a,
      type: d,
      id: u,
      name: l,
      placeholder: (e == null ? void 0 : e.placeholder) ?? "",
      class: (e == null ? void 0 : e.class) ?? "form-control",
      value: c != null ? String(c) : void 0,
      buttonText: e.buttonText ?? ((i = e.button) == null ? void 0 : i.text) ?? "Action",
      buttonClass: e.buttonClass ?? ((b = e.button) == null ? void 0 : b.class) ?? "btn btn-outline-primary",
      buttonId: e.buttonId ?? `${u}-btn`,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  }) : x({
    inOptions: {
      label: a,
      type: d,
      id: u,
      name: l,
      placeholder: (e == null ? void 0 : e.placeholder) ?? "",
      class: (e == null ? void 0 : e.class) ?? "form-control",
      value: c != null ? String(c) : void 0,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  });
}, D = ({ inColumns: o = [], inData: r = [], inOptions: t = {}, columns: e, data: s, options: n } = {}) => {
  const l = Array.isArray(o) && o.length > 0 ? o : Array.isArray(e) ? e : [], d = Array.isArray(r) && r.length > 0 ? r : Array.isArray(s) ? s : [], a = t && Object.keys(t).length > 0 ? t : n ?? {}, u = d[0] ?? {}, c = structuredClone(W.form);
  if (a != null && a.formId && (c.attributes.id = a.formId), a != null && a.className && (c.attributes.class = a.className), c.children = l.map(
    (i, b) => ke({ inColumn: i, inRow: u, inIndex: b })
  ), (a == null ? void 0 : a.showSubmit) !== !1 && (a == null ? void 0 : a.submitButton) !== !1) {
    const i = structuredClone(W.submitButton);
    a != null && a.submitLabel && (i.textContent = a.submitLabel), a != null && a.submitClass && (i.attributes.class = a.submitClass), c.children.push(i);
  }
  return c;
}, Be = {
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
}, ve = {
  buttonBar: Be
}, F = ({ inColumns: o = [], inData: r = [], inOptions: t = {}, columns: e, data: s, options: n } = {}) => {
  const l = Array.isArray(o) && o.length > 0 ? o : Array.isArray(e) ? e : [], d = Array.isArray(r) && r.length > 0 ? r : Array.isArray(s) ? s : [], a = t && Object.keys(t).length > 0 ? t : n ?? {}, u = N({
    inColumns: l,
    inData: d,
    inOptions: { ...a, submitButton: !1, showSubmit: !1 }
  }), c = structuredClone(ve.buttonBar);
  return a.submitLabel && (c.children[0].textContent = a.submitLabel), a.cancelLabel && (c.children[1].textContent = a.cancelLabel), u.children.push(c), u;
}, De = {
  stacked: N,
  vertical: N,
  inline: D,
  horizontal: D,
  withButtons: F,
  buttons: F
}, X = ({
  type: o = "stacked",
  columns: r = [],
  data: t = [],
  options: e = {},
  inType: s,
  inColumns: n,
  inData: l,
  inOptions: d
} = {}) => {
  const a = s ?? o, u = n ?? r, c = l ?? t, i = d ?? e;
  return H({
    inConfig: {
      type: "form",
      columns: u,
      data: c,
      options: i
    }
  }), (De[a] || N)({
    inColumns: u,
    inData: c,
    inOptions: i
  });
}, Fe = N, Pe = Q;
Te({
  render: X,
  stacked: N,
  inline: D,
  withButtons: F,
  renderForm: Fe,
  renderField: Pe
});
const Re = /* @__PURE__ */ new Set([
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
]), Me = (o) => String(o ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "field", Z = (o, r) => {
  var t;
  if (((t = o == null ? void 0 : o.attributes) == null ? void 0 : t.id) === r) return o;
  for (const e of (o == null ? void 0 : o.children) ?? []) {
    const s = Z(e, r);
    if (s) return s;
  }
}, He = (o, r) => {
  const t = /* @__PURE__ */ new Set();
  return o.flatMap((e) => {
    const s = e == null ? void 0 : e[r];
    if (s == null) return [];
    const n = String(s).trim(), l = n.toLocaleLowerCase();
    return !n || t.has(l) ? [] : (t.add(l), [n]);
  });
}, Ve = ({ formSpec: o, columns: r, data: t } = {}) => {
  const e = r.flatMap((n, l) => {
    const d = n.type ?? "text";
    if (!n.dataListId || !Re.has(d)) return [];
    const a = He(t, n.columnName);
    if (!a.length) return [];
    const u = n.id ?? `form-${l}-${Me(n.columnName)}`, c = Z(o, u);
    if (!c) throw new Error(`Form input not found for datalist column "${n.columnName}"`);
    c.attributes.list = n.dataListId;
    const i = v({ inData: a });
    return i.attributes = { id: n.dataListId }, [i];
  }), s = o.children.findIndex(
    (n) => {
      var l;
      return n.tagName === "button" && ((l = n.attributes) == null ? void 0 : l.type) === "submit";
    }
  );
  return o.children.splice(s < 0 ? o.children.length : s, 0, ...e), o;
}, Ke = ({
  inColumns: o = [],
  inData: r = [],
  inOptions: t = {},
  columns: e,
  data: s,
  options: n
} = {}) => {
  const l = o && o.length > 0 ? o : e ?? [], d = r && r.length > 0 ? r : s ?? [], a = t && Object.keys(t).length > 0 ? t : n ?? {}, u = a.prefill === !1 ? [] : d, c = X({
    inColumns: l,
    inData: u,
    inOptions: a
  });
  return Ve({ formSpec: c, columns: l, data: d });
}, _e = {
  table: O,
  tableFromSpec: O,
  select: Gt,
  selectOptionsOnly: Yt,
  dataList: v,
  datalist: v,
  searchInput: B,
  search: B,
  inputRow: B,
  form: Ke
}, Oe = ({
  type: o = h.type,
  data: r = h.data,
  columns: t = h.columns,
  options: e = h.options,
  showLog: s = h.showLog
} = {}) => {
  const c = {
    type: o,
    data: r,
    columns: t,
    options: e,
    showLog: s
  };
  G({ inConfig: c });
  const i = _e[c.type];
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
ot({ render: Oe, getSpec: P, spec: m });
export {
  Oe as default,
  P as getSpec,
  Oe as render,
  m as spec
};
