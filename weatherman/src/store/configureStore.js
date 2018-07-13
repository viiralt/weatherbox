import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import weatherReducer from './reducers/weatherReducers';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
