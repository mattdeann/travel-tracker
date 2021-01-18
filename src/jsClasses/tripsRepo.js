class TripsRepo {
  constructor(tripsData) {
    this.allTrips = tripsData.trips;
  }

  filterTravelerTrips(travelerID) {
    return this.allTrips.filter(trip => trip.userID === travelerID);
  }

  //TWo functions belo should have ANOTHER HELPER FUNCTION probs, CODE SMELLS BAD
  totalAnnualTripsCost(travelerID, year, destinationsRepo) {
    const annualTrips = this.allTrips.filter(trip => trip.userID === travelerID && trip.date.includes(year));

    return annualTrips.reduce((totalCost, trip) => {
      const tripCost = destinationsRepo.calcTripCost(trip.duration, trip.travelers, trip.destinationID);
      totalCost += tripCost;
      return totalCost;
    }, 0)
  }

  totalPendingTripsCost(travelerID, destinationsRepo) {
    const pendingTrips = this.allTrips.filter(trip => trip.userID === travelerID && trip.status === "pending");
    return pendingTrips.reduce((totalCost, trip) => {
      const tripCost = destinationsRepo.calcTripCost(trip.duration, trip.travelers, trip.destinationID);
      totalCost += tripCost;
      return totalCost;
    }, 0) 
  }
} 

export default TripsRepo;