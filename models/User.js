const mongoose = require('mongoose')
const Post = require('./Post')
// used this site to help me with jwt https://www.loginradius.com/blog/engineering/nodejs-and-mongodb-application-authentication-by-jwt/
const userSchema = new mongoose.Schema({
    username: {
        type: String,
       
    },
    password: {
        type: String,
      
    },
    bio: {
        type: String,
        
    },
    image: {
        type: String,
       
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }
}, {
    toJSON: {virtuals: true}
})
userSchema.virtual('posts', {
    ref: 'Post',
    localField: "_id",
    foreignField: 'user'
})

userSchema.post('findOneAndDelete', async function () {
    await Post.deleteMany({user: this._conditions._id})
})
module.exports = mongoose.model("User", userSchema)