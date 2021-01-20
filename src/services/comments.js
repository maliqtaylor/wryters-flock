import tokenService from "../services/tokenService"
const BASE_URL = "/api/comments/entries/"

export function createComment(comment, entryID) {
    return fetch(BASE_URL + entryID, {
      method: "POST",
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(comment)
  }, {mode: "cors"})
  .then(res => res.json());
  }