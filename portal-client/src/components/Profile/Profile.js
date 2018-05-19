import React, { Component } from 'react';
import { Button } from 'element-react';
import 'element-theme-default';

import './Profile.scss';

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <Button type="primary">Your Profile Page</Button>
      </div>
    );
  }
}

export default Profile;
