import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';
import { axiosWithBase } from '../../AxiosCustom';
import BrowseCard from './BrowseCard';
import {
  StyledContainer,
  StyledEmptyContainer,
  StyledButtonContainer
} from './BrowseArtContainerStyling';
import Spinner from '../Spinner';

function ArtContainer(props) {
  const [spinning, setSpinning] = useState(true);
  const [page, setPage] = useState(1);
  const [upperPageLimit, setUpperPageLimit] = useState(null);

  const changePage = direction => {
    if (direction === 'plus') {
      setPage(page + 1);
    } else if (direction === 'minus') {
      if (page > 1) {
        setPage(page - 1);
      }
    }
    return null;
  };
  const { browseArtState } = props;
  useEffect(() => {
    axiosWithBase()
      .get(
        `/art/search?searchQuery=${browseArtState.searchQuery}&pagination=12&filter=${browseArtState.filter}&sortBy=${browseArtState.sortBy}&sortType=${browseArtState.sortType}&page=${page}`
      )
      .then(res => {
        setUpperPageLimit(Math.ceil(res.data.totalCount / 12));
        props.fetchArt(res.data.art);
        setSpinning(false);
      })
      .catch(() => {
        props.fetchArt([]);
        setSpinning(false);
      });
    props.toggleViewModal(false);
  }, [
    page,
    props.browseArtState.sortBy,
    props.browseArtState.searchQuery,
    props.browseArtState.sortBy,
    props.browseArtState.sortType,
    props.browseArtState.filter
  ]);

  if (spinning) {
    return (
      <StyledEmptyContainer>
        <Spinner />
      </StyledEmptyContainer>
    );
  } else if (props.browseArtState.artSorted.length === 0) {
    return (
      <StyledEmptyContainer>
        <h1>Nothing here!</h1>
      </StyledEmptyContainer>
    );
  }

  return (
    <>
      <StyledContainer>
        <div className="grid-row">
          {props.browseArtState.artSorted
            ? props.browseArtState.artSorted.map(art => {
                return (
                  <BrowseCard
                    image={art.picture}
                    alt={art.name}
                    title={art.name}
                    artistName={art.artistName}
                    dimensions={`${art.height} x ${art.width}`}
                    price={art.price}
                    key={art.public_picture_id}
                    id={art.public_picture_id}
                  />
                );
              })
            : null}
        </div>
      </StyledContainer>
      <StyledButtonContainer>
        {page === 1 ? null : (
          <button onClick={() => changePage('minus')}>Previous</button>
        )}
        {page !== upperPageLimit ? (
          <button onClick={() => changePage('plus')}>Next</button>
        ) : null}
      </StyledButtonContainer>
    </>
  );
}

export default connect(state => state, actionCreators)(ArtContainer);
