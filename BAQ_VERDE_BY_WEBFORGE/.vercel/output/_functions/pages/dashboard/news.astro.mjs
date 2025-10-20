import {
    e as createComponent,
    f as createAstro,
    k as renderComponent,
    r as renderTemplate,
    m as maybeRenderHead,
    l as renderScript,
    h as addAttribute,
} from "../../chunks/astro/server_Dm-8eCho.mjs";
import "kleur/colors";
import { $ as $$DashboardLayout } from "../../chunks/DashboardLayout_B7ceeHST.mjs";
import { a as api } from "../../chunks/api_Cg62BYL_.mjs";
/* empty css                                    */
export { renderers } from "../../renderers.mjs";

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(
    async ($$result, $$props, $$slots) => {
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
        const data = await api("/news/?category=Alertas", sessionToken);
        const data2 = await api("/news/?category=Comunicados", sessionToken);
        const noticiasRes = [...data, ...data2];
        const noticias = noticiasRes;
        return renderTemplate`${renderComponent(
            $$result,
            "Layout",
            $$DashboardLayout,
            { title: "Gestión de Noticias", "data-astro-cid-qesghrpq": true },
            {
                default: async (
                    $$result2
                ) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-qesghrpq> <!-- Header Section --> <div class="dashboard-header" data-astro-cid-qesghrpq> <div class="header-content" data-astro-cid-qesghrpq> <div class="title-section" data-astro-cid-qesghrpq> <h1 class="dashboard-title" data-astro-cid-qesghrpq>Gestión de Noticias</h1> <p class="dashboard-subtitle" data-astro-cid-qesghrpq>Administra las publicaciones, artículos y comunicados del observatorio</p> </div> <a href="/dashboard/news/create" class="btn-create" data-astro-cid-qesghrpq> <span class="btn-icon" data-astro-cid-qesghrpq>+</span>
Crear Noticia
</a> </div> </div> <!-- Stats Cards --> <div class="stats-grid" data-astro-cid-qesghrpq> <div class="stat-card" data-astro-cid-qesghrpq> <div class="stat-number" data-astro-cid-qesghrpq>${noticias.length}</div> <div class="stat-label" data-astro-cid-qesghrpq>Total de Noticias</div> </div> <div class="stat-card" data-astro-cid-qesghrpq> <div class="stat-number" data-astro-cid-qesghrpq>${data.length}</div> <div class="stat-label" data-astro-cid-qesghrpq>Alertas</div> </div> <div class="stat-card" data-astro-cid-qesghrpq> <div class="stat-number" data-astro-cid-qesghrpq>${data2.length}</div> <div class="stat-label" data-astro-cid-qesghrpq>Comunicados</div> </div> </div> <!-- News Grid --> <div class="content-section" data-astro-cid-qesghrpq> <h2 class="section-title" data-astro-cid-qesghrpq>Todas las Noticias</h2> <div class="noticias-grid" data-astro-cid-qesghrpq> ${noticias.map(
                    (
                        noticia
                    ) => renderTemplate`<div class="news-card" data-astro-cid-qesghrpq> <div class="news-image-container" data-astro-cid-qesghrpq> <img${addAttribute(`${"http://localhost:8000"}${noticia.img_url}`, "src")} alt="Imagen de la noticia" class="news-image" data-astro-cid-qesghrpq> <div class="category-badge" data-astro-cid-qesghrpq>${noticia.category}</div> </div> <div class="news-content" data-astro-cid-qesghrpq> <h3 class="news-title" data-astro-cid-qesghrpq>${noticia.title}</h3> <div class="news-actions" data-astro-cid-qesghrpq> <a${addAttribute(`/dashboard/news/edit/${noticia._id}`, "href")} class="btn-edit" data-astro-cid-qesghrpq> <span class="btn-icon" data-astro-cid-qesghrpq>✏️</span>
Editar
</a> <button class="btn-delete"${addAttribute(noticia._id, "data-id")} data-astro-cid-qesghrpq> <span class="btn-icon" data-astro-cid-qesghrpq>🗑️</span>
Eliminar
</button> </div> </div> </div>`
                )} </div> </div> </div>  ${renderScript($$result2, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/news/index.astro?astro&type=script&index=0&lang.ts")} `,
            }
        )}`;
    },
    "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/news/index.astro",
    void 0
);
const $$file =
    "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/news/index.astro";
const $$url = "/dashboard/news";

const _page = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
        {
            __proto__: null,
            default: $$Index,
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
