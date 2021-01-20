import tokenService from "../services/tokenService"
const BASE_URL = '/api/entries/'

export function create(entry) {
    return fetch(BASE_URL, {
		method: "POST",
		headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
		body: JSON.stringify(entry)
  }, {mode: "cors"})
  .then((res => res.json()))
}

export function index(entry) {
    return fetch(BASE_URL, {mode: 'cors'})
    .then(res => res.json())
}

export function displayEntry(entryID) {
    return fetch(BASE_URL + entryID, {
      method: "GET",
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
    }, { mode: "cors" })
      .then(res => res.json());
}

