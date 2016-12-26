// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/bluebank');

// Express
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Make our db accessible to our routers
app.use(function(req,res,next){
    req.db = db;
    next();
});

// Routes
var routes = require("./routes/api.js")(app);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
