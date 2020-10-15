import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from './Home'
import Map from './Map'
import NavBar from './components/NavBar'


function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/map" component={Map} />
  </Router>

    
  );
}

export default App;
