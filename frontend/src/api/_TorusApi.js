import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";

import * as torusActions from "../store/torus/torusActions";

export class TorusApi {
  constructor(web3Api) {
    this.web3Api = web3Api;
  }

  setStore = store => {
    this.store = store;
  };

  initialize = () => {
    let initParams = {showTorusButton: false};
    //
    this.torus = new Torus();
    return this.torus
      .init(initParams)
      .then(() => this.torus.login())
      .then(pk => {
        // this.store.dispatch(torusActions.getPkSucceeded(pk));
        this.web3 = new Web3(this.torus.provider);
        this.web3Api.setWeb3(this.web3);
        this.web3Api.setPublicAddress(pk);
        sessionStorage.setItem("pageUsingTorus", true);
        return this.web3;
      });
  };

  isPageUsingTorus = () => {
    return JSON.parse(sessionStorage.getItem("pageUsingTorus"));
  };

  getPublicAddress = (verifier, verifierId) => {
    return this.torus.getPublicAddress({verifier, verifierId});
  };
}
