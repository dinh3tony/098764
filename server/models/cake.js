var mongoose = require('mongoose')
var CommentSchema = require('./comment.js').schema
var CakeSchema = new mongoose.Schema({
  name: String,
  url: String,
  comment:[CommentSchema],
  ratingAvg: Number,
  created_at: Date,
  updated_at: Date
})
var Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;
