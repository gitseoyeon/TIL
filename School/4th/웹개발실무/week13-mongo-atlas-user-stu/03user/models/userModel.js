// ./03user/models/userModel.js
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        name: String ,
        age: Number ,
        email: {
            type: String ,
            required: true
        } ,
    } ,
    {
        timestamps: true ,
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;