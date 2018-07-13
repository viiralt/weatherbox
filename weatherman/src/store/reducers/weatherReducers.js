import { FETCH_WEATHER_INITIAL, FETCH_FORECAST, FETCH_WEATHER } from '../actions/actionTypes';

const initialState = {
  weatherInitial: [],
  forecast: [],
  weather: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_INITIAL: {
      return {
        ...state,
        weatherInitial: action.weather,
      };
    }
    case FETCH_FORECAST: {
      return {
        ...state,
        forecast: action.forecast,
      };
    }
    case FETCH_WEATHER: {
      return {
        ...state,
        weather: action.weather,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
