import React from "react";
import ReactDOM from "react-dom";
import App from "./App/index";
import { Provider } from 'react-redux';
import createStore from './reducer/create';

const store = createStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

// hot-reload
if (module.hot) {
  module.hot.accept();
}
