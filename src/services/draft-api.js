import tokenService from "../services/tokenService"
const BASE_URL = '/api/drafts/'

export function create(draftTitle) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
    body: JSON.stringify(draftTitle)
  }, { mode: "cors" })
    .then(res => res.json());
}
export function getOne(draftID) {
  return fetch(BASE_URL + draftID, {
    method: "GET",
    headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
  }, { mode: "cors" })
    .then(res => res.json());
}

export function index() {
  return fetch(BASE_URL, {
    method: "GET",
    headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
  }, { mode: "cors" })
    .then(res => res.json());
}

export function update(draftID, content) {
  return fetch(BASE_URL + draftID, {
    method: "PUT",
    headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
    body: JSON.stringify(content)
  }, { mode: "cors" })
    .then(res => res.json());
}