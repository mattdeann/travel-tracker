import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/jsClasses/traveler'

describe('Traveler', function() {
  let travelerData;
  let traveler;
  
  beforeEach(function() {
    travelerData = {
      "id": 1,
      "name": "Ham Leadbeater",
      "travelerType": "relaxer",
    };

    traveler = new Traveler(travelerData);
  })

  it('should be an instance of the Traveler class', function() {
    expect(traveler).to.be.an.instanceOf(Traveler);
  })

  it('should store traveler data', function() {
    expect(traveler).to.deep.equal({
      "id": 1,
      "name": "Ham Leadbeater",
      "travelerType": "relaxer",
    });
  })

});