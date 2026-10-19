import spec from "../spec.json" with { type: "json" };

const buildOptionForColumn = (columnConfig, optionTemplate = spec.buildOption) => {
    const template = structuredClone(optionTemplate);
    const columnName = columnConfig?.columnName;

    template.textContent = template.textContent.replace("rowValue", columnName);
    template.attributes.value = template.attributes.value.replace("rowValue", columnName);

    return template;
};

export default buildOptionForColumn;
