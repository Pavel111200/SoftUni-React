const baseUrl = 'http://localhost:3030/data/movies';

export const create = (data, accessToken) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
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