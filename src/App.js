import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomeScreen from './component/home';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={HomeScreen}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;