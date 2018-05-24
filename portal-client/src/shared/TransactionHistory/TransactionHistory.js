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
              label: "level two 1-1",
            }
          ]
        },
      ]
    };
  }

  componentDidMount = () => {
    const transactionHistory = Object.assign({}, this.props.accountTransactions);
    const currentData = this.state.data.slice();

    transactionHistory.map(account => {
      
    })
  }

  render() {
    return (
      <div>
        <Tree
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
