import { fromCollection } from "json-transformer-funcs";
import spec from "../spec.json" with { type: "json" };

const normalizeInputs = ({ inData = [], inColumns = [] } = {}) => ({
    data: (inData ?? []).map((element) =>
        typeof element === "object" && element !== null ? element : { rowValue: element }
    ),
    columns: inColumns,
});

const buildOptionForValue = (value, optionTemplate = spec.buildOption) => {
    const optionForValue = structuredClone(optionTemplate);

    optionForValue.textContent = optionForValue.textContent.replace("rowValue", value);
    optionForValue.attributes.value = optionForValue.attributes.value.replace("rowValue", value);

    return optionForValue;
};

const makeSelect = (data) => {
    const select = structuredClone(spec.buildSelect);
    const options = data.map((entry) => buildOptionForValue(entry?.rowValue ?? entry, spec.buildOption));

    select.children = fromCollection(data, spec.buildOption);
    select.children = options;

    return select;
};

const startFunc = (options = {}) => {
    const { data } = normalizeInputs(options);

    return makeSelect(data);
};

export default startFunc;