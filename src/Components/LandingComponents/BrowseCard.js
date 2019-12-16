import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
width: 290px;
height: 290px;
margin: 12px;
position: relative;

img {
    max-width: 100%;
    height: auto;
}

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    transition: .5s ease;
    background-color: rgba(0,0,0, 0.6);

    &:hover {
      opacity: 1;
    }
  }
  .text {
    color: white;
    position: absolute;
    font-size: 2.7rem;
    font-family: 'Julius Sans One', sans-serif;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

`

function BrowseCard(props) {
    return (
        <Box>
            <img src={props.image} alt={props.alt} />
            <div className="overlay">
                <div className="text">{props.alt}</div>
            </div>
        </Box>
    )
}

export default BrowseCard;
