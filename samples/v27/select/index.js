import render from "../../../docs/dist/v24/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const start = () => {
  try {
    const spec = render({
      type: "select",
      columns: [{ columnName: "Name" }],
      data: [
        { Name: "KeshavSoft" },
        { Name: "India" },
        { Name: "Crown Logistics" }
      ]
    });

    console.log("dataList spec:", spec);

    const container = document.getElementById("dom-render-container");
    if (container) {
      const control = window.ks.jsonToTag.buildSpecElement(spec);
      container.appendChild(...control);
    }
  } catch (err) {
    console.log("error:", err);
  }
};

start();
