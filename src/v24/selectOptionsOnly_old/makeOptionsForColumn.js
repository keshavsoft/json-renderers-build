import { fromCollection } from "json-transformer-funcs";
import spec from "../spec.json" with { type: "json" };
import buildOptionForColumn from "./buildOptionForColumn.js";

const makeOptionsForColumn = (data, columnConfig) => {
    const optionTemplate = buildOptionForColumn(columnConfig, spec.buildOption);

    return fromCollection(data, optionTemplate);
};

export default makeOptionsForColumn;
