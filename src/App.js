import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavPc from './nav/NavPc';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<NavPc />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
