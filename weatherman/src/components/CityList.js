import React from 'react';

import CityListItem from './CityListItem';

const CityList = ({ fetchGroupWeather }) =>
  fetchGroupWeather.map(city => <CityListItem city={city} key={city.id} />);

export default CityList;
