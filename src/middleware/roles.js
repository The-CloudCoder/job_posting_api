// returns middleware that checks whether req.user.role is allowed
module.exports = function(allowedRoles = []) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: 'Not authenticated' });
    if (!Array.isArray(allowedRoles)) allowedRoles = [allowedRoles];
    if (allowedRoles.length > 0 && !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: insufficient permissions' });
    }
    next();
  };
};
