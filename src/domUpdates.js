// Query Selectors
export const loginDisplay = document.querySelector(".login-display");
export const travelerHeader = document.querySelector(".traveler-header");
export const travelerNav = document.querySelector(".traveler-nav");
export const travelerModal = document.querySelector(".traveler-modal");
export const travelerMain = document.querySelector(".traveler-main");
export const travelerAside = document.querySelector(".traveler-aside");
export const travelerFooter = document.querySelector(".traveler-footer");
export const adminDisplay = document.querySelector(".admin-display");
export const adminHeader = document.querySelector(".admin-header");
export const adminModal = document.querySelector(".admin-modal");
export const adminMain = document.querySelector(".admin-main");
export const dateInput = document.querySelector(".form-date");
export const durationInput = document.querySelector(".form-duration");
export const numTravelersInput = document.querySelector(".form-travelers");
export const destinationInput = document.querySelector(".form-destination");
export const estimateDisplay = document.querySelector(".estimate-display");
export const loginButton = document.querySelector(".login-button");


// Functions

export const displayTravelerTrips = (traveler, tripsRepo, destinationsRepo) => {
  const travelerTrips = tripsRepo.filterTravelerTrips(traveler.id);
  travelerMain.innerHTML = '';

  travelerTrips.forEach(trip => {
    travelerMain.insertAdjacentHTML('afterbegin', `
      <article tabindex="0" class="trip" style="background-image: url(${destinationsRepo.findDestinationByID(trip.destinationID).image}" alt ="${destinationsRepo.findDestinationByID(trip.destinationID).alt}">
        <section class="trip-summary">
          <p class="detail date">${trip.date}</p>
          <p class="detail duration">${trip.duration} DAYS IN</p>
          <p class-"detail destination">${destinationsRepo.findDestinationByID(trip.destinationID).destination}</p>
          <p class="detail travelers">TRAVELERS: ${trip.travelers}</p>
          <p class="detail status">STATUS: ${trip.status}</p>
        </section>
      </article>
    `);
  })
}

export const displayTravelerAside = (traveler, tripsRepo, destinationsRepo) => {
  travelerAside.innerHTML = '<h1>PROFILE</h1>';
  const thisYear = new Date().toJSON().slice(0,4).replace(/-/g, '/');
  const annualTotal = tripsRepo.totalAnnualTripsCost(traveler.id, thisYear, destinationsRepo)
  const pendingTotal = tripsRepo.totalPendingTripsCost(traveler.id, destinationsRepo)

  travelerAside.insertAdjacentHTML('beforeend', `<p class="aside-element title">TOTAL SPENT IN ${thisYear}</p><p class="aside-element value">${annualTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
  <p class="aside-element title">TOTAL OF PENDING TRIPS</p><p class="aside-element value">${pendingTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>`);
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

  estimateDisplay.insertAdjacentHTML("beforeend", `<p>YOUR ESTIMATED COST IS: ${tripCost.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>`);

  travelerModal.style.display = "block";
}

export const hideQuote = () => {
  dateInput.value = null;
  durationInput.value = null;
  numTravelersInput.value = null;
  destinationInput.value = null;
  travelerModal.style.display = "none";
}

export const checkRequestInputs = (destinationsRepo) => {
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

export const checkLoginInputs = (username, password, travelersRepo) => {
  const twoChar = parseInt(username.slice(-2));
  const oneChar = parseInt(username.slice(-1));

  if (travelersRepo.checkForID(twoChar) && password === 'travel2021') {
    return travelersRepo.checkForID(twoChar);
  } else if (travelersRepo.checkForID(oneChar) && password === 'travel2021') {
    return travelersRepo.checkForID(oneChar);
  } else {
    alert("No account found with that information. Try again.");
  }
}

export const displayDesiredElements = display => {
  if (display === 'login') {
    travelerHeader.style.visibility = "hidden";
    travelerNav.style.visibility = "hidden";
    travelerModal.style.visibility = "hidden";
    travelerMain.style.visibility = "hidden";
    travelerAside.style.visibility = "hidden";
    travelerFooter.style.visibility = "hidden";
    adminDisplay.style.display = "none";
    loginDisplay.style.visibility = "visible";
  } else if (display === 'traveler') {
    travelerHeader.style.visibility = "visible";
    travelerNav.style.visibility = "visible";
    travelerModal.style.visibility = "visible";
    travelerMain.style.visibility = "visible";
    travelerAside.style.visibility = "visible";
    travelerFooter.style.visibility = "visible";
    adminDisplay.style.display = "none";
    loginDisplay.style.visibility = "hidden";
  } else if (display === 'admin') {
    travelerHeader.style.visibility = "hidden";
    travelerNav.style.visibility = "hidden";
    travelerModal.style.visibility = "hidden";
    travelerMain.style.visibility = "hidden";
    travelerAside.style.visibility = "hidden";
    travelerFooter.style.visibility = "hidden";
    adminDisplay.style.display = "grid";
    loginDisplay.style.visibility = "hidden";
  }
}

