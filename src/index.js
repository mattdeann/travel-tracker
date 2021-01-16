// STYLE IMPORTS
import './css/base.scss';

// IMAGE IMPORTS
// import './images/turing-logo.png'
console.log('This is the JavaScript entry file - your code begins here.');

// QUERY SELECTORS
const quoteButton = document.querySelector('.quote-button');
const closeQuoteButton = document.querySelector('.close');
const requestButton = document.querySelector('.request-button')

// JS IMPORTS
import Traveler from './jsClasses/traveler';
import { 
  displayTravelerTrips, 
  displayTravelerTotal, 
  displayQuote, 
  hideQuote,
  displayPendingTrip
} from './domUpdates';

import { 
  getData 
} from './apiRequests';

import DestinationsRepo from './jsClasses/destinationsRepo';
import TripsRepo from './jsClasses/tripsRepo';


// Global Variables
let tripsRepo;
let destinationsRepo;
let traveler;

// Initial Data and DOM Population
const populateTravelerMain = () => {
  Promise.all([getTravelerData(),
    getTripsData(),
    getDestinationsData()
  ])
    .then(response => {
      traveler = new Traveler(response[0]);
      tripsRepo = new TripsRepo(response[1]);
      destinationsRepo = new DestinationsRepo(response[2]);
      displayTravelerTrips(traveler, tripsRepo, destinationsRepo);
      displayTravelerTotal(traveler, tripsRepo, destinationsRepo);
    });
}

const getTravelerData = () => {
  return getData('travelers/2')
}

const getTripsData = () => {
  return getData('trips')
}

const getDestinationsData = () => {
  return getData('destinations')
}
// FUNCTION CALLED HERE TO DEAL WITH CALL STACK
populateTravelerMain();

// Function Declarations
const createQuote = () => {
  displayQuote(destinationsRepo);
}

const closeModal = () => {
  hideQuote();
}

const submitTripRequest = () => {
  displayPendingTrip(destinationsRepo);
  hideQuote();
}



// Event Listeners
quoteButton.addEventListener('click', createQuote);
closeQuoteButton.addEventListener('click', closeModal);
requestButton.addEventListener('click', submitTripRequest)
