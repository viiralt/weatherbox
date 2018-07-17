import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SearchBar from './SearchBar';
import CityList from './CityList';
import { fetchWeatherInitial } from '../store/actions/actionCreators';

class Dashboard extends Component {
  componentDidMount() {
    const { fetchWeatherInitial } = this.props;
    fetchWeatherInitial();
  }

  render() {
    const { isFetching, weatherInitial } = this.props;

    if (isFetching) {
      return <p>Loading...</p>;
    }
    return (
      <Wrapper>
        <SearchBar />
        <CityList weatherInitial={weatherInitial.list} />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  weatherInitial: state.weatherInitial,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps, { fetchWeatherInitial })(Dashboard);

const Wrapper = styled.div``;
