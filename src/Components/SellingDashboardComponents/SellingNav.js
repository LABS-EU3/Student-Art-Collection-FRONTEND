import React from 'react'
import { NavLink } from 'react-router-dom'

import { DashNavStyle }  from './SellingNavStyle';

function SellingNav() {
    return (
        <DashNavStyle>
            <div>
                <nav>
                    <NavLink exact to='/selling'>Selling</NavLink>
                    <NavLink exact to='/selling/sold'>Sold</NavLink>
                    <NavLink to='/selling/messages'>Messages</NavLink>
                    <NavLink to='/selling/help'>Help</NavLink>
                    <button>Upload Art</button>
                    <NavLink to='/myaccount' id="arrow">⭠</NavLink>
                </nav>
            </div>
        </DashNavStyle>
    )
}

export default SellingNav