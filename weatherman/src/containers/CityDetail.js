import React, { Component } from 'react';
import styled from 'styled-components';

import { SearchedCityContainer, ContentContainer, HeadingSmall, Image, Text } from '../elements';
import { convertUnix } from '../helpers';

export default class CityDetail extends Component {
  render() {
    const { location } = this.props;
    const { city } = location.state;
    return (
      <CityDetailWrapper>
        <SearchedCityContainer>
          <ContentContainer>
            <HeadingSmall>
              It's currently {city.main.temp} °C in {city.name}, {city.sys.country}
            </HeadingSmall>
            <Text>
              Conditions:
              <Image
                src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                alt="weather conditions"
              />
              {city.weather[0].description}, wind speed is {city.wind.speed} m/s
            </Text>
            <Text>
              The temperature for today will be between {city.main.temp_min} and{' '}
              {city.main.temp_max} °C
            </Text>
            <Text>
              Sun rises at {convertUnix(city.sys.sunrise)} and sets at{' '}
              {convertUnix(city.sys.sunset)}
            </Text>
            <Text>Pressure: {city.main.pressure} hpa</Text>
            <Text>Humidity: {city.main.humidity}%</Text>
          </ContentContainer>
        </SearchedCityContainer>
      </CityDetailWrapper>
    );
  }
}

const CityDetailWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
