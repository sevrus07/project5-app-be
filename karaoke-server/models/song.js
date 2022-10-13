const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
   title: String, 
   artist: String,
   category: String,
   url: String
});

module.exports = mongoose.model('Song', songSchema );