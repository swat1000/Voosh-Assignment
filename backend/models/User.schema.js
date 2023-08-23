const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  password: String,
});

module.exports = {
    User: mongoose.model('User', userSchema)
};