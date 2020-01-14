import styled from 'styled-components';

export const StyledContainer = styled.div`
max-width: 1290px;
margin: 0 auto;
    .grid-row {
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
    }
`

export const StyledEmptyContainer = styled.div`
width: 100%;
height: 35vh;
display: flex;
justify-content: center;
align-items: center;

    h1 {
        font-size: 2rem;
        font-family: 'Roboto', sans-serif;
    }
`