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
    const localOptions = inOptions;
    const localShowLog = inShowLog;

    if (localShowLog) console.log("table : ", localType, localOptions);

    const spec = buildTable({
        type: localType,
        columns: inColumns,
        data: inData,
        options: localOptions,
        showLog: localShowLog
    });

    return spec;
};

export default render;