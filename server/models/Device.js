const {Schema, model} = require('mongoose');

const DeviceSchema = new Schema({
    image: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    memory: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    currency: {
      type: String,
      required: true
    },
    category: String,
    price: {
        type: Number,
        required: true
    },
}, {
  timestamps: true
})

module.exports = model('Device', DeviceSchema);