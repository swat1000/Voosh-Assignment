const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    sub_total: Number,
    phoneNumber: String,
});

module.exports = {
    Order: mongoose.model('Order', orderSchema)
};