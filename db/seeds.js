const Member = require('../models/Member')
const Places = require('../models/Places')
const mongoose = require('./connections')

const hogwarts = new Places({
    name: 'Hogwarts',
    address: 'Hogwarts Castle, Highlands, Scotland, Great Britain',
    longitude: `56°41'21.7"N`,
    latitude: `5°06'24.1"W`,
    bias: '1',
    statusType: 'School'
})

const theBurrow = new Places({
    name: 'theBurrow',
    address: 'The Burrow, Highlands, Scotland, Great Britain',
    longitude: `56°41'21.7"N`,
    latitude: `5°06'24.1"W`,
    bias: '1',
    statusType: 'School'
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