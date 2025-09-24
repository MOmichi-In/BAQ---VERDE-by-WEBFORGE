import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript, h as addAttribute } from '../../chunks/astro/server_Dm-8eCho.mjs';
import 'kleur/colors';
import { $ as $$DashboardLayout } from '../../chunks/DashboardLayout_B7ceeHST.mjs';
import { a as api } from '../../chunks/api_Cg62BYL_.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const cookieStore = Astro2.cookies;
  const sessionToken = cookieStore.get("token")?.value;
  if (!sessionToken) {
    return Astro2.redirect("/login");
  }
  if (Astro2.url.searchParams.get("logout") === "true") {
    Astro2.cookies.delete("token", { path: "/" });
    return Astro2.redirect("/login");
  }
  const data = await api("/stations", sessionToken);
  const stations = data || [];
  return renderTemplate`${renderComponent($$result, "Layout", $$DashboardLayout, { "title": "Gesti\xF3n de Estaciones", "data-astro-cid-oh7adjex": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-oh7adjex> <!-- Header Section --> <div class="dashboard-header" data-astro-cid-oh7adjex> <div class="header-content" data-astro-cid-oh7adjex> <div class="title-section" data-astro-cid-oh7adjex> <h1 class="dashboard-title" data-astro-cid-oh7adjex>📡 Gestión de Estaciones</h1> <p class="dashboard-subtitle" data-astro-cid-oh7adjex>Administra las estaciones de monitoreo ambiental</p> </div> <div class="header-actions" data-astro-cid-oh7adjex> <a href="/dashboard/stations/create" class="btn-primary" data-astro-cid-oh7adjex> <span class="btn-icon" data-astro-cid-oh7adjex>➕</span>
Crear Estación
</a> </div> </div> </div> <!-- Empty State --> ${stations.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-oh7adjex> <div class="empty-icon" data-astro-cid-oh7adjex>📭</div> <h3 class="empty-title" data-astro-cid-oh7adjex>No hay estaciones registradas</h3> <p class="empty-text" data-astro-cid-oh7adjex>Crea tu primera estación de monitoreo ambiental para comenzar a recopilar datos.</p> <a href="/dashboard/stations/create" class="btn-primary empty-btn" data-astro-cid-oh7adjex> <span class="btn-icon" data-astro-cid-oh7adjex>➕</span>
Crear Primera Estación
</a> </div>` : renderTemplate`<!-- Stations Grid -->
      <div class="stations-grid" data-astro-cid-oh7adjex> ${stations.map((station) => renderTemplate`<div class="station-card" data-astro-cid-oh7adjex> <div class="station-header" data-astro-cid-oh7adjex> <h3 class="station-title" data-astro-cid-oh7adjex>📍 ${station.name}</h3> </div> <div class="station-body" data-astro-cid-oh7adjex> <div class="station-coordinates" data-astro-cid-oh7adjex> <p data-astro-cid-oh7adjex><strong data-astro-cid-oh7adjex>Latitud:</strong> <span class="coord-value" data-astro-cid-oh7adjex>${station.lat}°</span></p> <p data-astro-cid-oh7adjex><strong data-astro-cid-oh7adjex>Longitud:</strong> <span class="coord-value" data-astro-cid-oh7adjex>${station.lon}°</span></p> </div> <div class="station-charts" data-astro-cid-oh7adjex> <h4 class="charts-title" data-astro-cid-oh7adjex>📊 Gráficos permitidos:</h4> <ul class="charts-list" data-astro-cid-oh7adjex> ${station.charts_permited.map((chart) => renderTemplate`<li class="chart-item" data-astro-cid-oh7adjex>${chart}</li>`)} </ul> </div> </div> <div class="station-actions" data-astro-cid-oh7adjex> <a${addAttribute(`/dashboard/stations/edit/${station._id}`, "href")} class="btn-edit" data-astro-cid-oh7adjex> <span class="btn-icon" data-astro-cid-oh7adjex>✏️</span>
Editar
</a> <button class="btn-delete"${addAttribute(station._id, "data-id")} data-astro-cid-oh7adjex> <span class="btn-icon" data-astro-cid-oh7adjex>🗑️</span>
Eliminar
</button> </div> </div>`)} </div>`} </div>  ${renderScript($$result2, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stations/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stations/index.astro", void 0);

const $$file = "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stations/index.astro";
const $$url = "/dashboard/stations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
