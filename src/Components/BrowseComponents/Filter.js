import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators'

import { StyledHero, openBarStyling } from './FilterStyling';

function Filter(props) {
    const [inputs, setInputs] = useState({ search: '', type: 'name' });

    const changeHandler = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const submit = () => {
        props.setSearchValues(inputs)
    }

    return (
        <StyledHero style={props.browseArtState.filterBarOpen ? openBarStyling : null}>
            <input type="text" name="search" onChange={changeHandler} value={inputs.search} placeholder="Search by..." />
            <select value={inputs.type} name="type" onChange={changeHandler}>
                <option value="name">Title</option>
                <option value="artistName">Artist</option>
                <option value="category">Category</option>
                <option value="medium">Medium</option>
                <option value="description">Description</option>
                <option value="style">Style</option>
            </select>
            <button onClick={submit}>Search</button>
        </StyledHero>
    )
}

export default connect(state => state, actionCreators)(Filter);