import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";

export class TorusApi {
  setStore = store => {
    this.store = store;
  };

  initialize = () => {
    this.torus = new Torus();
    return this.torus
      .init()
      .then(() => this.torus.login())
      .then(() => {
        this.web3 = new Web3(this.torus.provider);
        sessionStorage.setItem("pageUsingTorus", true);
        return this.web3;
      });
  };

  isPageUsingTorus = () => {
    return JSON.parse(sessionStorage.getItem("pageUsingTorus"));
  };

  getPublicAddress = () => {
    return this.torus.getPublicAddress({verifier: "google", verifierId: "chai@tor.us"});
  };
}
