import styled from 'styled-components';
// import HeroImage from '../../Assets/browsehero.jpg';

const HeroImage = 'https://res.cloudinary.com/dwz7ogm5l/image/upload/v1580979444/student-art/browsehero_ss6ybi.jpg'

export const StyledHero = styled.div`
width: 100%;
height: 250px;
background: url(${HeroImage});
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: ${props => props.theme.white};

    h1 {
        font-size: 5rem;
        font-weight: 550;
        letter-spacing: 0.2rem;

        @media(max-width: 750px) {
            font-size: 3.5rem;
        }
        @media(max-width: 500px) {
            width: 80%;
            font-size: 3rem;
            text-align: center;
        }

    }
`
