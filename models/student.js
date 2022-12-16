const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
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
    bloodGroup: {
        type: String,
        required: [true, 'Please enter your blood group'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    fatherName: {
        type: String,
        required: [true, 'Please enter your father name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    motherName: {
        type: String,
        required: [true, 'Please enter your mother name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    courseName: {
        type: String,
        required: [true, 'Please select your course name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    staffName: {
        type: String,
        required: [true, 'Please select your staff'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    address: {
        type: String,
        required: [true, 'Please enter your address'],
    },
    studentImgUrl:
    {
        type: String,
        required: [true, 'Please Upload Image'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})



module.exports = mongoose.model('Student', studentSchema);