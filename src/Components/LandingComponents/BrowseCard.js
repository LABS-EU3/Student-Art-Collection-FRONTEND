import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
max-width: 290px;
margin: 12px;
position: relative;

@media(max-width: 628px)
{
  width: 94%;
  max-width: 94%;
}
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
    background-color: ${props => props.theme.modalGrey};

    &:hover {
      opacity: 1;
    }
  }
  .text {
    color: ${props => props.theme.white};
    position: absolute;
    font-size: 2.7rem;
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
