// Query Selectors
export const loginDisplay = document.querySelector(".login-display");
export const header = document.querySelector("header");
export const nav = document.querySelector("nav");
export const modal = document.querySelector(".modal");
export const main = document.querySelector("main");
export const aside = document.querySelector("aside");
export const footer = document.querySelector("footer");
export const dateInput = document.querySelector(".form-date");
export const durationInput = document.querySelector(".form-duration");
export const numTravelersInput = document.querySelector(".form-travelers");
export const destinationInput = document.querySelector(".form-destination");
export const estimateDisplay = document.querySelector(".estimate-display");


// Functions

export const displayTravelerTrips = (traveler, tripsRepo, destinationsRepo) => {
  const travelerTrips = tripsRepo.filterTravelerTrips(traveler.id);
  main.innerHTML = '';

  travelerTrips.forEach(trip => {
    main.insertAdjacentHTML('afterbegin', `
      <article tabindex="0" class="trip" style="background-image: url(${destinationsRepo.findDestinationByID(trip.destinationID).image}" alt ="${destinationsRepo.findDestinationByID(trip.destinationID).alt}">
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

export const displayTravelerAside = (traveler, tripsRepo, destinationsRepo) => {
  aside.innerHTML = '<h1>Profile</h1>';
  const thisYear = new Date().toJSON().slice(0,4).replace(/-/g, '/');
  const annualTotal = tripsRepo.totalAnnualTripsCost(traveler.id, thisYear, destinationsRepo)
  const pendingTotal = tripsRepo.totalPendingTripsCost(traveler.id, destinationsRepo)

  aside.insertAdjacentHTML('beforeend', `<p class="aside=element title">Total Spent in ${thisYear}</p><p class="aside=element value">${annualTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
  <p class="aside=element title">Total of Pending Trips</p><p class="aside=element value">${pendingTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>`);
}

export const displayTravelerPage = (traveler, tripsRepo, destinationsRepo) => {
  displayTravelerTrips(traveler, tripsRepo, destinationsRepo);
  displayTravelerAside(traveler, tripsRepo, destinationsRepo);
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

export const displayDesiredElements = display => {
  if (display === 'login') {
    header.style.visibility = "hidden";
    nav.style.visibility = "hidden";
    modal.style.visibility = "hidden";
    main.style.visibility = "hidden";
    aside.style.visibility = "hidden";
    footer.style.visibility = "hidden";
    loginDisplay.style.visibility = "visible";
  } else if (display === 'traveler') {
    header.style.visibility = "visible";
    nav.style.visibility = "visible";
    modal.style.visibility = "visible";
    main.style.visibility = "visible";
    aside.style.visibility = "visible";
    footer.style.visibility = "visible";
    loginDisplay.style.visibility = "hidden";
  }
}

