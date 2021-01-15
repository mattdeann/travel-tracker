// Query Selectors
export const main = document.querySelector("main");
export const aside = document.querySelector("aside");


// Imports
import datepicker from 'js-datepicker';

// Functions

// USING TRAVELERTRIPS IN MULTIPLE FUNCTIONS, SHOULD TRAVELER TRIPS BE HERE OR IN TRAVELER??

export const displayTravelerTrips = (traveler, allTrips, allDestinations) => {
  const travelerTrips = allTrips.filter(trip => trip.userID === traveler.id);
  travelerTrips.forEach(trip => {
    main.insertAdjacentHTML('beforeend', `
      <article class="trip" style="background-image: url(${findDestinationByID(trip.destinationID, allDestinations).image})">
        <section class="trip-summary">
          <p class="detail date">${trip.date}</p>
          <p class="detail place-and-time">${trip.duration} days in ${findDestinationByID(trip.destinationID, allDestinations).destination}</p>
          <p class="detail travelers">Travelers: ${trip.travelers}</p>
          <p class="detail status">Status: ${trip.status}</p>
        </section>
      </article>
    `);
  })
}


export const findDestinationByID = (id, destinationsData) => destinationsData.find(destination => destination.id === id)

export const totalCostAllTrips = (traveler, allTrips, allDestinations) => {
  const travelerTrips = allTrips.filter(trip => trip.userID === traveler.id);
  const comishPercent = 1.1;

  const total = travelerTrips.reduce((totalCost, trip) => {
    const destination = findDestinationByID(trip.destinationID, allDestinations);
    const tripTotal = (destination.estimatedLodgingCostPerDay * trip.duration) + (destination.estimatedFlightCostPerPerson * trip.travelers) * comishPercent;

    return totalCost += tripTotal;
  }, 0)

  aside.insertAdjacentHTML('beforeend', `<p>Total Spent<br>${total.toLocaleString("en-US", {style: "currency", currency: "USD"})}`)
}

// find all trips, for each trip access the destination and do some maths