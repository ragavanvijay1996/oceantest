const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    formName: {
        type: String,
    },
    formElements: [
        {
            type: {
                type: String,
            },
            placeholder: {
                type: String,
            },
            label: {
                type: String,
            },
            text: {
                type: String
            },
            color: {
                type: String
            },
            isRequired: {
                type: Boolean
            },
            options: [
               { type: String}
            ]
        }
    ],
    formClassName: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Form', formSchema);