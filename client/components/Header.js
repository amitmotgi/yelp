import React, {PropTypes} from "react";

class Header extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const url = "https://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/de428323da1d/assets/img/logos/logo_desktop_small@2x.png";
    const imageStyle = {
      'margin-left': 'auto',
      'margin-right': 'auto',
      'display': 'block',
      'margin-bottom': '40px',
      'margin-top': '16px'
    };

    return (
      <img
        style={imageStyle}
        src={url}
      />
    );
  }
}

Header.propTypes = {
  // add propTypes
}

export default Header;
