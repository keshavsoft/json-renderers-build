import buildHeadRow from "./row/index.js";

const findKey = (structure, key) => {
    const findkey = key;

    const result = findkey
        .split(".")
        .reduce((obj, key) => {
            return key.split("[").reduce((value, part) => {
                return part.endsWith("]")
                    ? value[part.slice(0, -1)]
                    : value[part];
            }, obj);
        }, structure);

    return result;
};

const renderTableHead = ({ inColumns = [], inTagJson } = {}) => {
    console.log("inTagJson : ", inTagJson);

    const headRow = findKey(inTagJson, "children[0].children[0].children");

    headRow.children = buildHeadRow({ inColumns });

    return inTagJson;
};

export default renderTableHead;
