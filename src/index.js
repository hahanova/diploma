import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import RouterApp from './router';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

const rootElement = document.getElementById('root');

render((
  <Provider store={store}>
    <Router>
      <RouterApp />
    </Router>
  </Provider>
), rootElement);
