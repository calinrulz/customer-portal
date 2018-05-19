import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'element-react';
import 'element-theme-default';

import fakeAuth from '../../shared/fakeAuth';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false
    };
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="login-container">
        <Button type="primary" onClick={this.login}>Login</Button>
      </div>
    );
  }
}

export default Login;
