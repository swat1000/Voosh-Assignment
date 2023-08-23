const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    username: String,
    sub_total: Number,
    phoneNumber: String,
});

module.exports = {
    Order: mongoose.model('Order', orderSchema)
};