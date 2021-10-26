import React from "react";
import ReactDOM from "react-dom";

import App from './App.js';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import {thunk} from 'redux-thunk'

import rootReducer from "store/reducers/rootReducer.js";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
