# Travel Tracker
<!-- TABLE OF CONTENTS -->

Project Link: [https://github.com/mattdeann/travel-tracker](https://github.com/mattdeann/travel-tracker)

## Table of Contents

* [About the Project](#about-the-project)
* [Lanugages Used](#languages-used)
* [Getting Started](#getting-started)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)


<!-- ABOUT THE PROJECT -->
## About The Project

This project demonstrates front end development skills acquired during Module 2 of Turing. It's purpose was to design an immersive, functional website using more advanced Vanilla JS skills aquired during Mod 2, as well as showcasing the higher level concepts of connecting to a server using an API, using a CSS styling library (SCSS/SASS), writing thorough tests, and utilizing webpack to help organize file structure.

The project itself was based on building a travel agencies front end, where a traveler is able to log in and can request trips and view all of their information. A travel agent (administrator) is also able to login and either approve or deny trip requests. I ended up using single page styling to achieve these "multiple pages".

### Languages Used

* HTML
* CSS / SCSS & SASS
* JavaScript
* Mocha / Chai (testing)
* Webpack (compiling)
* Node (dependency management)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.


### Prerequisites
* npm
```sh
npm install npm@latest -g
```
* Some browser

### Installation

1. Clone the repo
```sh
git clone https://github.com/mattdeann/travel-tracker.git
```
2. Move into travel-tracker repo

3. Install NPM packages
```sh
npm install
```
4. Start the app
```sh
npm start
```

4. In a browser tab, open the app
```
http://localhost:8080/
```

<!-- USAGE EXAMPLES -->
## Usage

### Login

  * A traveler or agency are able to login
  * All accounts use `travel2021` as a password
  * Travelers should be formatted as `traveler##` or `traveler#` where # are an integer
  ![Login](https://s2.gifyu.com/images/2021-01-19-17.48.09.gif)



### Plan a Trip / Send a Request
  
  * A traveler can input a desired trip
  * If the trip request is valid, the traveler is able to book the trip
  * The trip will then display in their main view as pending
  ![Trip Request](https://s2.gifyu.com/images/2021-01-19-17.42.28.gif)


  

### Admins can approve / deny requests
  * On admin login, all pending trips are displayed
  * Admins are able to approve or delete the requests after clicking on one to expand it
  ![Approve / Deny Requests](https://s2.gifyu.com/images/2021-01-19-17.43.26.md.gif)


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/mattdeann/travel-tracker/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature-amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature-amazing-feature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Name - [Matthew Dean](deanma95@gmail.com)

Project Link: [https://github.com/mattdeann/travel-tracker](https://github.com/mattdeann/travel-tracker)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

  * David Whitaker - Project manager - hi David!
