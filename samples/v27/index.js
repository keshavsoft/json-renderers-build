import render from "../../docs/dist/v27/min.js";
import "https://keshavsoft.github.io/json-to-dom/dist/v42/min.js";
import { buildSpecElement } from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const sampleColumns = [
  { columnName: "itemName", width: "250px" },
  { columnName: "baseUnit", width: "120px" },
  { columnName: "openingRate", width: "150px" }
];

const sampleData = [
  { itemName: "0.09/30mm High Tensile", baseUnit: "kgs", openingRate: "1200.00/kgs" },
  { itemName: "0.11-25 Galvanized Wire", baseUnit: "kgs", openingRate: "1450.00/kgs" },
  { itemName: "0.11-30 Stainless Rod", baseUnit: "pcs", openingRate: "890.00/pcs" },
  { itemName: "0.15-40 Brass Fastener", baseUnit: "boxes", openingRate: "350.00/box" }
];

const initDashboard = () => {
  // 1. Render Table Component
  try {
    const tableSpec = render({
      type: "table.simple",
      data: sampleData,
      columns: sampleColumns,
      options: {
        showSerial: true,
        showOptions: true
      }
    });

    window.ks.jsonToDom.appendToDom({
      jsonSpec: tableSpec,
      targetHtmlId: "demo-table-container",
      options: {},
      classToApply: "",
      appendPosition: "replace",
    });
  } catch (err) {
    console.error("Table render error:", err);
    document.getElementById("demo-table-container").innerHTML = `<div class="alert alert-danger small">${err.message}</div>`;
  }

  // 2. Render Select Component
  try {
    const selectSpec = render({
      type: "select",
      columns: [{ columnName: "demoSelect" }],
      data: [
        { demoSelect: "Primary Bank Account" },
        { demoSelect: "Tax Reserve Account" },
        { demoSelect: "Petty Cash Ledger" },
        { demoSelect: "Customer Escrow" }
      ]
    });

    const buildFunc = buildSpecElement || window.ks?.jsonToTag?.buildSpecElement;
    if (buildFunc) {
      const el = buildFunc(selectSpec);
      const elements = Array.isArray(el) ? el : [el];
      elements.forEach(selectEl => {
        if (selectEl.tagName === "SELECT") {
          selectEl.className = "form-select shadow-sm";
        }
      });
      document.getElementById("demo-select-container").replaceChildren(...elements);
    }
  } catch (err) {
    console.error("Select render error:", err);
  }

  // 3. Render DataList Component
  try {
    const dataListSpec = render({
      type: "dataList",
      columns: [{ columnName: "ItemsList" }],
      data: sampleData.map(d => ({ ItemsList: d.itemName }))
    });

    const buildFunc = buildSpecElement || window.ks?.jsonToTag?.buildSpecElement;
    if (buildFunc) {
      const el = buildFunc(dataListSpec);
      const elements = Array.isArray(el) ? el : [el];
      document.getElementById("demo-datalist-container").replaceChildren(...elements);
    }
  } catch (err) {
    console.error("DataList render error:", err);
  }

  // 4. Render Search Input Component
  try {
    const searchSpec = render({
      type: "searchInput",
      columns: [],
      data: [],
      options: {
        label: "Quick Filter:",
        placeholder: "Type to search all records...",
        id: "masterSearchBox",
        class: "form-control shadow-sm"
      }
    });

    const buildFunc = buildSpecElement || window.ks?.jsonToTag?.buildSpecElement;
    if (buildFunc) {
      const el = buildFunc(searchSpec);
      const elements = Array.isArray(el) ? el : [el];
      document.getElementById("demo-search-container").replaceChildren(...elements);
    }
  } catch (err) {
    console.error("Search input render error:", err);
  }
};

initDashboard();

