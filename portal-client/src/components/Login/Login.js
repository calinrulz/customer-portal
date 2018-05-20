import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button, Form, Input } from 'element-react';
import 'element-theme-default';

import fakeAuth from '../../shared/fakeAuth';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: 'Please input the username', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('Please input the username'));
              } else {
                callback();
              }
            }
          }
        ],
        password: [
          { required: true, message: 'Please input the password', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('Please input the password'));
              } else {
                callback();
              }
            }
          }
        ],
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.refs.form.validate((valid) => {
      if (valid) {
        this.login();
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }

  onChange(key, value) {
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value })
    });
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
        <h2>Acme Bank Customer Portal</h2>

        <Card className="box-card form-container">
          <h3>Login</h3>
          <span className="underline"></span>
          <Form
            ref="form"
            model={this.state.form}
            rules={this.state.rules}
            className="login-form"
          >
            <Form.Item prop="username">
              <Input
                placeholder="Username"
                value={this.state.form.username}
                onChange={this.onChange.bind(this, 'username')}
              />
            </Form.Item>

            <Form.Item prop="password">
              <Input
                placeholder="Password"
                type="password"
                value={this.state.form.password}
                onChange={this.onChange.bind(this, 'password')}
              />
            </Form.Item>

            <Form.Item className="login-form-button">
              <Button type="primary" onClick={this.handleSubmit.bind(this)}>Login</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Login;
