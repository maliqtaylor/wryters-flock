import tokenService from "../services/tokenService"
const BASE_URL = "/api/comments/entries/"
const DEL_URL = '/api/comments/'

export function createComment(comment, entryID) {
    return fetch(BASE_URL + entryID, {
      method: "POST",
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(comment)
  }, {mode: "cors"})
  .then(res => res.json());
}

export function deleteComment(entryID, id) {
  return fetch(DEL_URL + entryID + '/' + id, {
    method: 'DELETE',
    headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
  }, {mode: 'cors'})
  .then(res => res.json())
}

// export function getOne(id) {
//   return fetch(BASE_URL + id, {
//     method: "GET",
//     headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
// }, {mode: "cors"})
// .then(res => res.json());
// }