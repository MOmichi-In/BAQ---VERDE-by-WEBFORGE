import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../../../chunks/astro/server_Dm-8eCho.mjs';
import 'kleur/colors';
import { $ as $$DashboardLayout } from '../../../chunks/DashboardLayout_B7ceeHST.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Upload = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Upload;
  const cookieStore = Astro2.cookies;
  const sessionToken = cookieStore.get("token")?.value;
  if (!sessionToken) {
    return Astro2.redirect("/login");
  }
  if (Astro2.url.searchParams.get("logout") === "true") {
    Astro2.cookies.delete("token", { path: "/" });
    return Astro2.redirect("/login");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$DashboardLayout, { "title": "Subir Documento", "data-astro-cid-3fq2hkkp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-3fq2hkkp> <!-- Header Section --> <div class="dashboard-header" data-astro-cid-3fq2hkkp> <div class="header-content" data-astro-cid-3fq2hkkp> <div class="title-section" data-astro-cid-3fq2hkkp> <h1 class="dashboard-title" data-astro-cid-3fq2hkkp>📤 Subir Nuevo Documento</h1> <p class="dashboard-subtitle" data-astro-cid-3fq2hkkp>Añade un documento oficial al repositorio del observatorio</p> </div> <div class="header-actions" data-astro-cid-3fq2hkkp> <a href="/dashboard/document" class="btn-back" data-astro-cid-3fq2hkkp> <span class="btn-icon" data-astro-cid-3fq2hkkp>⬅️</span>
Volver al Panel
</a> </div> </div> </div> <!-- Alert Messages Container --> <div id="message" class="alert-container" data-astro-cid-3fq2hkkp></div> <!-- Form Section --> <div class="form-container" data-astro-cid-3fq2hkkp> <div class="form-header" data-astro-cid-3fq2hkkp> <h2 class="form-title" data-astro-cid-3fq2hkkp>Información del Documento</h2> <p class="form-subtitle" data-astro-cid-3fq2hkkp>Completa todos los campos obligatorios para subir el documento</p> </div> <form id="uploadForm" class="news-form" enctype="multipart/form-data" data-astro-cid-3fq2hkkp> <div class="form-grid" data-astro-cid-3fq2hkkp> <!-- Título --> <div class="form-group full-width" data-astro-cid-3fq2hkkp> <label for="name" class="form-label" data-astro-cid-3fq2hkkp> <span class="label-icon" data-astro-cid-3fq2hkkp>📄</span>
Título del Documento *
</label> <input type="text" id="name" name="name" class="form-input" placeholder="Ej: Informe Anual 2024" required data-astro-cid-3fq2hkkp> </div> <!-- Archivo --> <div class="form-group full-width" data-astro-cid-3fq2hkkp> <label for="file" class="form-label" data-astro-cid-3fq2hkkp> <span class="label-icon" data-astro-cid-3fq2hkkp>📁</span>
Archivo (PDF, DOC, XLS, etc.) *
</label> <div class="file-upload-wrapper" data-astro-cid-3fq2hkkp> <input type="file" id="file" name="file" class="file-input" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.odt,.ods" required data-astro-cid-3fq2hkkp> <label for="file" class="file-upload-label" data-astro-cid-3fq2hkkp> <span class="upload-icon" data-astro-cid-3fq2hkkp>📁</span> <span class="upload-text" data-astro-cid-3fq2hkkp>Seleccionar archivo</span> </label> </div> </div> <!-- Descripción --> <div class="form-group full-width" data-astro-cid-3fq2hkkp> <label for="description" class="form-label" data-astro-cid-3fq2hkkp> <span class="label-icon" data-astro-cid-3fq2hkkp>📝</span>
Descripción
</label> <textarea id="description" name="description" rows="4" class="form-textarea" placeholder="Describe brevemente el contenido del documento..." data-astro-cid-3fq2hkkp></textarea> </div> <!-- Autor --> <div class="form-group" data-astro-cid-3fq2hkkp> <label for="autor" class="form-label" data-astro-cid-3fq2hkkp> <span class="label-icon" data-astro-cid-3fq2hkkp>👤</span>
Autor *
</label> <input type="text" id="autor" name="autor" class="form-input" placeholder="Ej: Juan Pérez" required data-astro-cid-3fq2hkkp> </div> <!-- Fecha de Disponibilidad --> <div class="form-group" data-astro-cid-3fq2hkkp> <label for="date_disponibility" class="form-label" data-astro-cid-3fq2hkkp> <span class="label-icon" data-astro-cid-3fq2hkkp>📅</span>
Fecha de Disponibilidad *
</label> <input type="datetime-local" id="date_disponibility" name="date_disponibility" class="form-input" required data-astro-cid-3fq2hkkp> </div> </div> <!-- Form Actions --> <div class="form-actions" data-astro-cid-3fq2hkkp> <button type="submit" class="btn-submit" data-astro-cid-3fq2hkkp> <span class="btn-icon" data-astro-cid-3fq2hkkp>💾</span>
Subir Documento
</button> <a href="/dashboard/document" class="btn-cancel" data-astro-cid-3fq2hkkp> <span class="btn-icon" data-astro-cid-3fq2hkkp>❌</span>
Cancelar
</a> </div> </form> </div> </div>  ${renderScript($$result2, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/document/upload.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/document/upload.astro", void 0);

const $$file = "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/document/upload.astro";
const $$url = "/dashboard/document/upload";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Upload,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
