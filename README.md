# Experience Next Full Stack App ...connecting you to next-level experiences
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description

  This full stack web application is a service based web application used to help users find certain services provided by approved service providers.  It follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. The MYSQL database itself is made up of four tables, User, Experiences, Review and User Experiences, each of which are modeled using sequelize and interacted with using our Express api routes. 

  Users can sign in and use the drop down menu to select which "Experience" they would like.  Once the experience is chosen, the user will then be provided a list of all the service providers under that category.  The user can then choose a service provider and book a time slot with them.  


  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Screenshots](#screenshots)
  * [License](#license)
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)
 
  ## Installation

  This app is deployed live on heroku, and you can see it live at: 
  
  [Live Deployed Application](https://fathomless-citadel-02367.herokuapp.com/)
  
  To install locally, do the following: 
  
  To install necessary dependencies, run the following command:

  ```
  npm i
  ```

  This app comes with a .env file which you should edit to reflect your personal/local database credentials and save. Then, to recreate the sample database on your local instance of mysql, run ./db/schema.sql which will create the necessary techblog_db in mysql for you. Finally, to seed the database with sample data, run:

  ```
  node seeds/seed.js
  ```

  To start the application, run:

  ```
  node server
  ```


  ## Usage

  This is a student repo.


  ## Screenshots

  ![Screenshot](./public/img/image1.png)
  ![Screenshot](./public/img/image2.png)
  ![Screenshot](./public/img/image3.png)
  ![Screenshot](./public/img/image4.png)
  ![Screenshot](./public/img/image5.png)
  ![Screenshot](./public/img/image6.png)
  ![Screenshot](./public/img/image7.png)
  ![Screenshot](./public/img/image8.png)

  ## Wireframes
  
  ![image](https://github.com/srfujii/Experience_Next/blob/main/public/img/Experience%20Next%20Screen%20Shot.png)
  ![image](https://github.com/srfujii/Experience_Next/blob/main/public/img/Experience%20Next%20routes%20continued.png)
  ![image](https://github.com/srfujii/Experience_Next/blob/main/public/img/Experience%20Next%20routes.png)

  ## License

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.


  ## Contribute

  Contributions are always welcome! (Please fork and pull request only.)


  ## Tests

  To run tests, run the following command: 

  ```
  npm test
  ```

  ## Questions

  If you have any questions about the repo, open an issue or contact one of us directly at:

  1. George Huliaris: georgehuliaris@me.com  [georgehuliaris](https://github.com/georgehuliaris)
  2. Matt Miller: matt.r.miller09@gmail.com  [Millmr](https://github.com/Millmr)
  3. Susan Fujii: susan.fujii@me.com. [srfujii](https://github.com/srfujii/)

  You can find more samples of our work on our individual github pages above.
