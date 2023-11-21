const router = require('express').Router()
const Post = require('../models/Post')

// Get new post page
router.get('/new', async (req, res) => {
    res.render('newPost')
})
router.get('/blog', async (req, res) => {
    const posts = await Post.find()
    res.render('Blog', {posts})
})

router.post('/', async (req, res) => {
    await Post.create(req.body)
    res.status(303).redirect('/posts/blog')
})


module.exports = router