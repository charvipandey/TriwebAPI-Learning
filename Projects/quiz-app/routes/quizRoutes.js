
const express=require('express');
const router=express.Router();
const Quiz=require('../models/Quiz');
const authMiddleware=require('../middleware/authMiddleware');
router.post('/', authMiddleware, async (req, res)=>{
  const{title, description, questions }=req.body;
  try{
    const quiz=new Quiz({
      title,
      description,
      questions,
      createdBy: req.user._id
    });
    await quiz.save();
    res.status(201).json({msg: 'quiz created', quiz });
  } catch (err){
    console.error(err.message);
    res.status(500).send('server error');
  }
});
router.get('/', async (req, res) =>{
  try{
    const quizzes=await Quiz.find().populate('createdBy', 'name email');
    res.status(200).json(quizzes);
  } catch (err){
    console.error(err.message);
    res.status(500).send('server error');
  }
});
router.get('/:id', async (req, res) =>{
  try{
    const quiz=await Quiz.findById(req.params.id).populate('createdBy', 'name email');
    if (!quiz){
      return res.status(404).json({msg: 'quiz not found'});
    }
    res.status(200).json(quiz);
  } catch (err){
    console.error(err.message);
    res.status(500).send('server error');
  }
});
module.exports=router;
