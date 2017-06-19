var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true
  },
  // url is a required string
  url: {
    type: String,
    required: true
  },
  // date is required date type
  date: {
    type: Date,
    required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
