const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

//let pokemon = require('./pokemon.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/pokemon', { 
useNewUrlParser: true });
const connection = mongoose.connection;

connection.on('open', function() {
    console.log("MongoDB database connection established successfully");
});

app.get('/', function(req, res) {
	connection.db.collection("pokemon", function(err, collection){
        collection.find({}).toArray(function(err, data){
            res.send(data); // it will print your collection data
        })
    });
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});