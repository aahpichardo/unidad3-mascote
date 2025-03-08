const jwt = require('jsonwebtoken');
const secretKey = 'elpepe666'; // debe coincidir con authController.js

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'No autorizado' });
  }

  jwt.verify(token, secretKey, (err, decoded) => { // Usa la misma clave
    if (err) {
      return res.status(401).json({ message: 'Sesión expirada' });
    }
    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;