import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home'
import Map from './Map'
import NavBar from './components/NavBar'


function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/map" component={Map} />
    </div>
  </Router>
    
  );
}

export default App;
