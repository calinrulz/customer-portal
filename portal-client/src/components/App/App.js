import React, { Component } from 'react';
import routes from '../../router';
import { Layout } from 'element-react';

import Navigation from '../Navigation/index';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Layout.Row>
          <Layout.Col span="4">
            <Navigation />
          </Layout.Col>

          <Layout.Col span="20">
            {routes}
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }
}

export default App;
