const mongoose = require('mongoose') //import mongoose library for db connection

//format which will be use to store data on the database
const IntelSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true,
    },
    description : {
        type : String,
        require : true,
    },
    location : {
        type : String,
        require : true,
    },
    agentId : {
        type : String,
        require : true
    }
})

module.exports = mongoose.Model('Intel', IntelSchema) 

