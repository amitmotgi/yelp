import React, {Component, PropTypes} from 'react';
import classNames from "classNames";
import App from "../components/App.connect";

import apiResponse from "../../server/api";

class Root extends React.Component {

  /* Constructor - initialzing the state */
  constructor(props) {
    super(props);
  }

  render() {
    const {dispatch, store} = this.props;
    return (
      <div className="container-responsive">
        <App
          store={store}
          dispatch={dispatch}
        />
      </div>
    );
  }
}

Root.propTypes = {
  dispatch: PropTypes.func,
  store: PropTypes.func
}

export default Root;
