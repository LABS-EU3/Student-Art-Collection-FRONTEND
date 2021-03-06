import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';
import { StyledBox } from './BrowseCardStyling';

function BrowseCard(props) {
  const populateViewModal = () => {
    props.toggleViewModal(!props.browseArtState.artModalOpen);

    const test = props.browseArtState.art.filter(x => {
      return x.public_picture_id === props.id;
    });
    props.selectArt(test[0]);
  };

  return (
    <StyledBox onClick={populateViewModal} data-testid="card">
      <img src={props.image} alt={props.alt} data-testid="artPhoto" />
      <div className="art-info">
        <h2>{props.title}</h2>
        <h3>{props.artistName}</h3>
        <h3>{props.dimensions}</h3>
        <h2>£{props.price}</h2>
      </div>
    </StyledBox>
  );
}

export default connect(state => state, actionCreators)(BrowseCard);
