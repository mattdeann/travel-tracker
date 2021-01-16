// Query Selectors
export const main = document.querySelector("main");
export const aside = document.querySelector("aside");
export const dateInput = document.querySelector(".form-date");
export const durationInput = document.querySelector(".form-duration");
export const numTravelersInput = document.querySelector(".form-travelers");
export const destinationInput = document.querySelector(".form-destination");
export const tripQuoteDisplay = document.querySelector(".trip-quote");


// Functions
export const displayTravelerTrips = (traveler, tripsRepo, destinationsRepo) => {
  const travelerTrips = tripsRepo.filterTravelerTrips(traveler.id);

  travelerTrips.forEach(trip => {
    main.insertAdjacentHTML('beforeend', `
      <article class="trip" style="background-image: url(${destinationsRepo.findDestinationByID(trip.destinationID).image})">
        <section class="trip-summary">
          <p class="detail date">${trip.date}</p>
          <p class="detail duration">${trip.duration} day trip to</p>
          <p class-"detail destination">${destinationsRepo.findDestinationByID(trip.destinationID).destination}</p>
          <p class="detail travelers">Travelers: ${trip.travelers}</p>
          <p class="detail status">Status: ${trip.status}</p>
        </section>
      </article>
    `);
  })
}

export const displayTravelerTotal = (traveler, tripsRepo, destinationsRepo) => {
  const allTravelerTrips = tripsRepo.filterTravelerTrips(traveler.id);

  const total = allTravelerTrips.reduce((totalCost, trip) => {
    const tripTotal = destinationsRepo.calcTripCost(trip.duration, trip.travelers, trip.destinationID)

    totalCost += tripTotal;
    return totalCost;
  }, 0)

  aside.insertAdjacentHTML('beforeend', `<p>Total Spent<br>${total.toLocaleString("en-US", {style: "currency", currency: "USD"})}`)
}

export const calculateQuote = (destinationsRepo) => {
  const duration = durationInput.value;
  const travelers = numTravelersInput.value;
  const destinationID = destinationInput.value;

  destinationsRepo.calcTripCost(duration, travelers, destinationID)


}
