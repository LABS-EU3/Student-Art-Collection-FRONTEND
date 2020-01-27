import styled from 'styled-components'

export const StyledSpinner = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const Upload = styled.input`
width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${props => props.theme.veryLightGrey};
  border-radius: 5px;

  @media(max-width: 500px) {
        width: 100%;
        padding: 20px;
    }

  @media(max-width: 330px) {
        width: 100%;
        padding: 10px;
    }
`