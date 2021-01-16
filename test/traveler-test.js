import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/css/jsClasses/traveler'

describe('See if the tests are running', function() {
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


  it('should store traveler data', function() {
    expect(traveler).to.be.an.instanceOf(Traveler);
    expect(traveler).to.deep.equal({
      "id": 1,
      "name": "Ham Leadbeater",
      "travelerType": "relaxer",
    });
  })

  

});