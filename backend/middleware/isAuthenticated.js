const jwt = require('jsonwebtoken');
const User = require('../model/UserSchema');

const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log("🔥 Auth Header:", authHeader); // Add this

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;
    // console.log("✅ Authenticated user:", user._id); // Add this
    next();
  } catch (err) {
    console.error("❌ Invalid token:", err.message); // Add this
    res.status(401).json({ message: 'Invalid token' });
  }
};


module.exports = isAuthenticated;
