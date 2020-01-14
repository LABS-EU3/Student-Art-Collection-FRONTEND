// action types that will be used in reducers.js

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

// APP

export const ERROR_ON_LOGIN = 'ERROR_ON_LOGIN';
export const RESET_ERROR_ON_LOGIN = 'RESET_ERROR_ON_LOGIN';
export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
export const EMPTY_LOGGED_IN_USER = 'EMPTY_LOGGED_IN_USER';

// REUSABLE STATES

// TO BE USED FOR ANY FORM. CAN BE USED TO SHOW SPINNER
export const IS_LOADING = 'IS_LOADING';
export const LOADING_FINISHED = 'LOADING_FINISHED';

//

export const SET_USER_INFO = 'SET_USER_INFO';

// user detail entries

export const SET_USER_DETAILS = 'SET_USER_DETAILS';
export const EMPTY_USER_DETAILS = 'EMPTY_USER_DETAILS';

// BROWSE ART 

export const TOGGLE_FILTER_BAR = 'TOGGLE_FILTER_BAR';
export const TOGGLE_VIEW_MODAL = 'TOGGLE_VIEW_MODAL';
export const FETCH_ART = 'FETCH_ART';
export const UPDATE_ART_DISPLAYED = 'UPDATE_ART_DISPLAYED';