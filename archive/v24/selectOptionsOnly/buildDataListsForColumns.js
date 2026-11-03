import makeDataListForColumn from "./makeDataListForColumn.js";

const buildDataListsForColumns = ({ data, columns }) =>
    columns.map((columnConfig) => makeDataListForColumn(data, columnConfig));

export default buildDataListsForColumns;
