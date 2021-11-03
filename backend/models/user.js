const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: String,
  socket: String,
  roomname: String,
});

module.exports = mongoose.model('User', userSchema);
