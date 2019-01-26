const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Places = new Schema({
    name: String,
    address: String,
    longitude: String,
    latitude: String,
    bias: String,
    statusType: String
})

module.exports = mongoose.model('Places', Places)

