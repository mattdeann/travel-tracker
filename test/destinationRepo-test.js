import chai from 'chai';
const expect = chai.expect;

import DestinationsRepo from '../src/jsClasses/destinationsRepo';


describe('destinationsRepo', function() {
  let destinationsRepo;

  beforeEach(function() {
    const destinationsData = {"destinations": [
      {
        "id": 1,
        "destination": "Lima, Peru",
        "estimatedLodgingCostPerDay": 70,
        "estimatedFlightCostPerPerson": 400,
        "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        "alt": "overview of city buildings with a clear sky"
      },
      {
        "id": 2,
        "destination": "Stockholm, Sweden",
        "estimatedLodgingCostPerDay": 100,
        "estimatedFlightCostPerPerson": 780,
        "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "city with boats on the water during the day time"
      } 
    ]};
    destinationsRepo = new DestinationsRepo(destinationsData);
  })

  it('should be and instance of a DestinationsRepo', function() {
    expect(destinationsRepo).to.be.an.instanceOf(DestinationsRepo);
  })

  it('should store destinations data', function() {
    expect(destinationsRepo.allDestinations).to.deep.equal([
      {
        "id": 1,
        "destination": "Lima, Peru",
        "estimatedLodgingCostPerDay": 70,
        "estimatedFlightCostPerPerson": 400,
        "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        "alt": "overview of city buildings with a clear sky"
      },
      {
        "id": 2,
        "destination": "Stockholm, Sweden",
        "estimatedLodgingCostPerDay": 100,
        "estimatedFlightCostPerPerson": 780,
        "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "city with boats on the water during the day time"
      } 
    ]);

    it('should return a destination object when given a destination ID', function() {
      expect(destinationsRepo.findDestinationByID(1)).to.deep.equal(
        {
          "id": 1,
          "destination": "Lima, Peru",
          "estimatedLodgingCostPerDay": 70,
          "estimatedFlightCostPerPerson": 400,
          "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
          "alt": "overview of city buildings with a clear sky"
        }
      );
    })
  })
  
  it('should calculate the cost of a trip given the duration, number of travelers, and destination ID', function() {
    const duration = 1;
    const travelers = 2;
    const destinationID = 1;
    expect(destinationsRepo.calcTripCost(duration, travelers, destinationID)).to.equal(957);
  })

  it('should find a destinations ID given a partial name', function() {
    expect(destinationsRepo.findIDByName('lima')).to.equal(1);
  })

});