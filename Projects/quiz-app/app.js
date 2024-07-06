const express=require('express');
const mongoose=require('mongoose');
const dbConnect = require('./config/db');
dbConnect();
const app=express();

app.use(express.json());

app.use((req, res, next)=>{
  res.status(200).json({
    message: 'Welcome to the server'
  });
});
module.exports=app;