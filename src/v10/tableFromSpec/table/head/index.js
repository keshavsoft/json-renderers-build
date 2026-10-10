import buildHeadRow from "./row/index.js";
import findKey from "../findKey.js";

const renderTableHead = ({ inColumns = [], inTagJson } = {}) => {
    const headRow = findKey(inTagJson, "children[0].children[0].children");
    const row = buildHeadRow({ inColumns });

    headRow.children = row;
};

export default renderTableHead;
