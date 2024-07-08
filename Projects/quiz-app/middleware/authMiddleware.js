const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ msg: 'Access denied, no token provided' });
    }
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        return res.status(403).json({ msg: 'Invalid token' });
      }
      const user = await User.findById(decodedToken.userId);
      if (!user || !user.isActive) {
        return res.status(404).json({ msg: 'User not found or inactive' });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    console.error('Authentication error:', err);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = authMiddleware;
