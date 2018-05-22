import React, { Component } from 'react';
import TitleWithCardBox from '../../shared/TitleWithCardBox';
import EditInfoDialog from '../../shared/EditInfoDialog';
import EditForm from '../../shared/EditForm';

import axios from 'axios';

import './Profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      errorMessage: null,
      dialogVisible: false
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

  openEditForm = () => {
    this.setState({ dialogVisible: true });
  }

  exitForm = () => {
    this.setState({ dialogVisible: false });
  }

  render() {
    const { dialogVisible } = this.state;

    return (
      <div>
        <TitleWithCardBox
          title="Acme Bank Customer Portal"
          cardTitle="Personal Information"
          cardButton={true}
          editForm={this.openEditForm}
        >
          {this.state.errorMessage ? (
            <h3 className="error-message">Content cannot be displayed! {this.state.errorMessage}</h3>
          ) : (
            this.state.data ? (
              <div className="personal-info-container">
                <div className="personal-info-box">
                  <span>Customer ID:</span>
                  <span>{this.state.data._id}</span>
                </div>

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
            ) : <div className="loading-spinner"><i className="el-icon-loading"></i></div>
          )}
        </TitleWithCardBox>

        <EditInfoDialog dialogVisible={dialogVisible} cancelForm={this.exitForm}>
          {this.state.data ? (
            <EditForm formData={this.state.data}/>
          ) : ''}
        </EditInfoDialog>
      </div>
    );
  }
}

export default Profile;
