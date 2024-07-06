const express=require('express');
const router=eexpress.Router();

router.get('/', (req, res)=>{
  res.status(200).json({message: 'users'});
});

router.post('/', (req,res)=>{
  res.status(201).json({message: 'user created'});
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.status(200).json({ message: `user details for ID ${userId}` });
});

router.put('/:id', (req, res) => {
  const userId = req.params.id;
  res.status(200).json({ message: `user updated for ID ${userId}` });
});

router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  res.status(200).json({ message: `user deleted for ID ${userId}` });
});

module.exports=router;