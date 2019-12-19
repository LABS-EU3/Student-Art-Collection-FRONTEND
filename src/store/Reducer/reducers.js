import * as types from '../Actions/actionTypes';

// set initial values for slices of state below
const initialCount = 0;

// slices of state reducers
export function countReducer(count = initialCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    case types.RESET:
      return 0;
    default:
      return count;
  }
}

// slice of state for error when logging in

export function errorLoginReducer(isError = false, action) {
  switch (action.type) {
    case types.ERROR_ON_LOGIN:
      return true;
      case types.RESET_ERROR_ON_LOGIN:
        return false;
    default:
      return isError;
  }
}
