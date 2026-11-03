import render from "../../../docs/dist/v27/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const start = () => {
  try {
    const spec = render({
      type: "selectOptionsOnly",
      columns: [{ columnName: "Role" }],
      data: [
        { Role: "Lead Architect" },
        { Role: "Senior Frontend Engineer" },
        { Role: "Full Stack Developer" },
        { Role: "DevOps Engineer" }
      ]
    });

    console.log("selectOptionsOnly spec:", spec);

    const specOutput = document.getElementById("spec-output");
    if (specOutput) {
      specOutput.textContent = JSON.stringify(spec, null, 2);
    }

    const container = document.getElementById("selectId");
    if (container) {
      const control = window.ks.jsonToTag.buildSpecElement(spec);
      const elements = Array.isArray(control) ? control : [control];
      container.append(...elements);
    }
  } catch (err) {
    console.error("selectOptionsOnly render error:", err);
  }
};

start();
