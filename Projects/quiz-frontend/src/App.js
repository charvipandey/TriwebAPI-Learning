import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import QuizCRUD from './components/QuizCRUD';
import QuizAttempt from './components/QuizAttempt';
import Reports from './components/Reports';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {}
        <Register />
        <Login />
        <UserProfile />
        <QuizCRUD />
        <QuizAttempt />
        <Reports />
      </main>
      <Footer />
    </div>
  );
}

export default App;
