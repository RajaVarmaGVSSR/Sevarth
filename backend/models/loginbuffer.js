const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
  profileId: {type: String },
});

module.exports = mongoose.model('LoginBuffer', loginSchema);
