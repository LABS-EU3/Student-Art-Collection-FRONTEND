import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const CustomButton = styled(NavLink)`
	font-size: 2rem;
    font-family: 'Roboto';
    color: rgba(0,0,0,0.5);
    border-bottom: 1px solid white;
    padding-bottom: 0.3rem;
    width: 10rem;
    text-align: center;
    cursor: pointer;
    margin: 0 3rem;
	&:hover {
		color: black;
	}
	&:active {
        color: black;
	}
`;