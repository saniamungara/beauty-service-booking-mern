const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    id: { type: String, required: true },
    userId: { type: String, required: true },
    gender: { type: String, required: true },
    serviceName: { type: String, required: true },
    serviceOption: { type: String, required: true },
    price: { type: Number, required: true },
    bookingDate: { type: Date, required: true },
    bookingTime: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String,enum: ['Confirmed', 'Cancelled'], default: 'Confirmed' }
}, {
    timestamps: true
});
module.exports = mongoose.model('Booking', bookingSchema);