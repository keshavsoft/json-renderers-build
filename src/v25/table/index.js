import buildTable from "json-renderers-build-table";

const render = ({
    inData,
    inColumns,
    inType,
    footer = [],
    options,
    inShowLog
} = {}) => {
    const localType = inType;
    const localBuildTableFunc = buildTable[localType];

    const spec = localBuildTableFunc({
        columns: inColumns,
        data: inData,
        showLog: inShowLog
    });

    return spec;
};

export default render;