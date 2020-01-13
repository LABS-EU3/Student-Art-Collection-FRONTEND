import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';

import BrowseHero from '../Components/BrowseComponents/BrowseHero';
import Filter from '../Components/BrowseComponents/Filter';

function BrowseArt(props) {
    return (
        <>
            <BrowseHero />
            <Filter/>
            <button onClick={() => props.openFilterBar(!props.filterBarOpen)}>Filter</button>
        </>
    )
}

export default connect(state => state, actionCreators)(BrowseArt);