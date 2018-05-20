const mongoose = require('mongoose');
const AccountDetailsSchema = mongoose.Schema({
  deposits: Number,
  withdrawals: Number
});
const AccountSchema = mongoose.Schema({
  accountNumber: Number,
  currentBallance: Number,
  currency: String,
  active: Boolean,
  accountDetails: [AccountDetailsSchema]
}, {
  timestamps: true
});
const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number,
  address: String,
  activeAccounts: [AccountSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
