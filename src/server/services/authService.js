const User = require('../models/User');

exports.registerUser = async (username, password) => {
  const user = new User({ username });
  return await User.register(user, password);
};

exports.authenticateUser = async (username, password) => {
  const user = await User.findByUsername(username);
  if (!user) throw new Error('User not found');
  return await user.authenticate(password);
};
