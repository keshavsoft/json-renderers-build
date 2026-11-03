const R = {
  version: "1.22.0",
  name: "json-renderers-build"
}, O = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: R,
    render: t
  });
}, k = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.type;
  if (a === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof a != "string")
    throw new TypeError("type must be a string");
  return !0;
}, L = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.data;
  if (a === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(a))
    throw new TypeError("data must be an Array");
  return !0;
}, K = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.columns;
  if (a === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(a))
    throw new TypeError("columns must be an Array");
  return !0;
}, E = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.showLog;
  if (a !== void 0 && typeof a != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, G = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return k(e), L(e), K(e), E(e), !0;
}, D = "table", I = "", W = [], H = [], V = "", M = "replace", q = !1, y = {
  type: D,
  targetHtmlId: I,
  data: W,
  columns: H,
  classToApply: V,
  appendPosition: M,
  showLog: q
}, U = (t) => {
  const e = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return e && e in y ? y[e] : { ...y };
};
Object.assign(U, y);
const _ = {
  simple: {
    base: {
      tagName: "div",
      attributes: {
        "data-role": "table-parent"
      },
      children: [
        {
          tagName: "table",
          attributes: {
            class: "table table-hover table-striped align-middle border mb-0"
          },
          children: [
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
          ]
        }
      ]
    },
    single: [
      {
        narration: "Build column widths",
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
        narration: "Build table header",
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
    ],
    double: [
      {
        narration: "Build table body",
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
    ]
  },
  withFooter: {
    base: {
      tagName: "table",
      attributes: {
        class: "table table-hover table-striped align-middle border mb-0"
      },
      children: [
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
      ]
    },
    single: [
      {
        narration: "Build column widths",
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
        narration: "Build table header",
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
        narration: "Build footer input cells",
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
    ],
    double: [
      {
        narration: "Build table body",
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
    ]
  },
  bodyOnly: {
    base: {
      tagName: "tbody",
      attributes: {
        "data-role": "table-body"
      },
      children: []
    },
    single: [],
    double: [
      {
        narration: "Build table body",
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
    ]
  },
  footerOnly: {
    base: {
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
    },
    single: [
      {
        narration: "Build footer input cells",
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
    ],
    double: []
  },
  headerOnly: {
    base: {
      tagName: "table",
      attributes: {
        class: "table table-hover table-striped align-middle border mb-0"
      },
      children: [
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
        }
      ]
    },
    single: [
      {
        narration: "Build column widths",
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
        narration: "Build table header",
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
    ],
    double: []
  }
}, z = {
  base: {
    tagName: "select",
    attributes: {
      id: "${columnName}",
      "data-name": "${columnName}"
    },
    children: []
  }
}, J = {
  base: {
    tagName: "datalist",
    attributes: {
      id: "${columnName}",
      "data-name": "${columnName}"
    },
    children: []
  }
}, Q = {
  base: {
    tagName: "div",
    attributes: {
      class: "d-flex align-items-center gap-2"
    },
    children: [
      {
        tagName: "label",
        textContent: "${label}",
        attributes: {
          class: "form-label mb-0 text-nowrap fw-semibold",
          for: "${id}"
        }
      },
      {
        tagName: "input",
        attributes: {
          type: "search",
          placeholder: "${placeholder}",
          class: "form-control",
          id: "${id}"
        }
      }
    ]
  }
}, X = {
  base: {
    tagName: "div",
    attributes: {
      class: "card shadow-sm border-0"
    },
    children: [
      {
        tagName: "div",
        attributes: {
          class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center"
        },
        children: [
          {
            tagName: "h2",
            textContent: "${title}",
            attributes: {
              class: "h5 fw-bold mb-0 text-dark"
            }
          }
        ]
      },
      {
        tagName: "div",
        attributes: {
          class: "card-body p-4"
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
      }
    ]
  }
}, p = {
  table: _,
  select: z,
  dataList: J,
  searchInput: Q,
  form: X
}, Y = (t) => typeof t == "object" && t !== null && !Array.isArray(t), Z = (t, e) => {
  if (!Y(t)) return;
  let a = {};
  for (const [o, r] of Object.entries(t))
    a[o] = h(e, r);
  return a;
}, tt = (t, e) => {
  const a = structuredClone(t);
  return Array.isArray(a) ? a.map((r) => h(e, r)) : void 0;
}, A = (t, e, a) => {
  if (t === "${agg:count}" && "rowData" in e) {
    if (Array.isArray(e == null ? void 0 : e.rowData))
      return e == null ? void 0 : e.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in e ? e == null ? void 0 : e.rowData : t.replace(/\$\{(\w+)\}/g, (o, r) => e[r] !== void 0 ? e[r] : o);
}, et = (t, e) => A(t, e), at = (t, e, a) => {
  if (a && console.log("inElement : ", t), a && console.log("inTemplate : ", e), e == null)
    throw new TypeError("inTemplate is required");
  if (typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, ot = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, rt = (t) => {
  var e, a;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).applyTemplate ?? (e.applyTemplate = t), (a = globalThis.ks).transformerFuncs ?? (a.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: ot,
    applyTemplate: t
  });
}, h = (t, e, a) => {
  const o = t, r = e;
  at(o, r, a);
  const l = structuredClone(r);
  return typeof l == "string" ? A(l, o) : (l === null || typeof l != "object" || ("textContent" in l && (l.textContent = et(l == null ? void 0 : l.textContent, o)), "attributes" in l && (l.attributes = Z(l == null ? void 0 : l.attributes, o)), "children" in l && (l.children = tt(l == null ? void 0 : l.children, o))), l);
};
rt(h);
const lt = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("inSource must be an Array");
  if (t.length === 0)
    throw new Error("inSource cannot be empty");
  for (let a = 0; a < t.length; a++)
    if (!t[a] || typeof t[a] != "object")
      throw new TypeError(`inSource[${a}] must be an object`);
  if (!e || typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, f = (t, e) => {
  const a = t, o = e;
  return lt(a, o), a.map((r) => h(r, o));
}, w = (t) => Array.isArray(t) ? t : [t], T = (t, e, a) => {
  t[e] = a;
}, nt = (t, e, a) => {
  t[e].push(...w(a));
}, st = (t, e, a) => {
  t[e].unshift(...w(a));
}, it = (t, e, a) => {
  t[e].forEach((o) => {
    o.children.push(...structuredClone(w(a)));
  });
}, ct = (t, e, a) => {
  t[e].forEach((o) => {
    o.children.unshift(...structuredClone(w(a)));
  });
}, ut = (t, e, a) => {
  t[e].forEach((o, r) => {
    const l = structuredClone(a);
    l.textContent = r + 1, o.children.unshift(l);
  });
}, dt = {
  set: T,
  push: nt,
  unshift: st,
  pushToRows: it,
  unshiftToRows: ct,
  unshiftSerialToRows: ut
}, bt = (t, e) => t.map((o) => ({
  ...o,
  rowData: e[o.columnName]
})), mt = (t, e, a) => {
  var r, l, n, c, d, s;
  if (!Array.isArray(t))
    throw new TypeError("inColumns must be an Array");
  if (t.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let i = 0; i < t.length; i++) {
    const u = t[i];
    if (!u || typeof u != "object")
      throw new TypeError(`inColumns[${i}] must be an object`);
    if (typeof u.columnName != "string" || !u.columnName.trim())
      throw new TypeError(`inColumns[${i}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(e))
    throw new TypeError("inData must be an Array");
  for (let i = 0; i < e.length; i++) {
    const u = e[i];
    if (!u || typeof u != "object")
      throw new TypeError(`inData[${i}] must be an object`);
  }
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("inSpec must be an object");
  const o = ((n = (l = (r = t[0]) == null ? void 0 : r.template) == null ? void 0 : l.body) == null ? void 0 : n.tr) || "buildBodyTr";
  if (!(o in a))
    throw new Error(`Row template "${o}" not found in inSpec`);
  for (let i = 0; i < t.length; i++) {
    const u = t[i], b = ((d = (c = u.template) == null ? void 0 : c.body) == null ? void 0 : d.cell) || ((s = u.template) == null ? void 0 : s.bodyCell) || "buildBodyCell";
    if (!(b in a))
      throw new Error(`Cell template "${b}" for column "${u.columnName}" not found in inSpec`);
  }
  return !0;
}, ht = (t, e) => t.map((o) => {
  var c, d, s;
  const r = ((d = (c = o.template) == null ? void 0 : c.body) == null ? void 0 : d.cell) || ((s = o.template) == null ? void 0 : s.bodyCell) || "buildBodyCell", l = e[r];
  return h(o, l);
}), pt = (t, e, a) => {
  var s, i, u;
  mt(t, e, a);
  const o = t, r = e, l = a, n = ((u = (i = (s = o[0]) == null ? void 0 : s.template) == null ? void 0 : i.body) == null ? void 0 : u.tr) || "buildBodyTr", c = l[n];
  return r.map((b) => {
    const m = h(b, c), N = bt(o, b), B = ht(N, l);
    return m.children = B, m;
  });
}, j = (t, e) => {
  var a;
  if (((a = t == null ? void 0 : t.attributes) == null ? void 0 : a["data-role"]) === e) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const r = j(o, e);
    if (r) return r;
  }
  return null;
}, ft = (t, e) => {
  const a = e.dataRole ? j(t[e.fileName], e.dataRole) : t[e.fileName], o = [...e.filePath ?? []], r = o.pop();
  return { parent: o.reduce((n, c) => n[c], a), key: r };
}, S = (t, e, a, o) => {
  const { parent: r, key: l } = ft(t, e), n = e.action;
  (dt[n] || T)(r, l, a);
}, F = (t, e) => {
  var a;
  if (((a = t == null ? void 0 : t.attributes) == null ? void 0 : a["data-role"]) === e) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const r = F(o, e);
    if (r) return r;
  }
  return null;
}, yt = (t, e) => {
  const a = t[e.fileName], o = e.dataRole ? F(a, e.dataRole) : a;
  return (e.filePath ?? []).reduce((r, l) => r[l], o);
}, gt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, wt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Nt = {
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
        id: "${columnName}",
        list: "${columnName}",
        class: "form-control"
      }
    }
  ]
}, Ct = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, xt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Pt = {
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
}, At = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "show",
      attributes: {
        class: "btn btn-primary btn-sm ks-btn-show"
      }
    }
  ]
}, Tt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, jt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, St = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Ft = {
  tagName: "td",
  children: []
}, vt = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Bt = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, Rt = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, Ot = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, kt = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "save",
      attributes: {
        class: "btn btn-warning btn-sm ks-btn-save"
      }
    }
  ]
}, Lt = {
  tagName: "div",
  attributes: {
    class: "row mb-3 justify-content-end"
  },
  children: [
    {
      tagName: "div",
      attributes: {
        class: "col-md-4"
      },
      children: [
        {
          tagName: "div",
          attributes: {
            class: "input-group"
          },
          children: [
            {
              tagName: "span",
              attributes: {
                class: "input-group-text bg-white"
              },
              children: [
                {
                  tagName: "i",
                  attributes: {
                    class: "bi bi-search"
                  },
                  textContent: "🔍"
                }
              ]
            },
            {
              tagName: "input",
              attributes: {
                type: "text",
                id: "tableSearch",
                class: "form-control",
                placeholder: "Search table..."
              }
            }
          ]
        }
      ]
    }
  ]
}, Kt = {
  buildBodyTr: gt,
  buildColGroup: wt,
  buildHeader: Nt,
  buildFooter: $t,
  buildBodyCell: Ct,
  button: xt,
  buttonCell: Pt,
  optionsButtonCell: At,
  buildOption: Tt,
  buildSelect: jt,
  buildDataList: St,
  emptyCell: Ft,
  headerSerialCell: vt,
  colGroupForSerial: Bt,
  colGroupForOption: Rt,
  headerForOption: Ot,
  tdWithButtonSaveWarning: kt,
  tableSearch: Lt
}, Et = { applyTemplate: h, fromCollection: f }, Gt = (t, e, a) => (t == null ? void 0 : t.sourcePath) === null ? null : yt(e, t.sourcePath), Dt = (t, e, a) => {
  const o = (e == null ? void 0 : e.spec) ?? Kt, r = t.templateKey, l = t == null ? void 0 : t.func, n = o[r], c = Gt(t, e), d = l === null ? n : Et[t.func](c, n), s = c === null ? n : d;
  S(e, t.destinationPath, s);
}, g = (t, e, a, o) => {
  t.forEach((r) => {
    Dt(r, e);
  });
}, It = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Wt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Ht = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Vt = {
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
}, Mt = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, qt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Ut = {
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
}, _t = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "show",
      attributes: {
        class: "btn btn-primary btn-sm ks-btn-show"
      }
    }
  ]
}, zt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Jt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Qt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Xt = {
  tagName: "td",
  children: []
}, Yt = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Zt = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, te = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, ee = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, ae = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "save",
      attributes: {
        class: "btn btn-warning btn-sm ks-btn-save"
      }
    }
  ]
}, oe = {
  buildBodyTr: It,
  buildColGroup: Wt,
  buildHeader: Ht,
  buildFooter: Vt,
  buildBodyCell: Mt,
  button: qt,
  buttonCell: Ut,
  optionsButtonCell: _t,
  buildOption: zt,
  buildSelect: Jt,
  buildDataList: Qt,
  emptyCell: Xt,
  headerSerialCell: Yt,
  colGroupForSerial: Zt,
  colGroupForOption: te,
  headerForOption: ee,
  tdWithButtonSaveWarning: ae
}, re = { applyTemplate: h, fromCollection: f, twoDimensional: pt }, le = (t, e, a, o) => {
  const r = re[t.func](
    e.data.columns,
    e.data.data,
    oe
  );
  S(e, t.destinationPath, r);
}, ne = (t, e, a, o) => {
  t.forEach((r) => {
    le(r, e);
  });
}, se = (t, e, a) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), r = `guards/base: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(r), e && console.log(r), o;
}, ie = (t, e, a) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), r = `guards/options: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(r), e && console.log(r), o;
}, ce = (t, e, a) => {
  const o = typeof t == "boolean", r = `guards/showLog: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(r), e && console.log(r), o;
}, ue = (t, e, a) => {
  const o = Array.isArray(t), r = `guards/returnLog: ${o ? "passed" : "failed"}`;
  return o ? t.push(r) : Array.isArray(a) && a.push(r), e && console.log(r), o;
}, de = ({ options: t, base: e, showLog: a, returnLog: o }) => ({
  base: se(e, a, o),
  options: ie(t, a, o),
  showLog: ce(a, a, o),
  returnLog: ue(o, a, o)
}), be = [
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
    sourcePath: null,
    templateKey: "colGroupForSerial",
    func: null
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
    sourcePath: null,
    templateKey: "headerSerialCell",
    func: null
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
    sourcePath: null,
    templateKey: "buildBodyCell",
    func: null
  },
  {
    narration: "Prepend the serial footer cell to the table footer row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-footer-row",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: null,
    templateKey: "headerSerialCell",
    func: null
  }
], me = [
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
    sourcePath: null,
    templateKey: "colGroupForOption",
    func: null
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
    sourcePath: null,
    templateKey: "headerForOption",
    func: null
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
    sourcePath: null,
    templateKey: "optionsButtonCell",
    func: null
  },
  {
    narration: "Append the options footer cell to the table footer row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-footer-row",
      filePath: [
        "children"
      ],
      action: "push"
    },
    sourcePath: null,
    templateKey: "tdWithButtonSaveWarning",
    func: null
  }
], he = [
  {
    narration: "Prepend the search row to top of the table.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-parent",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: null,
    templateKey: "tableSearch",
    func: null
  }
], v = (t, e) => {
  var a;
  return !t || typeof t != "object" ? !1 : ((a = t.attributes) == null ? void 0 : a["data-role"]) === e ? !0 : Array.isArray(t.children) && t.children.some((o) => v(o, e));
}, $ = (t, e) => t.filter(
  ({ destinationPath: o }) => v(e, o == null ? void 0 : o.dataRole)
), pe = ({ options: t = {}, base: e, showLog: a = !1, returnLog: o = [] } = {}) => {
  const r = de({ options: t, base: e, showLog: a, returnLog: o });
  if (!Object.values(r).every(Boolean))
    return e;
  const l = t, n = e;
  return (l.showSerial || l.serial) && g(
    $(be, n),
    { base: n }
  ), (l.showOptions || l.options) && g(
    $(me, n),
    { base: n }
  ), l.showSearch && g(
    $(he, n),
    { base: n }
  ), n;
}, x = ({
  inData: t = [],
  inColumns: e = [],
  inType: a = "simple",
  footer: o = [],
  inOptions: r = {},
  options: l = {},
  inShowLog: n = !1
} = {}) => {
  const c = !a || a === "table" ? "simple" : a, d = Object.keys(r || {}).length > 0 ? r : l, s = p.table[c] || p.table.simple;
  if (!s)
    throw new Error(`Unknown table type: "${c}". Available types: ${Object.keys(p.table).join(", ")}`);
  const i = structuredClone(s.base), u = {
    data: { columns: e, data: t },
    base: i,
    ...d
  };
  return s.single && s.single.length > 0 && g(s.single, u), s.double && s.double.length > 0 && ne(s.double, u), pe({ options: d, base: i }), i;
}, fe = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const a = p.select;
  return e.map((o) => {
    const r = (o == null ? void 0 : o.columnName) || "", l = structuredClone(a.base);
    l.attributes.id = r, l.attributes["data-name"] = r;
    const n = {
      tagName: "option",
      textContent: `\${${r}}`,
      attributes: { value: `\${${r}}` }
    };
    return l.children = f(t, n), l;
  });
}, ye = ({ inData: t = [], inColumns: e = [] } = {}) => e.map((a) => {
  const o = (a == null ? void 0 : a.columnName) || "", r = {
    tagName: "option",
    textContent: `\${${o}}`,
    attributes: { value: `\${${o}}` }
  };
  return f(t, r);
}), P = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const a = p.dataList;
  return e.map((o) => {
    const r = (o == null ? void 0 : o.columnName) || "", l = structuredClone(a.base);
    l.attributes.id = r, l.attributes["data-name"] = r;
    const n = {
      tagName: "option",
      textContent: `\${${r}}`,
      attributes: { value: `\${${r}}` }
    };
    return l.children = f(t, n), l;
  });
}, C = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const a = Object.keys(t || {}).length > 0 ? t : e, o = structuredClone(p.searchInput.base), r = a.label ?? "Search:", l = a.placeholder ?? "Search...", n = a.id ?? "searchInputId", c = a.class ?? "form-control";
  return o.children[0].textContent = r, o.children[0].attributes.for = n, o.children[1].attributes.placeholder = l, o.children[1].attributes.id = n, o.children[1].attributes.class = c, o;
}, ge = (t, e = {}) => {
  const a = t.columnName || t.name || "", o = t.label || a, r = t.type || "text", l = t.placeholder || "", n = e[a] ?? t.value ?? "", c = t.required ?? !1;
  if (r === "textarea") {
    const s = {
      tagName: "textarea",
      textContent: String(n),
      attributes: {
        class: "form-control",
        id: a,
        name: a,
        placeholder: l,
        rows: "3"
      }
    };
    return c && (s.attributes.required = "true"), {
      tagName: "div",
      attributes: { class: "mb-3" },
      children: [
        { tagName: "label", textContent: o, attributes: { class: "form-label fw-semibold small text-secondary", for: a } },
        s
      ]
    };
  }
  if (r === "select") {
    const s = (t.options || []).map((i) => {
      const u = typeof i == "object" ? i.value : i, b = typeof i == "object" ? i.label : i, m = {
        tagName: "option",
        textContent: String(b),
        attributes: { value: String(u) }
      };
      return String(u) === String(n) && (m.attributes.selected = "true"), m;
    });
    return {
      tagName: "div",
      attributes: { class: "mb-3" },
      children: [
        { tagName: "label", textContent: o, attributes: { class: "form-label fw-semibold small text-secondary", for: a } },
        {
          tagName: "select",
          attributes: { class: "form-select", id: a, name: a },
          children: s
        }
      ]
    };
  }
  if (r === "checkbox") {
    const s = {
      tagName: "input",
      attributes: {
        type: "checkbox",
        class: "form-check-input",
        id: a,
        name: a
      }
    };
    return n && (s.attributes.checked = "true"), {
      tagName: "div",
      attributes: { class: "mb-3 form-check" },
      children: [
        s,
        { tagName: "label", textContent: o, attributes: { class: "form-check-label small fw-semibold text-secondary", for: a } }
      ]
    };
  }
  const d = {
    tagName: "input",
    attributes: {
      type: r,
      class: "form-control",
      id: a,
      name: a,
      placeholder: l
    }
  };
  return n !== "" && (d.attributes.value = String(n)), c && (d.attributes.required = "true"), {
    tagName: "div",
    attributes: { class: "mb-3" },
    children: [
      { tagName: "label", textContent: o, attributes: { class: "form-label fw-semibold small text-secondary", for: a } },
      d
    ]
  };
}, we = ({
  inData: t = [],
  inColumns: e = [],
  inOptions: a = {},
  options: o = {}
} = {}) => {
  var m;
  const r = Object.keys(a || {}).length > 0 ? a : o, l = structuredClone((m = p.form) == null ? void 0 : m.base), n = r.title || r.ariaLabel || "Form", c = r.formId || "formElement", d = r.submitLabel || "Submit";
  l.children[0].children[0].textContent = n;
  const s = l.children[1].children[0];
  s.attributes.id = c;
  const i = Array.isArray(t) && t.length > 0 ? t[0] : t || {}, u = e.map((N) => ge(N, i)), b = {
    tagName: "div",
    attributes: { class: "d-flex justify-content-end gap-2 mt-4 pt-3 border-top" },
    children: [
      { tagName: "button", textContent: "Reset", attributes: { type: "reset", class: "btn btn-outline-secondary" } },
      { tagName: "button", textContent: d, attributes: { type: "submit", class: "btn btn-primary px-4 fw-medium" } }
    ]
  };
  return s.children = [...u, b], l;
}, Ne = {
  table: x,
  tableFromSpec: x,
  select: fe,
  selectOptionsOnly: ye,
  dataList: P,
  datalist: P,
  searchInput: C,
  search: C,
  inputRow: C,
  form: we
}, $e = (t = {}) => {
  G(t);
  const e = t == null ? void 0 : t.showLog;
  console.log("localShowLog : ", e);
  const a = t.type, o = t == null ? void 0 : t.options;
  let r = a, l = a;
  if (a.includes(".")) {
    const d = a.split(".");
    r = d[0], l = d[1];
  }
  e && console.log("localMainType : ", r, l);
  const n = Ne[r];
  if (!n)
    throw new Error(`Renderer for type "${r}" not found.`);
  const c = n({
    inType: l,
    inColumns: t.columns,
    inData: t.data,
    inOptions: o,
    options: t.options,
    inShowLog: e
  });
  return e && console.log("json-renderers-build output:", c), c;
};
O($e);
export {
  $e as default,
  $e as render
};
