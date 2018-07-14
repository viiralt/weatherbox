import { call, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_FORECAST_REQUESTED,
  FETCH_FORECAST_SUCCEEDED,
  FETCH_FORECAST_FAILED,
} from '../actions/actionTypes';

const API_KEY = '1dd204628a727f5f68ac7f428820c128';
const URL = `http://api.openweathermap.org/data/2.5/weather?city=barcelona&APPID=${API_KEY}
`;

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchForecast(action) {
  try {
    const forecast = yield call(Api.fetchForecast, action.payload.forecast);
    yield put({ type: FETCH_FORECAST_SUCCEEDED, forecast });
  } catch (e) {
    yield put({ type: FETCH_FORECAST_FAILED, message: e.message });
  }
}

function* fetchForecastSaga() {
  yield takeEvery(FETCH_FORECAST_REQUESTED, fetchForecast);
}

export default fetchForecastSaga;
