const { Blogpost } = require('../models');

const blogpostData = [
  {
    userId: 1,
    content: "This is the first blog post!"
  }
];

const seedBlogposts = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogposts;
