const express = require('express');
const connectDB = require('./config/db');
const passport = require('./config/passport');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');
const logger = require('./utils/logger');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(passport.initialize());
app.use(logger);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
