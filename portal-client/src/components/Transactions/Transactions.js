import React, { Component } from 'react';
import axios from 'axios';
import TitleWithCardBox from '../../shared/TitleWithCardBox';
import TransactionHistory from '../../shared/TransactionHistory';

import './Transactions.scss';

class Transactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      errorMessage: null
    };
  }

  componentDidMount() {
    this.getUserData()
      .then(res => this.setState({ data: res.data }))
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
    const { data } = this.state;
    return (
      <div className="transactions-container">
        <TitleWithCardBox
          title="Acme Bank Customer Portal"
          cardTitle="Transactions History"
        >
          {this.state.errorMessage ? (
            <h3 className="error-message">Content cannot be displayed! {this.state.errorMessage}</h3>
          ) : (
            data ?
            <TransactionHistory accountTransactions={data} /> :
            <div className="loading-spinner"><i className="el-icon-loading"></i></div>
          )}
        </TitleWithCardBox>
      </div>
    );
  }
}

export default Transactions;
