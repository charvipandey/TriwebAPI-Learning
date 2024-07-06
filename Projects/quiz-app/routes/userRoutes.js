const express=require('express');
const router=eexpress.Router();
const User=require('../models/User');
const{hashPassword }=require('../utils');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

const generateToken=(userId) =>{
  return jwt.sign({userId }, process.env.JWT_SECRET,{expiresIn: '1h' });
};


router.post('/register', async (req, res) =>{
  const{name, email, password }=req.body;

  try{
    let user=await User.findOne({email });
    if (user){
      return res.status(400).json({msg: 'user already exists' });
    }

    const hashedPassword=await hashPassword(password);

    user=new User({name, email, password: hashedPassword });

    await user.save();

    res.status(201).json({msg: 'user registered successfully' });
  } catch (err){
    console.error(err.message);
    res.status(500).send('server error');
  }
});

router.post('/login', async(req,res)=>{
  const{email, password}=req.body;
  
  try{
    let user=await User.findOne({email});
    if (!user){
      return res.status(400).json({msg: 'invalid credentials' });
    }
    const token=generateToken(user._id);
    res.status(200).json({token });
  } catch (err){
    console.error(err.message);
    res.status(500).send('server error');
  }
});

router.get('/profile', authenticateToken, (req, res) =>{
  res.status(200).json({user: req.user });
});

function authenticateToken(req, res, next){
  const authHeader=req.headers.authorization;
  const token=authHeader && authHeader.split(' ')[1];

  if(!token){
    return res.status(401).json({msg: 'access denied' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) =>{
    if (err){
      return res.status(403).json({msg: 'invalid token' });
    }
    req.user ={userId: decodedToken.userId };
    next();
  });
}

module.exports=router;