const fs = require('fs');
const path = require('path');

const dbpath = path.join(__dirname, '../users.json');

const getusers = () => {
  const data = fs.readfilesync(dbpath, 'utf-8');
  return json.parse(data).users;
};

const saveusers = (users) => {
  const data = json.stringify({ users }, null, 2);
  fs.writefilesync(dbpath, data, 'utf-8');
};

module.exports = { getusers, saveusers };