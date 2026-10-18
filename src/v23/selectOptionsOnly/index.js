import { fromCollection } from "json-transformer-funcs";
import spec from "../spec.json" with { type: "json" };

const normalizeInputs = ({ inData = [], inColumns = [] } = {}) => ({
    data: inData,
    columns: inColumns,
});

const buildOptionForColumn = (columnConfig, optionTemplate = spec.buildOption) => {
    const template = structuredClone(optionTemplate);
    const columnName = columnConfig?.columnName;

    template.textContent = template.textContent.replace("rowValue", columnName);
    template.attributes.value = template.attributes.value.replace("rowValue", columnName);

    return template;
};

const makeOptionsForColumn = (data, columnConfig) => {
    const optionTemplate = buildOptionForColumn(columnConfig, spec.buildOption);

    return fromCollection(data, optionTemplate);
};

const buildOptionsForColumns = ({ data, columns }) =>
    columns.map((columnConfig) => makeOptionsForColumn(data, columnConfig));

const renderSelectOptions = (options = {}) => {
    const { data, columns } = normalizeInputs(options);

    return buildOptionsForColumns({ data, columns });
};

export default renderSelectOptions;