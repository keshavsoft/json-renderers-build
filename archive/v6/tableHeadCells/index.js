import jsonTransform from "@keshavsoft/json-transformer";

import skeletonJson from './skeleton.json' with { type: 'json' };

// --- Story of Table Render ---
const startFunc = ({
    inData,
} = {}) => {
    const localData = inData ?? [];

    let thAsArray = jsonTransform({
        children: localData
    }, skeletonJson);
    // console.log("specAsJsonToDom: ", specAsJsonToDom);

    return thAsArray?.children;
};

export default startFunc;
