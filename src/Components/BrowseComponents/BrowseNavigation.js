import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';

import { StyledBrowseNav } from './BrowseNavigationStyling';

function BrowseNavigation(props) {
    const [displayFilter, setDisplayFilter] = useState('newest');

    const changeHandler = (e) => {
        setDisplayFilter(e.target.value);
        if (e.target.value === 'price_asc') {
            const sorted = props.browseArtState.art.slice().sort((a, b) => a.price - b.price)
            props.updateArtDisplayed(sorted);
        }
        else if (e.target.value === 'price_desc') {
            const sorted = props.browseArtState.art.slice().sort((a, b) => b.price - a.price)
            props.updateArtDisplayed(sorted);
        }
        else {
            props.updateArtDisplayed(props.browseArtState.art);
        }
    };

    return (
        <StyledBrowseNav>
            <div className="container">
                <button
                    onClick={() => props.toggleFilterBar(!props.browseArtState.filterBarOpen)}>
                    {props.browseArtState.filterBarOpen ? 'Hide' : 'Show'} Filters
            </button>
                <select value={displayFilter} onChange={changeHandler}>
                    <option value="newest">Newest</option>
                    <option value="price_desc">Price High to Low</option>
                    <option value="price_asc">Price Low to High</option>
                </select>
            </div>
        </StyledBrowseNav>
    )
}

export default connect(state => state, actionCreators)(BrowseNavigation);