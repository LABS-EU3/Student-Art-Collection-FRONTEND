import React, { useState, useEffect } from 'react';
import { axiosWithBase } from '../../AxiosCustom';
import { connect } from 'react-redux';
import EditModal from './EditModal';
import Modal from 'react-modal';
import { Button } from './EditModalStyle';
import EditArtForm from './EditArtForm';
import { Formik } from 'formik';

import styled from 'styled-components';

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

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  .photo-container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

Modal.setAppElement('body');

function ArtForSale(props) {
  const [artForSale, setArtForSale] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const id = props.loggedInUser._id;
  console.log(id);

  useEffect(() => {
    axiosWithBase()
      .get(`/art/selling/${id}`)
      .then(res => {
        // debugger;
        setArtForSale(res.data);
        console.log(res);
        // debugger;
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const editArtHandle = values => {
    debugger;
  };

  return (
    <StyledDiv>
      {artForSale ? (
        artForSale.length ? (
          artForSale.map(art => {
            return (
              <>
                <div className="photo-container">
                  <img src={art.picture} alt="art" />
                  <button onClick={openModal}>Edit</button>
                </div>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                >
                  {/* <h3>Hello you there</h3> */}
                  {/* <Formik
                    initialValues={art}
                    onSubmit={editArtHandle}
                    component={EditArtForm}
                  /> */}
                  <EditArtForm
                    art={art}
                    closeModal={closeModal}
                    editArtHandle={editArtHandle}
                  />
                </Modal>
              </>
            );
          })
        ) : (
          <h1> no art </h1>
        )
      ) : (
        <h2>spinner</h2>
      )}
    </StyledDiv>
  );
}

export default connect(state => state)(ArtForSale);
