const mongoose = require('mongoose')
const Post = require('./Post')

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
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
})
//This virtual was not working for me during this project
// userSchema.virtual('posts', {
//     ref: 'Post',
//     localField: "_id",
//     foreignField:'user'
// })


userSchema.post('findOneAndDelete', async function () {
    await Post.deleteMany({user: this._conditions._id})
})
module.exports = mongoose.model("User", userSchema)