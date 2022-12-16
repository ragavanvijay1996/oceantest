const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    mobile: {
        type: Number,
        required: [true, 'Please enter your mobile number'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    dob: {
        type: String,
        required: [true, 'Please enter your date of birth'],
    },
    courseName: {
        type: String,
        required: [true, 'Please enter your course name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})



module.exports = mongoose.model('Staff', staffSchema);