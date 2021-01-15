// Query Selectors
export const main = document.querySelector("main");




// Functions
export const displayTravelerTrips = (traveler, allTrips, allDestinations) => {
  const travelerTrips = allTrips.filter(trip => trip.userID === traveler.id);
  travelerTrips.forEach(trip => {
    main.insertAdjacentHTML('beforeend', `
      <article class="trip">
        <p class="detail date">${trip.date}</p>
        <p class="detail place-and-time">${trip.duration} days in ${findDestinationByID(trip.destinationID, allDestinations).destination}</p>
        <img src="${findDestinationByID(trip.destinationID, allDestinations).image}" alt="findDestinationByID(trip.destinationID, allDestinations).alt" height="100px" width="100px">
        <p class="detail travelers">Travelers: ${trip.travelers}</p>
        <p class="detail status">Status: ${trip.status}</p>
      </article>
    `);
  })
}

export const findDestinationByID = (id, destinationsData) => destinationsData.find(destination => destination.id === id)