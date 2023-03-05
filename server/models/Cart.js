const { Schema, model } = require('mongoose');

const CartSchema = new Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    model: {
      type: String,
      required: true,
    },
    memory: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Cart', CartSchema);
