// import models
const Blogpost = require('./Blogpost');
const User = require('./User');
// const Tag = require('./Tag');
// const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

User.hasMany(Blogpost)
Blogpost.belongsTo(User)

module.exports = {
  Blogpost,
  User,
  // Tag,
  // ProductTag,
};


// npm i 