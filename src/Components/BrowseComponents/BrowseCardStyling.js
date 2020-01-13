import styled from 'styled-components';

export const StyledBox = styled.div`
max-height: auto;
flex-basis: 25%;
-ms-flex: auto;
width: 250px;
position: relative;
padding: 10px 20px;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;


    img {
     max-width: 100%;
     height: auto;
     margin-bottom: 1rem;

}

  @media(max-width: 1073px) {
      flex-basis: 33.33%;
      height: auto;

  }
  @media(max-width: 815px) {
      flex-basis: 50%;
      height: auto;

  }
  @media(max-width: 555px) {
      flex-basis: 100%;
      height: auto;
  }

  
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