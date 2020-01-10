import React from 'react';
import styled from 'styled-components';

const BackgroundStyled = styled.div`
width: 100vw;
height: 100vh;
display: flex;
background-color:red;
position: absolute;
z-index:99;
opacity: 0.5;`

function Modal () {
    return (
        <BackgroundStyled>
        <h1>Upload</h1>
        </BackgroundStyled>
    )
}

export default Modal;