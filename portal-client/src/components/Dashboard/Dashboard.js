import React, { Component } from 'react';
import axios from 'axios';
import InfoTable from '../../shared/InfoTable';

import { Card } from 'element-react';
import 'element-theme-default';

import './Dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      errorMessage: null
    };
  }

  componentDidMount() {
    this.getUserData()
      .then(res => this.setState({ data: res.data.activeAccounts }))
      .catch(err => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      });
  }

  getUserData = async () => {
    const response = await axios.get('http://localhost:3001/users/5b015d78470973963df0dbde');

    if (response.status !== 200) throw new Error(response.message);
    return response;
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
            {this.state.errorMessage ? (
              <h3 className="error-message">Content cannot be displayed! {this.state.errorMessage}</h3>
            ) : <InfoTable data={this.state.data} />}
          </Card>
        </div>
      </div>
    );
  }
}

export default Dashboard;
