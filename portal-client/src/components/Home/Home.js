import React, { Component } from 'react';
import { Button } from 'element-react';
import 'element-theme-default';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Button type="primary">Your Home</Button>
      </div>
    );
  }
}

export default Home;
