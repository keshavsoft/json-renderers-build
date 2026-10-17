import renderForm from "json-renderers-build-form";

const render = ({
    inType = "stacked",
    inData,
    inColumns
} = {}) => {

    const spec = renderForm({
        type: inType,
        columns: inColumns,
        data: inData
    });

    return spec;
};

export default render;