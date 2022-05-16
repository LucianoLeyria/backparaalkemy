const bcrypt = require('bcrypt');
const { createHash } = require('crypto');

function hashPw(password) {
  const hash = createHash('sha256')
    .update(password + 'secret')
    .digest('hex')
    .toString();
  return hash;
}

module.exports = { hashPw };
