class TripsRepo {
  constructor(trips) {
    this.allTrips = trips
  }

  filterTravelerTrips(travelerID) {
    return this.allTrips.trips.filter(trip => trip.userID === travelerID);
  }
} 

export default TripsRepo;