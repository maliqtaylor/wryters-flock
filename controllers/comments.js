const Entry = require("../models/entry")

module.exports = {
    create,
    update, 
    delete: deleteComment,
    index
}
function index (req, res) {
    Entry.findById(req.params.id)
    .then(entry =>  res.json(entry.comments)
    )
    .catch(err => res.json(err))
}
function create (req,res) {
    Entry.findById(req.params.id)
    .then(entry => {
        entry.comments.push(req.body)
        entry.save()
        (res => {res.json(entry)})
    })
    .catch(err => res.json(err))
}

function update (req,res) {

    
}
function deleteComment (req,res) {
    // Entry.findById(req.params.id)
    // .then(entry => {
    //     entry.comments.
    // })

    
}
