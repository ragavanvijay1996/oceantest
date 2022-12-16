const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('team', teamSchema);