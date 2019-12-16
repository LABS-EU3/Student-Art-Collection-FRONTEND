import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import BrowseCard from './BrowseCard';
import Painting from '../../Assets/painting.jpg'
import Drawing from '../../Assets/drawing.jpg'
import Photography from '../../Assets/photography.jpg'
import Sculpture from '../../Assets/sculpture.jpg'

const BrowseContainer = styled.div`
    height: 350px;
    max-width: 1420px;
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    a {
        text-decoration: none;
        color: inherit;
    }
`
function Browse() {
    return (
        <BrowseContainer>
            <Link to='/painting'>
                <BrowseCard
                    image={Painting}
                    alt={"Painting"} />
            </Link>
            <Link to='/photography'>
                <BrowseCard
                    image={Photography}
                    alt={"Photography"} />
            </Link>
            <Link to='/sculpture'>
                <BrowseCard
                    image={Sculpture}
                    alt={"Sculpture"} />
            </Link>
            <Link to='/drawing'>
                <BrowseCard
                    image={Drawing}
                    alt={"Drawing"} />
            </Link>
        </BrowseContainer>
    )
}

export default Browse;
