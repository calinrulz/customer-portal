// Require dotenv for secret api keys
require('dotenv').config();

module.exports = {
  url: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds229380.mlab.com:29380/customer-portal`
};
