const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
// used this site to help me with jwt https://www.loginradius.com/blog/engineering/nodejs-and-mongodb-application-authentication-by-jwt/
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }


})


module.exports = mongoose.model("User", userSchema)