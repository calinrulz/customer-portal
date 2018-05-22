import React, { Component } from 'react';
import TitleWithCardBox from '../../shared/TitleWithCardBox';

import axios from 'axios';

import './Profile.scss';

class Profile extends Component {
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
    console.log(this.state.data);
    return (
      <TitleWithCardBox
        title="Acme Bank Customer Portal"
        cardTitle="Personal Information"
        cardButton={true}
      >
        {this.state.errorMessage ? (
          <h3 className="error-message">Content cannot be displayed! {this.state.errorMessage}</h3>
        ) : (
          this.state.data ? (
            <div className="personal-info-container">
            <div className="personal-info-box">
              <span>Name:</span>
              <span>{this.state.data.name}</span>
            </div>

            <div className="personal-info-box">
              <span>Email:</span>
              <span>{this.state.data.email}</span>
            </div>

            <div className="personal-info-box">
              <span>Phone Number:</span>
              <span>{this.state.data.phoneNumber}</span>
            </div>

            <div className="personal-info-box">
              <span>Address:</span>
              <span>{this.state.data.address}</span>
            </div>
          </div>
          ) : ''
        )}
      </TitleWithCardBox>
    );
  }
}

export default Profile;
