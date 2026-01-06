export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // When casting to a string, js calls toString internally
  toString() {
    return this._location;
  }

  // When casting to a number, js calls valueOf internally
  valueOf() {
    return this._size;
  }
}
