const passport = require('passport');

const authMiddleware = passport.authenticate('local', { session: false });

module.exports = authMiddleware;
