const mongoose = require('mongoose')

const formDataSchema = new mongoose.Schema({

    createdAt: {
        type: Date,
        default: Date.now
    }
}, { strict: false })

module.exports = mongoose.model('data', formDataSchema);