import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators'

import { StyledHero, openBarStyling } from './FilterStyling';

function Filter(props) {
    return(
        <StyledHero style={props.browseArtState.filterBarOpen ? openBarStyling : null}>
            <input type="text" placeholder="Search by..." />
            <select value="name">
                <option value="name">Title</option>
                <option value="artist">Artist</option>
                <option value="medium">Medium</option>
                <option value="description">Description</option>
                <option value="style">Style</option>
            </select>
            <button>Search</button>
        </StyledHero>
    )
}

export default connect(state => state, actionCreators)(Filter);