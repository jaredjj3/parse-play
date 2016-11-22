import React from 'react';
import Modal from 'react-modal';
import modalStyle from '../../util/modalStyle';

export default class extends React.Component {

  render() {
    return(
      <Modal
        className='profile-form-container form-container group'
        isOpen={this.props.fileModalOn}
        onRequestClose={this.onClickout}
        style={modalStyle}
      >
        I AM MODAL
      </Modal>
    );
  }

  // event methods

  onClickout() {
    console.log('clicked out')
  }

}