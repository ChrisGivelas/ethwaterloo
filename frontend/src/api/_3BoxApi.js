const Box = require("3box");

class Thread {
  constructor(name, space) {
    this.name = name;
    this.thread = space.joinThread(name, {
      ghost: true
    });

    this.posts = this.thread.then(thread => thread.getPosts());

    this.thread.onUpdate(() => {
      this.posts = this.thread.getPosts()
    })
  }

  getPosts = async () => {
    return await this.thread.getPosts();
  }

  addPost = async (post) => {
    await this.thread.post(post);
  }
}

class Space {
  constructor(name, box) {
    this.name = name;
    this.threads = {};
    this.syncDone = false;
    this.space = box.openSpace(name).then(space => {
      this.syncDone = space.syncDone;
      return space;
    });
  }

  joinThread = async threadName => {
    if (!this.threads[threadName]) {
      this.threads.threadName = new Thread(threadName, this.space);
    }
    return this.threads.threadName;
  };
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

  setStore = store => {
    this.store = store;
  };

  initialize = (addr, provider) => {
    this.addr = addr;
    this.spaces = {};
    this.syncDone = false;
    this.box = Box.openBox(addr, provider).then(box => {
      this.syncDone = box.syncDone;
      return box;
    });
  };

  openSpace = async spaceName => {
    if (!this.spaces[spaceName]) {
      this.spaces.spaceName = new Space(spaceName, this.box);
    }
    return this.spaces.spaceName;
  };
}
