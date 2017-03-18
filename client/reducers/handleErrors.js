const handleErrors = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DATA_ERROR':
      return action.err;
    default:
      return state;
  }
};

export default handleErrors;
