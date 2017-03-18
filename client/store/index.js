import 'babel-polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import yelpApp from '../reducers';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options if needed
});

/* creating a single store which will be used to manage the Apps state */
const store = createStore(
  yelpApp,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
);

export default store;
