const Entry = require('../models/entry')

module.exports = {
  new: newLike,
  // update,
  // delete: deleteEntry
}

function newLike(req, res) {
  req.body.liker = req.user._id
  Entry.findById(req.params.id)
    .then((entry) => {
      entry.likes.push(req.body)
      entry.save()
    })
    .catch(err => { res.json(err) })
}

