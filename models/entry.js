const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikesSchema = new Schema ({
    liked: Boolean,
    numLikes: Number,
})

const entrySchema = new Schema ({
    title: { type: String, required: true },
    classification: {type: String,  enum:["Poem", "Short Story", "Blog", "Lyrics", "Novel", "Essay", "Speech", "Fan-Fic", "Journal", "Play"]},
    genre: { type: String, enum: ["Fantasy", "Mystery", "Drama", "Comedy", "AutoBiography", "Non-Fiction", "Fiction", "Sci-Fi", "Horror", "Romance", "Historical", "Myth"]},
    author: [{type: Schema.Types.ObjectId, ref: "User"}],
    content: String,
    private: Boolean,
    likes: [LikesSchema]
},
{timestamps: true}
)








module.exports = mongoose.model("Entry", entrySchema)
