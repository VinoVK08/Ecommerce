const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
{
    username: {type: String, required:true, unirue:true},
    email: {type: String, required:true, unirue:true},
    password: {type: String, required:true},
    isAdmin: {type: Boolean, default:false},

},
{timestamps:true});

module.exports = mongoose.model("user", userSchema)