import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function deleteData(urlAPI) {
    const response = fetch(urlAPI, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'content-Type': 'application/json'
        }
        // body: JSON.stringify(data)
    });
    return response;
}

const id = 219

deleteData(`${API}/products/${id}`)
    .then(response => response.json())
    .then(id => console.log(id));