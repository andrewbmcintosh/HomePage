const Member = require('../models/Member')
const Places = require('../models/Places')
const mongoose = require('./connections')

const hogwarts = new Places({
    placeId:"ChIJ6XsskRAE9YgRNM61OjUUUSc",
    northeastLat: "33.7732172",
    northeastLng: "-84.3648267",
    southwestLat: "33.7716194",
    southwestLng: "-84.3668105",
    // statusType: 'School'
})

const theBurrow = new Places({
    placeId:"ChIJ6XsskRAE9YgRNM61OjUUUSc",
    northeastLat: "33.7732172",
    northeastLng: "-84.3648267",
    southwestLat: "33.7716194",
    southwestLng: "-84.3668105",
    // statusType: 'School'
})
const ginny = new Member({
    name: 'Ginny',
    icon: 'media/workIcon.png',
    currentStatus: 'work',
    timeSincePing: 60,
    places: [hogwarts, theBurrow]
})

Member.remove({})
    .then(() => Places.remove({}))
    .then(() => Places.insertMany([hogwarts, theBurrow]))
    .then(() => ginny.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())