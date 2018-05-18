import React, { Component } from 'react';
import routes from '../../router';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        {routes}
      </div>
    );
  }
}

export default App;
