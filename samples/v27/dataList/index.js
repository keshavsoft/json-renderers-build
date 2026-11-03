import render from "../../../docs/dist/v27/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const start = () => {
  try {
    const spec = render({
      type: "dataList",
      columns: [{ columnName: "CompanyList" }],
      data: [
        { CompanyList: "KeshavSoft Enterprise" },
        { CompanyList: "KeshavSoft Analytics" },
        { CompanyList: "Blue Valley Logistics" },
        { CompanyList: "Apex Global Foods" },
        { CompanyList: "Crown Dynamics Inc." },
        { CompanyList: "Delta Instruments" }
      ]
    });

    console.log("DataList spec:", spec);

    const specOutput = document.getElementById("spec-output");
    if (specOutput) {
      specOutput.textContent = JSON.stringify(spec, null, 2);
    }

    const container = document.getElementById("dom-render-container");
    if (container) {
      const control = window.ks.jsonToTag.buildSpecElement(spec);
      const elements = Array.isArray(control) ? control : [control];
      container.replaceChildren(...elements);
    }
  } catch (err) {
    console.error("DataList render error:", err);
  }
};

start();
