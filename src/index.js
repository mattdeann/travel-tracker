// STYLE IMPORTS
import './css/base.scss';

// IMAGE IMPORTS
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');
// JS IMPORTS
import Traveler from './users/traveler';
import { displayTravelerTrips } from './domUpdates';
import { getData, getTravelersData } from './apiRequests';


// Global Variables
let travelersData;
let tripsData;
let destinationsData;


// const traveler = new Traveler(travelersData[0]);


// Event Listeners
document.addEventListener("load", start);

// Functions
function start() {

  displayTravelerTrips(traveler);
}

const getAllData = () => {
  getTravelerData();
  getTripsData();
  getDestinationsData();
}

const getTravelerData = () => {
  return getData('travelers')
    .then(response => {
      console.log(response);
      travelersData = response.travelers;
    })
    .catch(error => console.log(error));
}

const getTripsData = () => {
  return getData('trips')
    .then(response => {
      tripsData = response.trips;
    })
    .catch(error => console.log(error));
}

const getDestinationsData = () => {
  return getData('destinations')
    .then(response => {
      destinationsData = response.destinations;
    })
    .catch(error => console.log(error));
}

getAllData();




