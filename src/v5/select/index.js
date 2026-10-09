import selectOptionsOnly from "../selectOptionsOnly/index.js";

import skeletonJson from './skeleton.json' with { type: 'json' };

// --- Story of Table Render ---
const startFunc = ({
    inData,
} = {}) => {
    const localData = inData ?? [];

    let localChildren = selectOptionsOnly({
        inData: localData
    });
    // console.log("specAsJsonToDom: ", specAsJsonToDom);
    skeletonJson.children = localChildren?.children;

    return skeletonJson;
};

export default startFunc;