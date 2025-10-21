import { renderers } from "./renderers.mjs";
import {
    c as createExports,
    s as serverEntrypointModule,
} from "./chunks/_@astrojs-ssr-adapter_D7925otD.mjs";
import { manifest } from "./manifest_DEIzBYaP.mjs";

const serverIslandMap = new Map();

const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/dashboard/document/upload.astro.mjs");
const _page2 = () => import("./pages/dashboard/document.astro.mjs");
const _page3 = () => import("./pages/dashboard/news/create.astro.mjs");
const _page4 = () => import("./pages/dashboard/news/edit/_id_.astro.mjs");
const _page5 = () => import("./pages/dashboard/news.astro.mjs");
const _page6 = () => import("./pages/dashboard/stake/create.astro.mjs");
const _page7 = () => import("./pages/dashboard/stake/edit/_id_.astro.mjs");
const _page8 = () => import("./pages/dashboard/stake.astro.mjs");
const _page9 = () => import("./pages/dashboard/stations/create.astro.mjs");
const _page10 = () => import("./pages/dashboard/stations.astro.mjs");
const _page11 = () => import("./pages/dashboard.astro.mjs");
const _page12 = () => import("./pages/documents.astro.mjs");
const _page13 = () => import("./pages/login.astro.mjs");
const _page14 = () => import("./pages/maps.astro.mjs");
const _page15 = () => import("./pages/news/_id_.astro.mjs");
const _page16 = () => import("./pages/news.astro.mjs");
const _page17 = () => import("./pages/participation.astro.mjs");
const _page18 = () => import("./pages/index.astro.mjs");
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/dashboard/document/upload.astro", _page1],
    ["src/pages/dashboard/document/index.astro", _page2],
    ["src/pages/dashboard/news/create.astro", _page3],
    ["src/pages/dashboard/news/edit/[id].astro", _page4],
    ["src/pages/dashboard/news/index.astro", _page5],
    ["src/pages/dashboard/stake/create.astro", _page6],
    ["src/pages/dashboard/stake/edit/[id].astro", _page7],
    ["src/pages/dashboard/stake/index.astro", _page8],
    ["src/pages/dashboard/stations/create.astro", _page9],
    ["src/pages/dashboard/stations/index.astro", _page10],
    ["src/pages/dashboard/index.astro", _page11],
    ["src/pages/documents.astro", _page12],
    ["src/pages/login.astro", _page13],
    ["src/pages/maps.astro", _page14],
    ["src/pages/news/[id].astro", _page15],
    ["src/pages/news.astro", _page16],
    ["src/pages/participation.astro", _page17],
    ["src/pages/index.astro", _page18],
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import("./_noop-actions.mjs"),
    middleware: () => import("./_astro-internal_middleware.mjs"),
});
const _args = {
    middlewareSecret: "c324d62c-6aa9-43e3-b07c-c657e110ffeb",
    skewProtection: false,
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = "start";
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start));

export { __astrojsSsrVirtualEntry as default, pageMap };
