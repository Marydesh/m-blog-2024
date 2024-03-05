const { Blogpost } = require('../models');

const blogpostData = [
  {
    user_id: 1,
    content: "This is the first blog post!",
    title:'New title'
  }
];

const seedBlogposts = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogposts;
