import React from 'react'
import styled from 'styled-components'


const FooterMain = styled.footer`
    max-width: 1300px;
    border-top: 1px solid rgba(0,0,0,0.3);
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
    }
`

function Footer() {
    return (
        <FooterMain>
            <div>©2019 artFunder</div>
        </FooterMain>
    )
}

export default Footer;
