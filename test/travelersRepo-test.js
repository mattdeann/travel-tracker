import chai from 'chai';
const expect = chai.expect;

import TravelersRepo from '../src/jsClasses/travelersRepo';

describe('Traveler', function() {
  let travelersRepoData;
  let travelersRepo;
  
  beforeEach(function() {
    travelersRepoData = {"travelers": [
      {
        "id": 1,
        "name": "Ham Leadbeater",
        "travelerType": "relaxer"
      },
      {
        "id": 2,
        "name": "Rachael Vaughten",
        "travelerType": "thrill-seeker"
      }
    ]};

    travelersRepo = new TravelersRepo(travelersRepoData);
  })

  it('should be an instance of the Traveler class', function() {
    expect(travelersRepo).to.be.an.instanceOf(TravelersRepo);
  })

  it('should store traveler data', function() {
    expect(travelersRepo.allTravelers).to.deep.equal([
      {
        "id": 1,
        "name": "Ham Leadbeater",
        "travelerType": "relaxer"
      },
      {
        "id": 2,
        "name": "Rachael Vaughten",
        "travelerType": "thrill-seeker"
      }]);
  })

  it('should return a traveler by ID', function() {
    expect(travelersRepo.checkForID(1)).to.deep.equal({
      "id": 1,
      "name": "Ham Leadbeater",
      "travelerType": "relaxer"
    });
  })
});