import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Map } from 'immutable';
import PropTypes from 'prop-types';

import Main from '../Main/';
import Login from './Login';
import About from './About';

import { UserActions } from '../../actions';
import PrivateRoute from '../../components/PrivateRoute';
import logo from '../../assets/logo.svg';
import './styles.css';

class Public extends Component {
  static propTypes = {
    location: PropTypes.instanceOf(Map),
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    isLoggedIn: PropTypes.bool,
  };
  static defaultProps = {
    location: Map({ pathname: '/' }),
    isLoggedIn: false,
  };

  renderNavBar = () => {
    const { location, actions, isLoggedIn } = this.props;
    const pathname = location.get('pathname');

    const menuBarItems = [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'About',
        path: '/about',
      },
    ];

    const menuBarItemComponents = menuBarItems.map(item => {
      return (
        <a
          className={pathname === item.path ? 'active' : ''}
          key={item.name}
          href={item.path}
          onClick={e => {
            e.preventDefault();
            actions.navigate(item.path);
          }}
        >
          {item.name}
        </a>
      );
    });

    if (isLoggedIn) {
      menuBarItemComponents.push(
        <a
          key="Logout"
          href="/"
          onClick={e => {
            e.preventDefault();
            actions.LOGOUT();
          }}
        >
          Logout
        </a>
      );
    }

    return <div className="Public-navbar">{menuBarItemComponents}</div>;
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="public-container">
        <div className="Public">
          <h1 className="Public-header">
            <img src={logo} className="Public-header-logo" alt="logo" />
            Eden Health Code Challenge
          </h1>

          {this.renderNavBar()}

          <Switch>
            <PrivateRoute
              isAuthenticated={isLoggedIn}
              path="/app"
              component={Main}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({ location: state.getIn(['router', 'location']) }),
    dispatch => ({
      actions: bindActionCreators(
        {
          ...UserActions,
          navigate: path => push(path),
        },
        dispatch
      ),
    })
  )(Public)
);
