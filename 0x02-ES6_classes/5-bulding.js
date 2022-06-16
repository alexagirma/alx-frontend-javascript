export default class Bulding {
    constructor(sqft) {
	if (this.constructor !== Bulding && typeof this.evacuationWarningMessage !== 'function') {
	    throw Error('Class extending Bulding must override evacuationWarningMessage',); }

	this._sqft = sqft;
    }

    get sqft() {
	return this._sqft;
    }
}
