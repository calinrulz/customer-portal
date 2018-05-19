import React, { Component } from 'react';
import { Button } from 'element-react';
import 'element-theme-default';

import './Transactions.scss';

class Transactions extends Component {
  render() {
    return (
      <div className="transactions-container">
        <Button type="primary">Your Transactions Page</Button>
      </div>
    );
  }
}

export default Transactions;
