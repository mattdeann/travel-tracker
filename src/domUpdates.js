// Query Selectors
export const main = document.querySelector("main");




// Functions
export const displayTravelerTrips = (traveler, allTrips) => {
// use traveler id to filter all trips, grab data in a readable way
// might not end up needing this
  const travelerTrips = allTrips.filter(trip => trip.userID === traveler.id);
  travelerTrips.forEach(trip => {
    main.insertAdjacentHTML('beforeend', `
      <article class="trip">
        <p class="detail destination">Destination: ${trip.destinationID}</p>
        <p class="detail travelers">Travelers: ${trip.travelers}</p>
        <p class="detail date">Date: ${trip.date}</p>
        <p class="detail duration">Duration: ${trip.duration}</p>
        <p class="detail status">Status: ${trip.status}</p>
      </article>
    `);
  })
}