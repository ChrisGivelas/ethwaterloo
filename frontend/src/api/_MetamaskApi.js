import Web3 from "web3";

import * as metamaskActions from "../store/metamask/metamaskActions";

export class MetamaskApi {
  constructor(web3Api) {
    this.web3Api = web3Api;
  }

  setStore = store => {
    this.store = store;
  };

  initialize = () => {
    if (!window.ethereum) {
    } else {
      return window.ethereum.enable().then(accounts => {
        let pk = accounts[0];
        this.store.dispatch(metamaskActions.getPkSucceeded(pk));
        this.web3 = new Web3(window.ethereum);
        this.web3Api.setWeb3(this.web3);
        this.web3Api.setPublicAddress(pk);
        sessionStorage.setItem("pageUsingMetamask", true);
      });
    }
  };

  isPageUsingMetamask = () => {
    return JSON.parse(sessionStorage.getItem("pageUsingMetamask"));
  };

  getPublicAddress = () => {
    throw new Error("not implememted");
  };
}
