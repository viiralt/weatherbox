import { combineReducers } from 'redux';

import weatherReducer from './weatherReducers';

export default combineReducers({
  weather: weatherReducer,
});
