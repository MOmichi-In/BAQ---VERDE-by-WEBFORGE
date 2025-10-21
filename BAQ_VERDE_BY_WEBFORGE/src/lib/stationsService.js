import { api } from "./api.js";

// ✅ Obtener todas las estaciones
export async function getStations(token) {
    return api("/stations", token, { method: "GET" });
}

// ✅ Crear una estación
export async function createStation(payload, token) {
    return api("/stations", token, {
        method: "POST",
        body: JSON.stringify(payload),
    });
}

// ✅ Obtener una estación por ID
export async function getStationById(stationId, token) {
    return api(`/stations/${stationId}`, token, { method: "GET" });
}

// ✅ Actualizar una estación
export async function updateStation(stationId, payload, token) {
    return api(`/stations/${stationId}`, token, {
        method: "PUT",
        body: JSON.stringify(payload),
    });
}

// ✅ Eliminar una estación
export async function deleteStation(stationId, token) {
    return api(`/stations/${stationId}`, token, { method: "DELETE" });
}
