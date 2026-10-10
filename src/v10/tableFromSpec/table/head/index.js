import jsonTransformer from "@keshavsoft/json-transformer";
import spec from "./spec.json" with { type: "json" };

const renderTableHead = ({ inColumns = [] } = {}) => {
    const input = inColumns.map(element => {
        return {
            columnName: element
        };
    });

    const row = jsonTransformer({ Rows: input }, spec);

    return row?.Rows;
};

export default renderTableHead;
