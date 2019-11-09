const Box = require("3box");

export class PublicBox {
  static getProfile = async addr => {
    return await Box.getProfile(addr);
  };

  static getAddressSpaces = async addr => {
    return await Box.listSpaces(addr);
  };

  static getAddressSpace = async (addr, spaceName) => {
    return await Box.getSpace(addr, spaceName);
  };

  static getThread = async (spaceName, threadName, firstModerator, membersThread) => {
    return await Box.getThread(spaceName, threadName, firstModerator, membersThread);
  };
}

export class Space {
    constructor(name, box) {
      this.name = name;
      this.syncDone = false;
      this.space = box.openSpace(name).then(space => {
        this.syncDone = space.syncDone;
        return space;
      });
    }

    querySpace = async (queryFunc, ...args) => {
      return await Promise.all([this.space, this.syncDone]).then(results => {
        return results[0][queryFunc](args);
      });
    };
  }

export class PrivateBox {
  constructor(addr) {
    this.addr = addr;
    this.spaces = {};
    this.syncDone = false;
    this.box = Box.openBox(addr, window.web3.currentProvider).then(box => {
      this.syncDone = box.syncDone;
      return box;
    });
  }

  queryBox = async (queryFunc, ...args) => {
    return await Promise.all([this.box, this.syncDone]).then(results => {
      return results[0][queryFunc](args);
    });
  };

  openSpace = async spaceName => {
    if (!spaces[spaceName]) {
      this.spaces.spaceName = new Space(spaceName, this.box);
    }
    return this.spaces.spaceName;
  };
}
