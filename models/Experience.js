const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Experience extends Model {}

Experience.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    provider_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
    },
    city: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'experience',
  }
);

module.exports = Experience;
