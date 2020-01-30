import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/Actions/actionCreators";
import { axiosWithBase } from "../../AxiosCustom";
import SchoolCard from "./SchoolCard";
import {
  StyledContainer,
  StyledEmptyContainer,
  StyledButtonContainer
} from "./BrowseArtContainerStyling";
import Spinner from "../Spinner";

function ArtSchoolContainer(props) {
  const [spinning, setSpinning] = useState(false);
  // const [spinning, setSpinning] = useState(true);
  const [page, setPage] = useState(1);
  const [upperPageLimit, setUpperPageLimit] = useState(null);

  const changePage = direction => {
    if (direction === "plus") {
      setPage(page + 1);
    } else if (direction === "minus") {
      if (page > 1) {
        setPage(page - 1);
      }
    }
    return null;
  };

  // useEffect(() => {
  //   axiosWithBase()
  //     .get(
  //       `/art/search?searchQuery=${props.browseArtState.searchQuery}&pagination=12&filter=${props.browseArtState.filter}&sortBy=${props.browseArtState.sortBy}&sortType=${props.browseArtState.sortType}&page=${page}`
  //     )
  //     .then(res => {
  //       setUpperPageLimit(Math.ceil(res.data.totalCount / 12));
  //       props.fetchArt(res.data.art);
  //       setSpinning(false);
  //     })
  //     .catch(() => {
  //       props.fetchArt([]);
  //       setSpinning(false);
  //     });
  //   props.toggleViewModal(false);
  // }, [
  //   page,
  //   props.browseArtState.sortBy,
  //   props.browseArtState.searchQuery,
  //   props.browseArtState.sortBy,
  //   props.browseArtState.sortType,
  //   props.browseArtState.filter
  // ]);

  console.log("james");

  useEffect(() => {
    props.fetchSchools([
      {
        _id: "5dfa52a33980af1bd42070a9",
        name: "John doe",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        userId: {
          userLocation: {
            location: {
              coordinates: []
            }
          },
          confirmed: false,
          _id: "5dfa52a33980af1bd42070a8",
          name: "John doe",
          email: "asdasdfasdf@aas.com",
          type: "school",
          username: "whatever",
          createdAt: "2019-12-18T16:24:03.148Z",
          updatedAt: "2019-12-18T16:24:03.148Z",
          __v: 0
        },
        createdAt: "2019-12-18T16:24:03.425Z",
        updatedAt: "2019-12-18T16:24:03.425Z",
        __v: 0
      },{
        _id: "5dfa52a33980af1bd42070a9",
        name: "John doe",
        userId: {
          userLocation: {
            location: {
              coordinates: []
            }
          },
          confirmed: false,
          _id: "5dfa52a33980af1bd42070a8",
          name: "John doe",
          email: "asdasdfasdf@aas.com",
          type: "school",
          username: "whatever",
          createdAt: "2019-12-18T16:24:03.148Z",
          updatedAt: "2019-12-18T16:24:03.148Z",
          __v: 0
        },
        createdAt: "2019-12-18T16:24:03.425Z",
        updatedAt: "2019-12-18T16:24:03.425Z",
        __v: 0
      },
    ]);
  }, []);

  if (spinning) {
    return (
      <StyledEmptyContainer>
        <Spinner />
      </StyledEmptyContainer>
    );
  }

  return (
    <>
      <StyledContainer>
        <div className="grid-row">
          {props.browseSchoolState.map(school => {
            return (
              <SchoolCard
                name={school.name}
                description={school.description}
              />
            );
          })}
        </div>
      </StyledContainer>
      <StyledButtonContainer>
        {page === 1 ? null : (
          <button onClick={() => changePage("minus")}>Previous</button>
        )}
        {page !== upperPageLimit ? (
          <button onClick={() => changePage("plus")}>Next</button>
        ) : null}
      </StyledButtonContainer>
    </>
  );
}

export default connect(state => state, actionCreators)(ArtSchoolContainer);
