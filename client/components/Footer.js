import React, {PropTypes} from "react";

class Footer extends React.Component{
  render() {
    const footerStyle = {
      'height': "48px",
      'padding-top': '14px',
      "text-align": 'center',
      "color": 'grey'
    };

    return (
      <h6 style={footerStyle}>
        <small>Copyrights to Yelp 2017!</small>
      </h6>
    );
  }
}

Footer.propTypes = {
  // add propTypes
}
export default Footer;
