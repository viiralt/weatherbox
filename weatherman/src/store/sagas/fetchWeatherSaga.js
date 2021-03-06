import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as ActionTypes from '../actions/actionTypes';
import { Api } from '../../Api';

export function* fetchWeather(action) {
  try {
    const url = `${Api}&units=metric&q=${action.payload}`;
    const response = yield call(axios.get, url);
    yield put({
      type: ActionTypes.FETCH_WEATHER_SUCCEEDED,
      payload: response.data,
    });
    while (true) {
      yield delay(60000);
      yield put({
        type: ActionTypes.FETCH_WEATHER_SUCCEEDED,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_WEATHER_FAILED, message: error });
  }
}

export function* fetchWeatherWatcher() {
  yield takeEvery(ActionTypes.FETCH_WEATHER_REQUESTED, fetchWeather);
}
