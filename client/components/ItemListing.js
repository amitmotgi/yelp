import React, {PropTypes} from "react";
import get from "lodash/fp/get";
import _ from "lodash";
import classNames from  "classNames";

class ItemListing extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    const {yelpData} = this.props;
    const items = {};
    const item = {
      'border-bottom': '1px solid #e6e6e6',
      'list-style': 'none',
      'height': '100px',
      'margin-bottom': '10px',
      'padding-left': '0px'
    };
    const borderStyle = {
      'margin': '0px',
      'padding': '0px'
    };
    const imageStyle = {
      'margin-top': '70px'
    };

    const businesses = get("businesses")(yelpData);

    if (!businesses) {
      return null;
    }

    return (
      <div style={items}>
        <ul style={borderStyle}>
          {
            businesses.map((business) => {
              return (
                <li style={item}>
                  <div className="col-md-2">
                    <img src={business.image_url} height="100px" width="100px" />
                  </div>
                  <div className="col-md-2">
                    <button type="button" className={classNames("btn btn-link")}>{business.name}</button>
                  </div>
                  <div style={imageStyle} className="col-md-2">
                    <img src={business.rating_img_url} />
                  </div>
                  <div className="col-md-1">
                    <img src={business.snippet_image_url} height="25px" width="25px" />
                  </div>
                  <div className="col-md-5">
                    <p>{business.snippet_text}</p>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

ItemListing.displayName = "ItemListing";

ItemListing.propTypes = {
  dispatch: PropTypes.func,
  yelpData: PropTypes.Object
}

export default ItemListing;
