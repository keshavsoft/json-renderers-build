import { fromCollection } from "json-transformer-funcs";
import definitions from "../definitions.json" with { type: "json" };

const render = ({ inData = [], inColumns = [] } = {}) => {
    const config = definitions.select;
    return inColumns.map(columnConfig => {
        const columnName = columnConfig?.columnName || "";
        const select = structuredClone(config.base);
        select.attributes.id = columnName;
        select.attributes["data-name"] = columnName;

        const optionTemplate = {
            tagName: "option",
            textContent: `\${${columnName}}`,
            attributes: { value: `\${${columnName}}` }
        };

        select.children = fromCollection(inData, optionTemplate);
        return select;
    });
};

export default render;
