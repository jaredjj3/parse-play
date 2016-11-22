import React from 'react';

import NavigationContainer from './navigation/NavigationContainer';

export default ({ children }) => (
  <div className='app'>
    <NavigationContainer />
    { children }
  </div>
);