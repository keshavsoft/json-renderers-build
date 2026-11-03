import { fromCollection } from "json-transformer-funcs";

const render = ({ inData = [], inColumns = [] } = {}) => {
    return inColumns.map(columnConfig => {
        const columnName = columnConfig?.columnName || "";
        const optionTemplate = {
            tagName: "option",
            textContent: `\${${columnName}}`,
            attributes: { value: `\${${columnName}}` }
        };

        return fromCollection(inData, optionTemplate);
    });
};

export default render;
