module.exports = (app) => {
  const user = require('../controllers/user.controller.js');

  // Create a new User
  app.post('/user', user.create);

  // Retrieve all Users
  app.get('/users', user.findAll);

  // Retrieve a single User with userId
  app.get('/users/:userId', user.findOne);

  // Update a User with userId
  app.put('/users/:userId', user.update);

  // Delete a User with userId
  app.delete('/users/:userId', user.delete);
}
