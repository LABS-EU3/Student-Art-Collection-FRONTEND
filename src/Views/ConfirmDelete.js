import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actionCreators from "../store/Actions/actionCreators";
import { ToastContainer, toast } from "react-toastify";

import Spinner from "../Components/Spinner";
import { axiosWithBase } from "../AxiosCustom";

function ConfirmDelete(props) {
  const { id } = props.match.params;
  console.log(id);

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

  return (
    <ConfirmContainer>
      <div className="confirm">
        <h2>Confirm Delete</h2>

        <div>
          <button
            className="cancel"
            onClick={() => props.history.push("/selling/forsale")}
          >
            Cancel
          </button>
          <button className="delete" onClick={() => deleteArt(id)}>
            Delete
          </button>
        </div>
      </div>
    </ConfirmContainer>
  );
}

const ConfirmContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 80%;
    // margin-left: -80px;
    background-color: white;
    border: 1px solid red;
    padding: 5px;

    h2 {
        font-size: 2rem
    }

    .confirm {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 150px;
        width: 60%;
        padding: 1rem
        border: 1px solid black;
        border-radius: 5px;
        // background-color: yellow;

    }
    .cancel {
        background-color: green;
    }

    .delete {
        background-color: red;
    }

    button {
        margin: 0 10px;
        padding: 0.6rem 1.6rem;
        font-size: 1.5rem;
        border-radius: 5px;
    }
`;

export default connect(state => state, actionCreators)(ConfirmDelete);
