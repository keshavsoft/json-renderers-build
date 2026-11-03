import render from "../../../docs/dist/v27/min.js";
import { buildSpecElement } from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const startFunc = () => {
  try {
    const searchControl = render({
      type: "searchInput",
      columns: [],
      data: [],
      options: {
        label: "Quick Search:",
        placeholder: "Type keywords to filter records...",
        id: "searchInputId",
        class: "form-control form-control-lg shadow-sm"
      }
    });

    console.log("Search input spec:", searchControl);

    const specOutput = document.getElementById("spec-output");
    if (specOutput) {
      specOutput.textContent = JSON.stringify(searchControl, null, 2);
    }

    const target = document.getElementById("render-target");
    if (target) {
      const buildFunc = buildSpecElement || window.ks?.jsonToTag?.buildSpecElement;
      if (buildFunc) {
        const domElement = buildFunc(searchControl);
        if (domElement) {
          target.replaceChildren(...(Array.isArray(domElement) ? domElement : [domElement]));
        }
      }
    }
  } catch (err) {
    console.error("Error building search input spec:", err);
  }
};

startFunc();
