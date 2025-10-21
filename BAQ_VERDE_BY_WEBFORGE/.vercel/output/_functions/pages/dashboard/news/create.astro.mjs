import {
    e as createComponent,
    f as createAstro,
    k as renderComponent,
    r as renderTemplate,
    m as maybeRenderHead,
    l as renderScript,
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
            const title = formData.get("title")?.toString();
            const category = formData.get("category")?.toString();
            const content = formData.get("content")?.toString();
            const imageFile = formData.get("image");
            if (!title || !category || !content) {
                error = "Todos los campos son requeridos";
            } else {
                let img_url = null;
                if (imageFile && imageFile.size > 0) {
                    const arrayBuffer = await imageFile.arrayBuffer();
                    const base64 = Buffer.from(arrayBuffer).toString("base64");
                    imageFile.type;
                    img_url = `data:${imageFile.type};base64,${base64}`;
                }
                console.log(img_url);
                const res = await api("/news/", sessionToken, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        title,
                        category,
                        content,
                        img_url,
                    }),
                });
                console.log(res);
                if (res) {
                    success = "Noticia creada con \xE9xito";
                    return Astro2.redirect("/dashboard/news");
                } else {
                    error = "Error al crear la noticia";
                }
            }
        }
        return renderTemplate`${renderComponent(
            $$result,
            "Layout",
            $$DashboardLayout,
            { title: "Crear Noticia", "data-astro-cid-ziwphuck": true },
            {
                default: async (
                    $$result2
                ) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-ziwphuck> <!-- Header Section --> <div class="dashboard-header" data-astro-cid-ziwphuck> <div class="header-content" data-astro-cid-ziwphuck> <div class="title-section" data-astro-cid-ziwphuck> <h1 class="dashboard-title" data-astro-cid-ziwphuck>Crear Nueva Noticia</h1> <p class="dashboard-subtitle" data-astro-cid-ziwphuck>Añade una nueva publicación al Observatorio Ambiental</p> </div> <div class="header-actions" data-astro-cid-ziwphuck> <a href="/dashboard/news" class="btn-back" data-astro-cid-ziwphuck> <span class="btn-icon" data-astro-cid-ziwphuck>⬅️</span>
Volver al Panel
</a> </div> </div> </div> <!-- Alert Messages --> ${error && renderTemplate`<div class="alert alert-error" data-astro-cid-ziwphuck> <div class="alert-icon" data-astro-cid-ziwphuck>⚠️</div> <div class="alert-content" data-astro-cid-ziwphuck> <strong data-astro-cid-ziwphuck>Error:</strong> ${error} </div> </div>`} ${success && renderTemplate`<div class="alert alert-success" data-astro-cid-ziwphuck> <div class="alert-icon" data-astro-cid-ziwphuck>✅</div> <div class="alert-content" data-astro-cid-ziwphuck> <strong data-astro-cid-ziwphuck>Éxito:</strong> ${success} </div> </div>`} <!-- Form Section --> <div class="form-container" data-astro-cid-ziwphuck> <div class="form-header" data-astro-cid-ziwphuck> <h2 class="form-title" data-astro-cid-ziwphuck>Información de la Noticia</h2> <p class="form-subtitle" data-astro-cid-ziwphuck>Completa todos los campos para crear la publicación</p> </div> <form method="post" class="news-form" enctype="multipart/form-data" data-astro-cid-ziwphuck> <div class="form-grid" data-astro-cid-ziwphuck> <!-- Título --> <div class="form-group full-width" data-astro-cid-ziwphuck> <label for="title" class="form-label" data-astro-cid-ziwphuck> <span class="label-icon" data-astro-cid-ziwphuck>📝</span>
Título de la Noticia
</label> <input type="text" id="title" name="title" class="form-input" placeholder="Ingresa el título de la noticia..." required data-astro-cid-ziwphuck> </div> <!-- Categoría --> <div class="form-group" data-astro-cid-ziwphuck> <label for="category" class="form-label" data-astro-cid-ziwphuck> <span class="label-icon" data-astro-cid-ziwphuck>🏷️</span>
Categoría
</label> <div class="select-wrapper" data-astro-cid-ziwphuck> <select id="category" name="category" class="form-select" required data-astro-cid-ziwphuck> <option value="" data-astro-cid-ziwphuck>Selecciona una categoría</option> <option value="Alertas" data-astro-cid-ziwphuck>🚨 Alertas</option> <option value="Comunicados" data-astro-cid-ziwphuck>📢 Comunicados</option> </select> </div> </div> <!-- Imagen --> <div class="form-group" data-astro-cid-ziwphuck> <label for="image" class="form-label" data-astro-cid-ziwphuck> <span class="label-icon" data-astro-cid-ziwphuck>🖼️</span>
Imagen Principal
</label> <div class="file-upload-wrapper" data-astro-cid-ziwphuck> <input type="file" id="image" name="image" class="file-input" accept="image/*" required data-astro-cid-ziwphuck> <label for="image" class="file-upload-label" data-astro-cid-ziwphuck> <span class="upload-icon" data-astro-cid-ziwphuck>📁</span> <span class="upload-text" data-astro-cid-ziwphuck>Seleccionar imagen</span> </label> </div> </div> <!-- Contenido --> <div class="form-group full-width" data-astro-cid-ziwphuck> <label for="content" class="form-label" data-astro-cid-ziwphuck> <span class="label-icon" data-astro-cid-ziwphuck>📄</span>
Contenido de la Noticia
</label> <textarea id="content" name="content" rows="8" class="form-textarea" placeholder="Escribe el contenido completo de la noticia..." required data-astro-cid-ziwphuck></textarea> </div> </div> <!-- Form Actions --> <div class="form-actions" data-astro-cid-ziwphuck> <button type="submit" class="btn-submit" data-astro-cid-ziwphuck> <span class="btn-icon" data-astro-cid-ziwphuck>💾</span>
Guardar Noticia
</button> <a href="/dashboard/news" class="btn-cancel" data-astro-cid-ziwphuck> <span class="btn-icon" data-astro-cid-ziwphuck>❌</span>
Cancelar
</a> </div> </form> </div> </div>  ${renderScript($$result2, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/news/create.astro?astro&type=script&index=0&lang.ts")} `,
            }
        )}`;
    },
    "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/news/create.astro",
    void 0
);

const $$file =
    "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/news/create.astro";
const $$url = "/dashboard/news/create";

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
