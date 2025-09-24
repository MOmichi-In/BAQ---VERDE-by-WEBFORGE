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
  const data = await api("/news/?category=Participacion", sessionToken);
  const noticiasRes = data;
  const noticias = noticiasRes;
  return renderTemplate`${renderComponent($$result, "Layout", $$DashboardLayout, { "title": "Participación Ciudadana", "data-astro-cid-ji6rsa6m": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-ji6rsa6m> <!-- Header Section --> <div class="dashboard-header" data-astro-cid-ji6rsa6m> <div class="header-content" data-astro-cid-ji6rsa6m> <div class="title-section" data-astro-cid-ji6rsa6m> <h1 class="dashboard-title" data-astro-cid-ji6rsa6m>Participación Ciudadana</h1> <p class="dashboard-subtitle" data-astro-cid-ji6rsa6m>Supervisa reportes ciudadanos, comentarios y sugerencias</p> </div> <a href="/dashboard/stake/create" class="btn-create" data-astro-cid-ji6rsa6m> <span class="btn-icon" data-astro-cid-ji6rsa6m>+</span>
Crear Participación
</a> </div> </div> <!-- Stats Cards --> <div class="stats-grid" data-astro-cid-ji6rsa6m> <div class="stat-card" data-astro-cid-ji6rsa6m> <div class="stat-number" data-astro-cid-ji6rsa6m>${noticias.length}</div> <div class="stat-label" data-astro-cid-ji6rsa6m>Total de Participaciones</div> </div> <div class="stat-card" data-astro-cid-ji6rsa6m> <div class="stat-number" data-astro-cid-ji6rsa6m>${noticias.filter((n) => n.status === "active").length || noticias.length}</div> <div class="stat-label" data-astro-cid-ji6rsa6m>Participaciones Activas</div> </div> <div class="stat-card" data-astro-cid-ji6rsa6m> <div class="stat-number" data-astro-cid-ji6rsa6m>${(/* @__PURE__ */ new Date()).getMonth() + 1}</div> <div class="stat-label" data-astro-cid-ji6rsa6m>Mes Actual</div> </div> </div> <!-- Content Section --> <div class="content-section" data-astro-cid-ji6rsa6m> <h2 class="section-title" data-astro-cid-ji6rsa6m>Todas las Participaciones</h2> <div class="participaciones-grid" data-astro-cid-ji6rsa6m> ${noticias.map((noticia) => renderTemplate`<div class="participacion-card" data-astro-cid-ji6rsa6m> <div class="participacion-image-container" data-astro-cid-ji6rsa6m> <img${addAttribute(`${"http://localhost:8000"}${noticia.img_url}`, "src")} alt="Imagen de la participación ciudadana" class="participacion-image" data-astro-cid-ji6rsa6m> <div class="category-badge" data-astro-cid-ji6rsa6m>Participación</div> </div> <div class="participacion-content" data-astro-cid-ji6rsa6m> <h3 class="participacion-title" data-astro-cid-ji6rsa6m>${noticia.title}</h3> <div class="participacion-actions" data-astro-cid-ji6rsa6m> <a${addAttribute(`/dashboard/stake/edit/${noticia._id}`, "href")} class="btn-edit" data-astro-cid-ji6rsa6m> <span class="btn-icon" data-astro-cid-ji6rsa6m>✏️</span>
Editar
</a> <button class="btn-delete"${addAttribute(noticia._id, "data-id")} data-astro-cid-ji6rsa6m> <span class="btn-icon" data-astro-cid-ji6rsa6m>🗑️</span>
Eliminar
</button> </div> </div> </div>`)} ${noticias.length === 0 && renderTemplate`<div class="empty-state" data-astro-cid-ji6rsa6m> <div class="empty-icon" data-astro-cid-ji6rsa6m>🤝</div> <h3 class="empty-title" data-astro-cid-ji6rsa6m>No hay participaciones registradas</h3> <p class="empty-description" data-astro-cid-ji6rsa6m>Comienza creando la primera participación ciudadana</p> <a href="/dashboard/stake/create" class="btn-empty-action" data-astro-cid-ji6rsa6m> <span class="btn-icon" data-astro-cid-ji6rsa6m>+</span>
Crear Primera Participación
</a> </div>`} </div> </div> </div>  ${renderScript($$result2, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stake/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stake/index.astro", void 0);
const $$file = "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stake/index.astro";
const $$url = "/dashboard/stake";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
