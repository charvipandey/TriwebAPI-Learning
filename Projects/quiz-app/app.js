const express=require('express');
const mongoose=require('mongoose');
const dbConnect = require('./config/db');
const userRoutes=require('./routes/userRoutes');

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