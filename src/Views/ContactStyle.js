import styled from 'styled-components'

export const StyledContact = styled.div`
width: 100vw;
height: 90vh;
display: flex;
align-items: center;

    .contactContainer {
        width: 100vw;
        height: 70vh;
        display: flex;
        align-items: center;

        @media(max-width: 1000px){
            justify-content: center;
        }

        .contactLeft {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding-left: 150px;
            padding-right: 70px;
            padding-top: 40px;

            @media(max-width: 1000px){
                width: 80%;
                padding-right: 10px;
                padding-left: 0px;
                align-items: center;
            }


            h1 {
                font-size: 4rem;
                font-weight: 200;
                margin-bottom: 20px;
            }

            p {
                font-size: 1.5rem;
                margin-bottom: 4rem;
            }
        }

        .contactRight {
        width: 44%;
        height: 100%;

        @media(max-width: 1000px){
            display: none;
        }

        img {
            max-width: 100%;
            height: auto;
            margin-top: 30px;
        }
        }
    }
`

export const StyledForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const StyledSuccess = styled.div`
width: 380px;
height: 380px;
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: 1000px){
    width: 80%;
}

h3 {
    font-size: 2rem;
    padding-bottom: 2rem;
}
    img {
        max-width: 100%;
        height: auto;
    }
`
export const StyledSpinner = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`