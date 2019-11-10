var RoomToken = artifacts.require('RoomToken');
var BigNumber = require('bignumber.js'); // is this needed?

//This file configures accounts for testing room token.
var Config = async function(accounts) {

    // return accounts for testing
    var owner = accounts[0];
    let roomToken = await RoomToken.new({from: owner});
    
    return {
        contractOwner   : owner,
        Alice           : accounts[1],
        Bob             : accounts[2],
        Carol           : accounts[3],
        participant1    : accounts[4],
        participant2    : accounts[5],
        participant3    : accounts[6],
        participant4    : accounts[7],
        participant5    : accounts[8],
        participant6    : accounts[9],
        roomToken       : roomToken    
    };

}

module.exports = {
    Config: Config

};
