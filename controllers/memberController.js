const Member = require('../models/Member')
const Places = require('../models/Places')

// using boilerplate routes to seed the file and will start seeing what JSON
// data the google places API sends back

const memberController = {
    index: (req, res) => {
        Member.find({})
            .then((members) => {
                res.send(members)
            })
    },
    show: (req, res) => {
        Member.findById(req.params.userId).populate('ideas')
            .then((member) => {
                res.send(member)
            })
    },
    update: (req, res) => {
        Member.findByIdAndUpdate(req.params.userId, req.body)
            .then((updatedUser) => {
                updatedUser.save()
                res.send(updatedUser)
            })
    },
    delete: (req, res) => {
        Member.findByIdAndDelete(req.params.userId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        Member.create(req.body)
            .then((member) => {
                res.send(member)
            })
    }
}

module.exports = memberController