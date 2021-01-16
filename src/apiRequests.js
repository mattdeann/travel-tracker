export const getData = endpoint => {
  return fetch(`http://localhost:3001/api/v1/${endpoint}`)
    .then(response => {
      return response.json()
    });
}