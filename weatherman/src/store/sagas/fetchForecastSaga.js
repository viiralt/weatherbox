import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as ActionTypes from '../actions/actionTypes';
import { Api } from '../../Api';

export function* fetchForecast(action) {
  try {
    const url = `${Api}&units=metric&q=${action.payload}`;
    const response = yield call(axios.get, url);
    yield put({ type: ActionTypes.FETCH_FORECAST_SUCCEEDED, payload: response.data });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_FORECAST_FAILED, message: error });
  }
}

export function* fetchForecastWatcher() {
  yield takeEvery(ActionTypes.FETCH_FORECAST_REQUESTED, fetchForecast);
}
