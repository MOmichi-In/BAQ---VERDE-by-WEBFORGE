const API_BASE = import.meta.env.PUBLIC_URL_SERVER;

export async function api(url, token, options = {}) {
    const headers = new Headers(options.headers || {});
    if (token) {
        headers.set("Authorization", `Bearer ${token}`);
    }

    if (!(options.body instanceof FormData)) {
        headers.set("Content-Type", "application/json");
    }

    const response = await fetch(API_BASE + url, {
        ...options,
        headers,
    });

    if (!response.ok) {
        let errorMessage = `Error del servidor: ${response.status}`; // Mensaje por defecto

        try {
            const errorData = await response.json();

            // ✅ Lógica MEJORADA para "traducir" los errores de FastAPI
            if (errorData.detail) {
                if (Array.isArray(errorData.detail)) {
                    errorMessage = errorData.detail
                        .map((err) => `El campo '${err.loc[1]}' tiene un error: ${err.msg}`)
                        .join("; ");
                } else if (typeof errorData.detail === "string") {
                    errorMessage = errorData.detail;
                }
            }
        } catch (e) {}

        throw new Error(errorMessage);
    }

    if (response.status === 204) {
        return true;
    }

    return response.json();
}
