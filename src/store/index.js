import { combineReducers, compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// configuring react-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// connecting reducers and middleware to the store
const store = createStore(
    combineReducers({
        // inesert you reducer here
        user: (state= {user: 'vincent'}, action) =>{
            return state
        }
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store