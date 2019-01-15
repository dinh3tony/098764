var mongoose = require('mongoose')
var CommentSchema = new mongoose.Schema({
  content: String,
  rating: Number,
  created_at: Date,
  updated_at: Date
})
var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
