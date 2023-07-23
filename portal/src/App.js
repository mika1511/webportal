import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;