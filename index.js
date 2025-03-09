import { FetchRequest } from '@rails/request.js'

const request = (verb, url, payload, headers) => {
  const req = new FetchRequest(verb, url, {
    headers: { Accept: "application/json", ...headers },
    body: payload,
  })
  return req.perform().then(response => {
    if(response.response.ok) {
      return response.json
    } else {
      return response
    }
  })
}

const get = (url, payload = {}, headers = {}) => request('get', url, payload, headers)
const post = (url, payload = {}, headers = {}) => request('post', url, payload, headers)
const put = (url, payload = {}, headers = {}) => request('put', url, payload, headers)
const patch = (url, payload = {}, headers = {}) => request('patch', url, payload, headers)
const destroy = (url, payload = {}, headers = {}) => request('delete', url, payload, headers)

export { request, get, post, put, patch, destroy }
