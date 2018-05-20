import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'element-react';
import 'element-theme-default';

import InfoTable from '../../shared/InfoTable';

import './Dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/users/5b015d78470973963df0dbde')
      .then(res => {
        const data = res.data.activeAccounts;
        console.log(data);
        return this.setState({ data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="dashboard-container">
        <h2>Welcome to Acme Bank Portal</h2>

        <div className="dashboard-account-info-container">
          <Card
            className="box-card portal-card-box"
            header={
              <div className="clearfix">
                <span className="box-title">Accounts</span>
              </div>
            }
          >
            <InfoTable data={this.state.data} />
          </Card>
        </div>
      </div>
    );
  }
}

export default Dashboard;
