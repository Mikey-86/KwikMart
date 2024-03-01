const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    paid: {
        required: true,
        type: Boolean
    },
    customerId: {
        required: true,
        type: String
    },
    products: [{
        required: true,
        type: String
    }],
    products: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('OrderData', OrderSchema)