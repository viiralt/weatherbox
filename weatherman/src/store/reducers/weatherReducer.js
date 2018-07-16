import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  weatherForecast: [],
  weatherInitial: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_WEATHER_INITIAL_SUCCEEDED: {
      return {
        ...state,
        weatherInitial: action.payload,
      };
    }
    case ActionTypes.FETCH_FORECAST_SUCCEEDED: {
      return {
        ...state,
        weatherForecast: action.payload,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
