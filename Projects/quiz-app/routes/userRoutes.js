const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { hashPassword } = require('../utils/utils');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authMiddleware = require('../middleware/authMiddleware');

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);

    user = new User({ username, email, password: hashedPassword });

    await user.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = generateToken(user._id);
    res.status(200).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/profile', authMiddleware, (req, res) => {
  res.status(200).json({ user: req.user });
});

router.put('/profile', authMiddleware, async (req, res) => {
  const { username, email, password } = req.body;
  const updates = {};

  if (username) updates.username = username;
  if (email) updates.email = email;
  if (password) updates.password = await hashPassword(password);

  try {
    const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true });
    res.status(200).json({ msg: 'User updated successfully', user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.put('/activate', authMiddleware, async (req, res) => {
  try {
    req.user.isActive = true;
    await req.user.save();
    res.status(200).json({ msg: 'User account activated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.put('/deactivate', authMiddleware, async (req, res) => {
  try {
    req.user.isActive = false;
    await req.user.save();
    res.status(200).json({ msg: 'User account deactivated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
