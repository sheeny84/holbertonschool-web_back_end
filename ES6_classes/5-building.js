export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    // Check if this in a subclass instance
    if (this.constructor !== Building) {
      // Check if evacuationWarningMessage has been instantiated
      // i.e. if it is the same as Building then it has not
      if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
        // Call the default warning message
        this.evacuationWarningMessage();
      }
    }
  }

  set sqft(value) {
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
