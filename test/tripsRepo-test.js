import chai from 'chai';
const expect = chai.expect;

import DestinationsRepo from '../src/jsClasses/destinationsRepo';
import TripsRepo from '../src/jsClasses/tripsRepo';

describe('TripsRepo', function() {
  let tripsRepo;
  let destinationsRepo;
  
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
        "destinationID": 2,
        "travelers": 5,
        "date": "2020/10/04",
        "duration": 18,
        "status": "pending",
        "suggestedActivities": []
      }
    ]}
    const destinationsData = {"destinations": [
      {
        "id": 2,
        "destination": "Stockholm, Sweden",
        "estimatedLodgingCostPerDay": 100,
        "estimatedFlightCostPerPerson": 780,
        "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "city with boats on the water during the day time"
      } 
    ]};

    tripsRepo = new TripsRepo(tripData);
    destinationsRepo = new DestinationsRepo(destinationsData);
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
        "destinationID": 2,
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
      "destinationID": 2,
      "travelers": 5,
      "date": "2020/10/04",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
    }]);
  })

  it('should return all a travelers annual trips', function() {
    expect(tripsRepo.totalAnnualTripsCost(2, 2020, destinationsRepo)).to.equal(6270);
  })

  it('should return the total for pending trips', function() {
    expect(tripsRepo.totalPendingTripsCost(2, destinationsRepo)).to.equal(6270);
  })
  it('should return all pending trips', function() {
    expect(tripsRepo.filterPendingTrips()).to.deep.equal([{
      "id": 2,
      "userID": 2,
      "destinationID": 2,
      "travelers": 5,
      "date": "2020/10/04",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
    }]);
  })

});