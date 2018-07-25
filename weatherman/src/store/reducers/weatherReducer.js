import * as ActionTypes from '../actions/actionTypes';

const initialState = {
<<<<<<< HEAD
  fetchCityWeather: [],
  fetchGroupWeather: [],
  isFetchingGroup: true,
  isFetchingCity: true,
=======
  weatherForecast: [],
  weatherInitial: [],
  isFetching: true,
>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_WEATHER_INITIAL_SUCCEEDED: {
      return {
        ...state,
<<<<<<< HEAD
        fetchGroupWeather: action.payload,
        isFetchingGroup: false,
      };
    }
    case ActionTypes.FETCH_WEATHER_SUCCEEDED: {
      return {
        ...state,
        fetchCityWeather: action.payload,
        isFetchingCity: false,
=======
        weatherInitial: action.payload,
        isFetching: false,
      };
    }
    case ActionTypes.FETCH_FORECAST_SUCCEEDED: {
      return {
        ...state,
        weatherForecast: action.payload,
>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
