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
  console.log(req.body);
  Entry.create(req.body)
    .then(entry => { res.json(entry) })
    .catch(err => { res.json(err) })
}

function index(req, res) {
  Entry.find({})
    .populate('owner')
    .populate('draft')
    .then(entry => { res.json(entry) })
    .catch(err => { res.json(err) })
}

function show(req, res) {
  Entry.findOne({ owner: req.user._id })
    .populate('owner')
    .populate('draft')
    .then(entry => { res.json(entry) })
    .catch(err => { res.json(err) })
}

function update(req, res) {
  Entry.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(entry => { res.json(entry) })
    .catch(err => { res.json(err) })
}

function deleteEntry(req, res) {
  Entry.findByIdAndDelete(req.params.id)
    .then(entry => { res.json(entry) })
    .catch(err => { res.json(err) })
}

