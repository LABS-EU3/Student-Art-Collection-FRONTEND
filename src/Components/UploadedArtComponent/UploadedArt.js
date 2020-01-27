import React, { useState, useEffect } from "react";
import { axiosWithBase } from "../../AxiosCustom";
import { connect } from "react-redux";
import Modal from "react-modal";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditForm from "../Test";
import {
  MainContainer2,
  StyledOrderContainer,
  CollectionItemContainer,
  SellingSection
} from "../../Views/BuyerOrderItems/BuyerOrderItemsStyle";
import Spinner from "../Spinner";

const customStyles = {
  content: {
    width: "80%",
    height: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("body");

function ArtForSale(props) {
  const [artForSale, setArtForSale] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [spinner, setSpinning] = useState(true);
  const [deleteArtId, setDeleteArtId] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function deleteArt(id) {
    axiosWithBase()
      .delete(`/art/selling/${id}`)
      .then(res => {
        const updatedArt = props.artForSale.filter(art => art._id !== res._id);
        props.setArtForSale(updatedArt);
      })
      .catch(() => {
        toast.error("cannot delete art");
      });
  }

  const id = props.loggedInUser._id;

  useEffect(() => {
    axiosWithBase()
      .get(`/art/selling/${id}`)
      .then(res => {
        setArtForSale(res.data);
        setSpinning(false);
      })
      .catch(() => {
        setSpinning(false);
        toast.error("cannot get art");
      });
  }, [modalIsOpen]);

  return (
    <MainContainer2>
      {!spinner ? (
        artForSale.length ? (
          artForSale.map(art => {
            return (
              <>
                <StyledOrderContainer key={art._id}>
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
                    <div className="buttons">
                      <button
                        className="edit"
                        onClick={() => {
                          setDeleteArtId(null);
                          openModal();
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={
                          () => {
                            setDeleteArtId(art);
                            openModal();
                          }
                          // setConfirmDelete(art._id)
                          // props.history.push(`/selling/forsale/delete/${art._id}`);
                        }
                        className="delete"
                      >
                        Delete
                      </button>
                    </div>
                  </CollectionItemContainer>
                </StyledOrderContainer>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                >
                  {deleteArtId ? (
                    <ConfirmContainer>
                      <div className="confirm">
                        <h2>Delete '{deleteArtId.name}'</h2>
                        <div>
                          <button
                            className="cancel"
                            onClick={() => setIsOpen(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="delete"
                            onClick={() => deleteArt(id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </ConfirmContainer>
                  ) : (
                    <EditForm editArt={art} onRequestClose={closeModal} />
                  )}
                </Modal>
              </>
            );
          })
        ) : (
          <div className="nothing">Nothing here yet!</div>
        )
      ) : (
        <div className="nothing">
          <Spinner />
        </div>
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
          "font-size": "1.5rem",
          width: "400px",
          "text-align": "center"
        }}
      />
    </MainContainer2>
  );
}

const ConfirmContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 5px;

    h2 {
        font-size: 2rem
    }

    button {
      color: white;
      margin: 0 10px;
      padding: 0.6rem 1.6rem;
      font-size: 1.5rem;
      border-radius: 5px;
  }

    .confirm {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 150px;
        width: 300px;
        padding: 1rem
        border: 1px solid grey;
        border-radius: 5px;
        // background-color: yellow;
      }
      .cancel {
        background-color: green;
        border: 1px solid green;
        &:hover {
          color: green;
          background: white;
        }
      }
      
      .delete {
        background-color: red;
        border: 1px solid red;
        &:hover {
          color: red;
          background: white;
        }
      }
      
`;

export default connect(state => state)(ArtForSale);
