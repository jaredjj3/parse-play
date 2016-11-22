import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Test from './Test';

export default ({ store }) => {
  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="test" component={ Test } />
        </Route>
      </Router>
    </Provider>
  );
};