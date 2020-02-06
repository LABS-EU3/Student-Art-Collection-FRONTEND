import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import RecentCard from './RecentCard';
// import Recent1 from '../../Assets/recent1.jpg'
// import Recent2 from '../../Assets/recent2.png'
import Recent3 from '../../Assets/recent3.jpg'
// import Recent4 from '../../Assets/recent4.jpg'
const Recent1 = 'https://res.cloudinary.com/dwz7ogm5l/image/upload/v1580981489/student-art/recent1_vb32fc.jpg'
const Recent2 = 'https://res.cloudinary.com/dwz7ogm5l/image/upload/v1580981474/student-art/recent2_it9vgj.png'
const Recent4 = 'https://res.cloudinary.com/dwz7ogm5l/image/upload/v1580980853/student-art/recent4_e3wszd.jpg'

const RecentContainer = styled.div` 
    margin: 6rem auto;
    max-width: 1300px;
    border-top: 1px solid ${props => props.theme.lightGrey};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 1.7rem;
        color: ${props => props.theme.modalGrey};
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
function Recent() {
    return (
            <RecentContainer>
            <h1>Recently Listed Artwork</h1>
                <div className="container-full">
                    <Link to='/#'>
                        <RecentCard
                            image={Recent1}
                            alt={"Man in corner"}
                            title="Corner"
                            artist="James Grantham"
                            dimensions='45H x 45W'
                            price="£50" />
                    </Link>
                    <Link to='/#'>
                        <RecentCard
                            image={Recent2}
                            alt={"Homeless man"}
                            title="Hardship"
                            artist="Ruairidh Flint"
                            dimensions='20H x 45W'
                            price="£100"  />
                    </Link>
                    <Link to='/#'>
                        <RecentCard
                            image={Recent4}
                            alt={"Reflection of petrol puddle"}
                            title="Petrol Puddle"
                            artist="Pere Sola Claver"
                            dimensions='45H x 45W'
                            price="£50"  />
                    </Link>
                    <Link to='/#'>
                        <RecentCard
                            image={Recent3}
                            alt={"Apple"}
                            title="Granny Smith"
                            artist="Petar Scepanovic"
                            dimensions='95H x 55W'
                            price="£30"  />
                    </Link>
                </div>
            </RecentContainer>
    )
}

export default Recent;
