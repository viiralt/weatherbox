import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { RingLoader } from 'react-spinners';
import styled from 'styled-components';

import SearchBar from '../containers/SearchBar';
import CityList from './CityList';

import { fetchWeatherInitial } from '../store/actions/actionCreators';
import { Heading, Text } from '../elements';
=======
import styled from 'styled-components';

import SearchBar from './SearchBar';
import CityList from './CityList';
import { fetchWeatherInitial } from '../store/actions/actionCreators';
>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce

class Dashboard extends Component {
  componentDidMount() {
    const { fetchWeatherInitial } = this.props;
    fetchWeatherInitial();
  }

  render() {
<<<<<<< HEAD
    const { isFetchingGroup, fetchGroupWeather } = this.props;

    if (isFetchingGroup) {
      return <RingLoader color="#19b5fe" isFetchingGroup={isFetchingGroup} />;
    }

    return (
      <DashWrapper>
        <Heading>
          Welcome to <em>WeatherBox!</em>
        </Heading>
        <Text>...where the info is always fresh (updated every minute)</Text>
        <SearchBar />
        <CityWrapper>
          <CityList fetchGroupWeather={fetchGroupWeather.list} />
        </CityWrapper>
      </DashWrapper>
=======
    const { isFetching, weatherInitial } = this.props;

    if (isFetching) {
      return <p>Loading...</p>;
    }
    return (
      <Wrapper>
        <SearchBar />
        <CityList weatherInitial={weatherInitial.list} />
      </Wrapper>
>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce
    );
  }
}

<<<<<<< HEAD
const DashWrapper = styled.div`
  width: 80%;
  display: flex;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const CityWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const mapStateToProps = state => ({
  fetchGroupWeather: state.fetchGroupWeather,
  isFetchingGroup: state.isFetchingGroup,
});

export default connect(mapStateToProps, { fetchWeatherInitial })(Dashboard);
=======
const mapStateToProps = state => ({
  weatherInitial: state.weatherInitial,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps, { fetchWeatherInitial })(Dashboard);

const Wrapper = styled.div``;
>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce
