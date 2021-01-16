class DestinationsRepo {
  constructor(destinations) {
    this.allDestinations = destinations;
  }

  findDestinationByID(destinationID) {
    return this.allDestinations.find(destination => destination.id === destinationID)
  }

  calcTripCost(duration, travelers, destination) {
    travelerTrips.reduce((totalCost, trip) => {
      const destination = findDestinationByID(trip.destinationID, allDestinations);
      const tripTotal = (destination.estimatedLodgingCostPerDay * trip.duration) + (destination.estimatedFlightCostPerPerson * trip.travelers) * comishPercent;

      return totalCost += tripTotal;
    }, 0)
  }
}






// destinationRepo: on event trigger, take in duration, num of travleers, and destination to calculate trip estimate from destinaton repo

// return that calculation here (need function
// return destination image here (need function)
export default DestinationsRepo;