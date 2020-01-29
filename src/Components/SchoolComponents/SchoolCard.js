import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actionCreators from '../../store/Actions/actionCreators';

function SchoolCard(props) {

    const populateViewModal = () => {
        props.toggleViewModal(!props.browseArtState.artModalOpen);

        const test = props.browseArtState.art.filter(x => {
            return x.public_picture_id === props.id;
        })
        props.selectArt(test[0])
    }

    return (
        <StyledBox onClick={populateViewModal}>
            <img src={props.image} alt={props.alt} />
            <div className="art-info">
                <h2>{props.title}</h2>
                <h3>{props.artistName}</h3>
                <h3>{props.dimensions}</h3>
                <h2>£{props.price}</h2>
            </div>
        </StyledBox>
    )
}

const StyledBox = styled.div`
  max-height: auto;
  flex-basis: 25%;
  -ms-flex: auto;
  width: 250px;
  position: relative;
  padding: 10px 20px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  @media(max-width: 1073px) {
    flex-basis: 33.33%;
    height: auto;
  }

  @media(max-width: 815px) {
    flex-basis: 50%;
    height: auto;

  }
  @media(max-width: 375px) {
    flex-basis: 100%;
    height: auto;
    margin-left: 14px;
  }
  @media(max-width: 340px) {
    flex-basis: 100%;
    height: auto;
    margin-left: 0px;

}

h2 {
    font-size: 1.5rem;
    font-weight: 550;
    margin-bottom: 0.8rem;
}

h3 {
    opacity: 0.5;
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
}
`

export default connect(state => state, actionCreators)(SchoolCard);
