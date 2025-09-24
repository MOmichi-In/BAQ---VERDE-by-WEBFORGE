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
  const docsRes = await api(`/documents`, sessionToken);
  const documentos = docsRes || [];
  return renderTemplate`${renderComponent($$result, "Layout", $$DashboardLayout, { "title": "Gestión de Documentos", "data-astro-cid-lpobfr2t": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-lpobfr2t> <!-- Header Section --> <div class="dashboard-header" data-astro-cid-lpobfr2t> <div class="header-content" data-astro-cid-lpobfr2t> <div class="title-section" data-astro-cid-lpobfr2t> <h1 class="dashboard-title" data-astro-cid-lpobfr2t>📁 Gestión de Documentos</h1> <p class="dashboard-subtitle" data-astro-cid-lpobfr2t>Administra los documentos oficiales del observatorio</p> </div> <div class="header-actions" data-astro-cid-lpobfr2t> <a href="/dashboard/document/upload" class="btn-primary" data-astro-cid-lpobfr2t> <span class="btn-icon" data-astro-cid-lpobfr2t>➕</span>
Subir Documento
</a> </div> </div> </div> <!-- Documentos Grid --> ${documentos.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-lpobfr2t> <div class="empty-icon" data-astro-cid-lpobfr2t>📄</div> <h3 class="empty-title" data-astro-cid-lpobfr2t>No hay documentos aún</h3> <p class="empty-text" data-astro-cid-lpobfr2t>Sube tu primer documento para comenzar a organizar la información.</p> </div>` : renderTemplate`<div class="docs-grid" data-astro-cid-lpobfr2t> ${documentos.map((doc) => renderTemplate`<div class="doc-card" data-astro-cid-lpobfr2t> <div class="doc-header" data-astro-cid-lpobfr2t> <h3 class="doc-title" data-astro-cid-lpobfr2t>${doc.name}</h3> <span class="doc-date" data-astro-cid-lpobfr2t>📅 ${new Date(doc.created_at).toLocaleDateString()}</span> </div> <div class="doc-meta" data-astro-cid-lpobfr2t> <span class="doc-author" data-astro-cid-lpobfr2t>👤 ${doc.autor || "Desconocido"}</span> </div> <div class="doc-actions" data-astro-cid-lpobfr2t> <a${addAttribute(`${"http://localhost:8000"}${doc.document_url}`, "href")} target="_blank" rel="noopener noreferrer" class="btn-view" data-astro-cid-lpobfr2t> <span class="btn-icon" data-astro-cid-lpobfr2t>👁️</span>
Ver Documento
</a> <button class="btn-delete"${addAttribute(doc._id, "data-id")}${addAttribute(doc.document_url, "data-url")} data-astro-cid-lpobfr2t> <span class="btn-icon" data-astro-cid-lpobfr2t>🗑️</span>
Eliminar
</button> </div> </div>`)} </div>`} </div>  ${renderScript($$result2, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/document/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/document/index.astro", void 0);
const $$file = "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/document/index.astro";
const $$url = "/dashboard/document";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
