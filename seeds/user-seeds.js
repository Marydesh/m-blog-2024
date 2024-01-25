const { User } = require('../models');

const userData = [
  {
    username: 'Maryna',
    password: '123456'
  },
];

const seedCategories = () => User.bulkCreate(userData);

module.exports = seedCategories;
