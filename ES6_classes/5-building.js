export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (new.target !== Building) {
      Building.evacuationWarningMessage();
    }
  }

  set sqft(value) {
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }

  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
