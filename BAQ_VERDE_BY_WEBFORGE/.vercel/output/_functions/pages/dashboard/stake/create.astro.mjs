import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../../../chunks/astro/server_Dm-8eCho.mjs';
import 'kleur/colors';
import { $ as $$DashboardLayout } from '../../../chunks/DashboardLayout_B7ceeHST.mjs';
import { a as api } from '../../../chunks/api_Cg62BYL_.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
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
    formData.get("category")?.toString();
    const content = formData.get("content")?.toString();
    const imageFile = formData.get("image");
    if (!title || !content) {
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
          category: "Participacion",
          content,
          img_url
        })
      });
      console.log(res);
      if (res) {
        success = "Participaci\xF3n creada con \xE9xito";
        return Astro2.redirect("/dashboard/stake");
      } else {
        error = "Error al crear la participaci\xF3n";
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$DashboardLayout, { "title": "Crear Participaci\xF3n", "data-astro-cid-3gryvft4": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-3gryvft4> <!-- Header Section --> <div class="dashboard-header" data-astro-cid-3gryvft4> <div class="header-content" data-astro-cid-3gryvft4> <div class="title-section" data-astro-cid-3gryvft4> <h1 class="dashboard-title" data-astro-cid-3gryvft4>Crear Nueva Participación</h1> <p class="dashboard-subtitle" data-astro-cid-3gryvft4>Registra una nueva participación ciudadana en el observatorio</p> </div> <div class="header-actions" data-astro-cid-3gryvft4> <a href="/dashboard/stake" class="btn-back" data-astro-cid-3gryvft4> <span class="btn-icon" data-astro-cid-3gryvft4>⬅️</span>
Volver al Panel
</a> </div> </div> </div> <!-- Alert Messages --> ${error && renderTemplate`<div class="alert alert-error" data-astro-cid-3gryvft4> <div class="alert-icon" data-astro-cid-3gryvft4>⚠️</div> <div class="alert-content" data-astro-cid-3gryvft4> <strong data-astro-cid-3gryvft4>Error:</strong> ${error} </div> </div>`} ${success && renderTemplate`<div class="alert alert-success" data-astro-cid-3gryvft4> <div class="alert-icon" data-astro-cid-3gryvft4>✅</div> <div class="alert-content" data-astro-cid-3gryvft4> <strong data-astro-cid-3gryvft4>Éxito:</strong> ${success} </div> </div>`} <!-- Form Section --> <div class="form-container" data-astro-cid-3gryvft4> <div class="form-header" data-astro-cid-3gryvft4> <h2 class="form-title" data-astro-cid-3gryvft4>Información de la Participación</h2> <p class="form-subtitle" data-astro-cid-3gryvft4>Completa todos los campos para registrar la participación ciudadana</p> </div> <form method="post" class="participacion-form" enctype="multipart/form-data" data-astro-cid-3gryvft4> <div class="form-grid" data-astro-cid-3gryvft4> <!-- Título --> <div class="form-group full-width" data-astro-cid-3gryvft4> <label for="title" class="form-label" data-astro-cid-3gryvft4> <span class="label-icon" data-astro-cid-3gryvft4>🤝</span>
Título de la Participación
</label> <input type="text" id="title" name="title" class="form-input" placeholder="Ingresa el título de la participación ciudadana..." required data-astro-cid-3gryvft4> </div> <!-- Imagen --> <div class="form-group full-width" data-astro-cid-3gryvft4> <label for="image" class="form-label" data-astro-cid-3gryvft4> <span class="label-icon" data-astro-cid-3gryvft4>🖼️</span>
Imagen de la Participación
</label> <div class="file-upload-wrapper" data-astro-cid-3gryvft4> <input type="file" id="image" name="image" class="file-input" accept="image/*" required data-astro-cid-3gryvft4> <label for="image" class="file-upload-label" data-astro-cid-3gryvft4> <span class="upload-icon" data-astro-cid-3gryvft4>📁</span> <span class="upload-text" data-astro-cid-3gryvft4>Seleccionar imagen</span> <span class="upload-hint" data-astro-cid-3gryvft4>JPG, PNG, GIF hasta 10MB</span> </label> </div> </div> <!-- Contenido --> <div class="form-group full-width" data-astro-cid-3gryvft4> <label for="content" class="form-label" data-astro-cid-3gryvft4> <span class="label-icon" data-astro-cid-3gryvft4>📝</span>
Descripción de la Participación
</label> <textarea id="content" name="content" rows="8" class="form-textarea" placeholder="Describe detalladamente la participación ciudadana, sus objetivos, alcance y beneficios para la comunidad..." required data-astro-cid-3gryvft4></textarea> </div> </div> <!-- Form Actions --> <div class="form-actions" data-astro-cid-3gryvft4> <button type="submit" class="btn-submit" data-astro-cid-3gryvft4> <span class="btn-icon" data-astro-cid-3gryvft4>💾</span>
Guardar Participación
</button> <a href="/dashboard/stake" class="btn-cancel" data-astro-cid-3gryvft4> <span class="btn-icon" data-astro-cid-3gryvft4>❌</span>
Cancelar
</a> </div> </form> </div> <!-- Info Section --> <div class="info-section" data-astro-cid-3gryvft4> <div class="info-card" data-astro-cid-3gryvft4> <div class="info-icon" data-astro-cid-3gryvft4>💡</div> <div class="info-content" data-astro-cid-3gryvft4> <h3 class="info-title" data-astro-cid-3gryvft4>Consejos para una buena participación</h3> <ul class="info-list" data-astro-cid-3gryvft4> <li data-astro-cid-3gryvft4>Usa un título claro y descriptivo</li> <li data-astro-cid-3gryvft4>Incluye imágenes que representen la participación</li> <li data-astro-cid-3gryvft4>Describe claramente los objetivos y beneficios</li> <li data-astro-cid-3gryvft4>Menciona cómo los ciudadanos pueden participar</li> </ul> </div> </div> </div> </div>  ${renderScript($$result2, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stake/create.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stake/create.astro", void 0);

const $$file = "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/stake/create.astro";
const $$url = "/dashboard/stake/create";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Create,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
