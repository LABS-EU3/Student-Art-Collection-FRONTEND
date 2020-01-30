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
    margin-bottom: 1rem;
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

function RecentCard(props) {
    return (
        <Box>
            <img src={props.image} alt={props.alt} />
            <div className="art-info">
                <h2>{props.title}</h2>
                <h3>{props.artist}</h3>
                <h3>{props.dimensions}</h3>
                <h2>{props.price}</h2>
            </div>
        </Box>
    )
}

export default RecentCard;
