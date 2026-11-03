import makeOptionsForColumn from "./makeOptionsForColumn.js";

const buildOptionsForColumns = ({ data, columns }) =>
    columns.map((columnConfig) => makeOptionsForColumn(data, columnConfig));

export default buildOptionsForColumns;
