import {MetamaskApi} from "./_MetamaskApi";
import {TestApi} from "./_TestApi";
import {TorusApi} from "./_TorusApi";
import {WalletConnectApi} from "./_WalletConnectApi";
import {ThreeBoxApi} from "./_3BoxApi";
import {Web3Api} from "./_Web3Api";

export const web3Api = new Web3Api();

export const metamaskApi = new MetamaskApi(web3Api);
export const testApi = new TestApi();
export const torusApi = new TorusApi(web3Api);
export const walletConnectApi = new WalletConnectApi();
export const threeBoxApi = new ThreeBoxApi();
