import styled from 'styled-components'

export const Button = styled.button`
  width: 70%;
  border: none;
  background-color: orange;
  color: white;
  height: 40px;
  font-size: 1.5rem;
  margin-top: 5px;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.0);
  cursor: pointer;
  outline: none;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  &:hover {
      opacity: 0.7;
      transition: opacity 0.2s ease-in-out;
  }
`