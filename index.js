//Dependencies
const express = require("express");
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose")
require("dotenv").config();
const userController = require('./controllers/User')
const postController = require('./controllers/Post')
const app = express()

//Middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.static("public"));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//routes
app.use('/users', userController)
app.use('/posts', postController)


//Mongo DB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));
const PORT = process.env.PORT;

app.listen(PORT, console.log(`Listening on port ${PORT}`));