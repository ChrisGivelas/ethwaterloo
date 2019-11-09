export class TestApi {
  setStore = store => {
    this.store = store;
  };

  test() {
    return Promise.resolve(1);
  }
}
