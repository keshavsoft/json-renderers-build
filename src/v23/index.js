import registerGlobal from "./register/index.js";
import { guardSpec } from "json-renderers-guard";

import renderTable from "./table/index.js";
import renderSelect from "./select/index.js";
import renderSelectOptions from "./selectOptionsOnly/index.js";
import renderDataList from "./dataList/index.js";
import renderSearchInput from "./searchInput/index.js";
import renderForm from "./form/index.js";

const RENDERER_MAP = {
    table: renderTable,
    tableFromSpec: renderTable,
    select: renderSelect,
    selectOptionsOnly: renderSelectOptions,
    dataList: renderDataList,
    datalist: renderDataList,
    searchInput: renderSearchInput,
    search: renderSearchInput,
    inputRow: renderSearchInput,
    form: renderForm
};

// Main build renderer: Public API accepting clean single options object (no targetHtmlId)
const render = (options = {}) => {
    guardSpec(options);
    const showLog = options?.showLog;

    const localType = options.type;
    
    let localMainType = localType;
    let localSubType = localType;

    if (localType.includes(".")) {
        const localArray = localType.split(".");
        localMainType = localArray[0];
        localSubType = localArray[1];
    };

    // 2. Select the renderer
    const renderer = RENDERER_MAP[localMainType];
    if (!renderer) {
        throw new Error(`Renderer for type "${localMainType}" not found.`);
    }

    // 3. Build and return the component spec
    const createdRenderer = renderer({
        inType: localSubType,
        inColumns: config.columns,
        inData: config.data,
        inOptions: config.options,
        options: config.options
    });

    if (showLog) console.log("json-renderers-build output:", createdRenderer);

    return createdRenderer;
};

registerGlobal(render);

export {
    render
};

export default render;
