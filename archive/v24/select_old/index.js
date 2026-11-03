import normalizeInputs from "./normalizeInputs.js";
import makeSelect from "./makeSelect.js";

const startFunc = (options = {}) => {
    const { data } = normalizeInputs(options);

    return makeSelect(data);
};

export default startFunc;