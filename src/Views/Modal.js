import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import UploadArt from './UploadArt';

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

function UploadModal(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <button onClick={openModal}>Upload</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Upload Art</h2>
          <button onClick={closeModal}>close</button>
          <UploadArt/>
        </Modal>
      </div>
    );
}

export default UploadModal;