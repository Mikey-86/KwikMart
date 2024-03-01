const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('CustomerData', customerSchema)