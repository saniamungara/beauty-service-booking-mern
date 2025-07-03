const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
module.exports = authMiddleware;
