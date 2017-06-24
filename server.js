// include dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Require Article Schema
var Article = require("./models/Article.js");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;


// Use body parser in the app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// setup static route for public viewing
app.use(express.static("./public"));

// DATABASE CONFIG
// MongoDB configuration (Change this URL to your own DB)
// mongoose.connect("mongodb://admin:codingrocks@ds023664.mlab.com:23664/reactlocate");
mongoose.connect("mongodb://localhost/nytreact");

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// ROUTES

// Main "/" Route. This will redirect the user to our rendered React app
// line 47 might need /public removed - have to see how it works
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// Get - route components use to query db for all saved articles.
app.get("/api/saved", function(req, res) {

  // find all records then sort by date in descending order and return 10 records
  Article.find({}).sort([
    ["date", "descending"]
  ]).limit(10).exec(function(err, doc) {
    
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }

  });
});


// Post - route components use to save article to the db
app.post("/api/saved", function(req, res) {

// creates variable to store data from article body
  var newArticle = new Article(req.body);

// breaks down requested body data and stores in seperate variables
  var title = req.body.title;
  var date = req.body.date;
  var url = req.body.url;

// saves article
  newArticle.save(function(err, doc){

    if (err) {
      console.log(err);
    } else {
      res.send("Saved Search" + doc._id);
    }

  });

});


// Delete - route components use to delete a saved article
app.delete("/api/saved", function(req, res) {

  var url = req.param('url');

  Article.find({"url": url}).remove().exec(function(err, data){

    if(err){
      console.log(err);
    }
    else {
      res.send("Article Deleted");
    }

  });

});


// listens for port on server
app.listen(PORT, function() {
  console.log("Server running on PORT: " + PORT);
});
