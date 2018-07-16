import { all } from 'redux-saga/effects';
import { fetchWeatherInitialWatcher } from './fetchWeatherInitialSaga';
import { fetchForecastWatcher } from './fetchForecastSaga';

export default function* rootSaga() {
  yield all([fetchWeatherInitialWatcher(), fetchForecastWatcher()]);
}
