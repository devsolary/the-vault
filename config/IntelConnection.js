//logic to connect to database
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/the-vault').then(() => console.log("dbconnected"))