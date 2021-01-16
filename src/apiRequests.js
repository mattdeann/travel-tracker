export const getData = endpoint => {
  return fetch(`http://localhost:3001/api/v1/${endpoint}`)
    .then(response => response.json())
    .catch(error => console.log('getData fetch error', error));
}


export const postTrip = (newID, userID, destinationID, travelers, date, duration) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": parseInt(`${newID}`),
    "userID": parseInt(`${userID}`),
    "destinationID": parseInt(`${destinationID}`),
    "travelers": parseInt(`${travelers}`),
    "date": `${date}`,
    "duration": parseInt(`${duration}`),
    "status": "pending",
    "suggestedActivities": []
  });
  console.log(raw);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch("http://localhost:3001/api/v1/trips", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}