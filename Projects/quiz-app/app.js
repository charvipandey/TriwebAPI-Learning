const express=require('express');
const mongoose=require('mongoose');
const dbConnect = require('./config/db');
const userRoutes=require('./routes/userRoutes');
require('dotenv').config();

const jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: '123' }, process.env.JWT_SECRET, { expiresIn: '1h' });

dbConnect();

const app=express();

app.use(express.json());

app.use((req, res, next)=>{
  res.status(200).json({
    message: 'Welcome to the server'
  });
});

app.use('/api/users', userRoutes);

module.exports=app;