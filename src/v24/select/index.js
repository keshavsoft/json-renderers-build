import normalizeInputs from "./normalizeInputs.js";
import buildDataListsForColumns from "./buildDataListsForColumns.js";

const startFunc = (options = {}) => {
    const { data, columns } = normalizeInputs(options);

    return buildDataListsForColumns({ data, columns });
};

export default startFunc;
