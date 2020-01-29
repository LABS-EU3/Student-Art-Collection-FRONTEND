import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';
import { NavLink } from 'react-router-dom';
import UploadModal from '../../Views/Modal';
import { DashNavStyle }  from './SellingNavStyle';


function SellingNav(props) {

    const notification = props.messages.notifications > 0 ? <span>{props.messages.notifications}</span> : null;

    return (
        <DashNavStyle>
            <div>
                <nav>
                    <NavLink exact to='/selling/forsale'>Selling</NavLink>
                    <NavLink exact to='/selling/sold'>Sold</NavLink>
                    <NavLink to='/myaccount/messages' style={props.messages.notifications > 0 ? {color: 'red'} : null} >Messages {notification}</NavLink>
                    <NavLink to='/selling/help'>Help</NavLink>
                    <UploadModal/>
                    <NavLink to='/myaccount' id="arrow">⭠</NavLink>
                </nav>
            </div>
        </DashNavStyle>
    )
}

export default connect(state => state, actionCreators)(SellingNav);