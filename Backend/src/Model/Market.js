const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema({
    name: String,
    state: String,
    commodity: String,
    price: Number,
    quantity: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Market', marketSchema);

