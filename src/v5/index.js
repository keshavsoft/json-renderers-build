import registerGlobal from "./registerGlobal.js";

import renderTable from "./table/index.js";
import renderSelect from "./select/index.js";
import renderSelectOptionsOnly from "./selectOptionsOnly/index.js";
import renderSidebar from "./sidebar/index.js";
import buildDomNode from "./common/buildDomNode.js";

const RENDERER_MAP = {
    table: renderTable,
    select: renderSelect,
    selectOptionsOnly: renderSelectOptionsOnly,
    sidebar: renderSidebar
};

const render = ({
    type = "table",
    data,
    inData,
    columns,
    inColumns,
    targetHtmlId,
    inTargetHtmlId
} = {}) => {
    const rawType = type;
    const renderer = RENDERER_MAP[rawType];

    if (!renderer) {
        console.error(
            `[Renderer] Unknown renderer type "${rawType}". Available types: ${Object.keys(RENDERER_MAP).join(", ")}`
        );
        return null;
    }

    const localData = inData ?? data;
    const localColumns = inColumns ?? columns;
    const localTargetHtmlId = inTargetHtmlId ?? targetHtmlId;

    // Default to renderer
    const spec = renderer({
        inColumns: localColumns,
        inData: localData
    });

    if (localTargetHtmlId && typeof document !== "undefined") {
        const container = document.getElementById(localTargetHtmlId);
        if (container) {
            container.innerHTML = "";
            const dom = buildDomNode(spec);
            if (dom) {
                container.appendChild(dom);
            }
        }
    }

    return spec;
};

registerGlobal(render);

export { render, buildDomNode };
export default render;

