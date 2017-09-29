function getJson(url) {
  let req = new Request({
    method: 'GET',
    mode: 'no-cors'
  })
  return fetch(url, req)
    .then(res => res.json() )
}

export { getJson };