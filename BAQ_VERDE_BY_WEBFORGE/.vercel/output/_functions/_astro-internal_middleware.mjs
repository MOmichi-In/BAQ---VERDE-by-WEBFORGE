import "es-module-lexer";
import "./chunks/astro-designed-error-pages_CxjKz-E7.mjs";
import "kleur/colors";
import "./chunks/astro/server_Dm-8eCho.mjs";
import "clsx";
import "cookie";
import { s as sequence } from "./chunks/index_CkexNNZN.mjs";

async function onRequest$1(context, next) {
    const path = context.url.pathname;

    // ✅ Solo proteger rutas que empiecen con /dashboard
    if (!path.startsWith("/dashboard")) {
        return next();
    }

    const token = context.cookies.get("token")?.value;
    console.log(context.cookies);
    if (!token) {
        return context.redirect("/login");
    }

    try {
        // Verificamos con el backend
        const res = await fetch("http://localhost:8000/verify", {
            method: "POST", // 🔄 cámbialo a GET si tu backend lo espera así
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            // ❌ Token inválido → borrar cookie y mandar a login
            context.cookies.delete("token", { path: "/" });
            return context.redirect("/login");
        }
    } catch (err) {
        console.error("Error verificando token:", err);
        context.cookies.delete("token", { path: "/" });
        return context.redirect("/login");
    }

    return next();
}

const onRequest = sequence(onRequest$1);

export { onRequest };
