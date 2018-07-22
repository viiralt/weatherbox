import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as ActionTypes from '../actions/actionTypes';
import { InitialApi } from '../../Api';

function* fetchWeatherInitial() {
  try {
    const response = yield call(axios.get, InitialApi);
    yield put({
      type: ActionTypes.FETCH_WEATHER_INITIAL_SUCCEEDED,
      payload: response.data,
    });
    while (true) {
      yield delay(60000);
      yield put({
        type: ActionTypes.FETCH_WEATHER_INITIAL_SUCCEEDED,
        payload: response.data,
      });
      console.log('updated');
    }
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_WEATHER_INITIAL_FAILED, message: error });
  }
}

export function* fetchWeatherInitialWatcher() {
  yield takeEvery(ActionTypes.FETCH_WEATHER_INITIAL_REQUESTED, fetchWeatherInitial);
}
