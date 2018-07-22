import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  fetchCityWeather: [],
  fetchGroupWeather: [],
  isFetchingGroup: true,
  isFetchingCity: true,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_WEATHER_INITIAL_SUCCEEDED: {
      return {
        ...state,
        fetchGroupWeather: action.payload,
        isFetchingGroup: false,
      };
    }
    case ActionTypes.FETCH_WEATHER_SUCCEEDED: {
      return {
        ...state,
        fetchCityWeather: action.payload,
        isFetchingCity: false,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
