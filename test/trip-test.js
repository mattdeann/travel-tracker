import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/trips/trip'

describe('See if the tests are running', function() {
  let tripData;
  let trip;
  

  beforeEach(function() {
    tripData = {
      "id": 1,
      "userID": 44,
      "destinationID": 49,
      "travelers": 1,
      "date": "2019/09/16",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": []
    };

    trip = new Trip(tripData);
  })


  it('should store trip data', function() {
    expect(trip).to.be.an.instanceOf(Trip);
    expect(trip).to.deep.equal({
      "id": 1,
      "userID": 44,
      "destinationID": 49,
      "travelers": 1,
      "date": "2019/09/16",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": []
    });
  })

  

});