const baseUrl = 'https://zenquotes.io/api/random '

export function getQuote() {
    return fetch(`${baseUrl}`)
    .then(res => res.json())
    .catch(err => {
        console.log(err)
    })
}


// export function getQuote() {
//     return fetch(`${baseUrl}`)
//     .then(res => {
//         if (!response.ok) {
//             throw new Error('Failed to fetch.');
//         }
//         return res.json()
// })
// }


