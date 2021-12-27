const path = require('path');
const fs = require('fs');

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../../', 'logs', 'access.log'), // all of the requests log will appended to access.log file in logs directory
  { flags: 'a' }
);

module.exports = accessLogStream;
