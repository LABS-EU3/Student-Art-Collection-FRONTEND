import React from 'react';
import Modal from 'react-modal';
import { Button } from './EditModalStyle';
import EditArtForm from './EditArtForm';

const customStyles = {
  content : {
    width: '80%',
    height: '80%',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement ("body");

function UploadModal(props){
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <Button onClick={openModal}>Edit Art</Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <EditArtForm art={props.art} closeModal={closeModal}/>
        </Modal>
      </div>
    );
}

export default UploadModal;