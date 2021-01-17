import chai from 'chai';
const expect = chai.expect;

import TripsRepo from '../src/jsClasses/tripsRepo'

describe('TripsRepo', function() {
  let tripsRepo;
  
  beforeEach(function() {
    const tripData = {"trips": [
      {
        "id": 1,
        "userID": 1,
        "destinationID": 49,
        "travelers": 1,
        "date": "2019/09/16",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 2,
        "userID": 2,
        "destinationID": 25,
        "travelers": 5,
        "date": "2020/10/04",
        "duration": 18,
        "status": "pending",
        "suggestedActivities": []
      }
    ]}

    tripsRepo = new TripsRepo(tripData);
  })

  it('should be and instance of a TripsRepo', function() {
    expect(tripsRepo).to.be.an.instanceOf(TripsRepo);
  })

  it('should store trips data', function() {
    expect(tripsRepo.allTrips).to.deep.equal([
      {
        "id": 1,
        "userID": 1,
        "destinationID": 49,
        "travelers": 1,
        "date": "2019/09/16",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 2,
        "userID": 2,
        "destinationID": 25,
        "travelers": 5,
        "date": "2020/10/04",
        "duration": 18,
        "status": "pending",
        "suggestedActivities": []
      }
    ]);
  })

  it('should return all a travelers trips', function() {
    expect(tripsRepo.filterTravelerTrips(2)).to.deep.equal([{
      "id": 2,
      "userID": 2,
      "destinationID": 25,
      "travelers": 5,
      "date": "2020/10/04",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
    }]);
  })

});