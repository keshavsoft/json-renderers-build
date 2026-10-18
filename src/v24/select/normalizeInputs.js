const normalizeInputs = ({ inData = [], inColumns = [] } = {}) => ({
    data: (inData ?? []).map((element) =>
        typeof element === "object" && element !== null ? element : { rowValue: element }
    ),
    columns: inColumns,
});

export default normalizeInputs;
