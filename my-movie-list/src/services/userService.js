const baseUrl = 'http://localhost:3030/users';

export const login = (data) => {
   return fetch(`${baseUrl}/login` , {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json());
}

export const logout = (accessToken) => {
    return fetch(`${baseUrl}/logout`, {
        headers: {
            'X-Authorization': accessToken,
        }
    });
}

export const register = (data) => {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(res=> res.json());
}