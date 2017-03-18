import React, {PropTypes} from "react";
import classNames from "classNames";
import Category from "./Category";

import {getData} from "../actions";

class Search extends React.Component {

  /* initialzing the props and state for the component */
  constructor(props) {
    super(props);
    this.state = {valueFind: '', valueNear: ''};

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOnChangeFind = this.handleOnChangeFind.bind(this);
    this.handleOnChangeNear = this.handleOnChangeNear.bind(this);
  }

  handleOnChangeFind(event) {
    this.setState({valueFind: event.target.value});
  }

  handleOnChangeNear(event) {
    this.setState({valueNear: event.target.value});
  }

  spinner(show) {
    if (show) {
      <i className={classNames("fa fa-spinner fa-spin")} ></i>
    } else {
      return null;
    }
  }

  handleFormSubmit(event) {
    const {dispatch} = this.props;
    const valueFind = this.state.valueFind;
    const valueNear = this.state.valueNear;

    event.preventDefault();

    /* dispatch the action only if the search criteria is met */
    if (valueFind) {
      /* ready to dispatch actions */
      dispatch(getData(valueFind, valueNear));
    }
  }

  render() {
    const {dispatch} = this.props;
    const findStyle = {
      'width': '50%',
      "display": "inline-block",
      "margin-right": "10px"
    };
    const nearStyle = {
      'width': '35%',
      "display": "inline-block",
      "margin-right": "10px"
    };

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            style={findStyle}
            onChange={this.handleOnChangeFind}
            type="text"
            className="form-control"
            placeholder="Find"
            ref="find"
          />
          <input
            style={nearStyle}
            onChange={this.handleOnChangeNear}
            type="text"
            className="form-control"
            placeholder="Near San Francisco"
            ref="near"
          />
          <input
            type="submit"
            className="btn btn-primary float-right"
            value="Search"/>
        </form>
        <Category />
      </div>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func,
  yelpData: PropTypes.Object
}

export default Search;
