import { call, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_WEATHER_REQUESTED,
  FETCH_WEATHER_SUCCEEDED,
  FETCH_WEATHER_FAILED,
} from '../actions/actionTypes';

const API_KEY = '1dd204628a727f5f68ac7f428820c128';
const URL = `http://api.openweathermap.org/data/2.5/weather?city=barcelona&APPID=${API_KEY}
`;

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchWeather(action) {
  try {
    const weather = yield call(Api.fetchWeather, action.payload.weather);
    yield put({ type: FETCH_WEATHER_SUCCEEDED, weather });
  } catch (e) {
    yield put({ type: FETCH_WEATHER_FAILED, message: e.message });
  }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
*/
function* fetchWeatherSaga() {
  yield takeEvery(FETCH_WEATHER_REQUESTED, fetchWeather);
}

export default fetchWeatherSaga;
