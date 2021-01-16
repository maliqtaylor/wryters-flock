const baseUrl = 'https://zenquotes.io/api/random '

export function getQuote() {
    return fetch(`${baseUrl}`)
    .then(res => res.json())
}

