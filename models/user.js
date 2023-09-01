// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  password: String,
  email: String,
  gender: String,
  role: String,
  isactive: Boolean,
});

module.exports = mongoose.model('User', userSchema);


