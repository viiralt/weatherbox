import { all } from 'redux-saga/effects';
import { fetchWeatherInitialWatcher } from './fetchWeatherInitialSaga';
import { fetchWeatherWatcher } from './fetchWeatherSaga';

export default function* rootSaga() {
  yield all([fetchWeatherInitialWatcher(), fetchWeatherWatcher()]);
}
