let numbers = [];
let num = 0;
let total = 0;

do{
userInput = +prompt ('введите число');
numbers.push(userInput);
total += userInput;
}while(userInput);


console.log(numbers);
console.log('Общая сумма чисел равна ' + total);