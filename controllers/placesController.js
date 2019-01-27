const Member = require('../models/Member')
const Places = require('../models/Places')

// using boilerplate routes to seed the file and will start seeing what JSON
// data the google places API sends back


const placesController = {
    index: (req, res) => {
        var memberId = req.params.memberId
        Member.findById(memberId).populate('places')
            .then((member) => {
                res.send(member.places)
            })
    },
    show: (req, res) => {
        var placeId = req.params.placeId
        Places.findById(placeId)
            .then((place) => {
                res.send(place)
            })
    },
    delete: (req, res) => {
        var placeId = req.params.placeId
        Places.findByIdAndDelete(placeId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var placeId = req.params.placeId
        Places.findByIdAndUpdate(placeId, req.body, { new: true })
            .then((updatedPlaces) => {
                updatedPlaces.save()
                res.send(updatedPlaces)
            })
    },
    create: (req, res) => {
        var memberId = req.params.memberId
        Member.findById(memberId)
            .then((member) => {
                console.log(member)
                Places.create(req.body)
                    .then((newPlaces) => {
                        console.log(newPlaces)
                        member.places.push(newPlaces)
                        member.save()
                        res.send(newPlaces)
                    })
            })
    }

}

module.exports = placesController