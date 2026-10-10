import jsonToSpec from "json-to-spec";

import skeletonJson from './skeleton.json' with { type: 'json' };

// --- Story of Table Render ---
const startFunc = ({
    targetHtmlId,
    inTargetHtmlId,
    inColumns,
    inData,
} = {}) => {
    const localTargetHtmlId = inTargetHtmlId ?? targetHtmlId;
    const localData = inData ?? [];
    const localColumns = inColumns;

    let specAsJsonToDom = jsonToSpec(skeletonJson.default, {
        columns: localColumns, data: localData
    });

    return specAsJsonToDom;
};

export default startFunc;
