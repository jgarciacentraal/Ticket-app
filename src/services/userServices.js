export function getToken(data) {
    return fetch('http://localhost:3005/api/tickets/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }) 
    .then( res => res.json())
}