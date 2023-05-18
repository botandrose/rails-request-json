import { FetchRequest } from '@rails/request.js'

const makeRequest = (verb, url, payload) => {
  const request = new FetchRequest(verb, url, {
    headers: { Accept: "application/json" },
    body: payload,
  })
  return request.perform().then(response => {
    if(response.response.headers.get('Content-Length') > 0) {
      return response.json
    }
  })
}

const get = (url, payload) => makeRequest('get', url, payload)
const post = (url, payload) => makeRequest('post', url, payload)
const put = (url, payload) => makeRequest('put', url, payload)
const patch = (url, payload) => makeRequest('patch', url, payload)
const destroy = (url, payload) => makeRequest('delete', url, payload)

export { get, post, put, patch, destroy }
