import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import CityDetail from './containers/CityDetail';
import Dashboard from './components/Dashboard';
import ErrorPath from './components/ErrorPath';

import { Wrapper } from './elements';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/:city" component={CityDetail} />
          <Route component={ErrorPath} />
        </Switch>
      </Wrapper>
    );
  }
}

export default App;
