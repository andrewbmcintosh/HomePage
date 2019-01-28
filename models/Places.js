const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Places = new Schema({
    placeId:String,
    northeastLat: String,
    northeastLng: String,
    southwestLat: String,
    southwestLng: String
})

module.exports = mongoose.model('Places', Places)

