const faker = require('faker');

const ETHBoston = "ETHBoston";
const ETHDenver = "ETHDenver";
const ETHWaterloo = "ETHWaterloo";


export const generateFakeRoom = (roomName, size) => {
    let room = {roomName, history: []};

    for(var i = 0; i < size; i++){
        room.history.push({
            src: null,
            addr: null,
            timestamp: null,
            text: null
        });
    }

    return room;
};

export default {
    ETHBoston: generateFakeRoom(ETHBoston, 5),
    ETHDenver: generateFakeRoom(ETHDenver, 5),
    ETHWaterloo: generateFakeRoom(ETHWaterloo, 5)
}