import render from "../../../src/index.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const start = () => {
  try {
    const spec = render({
      type: "select",
      columns: [{ columnName: "Name" }],
      data: ["Apex Industries", "Blue Valley Foods", "Crown Logistics"]
    });

    console.log("select spec:", spec);

    const container = document.getElementById("dom-render-container");
    if (container) {
      const control = window.ks.jsonToTag.buildSpecElement(spec);
      container.appendChild(control);
    }
  } catch (err) {
    console.log("error:", err);
  }
};

start();
