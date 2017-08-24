const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var eventSchema = new Schema({ 
  id : String,
  summary : String,
  created: Number,
  creat: String
});

module.exports = mongoose.model('Event', eventSchema);