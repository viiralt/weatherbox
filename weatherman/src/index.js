import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/configureStore';

import 'normalize.css';
import './styles/global.css';

=======

import { Provider } from 'react-redux';
import store from './store/configureStore';

>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce
import App from './App';

ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
    <Router>
      <App />
    </Router>
=======
    <App />
>>>>>>> 79613553a1550b1e794e80b40226dda1ccdc7dce
  </Provider>,
  document.getElementById('root')
);
