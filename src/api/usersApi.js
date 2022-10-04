import { handleResponse, handleError } from "./apiUtils";

export function getUsers(responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "http://192.168.0.56:8018/users"
    return fetch(endpoint_url)
        .then(responseHandler)
        .catch(errorHandler);
}

export function getUserByUsername(username, password, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "http://192.168.0.56:8018/user/" + username + "/" + password
    return fetch(endpoint_url)
        .then(responseHandler)
        .catch(errorHandler);
}

export function getUser(idUser, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "http://192.168.0.56:8018/users/" + idUser
    return fetch(endpoint_url)
        .then(responseHandler)
        .catch(errorHandler);
}

export function createUser(form, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "http://192.168.0.56:8018/users"
    
    const text_config = { 
        "username": form.username, 
        "first_name": form.first_name, 
        "last_name": form.last_name,
        "password": form.password, 
        "description": form.description, 
        "status": "active",
        "role": form.role,
        "email": form.email,
        "phone": form.phone,
        "job": form.job }

    return fetch(endpoint_url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(text_config)
      })
        .then(responseHandler)
        .catch(errorHandler);
}

export function deleteUser(idUser, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "http://192.168.0.56:8018/users/" + idUser
    return fetch(endpoint_url, {
        method: "DELETE",
      })
        .then(responseHandler)
        .catch(errorHandler);
}

export function unlockUser(idUser, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "http://192.168.0.56:8018/unlock-users/" + idUser
    return fetch(endpoint_url, {
        method: "PUT",
      })
        .then(responseHandler)
        .catch(errorHandler);
}

export function blockUser(username, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "http://192.168.0.56:8018/block-users/" + username
    return fetch(endpoint_url, {
        method: "PUT",
      })
        .then(responseHandler)
        .catch(errorHandler);
}

export function updateUser(idUser, form, responseHandler = handleResponse, errorHandler = handleError) {
    let endpoint_url = "http://192.168.0.56:8018/users/" + idUser

    const text_config = { 
        "username": form.username, 
        "first_name": form.first_name, 
        "last_name": form.last_name,
        "password": form.password, 
        "description": form.description, 
        "status": form.status,
        "role": form.role,
        "email": form.email,
        "phone": form.phone,
        "job": form.job }

    return fetch(endpoint_url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(text_config)
    })
        .then(responseHandler)
        .catch(errorHandler);
}