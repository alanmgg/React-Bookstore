import { handleResponse, handleError } from "./apiUtils";

export function getBooks(token, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "https://bookbay.duckdns.org/api/v1/libros"
    return fetch(endpoint_url, {
        method: 'GET',
        headers: { "Authorization": "Bearer " + token },
        redirect: 'follow'
    })
        .then(responseHandler)
        .catch(errorHandler);
}

export function savePortada(file, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "https://bookbay.duckdns.org/api/v1/upload-images-before"
    var data = new FormData()
    data.append('image', file)
    return fetch(endpoint_url, {
        method: 'POST',
        body: data,
        headers: { "Accept": "application/json" },
    })
        .then(responseHandler)
        .catch(errorHandler);
}

export function updatePathImage(name, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "https://bookbay.duckdns.org/api/v1/images/2"

    const text_config = { "path": "/images/before/" + name }

    return fetch(endpoint_url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(text_config)
    })
        .then(responseHandler)
        .catch(errorHandler);
}