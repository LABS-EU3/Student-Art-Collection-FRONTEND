import React from 'react';

// STYLES
import { StyledBox } from '../BrowseComponents/BrowseCardStyling';

const SchoolArtCard = ({ art }) => {
  debugger;
  return (
    <StyledBox>
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

export default SchoolArtCard;
