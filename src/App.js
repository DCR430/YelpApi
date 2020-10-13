import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { FaBars } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa'

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
