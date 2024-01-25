const {Blogpost, User} = require('../models')
const homeRouter = require('express').Router();

homeRouter.get('/', async (req, res) => {
    const blogposts = await Blogpost.findAll({})
    const users = await Users.findAll({})
    console.log(blogposts)
    res.render('home', {
        blogposts: blogposts.map(post => post.dataValues)
    })
})

module.exports = homeRouter