const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    author: String,
    title: String,
    subject: String,
    description: String,
    image: String,
    dateMade: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

module.exports = mongoose.model("Post", postSchema)