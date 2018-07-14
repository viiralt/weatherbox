import React, { Component } from 'react';
import styled from 'styled-components';

/* import { fetchWeather } from '../store/actions'; */

export default class SearchBar extends Component {
  state = {
    query: '',
    weatherInitial: [],
  };

  componentDidMount() {
    this.fetchWeatherInitial();
  }

  onInputChange = event => {
    this.setState({ query: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.setState({ query: '' });
  };

  fetchWeatherInitial = () => {
    const URL =
      'http://api.openweathermap.org/data/2.5/group?id=3128760,5391959,2643743,3988507&units=metric?appid=1dd204628a727f5f68ac7f428820c128';
    const API_KEY = '1dd204628a727f5f68ac7f428820c128';

    fetch(URL)
      .then(res => res.json())
      .then(weatherInitial => console.log(weatherInitial))
      .then(weatherInitial => this.setState((weatherInitial: weatherInitial)));
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.onFormSubmit} />
        <SearchQuery
          placeholder="please enter city"
          value={this.state.query}
          onChange={this.onInputChange}
        />
        <SearchButton type="submit">Go</SearchButton>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
const SearchQuery = styled.input``;
const SearchButton = styled.button``;
const Form = styled.form``;
