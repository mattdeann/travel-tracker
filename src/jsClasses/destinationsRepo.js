class DestinationsRepo {
  constructor(data) {
    this.allDestinations = data.destinations;
  }

  findDestinationByID(destinationID) {
    return this.allDestinations.find(destination => destination.id === destinationID);
  }

  calcTripCost(duration, travelers, destinationID) {
    const destination = this.findDestinationByID(destinationID);

    const totalWithCommission = ((destination.estimatedLodgingCostPerDay * duration) + (destination.estimatedFlightCostPerPerson * travelers)) * 1.1;

    return parseInt(totalWithCommission.toFixed(2));
  }

  findIDByName(name) {
    const desiredDestination = this.allDestinations.find(destination => destination.destination.toLowerCase().includes(name.toLowerCase()));
    
    if (desiredDestination === undefined) {
      return undefined;
    } else {
      return desiredDestination.id;
    }
  }
}

export default DestinationsRepo;