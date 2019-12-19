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

export function errorLogin() {
  return {
    type: types.ERROR_ON_LOGIN
  };
}

export function resetErrorLogin() {
  return {
    type: types.RESET_ERROR_ON_LOGIN
  };
}

export function isLoggingInLoading() {
  return {
    type: types.IS_LOGGING_IN
  };
}

export function loggingInFinished() {
  return {
    type: types.FINISHED_LOGGING_IN
  };
}
