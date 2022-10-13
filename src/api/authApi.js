import { handleResponse, handleError } from "./apiUtils";

export function postAuth(email, password, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "https://bookbay.duckdns.org/api/v1/auth/" + email + "/" + password
    return fetch(endpoint_url, {
        method: 'POST',
        redirect: 'follow'
    })
        .then(responseHandler)
        .catch(errorHandler);
}