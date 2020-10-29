import React, { Component } from 'react';

import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home'
import Interests from './pages/interests'
import Recommendations from './pages/recommendations'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/interests" component={Interests} />
            <Route exact path="/recommendations" component={Recommendations} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
