import React, { Component } from 'react';

import Wrapper from '../elements/Wrapper';
import CityDetail from './CityDetail';

export default class CityList extends Component {
  renderInitialCities = () => {
    const { weatherInitial } = this.props;
    return weatherInitial.map(city => <CityDetail city={city} key={city.id} />);
  };

  render() {
    return (
      <Wrapper>
        <p>hai</p>
        {this.renderInitialCities()}
      </Wrapper>
    );
  }
}
