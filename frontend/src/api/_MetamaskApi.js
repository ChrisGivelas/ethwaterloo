class MetamaskApi {
  constructor(web3Api) {
    this.web3Api = web3Api;
  }

  setStore = store => {
    this.store = store;
  };

  initialize = () => {
    if (typeof window.ethereum !== "undefined") {
    } else {
      return window.ethereum.enable();
    }
  };
}
