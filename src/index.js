// STYLE IMPORTS
import './css/base.scss';

// IMAGE IMPORTS
// import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// QUERY SELECTORS
import { mainDisplay } from './domUpdates'

// JS IMPORTS
import Traveler from './users/traveler';
import { displayTravelerTrips } from './domUpdates';
import { getData, getTravelersData } from './apiRequests';


// Global Variables

let tripsData;
let destinationsData;
let traveler;

// const traveler = new Traveler(travelersData[0]);


// Event Listeners
document.addEventListener("load", start);

// // Functions
function start() {
  displayTravelerTrips(traveler, tripsData);
}

const populateTravelerMain = () => {
  Promise.all([getTravelerData(),
    getTripsData(),
    getDestinationsData()
  ]).then(response => {
    displayTravelerTrips(response[0], response[1], response[2]);
    console.log(tripsData);
  });
}

const getTravelerData = () => {
  return getData('travelers/2')
    .then(response => {
      return traveler = response;
    })
    .catch(error => console.log(error));
}

const getTripsData = () => {
  return getData('trips')
    .then(response => {
      return tripsData = response.trips;
    })
    .catch(error => console.log(error));
}

const getDestinationsData = () => {
  return getData('destinations')
    .then(response => {
      return destinationsData = response.destinations;
    })
    .catch(error => console.log(error));
}

// FUNCTION CALLED HERE TO DEAL WITH CALL STACK
populateTravelerMain();



