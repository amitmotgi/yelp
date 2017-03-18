import get from "lodash/get";
import {connect} from "react-redux";
import App from "./App";

//component is re-rendered if any state change happens on "yelpData" 
const mapStateToProps = (state) => {
  return {
    yelpData: state.yelpData
  };
};

// mainly connecting the redux-react
const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
