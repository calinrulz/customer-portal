import React, { Component } from 'react';
import { Form, Input, Button } from 'element-react';

import './EditForm.scss';

export default class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: '',
        email: '',
        phoneNumber: '',
        address: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input the name', trigger: 'blur' },
          { validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('Please input the name'));
            } else {
              callback();
            }
          } }
        ],
        email: [
          { required: true, message: 'Please input the email', trigger: 'blur' },
          { validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('Please input the email'));
            } else {
              callback();
            }
          } }
        ],
        phoneNumber: [
          { required: true, type: 'number', message: 'Please input the phoneNumber', trigger: 'blur' },
          { validator: (rule, value, callback) => {
            let number = parseInt(value, 0);

            setTimeout(() => {
              if (!Number.isInteger(number)) {
                callback(new Error('Please input digits'));
              } else {
                callback();
              }
            }, 500)
          }, trigger: 'change' }
        ],
        address: [
          { required: true, message: 'Please input the address', trigger: 'blur' },
          { validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('Please input the address'));
            } else {
              callback();
            }
          } }
        ],
      }
    };
  }

  componentDidMount() {
    const { formData } = this.props;
    this.setState({ form: formData });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.refs.form.validate((valid) => {
      if (valid) {
        console.log('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }

  onChange(key, value) {
    console.log(value);
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value })
    });
  }

  render() {
    return (
      <div>
        <Form
          ref="form"
          model={this.state.form}
          rules={this.state.rules}
          className="edit-form-container"
        >
          <Form.Item label="Name" prop="name">
            <Input
              type="text"
              value={this.state.form.name}
              onChange={this.onChange.bind(this, 'name')}
            />
          </Form.Item>

          <Form.Item label="Email" prop="email">
            <Input
              type="email"
              value={this.state.form.email}
              onChange={this.onChange.bind(this, 'email')}
            />
          </Form.Item>

          <Form.Item label="Phone Number" prop="phoneNumber">
            <Input
              type="number"
              value={this.state.form.phoneNumber}
              onChange={this.onChange.bind(this, 'phoneNumber')}
            />
          </Form.Item>

          <Form.Item label="Address" prop="address">
            <Input
              type="text"
              value={this.state.form.address}
              onChange={this.onChange.bind(this, 'address')}
            />
          </Form.Item>

          <Form.Item className="edit-info-submit-button">
            <Button type="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
