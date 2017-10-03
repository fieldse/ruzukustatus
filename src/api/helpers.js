function getJson(url, options) {
  let req = new Request(url, options);
  return fetch(req)
    .then(res => {
      return res.json()
    })
}

export { getJson };