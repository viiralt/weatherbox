import { all } from 'redux-saga/effects';
import { fetchWeatherInitialWatcher } from './fetchWeatherInitialSaga';
<<<<<<< HEAD
import { fetchWeatherWatcher } from './fetchWeatherSaga';

export default function* rootSaga() {
  yield all([fetchWeatherInitialWatcher(), fetchWeatherWatcher()]);
=======
import { fetchForecastWatcher } from './fetchForecastSaga';

export default function* rootSaga() {
  yield all([fetchWeatherInitialWatcher(), fetchForecastWatcher()]);
>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce
}
