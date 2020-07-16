import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'

const Messages = () => <h4>This is the messages page!</h4>

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
    </div>
  </Router>,
  document.getElementById('root')
);
