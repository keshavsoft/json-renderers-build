import definitions from "../definitions.json" with { type: "json" };

const buildField = (column, rowData = {}) => {
    const name = column.columnName || column.name || "";
    const label = column.label || name;
    const type = column.type || "text";
    const placeholder = column.placeholder || "";
    const value = rowData[name] ?? column.value ?? "";
    const required = column.required ?? false;

    if (type === "textarea") {
        const textarea = {
            tagName: "textarea",
            textContent: String(value),
            attributes: {
                class: "form-control",
                id: name,
                name: name,
                placeholder: placeholder,
                rows: "3"
            }
        };
        if (required) textarea.attributes.required = "true";

        return {
            tagName: "div",
            attributes: { class: "mb-3" },
            children: [
                { tagName: "label", textContent: label, attributes: { class: "form-label fw-semibold small text-secondary", for: name } },
                textarea
            ]
        };
    }

    if (type === "select") {
        const optionsList = (column.options || []).map(opt => {
            const optVal = typeof opt === "object" ? opt.value : opt;
            const optLabel = typeof opt === "object" ? opt.label : opt;
            const optObj = {
                tagName: "option",
                textContent: String(optLabel),
                attributes: { value: String(optVal) }
            };
            if (String(optVal) === String(value)) {
                optObj.attributes.selected = "true";
            }
            return optObj;
        });

        return {
            tagName: "div",
            attributes: { class: "mb-3" },
            children: [
                { tagName: "label", textContent: label, attributes: { class: "form-label fw-semibold small text-secondary", for: name } },
                {
                    tagName: "select",
                    attributes: { class: "form-select", id: name, name: name },
                    children: optionsList
                }
            ]
        };
    }

    if (type === "checkbox") {
        const input = {
            tagName: "input",
            attributes: {
                type: "checkbox",
                class: "form-check-input",
                id: name,
                name: name
            }
        };
        if (value) input.attributes.checked = "true";

        return {
            tagName: "div",
            attributes: { class: "mb-3 form-check" },
            children: [
                input,
                { tagName: "label", textContent: label, attributes: { class: "form-check-label small fw-semibold text-secondary", for: name } }
            ]
        };
    }

    // Default input: text, email, number, date, etc.
    const input = {
        tagName: "input",
        attributes: {
            type,
            class: "form-control",
            id: name,
            name: name,
            placeholder
        }
    };
    if (value !== "") input.attributes.value = String(value);
    if (required) input.attributes.required = "true";

    return {
        tagName: "div",
        attributes: { class: "mb-3" },
        children: [
            { tagName: "label", textContent: label, attributes: { class: "form-label fw-semibold small text-secondary", for: name } },
            input
        ]
    };
};

const render = ({
    inData = [],
    inColumns = [],
    inOptions = {},
    options = {}
} = {}) => {
    const opts = Object.keys(inOptions || {}).length > 0 ? inOptions : options;
    const formConfig = structuredClone(definitions.form?.base);

    const title = opts.title || opts.ariaLabel || "Form";
    const formId = opts.formId || "formElement";
    const submitLabel = opts.submitLabel || "Submit";

    formConfig.children[0].children[0].textContent = title;
    const formElement = formConfig.children[1].children[0];
    formElement.attributes.id = formId;

    const rowData = (Array.isArray(inData) && inData.length > 0) ? inData[0] : (inData || {});

    // Build fields from columns
    const fields = inColumns.map(col => buildField(col, rowData));

    // Submit actions
    const actions = {
        tagName: "div",
        attributes: { class: "d-flex justify-content-end gap-2 mt-4 pt-3 border-top" },
        children: [
            { tagName: "button", textContent: "Reset", attributes: { type: "reset", class: "btn btn-outline-secondary" } },
            { tagName: "button", textContent: submitLabel, attributes: { type: "submit", class: "btn btn-primary px-4 fw-medium" } }
        ]
    };

    formElement.children = [...fields, actions];

    return formConfig;
};

export default render;
