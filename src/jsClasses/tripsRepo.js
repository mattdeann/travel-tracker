class TripsRepo {
  constructor(tripsData) {
    this.allTrips = tripsData.trips;
  }

  filterTravelerTrips(travelerID) {
    return this.allTrips.filter(trip => trip.userID === travelerID);
  }

  filterPendingTrips() {
    return this.allTrips.filter(trip => trip.status === "pending");
  }


  // THIS NEEDS A TEST
  findTripByTripID(tripID) {
    return this.allTrips.find(trip => trip.id === parseInt(tripID));
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

  totalAnnualCommission(year, destinationsRepo) {
    const annualAdminTrips = this.allTrips.filter(trip => trip.date.includes(year) && trip.status === "approved");

    return annualAdminTrips.reduce((totalCost, trip) => {
      const tripCost = destinationsRepo.calcTripCost(trip.duration, trip.travelers, trip.destinationID);
      totalCost += tripCost;
      return totalCost * 0.1;
    }, 0)
  }

  filterTripsToday(date) {
    return this.allTrips.filter(trip => trip.date === date);
  }
} 

export default TripsRepo;