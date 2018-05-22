import React, { Component } from 'react'
import { Card, Button } from 'element-react';

import './TitleWithCardBox.scss';

export default class TitleWithCardBox extends Component {
  render() {
    return (
      <div className="card-box-container">
        <h2>{this.props.title}</h2>

        <div className="card-box-account-info-container">
          <Card
            className="box-card portal-card-box"
            header={
              <div className="clearfix-title">
                <span className="box-title">{this.props.cardTitle}</span>
                {this.props.cardButton ? (
                  <span className="box-title-button">
                    <Button type="primary" onClick={this.props.editForm.bind(this)}>Edit</Button>
                  </span>
                ) : ''}
              </div>
            }
          >
            {this.props.children}
          </Card>
        </div>
      </div>
    )
  }
}
