const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    commodity: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Market', marketSchema);




