import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '../store';

import HomePage from '../pages/HomePage';

const App = (props) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={HomePage}/>
    </Router>
  </Provider>
);

export default App;
