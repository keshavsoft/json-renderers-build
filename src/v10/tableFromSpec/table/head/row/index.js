import buildHeadCell from "../cell/index.js";

const buildHeadRow = ({ inColumns = [] } = {}) => {
    const children = inColumns.map(column => buildHeadCell({ inColumn: column }));

    return children
};

export default buildHeadRow;
