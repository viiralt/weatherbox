import React, { Component } from 'react';

import Dashboard from './components/Dashboard';
import Wrapper from './elements/Wrapper';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Dashboard />
      </Wrapper>
    );
  }
}

export default App;
