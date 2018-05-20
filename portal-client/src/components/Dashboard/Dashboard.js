import React, { Component } from 'react';
import { Card } from 'element-react';
import 'element-theme-default';

import InfoTable from '../../shared/InfoTable';

import './Dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          label: "Account Number",
          prop: "accountNumber",
          width: 150
        },
        {
          label: "Currency",
          prop: "currency",
          width: 100
        },
        {
          label: "Current Balance",
          prop: "currentBalance",
          width: 150
        },
        {
          label: "Status",
          prop: "status",
          width: 100
        }
      ],
      data: [
        {
          accountNumber: 37720838923923,
          currency: 'EUR',
          currentBalance: 3289,
          status: 'active'
        },
        {
          accountNumber: 99838782398999,
          currency: 'USD',
          currentBalance: -2901,
          status: 'not-active'
        }
      ]
    };
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
            <InfoTable data={this.state.data} columns={this.state.columns} />
          </Card>

          <Card
            className="box-card portal-card-box"
            header={
              <div className="clearfix">
                <span className="box-title">Accounts</span>
              </div>
            }
          >
            <InfoTable data={this.state.data} columns={this.state.columns} />
          </Card>
        </div>
      </div>
    );
  }
}

export default Dashboard;
