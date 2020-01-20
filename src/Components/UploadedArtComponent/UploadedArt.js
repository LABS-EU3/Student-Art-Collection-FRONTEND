import React, { useState, useEffect } from 'react';
import { axiosWithBase } from '../../AxiosCustom';
import { connect } from 'react-redux';
import EditModal from './EditModal';
import Modal from 'react-modal';
import { Button } from './EditModalStyle';
import EditArtForm from './EditArtForm';
import { Formik } from 'formik';

import styled from 'styled-components';
import { StyledBox } from '../BrowseComponents/BrowseCardStyling';
import Test from '../Test';

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
  /* .photo-container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  } */
`;

Modal.setAppElement('body');

function ArtForSale(props) {
  const [artForSale, setArtForSale] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [editArt, setEditArt] = useState(null);

  function openModal(art) {
    setIsOpen(true);
    setEditArt(art);
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
            debugger;
            return (
              <>
                <StyledBox>
                  <img src={art.picture} alt={art.name} />
                  <div className="art-info">
                    <h2>{art.name}</h2>
                    <h3>{art.artistName}</h3>
                    <h3>{`${art.height} x ${art.width}`}</h3>
                    <h2>£{art.price}</h2>
                  </div>
                  <button onClick={() => openModal(art)}>Edit</button>
                </StyledBox>
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
                  {/* <EditArtForm
                    art={art}
                    closeModal={closeModal}
                    editArtHandle={editArtHandle}
                  /> */}
                  <Test editArt={editArt} />
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
