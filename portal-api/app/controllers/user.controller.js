const User = require('../models/user.model.js');

// Create and Save a new User data
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: "User name can not be empty"
    });
  }

  // Create an account
  const user = new User({
    name: req.body.name || "John Doe",
    content: req.body.content,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    activeAccounts: req.body.activeAccounts,
    accountNumber: req.body.accountNumber,
    active: req.body.active,
    // FIXME: Ajust on the go, not sure now how it looks
    accountDetails: req.body.accountDetails,
    deposits: req.body.deposits,
    withdrawals: req.body.withdrawals
  });

  // Save Data in the database
  user.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  User.find()
    .then(user => {
      res.send(user);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single user with a userId
exports.findOne = (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      res.send(user);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      return res.status(500).send({
        message: "Error retrieving user with id " + req.params.userId
      });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.name) {
    return res.status(400).send({
      message: "User name can not be empty"
    });
  }

  // Find user and update it with the request body
  User.findByIdAndUpdate(req.params.userId, {
    name: req.body.name || "John Doe",
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    address: req.body.phoneNumber,
    activeAccounts: req.body.activeAccounts,
    accountNumber: req.body.accountNumber,
    active: req.body.active,
    // FIXME: Ajust on the go, not sure now how it looks
    accountDetails: req.body.accountDetails,
    deposits: req.body.deposits,
    withdrawals: req.body.withdrawals
  }, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      res.send(user);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      return res.status(500).send({
        message: "Error updating user with id " + req.params.userId
      });
    });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      res.send({ message: "User deleted successfully!" });
    }).catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      return res.status(500).send({
        message: "Could not delete user with id " + req.params.userId
      });
    });
};
