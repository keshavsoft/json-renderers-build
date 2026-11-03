import definitions from "../definitions.json" with { type: "json" };

const render = ({ inOptions = {}, options = {} } = {}) => {
    const opts = Object.keys(inOptions || {}).length > 0 ? inOptions : options;
    const config = structuredClone(definitions.searchInput.base);

    const label = opts.label ?? "Search:";
    const placeholder = opts.placeholder ?? "Search...";
    const id = opts.id ?? "searchInputId";
    const className = opts.class ?? "form-control";

    config.children[0].textContent = label;
    config.children[0].attributes.for = id;
    config.children[1].attributes.placeholder = placeholder;
    config.children[1].attributes.id = id;
    config.children[1].attributes.class = className;

    return config;
};

export default render;
