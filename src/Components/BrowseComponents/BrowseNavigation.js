import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';

import { StyledBrowseNav } from './BrowseNavigationStyling';

function BrowseNavigation(props) {

    const changeHandler = (e) => {
        props.setSortBy(e.target.value);
    };

    return (
        <StyledBrowseNav>
            <div className="container">
                <button
                    onClick={() => props.toggleFilterBar(!props.browseArtState.filterBarOpen)}>
                    {props.browseArtState.filterBarOpen ? 'Hide' : 'Show'} Filters
            </button>
                <select value={props.browseArtState.filter} onChange={changeHandler}>
                    <option value="newest">Newest</option>
                    <option value="desc">Price High to Low</option>
                    <option value="asc">Price Low to High</option>
                </select>
            </div>
        </StyledBrowseNav>
    )
}

export default connect(state => state, actionCreators)(BrowseNavigation);