import React, {PropTypes} from "react";
import classNames from "classNames";

class Category extends React.Component{
  constructor(props) {
    super(props);
    this.state = {type: ''};

    this.onCLickHandler = this.onCLickHandler.bind(this);
  }

  onCLickHandler(event) {
    // TODO add code..
  }

  render() {
    const categoryStyle = {
      'list-style': 'none',
      'text-align': 'center'
    };
    const itemStyle = {
      'display': 'inline-block'
    };
    const btnStyle = {
      'text-decoration': 'none'
    };
    return (
      <div>
        <ul style={categoryStyle}>
          <li style={itemStyle}>
            <button
              ref="Restaurants"
              onClick={(e) => this.onCLickHandler(e)}
              style={btnStyle}
              type="button"
              className={classNames("btn btn-link")}>
              Restaurants
            </button>
          </li>
          <li style={itemStyle}>
            <button
              style={btnStyle}
              type="button"
              className={classNames("btn btn-link")}>
              Nightlife
            </button>
          </li>
          <li style={itemStyle}>
            <button
              style={btnStyle}
              type="button"
              className={classNames("btn btn-link")}>
              HomeServices
            </button>
          </li>
          <li style={itemStyle}>
            <button
              style={btnStyle}
              type="button"
              className={classNames("btn btn-link")}>
              Delivery
            </button>
          </li>
        </ul>
      </div>
    );
  }

}

Category.propTypes = {
  // add propTypes
}

export default Category;
