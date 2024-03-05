const router = require('express').Router();
const { Blogpost } = require('../../models');

// The `/api/blogposts` endpoint

// get all blogposts
router.get('/', (req, res) => {


});

// get one blogpost
router.get('/:id', (req, res) => {


});

// create new blogpost
router.post('/', async (req, res) => {
  const { title, content } = req.body
  try {
    const newPost = await Blogpost.create({ 
      title, 
      content,
      user_id: req.session.user_id
    })
    res.status(200).send("Success!")
  } catch (error) {
    console.log("Error creating post:", error)
    res.status(500).json(error)
  }
});

// update blogpost
router.put('/:id', (req, res) => {

});

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const post = await Blogpost.findByPk(id)
    await post.destroy()
    res.send("Success")
  } catch (error) {
    console.log("Error destroying post:", error)
    res.status(500).json(error)
  }
});

module.exports = router;
