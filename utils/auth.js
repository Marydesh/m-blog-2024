// https://www.npmjs.com/package/express-session
const withAuth = (req, res, next) => {
  console.log(`req.session:`, req.session)
  console.log(`req.session.logged_in:`, req.session.logged_in)
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
