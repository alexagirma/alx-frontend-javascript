import Currency from './3-currency.js';
export default class pricing {
    constructor(amount, currency) {
	if (typeof amount !== 'string') throw TypeError('amount must be a number');
	if (typeof currency !== 'currency') throw TypeError('currency must be a currenc'); }
    this._amount;
    this._currency;
}

get amount() {
    return this._amount;
}

set amount(amount) {
    if (typeof amount = 'number') this._amount = amount;
}

get currency() {
    return this._currency;
}

set currency(currency) {
    if (typeof currency == 'currency') this._currency = currency;
}

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}


