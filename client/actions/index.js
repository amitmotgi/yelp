import { polyfill } from 'es6-promise';
import fetch from 'isomorphic-fetch';

/**
 * TODO: find a better to initialize this polyfill();
 */
polyfill();

/**
 * @param {String} - near string to search on yelp
 * @param {String} - find string to search on yelp
 * @returns {Object} - json response with the search results
 */
export const getData = (near, find) => {
  return dispatch => {
    fetch('/search?near=' + near + '&find=' + find)
    .then(function(response) {
     if (response.status >= 400) {
       dispatch(fetchDataError());
       /* Alternatively if there was no action, just throw the error back */
       /* throw new Error("Bad response from server"); */
     }
     response.json().then((data) => {
       dispatch(fetchData(data));
     })
    });
  };
};

/**
 * @param {String} - data - near string to search on yelp
 * @returns {Object} - json object
 */
export const fetchData = (data) => {
  return {
    type: "FETCH_DATA",
    data
  }
};

/**
 * @returns {Object} - json object
 */
export const fetchDataError = () => {
  return {
    type: "FETCH_DATA_ERROR",
    err: 400
  }
};
