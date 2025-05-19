const mongoose = require("mongoose")

const AgentSchema = new mongoose.Schema({
    username : {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    }
})

const Agent = mongoose.model("Agent", AgentSchema)
module.exports = Agent