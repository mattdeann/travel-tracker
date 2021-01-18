class TravelersRepo {
  constructor(data) {
    this.allTravelers = data.travelers;
  }

  checkForID(username) {
    return this.allTravelers.find(traveler => traveler.id === username);
  }

}

export default TravelersRepo;