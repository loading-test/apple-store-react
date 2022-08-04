import {Schema, model} from 'mongoose';

const device = new Schema({
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
    price: {
        type: String,
        required: true
    }
})

module.exports = model('Device', device);