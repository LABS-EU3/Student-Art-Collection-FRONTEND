import React, { useState } from "react";
import { axiosWithBase } from "../../AxiosCustom";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConfirmDelete(props) {
  const { artToDelete, setIsOpen } = props;

  function deleteArt(id) {
    axiosWithBase()
      .delete(`/product/${id}`)
      .then(res => {
        const updatedArt = props.artForSale.filter(art => art._id !== res._id);
        props.setArtForSale(updatedArt);
      })
      .catch(() => {
        toast.error("cannot delete art");
      });
  }

  return (
    <ConfirmContainer>
      <div className="confirm">
        <h2>Delete '{props.artToDelete.name}'</h2>
        <div>
          <button
            className="cancel"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            className="delete"
            onClick={() => {
              deleteArt(artToDelete._id);
              setIsOpen(false);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </ConfirmContainer>
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
