const {Schema, model} = require('mongoose');

const CommentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
}, {
  timestamps: true
})

module.exports = model('Comment', CommentSchema);