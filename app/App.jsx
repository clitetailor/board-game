import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Home from './Home';
import Entrance from './Entrance';
import Room from './Room';
import Login from './Login';
import NoMatch from './NoMatch';
import SignUp from './SignUp';
import { store } from './reducer';

import './App.styl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={ store }>

          <Router history={ browserHistory } >
            <Route path="/" component={ SignUp }>
              <Route path="login" component={ Login }></Route>
              <Route path="entrance" component={ Entrance }></Route>
              <Route path="room/:id" component={ Room }></Route>
            </Route>
            <Route path="*" component={ NoMatch }></Route>
          </Router>

        </Provider>
      </div>
    );
  }
}

export default App;
