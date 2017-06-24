// include dependencies
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true
  },
  // date is required date type
  date: {
    type: Date,
    default: Date.now
  },
  // url is a required string
  url: {
    type: String,
    required: true
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
