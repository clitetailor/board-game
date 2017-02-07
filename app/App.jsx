import React, { Component } from 'react';

import Home from './Home';
import Entrance from './Entrance';
import Room from './Room';
import Login from './Login';
import NoMatch from './NoMatch';

import { Router, Route, Link, browserHistory } from 'react-router';
import logo from './logo.svg';
import './App.styl';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router history={ browserHistory }>
          <Route path="/" component={ Home }></Route>
          <Route path="/login" component={ Login }></Route>
          <Route path="/entrance" component={ Entrance }></Route>
          <Route path="/room/:id" component={ Room }></Route>
          <Route path="*" component={ NoMatch }></Route>
        </Router>

      </div>
    );
  }
}

export default App;
