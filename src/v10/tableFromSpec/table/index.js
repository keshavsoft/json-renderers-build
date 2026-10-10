import tagJson from "./tag.json" with { type: "json" };
import renderTableHead from "./head/index.js";
import renderTableBody from "./body/index.js";
import renderTableFooter from "../footer/index.js";

const renderTable = ({
    inColumns = [],
    inData = [],
    inFooter = []
} = {}) => {
    const table = structuredClone(tagJson);

    const header = renderTableHead({ inColumns });
    const body = renderTableBody({ inColumns, inData });
    // console.log("header : ", header);

    table.children[0].children = [header];
    table.children[1] = body;

    return table;
};

export { renderTableHead, renderTableBody };
export default renderTable;
