import { combineReducers } from 'redux';
import yelpData from './yelpData';
import handleErrors from './handleErrors';

const yelpApp = combineReducers({
  yelpData,
  handleErrors
});

export default yelpApp;
