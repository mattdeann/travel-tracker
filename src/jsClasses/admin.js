class Traveler {
  constructor() {
    this.username = "agency";
    this.password = "travel2021";
  }

  checkCredentials(username, password) {
    console.log(this.username)
    console.log(username)
    if (username == this.username && password == this.password) {
      return true;
    } else {
      return false;
    }
  }
}

export default Traveler;