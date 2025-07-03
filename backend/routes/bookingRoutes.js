const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Booking = require('../models/Booking');
const { v4: uuidv4 } = require('uuid');
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { gender, serviceName, serviceOption, price, bookingDate, bookingTime, address } = req.body;
        if (!gender || !serviceName || !serviceOption || !bookingDate || !bookingTime || !address) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        const newBooking = new Booking({
            id: uuidv4(),
            userId: req.user.id,
            gender,
            serviceName,
            serviceOption,
            price,
            bookingDate: new Date(bookingDate),
            bookingTime,
            address,
        });
        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ error: 'Failed to create booking.' });
    }
});
router.get('/me', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const bookings = await Booking.find({ userId: req.user.id });
        res.json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ error: 'Failed to fetch bookings.' });
    }
});
router.delete('/:slotId', authMiddleware, async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.slotId);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found.' });
        }
        res.json({ message: 'Booking cancelled successfully.' });
    } catch (error) {
        console.error('Error cancelling booking:', error);
        res.status(500).json({ error: 'Failed to cancel booking.' });
    }
});
router.patch('/:id/cancel', authMiddleware, async (req, res) => {
    try {
        const booking = await Booking.findOne({ _id: req.params.id, userId: req.user.id });
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        booking.status = 'Cancelled';
        await booking.save();
        res.json({ message: 'Booking cancelled successfully', booking });
    } catch (error) {
        console.error('Error cancelling booking:', error);
        res.status(500).json({ error: 'Failed to cancel booking' });
    }
});
module.exports = router;
