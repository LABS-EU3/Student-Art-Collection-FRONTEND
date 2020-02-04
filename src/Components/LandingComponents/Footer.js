import React from 'react'
import styled from 'styled-components'

import Instagram from '../../Assets/instagram.png'
import Twitter from '../../Assets/twitter.png'
import Facebook from '../../Assets/facebook.png'

const FooterMain = styled.footer`
    font-size: 1.3rem;
    max-width: 1300px;
    border-top: 1px solid ${props => props.theme.lightGrey};
    height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    .sm-icons {
        display: flex;
        margin-bottom: 1rem;
        width: 80px;
        justify-content: space-between;

        .icon {
            width: 20px;
            height: 20px;

        img {
            max-width: 100%;
            height: auto;
        }
    }
`

function Footer() {
    return (
        <FooterMain>
            <div className="sm-icons">
               <div className="icon"> <img src={Twitter} alt="Twitter" /></div>
               <div className="icon"> <img src={Instagram} alt="Instagram" /></div>
               <div className="icon"> <img src={Facebook} alt="Facebook" /></div>
            </div>
            <div>©2019 artFunder</div>
        </FooterMain>
    )
}

export default Footer;
