import React, {PropTypes} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import ItemListing from "./ItemListing";
import classNames from "classNames";

class App extends React.Component{

  /* Constructor initialzing the state */
  constructor(props) {
    super(props);
  }

  /*  */
  render() {
    const {dispatch, store} = this.props;
    // TODO: clean this super dirty hack
    const yData  = store.getState();
    const fData = yData && yData.yelpData[0] || {};

    return (
      <div>
        <i class='icon-spinner icon-spin icon-large'></i>

        {/* Header section */}
        <div className="row">
          <div className={classNames("col-xs-12 col-md-4")}></div>
          <div className={classNames("col-xs-12 col-md-4")}>
            <Header />
          </div>
          <div className={classNames("col-xs-12 col-md-4")}></div>
        </div>

        {/* Search input and trigger section */}
        <div className="row">
          <div className={classNames("col-xs-2 col-md-2")}></div>
          <div className={classNames("col-xs-10 col-md-8")}>
            <Search dispatch={dispatch} />
          </div>
          <div className={classNames("col-xs-2 col-md-2")}></div>
        </div>

        {/* section to render the response items */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <ItemListing dispatch={dispatch} yelpData={fData} />
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Footer section */}
        <div className="row">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  store: PropTypes.func
}

export default App;
