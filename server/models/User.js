const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatarUrl: String,
    sex: {type: String, enum: ['мужчина', 'женщина']}
}, {
  timestamps: true
})

module.exports = model('User', UserSchema);