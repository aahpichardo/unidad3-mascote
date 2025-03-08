const { getUsers, saveUsers } = require('../config/db');

const findUserByUsername = (username) => {
  const users = getUsers();
  return users.find(user => user.username === username);
};

const createUser = (username, password) => {
  const users = getUsers();
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  saveUsers(users);
  return newUser;
};

module.exports = { findUserByUsername, createUser }; 