import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dm-8eCho.mjs';
import 'kleur/colors';
import { $ as $$DashboardLayout } from '../chunks/DashboardLayout_B7ceeHST.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
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
  return renderTemplate`${renderComponent($$result, "Layout", $$DashboardLayout, { "title": "Panel de Administraci\xF3n", "data-astro-cid-y55gmoyq": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-y55gmoyq> <section class="welcome-section" data-astro-cid-y55gmoyq> <div class="welcome-content" data-astro-cid-y55gmoyq> <h2 data-astro-cid-y55gmoyq>Panel de Administración</h2> <p data-astro-cid-y55gmoyq>
Gestiona y supervisa todos los aspectos del Observatorio
                Ambiental de Barranquilla
</p> <div class="welcome-stats" data-astro-cid-y55gmoyq> <div class="stat-item" data-astro-cid-y55gmoyq> <span class="stat-number" data-astro-cid-y55gmoyq>0</span> <div class="stat-label" data-astro-cid-y55gmoyq>Noticias publicadas</div> </div> <div class="stat-item" data-astro-cid-y55gmoyq> <span class="stat-number" data-astro-cid-y55gmoyq>0</span> <div class="stat-label" data-astro-cid-y55gmoyq>Reportes ciudadanos</div> </div> <div class="stat-item" data-astro-cid-y55gmoyq> <span class="stat-number" data-astro-cid-y55gmoyq>0</span> <div class="stat-label" data-astro-cid-y55gmoyq>Documentos oficiales</div> </div> </div> </div> </section> <!-- Quick Actions --> <section class="quick-actions" data-astro-cid-y55gmoyq> <h2 class="section-title" data-astro-cid-y55gmoyq>Módulos de Administración</h2> <div class="actions-grid" data-astro-cid-y55gmoyq> <div class="action-card" data-astro-cid-y55gmoyq> <div class="action-icon" data-astro-cid-y55gmoyq> <i class="fas fa-newspaper" data-astro-cid-y55gmoyq></i> </div> <h3 data-astro-cid-y55gmoyq>Gestión de Noticias</h3> <p data-astro-cid-y55gmoyq>
Administra las publicaciones, artículos y comunicados del
                    observatorio ambiental. Crea, edita y publica contenido
                    informativo.
</p> <a href="/dashboard/news" class="action-link" data-astro-cid-y55gmoyq>
Gestionar noticias <i class="fas fa-arrow-right" data-astro-cid-y55gmoyq></i> </a> </div> <div class="action-card" data-astro-cid-y55gmoyq> <div class="action-icon" data-astro-cid-y55gmoyq> <i class="fas fa-users" data-astro-cid-y55gmoyq></i> </div> <h3 data-astro-cid-y55gmoyq>Participación Ciudadana</h3> <p data-astro-cid-y55gmoyq>
Supervisa reportes ciudadanos, comentarios y sugerencias de
                    la comunidad sobre temas ambientales en Barranquilla.
</p> <a href="/dashboard/stake" class="action-link" data-astro-cid-y55gmoyq>
Ver participación <i class="fas fa-arrow-right" data-astro-cid-y55gmoyq></i> </a> </div> <div class="action-card" data-astro-cid-y55gmoyq> <div class="action-icon" data-astro-cid-y55gmoyq> <i class="fas fa-database" data-astro-cid-y55gmoyq></i> </div> <h3 data-astro-cid-y55gmoyq>Gestión de Datos e Información</h3> <p data-astro-cid-y55gmoyq>
Administra bases de datos ambientales, informes técnicos,
                    documentos oficiales y archivos del observatorio.
</p> <a href="/dashboard/document" class="action-link" data-astro-cid-y55gmoyq>
Gestionar datos <i class="fas fa-arrow-right" data-astro-cid-y55gmoyq></i> </a> </div> </div> </section> </div>  ` })}`;
}, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/index.astro", void 0);

const $$file = "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
