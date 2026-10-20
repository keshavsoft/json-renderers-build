import { fromCollection } from "json-transformer-funcs";
import spec from "../spec.json" with { type: "json" };
import buildColumnOption from "./buildColumnOption.js";

const makeDataListForColumn = (data, columnConfig) => {
    const columnName = columnConfig?.columnName;

    const dataList = structuredClone(spec.buildSelect);
    dataList.attributes.id = columnName;
    dataList.attributes["data-name"] = columnName;

    const optionForColumn = buildColumnOption(columnName, spec.buildOption);

    dataList.children = fromCollection(data, optionForColumn);

    return dataList;
};

export default makeDataListForColumn;
