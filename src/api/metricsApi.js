import { handleResponse, handleError } from "./apiUtils";

export function getMetrics(token, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "https://bookbay.duckdns.org/api/v1/metricas/cards"
    return fetch(endpoint_url, {
        method: 'GET',
        headers: { "Authorization": "Bearer " + token },
        redirect: 'follow'
    })
        .then(responseHandler)
        .catch(errorHandler);
}