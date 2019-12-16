import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../state/reducers';

// add your slices of state here
const masterReducer = combineReducers({
  count: reducers.countReducer
});

// store
const store = createStore(
  masterReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
