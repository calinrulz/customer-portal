import React, { Component } from 'react';
import { Menu } from 'element-react';

import './Navigation.scss';

export default class Navigation extends Component {
  onOpen() {

  }

  onClose() {

  }

  render() {
    return (
      <div>
        <Menu
          defaultActive="1"
          className="nav-menu-container"
          onOpen={this.onOpen.bind(this)}
          onClose={this.onClose.bind(this)}
          theme="dark"
        >
          <Menu.Item index="1"><i className="el-icon-menu"></i>Dashboard</Menu.Item>
          <Menu.Item index="2"><i className="el-icon-setting"></i>Profile</Menu.Item>
          <Menu.Item index="3"><i className="el-icon-information"></i>Transactions</Menu.Item>
        </Menu>
      </div>
    )
  }
}
