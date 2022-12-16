const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: [true, 'Please enter course name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})



module.exports = mongoose.model('Course', courseSchema);