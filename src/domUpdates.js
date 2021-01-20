// Query Selectors
export const loginDisplay = document.querySelector(".login-display");
export const travelerDisplay = document.querySelector(".traveler-display")
export const travelerHeader = document.querySelector(".traveler-header");
export const travelerNav = document.querySelector(".traveler-nav");
export const travelerModal = document.querySelector(".traveler-modal");
export const travelerMain = document.querySelector(".traveler-main");
export const travelerAside = document.querySelector(".traveler-aside");
export const travelerFooter = document.querySelector(".traveler-footer");
export const adminDisplay = document.querySelector(".admin-display");
export const adminHeader = document.querySelector(".admin-header");
export const adminModal = document.querySelector(".admin-modal");
export const modalContent = document.querySelector(".modal-content");
export const adminNav = document.querySelector(".admin-nav");
export const adminMain = document.querySelector(".admin-main");
export const dateInput = document.querySelector(".form-date");
export const durationInput = document.querySelector(".form-duration");
export const numTravelersInput = document.querySelector(".form-travelers");
export const destinationInput = document.querySelector(".form-destination");
export const travelerContentDisplay = document.querySelector(".traveler-content-display");
export const adminContentDisplay = document.querySelector(".admin-content-display");
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
          <p class="detail destination value">${destinationsRepo.findDestinationByID(trip.destinationID).destination}</p>
          <p class="detail travelers">TRAVELERS</p>
          <p class="detail value">${trip.travelers}</p>
          <p class="detail status">STATUS</p>
          <p class="detail value">${trip.status}</p>
        </section>
      </article>
    `);
  })
}

export const displayTravelerAside = (traveler, tripsRepo, destinationsRepo) => {
  const thisYear = new Date().toJSON().slice(0,4).replace(/-/g, '/');
  const annualTotal = tripsRepo.totalAnnualTripsCost(traveler.id, thisYear, destinationsRepo);
  const pendingTotal = tripsRepo.totalPendingTripsCost(traveler.id, destinationsRepo);

  travelerAside.innerHTML = '<h1>PROFILE</h1>';
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

  travelerContentDisplay.innerHTML = '';
  travelerContentDisplay.insertAdjacentHTML("afterbegin", `<img class="quote-image" src="${destination.image}" alt="${destination.alt}">`);
  travelerContentDisplay.insertAdjacentHTML("beforeend", `<p class="estimated-cost">YOUR ESTIMATED COST IS: ${tripCost.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>`);
  travelerModal.style.display = "block";
}

export const hideQuote = () => {
  dateInput.value = null;
  durationInput.value = null;
  numTravelersInput.value = null;
  destinationInput.value = null;
  travelerModal.style.display = "none";
}

export const hideRequest = () => {
  adminModal.style.display = "none";
}

export const constructTodaysTravelers = (travelersRepo, tripsRepo) => {
  const todaysTrips = tripsRepo.filterTripsToday("2020/06/22");
  const travelerNames = todaysTrips.map(trip => {
    const traveler = travelersRepo.checkForID(trip.userID);
    return traveler.name;
  })

  return travelerNames.forEach(name => {
    adminNav.insertAdjacentHTML('beforeend', `<p class="admin-nav-element value">${name}</p>`)
  })
}

export const displayAdminNav = (travelersRepo, tripsRepo, destinationsRepo) => {
  adminNav.innerHTML = '<h1>ADMIN STATISTICS</h1>';
  const thisYear = new Date().toJSON().slice(0, 4).replace(/-/g, '/');
  //KEEPING HARD CODED DATE SINCE NO DATA FOR 2021
  const annualCommissionTotal = tripsRepo.totalAnnualCommission(2020, destinationsRepo);
  
  adminNav.insertAdjacentHTML('beforeend', `<p class="admin-nav-element title">EARNINGS IN ${thisYear}</p><p class="admin-nav-element value">${annualCommissionTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
  <p class="admin-nav-element title">WHO'S TRAVELING TODAY?</p>`);
  constructTodaysTravelers(travelersRepo, tripsRepo);
}

export const displayAdminModal = (event, destinationsRepo, tripsRepo) => {
  const tripID = event.target.closest("section").id;
  const trip = tripsRepo.findTripByTripID(tripID);
  const selectedTripHTML = `
  <article tabindex="0" class="pending-trip" style="background-image: url(${destinationsRepo.findDestinationByID(trip.destinationID).image}" alt ="${destinationsRepo.findDestinationByID(trip.destinationID).alt}">
    <section class="trip-summary">
      <p class="detail date">${trip.date}</p>
      <p class="detail duration">${trip.duration} DAYS IN</p>
      <p class="detail destination">${destinationsRepo.findDestinationByID(trip.destinationID).destination}</p>
      <p class="detail travelers">TRAVELERS</p><p>${trip.travelers}</p>
      <p class="detail status">STATUS</p><p>${trip.status}</p>
    </section>
  </article>`

  adminContentDisplay.innerHTML = '';
  adminContentDisplay.insertAdjacentHTML("afterbegin", selectedTripHTML);
  modalContent.id = `${tripID}`
  adminModal.style.display = "block";
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

export const displayPendingTrips = (tripsRepo, destinationsRepo) => {
  const pendingTrips = tripsRepo.filterPendingTrips();
  adminMain.innerHTML = '';

  pendingTrips.forEach(trip => {
    adminMain.insertAdjacentHTML('afterbegin', `
      <article tabindex="0" class="trip" style="background-image: url(${destinationsRepo.findDestinationByID(trip.destinationID).image}" alt ="${destinationsRepo.findDestinationByID(trip.destinationID).alt}">
        <section class="trip-summary" id="${trip.id}">
        <p class="detail travler">TRAVELER ID: ${trip.userID}</p>
          <p class="detail date">${trip.date}</p>
          <p class="detail duration">${trip.duration} DAYS IN</p>
          <p class="detail destination">${destinationsRepo.findDestinationByID(trip.destinationID).destination}</p>
          <p class="detail travelers">TRAVELERS: ${trip.travelers}</p>
          <p class="detail status">STATUS: ${trip.status}</p>
        </section>
      </article>
    `);
  })
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

// REFACTOR THIS TO ADD A CLASS OF DISPLAY: HIDDEN???
export const displayDesiredElements = display => {
  if (display === 'login') {
    travelerDisplay.classList.add("hidden");
    adminDisplay.classList.add("hidden");
    loginDisplay.classList.remove = "hidden";
  } else if (display === 'traveler') {
    travelerDisplay.classList.remove("hidden");
    adminDisplay.classList.add("hidden");
    loginDisplay.classList.add("hidden");
  } else if (display === 'admin') {
    travelerDisplay.classList.add("hidden");
    adminDisplay.classList.remove("hidden");
    loginDisplay.classList.add("hidden");
  }
}