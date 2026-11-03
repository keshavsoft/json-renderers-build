import buildTable from "json-renderers-build-table";

const render = ({
    inData,
    inColumns,
    inType,
    footer = [],
    inOptions,
    inShowLog
} = {}) => {
    const localType = inType;
    const localBuildTableFunc = buildTable[localType];
    const localOptions = inOptions;
    const localShowLog = inShowLog;

    if (localShowLog) console.log("table : ", localType, localOptions);

    const spec = localBuildTableFunc({
        columns: inColumns,
        data: inData,
        options: localOptions,
        showLog: localShowLog
    });

    return spec;
};

export default render;