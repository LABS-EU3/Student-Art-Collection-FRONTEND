import React, { useState, useEffect } from 'react';
import { axiosWithBase } from '../../AxiosCustom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { StyledBox } from '../BrowseComponents/BrowseCardStyling';
import EditForm from '../Test';

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

  function openModal() {
    setIsOpen(true);
    // setEditArt(art);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const id = props.loggedInUser._id;

  useEffect(() => {
    axiosWithBase()
      .get(`/art/selling/${id}`)
      .then(res => {
        setArtForSale(res.data);
      })
      .catch(() => {
        toast.error('cannot get art')
      });
  }, [artForSale]);

  return (
    <StyledDiv>
      {artForSale ? (
        artForSale.length ? (
          artForSale.map(art => {
            return (
              <>
                <StyledBox>
                  <img src={art.picture} alt={art.name} />
                  <div className="art-info">
                    <h2>{art.name}</h2>
                    <h3>{art.artistName}</h3>
                    <h3>{`${art.height} x ${art.width}`}</h3>
                    <h2>${art.price}</h2>
                  </div>
                  <button onClick={openModal}>Edit</button>
                </StyledBox>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                >
                  <EditForm editArt={art} />
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
      <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          pauseOnVisibilityChange
          draggable
          pauseOnHover
          closeButton={false}
          style={{
            'font-size': '1.5rem',
            width: '400px',
            'text-align': 'center'
          }}
      />
    </StyledDiv>
  );
}

export default connect(state => state)(ArtForSale);
