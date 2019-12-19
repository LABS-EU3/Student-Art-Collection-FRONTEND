import * as types from './actionTypes';

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
  debugger;
  return {
    type: types.SET_LOGGED_IN_USER,
    payload: user
  };
}


