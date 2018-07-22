import * as ActionTypes from './actionTypes';

export const fetchWeatherInitial = () => ({
  type: ActionTypes.FETCH_WEATHER_INITIAL_REQUESTED,
});

export const fetchWeather = city => ({
  type: ActionTypes.FETCH_WEATHER_REQUESTED,
  payload: city,
});
