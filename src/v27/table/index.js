import definitions from "../definitions.json" with { type: "json" };
import runSingleInstructions from "json-instruction-single";
import runDoubleInstructions from "json-instruction-double";
import tableOptions from "json-renderers-build-table-options";

const render = ({
    inData = [],
    inColumns = [],
    inType = "simple",
    footer = [],
    inOptions = {},
    options = {},
    inShowLog = false
} = {}) => {
    const localType = (!inType || inType === "table") ? "simple" : inType;
    const localOptions = Object.keys(inOptions || {}).length > 0 ? inOptions : options;
    const localShowLog = inShowLog;

    const config = definitions.table[localType] || definitions.table.simple;
    if (!config) {
        throw new Error(`Unknown table type: "${localType}". Available types: ${Object.keys(definitions.table).join(", ")}`);
    }

    const base = structuredClone(config.base);
    const registry = {
        data: { columns: inColumns, data: inData },
        base,
        ...localOptions
    };

    if (config.single && config.single.length > 0) {
        runSingleInstructions(config.single, registry, localShowLog);
    }

    if (config.double && config.double.length > 0) {
        runDoubleInstructions(config.double, registry);
    }

    tableOptions({ options: localOptions, base });

    return base;
};

export default render;
