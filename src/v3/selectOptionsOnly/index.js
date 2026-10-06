import jsonToSpec from "json-to-spec";

import skeletonJson from './skeleton.json' with { type: 'json' };

// --- Story of Table Render ---
const startFunc = ({
    inData,
} = {}) => {
    const localData = inData ?? [];

    let specAsJsonToDom = jsonToSpec(skeletonJson, {
        arrayOfStrings: localData
    });

    return specAsJsonToDom;
};

export default startFunc;
