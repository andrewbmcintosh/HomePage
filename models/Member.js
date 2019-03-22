const mongoose = require('../db/connections');
const Schema = mongoose.Schema;

const Member = new Schema({
  _id: String,
  name: String,
  icon: String,
  currentStatus: String,
  timeSincePing: Number,
  places: [
    // going to change model so that it actually contains the object places
    // that may break everything

    {
      type: Schema.Types.ObjectId,
      ref: 'Places'
    }
  ]
});

module.exports = mongoose.model('Member', Member);
