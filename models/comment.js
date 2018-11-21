const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema Setup
let commentSchema = new Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

let Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;