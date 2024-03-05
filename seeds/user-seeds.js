const { User } = require('../models');

const userData = [
  {
    name: 'Maryna',
    password: '123456',
    email: 'test@gmail.com'
  },
];

const seedCategories = () => User.bulkCreate(userData);

module.exports = seedCategories;
