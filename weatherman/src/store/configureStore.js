import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import weatherReducer from './reducers';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(weatherReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
