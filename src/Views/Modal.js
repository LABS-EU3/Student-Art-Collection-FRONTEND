import React from 'react';
import Modal from 'react-modal';
import UploadArt from './UploadArt';
import { StyledHeading } from './ModalStyle';
import UploadArtForm from '../Components/UploadArt Component/UploadArtForm';

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

          <StyledHeading ref={_subtitle => (subtitle = _subtitle)}>Upload Art</StyledHeading>
        
          <UploadArt/>
        </Modal>
      </div>
    );
}

export default UploadModal;