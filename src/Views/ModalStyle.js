import styled from 'styled-components'

export const Button = styled.button`
  width: 70%;
  border: none;
  background-color: ${props => props.theme.buttonOrange};
  color: ${props => props.theme.white};
  height: 40px;
  font-size: 1.5rem;
  margin-top: 5px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  &:hover {
      opacity: 0.7;
      transition: opacity 0.2s ease-in-out;
  }
`