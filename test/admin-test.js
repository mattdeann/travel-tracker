import chai from 'chai';
const expect = chai.expect;

import Admin from '../src/jsClasses/admin'

describe('admin', function() {
  let admin;
  
  beforeEach(function() {
    admin = new Admin();
  })

  it('should be an instance of the Admin class', function() {
    expect(admin).to.be.an.instanceOf(Admin);
  })

  it('should hold credentials', function() {
    expect(admin).to.deep.equal({
      "username": "agency",
      "password": "travel2021"
    });
  })

  it('should be able to check if a username and password match its credentials', function() {
    expect(admin.checkCredentials("agency", "password2021")).to.equal(true);
    expect(admin.checkCredentials("agency", "password2019")).to.equal(false);
  })

});