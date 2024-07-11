import React from 'react';

function QuizCRUD() {
  return (
    <div>
      <h2>Quizzes</h2>
      <button>Create Quiz</button>
      <div>
        <h3>Quiz List</h3>
        {}
        <div>
          <p>Quiz 1</p>
          <button>Update</button>
          <button>Delete</button>
          <button>Publish</button>
        </div>
      </div>
    </div>
  );
}

export default QuizCRUD;
