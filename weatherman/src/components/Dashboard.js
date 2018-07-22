import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RingLoader } from 'react-spinners';
import styled from 'styled-components';

import SearchBar from '../containers/SearchBar';
import CityList from './CityList';

import { fetchWeatherInitial } from '../store/actions/actionCreators';
import { Heading, Text } from '../elements';

class Dashboard extends Component {
  componentDidMount() {
    const { fetchWeatherInitial } = this.props;
    fetchWeatherInitial();
  }

  render() {
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
    );
  }
}

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
