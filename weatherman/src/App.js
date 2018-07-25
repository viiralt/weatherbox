import React, { Component } from 'react';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';

import CityDetail from './containers/CityDetail';
import Dashboard from './components/Dashboard';
import ErrorPath from './components/ErrorPath';

import { Wrapper } from './elements';
=======

import Dashboard from './components/Dashboard';
import Wrapper from './elements/Wrapper';
>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce

class App extends Component {
  render() {
    return (
      <Wrapper>
<<<<<<< HEAD
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/:city" component={CityDetail} />
          <Route component={ErrorPath} />
        </Switch>
=======
        <Dashboard />
>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce
      </Wrapper>
    );
  }
}

export default App;
