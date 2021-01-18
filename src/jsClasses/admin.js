class Traveler {
  constructor() {
    this.username = "agency";
    this.password = "travel2021";
  }

  checkCredentials(username, password) {
    if (username === this.username && password === this.password) {
      return true;
    } else {
      return false;
    }
  }
}

export default Traveler;