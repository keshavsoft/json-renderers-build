import registerGlobal from "./registerGlobal.js";

import renderTable from "./table/index.js";
import renderSelect from "./select/index.js";

const RENDERER_MAP = {
    table: renderTable,
    select: renderSelect
};

const render = ({
    type = "table",
    data,
    columns
} = {}) => {
    const rawType = type;
    const resolvedType = typeof rawType === "string" ? rawType.toLowerCase() : "table";
    const renderer = RENDERER_MAP[resolvedType];

    if (!renderer) {
        console.error(
            `[Renderer] Unknown renderer type "${rawType}". Available types: ${Object.keys(RENDERER_MAP).join(", ")}`
        );
        return null;
    }

    const localData = data;
    const localColumns = columns;

    // Default to table renderer
    return renderer({
        inColumns: localColumns,
        inData: localData
    });
};

registerGlobal(render);

export default render;
