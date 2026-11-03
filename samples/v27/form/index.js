import render from "../../../docs/dist/v27/min.js";
import { buildSpecElement } from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const columns = [
  { columnName: "Name", type: "text", label: "Full Name", placeholder: "e.g. Ada Lovelace", required: true },
  { columnName: "Email", type: "email", label: "Email Address", placeholder: "e.g. ada@example.com", required: true },
  { columnName: "Role", type: "select", label: "Designation / Role", options: ["Lead Architect", "Frontend Engineer", "DevOps Engineer", "Product Manager"] },
  { columnName: "Notes", type: "textarea", label: "Project Notes", placeholder: "Describe project requirements or details..." },
  { columnName: "Updates", type: "checkbox", label: "Subscribe to developer updates" }
];

const data = [{
  Name: "Ada Lovelace",
  Email: "ada@example.com",
  Role: "Lead Architect",
  Notes: "Ready to test the new instruction-driven form builder.",
  Updates: true
}];

const start = () => {
  try {
    const spec = render({
      type: "form",
      columns,
      data,
      options: {
        formId: "contact-form",
        title: "Edit Developer Profile",
        submitLabel: "Save Profile"
      }
    });

    console.log("Form spec:", spec);

    const specOutput = document.getElementById("spec-output");
    if (specOutput) {
      specOutput.textContent = JSON.stringify(spec, null, 2);
    }

    const container = document.getElementById("form-container");
    const buildFunc = buildSpecElement || window.ks?.jsonToTag?.buildSpecElement;
    if (container && buildFunc) {
      const formElement = buildFunc(spec);
      container.replaceChildren(formElement);

      // Handle live submit
      const realForm = formElement.querySelector("form") || formElement;
      realForm.addEventListener("submit", event => {
        event.preventDefault();
        const formData = new FormData(realForm);
        const result = Object.fromEntries(formData);
        const resultElement = document.getElementById("submit-result");
        if (resultElement) {
          resultElement.innerHTML = `<strong><i class="bi bi-check-circle me-1"></i>Saved Successfully!</strong><br><pre class="mb-0 mt-2 font-monospace small">${JSON.stringify(result, null, 2)}</pre>`;
          resultElement.classList.remove("d-none");
        }
      });
    }
  } catch (error) {
    document.getElementById("form-container").innerHTML = `<div class="alert alert-danger small">${error.message}</div>`;
    console.error("Form error:", error);
  }
};

start();
