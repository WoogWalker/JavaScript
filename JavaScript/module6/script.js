"use strict";

class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  addTopping(topping) {

    if (this._toppings.includes(topping)) {

    } else {
      this._toppings.push(topping);
    }

    // this._topping.includes(topping)
    // ? this._toppings
    // : this._toppings.push(topping);
  }

  removeTopping(topping) {
    this._toppings = this._toppings.filter(value =>
      value !== topping);
  }

  getTopping() {
    return this._toppings;
  }

  getSize() {
    return this._size;
  }

  getStuffing() {
    return this._stuffing;
  }

  calculatePrice() {
    const priceArr = this._toppings.map(x => Hamburger.TOPPINGS[x].price);
    priceArr.push(Hamburger.SIZES[this._size].price, Hamburger.STUFFINGS[this._stuffing].price);
    let price = priceArr.reduce((acc, prices) => acc + prices, 0);
    return price;
  }

  calculateCalories() {
    return (
      this.constructor.SIZES[this._size].calories
      + this.constructor.STUFFINGS[this._stuffing].calories
      + this._toppings.reduce((acc, value) =>
        acc + this.constructor.TOPPINGS[value].calories, 0))
  }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  }
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  }
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  }
};

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

console.log(hamburger);
// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SAUSE);

// Спросим сколько там калорий
console.log("Ham1 Calories: ", hamburger.calories);

// Сколько стоит?
console.log("Ham1 Price: ", hamburger.price);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А сколько теперь стоит?
console.log("Ham1 Price with sause: ", hamburger.price);
// console.log("Ham1 Calories with sause: ",hamburger.calories);

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Ham1. Hamburger has %d toppings", hamburger._toppings.length); // 1