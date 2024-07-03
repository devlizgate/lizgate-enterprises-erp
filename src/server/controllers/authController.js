const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username });
    await User.register(user, password);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = (req, res) => {
  res.status(200).json({ message: 'User logged in successfully' });
};
