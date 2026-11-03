import spec from "../spec.json" with { type: "json" };

const buildColumnOption = (columnName, optionTemplate = spec.buildOption) => {
    const optionForColumn = structuredClone(optionTemplate);

    optionForColumn.textContent = optionForColumn.textContent.replace("rowValue", columnName);
    optionForColumn.attributes.value = optionForColumn.attributes.value.replace("rowValue", columnName);

    return optionForColumn;
};

export default buildColumnOption;
