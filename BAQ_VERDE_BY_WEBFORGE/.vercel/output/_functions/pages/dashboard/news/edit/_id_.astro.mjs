import {
    e as createComponent,
    f as createAstro,
    k as renderComponent,
    r as renderTemplate,
    m as maybeRenderHead,
    h as addAttribute,
    l as renderScript,
} from "../../../../chunks/astro/server_Dm-8eCho.mjs";
import "kleur/colors";
import { $ as $$DashboardLayout } from "../../../../chunks/DashboardLayout_B7ceeHST.mjs";
import { a as api } from "../../../../chunks/api_Cg62BYL_.mjs";
/* empty css                                         */
export { renderers } from "../../../../renderers.mjs";

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(
    async ($$result, $$props, $$slots) => {
        const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
        Astro2.self = $$id;
        const { id } = Astro2.params;
        const cookieStore = Astro2.cookies;
        const sessionToken = cookieStore.get("token")?.value;
        if (!sessionToken) {
            return Astro2.redirect("/login");
        }
        let noticia;
        try {
            const res = await api(`/news/${id}`, sessionToken);
            noticia = res;
        } catch (error) {
            console.error("Error al cargar la noticia:", error);
            return Astro2.redirect("/dashboard/news?error=noticia_no_encontrada");
        }
        return renderTemplate`${renderComponent(
            $$result,
            "Layout",
            $$DashboardLayout,
            { title: "Editar Noticia", "data-astro-cid-adzo4iv4": true },
            {
                default: async (
                    $$result2
                ) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-adzo4iv4> <!-- Header Section --> <div class="dashboard-header" data-astro-cid-adzo4iv4> <div class="header-content" data-astro-cid-adzo4iv4> <div class="title-section" data-astro-cid-adzo4iv4> <h1 class="dashboard-title" data-astro-cid-adzo4iv4>✏️ Editar Noticia</h1> <p class="dashboard-subtitle" data-astro-cid-adzo4iv4>Modifica los datos de la publicación seleccionada</p> </div> <div class="header-actions" data-astro-cid-adzo4iv4> <a href="/dashboard/news" class="btn-back" data-astro-cid-adzo4iv4> <span class="btn-icon" data-astro-cid-adzo4iv4>⬅️</span>
Volver al Panel
</a> </div> </div> </div> <!-- Form Section --> <div class="form-container" data-astro-cid-adzo4iv4> <div class="form-header" data-astro-cid-adzo4iv4> <h2 class="form-title" data-astro-cid-adzo4iv4>Información de la Noticia</h2> <p class="form-subtitle" data-astro-cid-adzo4iv4>Actualiza los campos según sea necesario</p> </div> <form class="news-form" id="edit-form" enctype="multipart/form-data" data-astro-cid-adzo4iv4> <input type="hidden" id="noticia-id"${addAttribute(noticia._id, "value")} data-astro-cid-adzo4iv4> <div class="form-grid" data-astro-cid-adzo4iv4> <!-- Título --> <div class="form-group full-width" data-astro-cid-adzo4iv4> <label for="title" class="form-label" data-astro-cid-adzo4iv4> <span class="label-icon" data-astro-cid-adzo4iv4>📝</span>
Título de la Noticia
</label> <input type="text" id="title" name="title" class="form-input"${addAttribute(noticia.title, "value")} placeholder="Ingresa el título de la noticia..." required data-astro-cid-adzo4iv4> </div> <!-- Categoría --> <div class="form-group" data-astro-cid-adzo4iv4> <label for="category" class="form-label" data-astro-cid-adzo4iv4> <span class="label-icon" data-astro-cid-adzo4iv4>🏷️</span>
Categoría
</label> <div class="select-wrapper" data-astro-cid-adzo4iv4> <select id="category" name="category" class="form-select" required data-astro-cid-adzo4iv4> <option value="" data-astro-cid-adzo4iv4>Selecciona una categoría</option> <option value="Alertas"${addAttribute(noticia.category === "Alertas", "selected")} data-astro-cid-adzo4iv4>🚨 Alertas</option> <option value="Comunicados"${addAttribute(noticia.category === "Comunicados", "selected")} data-astro-cid-adzo4iv4>📢 Comunicados</option> </select> </div> </div> <!-- Imagen Actual --> ${
                    noticia.img_url &&
                    renderTemplate`<div class="form-group" data-astro-cid-adzo4iv4> <label class="form-label" data-astro-cid-adzo4iv4> <span class="label-icon" data-astro-cid-adzo4iv4>🖼️</span>
Imagen Actual
</label> <div class="current-image-preview" data-astro-cid-adzo4iv4> <img${addAttribute(`${"http://localhost:8000"}${noticia.img_url}`, "src")} alt="Imagen actual" class="preview-img-tag" data-astro-cid-adzo4iv4> </div> </div>`
                } <!-- Nueva Imagen (opcional) --> <div class="form-group" data-astro-cid-adzo4iv4> <label for="image" class="form-label" data-astro-cid-adzo4iv4> <span class="label-icon" data-astro-cid-adzo4iv4>📁</span>
Cambiar Imagen (opcional)
</label> <div class="file-upload-wrapper" data-astro-cid-adzo4iv4> <input type="file" id="image" name="image" class="file-input" accept="image/*" data-astro-cid-adzo4iv4> <label for="image" class="file-upload-label" data-astro-cid-adzo4iv4> <span class="upload-icon" data-astro-cid-adzo4iv4>📁</span> <span class="upload-text" data-astro-cid-adzo4iv4>Seleccionar nueva imagen</span> </label> </div> <!-- Preview de la imagen seleccionada --> <div id="image-preview" class="selected-image-preview" style="display: none; margin-top: 1rem;" data-astro-cid-adzo4iv4> <label data-astro-cid-adzo4iv4>Nueva imagen seleccionada:</label><br data-astro-cid-adzo4iv4> <img id="preview-img-tag" src="" alt="Vista previa" class="preview-img-tag" data-astro-cid-adzo4iv4> </div> </div> <!-- Contenido --> <div class="form-group full-width" data-astro-cid-adzo4iv4> <label for="content" class="form-label" data-astro-cid-adzo4iv4> <span class="label-icon" data-astro-cid-adzo4iv4>📄</span>
Contenido de la Noticia
</label> <textarea id="content" name="content" rows="8" class="form-textarea" placeholder="Escribe el contenido completo de la noticia..." required data-astro-cid-adzo4iv4>${noticia.content}</textarea> </div> </div> <!-- Form Actions --> <div class="form-actions" data-astro-cid-adzo4iv4> <button type="submit" class="btn-submit" data-astro-cid-adzo4iv4> <span class="btn-icon" data-astro-cid-adzo4iv4>💾</span>
Guardar Cambios
</button> <a href="/dashboard/news" class="btn-cancel" data-astro-cid-adzo4iv4> <span class="btn-icon" data-astro-cid-adzo4iv4>❌</span>
Cancelar
</a> </div> </form> </div> </div>  ${renderScript($$result2, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/news/edit/[id].astro?astro&type=script&index=0&lang.ts")} `,
            }
        )}`;
    },
    "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/news/edit/[id].astro",
    void 0
);
const $$file =
    "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/news/edit/[id].astro";
const $$url = "/dashboard/news/edit/[id]";

const _page = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
        {
            __proto__: null,
            default: $$id,
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
