const express=require('express');
const router=eexpress.Router();
const User = require('../models/User');
const { hashPassword } = require('../utils');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);

    user = new User({ name, email, password: hashedPassword });

    await user.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
module.exports=router;