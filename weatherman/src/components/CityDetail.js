import React from 'react';

import Wrapper from '../elements/Wrapper';
import Header from '../elements/Header';

const CityDetail = ({ city }) => (
  <Wrapper>
    {console.log(city)}
    <Header>{city.name}</Header>
  </Wrapper>
);

export default CityDetail;
