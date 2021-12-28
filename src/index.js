import React from "react";
import ReactDOM from "react-dom";

import App from './App.js';

import { Provider } from "react-redux";
import store from './app/store'
import { saveState } from "./app/browser-storage";
import { debounce } from 'debounce'

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider) {

  console.log(provider)
  return new Web3(provider)

}

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

ReactDOM.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </Provider>,
  document.getElementById("root")
);
