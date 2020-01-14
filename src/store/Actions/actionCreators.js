import * as types from './actionTypes';
import { axiosWithBase } from '../../AxiosCustom'

// This is a dummy action to check that redux has been properly set. It can safely be deleted when starting to build the app

export function increment() {
  return {
    type: types.INCREMENT
  };
}

// This is a dummy action to check that redux has been properly set. It can safely be deleted when starting to build the app

export function decrement() {
  return {
    type: types.DECREMENT
  };
}

// This is a dummy action to check that redux has been properly set. It can safely be deleted when starting to build the app

export function reset() {
  return {
    type: types.RESET
  };
}

export function errorLogin(message) {
  return {
    type: types.ERROR_ON_LOGIN,
    payload: { message }
  };
}

export function resetErrorLogin() {
  return {
    type: types.RESET_ERROR_ON_LOGIN
  };
}

export function loadingStarted() {
  return {
    type: types.IS_LOADING
  };
}

export function loadingFinished() {
  return {
    type: types.LOADING_FINISHED
  };
}

// SET LOGGED IN USER HANDLER

export function setLoggedInUser(user) {
  return {
    type: types.SET_LOGGED_IN_USER,
    payload: user
  };
}

export function logOutUser() {
  return {
    type: types.EMPTY_LOGGED_IN_USER
  };
}

export function setUserDetails(user) {
  return {
    type: types.SET_USER_DETAILS,
    payload: user
  };
}


// GETTING SOLD COLLECTIONS

export const fetchCollectionsStart = () => ({
  type: types.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: types.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: types.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});


export const fetchCollectionsStartAsync = () => {
  return dispatch => {
  
  };
};
