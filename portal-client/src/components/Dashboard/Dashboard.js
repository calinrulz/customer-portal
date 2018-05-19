import React, { Component } from 'react';
import { Button } from 'element-react';
import 'element-theme-default';

import './Dashboard.scss';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Button type="primary">Your Dashboard</Button>
      </div>
    );
  }
}

export default Dashboard;
