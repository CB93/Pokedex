const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 4000;

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/pokemon', { 
useNewUrlParser: true });
const connection = mongoose.connection;

connection.on('open', function() {
    console.log("MongoDB database connection established successfully");
});

app.get('/', function(req, res) {
	connection.db.collection("pokemon", function(err, collection){
        if (err) throw err;
        collection.find({}).toArray(function(err, data){
            if (err) throw err;
            res.send(data); 
        })
    });
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});