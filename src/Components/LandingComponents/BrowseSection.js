import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import BrowseCard from './BrowseCard';
// import Painting from '../../Assets/painting.jpg'
// import Drawing from '../../Assets/drawing.jpg'
import Photography from '../../Assets/photography.jpg'
import Sculpture from '../../Assets/sculpture.jpg'

const Painting = 'https://res.cloudinary.com/dwz7ogm5l/image/upload/v1580979255/student-art/painting_lxi3tk.jpg'
const Drawing = 'https://res.cloudinary.com/dwz7ogm5l/image/upload/v1580979556/student-art/drawing_hkaiik.jpg'

const BrowseContainer = styled.div` 
    margin: 6rem auto;
    max-width: 1300px;
    border-top: 1px solid ${props => props.theme.lightGrey};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 1.7rem;
        color: ${props => props.theme.black};
        margin-top: 4rem;
    }

    .container-full{
     max-width: 1300px;
     margin: 1.5rem auto;
     display: flex;
     justify-content: space-evenly;

     @media(max-width: 930px){   
         flex-wrap: wrap;
    }

     @media(max-width: 628px){  
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: center; 
    }

        a {
        text-decoration: none;
        color: inherit;
        }
}
`
function Browse() {
    return (
            <BrowseContainer>
            <h1>Browse Art by Category</h1>
                <div className="container-full">
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
                </div>
            </BrowseContainer>
    )
}

export default Browse;
