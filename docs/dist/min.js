const H = {
  version: "1.22.0",
  name: "json-renderers-build"
}, U = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: H,
    render: t
  });
}, M = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.type;
  if (e === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof e != "string")
    throw new TypeError("type must be a string");
  return !0;
}, J = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.data;
  if (e === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(e))
    throw new TypeError("data must be an Array");
  return !0;
}, _ = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.columns;
  if (e === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(e))
    throw new TypeError("columns must be an Array");
  return !0;
}, Q = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.showLog;
  if (e !== void 0 && typeof e != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, j = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return M(a), J(a), _(a), Q(a), !0;
}, X = "table", Y = "", Z = [], tt = [], et = "", at = "replace", ot = !1, C = {
  type: X,
  targetHtmlId: Y,
  data: Z,
  columns: tt,
  classToApply: et,
  appendPosition: at,
  showLog: ot
}, lt = (t) => {
  const a = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return a && a in C ? C[a] : { ...C };
};
Object.assign(lt, C);
const st = {
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
}, nt = {
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
}, rt = {
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
}, it = {
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
}, ct = {
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
}, k = {
  simple: st,
  withFooter: nt,
  bodyOnly: rt,
  footerOnly: it,
  headerOnly: ct
}, ut = (t) => typeof t == "object" && t !== null && !Array.isArray(t), dt = (t, a) => {
  if (!ut(t)) return;
  let e = {};
  for (const [o, l] of Object.entries(t))
    e[o] = b(a, l);
  return e;
}, bt = (t, a) => {
  const e = structuredClone(t);
  return Array.isArray(e) ? e.map((l) => b(a, l)) : void 0;
}, S = (t, a, e) => {
  if (t === "${agg:count}" && "rowData" in a) {
    if (Array.isArray(a == null ? void 0 : a.rowData))
      return a == null ? void 0 : a.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in a ? a == null ? void 0 : a.rowData : t.replace(/\$\{(\w+)\}/g, (o, l) => a[l] !== void 0 ? a[l] : o);
}, pt = (t, a) => S(t, a), mt = (t, a, e) => {
  if (e && console.log("inElement : ", t), e && console.log("inTemplate : ", a), a == null)
    throw new TypeError("inTemplate is required");
  if (typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, ht = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, ft = (t) => {
  var a, e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (a = globalThis.ks).applyTemplate ?? (a.applyTemplate = t), (e = globalThis.ks).transformerFuncs ?? (e.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: ht,
    applyTemplate: t
  });
}, b = (t, a, e) => {
  const o = t, l = a;
  mt(o, l, e);
  const s = structuredClone(l);
  return typeof s == "string" ? S(s, o) : (s === null || typeof s != "object" || ("textContent" in s && (s.textContent = pt(s == null ? void 0 : s.textContent, o)), "attributes" in s && (s.attributes = dt(s == null ? void 0 : s.attributes, o)), "children" in s && (s.children = bt(s == null ? void 0 : s.children, o))), s);
};
ft(b);
const yt = (t, a) => {
  if (!Array.isArray(t))
    throw new TypeError("inSource must be an Array");
  if (t.length === 0)
    throw new Error("inSource cannot be empty");
  for (let e = 0; e < t.length; e++)
    if (!t[e] || typeof t[e] != "object")
      throw new TypeError(`inSource[${e}] must be an object`);
  if (!a || typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, h = (t, a) => {
  const e = t, o = a;
  return yt(e, o), e.map((l) => b(l, o));
}, w = (t) => Array.isArray(t) ? t : [t], L = (t, a, e) => {
  t[a] = e;
}, Ct = (t, a, e) => {
  t[a].push(...w(e));
}, gt = (t, a, e) => {
  t[a].unshift(...w(e));
}, $t = (t, a, e) => {
  t[a].forEach((o) => {
    o.children.push(...structuredClone(w(e)));
  });
}, wt = (t, a, e) => {
  t[a].forEach((o) => {
    o.children.unshift(...structuredClone(w(e)));
  });
}, Nt = (t, a, e) => {
  t[a].forEach((o, l) => {
    const s = structuredClone(e);
    s.textContent = l + 1, o.children.unshift(s);
  });
}, xt = {
  set: L,
  push: Ct,
  unshift: gt,
  pushToRows: $t,
  unshiftToRows: wt,
  unshiftSerialToRows: Nt
}, Ft = (t, a) => t.map((o) => ({
  ...o,
  rowData: a[o.columnName]
})), Bt = (t, a, e) => {
  var l, s, n, r, c, d;
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
  if (!Array.isArray(a))
    throw new TypeError("inData must be an Array");
  for (let i = 0; i < a.length; i++) {
    const u = a[i];
    if (!u || typeof u != "object")
      throw new TypeError(`inData[${i}] must be an object`);
  }
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inSpec must be an object");
  const o = ((n = (s = (l = t[0]) == null ? void 0 : l.template) == null ? void 0 : s.body) == null ? void 0 : n.tr) || "buildBodyTr";
  if (!(o in e))
    throw new Error(`Row template "${o}" not found in inSpec`);
  for (let i = 0; i < t.length; i++) {
    const u = t[i], p = ((c = (r = u.template) == null ? void 0 : r.body) == null ? void 0 : c.cell) || ((d = u.template) == null ? void 0 : d.bodyCell) || "buildBodyCell";
    if (!(p in e))
      throw new Error(`Cell template "${p}" for column "${u.columnName}" not found in inSpec`);
  }
  return !0;
}, Pt = (t, a) => t.map((o) => {
  var r, c, d;
  const l = ((c = (r = o.template) == null ? void 0 : r.body) == null ? void 0 : c.cell) || ((d = o.template) == null ? void 0 : d.bodyCell) || "buildBodyCell", s = a[l];
  return b(o, s);
}), O = (t, a, e) => {
  var d, i, u;
  Bt(t, a, e);
  const o = t, l = a, s = e, n = ((u = (i = (d = o[0]) == null ? void 0 : d.template) == null ? void 0 : i.body) == null ? void 0 : u.tr) || "buildBodyTr", r = s[n];
  return l.map((p) => {
    const f = b(p, r), q = Ft(o, p), z = Pt(q, s);
    return f.children = z, f;
  });
}, y = (t, a) => {
  var e;
  if (((e = t == null ? void 0 : t.attributes) == null ? void 0 : e["data-role"]) === a) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const l = y(o, a);
    if (l) return l;
  }
  return null;
}, Tt = (t, a) => {
  const e = a.dataRole ? y(t[a.fileName], a.dataRole) : t[a.fileName], o = [...a.filePath ?? []], l = o.pop();
  return { parent: o.reduce((n, r) => n[r], e), key: l };
}, E = (t, a, e, o) => {
  const { parent: l, key: s } = Tt(t, a), n = a.action;
  (xt[n] || L)(l, s, e);
}, W = (t, a) => {
  var e;
  if (((e = t == null ? void 0 : t.attributes) == null ? void 0 : e["data-role"]) === a) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const l = W(o, a);
    if (l) return l;
  }
  return null;
}, kt = (t, a) => {
  const e = t[a.fileName], o = a.dataRole ? W(e, a.dataRole) : e;
  return (a.filePath ?? []).reduce((l, s) => l[s], o);
}, At = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, vt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Rt = {
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
        id: "${columnName}",
        list: "${columnName}",
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
}, St = {
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
}, Ot = {
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
}, Et = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Wt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Dt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Kt = {
  tagName: "td",
  children: []
}, Vt = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Gt = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, qt = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, zt = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Ht = {
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
}, Ut = {
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
}, Mt = {
  buildBodyTr: At,
  buildColGroup: vt,
  buildHeader: Rt,
  buildFooter: It,
  buildBodyCell: jt,
  button: St,
  buttonCell: Lt,
  optionsButtonCell: Ot,
  buildOption: Et,
  buildSelect: Wt,
  buildDataList: Dt,
  emptyCell: Kt,
  headerSerialCell: Vt,
  colGroupForSerial: Gt,
  colGroupForOption: qt,
  headerForOption: zt,
  tdWithButtonSaveWarning: Ht,
  tableSearch: Ut
}, Jt = { applyTemplate: b, fromCollection: h }, _t = (t, a, e) => (t == null ? void 0 : t.sourcePath) === null ? null : kt(a, t.sourcePath), Qt = (t, a, e) => {
  const o = (a == null ? void 0 : a.spec) ?? Mt, l = t.templateKey, s = t == null ? void 0 : t.func, n = o[l], r = _t(t, a), c = s === null ? n : Jt[t.func](r, n), d = r === null ? n : c;
  E(a, t.destinationPath, d);
}, g = (t, a, e, o) => {
  t.forEach((l) => {
    Qt(l, a);
  });
}, Xt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Yt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Zt = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, te = {
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
}, ee = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, ae = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, oe = {
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
}, le = {
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
}, se = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, ne = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, re = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, ie = {
  tagName: "td",
  children: []
}, ce = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, ue = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, de = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, be = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, pe = {
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
}, me = {
  buildBodyTr: Xt,
  buildColGroup: Yt,
  buildHeader: Zt,
  buildFooter: te,
  buildBodyCell: ee,
  button: ae,
  buttonCell: oe,
  optionsButtonCell: le,
  buildOption: se,
  buildSelect: ne,
  buildDataList: re,
  emptyCell: ie,
  headerSerialCell: ce,
  colGroupForSerial: ue,
  colGroupForOption: de,
  headerForOption: be,
  tdWithButtonSaveWarning: pe
}, he = { applyTemplate: b, fromCollection: h, twoDimensional: O }, fe = (t, a, e, o) => {
  const l = he[t.func](
    a.data.columns,
    a.data.data,
    me
  );
  E(a, t.destinationPath, l);
}, ye = (t, a, e, o) => {
  t.forEach((l) => {
    fe(l, a);
  });
}, Ce = (t, a, e) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), l = `guards/base: ${o ? "passed" : "failed"}`;
  return Array.isArray(e) && e.push(l), a && console.log(l), o;
}, ge = (t, a, e) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), l = `guards/options: ${o ? "passed" : "failed"}`;
  return Array.isArray(e) && e.push(l), a && console.log(l), o;
}, $e = (t, a, e) => {
  const o = typeof t == "boolean", l = `guards/showLog: ${o ? "passed" : "failed"}`;
  return Array.isArray(e) && e.push(l), a && console.log(l), o;
}, we = (t, a, e) => {
  const o = Array.isArray(t), l = `guards/returnLog: ${o ? "passed" : "failed"}`;
  return o ? t.push(l) : Array.isArray(e) && e.push(l), a && console.log(l), o;
}, Ne = ({ options: t, base: a, showLog: e, returnLog: o }) => ({
  base: Ce(a, e, o),
  options: ge(t, e, o),
  showLog: $e(e, e, o),
  returnLog: we(o, e, o)
}), xe = [
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
], Fe = [
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
], Be = [
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
], D = (t, a) => {
  var e;
  return !t || typeof t != "object" ? !1 : ((e = t.attributes) == null ? void 0 : e["data-role"]) === a ? !0 : Array.isArray(t.children) && t.children.some((o) => D(o, a));
}, x = (t, a) => t.filter(
  ({ destinationPath: o }) => D(a, o == null ? void 0 : o.dataRole)
), Pe = ({ options: t = {}, base: a, showLog: e = !1, returnLog: o = [] } = {}) => {
  const l = Ne({ options: t, base: a, showLog: e, returnLog: o });
  if (!Object.values(l).every(Boolean))
    return a;
  const s = t, n = a;
  return (s.showSerial || s.serial) && g(
    x(xe, n),
    { base: n }
  ), (s.showOptions || s.options) && g(
    x(Fe, n),
    { base: n }
  ), s.showSearch && g(
    x(Be, n),
    { base: n }
  ), n;
}, Te = ({ type: t = "simple", data: a = [], columns: e = [], options: o = {}, showLog: l = !1 } = {}) => {
  const s = k[t];
  if (!s)
    throw new Error(`Unknown table type: "${t}". Available types: ${Object.keys(k).join(", ")}`);
  const n = structuredClone(s.base), r = {
    data: { columns: e, data: a },
    base: n,
    ...o
  };
  return s.single && s.single.length > 0 && g(s.single, r), s.double && s.double.length > 0 && ye(s.double, r), Pe({ options: o, base: n }), n;
}, A = ({
  inData: t,
  inColumns: a,
  inType: e,
  footer: o = [],
  inOptions: l,
  inShowLog: s
} = {}) => {
  const n = e, r = l, c = s;
  return c && console.log("table : ", n, r), Te({
    type: n,
    columns: a,
    data: t,
    options: r,
    showLog: c
  });
}, ke = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), Ae = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, ve = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Re = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, m = {
  buildOption: Ae,
  buildSelect: ve,
  buildDataList: Re
}, Ie = (t, a = m.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, je = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = structuredClone(m.buildSelect);
  o.attributes.id = e, o.attributes["data-name"] = e;
  const l = Ie(e, m.buildOption);
  return o.children = h(t, l), o;
}, Se = ({ data: t, columns: a }) => a.map((e) => je(t, e)), Le = (t = {}) => {
  const { data: a, columns: e } = ke(t);
  return Se({ data: a, columns: e });
}, Oe = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), Ee = (t, a = m.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, We = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = Ee(e, m.buildOption);
  return h(t, o);
}, De = ({ data: t, columns: a }) => a.map((e) => We(t, e)), Ke = (t = {}) => {
  const { data: a, columns: e } = Oe(t);
  return De({ data: a, columns: e });
}, Ve = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), Ge = (t, a = m.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, qe = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = structuredClone(m.buildDataList);
  o.attributes.id = e, o.attributes["data-name"] = e;
  const l = Ge(e, m.buildOption);
  return o.children = h(t, l), o;
}, ze = ({ data: t, columns: a }) => a.map((e) => qe(t, e)), v = (t = {}) => {
  const { data: a, columns: e } = Ve(t);
  return ze({ data: a, columns: e });
}, He = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, Ue = (t) => {
  const a = t;
  if (typeof globalThis > "u" || !a) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof a == "function" ? a : a.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: He,
    render: e,
    ...typeof a == "object" ? a : {}
  };
}, Me = "input", Je = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, _e = {
  tagName: Me,
  attributes: Je
}, $ = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(_e);
  return e.placeholder && (o.attributes.placeholder = e.placeholder), e.class && (o.attributes.class = e.class), e.id && (o.attributes.id = e.id), e.name && (o.attributes.name = e.name), e.type && (o.attributes.type = e.type), e.value && (o.attributes.value = e.value), o;
}, Qe = "div", Xe = {
  class: "d-flex align-items-center gap-2"
}, Ye = [
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
], Ze = {
  tagName: Qe,
  attributes: Xe,
  children: Ye
}, N = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(Ze), l = o.children[0], s = o.children[1];
  return e.label && (l.textContent = e.label), e.id && (l.attributes.for = e.id, s.attributes.id = e.id), e.placeholder && (s.attributes.placeholder = e.placeholder), e.class && (s.attributes.class = e.class), e.name && (s.attributes.name = e.name), e.type && (s.attributes.type = e.type), e.wrapperClass && (o.attributes.class = e.wrapperClass), e.labelClass && (l.attributes.class = e.labelClass), o;
}, ta = "div", ea = {
  class: "d-flex align-items-center gap-2"
}, aa = [
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
], oa = {
  tagName: ta,
  attributes: ea,
  children: aa
}, T = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(oa), l = o.children[0], s = o.children[1], n = o.children[2];
  return e.label && (l.textContent = e.label), e.id && (l.attributes.for = e.id, s.attributes.id = e.id), e.placeholder && (s.attributes.placeholder = e.placeholder), e.class && (s.attributes.class = e.class), e.name && (s.attributes.name = e.name), e.type && (s.attributes.type = e.type), e.buttonText && (n.textContent = e.buttonText), e.buttonClass && (n.attributes.class = e.buttonClass), e.buttonId && (n.attributes.id = e.buttonId), e.wrapperClass && (o.attributes.class = e.wrapperClass), e.labelClass && (l.attributes.class = e.labelClass), o;
}, la = {
  input: $,
  inputOnly: $,
  inputWithLabel: N,
  inputWithLabelButton: T
}, sa = ({
  type: t = "inputWithLabel",
  options: a = {},
  inType: e,
  inOptions: o
} = {}) => {
  const l = e ?? t, s = o ?? a;
  return (la[l] || N)({ inOptions: s, options: s });
};
Ue({
  render: sa,
  inputOnly: $,
  inputWithLabel: N,
  inputWithLabelButton: T
});
const F = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a;
  return (e == null ? void 0 : e.label) === !1 || (e == null ? void 0 : e.flavour) === "inputOnly" ? $({ inOptions: e }) : (e == null ? void 0 : e.flavour) === "inputWithLabelButton" || e != null && e.button || e != null && e.buttonText ? T({ inOptions: e }) : N({ inOptions: e });
}, na = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, ra = (t) => {
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: na, render: t });
}, ia = "div", ca = {
  class: "${cardClass}",
  "data-role": "form-card"
}, ua = [
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
], da = {
  tagName: ia,
  attributes: ca,
  children: ua
}, ba = () => structuredClone(da), pa = "header-actions", ma = "button", R = {
  destinationRole: pa,
  template: ma
}, ha = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, fa = {
  button: ha
}, ya = (t, a) => {
  const e = structuredClone(t), o = h(a.header.actions, fa[R.template]);
  return y(e, R.destinationRole).children.push(...o), e;
}, Ca = "form-body", ga = {
  destinationRole: Ca
}, $a = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, wa = {
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
}, Na = {
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
}, xa = {
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
}, Fa = {
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
}, Ba = {
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
}, Pa = {
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
}, Ta = {
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
}, ka = {
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
}, Aa = {
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
}, va = {
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
}, Ra = {
  buildBodyTr: $a,
  buildBodyCell: wa,
  buildRequiredField: Na,
  buildTextareaField: xa,
  buildCheckboxField: Fa,
  buildInlineField: Ba,
  buildInlineRequiredField: Pa,
  buildInlineFieldWithButton: Ta,
  buildInlineRequiredFieldWithButton: ka,
  buildInlineTextareaField: Aa,
  buildInlineCheckboxField: va
}, Ia = (t, a, e) => {
  const o = t.map((n) => {
    var d, i, u, p, f;
    const r = ((i = (d = n.template) == null ? void 0 : d.body) == null ? void 0 : i.cell) ?? (n.required ? "buildRequiredField" : "buildBodyCell");
    let c = ((u = e.fieldTemplates) == null ? void 0 : u[r]) ?? r;
    return n.buttonText && (c = ((p = e.buttonFieldTemplates) == null ? void 0 : p[c]) ?? c), {
      ...n,
      label: n.label ?? n.title ?? n.columnName,
      type: n.type ?? "text",
      placeholder: n.placeholder ?? "",
      buttonType: n.buttonType ?? "button",
      template: { ...n.template, body: { ...(f = n.template) == null ? void 0 : f.body, cell: c } }
    };
  }), l = a[0] ?? {}, s = Object.fromEntries(o.map((n) => [
    n.columnName,
    l[n.columnName] ?? n.value ?? ""
  ]));
  return { columns: o, rows: [s] };
}, ja = (t, a, e) => {
  const o = Ia(a.columns, a.records, e.body), l = O(o.columns, o.rows, Ra), s = structuredClone(t);
  return y(s, ga.destinationRole).children.push(...Array.isArray(l) ? l : [l]), s;
}, Sa = "footer-actions", La = "button", I = {
  destinationRole: Sa,
  template: La
}, Oa = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, Ea = {
  button: Oa
}, Wa = (t, a) => {
  const e = structuredClone(t), o = h(a.footer.actions, Ea[I.template]);
  return y(e, I.destinationRole).children.push(...o), e;
}, K = ({ inColumns: t, inData: a, inOptions: e, columns: o, data: l, options: s } = {}) => ({
  columns: Array.isArray(t) && t.length > 0 ? t : Array.isArray(o) ? o : [],
  records: Array.isArray(a) && a.length > 0 ? a : Array.isArray(l) ? l : [],
  options: e && Object.keys(e).length > 0 ? e : s ?? {}
}), Da = "bigButtonsForm", Ka = "Account details", Va = "Update your profile information.", Ga = "", qa = "label", za = "stacked", Ha = "saveCancel", Ua = {
  formId: Da,
  title: Ka,
  description: Va,
  recordId: Ga,
  header: qa,
  body: za,
  footer: Ha
}, Ma = {
  actions: []
}, Ja = {
  actions: []
}, _a = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, Qa = {
  actions: []
}, Xa = {
  none: Ma,
  label: Ja,
  labelWithRefresh: _a,
  labelWithId: Qa
}, Ya = {
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
}, Za = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, to = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, eo = {
  inline: Ya,
  stacked: Za,
  threeColumns: to
}, ao = {
  actions: []
}, oo = {
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
}, lo = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, so = {
  none: ao,
  saveCancel: oo,
  edit: lo
}, B = (t, a, e) => {
  const o = t[a];
  if (!o) throw new RangeError("Unknown bigButtons " + e + ": " + a);
  return o;
}, V = (t) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const a = t["form.bigButtons"] ?? {};
  if (typeof a != "object" || a === null || Array.isArray(a))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const e = { ...Ua, ...a };
  return {
    options: e,
    header: B(Xa, e.header, "header"),
    body: B(eo, e.body, "body"),
    footer: B(so, e.footer, "footer")
  };
}, no = (t, a = {}) => {
  const e = K(a), o = V(e.options), l = ya(t, o), s = ja(l, e, o);
  return Wa(s, o);
}, ro = {
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
}, io = {
  bootstrap: ro
}, co = (t, a) => {
  var o;
  const e = (o = io[a]) == null ? void 0 : o[t.header];
  if (!e) throw new RangeError("Unknown bigButtons header: " + t.header);
  return e;
}, uo = "bootstrap", bo = {
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
}, P = {
  defaultFramework: uo,
  frameworks: bo
}, po = (t, a) => {
  const e = P.frameworks[a];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + a);
  const o = e.bodies[t.body];
  if (!o) throw new RangeError("Unknown bigButtons body: " + t.body);
  return { ...e.base, ...o };
}, mo = {
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
}, ho = {
  bootstrap: mo
}, fo = (t, a) => {
  const e = ho[a], o = e == null ? void 0 : e.footers[t.footer];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + a);
  if (!o) throw new RangeError("Unknown bigButtons footer: " + t.footer);
  return { ...e.base, ...o };
}, yo = (t, a = {}) => {
  const e = V(K(a).options), { options: o } = e, l = o.framework ?? P.defaultFramework;
  if (!P.frameworks[l]) throw new RangeError("Unknown bigButtons framework: " + l);
  const n = Object.assign(
    {},
    o,
    po(o, l),
    co(o, l),
    fo(o, l)
  );
  return b(n, structuredClone(t));
}, Co = (t = {}) => {
  const a = ba(), e = no(a, t);
  return yo(e, t);
}, G = (t = {}) => {
  const a = { ...t, type: t.type ?? "form.bigButtons" };
  return j(a), Co(a);
};
ra(G);
const go = ({
  inType: t = "stacked",
  inData: a,
  inColumns: e
} = {}) => G({
  type: t,
  columns: e,
  data: a
}), $o = {
  table: A,
  tableFromSpec: A,
  select: Le,
  selectOptionsOnly: Ke,
  dataList: v,
  datalist: v,
  searchInput: F,
  search: F,
  inputRow: F,
  form: go
}, wo = (t = {}) => {
  j(t);
  const a = t == null ? void 0 : t.showLog;
  console.log("localShowLog : ", a);
  const e = t.type, o = t == null ? void 0 : t.options;
  let l = e, s = e;
  if (e.includes(".")) {
    const c = e.split(".");
    l = c[0], s = c[1];
  }
  a && console.log("localMainType : ", l, s);
  const n = $o[l];
  if (!n)
    throw new Error(`Renderer for type "${l}" not found.`);
  const r = n({
    inType: s,
    inColumns: t.columns,
    inData: t.data,
    inOptions: o,
    options: t.options,
    inShowLog: a
  });
  return a && console.log("json-renderers-build output:", r), r;
};
U(wo);
export {
  wo as default,
  wo as render
};
