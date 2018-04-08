import React from 'react';

import PrivateRoute from './';
import Empty from '../Empty';

describe('PrivateRoute', () => {
  it('should do the right thing based on props', () => {
    [
      {
        component: Empty,
      },
      {
        component: Empty,
        isAuthenticated: true,
      },
      {
        component: Empty,
        isAuthenticated: true,
        redirectTo: '/glerb',
      },
      {
        component: Empty,
        redirectTo: '/glerb',
      },
    ].forEach(props => {
      expect(<PrivateRoute {...props} />).toMatchSnapshot();
    });
  });
});
