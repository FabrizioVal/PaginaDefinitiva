const { Schema, model } = require("mongoose");

//User model

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
   password: {
    type: String,
    required: true,
  }
});

//Models exportation

module.exports = model('user', UserSchema) 