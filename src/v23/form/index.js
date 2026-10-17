import renderForm, { renderField } from "json-renderers-build-form";
import renderDataList from "../dataList/index.js";

const DATALIST_INPUT_TYPES = new Set([
    "text", "email", "number", "tel", "url", "search",
    "date", "datetime-local", "time", "month", "week"
]);

const slugify = value => String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "field";

const findById = (node, id) => {
    if (node?.attributes?.id === id) return node;
    for (const child of node?.children ?? []) {
        const found = findById(child, id);
        if (found) return found;
    }
};

const valuesForColumn = (data, columnName) => {
    const seen = new Set();
    return data.flatMap(row => {
        const rawValue = row?.[columnName];
        if (rawValue == null) return [];
        const value = String(rawValue).trim();
        const key = value.toLocaleLowerCase();
        if (!value || seen.has(key)) return [];
        seen.add(key);
        return [value];
    });
};

const connectDataLists = ({ formSpec, columns, data } = {}) => {
    const dataListSpecs = columns.flatMap((column, index) => {
        const type = column.type ?? "text";
        if (!column.dataListId || !DATALIST_INPUT_TYPES.has(type)) return [];

        const values = valuesForColumn(data, column.columnName);
        if (!values.length) return [];

        const id = column.id ?? `form-${index}-${slugify(column.columnName)}`;
        const input = findById(formSpec, id);
        if (!input) throw new Error(`Form input not found for datalist column "${column.columnName}"`);
        input.attributes.list = column.dataListId;

        const dataList = renderDataList({ inData: values });
        dataList.attributes = { id: column.dataListId };
        return [dataList];
    });

    const submitIndex = formSpec.children.findIndex(child =>
        child.tagName === "button" && child.attributes?.type === "submit"
    );
    formSpec.children.splice(submitIndex < 0 ? formSpec.children.length : submitIndex, 0, ...dataListSpecs);
    return formSpec;
};

const render = ({
    inColumns = [],
    inData = [],
    inOptions = {},
    columns,
    data,
    options
} = {}) => {
    const localColumns = inColumns && inColumns.length > 0 ? inColumns : (columns ?? []);
    const localData = inData && inData.length > 0 ? inData : (data ?? []);
    const localOptions = inOptions && Object.keys(inOptions).length > 0 ? inOptions : (options ?? {});

    const formData = localOptions.prefill === false ? [] : localData;
    const formSpec = renderForm({
        inColumns: localColumns,
        inData: formData,
        inOptions: localOptions
    });

    return connectDataLists({ formSpec, columns: localColumns, data: localData });
};

export { render, renderForm, renderField };
export default render;
