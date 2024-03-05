const router = require('express').Router();
// const categoryRoutes = require('./category-routes');
const blogpostRoutes = require('./blogpostRoutes');
const userRoutes = require('./userRoutes');
// const tagRoutes = require('./tag-routes');

// router.use('/categories', categoryRoutes);
router.use('/blogposts', blogpostRoutes);
router.use('/users', userRoutes);
// router.use('/tags', tagRoutes);

module.exports = router;
