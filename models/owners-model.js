
const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  picture: String,
  GSTno: String,
  products:{
    type: Array,
    default: [],
  }

});
module.exports = mongoose.model('owner', ownerSchema);