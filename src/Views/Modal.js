import React from 'react';
import Modal from 'react-modal';
import UploadArt from './UploadArt';
import { Button } from './ModalStyle';

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

function UploadModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

    return (
      <>
        <Button onClick={openModal}>Upload Art</Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <UploadArt closeModal={closeModal}/>
        </Modal>
      </>
    );
}

export default UploadModal;
