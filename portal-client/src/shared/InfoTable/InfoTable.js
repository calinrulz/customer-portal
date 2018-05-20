import React, { Component } from 'react';
import { Table } from 'element-react';

import './InfoTable.scss';

export default class InfoTable extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="table-container">
        <Table
          columns={this.props.columns}
          data={this.props.data}
        />
      </div>
    )
  }
}
