import jsonTransformer from "@keshavsoft/json-transformer";
import spec from "./spec.json" with { type: "json" };

const renderTableBody = ({ inColumns = [], inData } = {}) => {
    const columns = inColumns.map(element => {
        return {
            columnName: element
        };
    });

    const row = jsonTransformer({ columns, rows: inData }, spec);

    return row.rows;
};

export default renderTableBody;
