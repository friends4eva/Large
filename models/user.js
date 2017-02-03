var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  name: String,
  access_token: String,
  post: {}
})

var User = mongoose.model('User', UserSchema);

module.exports = User;
