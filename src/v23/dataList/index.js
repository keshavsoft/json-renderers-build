import { fromCollection } from "json-transformer-funcs";
import spec from "../spec.json" with { type: "json" };
import startFunc from "../../../archive/v1/table/index.js";

const normalizeInputs = ({ inData = [], inColumns = [] } = {}) => ({
    data: inData,
    columns: inColumns,
});

const buildColumnOption = (columnName, optionTemplate = spec.buildOption) => {
    const optionForColumn = structuredClone(optionTemplate);

    optionForColumn.textContent = optionForColumn.textContent.replace("rowValue", columnName);
    optionForColumn.attributes.value = optionForColumn.attributes.value.replace("rowValue", columnName);

    return optionForColumn;
};

const makeDataListForColumn = (data, columnConfig) => {
    const columnName = columnConfig?.columnName;
    const dataList = structuredClone(spec.buildDataList);
    const optionForColumn = buildColumnOption(columnName, spec.buildOption);

    dataList.children = fromCollection(data, optionForColumn);

    return dataList;
};

const buildDataListsForColumns = ({ data, columns }) =>
    columns.map((columnConfig) => makeDataListForColumn(data, columnConfig));

const startFunc = (options = {}) => {
    const { data, columns } = normalizeInputs(options);

    return buildDataListsForColumns({ data, columns });
};

export default startFunc;
