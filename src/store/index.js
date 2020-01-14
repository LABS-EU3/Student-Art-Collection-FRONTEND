import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../store/Reducer/reducers';

// PERSIST STATE UPON PAGE REFRESH
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// CONFIG STORAGE STATE

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loggedInUser']
};

// configuring react-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// connecting reducers and middleware to the store
// const store = createStore(
//   combineReducers({
//     count: reducers.countReducer,
//     logInError: reducers.errorLoginReducer,
//     isLoading: reducers.isLoadingReducer,
//     loggedInUserReducer: reducers.loggedInUserReducer
//   }),
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;

let masterReducer = {
  count: reducers.countReducer,
  logInError: reducers.errorLoginReducer,
  isLoading: reducers.isLoadingReducer,
  loggedInUser: reducers.loggedInUserReducer,
  itemsCollections: reducers.itemsCollectionReducer
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(masterReducer)
);

export let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export let persistor = persistStore(store);
