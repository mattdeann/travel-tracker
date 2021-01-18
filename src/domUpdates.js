

// Query Selectors
export const main = document.querySelector("main");
export const aside = document.querySelector("aside");
export const dateInput = document.querySelector(".form-date");
export const durationInput = document.querySelector(".form-duration");
export const numTravelersInput = document.querySelector(".form-travelers");
export const destinationInput = document.querySelector(".form-destination");
export const modal = document.querySelector(".modal");
export const estimateDisplay = document.querySelector(".estimate-display");


// Functions
export const displayTravelerTrips = (traveler, tripsRepo, destinationsRepo) => {
  const travelerTrips = tripsRepo.filterTravelerTrips(traveler.id);
  main.innerHTML = '';

  travelerTrips.forEach(trip => {
    main.insertAdjacentHTML('afterbegin', `
      <article class="trip" style="background-image: url(${destinationsRepo.findDestinationByID(trip.destinationID).image}" alt ="${destinationsRepo.findDestinationByID(trip.destinationID).alt}">
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

export const displayAnnualTotal = (traveler, tripsRepo, destinationsRepo) => {
  aside.innerHTML = '<h1>Profile</h1>';
  const thisYear = new Date().toJSON().slice(0,4).replace(/-/g, '/');

  const total = tripsRepo.totalAnnualTripsCost(traveler.id, thisYear, destinationsRepo)

  aside.insertAdjacentHTML('beforeend', `<p>Total Spent in ${thisYear}<br>${total.toLocaleString("en-US", {style: "currency", currency: "USD"})}`)
}

export const displayQuote = destinationsRepo => {
  const duration = durationInput.value;
  const travelers = numTravelersInput.value;
  const destinationID = destinationsRepo.findIDByName(destinationInput.value);
  const destination = destinationsRepo.findDestinationByID(destinationID);
  const tripCost = destinationsRepo.calcTripCost(duration, travelers, destinationID);

  estimateDisplay.innerHTML = '';

  estimateDisplay.insertAdjacentHTML("afterbegin", `<img class="quote-image" src="${destination.image}" alt="${destination.alt}">`);

  estimateDisplay.insertAdjacentHTML("beforeend", `<p>Your estimated cost is: ${tripCost.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>`);

  modal.style.display = "block";
}

export const hideQuote = () => {
  dateInput.value = null;
  durationInput.value = null;
  numTravelersInput.value = null;
  destinationInput.value = null;
  modal.style.display = "none";
}

export const checkInputs = (destinationsRepo) => {
  const date = dateInput.value;
  const duration = durationInput.value;
  const travelers = numTravelersInput.value;
  const destinationID = destinationsRepo.findIDByName(destinationInput.value);

  if (date === '' || 1 > duration || 1 > travelers || destinationID === undefined) {
    return false;
  } else {
    return true;
  }
}

