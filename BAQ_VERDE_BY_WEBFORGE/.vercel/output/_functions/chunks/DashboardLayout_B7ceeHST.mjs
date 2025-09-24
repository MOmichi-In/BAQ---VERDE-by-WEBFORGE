import { e as createComponent, f as createAstro, n as renderHead, h as addAttribute, o as renderSlot, r as renderTemplate } from './astro/server_Dm-8eCho.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-kqx5um5x> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} - Dashboard</title><!-- Font Awesome para iconos --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">${renderHead()}</head> <body data-astro-cid-kqx5um5x> <!-- Header --> <header class="header" data-astro-cid-kqx5um5x> <div class="header-content" data-astro-cid-kqx5um5x> <div class="logo" data-astro-cid-kqx5um5x> <div class="logo-icon" data-astro-cid-kqx5um5x> <i class="fas fa-seedling" data-astro-cid-kqx5um5x></i> </div> <div class="logo-text" data-astro-cid-kqx5um5x> <h1 data-astro-cid-kqx5um5x>Observatorio Ambiental</h1> <p data-astro-cid-kqx5um5x>Panel Administrativo</p> </div> </div> <!-- Menú de Navegación --> <nav class="main-nav" data-astro-cid-kqx5um5x> <a href="/dashboard"${addAttribute(Astro2.url.pathname === "/dashboard" ? "active" : "", "class")} data-astro-cid-kqx5um5x> <i class="fas fa-home" data-astro-cid-kqx5um5x></i> Dashboard
</a> <a href="/dashboard/news"${addAttribute(Astro2.url.pathname.startsWith("/dashboard/news") ? "active" : "", "class")} data-astro-cid-kqx5um5x> <i class="fas fa-newspaper" data-astro-cid-kqx5um5x></i> Noticias
</a> <a href="/dashboard/stake"${addAttribute(Astro2.url.pathname.startsWith("/dashboard/stake") ? "active" : "", "class")} data-astro-cid-kqx5um5x> <i class="fas fa-users" data-astro-cid-kqx5um5x></i> Participación
</a> <a href="/dashboard/document"${addAttribute(Astro2.url.pathname.startsWith("/dashboard/document") ? "active" : "", "class")} data-astro-cid-kqx5um5x> <i class="fas fa-file-alt" data-astro-cid-kqx5um5x></i> Documentos
</a> <a href="/dashboard/stations"${addAttribute(Astro2.url.pathname.startsWith("/dashboard/stations") ? "active" : "", "class")} data-astro-cid-kqx5um5x> <i class="fas fa-map-marker-alt" data-astro-cid-kqx5um5x></i> Estaciones
</a> </nav> <!-- Acciones (Usuario + Logout) --> <div class="header-actions" data-astro-cid-kqx5um5x> <div class="user-profile" data-astro-cid-kqx5um5x> <div class="user-avatar" data-astro-cid-kqx5um5x>
AD
</div> <div class="user-info" data-astro-cid-kqx5um5x> <h3 data-astro-cid-kqx5um5x>Administrador</h3> <p data-astro-cid-kqx5um5x>Super usuario</p> </div> <i class="fas fa-chevron-down" style="color: var(--color-gris-oscuro); font-size: 0.8rem;" data-astro-cid-kqx5um5x></i> </div> <a href="/dashboard?logout=true" class="logout-link" data-astro-cid-kqx5um5x> <i class="fas fa-door-open" data-astro-cid-kqx5um5x></i> Salir
</a> </div> </div> </header> <!-- Contenido dinámico --> <main data-astro-cid-kqx5um5x> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/iamxfree/Documents/WEBFORGE/DAIRON/BAQVERDE/BAQ_VERDE_BY_WEBFORGE/src/layouts/DashboardLayout.astro", void 0);

export { $$DashboardLayout as $ };
