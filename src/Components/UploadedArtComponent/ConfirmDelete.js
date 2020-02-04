import React from "react";
import { axiosWithBase } from "../../AxiosCustom";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConfirmDelete(props) {
  const { artToDelete, setIsOpen } = props;

  function deleteArt(id) {
    axiosWithBase()
      .delete(`art/product/${id}`)
      .then(res => {
        const updatedArt = props.artForSale.filter(
          art => art._id !== res.data._id
        );
        props.setArtForSale(updatedArt);
        document.location.reload();
      })
      .catch(() => {
        toast.error("cannot delete art");
      });
  }

  return (
    <ConfirmContainer>
      <h2>Delete '{props.artToDelete.name}' ?</h2>
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
    </ConfirmContainer>
  );
}

const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;

  h2 {
      font-size: 2rem
      margin-bottom: 2rem;

      @media(max-width: 700px){
        font-size: 1.3rem;
      }
  }

  button {
    color: white;
    margin: 0 10px;
    padding: 0.6rem 1.6rem;
    font-size: 1.5rem;
    border-radius: 5px;

    @media(max-width: 700px){
      font-size: 1.2rem;
      padding: 0.6rem 1.1rem;
      margin: 0 5px;
    }

    @media(max-width: 400px){
      font-size: 1rem;
      padding: 0.3rem 0.6rem;
      margin: 0 2px;
    }
  }

  .cancel {
    background: ${props => props.theme.white};
      border: 1px solid ${props => props.theme.lightGrey};
      color: ${props => props.theme.black};
      border-radius: 4px;
      cursor: pointer;
      transition: opacity 0.2s ease-in-out;

      &:focus {
        outline: none;
      }

      &:hover {
        opacity: 0.5;
        transition: opacity 0.2s ease-in-out;
      }
  }
  
  .delete {
    background: ${props => props.theme.buttonOrange};
    color: ${props => props.theme.white};
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: opacity 0.2s ease-in-out;

    &:focus {
      outline: none;
    }

    &:hover {
      opacity: 0.5;
      transition: opacity 0.2s ease-in-out;
    }
  }
`;
