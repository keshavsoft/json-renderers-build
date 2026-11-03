const G = {
  version: "1.22.0",
  name: "json-renderers-build"
}, D = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: G,
    render: t
  });
}, V = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.type;
  if (a === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof a != "string")
    throw new TypeError("type must be a string");
  return !0;
}, z = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.data;
  if (a === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(a))
    throw new TypeError("data must be an Array");
  return !0;
}, H = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.columns;
  if (a === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(a))
    throw new TypeError("columns must be an Array");
  return !0;
}, U = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.showLog;
  if (a !== void 0 && typeof a != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, k = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return V(e), z(e), H(e), U(e), !0;
}, M = "table", J = "", _ = [], Q = [], X = "", Y = "replace", Z = !1, g = {
  type: M,
  targetHtmlId: J,
  data: _,
  columns: Q,
  classToApply: X,
  appendPosition: Y,
  showLog: Z
}, tt = (t) => {
  const e = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return e && e in g ? g[e] : { ...g };
};
Object.assign(tt, g);
const et = {
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
}, at = {
  base: {
    tagName: "select",
    attributes: {
      id: "${columnName}",
      "data-name": "${columnName}"
    },
    children: []
  }
}, ot = {
  base: {
    tagName: "datalist",
    attributes: {
      id: "${columnName}",
      "data-name": "${columnName}"
    },
    children: []
  }
}, lt = {
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
}, h = {
  table: et,
  select: at,
  dataList: ot,
  searchInput: lt
}, rt = (t) => typeof t == "object" && t !== null && !Array.isArray(t), st = (t, e) => {
  if (!rt(t)) return;
  let a = {};
  for (const [o, l] of Object.entries(t))
    a[o] = b(e, l);
  return a;
}, nt = (t, e) => {
  const a = structuredClone(t);
  return Array.isArray(a) ? a.map((l) => b(e, l)) : void 0;
}, R = (t, e, a) => {
  if (t === "${agg:count}" && "rowData" in e) {
    if (Array.isArray(e == null ? void 0 : e.rowData))
      return e == null ? void 0 : e.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in e ? e == null ? void 0 : e.rowData : t.replace(/\$\{(\w+)\}/g, (o, l) => e[l] !== void 0 ? e[l] : o);
}, it = (t, e) => R(t, e), ct = (t, e, a) => {
  if (a && console.log("inElement : ", t), a && console.log("inTemplate : ", e), e == null)
    throw new TypeError("inTemplate is required");
  if (typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, ut = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, dt = (t) => {
  var e, a;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).applyTemplate ?? (e.applyTemplate = t), (a = globalThis.ks).transformerFuncs ?? (a.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: ut,
    applyTemplate: t
  });
}, b = (t, e, a) => {
  const o = t, l = e;
  ct(o, l, a);
  const r = structuredClone(l);
  return typeof r == "string" ? R(r, o) : (r === null || typeof r != "object" || ("textContent" in r && (r.textContent = it(r == null ? void 0 : r.textContent, o)), "attributes" in r && (r.attributes = st(r == null ? void 0 : r.attributes, o)), "children" in r && (r.children = nt(r == null ? void 0 : r.children, o))), r);
};
dt(b);
const bt = (t, e) => {
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
}, p = (t, e) => {
  const a = t, o = e;
  return bt(a, o), a.map((l) => b(l, o));
}, C = (t) => Array.isArray(t) ? t : [t], v = (t, e, a) => {
  t[e] = a;
}, mt = (t, e, a) => {
  t[e].push(...C(a));
}, pt = (t, e, a) => {
  t[e].unshift(...C(a));
}, ht = (t, e, a) => {
  t[e].forEach((o) => {
    o.children.push(...structuredClone(C(a)));
  });
}, ft = (t, e, a) => {
  t[e].forEach((o) => {
    o.children.unshift(...structuredClone(C(a)));
  });
}, yt = (t, e, a) => {
  t[e].forEach((o, l) => {
    const r = structuredClone(a);
    r.textContent = l + 1, o.children.unshift(r);
  });
}, gt = {
  set: v,
  push: mt,
  unshift: pt,
  pushToRows: ht,
  unshiftToRows: ft,
  unshiftSerialToRows: yt
}, $t = (t, e) => t.map((o) => ({
  ...o,
  rowData: e[o.columnName]
})), Ct = (t, e, a) => {
  var l, r, s, n, d, c;
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
  const o = ((s = (r = (l = t[0]) == null ? void 0 : l.template) == null ? void 0 : r.body) == null ? void 0 : s.tr) || "buildBodyTr";
  if (!(o in a))
    throw new Error(`Row template "${o}" not found in inSpec`);
  for (let i = 0; i < t.length; i++) {
    const u = t[i], m = ((d = (n = u.template) == null ? void 0 : n.body) == null ? void 0 : d.cell) || ((c = u.template) == null ? void 0 : c.bodyCell) || "buildBodyCell";
    if (!(m in a))
      throw new Error(`Cell template "${m}" for column "${u.columnName}" not found in inSpec`);
  }
  return !0;
}, wt = (t, e) => t.map((o) => {
  var n, d, c;
  const l = ((d = (n = o.template) == null ? void 0 : n.body) == null ? void 0 : d.cell) || ((c = o.template) == null ? void 0 : c.bodyCell) || "buildBodyCell", r = e[l];
  return b(o, r);
}), j = (t, e, a) => {
  var c, i, u;
  Ct(t, e, a);
  const o = t, l = e, r = a, s = ((u = (i = (c = o[0]) == null ? void 0 : c.template) == null ? void 0 : i.body) == null ? void 0 : u.tr) || "buildBodyTr", n = r[s];
  return l.map((m) => {
    const f = b(m, n), K = $t(o, m), q = wt(K, r);
    return f.children = q, f;
  });
}, y = (t, e) => {
  var a;
  if (((a = t == null ? void 0 : t.attributes) == null ? void 0 : a["data-role"]) === e) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const l = y(o, e);
    if (l) return l;
  }
  return null;
}, Nt = (t, e) => {
  const a = e.dataRole ? y(t[e.fileName], e.dataRole) : t[e.fileName], o = [...e.filePath ?? []], l = o.pop();
  return { parent: o.reduce((s, n) => s[n], a), key: l };
}, I = (t, e, a, o) => {
  const { parent: l, key: r } = Nt(t, e), s = e.action;
  (gt[s] || v)(l, r, a);
}, S = (t, e) => {
  var a;
  if (((a = t == null ? void 0 : t.attributes) == null ? void 0 : a["data-role"]) === e) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const l = S(o, e);
    if (l) return l;
  }
  return null;
}, xt = (t, e) => {
  const a = t[e.fileName], o = e.dataRole ? S(a, e.dataRole) : a;
  return (e.filePath ?? []).reduce((l, r) => l[r], o);
}, Ft = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Pt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Bt = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, At = {
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
}, Tt = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, kt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Rt = {
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
}, jt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, It = {
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
}, Ot = {
  tagName: "td",
  children: []
}, Lt = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Et = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, Wt = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, Kt = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, qt = {
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
}, Gt = {
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
}, Dt = {
  buildBodyTr: Ft,
  buildColGroup: Pt,
  buildHeader: Bt,
  buildFooter: At,
  buildBodyCell: Tt,
  button: kt,
  buttonCell: Rt,
  optionsButtonCell: vt,
  buildOption: jt,
  buildSelect: It,
  buildDataList: St,
  emptyCell: Ot,
  headerSerialCell: Lt,
  colGroupForSerial: Et,
  colGroupForOption: Wt,
  headerForOption: Kt,
  tdWithButtonSaveWarning: qt,
  tableSearch: Gt
}, Vt = { applyTemplate: b, fromCollection: p }, zt = (t, e, a) => (t == null ? void 0 : t.sourcePath) === null ? null : xt(e, t.sourcePath), Ht = (t, e, a) => {
  const o = (e == null ? void 0 : e.spec) ?? Dt, l = t.templateKey, r = t == null ? void 0 : t.func, s = o[l], n = zt(t, e), d = r === null ? s : Vt[t.func](n, s), c = n === null ? s : d;
  I(e, t.destinationPath, c);
}, $ = (t, e, a, o) => {
  t.forEach((l) => {
    Ht(l, e);
  });
}, Ut = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Mt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Jt = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, _t = {
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
}, Qt = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Xt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Yt = {
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
}, Zt = {
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
}, te = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, ee = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, ae = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, oe = {
  tagName: "td",
  children: []
}, le = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, re = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, se = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, ne = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, ie = {
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
}, ce = {
  buildBodyTr: Ut,
  buildColGroup: Mt,
  buildHeader: Jt,
  buildFooter: _t,
  buildBodyCell: Qt,
  button: Xt,
  buttonCell: Yt,
  optionsButtonCell: Zt,
  buildOption: te,
  buildSelect: ee,
  buildDataList: ae,
  emptyCell: oe,
  headerSerialCell: le,
  colGroupForSerial: re,
  colGroupForOption: se,
  headerForOption: ne,
  tdWithButtonSaveWarning: ie
}, ue = { applyTemplate: b, fromCollection: p, twoDimensional: j }, de = (t, e, a, o) => {
  const l = ue[t.func](
    e.data.columns,
    e.data.data,
    ce
  );
  I(e, t.destinationPath, l);
}, be = (t, e, a, o) => {
  t.forEach((l) => {
    de(l, e);
  });
}, me = (t, e, a) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), l = `guards/base: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(l), e && console.log(l), o;
}, pe = (t, e, a) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), l = `guards/options: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(l), e && console.log(l), o;
}, he = (t, e, a) => {
  const o = typeof t == "boolean", l = `guards/showLog: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(l), e && console.log(l), o;
}, fe = (t, e, a) => {
  const o = Array.isArray(t), l = `guards/returnLog: ${o ? "passed" : "failed"}`;
  return o ? t.push(l) : Array.isArray(a) && a.push(l), e && console.log(l), o;
}, ye = ({ options: t, base: e, showLog: a, returnLog: o }) => ({
  base: me(e, a, o),
  options: pe(t, a, o),
  showLog: he(a, a, o),
  returnLog: fe(o, a, o)
}), ge = [
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
], $e = [
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
], Ce = [
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
], O = (t, e) => {
  var a;
  return !t || typeof t != "object" ? !1 : ((a = t.attributes) == null ? void 0 : a["data-role"]) === e ? !0 : Array.isArray(t.children) && t.children.some((o) => O(o, e));
}, w = (t, e) => t.filter(
  ({ destinationPath: o }) => O(e, o == null ? void 0 : o.dataRole)
), we = ({ options: t = {}, base: e, showLog: a = !1, returnLog: o = [] } = {}) => {
  const l = ye({ options: t, base: e, showLog: a, returnLog: o });
  if (!Object.values(l).every(Boolean))
    return e;
  const r = t, s = e;
  return (r.showSerial || r.serial) && $(
    w(ge, s),
    { base: s }
  ), (r.showOptions || r.options) && $(
    w($e, s),
    { base: s }
  ), r.showSearch && $(
    w(Ce, s),
    { base: s }
  ), s;
}, P = ({
  inData: t = [],
  inColumns: e = [],
  inType: a = "simple",
  footer: o = [],
  inOptions: l = {},
  options: r = {},
  inShowLog: s = !1
} = {}) => {
  const n = !a || a === "table" ? "simple" : a, d = Object.keys(l || {}).length > 0 ? l : r, c = h.table[n] || h.table.simple;
  if (!c)
    throw new Error(`Unknown table type: "${n}". Available types: ${Object.keys(h.table).join(", ")}`);
  const i = structuredClone(c.base), u = {
    data: { columns: e, data: t },
    base: i,
    ...d
  };
  return c.single && c.single.length > 0 && $(c.single, u), c.double && c.double.length > 0 && be(c.double, u), we({ options: d, base: i }), i;
}, Ne = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const a = h.select;
  return e.map((o) => {
    const l = (o == null ? void 0 : o.columnName) || "", r = structuredClone(a.base);
    r.attributes.id = l, r.attributes["data-name"] = l;
    const s = {
      tagName: "option",
      textContent: `\${${l}}`,
      attributes: { value: `\${${l}}` }
    };
    return r.children = p(t, s), r;
  });
}, xe = ({ inData: t = [], inColumns: e = [] } = {}) => e.map((a) => {
  const o = (a == null ? void 0 : a.columnName) || "", l = {
    tagName: "option",
    textContent: `\${${o}}`,
    attributes: { value: `\${${o}}` }
  };
  return p(t, l);
}), B = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const a = h.dataList;
  return e.map((o) => {
    const l = (o == null ? void 0 : o.columnName) || "", r = structuredClone(a.base);
    r.attributes.id = l, r.attributes["data-name"] = l;
    const s = {
      tagName: "option",
      textContent: `\${${l}}`,
      attributes: { value: `\${${l}}` }
    };
    return r.children = p(t, s), r;
  });
}, N = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const a = Object.keys(t || {}).length > 0 ? t : e, o = structuredClone(h.searchInput.base), l = a.label ?? "Search:", r = a.placeholder ?? "Search...", s = a.id ?? "searchInputId", n = a.class ?? "form-control";
  return o.children[0].textContent = l, o.children[0].attributes.for = s, o.children[1].attributes.placeholder = r, o.children[1].attributes.id = s, o.children[1].attributes.class = n, o;
}, Fe = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, Pe = (t) => {
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: Fe, render: t });
}, Be = "div", Ae = {
  class: "${cardClass}",
  "data-role": "form-card"
}, Te = [
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
], ke = {
  tagName: Be,
  attributes: Ae,
  children: Te
}, Re = () => structuredClone(ke), ve = "header-actions", je = "button", A = {
  destinationRole: ve,
  template: je
}, Ie = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, Se = {
  button: Ie
}, Oe = (t, e) => {
  const a = structuredClone(t), o = p(e.header.actions, Se[A.template]);
  return y(a, A.destinationRole).children.push(...o), a;
}, Le = "form-body", Ee = {
  destinationRole: Le
}, We = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, Ke = {
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
}, qe = {
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
}, De = {
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
}, Ve = {
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
}, ze = {
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
}, Je = {
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
}, _e = {
  buildBodyTr: We,
  buildBodyCell: Ke,
  buildRequiredField: qe,
  buildTextareaField: Ge,
  buildCheckboxField: De,
  buildInlineField: Ve,
  buildInlineRequiredField: ze,
  buildInlineFieldWithButton: He,
  buildInlineRequiredFieldWithButton: Ue,
  buildInlineTextareaField: Me,
  buildInlineCheckboxField: Je
}, Qe = (t, e, a) => {
  const o = t.map((s) => {
    var c, i, u, m, f;
    const n = ((i = (c = s.template) == null ? void 0 : c.body) == null ? void 0 : i.cell) ?? (s.required ? "buildRequiredField" : "buildBodyCell");
    let d = ((u = a.fieldTemplates) == null ? void 0 : u[n]) ?? n;
    return s.buttonText && (d = ((m = a.buttonFieldTemplates) == null ? void 0 : m[d]) ?? d), {
      ...s,
      label: s.label ?? s.title ?? s.columnName,
      type: s.type ?? "text",
      placeholder: s.placeholder ?? "",
      buttonType: s.buttonType ?? "button",
      template: { ...s.template, body: { ...(f = s.template) == null ? void 0 : f.body, cell: d } }
    };
  }), l = e[0] ?? {}, r = Object.fromEntries(o.map((s) => [
    s.columnName,
    l[s.columnName] ?? s.value ?? ""
  ]));
  return { columns: o, rows: [r] };
}, Xe = (t, e, a) => {
  const o = Qe(e.columns, e.records, a.body), l = j(o.columns, o.rows, _e), r = structuredClone(t);
  return y(r, Ee.destinationRole).children.push(...Array.isArray(l) ? l : [l]), r;
}, Ye = "footer-actions", Ze = "button", T = {
  destinationRole: Ye,
  template: Ze
}, ta = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, ea = {
  button: ta
}, aa = (t, e) => {
  const a = structuredClone(t), o = p(e.footer.actions, ea[T.template]);
  return y(a, T.destinationRole).children.push(...o), a;
}, L = ({ inColumns: t, inData: e, inOptions: a, columns: o, data: l, options: r } = {}) => ({
  columns: Array.isArray(t) && t.length > 0 ? t : Array.isArray(o) ? o : [],
  records: Array.isArray(e) && e.length > 0 ? e : Array.isArray(l) ? l : [],
  options: a && Object.keys(a).length > 0 ? a : r ?? {}
}), oa = "bigButtonsForm", la = "Account details", ra = "Update your profile information.", sa = "", na = "label", ia = "stacked", ca = "saveCancel", ua = {
  formId: oa,
  title: la,
  description: ra,
  recordId: sa,
  header: na,
  body: ia,
  footer: ca
}, da = {
  actions: []
}, ba = {
  actions: []
}, ma = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, pa = {
  actions: []
}, ha = {
  none: da,
  label: ba,
  labelWithRefresh: ma,
  labelWithId: pa
}, fa = {
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
}, ya = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, ga = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, $a = {
  inline: fa,
  stacked: ya,
  threeColumns: ga
}, Ca = {
  actions: []
}, wa = {
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
}, Na = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, xa = {
  none: Ca,
  saveCancel: wa,
  edit: Na
}, x = (t, e, a) => {
  const o = t[e];
  if (!o) throw new RangeError("Unknown bigButtons " + a + ": " + e);
  return o;
}, E = (t) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const e = t["form.bigButtons"] ?? {};
  if (typeof e != "object" || e === null || Array.isArray(e))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const a = { ...ua, ...e };
  return {
    options: a,
    header: x(ha, a.header, "header"),
    body: x($a, a.body, "body"),
    footer: x(xa, a.footer, "footer")
  };
}, Fa = (t, e = {}) => {
  const a = L(e), o = E(a.options), l = Oe(t, o), r = Xe(l, a, o);
  return aa(r, o);
}, Pa = {
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
}, Ba = {
  bootstrap: Pa
}, Aa = (t, e) => {
  var o;
  const a = (o = Ba[e]) == null ? void 0 : o[t.header];
  if (!a) throw new RangeError("Unknown bigButtons header: " + t.header);
  return a;
}, Ta = "bootstrap", ka = {
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
  defaultFramework: Ta,
  frameworks: ka
}, Ra = (t, e) => {
  const a = F.frameworks[e];
  if (!a) throw new RangeError("Unknown bigButtons framework: " + e);
  const o = a.bodies[t.body];
  if (!o) throw new RangeError("Unknown bigButtons body: " + t.body);
  return { ...a.base, ...o };
}, va = {
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
}, ja = {
  bootstrap: va
}, Ia = (t, e) => {
  const a = ja[e], o = a == null ? void 0 : a.footers[t.footer];
  if (!a) throw new RangeError("Unknown bigButtons framework: " + e);
  if (!o) throw new RangeError("Unknown bigButtons footer: " + t.footer);
  return { ...a.base, ...o };
}, Sa = (t, e = {}) => {
  const a = E(L(e).options), { options: o } = a, l = o.framework ?? F.defaultFramework;
  if (!F.frameworks[l]) throw new RangeError("Unknown bigButtons framework: " + l);
  const s = Object.assign(
    {},
    o,
    Ra(o, l),
    Aa(o, l),
    Ia(o, l)
  );
  return b(s, structuredClone(t));
}, Oa = (t = {}) => {
  const e = Re(), a = Fa(e, t);
  return Sa(a, t);
}, W = (t = {}) => {
  const e = { ...t, type: t.type ?? "form.bigButtons" };
  return k(e), Oa(e);
};
Pe(W);
const La = ({
  inType: t = "stacked",
  inData: e,
  inColumns: a
} = {}) => W({
  type: t,
  columns: a,
  data: e
}), Ea = {
  table: P,
  tableFromSpec: P,
  select: Ne,
  selectOptionsOnly: xe,
  dataList: B,
  datalist: B,
  searchInput: N,
  search: N,
  inputRow: N,
  form: La
}, Wa = (t = {}) => {
  k(t);
  const e = t == null ? void 0 : t.showLog;
  console.log("localShowLog : ", e);
  const a = t.type, o = t == null ? void 0 : t.options;
  let l = a, r = a;
  if (a.includes(".")) {
    const d = a.split(".");
    l = d[0], r = d[1];
  }
  e && console.log("localMainType : ", l, r);
  const s = Ea[l];
  if (!s)
    throw new Error(`Renderer for type "${l}" not found.`);
  const n = s({
    inType: r,
    inColumns: t.columns,
    inData: t.data,
    inOptions: o,
    options: t.options,
    inShowLog: e
  });
  return e && console.log("json-renderers-build output:", n), n;
};
D(Wa);
export {
  Wa as default,
  Wa as render
};
