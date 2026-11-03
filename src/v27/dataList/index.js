import { fromCollection } from "json-transformer-funcs";
import definitions from "../definitions.json" with { type: "json" };

const render = ({ inData = [], inColumns = [] } = {}) => {
    const config = definitions.dataList;
    return inColumns.map(columnConfig => {
        const columnName = columnConfig?.columnName || "";
        const dataList = structuredClone(config.base);
        dataList.attributes.id = columnName;
        dataList.attributes["data-name"] = columnName;

        const optionTemplate = {
            tagName: "option",
            textContent: `\${${columnName}}`,
            attributes: { value: `\${${columnName}}` }
        };

        dataList.children = fromCollection(inData, optionTemplate);
        return dataList;
    });
};

export default render;
