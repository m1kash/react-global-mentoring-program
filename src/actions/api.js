import {URL_BASE} from '../constants/app';

export function loadMovies(endpoint, callback, params) {
    return fetch(getUrl(URL_BASE, endpoint, params))
        .then(response => response.json())
        .then(callback)
}

export function loadMovieDetailsRequest(endpoint, params, callback) {
    return fetch(getUrl(URL_BASE, endpoint, params))
        .then(response => response.json())
        .then(callback)
}

export function createMovieRequest(endpoint, data, callback = function () {}) {
    return fetch(getUrl(URL_BASE, endpoint),{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(callback)
}

export function editMovieRequest(endpoint, data, callback = function () {}) {
    return fetch(getUrl(URL_BASE, endpoint),{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(callback)
}

export function removeMovieRequest(dispatch, endpoint, params) {
    return fetch(getUrl(URL_BASE, endpoint, params),{
        method: 'DELETE'
    });
}

function getUrl(url, endpoint, params = {}) {
    const esc = encodeURIComponent;
    const query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');

    return `${url}${endpoint}${query ? '?' + query : ''}`;
}