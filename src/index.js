// STYLE IMPORTS
import './css/base.scss';

// IMAGE IMPORTS
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');
// JS IMPORTS
import travelersData from './data/travelers-data';
import Traveler from './users/traveler';
import { displayTravelerTrips } from './domUpdates';
import { getAllData } from './apiRequests';


// Global Variables

// const traveler = new Traveler(travelersData[0]);


// Event Listeners
document.addEventListener("load", start);

// Functions
function start() {
  getAllData()
    .then(responses => responses.forEach(
      response => console.log(`${response.url}: ${response.status}`)
    ));
}




