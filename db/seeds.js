const Member = require('../models/Member')
const Places = require('../models/Places')
const mongoose = require('./connections')

const hogwarts = new Places({
    // Ponce City Market
    // test coordinates: 33.772597,-84.365541
    placeId:"ChIJ6XsskRAE9YgRNM61OjUUUSc",
    northeastLat: "33.7732172",
    northeastLng: "-84.3648267",
    southwestLat: "33.7716194",
    southwestLng: "-84.3668105",
    // statusType: 'School'
})

const theBurrow = new Places({
    // Eats
    // test coordinates: 33.773674,-84.367225
    placeId:"ChIJWW5lNxEE9YgRtTaQCoSyw38",
    northeastLat: "33.775023",
    northeastLng: "-84.365876",
    southwestLat: "33.772325",
    southwestLng: "-84.368574",
    // statusType: 'School'
})
const ginny = new Member({
    name: 'Ginny',
    icon: 'media/workIcon.png',
    currentStatus: 'school',
    timeSincePing: 60,
    places: [hogwarts, theBurrow]
})

// need to 
const ministryOfMagic = new Places({
    // 780 St. Charles Ave NE
    // test coordinates: 33.775913,-84.36165
    placeId:"ChIJT6gbDxkE9YgRrDmAh7nX7TE",
    northeastLat: "33.775976",
    northeastLng: "-84.361605",
    southwestLat: "33.775633",
    southwestLng: "-84.361702",
    // statusType:
})

const quidditchPitch = new Places({
    // the Local
    // test coordinates: 33.774146,-84.362297
    placeId:"ChIJJzeNgBkE9YgRKtsmc0byJE0",
    northeastLat: "33.774208",
    northeastLng: "-84.362194",
    southwestLat: "33.773998",
    southwestLng: "-84.362371",
    // statusType:
})
const ron = new Member({
    name: 'Ron',
    icon: 'media/workIcon.png',
    currentStatus: 'work',
    timeSincePing: 30,
    places: [ministryOfMagic, quidditchPitch]
})

Member.remove({})
    .then(() => Places.remove({}))
    .then(() => Places.insertMany([hogwarts, theBurrow]))
    .then(() => ginny.save())
    .then(() => Places.insertMany([ministryOfMagic, quidditchPitch]))
    .then(() => ron.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())