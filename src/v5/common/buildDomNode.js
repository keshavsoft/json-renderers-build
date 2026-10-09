const buildDomNode = (nodeSpec) => {
    if (!nodeSpec || typeof nodeSpec !== "object") return null;

    if (nodeSpec.tagName) {
        const el = document.createElement(nodeSpec.tagName);
        if (nodeSpec.attributes) {
            for (const [k, v] of Object.entries(nodeSpec.attributes)) {
                if (v !== undefined && v !== null) {
                    el.setAttribute(k, v);
                }
            }
        }
        if (nodeSpec.textContent != null) {
            el.textContent = nodeSpec.textContent;
        }
        if (Array.isArray(nodeSpec.children)) {
            nodeSpec.children.forEach((child) => {
                const childEl = buildDomNode(child);
                if (childEl) el.appendChild(childEl);
            });
        }
        return el;
    }

    if (Array.isArray(nodeSpec.children)) {
        const frag = document.createDocumentFragment();
        nodeSpec.children.forEach((child) => {
            const childEl = buildDomNode(child);
            if (childEl) frag.appendChild(childEl);
        });
        return frag;
    }

    return null;
};

export { buildDomNode };
export default buildDomNode;
