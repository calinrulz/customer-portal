import React, { Component } from 'react';
import { Dialog } from 'element-react';

import './EditInfoDialog.scss';

export default class EditInfoDialog extends Component {
  render() {
    const { dialogVisible } = this.props;

    return (
      <div>
        <Dialog
          title="Edit Personal Info"
          size="tiny"
          visible={dialogVisible}
          onCancel={this.props.cancelForm.bind(this)}
          lockScroll={false}
        >
          <Dialog.Body>
            {this.props.children}
          </Dialog.Body>

          {/* <Dialog.Footer className="dialog-footer">
            <Button onClick={this.props.cancelForm.bind(this)}>Cancel</Button>
            <Button type="primary" onClick={() => this.setState({ dialogVisible: false })}>Confirm</Button>
          </Dialog.Footer> */}
        </Dialog>
      </div>
    )
  }
}
