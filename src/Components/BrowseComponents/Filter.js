import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators'

import { StyledHero, openBarStyling } from './FilterStyling';

function Filter(props) {
    return(
        <StyledHero style={props.browseArtState.filterBarOpen ? openBarStyling : null}>
            <h1>Filter</h1>
        </StyledHero>
    )
}

export default connect(state => state, actionCreators)(Filter);