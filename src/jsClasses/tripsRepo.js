class TripsRepo {
  constructor(tripsData) {
    this.allTrips = tripsData.trips;
  }

  filterTravelerTrips(travelerID) {
    return this.allTrips.filter(trip => trip.userID === travelerID);
  }
} 

export default TripsRepo;