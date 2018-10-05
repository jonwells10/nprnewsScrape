let mongoose = require('mongoose');

let Schema = mongoose.Schema; // Save a Reference to the Schema Constructor



var commentSchema = new Schema({
  
  // `body` is of type String
  body: String

});

var Comment = mongoose.model("Comment", commentSchema);

// Export the Comment model
module.exports = Comment;
