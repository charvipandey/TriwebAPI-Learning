const mongoose=require('mongoose');

const quizSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String
  },
  questions:[
  {
      questionText:{
        type:String,
        required:true
      },
      options:[
      {
          text:{
            type:String,
            required:true
          },
          isCorrect:{
            type:Boolean,
            required:true
          }
        }
      ]
    }
  ],
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});
module.exports=mongoose.model('Quiz', quizSchema);
