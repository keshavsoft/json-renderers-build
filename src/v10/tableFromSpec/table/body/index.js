import buildBodyRow from "./row/index.js";
import findKey from "../findKey.js";

const renderTableBody = ({ inData = [], inColumns = [], inTagJson } = {}) => {
    const bodyRow = findKey(inTagJson, "children[0].children[1].children");

    const children = inData.map(row => buildBodyRow({
        inRow: row,
        inColumns
    }));

    bodyRow.children = children;

    return inTagJson;
};

export default renderTableBody;
