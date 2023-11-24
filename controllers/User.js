const router = require('express').Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
let user= false

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


//Get register page
router.get('/registration', (req, res) => {
    res.render('Register')
})

//Get the login page
router.get('/userlogin', (req, res) => {
    res.render('Login')
})


// Get a specific user 

router.get('/:id', verifyUser,  async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id).populate('posts')
    res.render('oneUser', {user, oneUser: req.user, userId: id})
})

// Got this idea from chatgpt
router.post('/logout', (req, res) => {
  req.user = false
  res.clearCookie('token')
 res.redirect('/users/userlogin')
})


//Create new user, info from https://blog.bitsrc.io/how-to-use-jwt-for-authentication-and-create-a-login-system-in-node-js-and-mongodb-83bb852e777a
router.post('/register', async (req, res) => {
    const { username, bio, image, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    await User.create({
        username: username,
        bio: bio,
        image: image,
        password: hashedPassword
  })
    console.log(req.body, "req.body")
    // await User.create(req.body)
    res.status(303).redirect('/posts/')
})

//Login post route - https://blog.bitsrc.io/how-to-use-jwt-for-authentication-and-create-a-login-system-in-node-js-and-mongodb-83bb852e777a
router.post('/login', async (req, res) => {
  const { username, password } = req.body
    // Find user by username
    const user = await User.findOne({username})
    
    if (!user) {
        // If the user doesn't exist, return an error
        return res.status(401).send('Invalid username or password');
      }
    
      // Check if password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
    
      if (!isPasswordCorrect) {
        // If the password is incorrect, return an error
        return res.status(401).send('Invalid username or password');
    }
    
     // If the email and password are correct, create a JWT token
  // Secrete Key saved in .env file
    const mysecretkey = process.env.SECRET_CODE;

    // Payload to generate JWT
  const payload = {
    username: user.username,
    password: user.password,
  };
  // Create a jsonwebtoken that expires in 5 days
  const token = jwt.sign(payload, mysecretkey, { expiresIn: '5d' });
  // The following local code is from https://stackoverflow.com/questions/52474208/react-localstorage-is-not-defined-error-showing
  // I found out the cookie res.cooke from this youtube channel https://www.youtube.com/watch?v=yHdkG33l7tQ
  res.cookie('token', token)
  // Send the token back to the client
  console.log("User logged in")
  res.status(200).redirect('/posts/')
})


//Edit User
router.put('/:id', verifyUser, async (req, res) => {
    const { id } = req.params
    let user = await User.findById(id)
    res.render('UserEdit', {user})
})

//Delete User
router.delete('/:id', verifyUser, async (req, res) => {
    const { id } = req.params
    await User.findByIdAndDelete(id)
    res.redirect('/users')
})

module.exports= router