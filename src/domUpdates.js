// Query Selectors
export const main = document.querySelector("main");




// Functions
export const displayTravelerTrips = (traveler, allTrips) => {
// use traveler id to filter all trips, grab data in a readable way
  console.log(traveler);
  const travelerTrips = allTrips.filter(trip => trip.userID === traveler.id);
  console.log(travelerTrips);
  travelerTrips.forEach(trip => {
    console.log(trip);
    main.insertAdjacentHTML('beforeend', `<p>Destination:${trip.destinationID}</p> <p>Travelers: ${trip.travelers}</p><p>Date: ${trip.date}</p><p>Duration: ${trip.duration}</p><p>Status: ${trip.status}</p>`);
  })
}