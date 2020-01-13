import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';

import { StyledBrowseNav } from './BrowseNavigationStyling';

function BrowseNavigation(props) {
    const [displayFilter, setDisplayFilter] = useState('newest');

    const changeHandler = (e) => {
        setDisplayFilter(e.target.value);
    }

    return (
        <StyledBrowseNav>
            <div className="container">
                <button
                    onClick={() => props.openFilterBar(!props.filterBarOpen)}>
                    {props.filterBarOpen ? 'Hide' : 'Show'} Filters
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