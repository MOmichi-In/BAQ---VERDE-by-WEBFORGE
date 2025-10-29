import { api } from "./api.js";

export async function getStations(token) {
    return api("/stations", token, { method: "GET" });
}

export async function createStation(payload, token) {
    return api("/stations", token, {
        method: "POST",
        body: JSON.stringify(payload),
    });
}

export async function getStationById(stationId, token) {
    return api(`/stations/${stationId}`, token, { method: "GET" });
}

export async function updateStation(stationId, payload, token) {
    return api(`/stations/${stationId}`, token, {
        method: "PUT",
        body: JSON.stringify(payload),
    });
}

export async function deleteStation(stationId, token) {
    return api(`/stations/${stationId}`, token, { method: "DELETE" });
}
