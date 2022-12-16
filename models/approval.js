const mongoose = require('mongoose')

const approvalSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { strict: false })
module.exports = mongoose.model('approval', approvalSchema);