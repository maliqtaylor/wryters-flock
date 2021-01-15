const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema ({
    author: [{type: Schema.Types.ObjectId, ref: "User"}],
    content: String,
    liked: Boolean,  //Revise if UI unintuitive
}, 
{timestamps: true}
)

const entrySchema = new Schema ({
    title: { type: String, required: true },
    description: {type: String, required: true},
    private: {type: Boolean, required: true},
    classification: {type: String,  enum:["Poem", "Short Story", "Blog", "Lyrics", "Novel", "Essay", "Speech", "Fan-Fic", "Journal", "Play"]},
    genre: { type: String, enum: ["Fantasy", "Mystery", "Drama", "Comedy", "AutoBiography", "Non-Fiction", "Fiction", "Sci-Fi", "Horror", "Romance", "Historical", "Myth"]},
    author: [{type: Schema.Types.ObjectId, ref: "User"}],
    content: String,
    feedback: [feedbackSchema]
},
{timestamps: true}
)


module.exports = mongoose.model("Entry", entrySchema)
