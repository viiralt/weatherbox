import * as ActionTypes from './actionTypes';
// action creators
export const fetchWeatherInitial = () => ({
  type: ActionTypes.FETCH_WEATHER_INITIAL_REQUESTED,
});

export const fetchForecast = city => ({
  type: ActionTypes.FETCH_FORECAST_REQUESTED,
  payload: city,
});
