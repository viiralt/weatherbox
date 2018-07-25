import * as ActionTypes from './actionTypes';

export const fetchWeatherInitial = () => ({
  type: ActionTypes.FETCH_WEATHER_INITIAL_REQUESTED,
});

<<<<<<< HEAD
export const fetchWeather = city => ({
  type: ActionTypes.FETCH_WEATHER_REQUESTED,
=======
export const fetchForecast = city => ({
  type: ActionTypes.FETCH_FORECAST_REQUESTED,
>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce
  payload: city,
});
