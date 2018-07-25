import React, { Component } from 'react';

import {
  Wrapper,
  SearchedCityContainer,
  ContentContainer,
  HeadingSmall,
  Image,
  Text,
} from '../elements';

import { convertUnix } from '../helpers';

export default class SearchedCity extends Component {
  render() {
    const { query, isFetchingCity } = this.props;

    if (isFetchingCity) {
      return null;
    }

    return (
      <Wrapper>
        <SearchedCityContainer>
          <ContentContainer>
            <HeadingSmall>
              It's currently {query.main.temp} °C in {query.name}, {query.sys.country}
            </HeadingSmall>
            <Text>
              Conditions:
              <Image
                src={`http://openweathermap.org/img/w/${query.weather[0].icon}.png`}
                alt="weather conditions"
              />
              {query.weather[0].description}, wind speed is {query.wind.speed} m/s
            </Text>
            <Text>
              The temperature for today will be between {query.main.temp_min} and{' '}
              {query.main.temp_max} °C
            </Text>
            <Text>
              Sun rises at {convertUnix(query.sys.sunrise)} and sets at{' '}
              {convertUnix(query.sys.sunset)}
            </Text>
            <Text>Pressure: {query.main.pressure} hpa</Text>
            <Text>Humidity: {query.main.humidity}%</Text>
          </ContentContainer>
        </SearchedCityContainer>
      </Wrapper>
    );
  }
}
