const mongoose = require("mongoose");

const User = mongooose.model("User",
    new mongoose.Schema({
       username : String,
       email : String,
       password : String, 
       roles : [{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Role'
       }]
    })

);

module.exports - User;