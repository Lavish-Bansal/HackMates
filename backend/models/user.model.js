const mongoose = require("mongoose")

/**
 * name
 * email
 * password
 */

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
}, {timestamps : true, versionKey : false})

module.exports = mongoose.model("User", userSchema)