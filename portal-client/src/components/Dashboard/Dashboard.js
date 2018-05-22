import React, { Component } from 'react';
import axios from 'axios';
import TitleWithCardBox from '../../shared/TitleWithCardBox';
import InfoTable from '../../shared/InfoTable';

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
      <TitleWithCardBox
        title="Welcome to Acme Bank Customer Portal"
        cardTitle="Accounts"
      >
        {this.state.errorMessage ? (
          <h3 className="error-message">Content cannot be displayed! {this.state.errorMessage}</h3>
        ) : <InfoTable data={this.state.data} />}
      </TitleWithCardBox>
    );
  }
}

export default Dashboard;
