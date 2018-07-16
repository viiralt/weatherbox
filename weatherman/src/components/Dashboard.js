import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as ActionTypes from '../store/actions/actionTypes';
import SearchBar from './SearchBar';
import List from './List';
import { fetchWeatherInitial } from '../store/actions';

class Dashboard extends Component {
  componentDidMount() {
    const { fetchWeatherInitial } = this.props;
    fetchWeatherInitial();
  }

  render() {
    return (
      <Wrapper>
        <SearchBar />
        <List />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  weatherInitial: state.weatherInitial,
});

export default connect(mapStateToProps, { fetchWeatherInitial })(Dashboard);

const Wrapper = styled.div``;
