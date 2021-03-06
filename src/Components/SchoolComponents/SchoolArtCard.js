import React from 'react';
import { withRouter } from 'react-router-dom';

// HELPERS
import * as actionCreators from '../../store/Actions/actionCreators';

// STYLES
import { StyledBox } from '../BrowseComponents/BrowseCardStyling';
import { connect } from 'react-redux';

const SchoolArtCard = ({
  art,
  toggleViewModal,
  browseArtState,
  selectArt,
  history
}) => {
  const populateViewModal = () => {
    toggleViewModal(!browseArtState.artModalOpen);

    // const test = props.browseArtState.art.filter(x => {
    //     return x.public_picture_id === props.id;
    // })
    selectArt(art);
    history.push('/browseartschool');
  };
  return (
    <StyledBox onClick={populateViewModal}>
      <img src={art.picture} alt={art.name} />
      <div className="art-info">
        <h2>{art.name}</h2>
        <h3>{art.artistName}</h3>
        <h3>{`${art.width} x ${art.height}`} </h3>
        <h2>£{art.price}</h2>
      </div>
    </StyledBox>
  );
};

export default withRouter(
  connect(state => state, actionCreators)(SchoolArtCard)
);
