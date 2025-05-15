const isAuthenticated = require('./isAuthenticated');

const isAdmin = async (req, res, next) => {
  await isAuthenticated(req, res, async () => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized as admin' });
    }
    next();
  });
};

module.exports = isAdmin;
