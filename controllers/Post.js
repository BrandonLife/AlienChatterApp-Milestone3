const router = require('express').Router()
const Post = require('../models/Post')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
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
          req.user= decoded.username
        }
        next()
      } )
    }
  }
// Get new post page
router.get('/new/:username', verifyUser, async (req, res) => {
    const {username}= req.params
    res.render('newPost', {user:req.user, username: username})
})
// Get home page
router.get('/home', verifyUser, (req, res) => {
  res.render('Home', {user: req.user})
})
// Get all posts
router.get('/blog/:username', verifyUser, async (req, res) => {
  const { username } = req.params
  console.log(username)
  const user = await User.findOne({username})
  // console.log(user, "user")
  // const id = user._id
  // const foundUser = await User.findById(id).populate('posts')
  const posts = await Post.find({user})
  console.log(posts, "posts of all posts route")
  res.render('Blog', {posts, user:req.user})
})


// Get about page
router.get('/about',verifyUser,(req, res) => {
  res.render('About', {user: req.user})
})

// Get contact page
router.get('/contact', verifyUser, (req, res) => {
  res.render('Contact', {user: req.user})
})
// Get a specific post page
router.get('/:id', verifyUser, async (req, res)=> {
    const { id } = req.params
  const post = await Post.findById(id).populate('user')
    res.render('SpecificPost', {post, user:req.user})
})

router.get('/:id/edit', verifyUser, async (req, res) => {
    const { id } = req.params
    let post = await Post.findById(id)
    res.render('editPost', {post, user:req.user})
})
// Create a post- i used alot of resources for this but mainly this helped me https://chat.openai.com/c/f65ac2f2-cb77-4751-9946-e8b654b29811
router.post('/:username', verifyUser, async (req, res) => {
  const {username}= req.params
  const user = await User.findOne({ username: req.params.username }).populate('posts')
  req.body.id = user._id
  const foundUser = await User.findById(req.body.id)
  const post = new Post({
    author: req.body.author,
    title: req.body.title,
    subject: req.body.subject,
    description: req.body.description,
    image: req.body.image,
    dateMade: req.body.dateMade,
    user: foundUser._id
  })

  console.log(foundUser)
  await post.save()
    res.status(303).redirect(`/posts/blog/${username}`)
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
    res.status(303).redirect('/posts/blog/home')
})
module.exports = router