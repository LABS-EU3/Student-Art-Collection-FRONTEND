import React from 'react'
import styled from 'styled-components'


const FooterMain = styled.footer`
    width: 100%;
    height: 100px;
    margin: 0 auto;

    div {
        margin: 0 auto;
        max-width: 1300px;
        border-top: 1px solid rgba(0,0,0,0.3)
    }
`

function Footer() {
    return (
        <FooterMain>
            <div></div>
        </FooterMain>
    )
}

export default Footer;
