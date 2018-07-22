import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SearchedCity from './SearchedCity';
import { fetchWeather } from '../store/actions/actionCreators';

class SearchBar extends Component {
  state = {
    city: '',
  };

  handleInputChange = event => {
    this.setState({ city: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  handleButtonClick = () => {
    const { fetchWeather } = this.props;
    const { city } = this.state;
    fetchWeather(city);
    this.setState({ city: '' });
  };

  render() {
    const { city } = this.state;
    const { fetchCityWeather, isFetchingCity } = this.props;
    return (
      <SearchWrapper>
        <Form onSubmit={this.handleFormSubmit}>
          <Input placeholder="please enter city" value={city} onChange={this.handleInputChange} />
          <SearchButton onClick={this.handleButtonClick} type="submit">
            Go
          </SearchButton>
        </Form>
        <SearchedCity isFetchingCity={isFetchingCity} query={fetchCityWeather} />
      </SearchWrapper>
    );
  }
}

const mapStateToProps = state => ({
  fetchCityWeather: state.fetchCityWeather,
  isFetchingCity: state.isFetchingCity,
});

export default connect(mapStateToProps, { fetchWeather })(SearchBar);

const SearchWrapper = styled.div``;

const SearchButton = styled.button`
  border: 0;
  height: 4rem;
  width: 3.5rem;
  color: #19b5fe;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1.2rem;
  font-family: Overpass;
`;

const Input = styled.input`
  flex: 1;
  border: 0;
  outline: 0;
  height: 62px;
  cursor: text;
  width: 590px;
  font-size: 1em;
  margin-left: 1em;
  font-weight: 200;
  border-radius: 6px;
  font-family: Overpass;
  box-sizing: border-box;
`;

const Form = styled.form`
  flex: 1;
  border-radius: 6px;
  background-color: #fff;
  transition: box-shadow 0.3s;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
`;
