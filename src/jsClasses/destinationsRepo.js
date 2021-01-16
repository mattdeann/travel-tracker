class DestinationsRepo {
  constructor(destinations) {
    this.allDestinations = destinations;
  }

  findDestinationByID(destinationID) {
    return this.allDestinations.destinations.find(destination => destination.id === destinationID);
  }

  calcTripCost(duration, travelers, destinationID) {
    const destination = this.findDestinationByID(destinationID);

    const totalWithCommish = 1.1;

    return ((destination.estimatedLodgingCostPerDay * duration) + (destination.estimatedFlightCostPerPerson * travelers)) * totalWithCommish;
  }

  findImage(destinationID) {
    const destination = this.findDestinationByID(destinationID);
    return destination.image
  }

  findImageAlt(destinationID) {
    const destination = this.findDestinationByID(destinationID);
    return destination.alt
  }

  findIDByName(name) {
    return this.allDestinations.destinations.find(destination => destination.destination.toLowerCase().includes(name)).id;
  }
}


// destinationRepo: on event trigger, take in duration, num of travleers, and destination to calculate trip estimate from destinaton repo

// return that calculation here (need function
// return destination image here (need function)
export default DestinationsRepo;