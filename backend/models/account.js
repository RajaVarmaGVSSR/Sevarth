const mongoose = require('mongoose');

const accSchema = mongoose.Schema({
  emailId: {type: String},
  userName: {type: String},
  pwd: {type: String},
});

module.exports = mongoose.model('Account', accSchema);
