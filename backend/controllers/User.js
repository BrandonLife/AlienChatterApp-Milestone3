const router = require('express').Router()
const User = require('../models/User')


//Get register page
router.get('/registration', (req, res) => {
    res.render('Register')
})

//Get the login page
router.get('/userlogin', (req, res) => {
    res.render('Login')
})
//Create new user
router.post('/', async (req, res) => {
    await User.create(req.body)
    res.status(303).redirect('/users')
})

//Get a specific user
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    res.render('Home', {user})
})

//Edit User
router.put('/:id', async (req, res) => {
    const { id } = req.params
    let user = await User.findById(id)
    res.render('UserEdit', {user})
})

//Delete User
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await User.findByIdAndDelete(id)
    res.redirect('/users')
})

module.exports= router