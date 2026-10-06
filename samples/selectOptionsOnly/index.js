import render from "../../docs/dist/v3/min.js";

const start = () => {
  try {
    const createControl = render({
      type: "selectOptionsOnly",
      data: ["Executive Suite", "Deluxe Room", "Standard Cabin"]
    });
    console.log("createControl : ", createControl);

    const container = document.getElementById("dom-render-container");
    if (container) {
      container.innerHTML = `
        <div class="card shadow-sm border-0">
          <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center py-2">
            <span class="font-monospace small">Generated specAsJsonToDom (Fragment)</span>
            <span class="badge bg-warning text-dark">Type: selectOptionsOnly</span>
          </div>
          <div class="card-body p-0">
            <pre class="m-0 p-3 bg-light font-monospace small" style="max-height: 500px; overflow: auto;"><code>${JSON.stringify(createControl, null, 2)}</code></pre>
          </div>
        </div>
      `;
    }

  } catch (err) {
    console.log("error : ", err);
    const container = document.getElementById("dom-render-container");
    if (container) {
      container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
  }
};

start();