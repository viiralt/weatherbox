import { FETCH_FORECAST } from './actionTypes';

const API_KEY = '1dd204628a727f5f68ac7f428820c128';
/* const CITY = */
const URL = `http://api.openweathermap.org/data/2.5/forecast?city=${CITY}&APPID=${API_KEY}
`;

export const fetchForecast = city => dispatch => {
  fetch(URL)
    .then(res => res.json())
    .then(weather => {
      dispatch(FETCH_FORECAST(weather));
    });
};
