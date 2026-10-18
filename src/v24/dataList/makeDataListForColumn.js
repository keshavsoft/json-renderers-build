import { fromCollection } from "json-transformer-funcs";
import spec from "../spec.json" with { type: "json" };
import buildColumnOption from "./buildColumnOption.js";

const makeDataListForColumn = (data, columnConfig) => {
    const columnName = columnConfig?.columnName;
    const dataList = structuredClone(spec.buildDataList);
    const optionForColumn = buildColumnOption(columnName, spec.buildOption);

    dataList.children = fromCollection(data, optionForColumn);

    return dataList;
};

export default makeDataListForColumn;
