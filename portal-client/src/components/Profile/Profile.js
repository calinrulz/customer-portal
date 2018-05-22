import React, { Component } from 'react';
import TitleWithCardBox from '../../shared/TitleWithCardBox';

import './Profile.scss';

class Profile extends Component {
  render() {
    return (
      <TitleWithCardBox
        title="Acme Bank Customer Portal"
        cardTitle="Personal Information"
      >

      </TitleWithCardBox>
    );
  }
}

export default Profile;
