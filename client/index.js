//import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from "./container/root";
import store from "./store";

render(
  <Provider store={store}>
    <Root store={store} dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('root')
);
