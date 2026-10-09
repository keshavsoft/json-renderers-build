import jsonToSpec from "json-to-spec";

import skeletonJson from "./skeleton.json" with { type: "json" };

const DEFAULT_ICONS = {
    dashboard: "bi bi-house-door",
    orders: "bi bi-file-earmark",
    products: "bi bi-cart",
    customers: "bi bi-people",
    reports: "bi bi-graph-up",
    integrations: "bi bi-puzzle",
    settings: "bi bi-gear"
};

// --- Story of Sidebar Render ---
const startFunc = ({
    inData,
    data
} = {}) => {
    const rawData = inData ?? data ?? [];

    const localData = rawData.map((item, index) => {
        const name = typeof item === "string" ? item : (item?.name ?? "");
        const href = (typeof item === "object" && item?.href) ? item.href : "#";
        const icon = (typeof item === "object" && item?.icon)
            ? item.icon
            : (DEFAULT_ICONS[name.toLowerCase()] || "bi bi-circle");
        const isActive = (typeof item === "object" && item?.active !== undefined)
            ? item.active
            : (index === 0);
        const linkClass = (typeof item === "object" && item?.class)
            ? item.class
            : `nav-link d-flex align-items-center gap-2${isActive ? " active" : ""}`;

        return {
            name,
            href,
            icon,
            class: linkClass
        };
    });

    let specAsJsonToDom = jsonToSpec(skeletonJson.default, {
        data: localData
    });

    return specAsJsonToDom;
};

export default startFunc;
