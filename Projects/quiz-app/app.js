const express = require('express');
const mongoose = require('mongoose');
const dbConnect = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

dbConnect();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'welcome to the server'
  });
});

module.exports = app;
