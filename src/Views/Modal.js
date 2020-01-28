import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import UploadArt from './UploadArt';
import { Button } from './ModalStyle';
import StripeRegistration from './StripePage/StripeRegistrationPage';

const customStyles = {
  content: {
    width: '80%',
    height: '80%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
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

  console.log({loggedInUser: state.loggedInUser})
  const {loggedInUser} = state
    return (
      <>
        <Button onClick={openModal}>Upload Art</Button>
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
