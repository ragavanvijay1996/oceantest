const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    departmentName: {
        type: String,
    },
    departmentList: [
        {
            listName: {
                type: String,
            },
            type: {
                type: String
            },
            formId: {
                type: String,
            }
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('department', departmentSchema);