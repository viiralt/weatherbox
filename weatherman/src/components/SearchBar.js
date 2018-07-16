import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { fetchForecast } from '../store/actions';

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
    const { fetchForecast } = this.props;
    const { city } = this.state;
    fetchForecast(city);
    this.setState({ city: '' });
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.handleFormSubmit}>
          <Input
            placeholder="please enter city"
            value={this.state.city}
            onChange={this.handleInputChange}
          />
          <SearchButton onClick={this.handleButtonClick} type="submit">
            Go
          </SearchButton>
        </Form>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  weatherForecast: state.weatherForecast,
});

export default connect(mapStateToProps, { fetchForecast })(SearchBar);

const Wrapper = styled.div``;
const Input = styled.input``;
const SearchButton = styled.button``;
const Form = styled.form``;
