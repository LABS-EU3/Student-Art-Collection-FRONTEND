import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../store/Reducer/reducers';

// configuring react-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// connecting reducers and middleware to the store
const store = createStore(
  combineReducers({
    count: reducers.countReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
