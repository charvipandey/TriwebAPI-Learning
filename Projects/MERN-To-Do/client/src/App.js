import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Welcome from "./Components/Welcome";
import Login from "./Components/Login";

export const CredentialsContext = React.createContext();

function App() {
  const credentialsState = useState(null);

  return (
    <div className="App">
      <CredentialsContext.Provider value={credentialsState}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
      </CredentialsContext.Provider>
    </div>
  );
}

export default App;
