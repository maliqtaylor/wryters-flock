const Entry = require('../models/entry')

module.exports = {
  new: newLike,
  update, 
}

function newLike(req, res) {
  // req.body.liker = req.user._id
  Entry.findById(req.params.id)
    .then((entry) => {
      entry.likes.push(req.body)
      entry.save()
      (res => {res.json(entry)})
    })
    .catch(err => { res.json(err) })
}

function update(req, res) {
  // req.body.liker = req.user._id
  // Entry.findById(req.params.id)
  // .then((entry) => {
  //   entry.likes.indexOf(req.body.liker).slice(req.body.liker, req.body.liker-1) 
  // })
}