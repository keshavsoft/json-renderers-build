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

    renderTableHead({ inColumns, inTagJson: table });
    renderTableBody({ inColumns, inData, inTagJson: table });

    return table;
};

export { renderTableHead, renderTableBody };
export default renderTable;
