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
        let participacion;
        try {
            const res = await api(`/news/${id}`, sessionToken);
            participacion = res;
        } catch (error) {
            console.error("Error al cargar la participación:", error);
            return Astro2.redirect("/dashboard/stake?error=participacion_no_encontrada");
        }
        return renderTemplate`${renderComponent(
            $$result,
            "Layout",
            $$DashboardLayout,
            { title: "Editar Participación", "data-astro-cid-xuqton2o": true },
            {
                default: async (
                    $$result2
                ) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-xuqton2o> <!-- Header Section --> <div class="dashboard-header" data-astro-cid-xuqton2o> <div class="header-content" data-astro-cid-xuqton2o> <div class="title-section" data-astro-cid-xuqton2o> <h1 class="dashboard-title" data-astro-cid-xuqton2o>✏️ Editar Participación Ciudadana</h1> <p class="dashboard-subtitle" data-astro-cid-xuqton2o>Modifica los datos de la participación seleccionada</p> </div> <div class="header-actions" data-astro-cid-xuqton2o> <a href="/dashboard/stake" class="btn-back" data-astro-cid-xuqton2o> <span class="btn-icon" data-astro-cid-xuqton2o>⬅️</span>
Volver al Panel
</a> </div> </div> </div> <!-- Form Section --> <div class="form-container" data-astro-cid-xuqton2o> <div class="form-header" data-astro-cid-xuqton2o> <h2 class="form-title" data-astro-cid-xuqton2o>Información de la Participación</h2> <p class="form-subtitle" data-astro-cid-xuqton2o>Actualiza los campos según sea necesario</p> </div> <form class="news-form" id="edit-form" enctype="multipart/form-data" data-astro-cid-xuqton2o> <input type="hidden" id="participacion-id"${addAttribute(participacion._id, "value")} data-astro-cid-xuqton2o> <div class="form-grid" data-astro-cid-xuqton2o> <!-- Título --> <div class="form-group full-width" data-astro-cid-xuqton2o> <label for="title" class="form-label" data-astro-cid-xuqton2o> <span class="label-icon" data-astro-cid-xuqton2o>📝</span>
Título de la Participación
</label> <input type="text" id="title" name="title" class="form-input"${addAttribute(participacion.title, "value")} placeholder="Ingresa el título de la participación..." required data-astro-cid-xuqton2o> </div> <!-- Imagen Actual --> ${
                    participacion.img_url &&
                    renderTemplate`<div class="form-group" data-astro-cid-xuqton2o> <label class="form-label" data-astro-cid-xuqton2o> <span class="label-icon" data-astro-cid-xuqton2o>🖼️</span>
Imagen Actual
</label> <div class="current-image-preview" data-astro-cid-xuqton2o> <img${addAttribute(`${"http://localhost:8000"}${participacion.img_url}`, "src")} alt="Imagen actual" class="preview-img-tag" data-astro-cid-xuqton2o> </div> </div>`
                } <!-- Nueva Imagen (opcional) --> <div class="form-group" data-astro-cid-xuqton2o> <label for="image" class="form-label" data-astro-cid-xuqton2o> <span class="label-icon" data-astro-cid-xuqton2o>📁</span>
Cambiar Imagen (opcional)
</label> <div class="file-upload-wrapper" data-astro-cid-xuqton2o> <input type="file" id="image" name="image" class="file-input" accept="image/*" data-astro-cid-xuqton2o> <label for="image" class="file-upload-label" data-astro-cid-xuqton2o> <span class="upload-icon" data-astro-cid-xuqton2o>📁</span> <span class="upload-text" data-astro-cid-xuqton2o>Seleccionar nueva imagen</span> </label> </div> <!-- Preview de la imagen seleccionada --> <div id="image-preview" class="selected-image-preview" style="display: none; margin-top: 1rem;" data-astro-cid-xuqton2o> <label data-astro-cid-xuqton2o>Nueva imagen seleccionada:</label><br data-astro-cid-xuqton2o> <img id="preview-img-tag" src="" alt="Vista previa" class="preview-img-tag" data-astro-cid-xuqton2o> </div> </div> </div> <!-- Form Actions --> <div class="form-actions" data-astro-cid-xuqton2o> <button type="submit" class="btn-submit" data-astro-cid-xuqton2o> <span class="btn-icon" data-astro-cid-xuqton2o>💾</span>
Guardar Cambios
</button> <a href="/dashboard/stake" class="btn-cancel" data-astro-cid-xuqton2o> <span class="btn-icon" data-astro-cid-xuqton2o>❌</span>
Cancelar
</a> </div> </form> </div> </div>  ${renderScript($$result2, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stake/edit/[id].astro?astro&type=script&index=0&lang.ts")} `,
            }
        )}`;
    },
    "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stake/edit/[id].astro",
    void 0
);
const $$file =
    "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stake/edit/[id].astro";
const $$url = "/dashboard/stake/edit/[id]";

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
