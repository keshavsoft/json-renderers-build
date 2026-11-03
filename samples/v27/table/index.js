import render from "../../../docs/dist/v24/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

import data from "./batches.json" with { type: "json" };

const start = () => {
  try {
    const createControl = render({
      type: "table",
      columns: [{ columnName: "itemName", width: "70%" }],
      data: data.slice(0, 10)
    });

    console.log("createControl:", createControl);

    const result = window.ks.jsonToTag.buildSpecElement(createControl);
    console.log("result:", result);

    const container = document.getElementById("dom-render-container");
    if (container) {
      container.appendChild(result);
    }
  } catch (err) {
    console.log("error:", err);
    const container = document.getElementById("dom-render-container");
    if (container) {
      container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
  }
};

start();
