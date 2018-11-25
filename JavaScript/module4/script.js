const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

function Cashier(name, productDatabase) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;
  this.totalSum = 0;

  this.getCustomerMoney = function (value){
    this.customerMoney = value;
  }
  
  this.countTotalPrice = function (order){
    for(const key in order){
      this.totalSum += order[key] * this.productDatabase[key];
    }
    return this.totalSum;
  }

  this.countChange = function (totalPrice){
    let moneyChange = this.customerMoney - totalPrice;
    return moneyChange;
  }

  this.onSuccess = function (change = moneyChange){

    
    if (change < 0){
      this.onError();
    }else if(change >= 0){
      console.log(`Спасибо за покупку, ваша сдача ${change}!`);
    }
  }

  this.onError = function (){
      console.log('Очень жаль, вам не хватает денег на покупки');
  }

  this.reset = function(){
    this.customerMoney = 0;
  }
}

const mango = new Cashier('Mango', products);
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0
const totalPrice = mango.countTotalPrice(order);
console.log(totalPrice);  // 110
let result = mango.getCustomerMoney(300);
console.log(mango.customerMoney); // 300
const change = mango.countChange(totalPrice);
console.log(change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
  // При успешном обслуживании вызываем метод onSuccess
 mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
 // При неудачном обслуживании вызываем метод onError   
 mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0