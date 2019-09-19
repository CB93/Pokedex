const mongoose = require('mongoose');
const Schema = mongoose.Schema;let Pokemon = new Schema({
    ID: {
        type: String
    },
    Name: {
        type: String
    },
    Type1: {
        type: String
    },
    Type2: {
        type: String
    },
    Total: {
        type: String
    },
    HP: {
        type: String
    },
    Attack: {
        type: String
    },
    Defense: {
        type: String
    },
    SpAtk: {
        type: String
    },
    SpDef: {
        type: String
    },
    Speed: {
        type: String
    },
    Generation: {
        type: String
    },
    Legendary: {
        type: String
    }
});module.exports = mongoose.model('Pokemon', Pokemon);