import {
    e as createComponent,
    f as createAstro,
    k as renderComponent,
    r as renderTemplate,
    m as maybeRenderHead,
    h as addAttribute,
} from "../../../chunks/astro/server_Dm-8eCho.mjs";
import "kleur/colors";
import { $ as $$DashboardLayout } from "../../../chunks/DashboardLayout_B7ceeHST.mjs";
import { a as api } from "../../../chunks/api_Cg62BYL_.mjs";
/* empty css                                        */
export { renderers } from "../../../renderers.mjs";

const $$Astro = createAstro();
const prerender = false;
const $$Create = createComponent(
    async ($$result, $$props, $$slots) => {
        const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
        Astro2.self = $$Create;
        const cookieStore = Astro2.cookies;
        const sessionToken = cookieStore.get("token")?.value;
        if (!sessionToken) {
            return Astro2.redirect("/login");
        }
        if (Astro2.url.searchParams.get("logout") === "true") {
            Astro2.cookies.delete("token", { path: "/" });
            return Astro2.redirect("/login");
        }
        let error = null;
        let success = null;
        if (Astro2.request.method === "POST") {
            const formData = await Astro2.request.formData();
            const name = formData.get("name")?.toString().trim();
            const lat = formData.get("lat")?.toString();
            const lon = formData.get("lon")?.toString();
            const chartsSelected = [];
            const allCharts = ["PM10", "PM2.5", "CO", "O3", "SO2", "ICA"];
            for (const chart of allCharts) {
                if (formData.get(`chart_${chart}`)) {
                    chartsSelected.push(chart);
                }
            }
            if (!name || !lat || !lon) {
                error = "Nombre, latitud y longitud son requeridos";
            } else if (chartsSelected.length === 0) {
                error = "Debes seleccionar al menos un gr\xE1fico permitido";
            } else {
                const payload = {
                    name,
                    lat: parseInt(lat),
                    lon: parseInt(lon),
                    charts_permited: chartsSelected,
                };
                const res = await api("/stations", sessionToken, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
                if (res) {
                    success = "Estaci\xF3n creada con \xE9xito";
                    return Astro2.redirect("/dashboard/stations?success=true");
                } else {
                    error = "Error al crear la estaci\xF3n. Revisa los datos e intenta de nuevo.";
                }
            }
        }
        return renderTemplate`${renderComponent(
            $$result,
            "Layout",
            $$DashboardLayout,
            { title: "Crear Estaci\xF3n", "data-astro-cid-w56ikepc": true },
            {
                default: async (
                    $$result2
                ) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-w56ikepc> <!-- Header Section --> <div class="dashboard-header" data-astro-cid-w56ikepc> <div class="header-content" data-astro-cid-w56ikepc> <div class="title-section" data-astro-cid-w56ikepc> <h1 class="dashboard-title" data-astro-cid-w56ikepc>📡 Crear Nueva Estación</h1> <p class="dashboard-subtitle" data-astro-cid-w56ikepc>Registra una nueva estación de monitoreo ambiental</p> </div> <div class="header-actions" data-astro-cid-w56ikepc> <a href="/dashboard/stations" class="btn-back" data-astro-cid-w56ikepc> <span class="btn-icon" data-astro-cid-w56ikepc>⬅️</span>
Volver al Panel
</a> </div> </div> </div> <!-- Alert Messages --> ${error && renderTemplate`<div class="alert alert-error" data-astro-cid-w56ikepc> <div class="alert-icon" data-astro-cid-w56ikepc>⚠️</div> <div class="alert-content" data-astro-cid-w56ikepc> <strong data-astro-cid-w56ikepc>Error:</strong> ${error} </div> </div>`} ${success && renderTemplate`<div class="alert alert-success" data-astro-cid-w56ikepc> <div class="alert-icon" data-astro-cid-w56ikepc>✅</div> <div class="alert-content" data-astro-cid-w56ikepc> <strong data-astro-cid-w56ikepc>Éxito:</strong> ${success} </div> </div>`} <!-- Form Section --> <div class="form-container" data-astro-cid-w56ikepc> <div class="form-header" data-astro-cid-w56ikepc> <h2 class="form-title" data-astro-cid-w56ikepc>Información de la Estación</h2> <p class="form-subtitle" data-astro-cid-w56ikepc>Completa todos los campos obligatorios para registrar la estación</p> </div> <form method="post" class="news-form" data-astro-cid-w56ikepc> <div class="form-grid" data-astro-cid-w56ikepc> <!-- Nombre --> <div class="form-group full-width" data-astro-cid-w56ikepc> <label for="name" class="form-label" data-astro-cid-w56ikepc> <span class="label-icon" data-astro-cid-w56ikepc>📍</span>
Nombre de la Estación *
</label> <input type="text" id="name" name="name" class="form-input" placeholder="Ej: Estación Norte" required data-astro-cid-w56ikepc> </div> <!-- Latitud y Longitud --> <div class="form-group" data-astro-cid-w56ikepc> <label for="lat" class="form-label" data-astro-cid-w56ikepc> <span class="label-icon" data-astro-cid-w56ikepc>🧭</span>
Latitud * (-90 a 90)
</label> <input type="number" id="lat" name="lat" class="form-input" min="-90" max="90" step="1" placeholder="Ej: 4" required data-astro-cid-w56ikepc> </div> <div class="form-group" data-astro-cid-w56ikepc> <label for="lon" class="form-label" data-astro-cid-w56ikepc> <span class="label-icon" data-astro-cid-w56ikepc>🧭</span>
Longitud * (-180 a 180)
</label> <input type="number" id="lon" name="lon" class="form-input" min="-180" max="180" step="1" placeholder="Ej: -74" required data-astro-cid-w56ikepc> </div> <!-- Gráficos Permitidos --> <div class="form-group full-width" data-astro-cid-w56ikepc> <label class="form-label" data-astro-cid-w56ikepc> <span class="label-icon" data-astro-cid-w56ikepc>📊</span>
Gráficos Permitidos * (Selecciona al menos uno)
</label> <div class="checkbox-group" data-astro-cid-w56ikepc> ${["PM10", "PM2.5", "CO", "O3", "SO2", "ICA"].map((chart) => renderTemplate`<label class="checkbox-item" data-astro-cid-w56ikepc> <input type="checkbox"${addAttribute(`chart_${chart}`, "name")}${addAttribute(chart, "value")} class="checkbox-input" data-astro-cid-w56ikepc> <span class="checkbox-label" data-astro-cid-w56ikepc>${chart}</span> </label>`)} </div> </div> </div> <!-- Form Actions --> <div class="form-actions" data-astro-cid-w56ikepc> <button type="submit" class="btn-submit" data-astro-cid-w56ikepc> <span class="btn-icon" data-astro-cid-w56ikepc>💾</span>
Crear Estación
</button> <a href="/dashboard/stations" class="btn-cancel" data-astro-cid-w56ikepc> <span class="btn-icon" data-astro-cid-w56ikepc>❌</span>
Cancelar
</a> </div> </form> </div> </div>  `,
            }
        )}`;
    },
    "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stations/create.astro",
    void 0
);

const $$file =
    "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stations/create.astro";
const $$url = "/dashboard/stations/create";

const _page = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
        {
            __proto__: null,
            default: $$Create,
            file: $$file,
            prerender,
            url: $$url,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);

const page = () => _page;

export { page };
