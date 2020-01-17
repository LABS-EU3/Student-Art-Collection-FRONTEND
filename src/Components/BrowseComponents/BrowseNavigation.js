import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';

import { StyledBrowseNav } from './BrowseNavigationStyling';

function BrowseNavigation(props) {

    const changeHandler = (e) => {
        if(e.target.value === 'newest'){
            props.setSortBy({by:"", type: "newest"});
        }
        else if (e.target.value === 'desc'){
            props.setSortBy({by:"price", type: "desc"});
        }
        else if (e.target.value === 'asc'){
            props.setSortBy({by:"price", type: "asc"});
        }
    };

    return (
        <StyledBrowseNav>
            <div className="container">
                <button
                    onClick={() => props.toggleFilterBar(!props.browseArtState.filterBarOpen)}>
                    {props.browseArtState.filterBarOpen ? 'Hide' : 'Show'} Filters
            </button>
                <select value={props.browseArtState.sortType} onChange={changeHandler}>
                    <option value="newest">Newest</option>
                    <option value="desc">Price High to Low</option>
                    <option value="asc">Price Low to High</option>
                </select>
            </div>
        </StyledBrowseNav>
    )
}

export default connect(state => state, actionCreators)(BrowseNavigation);