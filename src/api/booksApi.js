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

export function savePortadaBooks(file, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "https://bookbay.duckdns.org/api/v1/upload-images-books"
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

export function createPathImage(formPath, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "https://bookbay.duckdns.org/api/v1/images"

    const text_config = { "path": formPath.path }

    return fetch(endpoint_url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(text_config)
    })
        .then(responseHandler)
        .catch(errorHandler);
}

export function createLibro(token, formBook, formAuthor, formEditorial, formCategory, formImage, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "https://bookbay.duckdns.org/api/v1/libros/all"
    
    const text_config = {
        "libro": {
          "num_paginas": formBook.pages,
          "anio": formBook.year,
          "isbn_10": formBook.isbn10,
          "isbn_13": formBook.isbn13,
          "nombre": formBook.nameBook,
          "estado": formBook.state,
          "resenia": formBook.resenia,
          "precio": formBook.price,
          "stock": formBook.stock,
          "id_autor": 0,
          "id_editorial": 0,
          "id_categoria": 0,
          "id_image": 0
        },
        "autor": {
          "nombre": formAuthor.nameAuthor,
          "ap_paterno": formAuthor.apPaterno,
          "ap_materno": formAuthor.apMaterno,
          "pais": formAuthor.countryAuthor
        },
        "editorial": {
          "pais": formEditorial.countryEditorial,
          "nombre": formEditorial.nameEditorial
        },
        "categoria": {
          "nombre": formCategory.type
        },
        "image": {
          "path": formImage.path
        }
      }

    return fetch(endpoint_url, {
        method: "POST",
        headers: { "Authorization": "Bearer " + token, "content-type": "application/json" },
        body: JSON.stringify(text_config)
      })
        .then(responseHandler)
        .catch(errorHandler);
}