import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

/* import rootReducer from './reducers'; */
import weatherReducer from './reducers/weatherReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(weatherReducer, enhancers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
