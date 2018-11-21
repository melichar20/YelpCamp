const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema Setup
let campgroundSchema = new Schema({
   name: String,
   image: String,
   description: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }]
});

let Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;