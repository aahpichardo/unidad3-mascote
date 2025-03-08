const jwt = require('jsonwebtoken');
const { findUserByUsername } = require('../models/userModel');

const secretKey = 'elpepe666';

const login = (req, res) => {
  const { username, password } = req.body;
  const user = findUserByUsername(username);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '5m' });
  res.json({ token });
};

const validateSession = (req, res) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Sesión no válida' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Sesión expirada' });
    }
    res.json({ message: 'Sesión válida', user: decoded });
  });
};
module.exports = { login, validateSession };