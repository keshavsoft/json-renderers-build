import { fromCollection } from "json-transformer-funcs";
import spec from "../spec.json" with { type: "json" };
import buildColumnOption from "./buildColumnOption.js";

const makeDataListForColumn = (data, columnConfig) => {
    const columnName = columnConfig?.columnName;

    const optionForColumn = buildColumnOption(columnName, spec.buildOption);

    const constBuiltOptions = fromCollection(data, optionForColumn);

    return constBuiltOptions;
};

export default makeDataListForColumn;