const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../users.json');

const getUsers = () => {
  const data = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data).users;
};

const saveUsers = (users) => {
  const data = JSON.stringify({ users }, null, 2);
  fs.writeFileSync(dbPath, data, 'utf-8');
};

module.exports = { getUsers, saveUsers };