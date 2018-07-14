import { call, put, take } from 'redux-saga/effects';

import {
  FETCH_WEATHER_INITIAL_REQUESTED,
  FETCH_WEATHER_INITIAL_SUCCEEDED,
  FETCH_WEATHER_INITIAL_FAILED,
} from '../actions/actionTypes';

const API_KEY = '1dd204628a727f5f68ac7f428820c128';
const URL = `http://api.openweathermap.org/data/2.5/group?id=3128760,5391959,2643743,3988507&units=metric?appid=${API_KEY}`;

// Bcn 3128760, San Fran 5391959, London 2643743, Paris 2988507

function* fetchWeatherInitial(action) {
  try {
    const weatherInitial = yield call(Api.fetchWeatherInitial, action.payload.weatherInitial);
    yield put({ type: FETCH_WEATHER_INITIAL_SUCCEEDED, weatherInitial });
  } catch (e) {
    yield put({ type: FETCH_WEATHER_INITIAL_FAILED, message: e.message });
  }
}

function* fetchWeatherInitialSaga() {
  yield take(FETCH_WEATHER_INITIAL_REQUESTED, fetchWeatherInitial);
}

export default fetchWeatherInitialSaga;
