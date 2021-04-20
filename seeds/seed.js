const sequelize = require('../config/connection');
const { Experience, User, UserExperience } = require('../models');

const experienceData = require('./Experiences.json');
const userData = require('./userData.json');
const userExperienceData = require('./UserExperience.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const experience = await Experience.bulkCreate(experienceData, {
    individualHooks: true,
    returning: true,
  });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // const reviews = await Review.bulkCreate(reviewData, {
  //   returning: true,
  // });

  const userexperience = await UserExperience.bulkCreate(userExperienceData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
