import normalizeInputs from "./normalizeInputs.js";
import buildOptionsForColumns from "./buildOptionsForColumns.js";

const renderSelectOptions = (options = {}) => {
    const { data, columns } = normalizeInputs(options);

    return buildOptionsForColumns({ data, columns });
};

export default renderSelectOptions;