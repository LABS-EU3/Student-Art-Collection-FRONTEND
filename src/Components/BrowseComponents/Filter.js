import React, { useState } from 'react';
import { connect } from 'react-redux';
import { axiosWithBase } from '../../AxiosCustom';
import * as actionCreators from '../../store/Actions/actionCreators'

import { StyledHero, openBarStyling } from './FilterStyling';

function Filter(props) {
    const [filters, setFilters] = useState({ search: '', type: 'name' });

    const changeHandler = e => {
        setFilters({ ...filters, [e.target.name]: e.target.value })
    }

    const submit = () => {
        console.log(filters)

        axiosWithBase()
            .get(`/art/search?filter=${filters.type}&searchQuery=${filters.search}`)
            .then((res) => {
                props.fetchArt(res.data.art)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <StyledHero style={props.browseArtState.filterBarOpen ? openBarStyling : null}>
            <input type="text" name="search" onChange={changeHandler} value={filters.search} placeholder="Search by..." />
            <select value={filters.type} name="type" onChange={changeHandler}>
                <option value="name">Title</option>
                <option value="artist">Artist</option>
                <option value="medium">Medium</option>
                <option value="description">Description</option>
                <option value="style">Style</option>
            </select>
            <button onClick={submit}>Search</button>
        </StyledHero>
    )
}

export default connect(state => state, actionCreators)(Filter);