const {Blogpost, User} = require('../models')
const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogposts = await Blogpost.findAll({})
    const users = await User.findAll({})
    // console.log(blogposts)
    res.render('homepage', {
        blogposts: blogposts.map(post => post.dataValues).reverse(),
        logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogpost/:id', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogpost = blogpostData.get({ plain: true });

    res.render('blogpost', {
      ...blogpost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  console.log('hit the /profile mw')
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blogpost }],
    });
    console.log(`userData:`, userData)

    const user = userData.get({ plain: true });

    console.log(`user:`, user)

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
