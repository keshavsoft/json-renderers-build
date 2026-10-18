import meta from "./meta.js";

export const registerGlobal = (render) => {
    if (!render) return;

    globalThis.ks ??= {};

    globalThis.ks.jsonRenderersBuild = {
        meta,
        render
    };
};

export default registerGlobal;
