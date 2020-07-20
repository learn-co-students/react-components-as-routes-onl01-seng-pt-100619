import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About.js'
import Login from './Login.js'
import Navbar from './Navbar.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);