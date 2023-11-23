const router = require('express').Router()
const Post = require('../models/Post')
const jwt = require('jsonwebtoken')
let user = false

// We need to verify the user- https://www.youtube.com/watch?v=yHdkG33l7tQ
const verifyUser = (req, res, next) => {
    const token = req.cookies.token
    const mysecretkey = process.env.SECRET_CODE;
    if (!token) {
      res.status(401).render('Home')
    } else {
      jwt.verify(token, mysecretkey, (err, decoded) => {
        if (err) {
          // Found these two lines from chatgpt
          res.clearCookie('token')
          req.user= user
        } else {
          console.log(decoded, 'decoded')
          req.user= decoded.username
        }
        next()
      } )
    }
  }
// Get new post page
router.get('/new', verifyUser, async (req, res) => {
    res.render('newPost', {user:req.user})
})
// Get all posts
router.get('/blog', verifyUser,  async (req, res) => {
    const posts = await Post.find()
    res.render('Blog', {posts, user:req.user})
})
// Get a specific post page
router.get('/:id', verifyUser, async (req, res)=> {
    const { id } = req.params
    const post = await Post.findById(id)
    res.render('SpecificPost', {post, user:req.user})
})

router.get('/:id/edit', verifyUser, async (req, res) => {
    const { id } = req.params
    let post = await Post.findById(id)
    res.render('editPost', {post, user:req.user})
})
// Create a post
router.post('/', verifyUser, async (req, res) => {
    await Post.create(req.body)
    res.status(303).redirect('/posts/blog')
})
// Update Post
router.put('/:id', verifyUser, async (req, res) => {
    const { id } = req.params
    await Post.findByIdAndUpdate(id, req.body)
    res.status(303).redirect(`/posts/${id}`)
})
// Delete a Post
router.delete('/:id', verifyUser, async (req, res) => {
    const { id } = req.params
    await Post.findByIdAndDelete(id)
    res.status(303).redirect('/posts/blog')
})
module.exports = router