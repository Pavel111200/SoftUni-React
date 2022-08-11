const baseUrl = 'http://localhost:3030/data/movies';

export const create = (data, accessToken) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json());
}

export const getAll = async () => {
    const response = await fetch(baseUrl);

    return await response.json();
}

export const getOne = (movieId) => {
    return fetch(`${baseUrl}/${movieId}`)
        .then(res => res.json());
}

export const deleteMovie = (movieId, accessToken) => {
    return fetch(`${baseUrl}/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': accessToken
        }
    })
    .then(res => res.json());
}

export const editMovie = (movie, accessToken) => {
    return fetch(`${baseUrl}/${movie._id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(movie)
    })
    .then(res => res.json());
}