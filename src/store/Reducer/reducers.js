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

const initialLogInError = {
  isError: false,
  errorMessage: ''
};

export function errorLoginReducer(logInError = initialLogInError, action) {
  switch (action.type) {
    case types.ERROR_ON_LOGIN:
      return {
        isError: true,
        errorMessage: action.payload.message
      };
    case types.RESET_ERROR_ON_LOGIN:
      return {
        isError: false,
        message: ''
      };
    default:
      return logInError;
  }
}

// reducer to keep track of whether User is waiting for axios login call to resolve

export function isLoadingReducer(isLoading = false, action) {
  switch (action.type) {
    case types.IS_LOADING:
      return true;
    case types.LOADING_FINISHED:
      return false;
    default:
      return isLoading;
  }
}

// SLICE OF STATE TO KEEP TRACK OF LOGGED IN USER

const initialLoggedInUser = {
  confirmed: '',
  _id: '',
  email: '',
  type: '',
  password: '',
  createdAt: '',
  updatedAt: '',
  __v: '',
  profile_picture: '',
  firstname: '',
  lastname: '',
  name: '',
  description: '',
  userId: ''
};

export function loggedInUserReducer(
  loggedInUser = initialLoggedInUser,
  action
) {
  switch (action.type) {
    case types.SET_LOGGED_IN_USER:
      return action.payload;
    case types.EMPTY_LOGGED_IN_USER:
      return initialLoggedInUser;
    default:
      return loggedInUser;
  }
}

const initialBrowseArtState = {
  filterBarOpen: false,
  artModalOpen: false,
  art: [],
  artSorted: [],
  artInModal: {},
  sortType: '',
  sortBy: '',
  searchQuery: '',
  filter: ''
};

export function browseArtReducer(state = initialBrowseArtState, action) {
  switch (action.type) {
    case types.TOGGLE_FILTER_BAR:
      return { ...state, filterBarOpen: action.payload };
    case types.TOGGLE_VIEW_MODAL:
      return { ...state, artModalOpen: action.payload };
    case types.FETCH_ART:
      return { ...state, art: action.payload, artSorted: action.payload };
    case types.UPDATE_ART_DISPLAYED:
      return { ...state, artSorted: action.payload };
    case types.SELECT_ART:
      return { ...state, artInModal: action.payload };
    case types.SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload.type,
        sortBy: action.payload.by
      };
    case types.SET_SEARCH_VALUES:
      return {
        ...state,
        searchQuery: action.payload.search,
        filter: action.payload.type
      };
    default:
      return state;
  }
}

const initialMessageState = {
  received: [],
  sent: [],
  notifications: 0
};

export function messageReducer(state = initialMessageState, action) {
  switch (action.type) {
    case types.RETRIEVE_INBOX_MESSAGES:
      return { ...state, received: action.payload };
    case types.RETRIEVE_SENT_MESSAGES:
      return { ...state, sent: action.payload };
    case types.SET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
}

const initialSchoolState = [];

export function browseSchoolReducer(state = initialSchoolState, action) {
  switch (action.type) {
    case types.FETCH_SCHOOLS:
      return action.payload;
    default:
      return state;
  }
}

const initialArtSelectedSchool = [];

export function artSelectedSchool(
  artSelectedSchool = initialArtSelectedSchool,
  action
) {
  switch (action.type) {
    case types.SET_ART_SELECTED_SCHOOL:
      return action.payload;
    default:
      return artSelectedSchool;
  }
}
