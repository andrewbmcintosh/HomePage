const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Member = new Schema({
    name: String,
    icon: String,
    currentStatus: String,
    timeSincePing: Number,
    places: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Places'
        }
    ]
})

module.exports = mongoose.model('Member', Member)