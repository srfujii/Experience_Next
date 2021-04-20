const sequelize = require('../config/connection');
const { Experience, Review, User } = require('../models');

const experienceData = require('./Experiences.json');
const userData = require('./userData.json');
const reviewData = require('./Review.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const experience = await Experience.bulkCreate(experienceData, {
    individualHooks: true,
    returning: true,
  });

  const user = await User.bulkCreate(userData, {
    returning: true,
  });

  const reviews = await Review.bulkCreate(reviewData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
