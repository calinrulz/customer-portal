import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'element-react';

import './Navigation.scss';

const Navigation = () => {
  return (
    <div>
      <Menu
        defaultActive="1"
        className="nav-menu-container"
        theme="dark"
      >
        <h4>Acme Bank</h4>
        <span className="underline"></span>

        <Link to="/dashboard">
          <Menu.Item index="1"><i className="el-icon-menu"></i>Dashboard</Menu.Item>
        </Link>
        <Link to="/profile">
          <Menu.Item index="2"><i className="el-icon-setting"></i>Profile</Menu.Item>
        </Link>
        <Link to="/transactions">
          <Menu.Item index="3"><i className="el-icon-information"></i>Transactions</Menu.Item>
        </Link>
      </Menu>
    </div>
  );
};

export default Navigation;
