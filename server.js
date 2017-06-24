// Include Server Dependencies
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
app.use(bodyParser.txt());
app.use(bodyParser.josn({type: 'application/vnd.api+json'}));

// setup static route for public viewing
app.use(express.static("./public"));

// DATABASE CONFIG
// MongoDB Configuration configuration (Change this URL to your own DB)
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


// Get - This is the route components will use this to query MongoDB for all saved articles.
// app.get("/api/saved", function(req, res) {

//   // find all the records, sorted in descending order, limit records to 20
//   Article.find({}).sort([
//     ["date", "descending"]
//   ]).limit(20).exec(function(err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });

// // Post - This is the route your components will use to save an article to the database.
// app.post("/api/saved", function(req, res) {
//   console.log("BODY: " + req.body.title);

//   // save title based on the JSON input.
//   Article.create({
//     title: req.body.title,
//     date: Date.now(),
//     url: req.body.url
//   }, function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Saved Search");
//     }
//   });
// });

// // Delete - This is the route components will use to delete a saved article in the database
// app.get("/api/saved", function(req, res) {

  

// });






// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
