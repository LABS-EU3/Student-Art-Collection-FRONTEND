import React, { useState, useEffect } from "react";
import { axiosWithBase } from "../../AxiosCustom";
import { connect } from "react-redux";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditForm from "./Test";
import {
  MainContainer2,
  StyledOrderContainer,
  CollectionItemContainer,
  SellingSection
} from "../../Views/BuyerOrderItems/BuyerOrderItemsStyle";
import Spinner from "../Spinner";
import ConfirmDelete from "./ConfirmDelete";

const customStyles = {
  content: {
    width: "80%",
    height: "83%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    background: "rgba(0,0,0,0.3)"
  }
};

const deleteStyles = {
  content: {
    width: "50%",
    height: "20%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    background: "rgba(0,0,0,0.3)"
  }
};

Modal.setAppElement("body");

function ArtForSale(props) {
  const [artForSale, setArtForSale] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [spinner, setSpinning] = useState(true);
  const [artToDelete, setArtToDelete] = useState(null);
  const [artToEdit, setArtToEdit] = useState(null);

   function openModal() {
    setIsOpen(true);
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
        setSpinning(false);
      })
      .catch(() => {
        setSpinning(false);
        toast.error("cannot get art");
      });
  }, [modalIsOpen, id]);

  return (
    <MainContainer2>
      {!spinner ? (
        artForSale.length ? (
          artForSale.map(art => {
            return (
              <>
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
                      <span>${art.price}</span>
                    </div>
                  </SellingSection>
                  <div className="buttons">
                    <button
                      className="edit"
                      onClick={() => {
                        setArtToDelete(null);
                        setArtToEdit(art);
                        openModal();
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setArtToDelete(art);
                        openModal();
                      }}
                      className="delete"
                    >
                      Delete
                    </button>
                  </div>
                </CollectionItemContainer>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={artToDelete ? deleteStyles : customStyles}
                >
                  {artToDelete ? (
                    <ConfirmDelete
                      setIsOpen={setIsOpen}
                      artToDelete={artToDelete}
                      artForSale={artForSale}
                      setArtForSale={setArtForSale}
                    />
                  ) : (
                    <EditForm editArt={artToEdit} onRequestClose={closeModal} />
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

export default connect(state => state)(ArtForSale);
