import { FetchRequest } from '@rails/request.js'

const request = (verb, url, payload) => {
  const req = new FetchRequest(verb, url, {
    headers: { Accept: "application/json" },
    body: payload,
  })
  return req.perform().then(response => {
    if(response.response.headers.get('Content-Length') > 0) {
      return response.json
    }
  })
}

const get = (url, payload) => request('get', url, payload)
const post = (url, payload) => request('post', url, payload)
const put = (url, payload) => request('put', url, payload)
const patch = (url, payload) => request('patch', url, payload)
const destroy = (url, payload) => request('delete', url, payload)

export { request, get, post, put, patch, destroy }
