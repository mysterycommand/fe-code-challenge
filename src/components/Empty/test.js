import React from 'react';
import Empty from './';

describe('Empty', () => {
  it('should be empty', () => {
    expect(<Empty />).toMatchSnapshot();
  });
});
