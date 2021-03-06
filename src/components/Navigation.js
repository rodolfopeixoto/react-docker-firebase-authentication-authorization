import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import SignOutButton from './SignOut';

const Navigation = (props, { authUser }) =>
  <div>
    {
      authUser ? <NavigationAuth /> : <NavigationNonAuth />
    }
  </div>


Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign in</Link></li>
    <li><Link to={routes.SIGN_UP}>Sign up</Link></li>
  </ul>

export default Navigation;