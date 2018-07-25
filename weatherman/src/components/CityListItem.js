import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HeadingSmall, Text } from '../elements';

const CityListItem = ({ city }) => (
  <MainWrapper>
    <Link
      to={{
        pathname: `/${city.name}`,
        state: {
          city,
        },
      }}
    >
      <CityWrapper>
        <City>
          <HeadingSmall>{city.name}</HeadingSmall>
          <Text>{city.main.temp} °C</Text>
        </City>
      </CityWrapper>
    </Link>
  </MainWrapper>
);

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  flex-direction: row;
`;

const CityWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const City = styled.div`
  display: flex;
  width: 12rem;
  height: 7rem;
  background: #fff;
  margin-left: 1rem;
  border-radius: 6px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: box-shadow 0.3s;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
`;

export default CityListItem;
