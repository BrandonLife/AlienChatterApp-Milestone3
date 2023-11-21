const router = require('express').Router()
const Post = require('../models/Post')

// Get new post page
router.get('/new', async (req, res) => {
    res.render('newPost')
})
// Get all posts
router.get('/blog', async (req, res) => {
    const posts = await Post.find()
    res.render('Blog', {posts})
})
// Get a specific post page
router.get('/:id', async (req, res)=> {
    const { id } = req.params
    const post = await Post.findById(id)
    res.render('SpecificPost', {post})
})

router.get('/:id/edit', async (req, res) => {
    const { id } = req.params
    let post = await Post.findById(id)
    res.render('editPost', {post})
})
// Create a post
router.post('/', async (req, res) => {
    await Post.create(req.body)
    res.status(303).redirect('/posts/blog')
})
// Update Post
router.put('/:id', async (req, res) => {
    const { id } = req.params
    await Post.findByIdAndUpdate(id, req.body)
    res.status(303).redirect(`/posts/${id}`)
})
// Delete a Post
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await Post.findByIdAndDelete(id)
    res.status(303).redirect('/posts/blog')
})
module.exports = router