// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Blogpost model (table) by extending off Sequelize's Model class
class Blogpost extends Model {}

// set up fields and rules for Blogpost model
Blogpost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      refereneces: {
        model: 'user',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.STRING,
      notNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogpost',
  }
);

module.exports = Blogpost;
