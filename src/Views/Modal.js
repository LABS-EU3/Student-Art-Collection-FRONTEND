import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import UploadArt from './UploadArt';
import { Button } from './ModalStyle';
import StripeRegistration from './StripePage/StripeRegistrationPage';

const customStyles = {
  content: {
    width: '80%',
    height: '90%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    background: 'rgba(0,0,0,0.6)'
  }
};

Modal.setAppElement('body');

function UploadModal({state}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const {loggedInUser} = state
    return (
      <>
        <Button onClick={openModal}>Upload</Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          {!loggedInUser.stripe_user_id ? 
            <StripeRegistration /> : 
            <UploadArt 
              closeModal={closeModal}
            /> }
          
        </Modal>
      </>
    );
};

const mapStateToprops = state => ({
  state
})

export default connect(mapStateToprops)(UploadModal);
