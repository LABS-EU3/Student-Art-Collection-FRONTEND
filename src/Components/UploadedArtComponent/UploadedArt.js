import React, { useState, useEffect } from 'react';
import { axiosWithBase } from '../../AxiosCustom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditForm from '../Test';
import {MainContainer,StyledOrderContainer,CollectionItemContainer, SellingSection} from '../../Views/BuyerOrderItems/BuyerOrderItemsStyle';
import Spinner from '../Spinner';

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

function ArtForSale(props) {
  const [artForSale, setArtForSale] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [spinner, setSpinning] = useState(true);

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
        setSpinning(false)
      })
      .catch(() => {
        setSpinning(false)
        toast.error('cannot get art')
      });
  }, [modalIsOpen]);

  return (
    <MainContainer>
      {!spinner ?  (
        artForSale.length ? (
          artForSale.map(art => {
            return (
              <>
                <StyledOrderContainer key={art.name}>
                  <CollectionItemContainer>
                    <div className="order-img">
                      <img src={art.picture} alt={art.name} />
                    </div>
                    <SellingSection>
                    <div>
                      <span>{art.name}</span>
                      <span>{art.artistName}</span>
                    </div>
                    <div>
                      <span>{`${art.height} x ${art.width}`}</span>
                      <span>${art.price}</span>
                    </div>
                    </SellingSection>
                    <button onClick={openModal}>Edit</button>
                  </CollectionItemContainer>
                 
                 
                </StyledOrderContainer>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                >
                  <EditForm 
                    editArt={art} 
                    onRequestClose={closeModal}

                  />
                </Modal>
              </>
            );
          })
        ) : (
          <h1> no art </h1>
        )
      ) : (
        <Spinner />
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
    </MainContainer>
  );
}

export default connect(state => state)(ArtForSale);
