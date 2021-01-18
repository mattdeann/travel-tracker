class TripsRepo {
  constructor(tripsData) {
    this.allTrips = tripsData.trips;
  }

  filterTravelerTrips(travelerID) {
    return this.allTrips.filter(trip => trip.userID === travelerID);
  }

  totalAnnualTripsCost(travelerID, year, destinationsRepo) {
    const annualTrips = this.allTrips.filter(trip => trip.userID === travelerID && trip.date.includes(year));

    return annualTrips.reduce((totalCost, trip) => {
      const tripCost = destinationsRepo.calcTripCost(trip.duration, trip.travelers, trip.destinationID);
      totalCost += tripCost;
      return totalCost;
    }, 0)
  }
} 

export default TripsRepo;