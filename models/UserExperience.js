const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our UserExperience model
class UserExperience extends Model {}

// create fields/columns for UserExperience model
UserExperience.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false
      }
    },
    experience_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'experience',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userexperience'
  }
);

module.exports = UserExperience;
