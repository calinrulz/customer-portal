import React, { Component } from 'react';
import { Layout } from 'element-react';

import './InfoTable.scss';

export default class InfoTable extends Component {
  render() {
    return (
      <div className="table-container">
        <div className="table-header-row">
          <span className="account-number">Account Number</span>
          <span className="currency">Currency</span>
          <span className="current-balance">Current Balance</span>
          <span className="active-account">Status</span>
        </div>

        {
          this.props.data ? this.props.data.map(account => {
            return (
              <Layout.Row key={account._id} className="account-table-row">
                <div className="account-table-cell account-number">
                  {account.accountNumber}
                </div>

                <div className="account-table-cell currency">
                  {account.currency}
                </div>

                <div className="account-table-cell current-balance">
                  {account.currentBalance}
                </div>

                <div className="account-table-cell active-account">
                  {account.active ? <i className="el-icon-check"></i> : <i className="el-icon-close"></i>}
                </div>
              </Layout.Row>
            );
          }) : <div>Loading...</div>
        }
      </div>
    )
  }
}
