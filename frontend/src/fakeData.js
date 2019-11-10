import faker from 'faker';

import user1Img from './views/front/img/user1.png';
import user2Img from './views/front/img/user2.png';

const ETHBoston = "ETHBoston";
const ETHDenver = "ETHDenver";
const ETHWaterloo = "ETHWaterloo";

const user1 = {
    src: user1Img,
    className: "user1",
    addr: "0x005b661B34Cb13E4023A26048eB6440a9e1d611B"
};

const user2 = {
    src: user2Img,
    className: "user2",
    addr: "0xB0ad425cA5792DD4C4Af9177c636e5b0e6c31999"
};

export const generateFakeRoom = (roomName, size) => {
    let room = {roomName, history: []};

    for(var i = 0; i < size; i++) {
        if(i % 2 === 0){
            room.history.push({
                ...user1,
                timestamp: faker.date.past(),
                text: faker.lorem.sentence()
            });
        } else {
            room.history.push({
                ...user2,
                timestamp: faker.date.past(),
                text: faker.lorem.sentence()
            });
        }
    }

    return room;
};

export default {
    ETHBoston: generateFakeRoom(ETHBoston, 5),
    ETHDenver: generateFakeRoom(ETHDenver, 5),
    ETHWaterloo: generateFakeRoom(ETHWaterloo, 5)
}