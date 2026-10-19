import { fromCollection } from "json-transformer-funcs";
import spec from "../spec.json" with { type: "json" };
import buildOptionForValue from "./buildOptionForValue.js";

const makeSelect = (data) => {
    const select = structuredClone(spec.buildSelect);
    const options = data.map((entry) => buildOptionForValue(entry?.rowValue ?? entry, spec.buildOption));

    select.children = fromCollection(data, spec.buildOption);
    select.children = options;

    return select;
};

export default makeSelect;
