// This file tests room tokens

var Web3        = require('web3');
web3            = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var Test = require('./configTokenTest.js.js');
var BigNumber = require('bignumber.js');



contract("Room Token Tests", async (accounts) => {
    var config;

    before('setup contract', async () => {

        config = await Test.Config(accounts);
    });
    it("test1: room can add owner", async function() {
        var canAddRoomOwner = true;
        try
        {   // Alice's account calls to register room
            await config.roomToken.registerRoom("Room1", {from: config.Alice});
            // Alice's account calls to be owner of Room1
            await config.roomToken.addRoomOwner("Room1", {from: config.Alice});

            // add two owners to room2
            await config.roomToken.registerRoom("Room2",{from: config.Bob});
            await config.roomToken.addRoomOwner("Room2", {from: config.Bob});
            await config.roomToken.addRoomOwner("Room2", {from: config.Carol});

            // add one owner to room1
            await config.roomToken.registerRoom("Room3",{from: config.contractOwner});
            await config.roomToken.addRoomOwner("Room3", {from: config.Carol});


        }catch(e)
        {   console.log("test1 error : ", e);
            canAddRoomOwner = false;
        }

        var numRooms = await config.roomToken.viewNumberOfRooms();
        console.log("number of rooms ", numRooms.toNumber())


        console.log("canAddRoomOwner ", canAddRoomOwner);
        assert.equal(canAddRoomOwner, true, "Error adding room owner");
        assert.equal(numRooms, 3, "3 rooms should be registered");

    });
    it("test2: check number of room owners for each room. ", async function() {
        var numRoom1Owner;
        var numRoom2Owner;
        var numRoom3Owner;


        try
        {
            numRoom1Owner = await config.roomToken.viewNumberOfRoomOwner("Room1");
            numRoom2Owner = await config.roomToken.viewNumberOfRoomOwner("Room2");
            numRoom3Owner = await config.roomToken.viewNumberOfRoomOwner("Room3");

        }catch(e)
        {

        }

        console.log("numRoom1Owner ", numRoom1Owner.toNumber());
        console.log("numRoom2Owner ", numRoom2Owner.toNumber());
        console.log("numRoom3Owner ", numRoom3Owner.toNumber());

        assert.equal(numRoom1Owner.toNumber(), 1, "Number of room owners for room 1 is incorrect");
        assert.equal(numRoom2Owner.toNumber(), 2, "Number of room owners for room 2 is incorrect");
        assert.equal(numRoom3Owner.toNumber(), 1, "Number of room owners for room 3 is incorrect");



    });
    it("test3: room owner cannot mint same tokens twice ", async function() {
        var canMint =  true;
        try
        {   // Alice mints tokens for Room1
            await config.roomToken.createRoomToken("Room1", 1, {from:config.Alice});
            await config.roomToken.createRoomToken("Room1", 1, {from:config.Alice});


        }catch(e)
        {   //console.log("test3 error", e);
            canMint = false;
        }

        assert.equal(canMint, false, "Same token cannot be minted twice");
    });
    it("test4: Only room owners can mint tokens for their room. ", async function() {
    var canMint =  true;
        try
        {   // Alice mints tokens for Room1
            await config.roomToken.createRoomToken("Room1", 1, {from:config.Bob});

        }catch(e)
        {   console.log("test4 error", e.name);
            canMint = false;
        }

        assert.equal(canMint, false, "If not room owner then cannot be minted twice");

    });
    it("test5: Check number of tokens minted for a room.", async function() {

        var numTokensInRoom = 0;
        try
        {
            numTokensInRoom = await config.roomToken.viewNumberOfTokensInRoom("Room1");

        }catch(e)
        {
            console.log("test5 error ", e);
        }

        console.log("numTokensInRoom ", numTokensInRoom.toNumber());
    });


});
