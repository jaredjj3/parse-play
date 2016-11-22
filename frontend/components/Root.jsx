import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Home from './Home';
import UploadContainer from './upload/UploadContainer';
import ProfileContainer from './profile/ProfileContainer';

export default ({ store }) => {
  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="home" component={Home} />
          <Route path="upload" component={UploadContainer} />
          <Route path="profile" component={ProfileContainer} />
        </Route>
      </Router>
    </Provider>
  );
};