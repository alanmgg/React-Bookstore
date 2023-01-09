import { handleResponse, handleError } from "./apiUtils";

export function createCategory(token, form, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "https://bookbay.duckdns.org/api/v1/categorias"
    
    const text_config = { "nombre": form.type }

    return fetch(endpoint_url, {
        method: "POST",
        headers: { "Authorization": "Bearer " + token, "content-type": "application/json" },
        body: JSON.stringify(text_config)
      })
        .then(responseHandler)
        .catch(errorHandler);
}