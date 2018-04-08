import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import { Map } from 'immutable';
import PropTypes from 'prop-types';

import Public from '../Public/';

import { UserActions } from '../../actions';
import { mapActionsToPropTypes, combineArrayOfMaps } from '../../lib/util';

import './styles.css';

class App extends Component {
  static propTypes = {
    user: PropTypes.instanceOf(Map).isRequired,
    actions: mapActionsToPropTypes(UserActions).isRequired,
    pathname: PropTypes.string,
  };
  static defaultProps = {
    pathname: null,
  };

  componentDidMount() {
    const { actions, pathname } = this.props;
    actions
      .CHECK_LOGIN_STATUS()
      .then(() => {
        actions.goToApp(pathname);
      })
      .catch(() => {});
  }

  render() {
    const { user } = this.props;
    const isLoggedIn = user.get('isLoggedIn');
    const isLoading = user.get('isLoading');

    const content = isLoading ? (
      <div className="App">Loading...</div>
    ) : (
      <Public isLoggedIn={isLoggedIn} />
    );
    return <div className="App">{content}</div>;
  }
}

export default withRouter(
  connect(
    state => ({
      user: state.get('user'),
      pathname: state.getIn(['route', 'location', 'pathname']),
    }),
    dispatch => ({
      actions: bindActionCreators(
        combineArrayOfMaps([
          UserActions,
          {
            goToApp: path => push(path),
          },
        ]),
        dispatch
      ),
    })
  )(App)
);
