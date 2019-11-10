import Web3 from "web3";
import RoomTokenArtifact from "../../build/contracts/RoomToken.json";

const App = {
  web3: null,
  account: null,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = RoomTokenArtifact.networks[networkId];
      this.meta = new web3.eth.Contract(
        RoomTokenArtifact.abi,
        deployedNetwork.address,
      );

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];
    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },

  setStatus: function(message) {
    const status = document.getElementById("status");
    status.innerHTML = message;
  },

  createRoomToken: async function() {

    const { createRoomToken } = this.meta.methods;
    const name = "RoomToBeNamed"; //document.getElementById("starName").value;
    const id = 1; //document.getElementById("starId").value;
    

    await registerRoom(name)       .send({from: this.account});
    await addRoomOwner(name)       .send({from: this.account});
    await createRoomToken(name, id).send({from: this.account});
    
    var numTokens = await viewNumberOfTokensInRoom(name).call({from: this.account});
    App.setStatus("RoomName: " + name +" has "+ numTokens + ".");

  },

};

window.App = App;

window.addEventListener("load", async function() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    await window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live",);
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"),);
  }

  App.start();
});
