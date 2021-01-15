function getData(dataset) {
  let data = [];
  fetch(`http://localhost:3001/api/v1/${dataset}`)
    .then(response => response.json())
    .then(result => {
      result.forEach(uniqueResult => {
        data.push(uniqueResult)
      });
    })
    .catch(error => console.log('error', error));
  return data;
} 

export default getData;