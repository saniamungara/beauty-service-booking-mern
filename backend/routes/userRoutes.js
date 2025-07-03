const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const { body, validationResult } = require('express-validator');
// Get user profile (for the logged-in user)
router.get('/user', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ error: 'User profile not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});
// Get user profile by ID (to fetch any user's profile)
router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ error: 'User profile not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});
// Update user profile (for the logged-in user)
router.put(
    '/user',
    authMiddleware,
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Invalid email address'),
        body('phone').notEmpty().withMessage('Phone is required'),
        body('address').notEmpty().withMessage('Address is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, phone, address } = req.body;
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.user.id,
                { name, email, phone, address },
                { new: true, select: '-password' }
            );
            if (!updatedUser) {
                return res.status(404).json({ error: 'User profile not found' });
            }
            res.json(updatedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
);
// Create user profile (for first-time profile setup)
router.post(
    '/user',
    authMiddleware,
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Invalid email address'),
        body('phone').notEmpty().withMessage('Phone is required'),
        body('address').notEmpty().withMessage('Address is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, phone, address } = req.body;
        try {
            const user = await User.findById(req.user.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            
            // Update user with profile information
            user.name = name;
            user.email = email;
            user.phone = phone;
            user.address = address;
            await user.save();
            // Return updated user without password
            const updatedUser = await User.findById(req.user.id).select('-password');
            res.json(updatedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
);
module.exports = router;