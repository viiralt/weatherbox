import { FETCH_WEATHER_INITIAL } from './actionTypes';

const API_KEY = '1dd204628a727f5f68ac7f428820c128';
const URL = `http://api.openweathermap.org/data/2.5/group?id=3128760,5391959,2643743,3988507&units=metric?appid=${API_KEY}`;

// Bcn 3128760, San Fran 5391959, London 2643743, Paris 2988507

export const fetchWeatherInitial = () => dispatch => {
  fetch(URL)
    .then(res => res.json())
    .then(weatherInitial => {
      dispatch(FETCH_WEATHER_INITIAL(weatherInitial));
    });
};
