<<<<<<< HEAD
import { delay } from 'redux-saga';
=======
>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce
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
<<<<<<< HEAD
    while (true) {
      yield delay(60000);
      yield put({
        type: ActionTypes.FETCH_WEATHER_INITIAL_SUCCEEDED,
        payload: response.data,
      });
      console.log('updated');
    }
=======
>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_WEATHER_INITIAL_FAILED, message: error });
  }
}

export function* fetchWeatherInitialWatcher() {
  yield takeEvery(ActionTypes.FETCH_WEATHER_INITIAL_REQUESTED, fetchWeatherInitial);
}
