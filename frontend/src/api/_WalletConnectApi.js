import WalletConnect from "@walletconnect/browser";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";

import * as walletConnectActions from "../store/walletconnect/walletConnectActions";

export class WalletConnectApi {
  setStore = store => {
    this.store = store;
  };

  initialize = () => {
    // Create a this.walletConnector
    this.walletConnector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org" // Required
    });

    // Check if connection is already established
    if (!this.walletConnector.connected) {
      // create new session
      this.walletConnector.createSession().then(() => {
        // get uri for QR Code modal
        const uri = this.walletConnector.uri;
        // display QR Code modal
        WalletConnectQRCodeModal.open(uri, () => {
          console.log("QR Code Modal closed");
        });
      });
    }

    // Subscribe to connection events
    this.walletConnector.on("connect", (error, payload) => {
      if (error) {
        throw error;
      }

      // Close QR Code Modal
      WalletConnectQRCodeModal.close();

      // Get provided accounts and chainId
      const {accounts, chainId, peerId} = payload.params[0];
      this.store.dispatch(walletConnectActions.connectSucceeded(accounts[0], chainId, peerId));
    });

    this.walletConnector.on("session_update", (error, payload) => {
      if (error) {
        throw error;
      }

      // Get updated accounts and chainId
      const {accounts, chainId, peerId} = payload.params[0];
      this.store.dispatch(walletConnectActions.connectSucceeded(accounts[0], chainId, peerId));
    });

    this.walletConnector.on("disconnect", (error, payload) => {
      if (error) {
        throw error;
      }

      this.store.dispatch(walletConnectActions.disconnected());

      // Delete this.walletConnector
    });
  };
}
