// STYLE IMPORTS
import './css/base.scss';

// IMAGE IMPORTS
// import './images/turing-logo.png'
console.log('This is the JavaScript entry file - your code begins here.');

// QUERY SELECTORS
const quoteButton = document.querySelector('.quote-button');
const closeQuoteButton = document.querySelector('.close-quote');
const closeApprovalButton = document.querySelector('.close-approval');
const requestButton = document.querySelector('.request-button');
const dateInput = document.querySelector(".form-date");
const durationInput = document.querySelector(".form-duration");
const numTravelersInput = document.querySelector(".form-travelers");
const destinationInput = document.querySelector(".form-destination");
const usernameInput = document.querySelector(".form-username");
const passwordInput = document.querySelector(".form-password");
const loginButton = document.querySelector(".login-button");

// JS IMPORTS
import Traveler from './jsClasses/traveler';
import TravelersRepo from './jsClasses/travelersRepo'
import DestinationsRepo from './jsClasses/destinationsRepo';
import TripsRepo from './jsClasses/tripsRepo';
import Admin from './jsClasses/admin';
import { 
  displayTravelerTrips, 
  displayTravelerAside, 
  displayQuote, 
  hideQuote,
  displayPendingTrips,
  checkRequestInputs,
  checkLoginInputs,
  displayDesiredElements,
  adminMain,
  displayAdminNav,
  displayAdminModal,
  hideRequest
} from './domUpdates';
import { 
  getData,
  postTrip
} from './apiRequests';

// Global Variables
let travelersRepo;
let tripsRepo;
let destinationsRepo;
let traveler;
let travelerID;
const admin = new Admin();

// Initial Data and DOM Population
const populateTravelerMain = () => {
  Promise.all([getTravelerData(travelerID),
    getTripsData(),
    getDestinationsData()
  ])
    .then(response => {
      traveler = new Traveler(response[0]);
      tripsRepo = new TripsRepo(response[1]);
      destinationsRepo = new DestinationsRepo(response[2]);
      displayTravelerTrips(traveler, tripsRepo, destinationsRepo);
      displayTravelerAside(traveler, tripsRepo, destinationsRepo);
    });
}

const populateAdminMain = () => {
  Promise.all([getTripsData(),
    getDestinationsData()
  ])
    .then(response => {
      tripsRepo = new TripsRepo(response[0]);
      destinationsRepo = new DestinationsRepo(response[1]);
      displayAdminNav(travelersRepo, tripsRepo, destinationsRepo);
      displayPendingTrips(tripsRepo, destinationsRepo);
    });
}

const getTravelerData = travelerID => {
  return getData(`travelers/${travelerID}`)
}

const getTravelersData = () => {
  getData('travelers')
    .then(response => {
      travelersRepo = new TravelersRepo(response);
    })
}

const getTripsData = () => {
  return getData('trips')
}

const getDestinationsData = () => {
  return getData('destinations')
}

// Function Declarations
const createQuote = () => {
  if (!checkRequestInputs(destinationsRepo)) {
    alert('Invalid input, check your form.')
  } else {
    displayQuote(destinationsRepo);
  }
}

const closeModal = () => {
  hideQuote();
  hideRequest();
}

const submitTripRequest = () => {
  const date = dateInput.value.toString();
  const formattedDate = date.replaceAll("-", "/");
  const duration = durationInput.value;
  const travelers = numTravelersInput.value;
  const destinationID = destinationsRepo.findIDByName(destinationInput.value);

  Promise.resolve(postTrip(tripsRepo.allTrips.length + 1, traveler.id, destinationID, travelers, formattedDate, duration))
    .then(populateTravelerMain())
    .then(hideQuote())

  console.log('done')
}

const displayRequest = event => {
  displayAdminModal(event, destinationsRepo, tripsRepo);
}

const approveRequest = event => {
  // construct a post?

}

const login = () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (admin.checkCredentials(username, password)) {
    populateAdminMain();
    displayDesiredElements('admin');
  } else {
    travelerID = checkLoginInputs(username, password, travelersRepo).id;
    populateTravelerMain();
    displayDesiredElements('traveler');
  }
}

const initializePage = () => {
  Promise.resolve(getTravelersData())
    .then(
      displayDesiredElements('login')
    )
}

// Event Listeners
document.addEventListener("load", initializePage());
quoteButton.addEventListener("click", createQuote);
closeQuoteButton.addEventListener("click", closeModal);
closeApprovalButton.addEventListener("click", closeModal);
requestButton.addEventListener("click", submitTripRequest);
loginButton.addEventListener("click", login);
adminMain.addEventListener("click", displayRequest);
approveButton.addEventListener("click", approveRequest);