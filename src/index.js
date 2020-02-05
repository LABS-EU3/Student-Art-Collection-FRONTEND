import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import store from './store';
import { store, persistor } from './store/index';
import sw from './helpers/sw';
import ReactGA from 'react-ga';

// react-ga config
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID)
ReactGA.pageview(window.location.pathname + window.location.search);

sw();
const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
