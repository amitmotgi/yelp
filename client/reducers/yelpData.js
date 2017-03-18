/**
 * Pure reducer method for handling Yelp Data
 * @param - {state} - {Object} - State tree
 * @param - {action} - {Object} - Type of action
 * @returns - {Object} - Updated State tree
 */
const yelpData = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return [
        action.data
      ];
    default:
      return state;
  }
};

export default yelpData;

/* Alternatively we could something like this also.. */
// import { handleActions } from "redux-actions";
//
// const receiveData = (state = {}, action) => action.data;
//
// export default handleActions({
//   ['FETCH_DATA']: receiveData,
//   ['FETCH_DATA_ERROR']: (state = {}) => {
//     return {
//       ...state,
//       isError: true
//     };
//   }
// }, null);
