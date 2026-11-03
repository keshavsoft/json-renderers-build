import render from "../../../docs/dist/v27/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const start = () => {
  try {
    const spec = render({
      type: "select",
      columns: [{ columnName: "Company" }],
      data: [
        { Company: "KeshavSoft Enterprise" },
        { Company: "Blue Valley Logistics" },
        { Company: "Apex Global Foods" },
        { Company: "Crown Dynamics Inc." }
      ]
    });

    console.log("Select spec:", spec);

    const specOutput = document.getElementById("spec-output");
    if (specOutput) {
      specOutput.textContent = JSON.stringify(spec, null, 2);
    }

    const container = document.getElementById("dom-render-container");
    if (container) {
      const control = window.ks.jsonToTag.buildSpecElement(spec);
      const elements = Array.isArray(control) ? control : [control];
      
      // Add Bootstrap form-select class for clean styling
      elements.forEach(el => {
        if (el.tagName === "SELECT") {
          el.className = "form-select form-select-lg shadow-sm";
          el.addEventListener("change", (e) => {
            const feedback = document.getElementById("selected-feedback");
            if (feedback) feedback.textContent = `Selected: ${e.target.value}`;
          });
        }
      });

      container.replaceChildren(...elements);
    }
  } catch (err) {
    console.error("Select render error:", err);
  }
};

start();
