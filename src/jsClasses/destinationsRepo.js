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
    return this.allDestinations.find(destination => destination.destination.toLowerCase().includes(name.toLowerCase())).id;
  }
}

export default DestinationsRepo;