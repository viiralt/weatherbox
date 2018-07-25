<<<<<<< HEAD
import React from 'react';

import CityListItem from './CityListItem';

const CityList = ({ fetchGroupWeather }) =>
  fetchGroupWeather.map(city => <CityListItem city={city} key={city.id} />);

export default CityList;
=======
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
>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce
