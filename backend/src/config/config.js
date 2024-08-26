require('dotenv').config( { path: '../../.env'});

module.exports = {
  port: process.env.PORT || 3000,
  mail: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
}