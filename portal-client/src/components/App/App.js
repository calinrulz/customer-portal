import React, { Component } from 'react';
import routes from '../../router';
import { Layout } from 'element-react';
import fakeAuth from '../../shared/fakeAuth';
import { base } from '../../base';

import Navigation from '../Navigation/index';

import './App.scss';

class App extends Component {
  render() {
    const navBar = fakeAuth.isAuthenticated ?
      (
        <Layout.Row>
          <Layout.Col span="4">
            <Navigation />
          </Layout.Col>

          <Layout.Col span="20">
            {routes}
          </Layout.Col>
        </Layout.Row>
      ) : (
        <Layout.Row>
          <Layout.Col span="24">
            {routes}
          </Layout.Col>
        </Layout.Row>
      );
    return (
      <div className="app-container">
        {navBar}
      </div>
    );
  }
}

export default App;
