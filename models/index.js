const User = require('./User');
const Experience = require('./Experience');
const UserExperience = require('./UserExperience');
const Review = require('./Review');


User.belongsToMany(Experience, {
  // Define the third table needed to store the foreign keys
  through: {
    model: UserExperience,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'user_experience'
});

Experience.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: UserExperience,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'experience_user'
});

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Experience, Review };