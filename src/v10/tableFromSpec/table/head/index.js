import jsonTransformer from "@keshavsoft/json-transformer";
import findKey from "../findKey.js";
import spec from "./spec.json" with { type: "json" };

const renderTableHead = ({ inColumns = [], inTagJson } = {}) => {
    const headRow = findKey(inTagJson, "children[0].children[0]");

    const input = inColumns.map(element => {
        return {
            columnName: element
        };
    });

    const row = jsonTransformer({ Rows: input }, spec);

    headRow.children = row?.Rows;
};

export default renderTableHead;
