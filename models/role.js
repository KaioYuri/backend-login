// models/role.js
const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  code: String,
  name: String,
});

module.exports = mongoose.model('Role', roleSchema);