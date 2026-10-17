const U = {
  version: "1.22.0",
  name: "json-renderers-build"
}, X = (s) => {
  s && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: U,
    render: s
  });
}, Y = ({ inConfig: s, inValue: r } = {}) => {
  const e = s, t = e ? e.type : r;
  if (t === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof t != "string")
    throw new TypeError("type must be a string");
  return !0;
}, Z = ({ inConfig: s, inValue: r } = {}) => {
  const e = s, t = e ? e.targetHtmlId : r;
  if (t === void 0)
    throw new Error('Missing compulsory key: "targetHtmlId"');
  if (typeof t != "string")
    throw new TypeError("targetHtmlId must be a string");
  if (t.trim().length === 0)
    throw new Error("targetHtmlId must be a non-empty string");
  return !0;
}, O = ({ inConfig: s, inValue: r } = {}) => {
  const e = s, t = e ? e.data : r;
  if (t === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(t))
    throw new TypeError("data must be an Array");
  return !0;
}, tt = ({ inConfig: s, inValue: r } = {}) => {
  const e = s, t = e ? e.columns : r;
  if (t === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(t))
    throw new TypeError("columns must be an Array");
  return !0;
}, et = ({ inConfig: s, inValue: r } = {}) => {
  const e = s, t = e ? e.classToApply : r;
  if (t === void 0)
    throw new Error('Missing compulsory key: "classToApply"');
  if (typeof t != "string")
    throw new TypeError("classToApply must be a string");
  return !0;
}, rt = ({ inConfig: s, inValue: r } = {}) => {
  const e = s, t = e ? e.appendPosition : r;
  if (t === void 0)
    throw new Error('Missing compulsory key: "appendPosition"');
  if (typeof t != "string")
    throw new TypeError("appendPosition must be a string");
  return !0;
}, st = ({ inConfig: s, inValue: r } = {}) => {
  const e = s, t = e ? e.showLog : r;
  if (t === void 0)
    throw new Error('Missing compulsory key: "showLog"');
  if (typeof t != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, nt = "table", at = "", ot = [], it = [], ct = "", lt = "replace", ut = !1, w = {
  type: nt,
  targetHtmlId: at,
  data: ot,
  columns: it,
  classToApply: ct,
  appendPosition: lt,
  showLog: ut
}, V = ({ inKey: s } = {}) => {
  const r = s;
  return r && r in w ? w[r] : { ...w };
};
Object.assign(V, w);
const j = ({ inConfig: s, config: r } = {}) => {
  const e = s ?? r;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return Y({ inConfig: e }), Z({ inConfig: e }), O({ inConfig: e }), tt({ inConfig: e }), et({ inConfig: e }), rt({ inConfig: e }), st({ inConfig: e }), !0;
};
j.getSpec = V;
j.configSpec = w;
const dt = (s) => typeof s == "object" && s !== null && !Array.isArray(s), bt = (s, r) => {
  if (!dt(s)) return;
  let e = {};
  for (const [t, o] of Object.entries(s))
    e[t] = A(r, o);
  return e;
}, ft = (s, r) => {
  const e = structuredClone(s);
  return Array.isArray(e) ? e.map((o) => A(r, o)) : void 0;
}, K = (s, r, e) => {
  if (s === "${agg:count}" && "rowData" in r) {
    if (Array.isArray(r == null ? void 0 : r.rowData))
      return r == null ? void 0 : r.rowData.length;
  } else
    return s === "${rowValue}" && "rowData" in r ? r == null ? void 0 : r.rowData : s.replace(/\$\{(\w+)\}/g, (t, o) => r[o] !== void 0 ? r[o] : t);
}, pt = (s, r) => K(s, r), ht = (s, r, e) => {
  if (r == null)
    throw new TypeError("inTemplate is required");
  if (typeof r != "object" && typeof r != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!s || typeof s != "object" || Array.isArray(s))
    throw new TypeError("inElement must be an object");
  return !0;
}, A = (s, r, e) => {
  const t = s, o = r;
  ht(t, o);
  const n = structuredClone(o);
  return typeof n == "string" ? K(n, t) : (n === null || typeof n != "object" || ("textContent" in n && (n.textContent = pt(n == null ? void 0 : n.textContent, t)), "attributes" in n && (n.attributes = bt(n == null ? void 0 : n.attributes, t)), "children" in n && (n.children = ft(n == null ? void 0 : n.children, t))), n);
}, mt = (s, r) => {
  if (!Array.isArray(s))
    throw new TypeError("inSource must be an Array");
  if (s.length === 0)
    throw new Error("inSource cannot be empty");
  for (let e = 0; e < s.length; e++)
    if (!s[e] || typeof s[e] != "object")
      throw new TypeError(`inSource[${e}] must be an object`);
  if (!r || typeof r != "object" && typeof r != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, L = (s, r) => {
  const e = s, t = r;
  return mt(e, t), e.map((o) => A(o, t));
}, yt = (s, r) => s.map((t) => ({
  ...t,
  rowData: r[t.columnName]
})), gt = (s, r, e) => {
  var o, n, l, d, a, u;
  if (!Array.isArray(s))
    throw new TypeError("inColumns must be an Array");
  if (s.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!c || typeof c != "object")
      throw new TypeError(`inColumns[${i}] must be an object`);
    if (typeof c.columnName != "string" || !c.columnName.trim())
      throw new TypeError(`inColumns[${i}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(r))
    throw new TypeError("inData must be an Array");
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    if (!c || typeof c != "object")
      throw new TypeError(`inData[${i}] must be an object`);
  }
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inSpec must be an object");
  const t = ((l = (n = (o = s[0]) == null ? void 0 : o.template) == null ? void 0 : n.body) == null ? void 0 : l.tr) || "buildBodyTr";
  if (!(t in e))
    throw new Error(`Row template "${t}" not found in inSpec`);
  for (let i = 0; i < s.length; i++) {
    const c = s[i], b = ((a = (d = c.template) == null ? void 0 : d.body) == null ? void 0 : a.cell) || ((u = c.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(b in e))
      throw new Error(`Cell template "${b}" for column "${c.columnName}" not found in inSpec`);
  }
  return !0;
}, wt = (s, r) => s.map((t) => {
  var d, a, u;
  const o = ((a = (d = t.template) == null ? void 0 : d.body) == null ? void 0 : a.cell) || ((u = t.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", n = r[o];
  return A(t, n);
}), Nt = (s, r, e) => {
  var u, i, c;
  gt(s, r, e);
  const t = s, o = r, n = e, l = ((c = (i = (u = t[0]) == null ? void 0 : u.template) == null ? void 0 : i.body) == null ? void 0 : c.tr) || "buildBodyTr", d = n[l];
  return o.map((b) => {
    const p = A(b, d), $ = yt(t, b), C = wt($, n);
    return p.children = C, p;
  });
}, R = (s, r) => {
  var e;
  if (((e = s == null ? void 0 : s.attributes) == null ? void 0 : e["data-role"]) === r) return s;
  for (const t of (s == null ? void 0 : s.children) ?? []) {
    const o = R(t, r);
    if (o) return o;
  }
  return null;
}, At = (s, r) => {
  const e = s[r.fileName], t = r.dataRole ? R(e, r.dataRole) : e;
  return (r.filePath ?? []).reduce((o, n) => o[n], t);
}, xt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, $t = {
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
}, It = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, jt = {
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
}, Bt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, St = {
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
}, P = {
  buildBodyTr: xt,
  buildColGroup: $t,
  buildHeader: Ct,
  buildFooter: Tt,
  buildBodyCell: It,
  button: jt,
  buttonCell: Lt,
  buildOption: Bt,
  buildSelect: St,
  buildDataList: vt
}, kt = "table", Rt = {
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
], W = {
  tagName: kt,
  attributes: Rt,
  children: Pt
}, Ft = [
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
], Et = [
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
], T = (s) => Array.isArray(s) ? s : [s], E = {
  set: (s, r, e) => {
    s[r] = e;
  },
  push: (s, r, e) => {
    s[r].push(...T(e));
  },
  unshift: (s, r, e) => {
    s[r].unshift(...T(e));
  },
  pushToRows: (s, r, e) => {
    s[r].forEach((t) => {
      t.children.push(...structuredClone(T(e)));
    });
  },
  unshiftToRows: (s, r, e) => {
    s[r].forEach((t) => {
      t.children.unshift(...structuredClone(T(e)));
    });
  },
  unshiftSerialToRows: (s, r, e) => {
    s[r].forEach((t, o) => {
      const n = structuredClone(e);
      n.textContent = o + 1, t.children.unshift(n);
    });
  }
}, G = (s, r, e) => {
  const t = r.dataRole ? R(s[r.fileName], r.dataRole) : s[r.fileName], o = [...r.filePath ?? []], n = o.pop(), l = o.reduce((a, u) => a[u], t);
  (E[r.action] || E.set)(l, n, e);
}, y = { data: {}, base: W, spec: P }, _ = {
  fromCollection: L,
  twoDimensional: Nt
}, Dt = (s) => {
  s.forEach((r) => {
    const e = At(y, r.sourcePath);
    if (e) {
      const t = _[r.func](e, P[r.templateKey]);
      G(y, r.destinationPath, t);
    } else
      console.log("   !instruction : ", r), console.log("   !source : ", e);
  });
}, Ht = (s) => {
  s.forEach((r) => {
    const e = _[r.func](
      y.data.columns,
      y.data.data,
      P
    );
    G(y, r.destinationPath, e);
  });
}, Mt = (s) => (y.data = s, Dt(Ft), Ht(Et), W), D = ({
  inData: s,
  inColumns: r,
  inType: e,
  footer: t = [],
  options: o
} = {}) => Mt({
  columns: r,
  data: s
}), Vt = {
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
}, Wt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, N = {
  buildOption: Vt,
  buildSelect: Kt,
  buildDataList: Wt
}, Gt = ({ inData: s = [] } = {}) => {
  const r = (s ?? []).map(
    (t) => typeof t == "object" && t !== null ? t : { rowValue: t }
  ), e = structuredClone(N.buildSelect);
  return e.children = L(r, N.buildOption), e;
}, _t = ({ inData: s = [], inColumns: r = [] } = {}) => r.map((t) => {
  const o = structuredClone(N.buildOption);
  o.textContent = o.textContent.replace("rowValue", t.columnName), o.attributes.value = o.attributes.value.replace("rowValue", t.columnName);
  const n = L(s, o);
  return console.log("createdArray : ", n[0], o), n;
}), H = ({ inData: s = [] } = {}) => {
  const r = (s ?? []).map(
    (t) => typeof t == "object" && t !== null ? t : { rowValue: t }
  ), e = structuredClone(N.buildDataList);
  return e.children = L(r, N.buildOption), e;
}, qt = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, zt = (s) => {
  const r = s;
  if (typeof globalThis > "u" || !r) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof r == "function" ? r : r.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: qt,
    render: e,
    ...typeof r == "object" ? r : {}
  };
}, Jt = "input", Qt = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, Ut = {
  tagName: Jt,
  attributes: Qt
}, I = ({ inOptions: s = {}, options: r = {} } = {}) => {
  const e = s && Object.keys(s).length > 0 ? s : r, t = structuredClone(Ut);
  return e.placeholder && (t.attributes.placeholder = e.placeholder), e.class && (t.attributes.class = e.class), e.id && (t.attributes.id = e.id), e.name && (t.attributes.name = e.name), e.type && (t.attributes.type = e.type), e.value && (t.attributes.value = e.value), t;
}, Xt = "div", Yt = {
  class: "d-flex align-items-center gap-2"
}, Zt = [
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
], Ot = {
  tagName: Xt,
  attributes: Yt,
  children: Zt
}, x = ({ inOptions: s = {}, options: r = {} } = {}) => {
  const e = s && Object.keys(s).length > 0 ? s : r, t = structuredClone(Ot), o = t.children[0], n = t.children[1];
  return e.label && (o.textContent = e.label), e.id && (o.attributes.for = e.id, n.attributes.id = e.id), e.placeholder && (n.attributes.placeholder = e.placeholder), e.class && (n.attributes.class = e.class), e.name && (n.attributes.name = e.name), e.type && (n.attributes.type = e.type), e.wrapperClass && (t.attributes.class = e.wrapperClass), e.labelClass && (o.attributes.class = e.labelClass), t;
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
], se = {
  tagName: te,
  attributes: ee,
  children: re
}, B = ({ inOptions: s = {}, options: r = {} } = {}) => {
  const e = s && Object.keys(s).length > 0 ? s : r, t = structuredClone(se), o = t.children[0], n = t.children[1], l = t.children[2];
  return e.label && (o.textContent = e.label), e.id && (o.attributes.for = e.id, n.attributes.id = e.id), e.placeholder && (n.attributes.placeholder = e.placeholder), e.class && (n.attributes.class = e.class), e.name && (n.attributes.name = e.name), e.type && (n.attributes.type = e.type), e.buttonText && (l.textContent = e.buttonText), e.buttonClass && (l.attributes.class = e.buttonClass), e.buttonId && (l.attributes.id = e.buttonId), e.wrapperClass && (t.attributes.class = e.wrapperClass), e.labelClass && (o.attributes.class = e.labelClass), t;
}, ne = {
  input: I,
  inputOnly: I,
  inputWithLabel: x,
  inputWithLabelButton: B
}, ae = ({
  type: s = "inputWithLabel",
  options: r = {},
  inType: e,
  inOptions: t
} = {}) => {
  const o = e ?? s, n = t ?? r;
  return (ne[o] || x)({ inOptions: n, options: n });
};
zt({
  render: ae,
  inputOnly: I,
  inputWithLabel: x,
  inputWithLabelButton: B
});
const S = ({ inOptions: s = {}, options: r = {} } = {}) => {
  const e = s && Object.keys(s).length > 0 ? s : r;
  return (e == null ? void 0 : e.label) === !1 || (e == null ? void 0 : e.flavour) === "inputOnly" ? I({ inOptions: e }) : (e == null ? void 0 : e.flavour) === "inputWithLabelButton" || e != null && e.button || e != null && e.buttonText ? B({ inOptions: e }) : x({ inOptions: e });
}, oe = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, ie = (s) => {
  const r = s;
  if (typeof globalThis > "u" || !r) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof r == "function" ? r : r.render;
  globalThis.ks.jsonRenderersBuildForm = {
    meta: oe,
    render: e,
    ...typeof r == "object" ? r : {}
  };
}, ce = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "appFormId"
  },
  children: []
}, le = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: []
}, ue = {
  tagName: "label",
  textContent: "Label",
  attributes: {
    class: "form-label fw-semibold",
    for: "fieldId"
  }
}, de = {
  tagName: "input",
  attributes: {
    type: "text",
    placeholder: "",
    class: "form-control",
    id: "fieldId",
    name: "fieldName"
  }
}, be = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, m = {
  form: ce,
  fieldWrapper: le,
  label: ue,
  input: de,
  submitButton: be
}, q = ({ inColumn: s, inRow: r = {}, inIndex: e = 0 } = {}) => {
  var $, C;
  const t = s, o = r, n = e, l = (t == null ? void 0 : t.columnName) ?? `field_${n}`, d = (t == null ? void 0 : t.type) ?? "text", a = (t == null ? void 0 : t.label) ?? (t == null ? void 0 : t.title) ?? l, u = (t == null ? void 0 : t.id) ?? `form-${n}-${l.toLowerCase()}`, i = o[l] ?? (t == null ? void 0 : t.value), c = structuredClone(m.fieldWrapper), b = structuredClone(m.label);
  if (b.textContent = a, b.attributes.for = u, d === "checkbox") {
    c.attributes.class = "form-check mb-3";
    const f = structuredClone(m.input);
    return f.attributes.type = "checkbox", f.attributes.class = "form-check-input", f.attributes.id = u, f.attributes.name = l, f.attributes.value = "true", f.properties = { checked: !!(i ?? (t == null ? void 0 : t.checked) ?? !1) }, b.attributes.class = "form-check-label", c.children = [f, b], c;
  }
  if (d === "textarea") {
    const f = {
      tagName: "textarea",
      textContent: i ? String(i) : "",
      attributes: {
        class: (t == null ? void 0 : t.class) ?? "form-control",
        rows: String((t == null ? void 0 : t.rows) ?? 3),
        id: u,
        name: l,
        placeholder: (t == null ? void 0 : t.placeholder) ?? ""
      }
    };
    return c.children = [b, f], c;
  }
  if (d === "select") {
    const f = {
      tagName: "select",
      attributes: {
        class: (t == null ? void 0 : t.class) ?? "form-select",
        id: u,
        name: l
      },
      children: ((t == null ? void 0 : t.options) ?? []).map((h) => {
        const F = String(typeof h == "object" ? h.value : h), J = typeof h == "object" ? h.label ?? h.value : String(h), Q = i != null && String(i) === F;
        return {
          tagName: "option",
          textContent: J,
          attributes: {
            value: F,
            ...Q ? { selected: !0 } : {}
          }
        };
      })
    };
    return c.children = [b, f], c;
  }
  const p = structuredClone(m.input);
  if (p.attributes.type = d, p.attributes.id = u, p.attributes.name = l, t != null && t.placeholder && (p.attributes.placeholder = t.placeholder), t != null && t.class && (p.attributes.class = t.class), i != null && (p.attributes.value = String(i)), t != null && t.buttonText || t != null && t.button) {
    const f = {
      tagName: "button",
      textContent: t.buttonText ?? (($ = t.button) == null ? void 0 : $.text) ?? "Action",
      attributes: {
        type: "button",
        class: t.buttonClass ?? ((C = t.button) == null ? void 0 : C.class) ?? "btn btn-success",
        id: t.buttonId ?? `${u}-btn`
      }
    };
    return c.children = [b, p, f], c;
  }
  return c.children = [b, p], c;
}, g = ({ inColumns: s = [], inData: r = [], inOptions: e = {}, columns: t, data: o, options: n } = {}) => {
  const l = Array.isArray(s) && s.length > 0 ? s : Array.isArray(t) ? t : [], d = Array.isArray(r) && r.length > 0 ? r : Array.isArray(o) ? o : [], a = e && Object.keys(e).length > 0 ? e : n ?? {}, u = d[0] ?? {}, i = structuredClone(m.form);
  if (a != null && a.formId && (i.attributes.id = a.formId), a != null && a.className && (i.attributes.class = a.className), i.children = l.map(
    (c, b) => q({ inColumn: c, inRow: u, inIndex: b })
  ), (a == null ? void 0 : a.showSubmit) !== !1 && (a == null ? void 0 : a.submitButton) !== !1) {
    const c = structuredClone(m.submitButton);
    a != null && a.submitLabel && (c.textContent = a.submitLabel), a != null && a.submitClass && (c.attributes.class = a.submitClass), i.children.push(c);
  }
  return i;
}, fe = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "inlineFormId"
  },
  children: []
}, pe = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, M = {
  form: fe,
  submitButton: pe
}, he = ({ inColumn: s, inRow: r = {}, inIndex: e = 0 } = {}) => {
  var c, b;
  const t = s, o = r, n = e, l = (t == null ? void 0 : t.columnName) ?? `field_${n}`, d = (t == null ? void 0 : t.type) ?? "text", a = (t == null ? void 0 : t.label) ?? (t == null ? void 0 : t.title) ?? l, u = (t == null ? void 0 : t.id) ?? `form-${n}-${l.toLowerCase()}`, i = o[l] ?? (t == null ? void 0 : t.value);
  return t != null && t.buttonText || t != null && t.button ? B({
    inOptions: {
      label: a,
      type: d,
      id: u,
      name: l,
      placeholder: (t == null ? void 0 : t.placeholder) ?? "",
      class: (t == null ? void 0 : t.class) ?? "form-control",
      value: i != null ? String(i) : void 0,
      buttonText: t.buttonText ?? ((c = t.button) == null ? void 0 : c.text) ?? "Action",
      buttonClass: t.buttonClass ?? ((b = t.button) == null ? void 0 : b.class) ?? "btn btn-outline-primary",
      buttonId: t.buttonId ?? `${u}-btn`,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  }) : x({
    inOptions: {
      label: a,
      type: d,
      id: u,
      name: l,
      placeholder: (t == null ? void 0 : t.placeholder) ?? "",
      class: (t == null ? void 0 : t.class) ?? "form-control",
      value: i != null ? String(i) : void 0,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  });
}, v = ({ inColumns: s = [], inData: r = [], inOptions: e = {}, columns: t, data: o, options: n } = {}) => {
  const l = Array.isArray(s) && s.length > 0 ? s : Array.isArray(t) ? t : [], d = Array.isArray(r) && r.length > 0 ? r : Array.isArray(o) ? o : [], a = e && Object.keys(e).length > 0 ? e : n ?? {}, u = d[0] ?? {}, i = structuredClone(M.form);
  if (a != null && a.formId && (i.attributes.id = a.formId), a != null && a.className && (i.attributes.class = a.className), i.children = l.map(
    (c, b) => he({ inColumn: c, inRow: u, inIndex: b })
  ), (a == null ? void 0 : a.showSubmit) !== !1 && (a == null ? void 0 : a.submitButton) !== !1) {
    const c = structuredClone(M.submitButton);
    a != null && a.submitLabel && (c.textContent = a.submitLabel), a != null && a.submitClass && (c.attributes.class = a.submitClass), i.children.push(c);
  }
  return i;
}, me = {
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
}, ye = {
  buttonBar: me
}, k = ({ inColumns: s = [], inData: r = [], inOptions: e = {}, columns: t, data: o, options: n } = {}) => {
  const l = Array.isArray(s) && s.length > 0 ? s : Array.isArray(t) ? t : [], d = Array.isArray(r) && r.length > 0 ? r : Array.isArray(o) ? o : [], a = e && Object.keys(e).length > 0 ? e : n ?? {}, u = g({
    inColumns: l,
    inData: d,
    inOptions: { ...a, submitButton: !1, showSubmit: !1 }
  }), i = structuredClone(ye.buttonBar);
  return a.submitLabel && (i.children[0].textContent = a.submitLabel), a.cancelLabel && (i.children[1].textContent = a.cancelLabel), u.children.push(i), u;
}, ge = {
  stacked: g,
  vertical: g,
  inline: v,
  horizontal: v,
  withButtons: k,
  buttons: k
}, z = ({
  type: s = "stacked",
  columns: r = [],
  data: e = [],
  options: t = {},
  inType: o,
  inColumns: n,
  inData: l,
  inOptions: d
} = {}) => {
  const a = o ?? s, u = n ?? r, i = l ?? e, c = d ?? t;
  return j({
    inConfig: {
      type: "form",
      columns: u,
      data: i,
      options: c
    }
  }), (ge[a] || g)({
    inColumns: u,
    inData: i,
    inOptions: c
  });
}, we = g, Ne = q;
ie({
  render: z,
  stacked: g,
  inline: v,
  withButtons: k,
  renderForm: we,
  renderField: Ne
});
const Ae = ({
  inType: s = "stacked",
  inData: r,
  inColumns: e
} = {}) => z({
  type: s,
  columns: e,
  data: r
}), xe = {
  table: D,
  tableFromSpec: D,
  select: Gt,
  selectOptionsOnly: _t,
  dataList: H,
  datalist: H,
  searchInput: S,
  search: S,
  inputRow: S,
  form: Ae
}, $e = (s = {}) => {
  const r = j(s), e = r == null ? void 0 : r.showLog, t = r.type;
  let o = t, n = t;
  if (t.includes(".")) {
    const a = t.split(".");
    o = a[0], n = a[1];
  }
  const l = xe[o];
  if (!l)
    throw new Error(`Renderer for type "${o}" not found.`);
  const d = l({
    inType: n,
    inColumns: r.columns,
    inData: r.data,
    inOptions: r.options,
    options: r.options
  });
  return e && console.log("json-renderers-build output:", d), d;
};
X($e);
export {
  $e as default,
  $e as render
};
