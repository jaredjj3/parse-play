import React from 'react';

import FileFormContainer from './forms/FileFormContainer';

export default ({ children }) => (
  <div className='app'>
    <FileFormContainer />
    { children }
  </div>
);