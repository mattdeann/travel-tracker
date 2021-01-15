import tripsData from './data/trips-data'

// Query Selectors
const main = document.querySelector("main");




// Functions
export const displayTravelerTrips = traveler => {
// use traveler id to filter all trips, grab data in a readable way
  const travelerTrips = tripsData.filter(trip => trip.userID === traveler.id);

  travelerTrips.forEach(trip => {
    main.innerHTML += `Destination:${trip.destinationID} Travelers: ${trip.travelers} Date: ${trip.date} Duration: ${trip.duration} Status: ${trip.status}`;
  })
}