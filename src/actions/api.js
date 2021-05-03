import {actionLoadMovies} from './actionLoadMovies';

export function loadMovies(endpoint, callback, params) {
    return fetch(getUrl('http://localhost:4000/', endpoint, {limit: 21, ...params}))
        .then(response => response.json())
        .then(callback)
}

export function loadMovieDetailsRequest(endpoint, params, callback) {
    fetch(getUrl('http://localhost:4000/', endpoint, params)).then(response => response.json())
        .then(callback)
}

export function createMovieRequest(endpoint, data, callback = function () {}) {
    return fetch(getUrl('http://localhost:4000/', endpoint),{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(callback)
}

export function editMovieRequest(endpoint, data, callback = function () {}) {
    return fetch(getUrl('http://localhost:4000/', endpoint),{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(callback)
}

export function removeMovieRequest(dispatch, endpoint, params) {
    return fetch(getUrl('http://localhost:4000/', endpoint, params),{
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