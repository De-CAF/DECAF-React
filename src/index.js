import React from "react";
import ReactDOM from "react-dom";

import App from './App.js';

import { Provider } from "react-redux";
import store from './app/store'
import { saveState } from "./app/browser-storage";
import {debounce} from 'debounce'

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
