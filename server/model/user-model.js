const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type : String,
        require: true,
    },
    email: {
        type : String,
        require: true,
    },
    gender: {
        type : String,
        require: true,
    },
    phone: {
        type : String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

// json web token
// should stored in client as a cookies or in local storage, not in database.

userSchema.methods.generateToken = function () {

} 





const User = new mongoose.model("User", userSchema);

module.exports = User;