const Box = require("3box");

class Space {
  constructor(name, box) {
    this.name = name;
    this.syncDone = false;
    this.space = box.openSpace(name).then(space => {
      this.syncDone = space.syncDone;
      return space;
    });
  }
}

export class ThreeBoxApi {
  static getProfile = async addr => {
    return await Box.getProfile(addr);
  };

  static listSpaces = async addr => {
    return await Box.listSpaces(addr);
  };

  static getSpace = async (addr, spaceName) => {
    return await Box.getSpace(addr, spaceName);
  };

  static getThread = async (spaceName, threadName, firstModerator, membersThread) => {
    return await Box.getThread(spaceName, threadName, firstModerator, membersThread);
  };

  setStore = (store) => {
    this.store = store;
  }

  initialize = (addr, provider) => {
    this.addr = addr;
    this.spaces = {};
    this.syncDone = false;
    this.box = Box.openBox(addr, provider).then(box => {
      this.syncDone = box.syncDone;
      return box;
    });
  }

  query = async (queryFunc, ...args) => {
    return await Promise.all([this.box, this.syncDone]).then(results => {
      return results[0][queryFunc](args);
    });
  };

  openSpace = async spaceName => {
    if (!this.spaces[spaceName]) {
      this.spaces.spaceName = new Space(spaceName, this.box);
    }
    return this.spaces.spaceName;
  };
}
