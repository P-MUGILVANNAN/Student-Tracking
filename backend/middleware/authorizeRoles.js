module.exports = (...roles) => {
  return (req, res, next) => {
    // console.log("🎯 Roles allowed:", roles);
    // console.log("🙋 Current user:", req.user);

    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};
