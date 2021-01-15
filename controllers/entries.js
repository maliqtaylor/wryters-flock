const Entry = require('../models/entry')

module.exports = {
    new: newEntry,
    index,
    show,
    update,
    delete: deleteEntry
}


function newEntry(req, res) {
    req.body.author = req.user._id
    Entry.create(req.body)
    .then(entry => {res.json(entry)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    Entry.find({})
    .populate('author')
    .then(entry => {res.json(entry)})
    .catch(err => {res.json(err)})
}

function show(req, res) {
    Entry.findOne({author: req.user._id})
    .populate('author')
    .then(entry => {res.json(entry)})
    .catch(err => {res.json(err)})
}

function update(req, res) {
    Entry.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(entry => {req.json(entry)})
    .catch(err => {req.json(err)})
}

function deleteEntry(req, res) {
    Entry.findByIdAndDelete(req.params.id)
    .then(entry => {req.json(entry)})
    .catch(err => {req.json(err)})
}

