const { default: mongoose, Schema } = require("mongoose")

module.exports = mongoose.model("users",mongoose.Schema({
    name: String,
    email: String,
    password: String,
    creator:{
        type: String,

    }
},{timwstamps: true}));
