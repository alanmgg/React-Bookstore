import { handleResponse, handleError } from "./apiUtils";

export function getClients(token, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "https://bookbay.duckdns.org/api/v1/clientes"
    return fetch(endpoint_url, {
        method: 'GET',
        headers: { "Authorization": "Bearer " + token },
        redirect: 'follow'
    })
        .then(responseHandler)
        .catch(errorHandler);
}

export function getClienteByEmail(email, password, token, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "https://bookbay.duckdns.org/api/v1/clientes/" + email + "/" + password
    return fetch(endpoint_url, {
        method: 'GET',
        headers: { "Authorization": "Bearer " + token },
        redirect: 'follow'
    })
        .then(responseHandler)
        .catch(errorHandler);
}

// export function getUser(idUser, responseHandler = handleResponse, errorHandler = handleError) {
//     let endpoint_url = "http://192.168.0.56:8018/users/" + idUser
//     return fetch(endpoint_url)
//         .then(responseHandler)
//         .catch(errorHandler);
// }

export function createCliente(form, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "https://bookbay.duckdns.org/api/v1/clientes"
    
    const text_config = { 
        "nombre": form.username, 
        "ap_paterno": form.apPaterno, 
        "ap_materno": form.apMaterno,
        "email": form.email,
        "telefono": form.phone,
        "direccion": form.direction, 
        "password": form.password, 
        "role": form.role,
        "id_image": form.idImage }

    return fetch(endpoint_url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(text_config)
      })
        .then(responseHandler)
        .catch(errorHandler);
}

// export function deleteUser(idUser, responseHandler = handleResponse, errorHandler = handleError) {
//     let endpoint_url = "http://192.168.0.56:8018/users/" + idUser
//     return fetch(endpoint_url, {
//         method: "DELETE",
//       })
//         .then(responseHandler)
//         .catch(errorHandler);
// }

// export function unlockUser(idUser, responseHandler = handleResponse, errorHandler = handleError) {
//     let endpoint_url = "http://192.168.0.56:8018/unlock-users/" + idUser
//     return fetch(endpoint_url, {
//         method: "PUT",
//       })
//         .then(responseHandler)
//         .catch(errorHandler);
// }

// export function blockUser(username, responseHandler = handleResponse, errorHandler = handleError) {
//     let endpoint_url = "http://192.168.0.56:8018/block-users/" + username
//     return fetch(endpoint_url, {
//         method: "PUT",
//       })
//         .then(responseHandler)
//         .catch(errorHandler);
// }

// export function updateUser(idUser, form, responseHandler = handleResponse, errorHandler = handleError) {
//     let endpoint_url = "http://192.168.0.56:8018/users/" + idUser

//     const text_config = { 
//         "username": form.username, 
//         "first_name": form.first_name, 
//         "last_name": form.last_name,
//         "password": form.password, 
//         "description": form.description, 
//         "status": form.status,
//         "role": form.role,
//         "email": form.email,
//         "phone": form.phone,
//         "job": form.job }

//     return fetch(endpoint_url, {
//       method: "PUT",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(text_config)
//     })
//         .then(responseHandler)
//         .catch(errorHandler);
// }