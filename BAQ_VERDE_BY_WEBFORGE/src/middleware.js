export async function onRequest(context, next) {
    const path = context.url.pathname;

    if (!path.startsWith("/dashboard")) {
        return next();
    }

    const token = context.cookies.get("token")?.value;
    if (!token) {
        return context.redirect("/login");
    }

    try {
        const res = await fetch("http://localhost:8000/verify", {
            method: "POST", 
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
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
