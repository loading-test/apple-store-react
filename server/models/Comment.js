const {Schema, model} = require('mongoose');

const CommentSchema = new Schema({
    text: {type: String, required: true, unique: true},
    // На чьей странице находится комментарий
    pageId: {type: Schema.Types.ObjectId, ref: 'Device'} ,
    // Кто оставил коммент
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
}, {
  timestamps: {createdAt: 'created_at'}
})

module.exports = model('Comment', CommentSchema);