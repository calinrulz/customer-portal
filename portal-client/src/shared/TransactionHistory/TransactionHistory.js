import React, { Component } from "react";
import { Tree } from "element-react";

import "./TransactionHistory.scss";

export default class TransactionHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          label: '',
          children: [
            {
              label: '',
            }
          ]
        },
      ]
    };
  }

  componentDidMount = () => {
    const { activeAccounts } = Object.assign({}, this.props.accountTransactions);
    let parsedData = [];

    // Extract data from DB and match structure with 'element-react' library structure
    activeAccounts.map(account => {
      const { accountNumber } = account;

      return account.accountDetails.map(accountDetails => {
        return parsedData.push({
          label: `Account: ${accountNumber}`,
          children: [
            { label: `Deposit: $${accountDetails.deposits}` },
            { label: `Withdrawal: $${accountDetails.withdrawals}` }
          ]
        });
      });
    });

    return this.setState({
      data: parsedData
    });
  }

  render() {
    return (
      <div>
        <Tree
          className="transaction-accounts-table-container"
          data={this.state.data}
          highlightCurrent={true}
          onNodeClicked={(data, reactElement) => {
            console.debug("onNodeClicked: ", data, reactElement);
          }}
        />
      </div>
    );
  }
}
