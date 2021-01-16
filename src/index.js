// STYLE IMPORTS
import './css/base.scss';

// IMAGE IMPORTS
// import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// QUERY SELECTORS
const quoteButton = document.querySelector('.quote-button');

// JS IMPORTS
import Traveler from './jsClasses/traveler';
import { 
  displayTravelerTrips, 
  displayTravelerTotal, 
  displayQuote 
} from './domUpdates';
import { 
  getData 
} from './apiRequests';
import DestinationsRepo from './jsClasses/destinationsRepo'
import TripsRepo from './jsClasses/tripsRepo'


// Global Variables
let tripsRepo;
let destinationsRepo;
let traveler;


// Event Listeners
quoteButton.addEventListener('click', displayQuote)

// Functions
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


// ONLY CALLS FROM HERE ON OUT, NO GLOBAL DATA STORAGE
// SHOULD ALWAYS USE THE RETURN OF ANOTHER FUNCTION


// destinationRepo: on event trigger, take in duration, num of travleers, and destination to calculate trip estimate from destinaton repo

// return that calculation here (need function
// return destination image here (need function)

// domUpdates: also call a domUpdates method that takes in the calculation and takes in the destination image, and diplats the HIDDEN DIV (i need sound effects lol)