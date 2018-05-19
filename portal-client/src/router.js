import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import fakeAuth from './shared/fakeAuth';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Transactions from './components/Transactions';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const routes = (
  <Switch>
    <Route exact path="/login" component={Login} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute path="/profile" component={Profile} />
    <PrivateRoute path="/transactions" component={Transactions} />
    <Redirect from="/" to="/login" />
  </Switch>
);

export default routes;
