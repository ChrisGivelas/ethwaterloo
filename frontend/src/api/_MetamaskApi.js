import * as metamaskActions from "../store/metamask/metamaskActions";

export class MetamaskApi {
  constructor(web3Api) {
    this.web3Api = web3Api;
  }

  setStore = store => {
    this.store = store;
  };

  initialize = () => {
    if (typeof window.ethereum !== "undefined") {
      // handle no metamask
    } else {
      return window.ethereum.enable().then(accounts => {
        debugger;
        let account = accounts[0];
        this.store.dispatch(metamaskActions.getPkSucceeded(account));
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
