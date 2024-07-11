import React from 'react';

function QuizAttempt() {
  return (
    <div>
      <h2>Attempt Quiz</h2>
      <form>
        {}
        <div>
          <p>Question 1</p>
          <input type="text" placeholder="Your Answer" />
        </div>
        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
}

export default QuizAttempt;
