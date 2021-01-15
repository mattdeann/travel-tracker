// STYLE IMPORTS
import './css/base.scss';

// IMAGE IMPORTS
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');
// JS IMPORTS
import Traveler from './users/traveler';
import travelersData from './data/travelers-data';
import { displayTravelerTrips } from './domUpdates';


// Global Variables
console.log(travelersData)
const traveler = new Traveler(travelersData[0]);

// Event Listeners
document.addEventListener("load", start);

// Functions
function start() {
  displayTravelerTrips(traveler)
}